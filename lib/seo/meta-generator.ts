import { SEO_CONFIG } from "./seo-config";

export type PageType = "home" | "service" | "insight" | "general";

export function generateTitle(pageType: PageType, title?: string): string {
  switch (pageType) {
    case "home":
      return "Bergs & Co | Marketing Architecture & Growth Systems Agency in Bengaluru";
    case "service":
      return `${title} | Marketing Systems Agency Bengaluru | Bergs & Co`;
    case "insight":
      return `${title} | Growth Architecture Insights | Bergs & Co`;
    case "general":
    default:
      return title ? `${title} | Bergs & Co` : "Bergs & Co | Marketing Architecture Agency";
  }
}

export function generateDescription(description?: string): string {
  return description || "Bergs & Co is a marketing architecture agency in Bengaluru building scalable growth systems, SEO infrastructure, and conversion-driven digital platforms.";
}
