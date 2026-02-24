import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"

const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.95, changeFrequency: "weekly" },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/expertise", priority: 0.85, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.85, changeFrequency: "weekly" },
  { path: "/insights/website-design-systems-that-lift-conversion-rates", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insights/brand-positioning-hegemony-cac-efficiency", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insights/architecture-of-authority-seo-content-clusters", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insights/architectural-frameworks-ltv-lifecycle-email-automation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insights/strategic-frameworks-paid-media-budget-allocation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
