// Waks Digital Solutions API
// Connects to cPanel MySQL/MariaDB database

require('dotenv').config();

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const WEBSITE_KNOWLEDGE = require('./website-knowledge');

const app = express();
const PORT = process.env.PORT || 3000;

// ==================== VALIDATE REQUIRED ENV VARS ====================
const REQUIRED_ENV = ['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASSWORD', 'JWT_SECRET'];
const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
  console.error(`[FATAL] Missing required environment variables: ${missingEnv.join(', ')}`);
  process.exit(1);
}

// ==================== MIDDLEWARE ====================
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'https://waksdigital.co.ke',
  'https://www.waksdigital.co.ke',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:8080',
  'http://127.0.0.1:8080',
  'http://localhost:3000',
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        callback(null, '*');
      } else if (allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error(`CORS policy: origin ${origin} not allowed`));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());

// ==================== CORS PREFLIGHT HANDLER ====================
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://www.waksdigital.co.ke');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(204);
});

// ==================== DATABASE ====================
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Verify DB connection on startup
pool.getConnection()
  .then(connection => {
    console.log('[DB] Connected successfully');
    connection.release();
  })
  .catch(err => {
    console.error('[DB] Failed to connect:', err.message);
    process.exit(1);
  });

// ==================== HELPERS ====================
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '7d';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
const RESET_TOKEN_EXPIRY_MINUTES = 60;
const SMTP_CONFIGURED = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.EMAIL_FROM);

const transporter = SMTP_CONFIGURED
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

const generateResetToken = () => crypto.randomBytes(32).toString('hex');

const sendResetLinkEmail = async (email, resetUrl) => {
  if (!transporter) {
    console.warn('[AUTH] SMTP not configured. Reset link: %s', resetUrl);
    return;
  }

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Waks Digital password reset',
    html: `
      <p>Hi,</p>
      <p>Click the link below to reset your Waks Digital password:</p>
      <p><a href="${resetUrl}">Reset your password</a></p>
      <p>If you did not request this, you can ignore this email.</p>
      <p>This link expires in ${RESET_TOKEN_EXPIRY_MINUTES} minutes.</p>
    `,
  });
};

/**
 * Wrap async route handlers to catch errors automatically.
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

/**
 * Send a consistent error response.
 */
const sendError = (res, status, message) => res.status(status).json({ error: message });

/**
 * Middleware: verify JWT and attach user to req.
 */
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(res, 401, 'Missing or malformed Authorization header');
  }
  const token = authHeader.slice(7);
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return sendError(res, 401, 'Invalid or expired token');
  }
};

const getUserRole = async (userId) => {
  const [rows] = await pool.query('SELECT role FROM user_roles WHERE user_id = ?', [userId]);
  return rows[0]?.role || 'user';
};

const authenticateAdmin = [
  authenticate,
  asyncHandler(async (req, res, next) => {
    const role = await getUserRole(req.user.userId);
    if (role !== 'admin') {
      return sendError(res, 403, 'Admin access required');
    }
    next();
  }),
];

/**
 * Basic field validator — returns list of missing field names.
 */
const requireFields = (body, fields) => fields.filter((f) => body[f] === undefined || body[f] === null || body[f] === '');

// ==================== BLOG POSTS ====================
app.get(
  '/api/blog_posts',
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM blog_posts ORDER BY created_at DESC');
    res.json(rows);
  })
);

app.get(
  '/api/blog_posts/:id',
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM blog_posts WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Blog post not found');
    res.json(rows[0]);
  })
);

