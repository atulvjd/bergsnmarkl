import type { Metadata } from "next"

const FALLBACK_SITE_URL = "https://www.bergsandmark.com"

function resolveSiteUrl() {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    FALLBACK_SITE_URL

  const withProtocol = candidate.startsWith("http") ? candidate : `https://${candidate}`
  return withProtocol.replace(/\/+$/, "")
}

export const SITE_NAME = "Bergs & Mark"
export const SITE_URL = resolveSiteUrl()
export const DEFAULT_OG_IMAGE = "/hero-digital-marketing-agency.jpg"

export const CORE_KEYWORDS = [
  "digital marketing agency",
  "growth marketing agency",
  "performance marketing agency",
  "service marketing agency",
  "website design agency",
  "social media management agency",
  "SEO agency",
  "paid ads agency",
  "email marketing agency",
  "branding agency",
  "lead generation agency",
  "Bergs & Mark",
]

function uniqueKeywords(extraKeywords: string[] = []) {
  return Array.from(new Set([...extraKeywords, ...CORE_KEYWORDS]))
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${normalizedPath}`
}

type PageMetadataConfig = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function buildPageMetadata({ title, description, path, keywords = [] }: PageMetadataConfig): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    keywords: uniqueKeywords(keywords),
    openGraph: {
      title,
      description,
      url: normalizedPath,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} digital marketing agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

