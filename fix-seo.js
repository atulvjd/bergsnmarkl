const fs = require('fs');
const path = require('path');

// 1. Write lib/seo/meta-generator.ts
const metaGeneratorContent = `import { SEO_CONFIG } from "./seo-config";

export type PageType = "home" | "service" | "insight" | "general";

export function generateTitle(pageType: PageType, title?: string): string {
  switch (pageType) {
    case "home":
      return "Bergs & Mark | Marketing Architecture & Growth Systems Agency in Bengaluru";
    case "service":
      return \`\${title} | Marketing Systems Agency Bengaluru | Bergs & Mark\`;
    case "insight":
      return \`\${title} | Growth Architecture Insights | Bergs & Mark\`;
    case "general":
    default:
      return title ? \`\${title} | Bergs & Mark\` : "Bergs & Mark | Marketing Architecture Agency";
  }
}

export function generateDescription(description?: string): string {
  return description || "Bergs & Mark is a marketing architecture agency in Bengaluru building scalable growth systems, SEO infrastructure, and conversion-driven digital platforms.";
}
`;
fs.writeFileSync('lib/seo/meta-generator.ts', metaGeneratorContent);

// 2. Write lib/seo/seo-builder.ts
const seoBuilderContent = `import type { Metadata } from "next";
import { SEO_CONFIG, getAbsoluteUrl } from "./seo-config";
import { generateTitle, generateDescription, PageType } from "./meta-generator";

export interface GenerateMetaProps {
  pageType: PageType;
  title?: string;
  description?: string;
  path: string;
  keywords?: string[];
  imageUrl?: string;
}

export function generateMeta({
  pageType,
  title,
  description,
  path,
  keywords = [],
  imageUrl = SEO_CONFIG.defaultOgImage,
}: GenerateMetaProps): Metadata {
  const finalTitle = generateTitle(pageType, title);
  const finalDescription = generateDescription(description);
  const finalUrl = getAbsoluteUrl(path);
  const combinedKeywords = Array.from(new Set([...keywords, ...SEO_CONFIG.coreKeywords]));

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: combinedKeywords,
    alternates: {
      canonical: finalUrl,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: finalUrl,
      siteName: SEO_CONFIG.brandName,
      locale: "en_US",
      type: pageType === "insight" ? "article" : "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
`;
fs.writeFileSync('lib/seo/seo-builder.ts', seoBuilderContent);

// Delete index.ts to avoid duplicate or implicit exports
if (fs.existsSync('lib/seo/index.ts')) {
  fs.unlinkSync('lib/seo/index.ts');
}

// 3. Update all files in app/
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

  // Add Metadata import if not present and generateMeta is used
  if (content.includes('generateMeta') && !content.includes('import type { Metadata }') && !content.includes('import { Metadata }')) {
     content = `import type { Metadata } from "next"\n` + content;
  }

  // Handle app/layout.tsx special case
  if (filePath === 'app/layout.tsx') {
    content = content.replace(
      /import \{([^}]+)\} from "@\/lib\/seo\/seo-builder"/g,
      (match, p1) => {
        const imports = p1.split(',').map(s => s.trim());
        const schemas = imports.filter(i => i.includes('Schema'));
        const rest = imports.filter(i => !i.includes('Schema') && i !== 'generateMeta');
        let newImports = `import { generateMeta } from "@/lib/seo/seo-builder"\n`;
        if (schemas.length > 0) {
          newImports += `import { ${schemas.join(', ')} } from "@/lib/seo/structured-data"\n`;
        }
        if (rest.length > 0) {
          newImports += `import { ${rest.join(', ')} } from "@/lib/seo/seo-config"\n`; // Assumed fallback
        }
        return newImports.trim();
      }
    );
  } else {
    // Other files
    // Replace import { ..., generateMeta, ... } from "@/lib/seo"
    content = content.replace(
      /import \{([^}]+)\} from "@\/lib\/seo"/g,
      (match, p1) => {
        const imports = p1.split(',').map(s => s.trim());
        const hasGenerateMeta = imports.includes('generateMeta');
        const schemas = imports.filter(i => i.includes('Schema'));
        const configs = imports.filter(i => i === 'SEO_CONFIG' || i === 'getAbsoluteUrl');
        
        let newImports = [];
        if (hasGenerateMeta) {
          newImports.push(`import { generateMeta } from "@/lib/seo/seo-builder"`);
        }
        if (schemas.length > 0) {
          newImports.push(`import { ${schemas.join(', ')} } from "@/lib/seo/structured-data"`);
        }
        if (configs.length > 0) {
          newImports.push(`import { ${configs.join(', ')} } from "@/lib/seo/seo-config"`);
        }
        return newImports.join('\n');
      }
    );
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