app.post(
  '/api/blog_posts',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['title', 'slug', 'content', 'author', 'status']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { title, slug, content, excerpt, featured_image, author, category, tags, status, published_at } = req.body;
    const [result] = await pool.query(
      `INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, author, category, tags, status, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, slug, content, excerpt ?? null, featured_image ?? null, author, category ?? null, tags ?? null, status, published_at ?? null]
    );
    const [rows] = await pool.query('SELECT * FROM blog_posts WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  })
);

app.put(
  '/api/blog_posts/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['title', 'slug', 'content', 'author', 'status']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { title, slug, content, excerpt, featured_image, author, category, tags, status, published_at } = req.body;
    const [result] = await pool.query(
      `UPDATE blog_posts
       SET title=?, slug=?, content=?, excerpt=?, featured_image=?,
           author=?, category=?, tags=?, status=?, published_at=?, updated_at=NOW()
       WHERE id=?`,
      [title, slug, content, excerpt ?? null, featured_image ?? null, author, category ?? null, tags ?? null, status, published_at ?? null, req.params.id]
    );
    const [rows] = await pool.query('SELECT * FROM blog_posts WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Blog post not found');
    res.json(rows[0]);
  })
);

app.delete(
  '/api/blog_posts/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT id FROM blog_posts WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Blog post not found');
    await pool.query('DELETE FROM blog_posts WHERE id = ?', [req.params.id]);
    res.json({ message: 'Blog post deleted' });
  })
);

// ==================== RECENT PROJECTS ====================
app.get(
  '/api/recent_projects',
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM recent_projects ORDER BY created_at DESC');
    res.json(rows);
  })
);

app.get(
  '/api/recent_projects/:id',
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM recent_projects WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Project not found');
    res.json(rows[0]);
  })
);

app.post(
  '/api/recent_projects',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['title', 'slug', 'description']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { title, slug, description, image, category, client, link, featured, published } = req.body;
    const [result] = await pool.query(
      `INSERT INTO recent_projects (title, slug, description, image, category, client, link, featured, published)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, slug, description, image ?? null, category ?? null, client ?? null, link ?? null, featured ?? false, published ?? true]
    );
    const [rows] = await pool.query('SELECT * FROM recent_projects WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  })
);

app.put(
  '/api/recent_projects/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['title', 'slug', 'description']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { title, slug, description, image, category, client, link, featured, published } = req.body;
    await pool.query(
      `UPDATE recent_projects
       SET title=?, slug=?, description=?, image=?, category=?,
           client=?, link=?, featured=?, published=?, updated_at=NOW()
       WHERE id=?`,
      [title, slug, description, image ?? null, category ?? null, client ?? null, link ?? null, featured ?? false, published ?? true, req.params.id]
    );
    const [rows] = await pool.query('SELECT * FROM recent_projects WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Project not found');
    res.json(rows[0]);
  })
);

app.delete(
  '/api/recent_projects/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT id FROM recent_projects WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Project not found');
    await pool.query('DELETE FROM recent_projects WHERE id = ?', [req.params.id]);
    res.json({ message: 'Project deleted' });
  })
);

// ==================== HEALTH CHECK ====================
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ==================== TICKETS ====================
app.get(
  '/api/tickets',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM tickets ORDER BY created_at DESC');
    res.json(rows);
  })
);

app.get(
  '/api/tickets/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM tickets WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Ticket not found');
    res.json(rows[0]);
  })
);

app.post(
  '/api/tickets',
  authenticate,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['subject', 'description', 'priority']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { subject, description, priority } = req.body;
    const user_id = req.user.userId;
    const [result] = await pool.query(
      `INSERT INTO tickets (user_id, subject, description, priority, status)
       VALUES (?, ?, ?, ?, 'open')`,
      [user_id, subject, description, priority]
    );
    const [rows] = await pool.query('SELECT * FROM tickets WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  })
);

app.put(
  '/api/tickets/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['subject', 'description', 'priority', 'status']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { subject, description, priority, status } = req.body;
    await pool.query(
      `UPDATE tickets
       SET subject=?, description=?, priority=?, status=?, updated_at=NOW()
       WHERE id=?`,
      [subject, description, priority, status, req.params.id]
    );
    const [rows] = await pool.query('SELECT * FROM tickets WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Ticket not found');
    res.json(rows[0]);
  })
);

app.delete(
  '/api/tickets/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT id FROM tickets WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Ticket not found');
    await pool.query('DELETE FROM tickets WHERE id = ?', [req.params.id]);
    res.json({ message: 'Ticket deleted' });
  })
);

// ==================== USER ROLES ====================
app.get(
  '/api/user_roles',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM user_roles ORDER BY created_at DESC');
    res.json(rows);
  })
);

app.get(
  '/api/user_roles/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM user_roles WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'User role not found');
    res.json(rows[0]);
  })
);

app.post(
  '/api/user_roles',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['user_id', 'role']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { user_id, role } = req.body;
    const [result] = await pool.query(
      'INSERT INTO user_roles (user_id, role) VALUES (?, ?)',
      [user_id, role]
    );
    const [rows] = await pool.query('SELECT * FROM user_roles WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  })
);

app.put(
  '/api/user_roles/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['role']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { role } = req.body;
    await pool.query(
      'UPDATE user_roles SET role=?, updated_at=NOW() WHERE id=?',
      [role, req.params.id]
    );
    const [rows] = await pool.query('SELECT * FROM user_roles WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'User role not found');
    res.json(rows[0]);
  })
);

