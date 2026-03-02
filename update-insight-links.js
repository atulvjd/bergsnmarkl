const fs = require('fs');

const path = 'components/insight-article-content.tsx';
let content = fs.readFileSync(path, 'utf8');

// We need to update renderText or paragraph to support links.
// Let's create a renderText function and use it for paragraphs and list items.

const renderTextFunc = `
import Link from "next/link";

function renderText(text: string) {
  const parts = [];
  const linkRegex = /\\[([^\\]]+)\\]\\(([^)]+)\\)/g;
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <Link href={match[2]} key={match.index} className="text-accent-beige underline decoration-accent-beige/30 underline-offset-4 hover:decoration-accent-beige">
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
`;

if (!content.includes('function renderText')) {
  // Add renderText function and import Link
  content = content.replace('export function InsightArticleContent', renderTextFunc + '\nexport function InsightArticleContent');
  
  // Update paragraph rendering
  content = content.replace('{block.text}', '{renderText(block.text)}');
  
  fs.writeFileSync(path, content, 'utf8');
  console.log("Updated InsightArticleContent to support markdown links");
}
