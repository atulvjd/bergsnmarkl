import { Metadata } from "next";
import { SEO_CONFIG, getAbsoluteUrl } from "./seo-config";

export type PageType = "home" | "service" | "insight" | "general";

interface GenerateMetaProps {
  pageType: PageType;
  title?: string; // used for {Service Name} or {Article Title}
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
  let finalTitle = "";
  let finalDescription =
    description ||
    "Bergs & Co is a marketing architecture agency in Bengaluru building scalable growth systems, SEO infrastructure, and conversion-driven digital platforms.";

  switch (pageType) {
    case "home":
      finalTitle = "Bergs & Co | Marketing Architecture & Growth Systems Agency in Bengaluru";
      break;
    case "service":
      finalTitle = `${title} | Marketing Systems Agency Bengaluru | Bergs & Co`;
      break;
    case "insight":
      finalTitle = `${title} | Growth Architecture Insights | Bergs & Co`;
      break;
    case "general":
    default:
      finalTitle = title ? `${title} | Bergs & Co` : "Bergs & Co | Marketing Architecture Agency";
      break;
  }

  // Ensure title length constraints (~50-60 chars) conceptually,
  // but we'll stick to the exact strings per prompt requirements.

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
  };
}