app.get(
  '/api/tickets/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM tickets WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Ticket not found');
    res.json(rows[0]);
  })
);

app.post(
  '/api/tickets',
  authenticate,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['subject', 'description', 'priority']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { subject, description, priority } = req.body;
    const user_id = req.user.userId;
    const [result] = await pool.query(
      `INSERT INTO tickets (user_id, subject, description, priority, status)
       VALUES (?, ?, ?, ?, 'open')`,
      [user_id, subject, description, priority]
    );
    const [rows] = await pool.query('SELECT * FROM tickets WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  })
);

app.put(
  '/api/tickets/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['subject', 'description', 'priority', 'status']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { subject, description, priority, status } = req.body;
    await pool.query(
      `UPDATE tickets
       SET subject=?, description=?, priority=?, status=?, updated_at=NOW()
       WHERE id=?`,
      [subject, description, priority, status, req.params.id]
    );
    const [rows] = await pool.query('SELECT * FROM tickets WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Ticket not found');
    res.json(rows[0]);
  })
);

app.delete(
  '/api/tickets/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT id FROM tickets WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'Ticket not found');
    await pool.query('DELETE FROM tickets WHERE id = ?', [req.params.id]);
    res.json({ message: 'Ticket deleted' });
  })
);

// ==================== USER ROLES ====================
app.get(
  '/api/user_roles',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM user_roles ORDER BY created_at DESC');
    res.json(rows);
  })
);

app.get(
  '/api/user_roles/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM user_roles WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'User role not found');
    res.json(rows[0]);
  })
);

app.post(
  '/api/user_roles',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['user_id', 'role']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { user_id, role } = req.body;
    const [result] = await pool.query(
      'INSERT INTO user_roles (user_id, role) VALUES (?, ?)',
      [user_id, role]
    );
    const [rows] = await pool.query('SELECT * FROM user_roles WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  })
);

app.put(
  '/api/user_roles/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['role']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { role } = req.body;
    await pool.query(
      'UPDATE user_roles SET role=?, updated_at=NOW() WHERE id=?',
      [role, req.params.id]
    );
    const [rows] = await pool.query('SELECT * FROM user_roles WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'User role not found');
    res.json(rows[0]);
  })
);

app.delete(
  '/api/user_roles/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT id FROM user_roles WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'User role not found');
    await pool.query('DELETE FROM user_roles WHERE id = ?', [req.params.id]);
    res.json({ message: 'User role deleted' });
  })
);
app.get(
  '/api/tickets',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const result = await pool.query('SELECT * FROM tickets ORDER BY created_at DESC');
    res.json(result.rows);
  })
);

app.get(
  '/api/tickets/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const result = await pool.query('SELECT * FROM tickets WHERE id = $1', [req.params.id]);
    if (!result.rows[0]) return sendError(res, 404, 'Ticket not found');
    res.json(result.rows[0]);
  })
);

app.post(
  '/api/tickets',
  authenticate,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['subject', 'description', 'priority']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { subject, description, priority } = req.body;
    const user_id = req.user.userId;
    const result = await pool.query(
      `INSERT INTO tickets (user_id, subject, description, priority, status)
       VALUES ($1, $2, $3, $4, 'open') RETURNING *`,
      [user_id, subject, description, priority]
    );
    res.status(201).json(result.rows[0]);
  })
);

app.put(
  '/api/tickets/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['subject', 'description', 'priority', 'status']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { subject, description, priority, status } = req.body;
    const result = await pool.query(
      `UPDATE tickets
       SET subject=$1, description=$2, priority=$3, status=$4, updated_at=NOW()
       WHERE id=$5 RETURNING *`,
      [subject, description, priority, status, req.params.id]
    );
    if (!result.rows[0]) return sendError(res, 404, 'Ticket not found');
    res.json(result.rows[0]);
  })
);

app.delete(
  '/api/tickets/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const check = await pool.query('SELECT id FROM tickets WHERE id = $1', [req.params.id]);
    if (!check.rows[0]) return sendError(res, 404, 'Ticket not found');
    await pool.query('DELETE FROM tickets WHERE id = $1', [req.params.id]);
    res.json({ message: 'Ticket deleted' });
  })
);

