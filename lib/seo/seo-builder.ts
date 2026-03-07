import type { Metadata } from "next";
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
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      shortcut: '/favicon.ico', // In case you add one later, but for now we'll stick to icons
      apple: '/apple-icon.png',
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
