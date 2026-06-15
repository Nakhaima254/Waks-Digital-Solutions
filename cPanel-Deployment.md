# Deploying Frontend to cPanel (Subdirectory)

## Build Output
The frontend has been built successfully. The output is in the `dist/` folder.

## Deployment Steps

### Option 1: Upload via File Manager (Recommended)

1. **Go to cPanel File Manager**
   - Login to cPanel
   - Navigate to your subdirectory in `public_html/` (e.g., `public_html/waks/`)

2. **Upload the dist contents**
   - Upload all files and folders from the `dist/` folder to your subdirectory
   - Make sure to include the `.htaccess` file

3. **Set permissions**
   - Set your subdirectory permissions to 755
   - All files inside should be 644

### Option 2: Upload via FTP

1. **Connect to your server** using FTP client (FileZilla, etc.)
2. **Navigate** to your subdirectory (e.g., `/public_html/waks/`)
3. **Upload** all contents from the `dist/` folder

## Subdirectory Deployment

If deploying to a subdirectory, update `.htaccess` with your subdirectory path:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /waks/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /waks/index.html [L]
</IfModule>
```

## API Configuration

The frontend connects to your API at:
- API URL: `https://www.waksdigital.co.ke/api`

## Testing

1. Visit: `https://www.waksdigital.co.ke/your-subdirectory/`
2. Check browser console for errors
3. Test login/signup functionality

## Troubleshooting

### Page not loading (404 errors)
- Update `.htaccess` with correct subdirectory path

### API connection errors
- Verify API is running
- Check CORS settings in the API
- Verify environment variables in API

### Mixed content errors
- Ensure all API calls use HTTPS

## Social Media Sharing (OG Tags)

For blog posts to show featured images when shared:

1. **Create og-image.jpg** - Upload to your subdirectory (1200x630px recommended)
2. The site already has Open Graph tags configured

## Files Ready to Deploy

- `dist/` folder - Frontend with `.htaccess`
- `api/` folder - Node.js API for PostgreSQL

## API Endpoints Required

Ensure your API has these endpoints:
- `GET /api/health` - Health check
- `GET/POST /api/blog_posts` - Blog posts
- `GET/POST/PUT/DELETE /api/recent_projects` - Projects
- `GET/POST/PUT/DELETE /api/tickets` - Tickets
- `GET/POST /api/user_roles` - User roles
- `POST /api/auth/*` - Authentication
