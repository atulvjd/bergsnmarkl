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
    "Transform your online presence with complete digital marketing solutions. Website design, social media, paid advertising, and strategic campaigns.",
  generator: "v0.app",
  keywords: ["digital marketing", "web design", "Instagram growth", "paid advertising", "digital agency"],
  openGraph: {
    title: "Bergs & Mark — Complete Digital Growth Agency",
    description: "We deliver measurable results through integrated digital marketing strategies.",
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