// ==================== USER ROLES ====================
app.get(
  '/api/user_roles',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const result = await pool.query('SELECT * FROM user_roles ORDER BY created_at DESC');
    res.json(result.rows);
  })
);

app.get(
  '/api/user_roles/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const result = await pool.query('SELECT * FROM user_roles WHERE id = $1', [req.params.id]);
    if (!result.rows[0]) return sendError(res, 404, 'User role not found');
    res.json(result.rows[0]);
  })
);

app.post(
  '/api/user_roles',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['user_id', 'role']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { user_id, role } = req.body;
    const result = await pool.query(
      'INSERT INTO user_roles (user_id, role) VALUES ($1, $2) RETURNING *',
      [user_id, role]
    );
    res.status(201).json(result.rows[0]);
  })
);

app.put(
  '/api/user_roles/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['role']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { role } = req.body;
    const result = await pool.query(
      'UPDATE user_roles SET role=$1, updated_at=NOW() WHERE id=$2 RETURNING *',
      [role, req.params.id]
    );
    if (!result.rows[0]) return sendError(res, 404, 'User role not found');
    res.json(result.rows[0]);
  })
);

app.delete(
  '/api/user_roles/:id',
  authenticateAdmin,
  asyncHandler(async (req, res) => {
    const [rows] = await pool.query('SELECT id FROM user_roles WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return sendError(res, 404, 'User role not found');
    await pool.query('DELETE FROM user_roles WHERE id = ?', [req.params.id]);
    res.json({ message: 'User role deleted' });
  })
);

// ==================== AUTHENTICATION ====================
app.post(
  '/api/auth/register',
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['email', 'password']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { email, password } = req.body;

    if (password.length < 8) {
      return sendError(res, 400, 'Password must be at least 8 characters');
    }

    const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return sendError(res, 409, 'An account with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const [result] = await pool.query(
      'INSERT INTO users (email, password_hash, created_at) VALUES (?, ?, NOW())',
      [email, hashedPassword]
    );

    const [users] = await pool.query('SELECT id, email FROM users WHERE id = ?', [result.insertId]);
    const token = jwt.sign({ userId: result.insertId, email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    res.status(201).json({ user: users[0], session: { access_token: token } });
  })
);

app.post(
  '/api/auth/login',
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['email', 'password']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { email, password } = req.body;

    const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    // Use a generic message to avoid leaking whether the email exists
    if (result.length === 0) {
      return sendError(res, 401, 'Invalid email or password');
    }

    const user = result[0];
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return sendError(res, 401, 'Invalid email or password');
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    res.json({ user: { id: user.id, email: user.email }, session: { access_token: token } });
  })
);

app.post(
  '/api/auth/google',
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['id_token']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { id_token: idToken } = req.body;
    const verifyUrl = `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`;
    const googleResponse = await fetch(verifyUrl);

    if (!googleResponse.ok) {
      return sendError(res, 401, 'Invalid Google token');
    }

    const googleData = await googleResponse.json();
    const email = googleData.email;
    const emailVerified = googleData.email_verified;
    const sub = googleData.sub;

    if (!email || emailVerified !== 'true') {
      return sendError(res, 401, 'Google account email is not verified');
    }

    const [existing] = await pool.query('SELECT id, email, password_hash FROM users WHERE email = ?', [email]);
    let user;

    if (existing.length > 0) {
      user = existing[0];
    } else {
      const randomPassword = await bcrypt.hash(`${sub}-${Date.now()}`, 12);
      const [result] = await pool.query(
        'INSERT INTO users (email, password_hash, created_at) VALUES (?, ?, NOW())',
        [email, randomPassword]
      );
      const [rows] = await pool.query('SELECT id, email FROM users WHERE id = ?', [result.insertId]);
      user = rows[0];
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    res.json({ user: { id: user.id, email: user.email }, session: { access_token: token } });
  })
);

app.post('/api/auth/logout', (_req, res) => {
  // JWT is stateless; logout is handled client-side by discarding the token.
  res.json({ message: 'Logged out successfully' });
});

app.get(
  '/api/auth/session',
  asyncHandler(async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.json({ user: null, session: null });
    }

    try {
      const token = authHeader.slice(7);
      const decoded = jwt.verify(token, JWT_SECRET);
      const [result] = await pool.query('SELECT id, email FROM users WHERE id = ?', [decoded.userId]);
      if (result.length === 0) return res.json({ user: null, session: null });
      res.json({ user: result[0], session: { access_token: token } });
    } catch {
      res.json({ user: null, session: null });
    }
  })
);

