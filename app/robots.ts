import type { MetadataRoute } from "next"
import { SEO_CONFIG, getAbsoluteUrl } from "@/lib/seo/seo-builder"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: getAbsoluteUrl("/sitemap.xml"),
    host: SEO_CONFIG.siteUrl,
  }
}

