import { SEO_CONFIG } from "./seo-config";

export type PageType = "home" | "service" | "insight" | "general";

export function generateTitle(pageType: PageType, title?: string): string {
  switch (pageType) {
    case "home":
      return "Bergs & Mark | Marketing Architecture & Growth Systems Agency in Bengaluru";
    case "service":
      return `${title} | Marketing Systems Agency Bengaluru | Bergs & Mark`;
    case "insight":
      return `${title} | Growth Architecture Insights | Bergs & Mark`;
    case "general":
    default:
      return title ? `${title} | Bergs & Mark` : "Bergs & Mark | Marketing Architecture Agency";
  }
}

export function generateDescription(description?: string): string {
  return description || "Bergs & Mark is a marketing architecture agency in Bengaluru building scalable growth systems, SEO infrastructure, and conversion-driven digital platforms.";
}
