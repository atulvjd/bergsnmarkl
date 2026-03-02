const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(dirPath);
  });
}

walk('./app', (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace import
  content = content.replace(
    /import\s+\{\s*absoluteUrl,\s*buildPageMetadata,\s*SITE_NAME\s*\}\s*from\s*"@\/lib\/seo"/g,
    'import { getAbsoluteUrl, generateMeta, SEO_CONFIG } from "@/lib/seo"'
  );
  content = content.replace(
    /import\s+\{\s*buildPageMetadata\s*\}\s*from\s*"@\/lib\/seo"/g,
    'import { generateMeta } from "@/lib/seo"'
  );

  // Replace absoluteUrl with getAbsoluteUrl
  content = content.replace(/absoluteUrl\(/g, 'getAbsoluteUrl(');
  
  // Replace SITE_NAME with SEO_CONFIG.brandName
  content = content.replace(/SITE_NAME/g, 'SEO_CONFIG.brandName');

  // Replace buildPageMetadata with generateMeta
  // We need to parse out the config object and map it.
  // Example: buildPageMetadata({ title: "...", description: "...", path: "...", keywords: [...] })
  // becomes: generateMeta({ pageType: "...", title: "...", description: "...", path: "...", keywords: [...] })
  
  const buildRegex = /buildPageMetadata\(\s*\{([\s\S]*?)\}\s*\)/g;
  content = content.replace(buildRegex, (match, inner) => {
    let pageType = '"general"';
    if (filePath.includes('/insights/')) {
        if (filePath.includes('page.tsx') && filePath.split('/').length > 3) {
             pageType = '"insight"';
        }
    }
    return `generateMeta({\n  pageType: ${pageType},${inner}})`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
