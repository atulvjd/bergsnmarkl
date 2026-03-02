const fs = require('fs');
const path = require('path');

const articlesDir = './app/insights';

function addLinks(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace occurrences with markdown links. We only do it once per keyword to avoid too many links.
  let replacements = [
    { regex: /\b(marketing operations)\b/i, url: '/services', target: 'marketing operations' },
    { regex: /\b(centralized execution)\b/i, url: '/expertise', target: 'centralized execution' },
    { regex: /\b(digital marketing agency)\b/i, url: '/about', target: 'digital marketing agency' },
    { regex: /\b(paid media)\b/i, url: '/services', target: 'paid media' },
    { regex: /\b(performance marketing)\b/i, url: '/work', target: 'performance marketing' },
    { regex: /\b(conversion rates)\b/i, url: '/work', target: 'conversion rates' },
    { regex: /\b(website design)\b/i, url: '/services', target: 'website design' },
    { regex: /\b(seo content clusters)\b/i, url: '/services', target: 'seo content clusters' },
    { regex: /\b(topical authority)\b/i, url: '/expertise', target: 'topical authority' },
    { regex: /\b(brand positioning)\b/i, url: '/services', target: 'brand positioning' },
    { regex: /\b(customer acquisition costs?)\b/i, url: '/expertise', target: 'customer acquisition costs' },
    { regex: /\b(lifecycle email automation)\b/i, url: '/services', target: 'lifecycle email automation' },
    { regex: /\b(customer lifetime value)\b/i, url: '/work', target: 'customer lifetime value' },
  ];

  let linksAdded = 0;
  
  for (let r of replacements) {
    if (linksAdded >= 4) break; // 3-5 links
    if (content.match(r.regex) && !content.match(`\[${r.target}\]`)) {
      content = content.replace(r.regex, `[$1](${r.url})`);
      linksAdded++;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

fs.readdirSync(articlesDir).forEach(dir => {
  let p = path.join(articlesDir, dir, 'page.tsx');
  if (fs.existsSync(p)) {
    addLinks(p);
  }
});