app.post(
  '/api/auth/reset-password',
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['email']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { email, redirect_url: redirectUrl = `${FRONTEND_URL}/reset-password` } = req.body;
    const [users] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.json({ message: 'If that email exists, a reset link has been sent.' });
    }

    const user = users[0];
    const token = generateResetToken();
    const expiresAt = new Date(Date.now() + RESET_TOKEN_EXPIRY_MINUTES * 60000);
    await pool.query(
      'INSERT INTO password_reset_tokens (user_id, token, expires_at, used) VALUES (?, ?, ?, FALSE)',
      [user.id, token, expiresAt]
    );

    const resetUrl = `${redirectUrl}${redirectUrl.includes('?') ? '&' : '?'}token=${token}`;
    await sendResetLinkEmail(email, resetUrl);

    res.json({ message: 'If that email exists, a reset link has been sent.' });
  })
);

app.get(
  '/api/auth/reset-password/verify',
  asyncHandler(async (req, res) => {
    const token = req.query.token;
    if (!token) return sendError(res, 400, 'Missing token');

    const [rows] = await pool.query('SELECT id, expires_at, used FROM password_reset_tokens WHERE token = ?', [token]);
    if (rows.length === 0) return sendError(res, 400, 'Invalid or expired reset link');

    const row = rows[0];
    if (row.used) return sendError(res, 400, 'Reset link already used');
    if (new Date(row.expires_at) < new Date()) return sendError(res, 400, 'Reset link expired');

    res.json({ valid: true });
  })
);

app.post(
  '/api/auth/reset-password/complete',
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['token', 'password']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);

    const { token, password } = req.body;
    if (password.length < 8) {
      return sendError(res, 400, 'Password must be at least 8 characters');
    }

    const [rows] = await pool.query(
      `SELECT prt.id AS token_id, prt.used, prt.expires_at, u.id AS user_id
       FROM password_reset_tokens prt
       JOIN users u ON u.id = prt.user_id
       WHERE prt.token = ?`,
      [token]
    );

    if (rows.length === 0) return sendError(res, 400, 'Invalid or expired reset link');
    const row = rows[0];
    if (row.used) return sendError(res, 400, 'Reset link already used');
    if (new Date(row.expires_at) < new Date()) return sendError(res, 400, 'Reset link expired');

    const hashedPassword = await bcrypt.hash(password, 12);
    await pool.query('UPDATE users SET password_hash = ? WHERE id = ?', [hashedPassword, row.user_id]);
    await pool.query('UPDATE password_reset_tokens SET used = TRUE WHERE id = ?', [row.token_id]);

    res.json({ message: 'Password has been reset successfully' });
  })
);

