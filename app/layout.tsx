import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import { CORE_KEYWORDS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bergs & Mark | Digital Marketing Agency for Service Brands",
    template: "%s | Bergs & Mark",
  },
  description:
    "Integrated digital marketing agency services including website design, social media management, SEO, paid ads, branding, and lifecycle marketing for service-focused businesses.",
  applicationName: SITE_NAME,
  keywords: CORE_KEYWORDS,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Digital Marketing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bergs & Mark | Digital Marketing Agency for Service Brands",
    description:
      "Integrated strategy, creative production, paid media, SEO, and lifecycle marketing for measurable lead and revenue growth.",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Bergs & Mark digital marketing agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bergs & Mark | Digital Marketing Agency for Service Brands",
    description:
      "Integrated strategy, creative production, paid media, SEO, and lifecycle marketing for measurable lead and revenue growth.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon-light-32x32.png",
    apple: "/apple-icon.png",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: SITE_NAME,
      alternateName: "Bergs and Mark",
      url: SITE_URL,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      description:
        "Digital marketing agency providing website design, social media management, paid ads, SEO, branding, email marketing, and analytics for service-focused brands.",
      email: "bergsnmark@gmail.com",
      telephone: "+91 93017 03738",
      sameAs: [
        "https://www.instagram.com/bergsnmark/",
        "https://www.linkedin.com/company/bergsnmark/",
        "https://facebook.com",
      ],
      serviceType: [
        "Website Design",
        "Social Media Management",
        "Paid Advertising",
        "Search Engine Optimization",
        "Email Marketing",
        "Branding",
      ],
    },
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en-US",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <SmoothScrollProvider>
          <Navigation />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
