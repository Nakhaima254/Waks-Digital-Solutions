import fs from 'fs';
import path from 'path';
import favicons from 'favicons';

const PROJECT_ROOT = process.cwd();
const SOURCE_IMAGE_NAMES = ['Waks Tech-05.png', 'Waks Tech-05-01.png'];
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'dist');

function findSourceImage() {
  for (const filename of SOURCE_IMAGE_NAMES) {
    const fullPath = path.join(PROJECT_ROOT, filename);
    if (fs.existsSync(fullPath)) {
      return { fullPath, filename };
    }
  }
  return null;
}

async function generateFavicons() {
  const source = findSourceImage();
  if (!source) {
    console.warn('No favicon source image found. Looking for:', SOURCE_IMAGE_NAMES.join(', '));
    return;
  }

  console.log(`Generating favicons from ${source.filename}...`);
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const sourceBuffer = fs.readFileSync(source.fullPath);
  
  const config = {
    appName: 'Waks Digital Solutions',
    appDescription: 'Your Digital Growth Partner',
    developerName: 'Waks Digital',
    developerURL: null,
    background: '#ffffff',
    theme_color: '#ff7c1f',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
    version: '1.0',
    pixel_art: false,
    serveOptions: {
      cors: true
    },
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: false,
      favicons: true,
      windows: false,
      yandex: false
    }
  };

  try {
    const response = await favicons(sourceBuffer, config);
    
    response.images.forEach(image => {
      fs.writeFileSync(path.join(OUTPUT_DIR, image.name), image.contents);
      console.log(`Generated: ${image.name}`);
    });

    // Write .htaccess with CORS headers
    const htaccess = `# CORS headers for API
<IfModule mod_headers.c>
  Header always set Access-Control-Allow-Origin "https://www.waksdigital.co.ke"
  Header always set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
  Header always set Access-Control-Allow-Headers "Content-Type, Authorization, Accept, Origin"
  Header always set Access-Control-Allow-Credentials "true"
  Header always set Access-Control-Max-Age "3600"
</IfModule>

# Rewrite engine for SPA routing
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
`;
    fs.writeFileSync(path.join(OUTPUT_DIR, '.htaccess'), htaccess);
    console.log('Generated: .htaccess (with CORS headers)');

    console.log('Favicon generation complete!');
  } catch (err) {
    console.error('Error generating favicons:', err.message);
  }
}

generateFavicons();