app.post(
  '/api/auth/update-password',
  authenticate,
  asyncHandler(async (req, res) => {
    const missing = requireFields(req.body, ['password']);
    if (missing.length > 0) return sendError(res, 400, `Missing required fields: ${missing.join(', ')}`);
    const { password } = req.body;
    if (password.length < 8) {
      return sendError(res, 400, 'Password must be at least 8 characters');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await pool.query('UPDATE users SET password_hash = ? WHERE id = ?', [hashedPassword, req.user.userId]);
    res.json({ message: 'Password updated successfully' });
  })
);

// ==================== CHATBOT - FREE KNOWLEDGE-DRIVEN BOT ====================
// Store conversation histories (in production, use database)
const conversationHistories = new Map();

// Generate a session ID from request
const getSessionId = (req) => {
  return req.headers['x-session-id'] || req.ip || 'anonymous';
};

// Get conversation history or create new one
const getConversationHistory = (sessionId) => {
  if (!conversationHistories.has(sessionId)) {
    conversationHistories.set(sessionId, []);
  }
  return conversationHistories.get(sessionId);
};

const QUICK_REPLIES_CONTEXT = {
  greeting: ['Tell me about your services', 'How much does it cost?', 'I need a website', 'View portfolio'],
  services: ['What are your services?', 'How much does it cost?', 'Show me your portfolio', 'Contact support'],
  pricing: ['Tell me about services', 'View portfolio', 'How do I get a quote?', 'Contact support'],
  contact: ['Tell me about services', 'View portfolio', 'How much does it cost?'],
  portfolio: ['Tell me about services', 'What are your prices?', 'Contact support'],
  process: ['How does it work?', 'How long does it take?', 'What do you need from me?'],
  about: ['What do you do?', 'Tell me about your team', 'Why choose you?'],
  default: ['Services', 'Pricing', 'Portfolio', 'Contact us'],
};

const normalize = (message) => (message || '').toString().trim().toLowerCase();

const buildList = (items, max = 3) => {
  const list = items.slice(0, max);
  if (list.length === 0) return '';
  if (list.length === 1) return list[0];
  return `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}`;
};

const findService = (msg) => {
  return WEBSITE_KNOWLEDGE.services.find((service) => {
    const name = service.name.toLowerCase();
    const description = service.description.toLowerCase();
    return [name, description].some((text) => msg.includes(text)) ||
      service.features.some((feature) => msg.includes(feature.toLowerCase()));
  });
};

const findFaq = (msg) => {
  return WEBSITE_KNOWLEDGE.faq.find((item) => {
    const combined = `${item.question} ${item.answer}`.toLowerCase();
    return msg.split(/\s+/).some((token) => token && combined.includes(token));
  });
};

const getServiceSummary = () => {
  const names = WEBSITE_KNOWLEDGE.services.map((service) => service.name);
  return `At Waks Digital Solutions, we deliver premium digital experiences for Kenyan businesses. Our services include ${buildList(names)} and more, all designed to help your brand stand out online.`;
};

const getPricingSummary = () => {
  const packages = WEBSITE_KNOWLEDGE.pricing.packages.map((pkg) => `${pkg.name} from ${pkg.price}`);
  return `We offer transparent, value-driven pricing tailored to each project. Typical packages include ${buildList(packages)}, and we always create a custom quote based on your business goals and desired features.`;
};

const getPortfolioSummary = () => {
  const { description, industries, caseStudies } = WEBSITE_KNOWLEDGE.portfolio;
  return `${description} We have delivered polished digital products for industries such as ${buildList(industries)}. For example, we launched an e-commerce platform with M-Pesa integration that drove 300% growth in online sales.`;
};

const getProcessSummary = () => {
  const steps = WEBSITE_KNOWLEDGE.process.steps.map((step) => step.name);
  return `Our premium process is built around strategic discovery, elegant design, high-quality development, rigorous testing, and seamless launch. It is designed to deliver dependable results and a polished final product.`;
};

const getContactSummary = () => {
  const { email, whatsapp, phone, responseTime } = WEBSITE_KNOWLEDGE.contact;
  return `Reach our team directly at ${email} or WhatsApp ${whatsapp}. Our premium support typically responds within ${responseTime}.`;
};

const getAboutSummary = () => {
  const { description, mission, vision } = WEBSITE_KNOWLEDGE.company;
  return `${description} We are a premium Nairobi-based digital partner focused on smart growth for SMEs. Our mission is ${mission}, and our vision is ${vision}.`;
};

const detectIntent = (msg) => {
  if (msg.match(/\b(hi|hello|hey|greetings|good (morning|afternoon|evening))\b/)) return 'greeting';
  if (msg.match(/\b(service|services|what do you do|offer|provide|help)\b/)) return 'services';
  if (msg.match(/\b(price|cost|budget|quote|how much|estimate|pricing)\b/)) return 'pricing';
  if (msg.match(/\b(portfolio|projects|work|examples|case studies|clients)\b/)) return 'portfolio';
  if (msg.match(/\b(contact|email|whatsapp|phone|reach|support|team)\b/)) return 'contact';
  if (msg.match(/\b(process|steps|workflow|how long|timeline|deliver|launch)\b/)) return 'process';
  if (msg.match(/\b(about|who|company|mission|vision|waks)\b/)) return 'about';
  return 'default';
};

const createResponse = (message) => {
  const msg = normalize(message);
  const service = findService(msg);
  const faq = findFaq(msg);

  if (msg.match(/\b(mpesa|m-pesa|payment gateway|payment integration)\b/)) {
    return 'Yes — we integrate M-Pesa and other payment gateways for e-commerce stores. We build secure checkout flows, product catalogues, and order management that work well for Kenyan businesses.';
  }

  if (msg.match(/\b(wordpress|wp|wordpress site|wp site)\b/)) {
    const wp = WEBSITE_KNOWLEDGE.services.find((s) => s.id === 'wordpress-design');
    return `We offer WordPress design and development with custom themes, plugin support, easy content management, and SEO optimization. This is great for small businesses, blogs, and content-driven websites.`;
  }

  if (msg.match(/\b(e-?commerce|store|online shop|product|checkout)\b/)) {
    const ecommerce = WEBSITE_KNOWLEDGE.services.find((s) => s.id === 'ecommerce-solutions');
    return `Our e-commerce solutions include product management, secure checkout, payment integrations (including M-Pesa), inventory tracking, and analytics. Most online stores take about 6-12 weeks to launch.`;
  }

  if (msg.match(/(redesign|refresh|update existing|existing website)/)) {
    return 'Yes, we can redesign your existing website with an improved user experience, faster performance, and modern visual design. We also provide content updates and SEO improvements as part of the redesign.';
  }

  if (msg.match(/\b(maintenance|support|updates|bugs|security)\b/)) {
    const support = WEBSITE_KNOWLEDGE.services.find((s) => s.id === 'website-maintenance');
    return `We provide website maintenance and support packages starting from KES 3,000/month. This includes backups, security updates, bug fixes, and performance monitoring.`;
  }

  if (msg.match(/\b(price|cost|budget|quote|how much|estimate)\b/)) {
    return getPricingSummary();
  }

  if (msg.match(/\b(portfolio|projects|case study|clients|examples)\b/)) {
    return getPortfolioSummary();
  }

  if (msg.match(/\b(contact|email|whatsapp|phone|reach|support|team)\b/)) {
    return getContactSummary();
  }

  if (msg.match(/\b(process|timeline|steps|workflow|how long|deliver|launch)\b/)) {
    return getProcessSummary();
  }

  if (msg.match(/\b(about|who are you|company|mission|vision|waks)\b/)) {
    return getAboutSummary();
  }

  if (faq) {
    return faq.answer;
  }

  if (service) {
    const serviceSummary = `We specialize in ${service.name} with a premium focus on usability and business impact. ${service.description}`;
    const featureSummary = service.features ? `Key features include ${buildList(service.features)}.` : '';
    return `${serviceSummary} ${featureSummary} For a bespoke proposal, contact us at info@waksdigital.co.ke or WhatsApp ${WEBSITE_KNOWLEDGE.contact.whatsapp}.`;
  }

  const intent = detectIntent(msg);
  switch (intent) {
    case 'greeting':
      return 'Welcome to Waks Digital Solutions. We craft premium digital experiences for Kenyan businesses, from websites and e-commerce stores to custom systems and brand-led design. How can I help you elevate your online presence today?';
    case 'services':
      return getServiceSummary();
    case 'pricing':
      return getPricingSummary();
    case 'portfolio':
      return getPortfolioSummary();
    case 'contact':
      return getContactSummary();
    case 'process':
      return getProcessSummary();
    case 'about':
      return getAboutSummary();
    default:
      return 'I can help you with premium website design, e-commerce, custom systems, or digital strategy. What would you like to explore first?';
  }
};

app.post(
  '/api/chatbot',
  asyncHandler(async (req, res) => {
    const { messages, sessionId: clientSessionId } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.json({
        content: 'Hey there! 👋 I\'m Waks Bot. How can I help you today? Ask me about services, pricing, portfolio, or contact details.',
        quickReplies: QUICK_REPLIES_CONTEXT.greeting,
        sessionId: clientSessionId || getSessionId(req),
      });
    }

    const sessionId = clientSessionId || getSessionId(req);
    const conversationHistory = getConversationHistory(sessionId);
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage?.content || typeof lastMessage.content !== 'string') {
      return sendError(res, 400, 'Invalid message format');
    }

    const assistantMessage = createResponse(lastMessage.content);

    conversationHistory.push({ role: 'user', content: lastMessage.content });
    conversationHistory.push({ role: 'assistant', content: assistantMessage });

    const intent = detectIntent(lastMessage.content);
    const quickReplies = QUICK_REPLIES_CONTEXT[intent] || QUICK_REPLIES_CONTEXT.default;

    res.json({
      content: assistantMessage,
      quickReplies,
      sessionId,
    });
  })
);

// ==================== GLOBAL ERROR HANDLER ====================
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  console.error('[ERROR]', err.message);
  // Don't leak internal error details to clients in production
  const message = process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message;
  res.status(err.status || 500).json({ error: message });
});

// ==================== START SERVER ====================
app.listen(PORT, () => {
  console.log(`[SERVER] Running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});