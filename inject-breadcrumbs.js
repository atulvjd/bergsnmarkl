const fs = require('fs');
const path = require('path');

const articlesDir = './app/insights';

function injectBreadcrumbs(filePath, folderName) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('<Breadcrumbs')) return;

  // Add import
  if (!content.includes('import { Breadcrumbs }')) {
    content = content.replace(
      'import { InsightArticleContent } from "@/components/insight-article-content"',
      'import { InsightArticleContent } from "@/components/insight-article-content"\nimport { Breadcrumbs } from "@/components/breadcrumbs"'
    );
  }

  // Find the start of the return statement
  const sectionRegex = /(<section className="[^"]+ px-6 py-8">[\s\S]*?<div className="mx-auto max-w-5xl">)/;
  
  // Try to extract the title variable
  let titleMatch = content.match(/const articleTitle =[\s\n]*"([^"]+)"/);
  let titleMatch2 = content.match(/const articleTitle = "([^"]+)"/);
  let title = "Article";
  if (titleMatch) title = titleMatch[1];
  else if (titleMatch2) title = titleMatch2[1];

  // We'll truncate long titles
  if (title.length > 40) title = title.substring(0, 40) + '...';

  const breadcrumbsStr = `\n          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: "${title.replace(/"/g, '\\"')}", path: "/insights/${folderName}" }]} />\n`;

  content = content.replace(sectionRegex, `$1${breadcrumbsStr}`);

  fs.writeFileSync(filePath, content, 'utf8');
}

fs.readdirSync(articlesDir).forEach(dir => {
  let p = path.join(articlesDir, dir, 'page.tsx');
  if (fs.existsSync(p) && fs.statSync(path.join(articlesDir, dir)).isDirectory()) {
    injectBreadcrumbs(p, dir);
  }
});
