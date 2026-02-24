import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bergs & Mark — Complete Digital Growth Agency",
  description:
    "Centralized digital growth services for service-focused brands. Website design, social media management, paid ads, SEO, lifecycle marketing, and structured reporting under one coordinated team.",
  generator: "v0.app",
  keywords: [
    "digital growth agency",
    "website design services",
    "social media management",
    "paid advertising agency",
    "SEO services",
    "email marketing automation",
    "service business marketing",
  ],
  openGraph: {
    title: "Bergs & Mark — Complete Digital Growth Agency",
    description: "Integrated strategy, creative, media, and optimization for measurable growth outcomes.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
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
