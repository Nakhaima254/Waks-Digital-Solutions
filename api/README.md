# API Deployment Guide for cPanel

## Prerequisites
1. cPanel hosting with Node.js support
2. PostgreSQL database created in cPanel
3. SSH access to your cPanel (optional, can use File Manager)

## Step 1: Upload the API files
1. Upload the `api/` folder to your cPanel public_html or a subdirectory
2. Example: `public_html/api/`

## Step 2: Set up the database
1. Go to cPanel → PostgreSQL Databases
2. Create a database: `jahaziso_Waks-admin`
3. Create a user: `jahaziso_waksadmin` with password `Nakisaac@1998`
4. Add the user to the database with all privileges
5. Open phpPgAdmin or use the SQL query tool
6. Run the contents of `schema.sql` to create tables

## Step 3: Configure Node.js in cPanel
1. Go to cPanel → Setup Node.js App
2. Create a new application:
   - Node.js version: 18.x or 20.x
   - Application mode: Production
   - Application root: `api` (or your folder name)
   - Application URL: your desired URL
   - Application Startup File: `server.js`
3. Click Create
4. After creating, go back and edit to set environment variables:
   - `DB_HOST`: pgsql.waksdigital.co.ke
   - `DB_PORT`: 5432
   - `DB_NAME`: jahaziso_Waks-admin
   - `DB_USER`: jahaziso_waksadmin
   - `DB_PASSWORD`: Nakisaac@1998
   - `JWT_SECRET`: Generate a secure random string

## Step 4: Install dependencies
1. In the Node.js app settings, click "Run NPM Install"
2. Wait for installation to complete

## Step 5: Start the application
1. Click "Start App" in the Node.js settings
2. The API should now be running at your configured URL

## Testing the API
Visit: `https://yourdomain.com/api/health`
You should see: `{"status":"ok","timestamp":"..."}`

## Troubleshooting
- Check error logs in cPanel → Errors
- Verify database credentials are correct
- Ensure PostgreSQL user has proper permissions
- Check that the .env file is in the correct location

## API Endpoints
- `GET /api/health` - Health check
- `GET /api/blog_posts` - List all blog posts
- `POST /api/blog_posts` - Create blog post
- `GET /api/recent_projects` - List all projects
- `POST /api/recent_projects` - Create project
- `GET /api/tickets` - List all tickets
- `POST /api/tickets` - Create ticket
- `GET /api/user_roles` - List user roles
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/reset-password` - Reset password
