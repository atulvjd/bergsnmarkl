"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function NewHeroSection() {
  return (
    <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden pb-10 pt-24 sm:min-h-[85vh] sm:pb-12 sm:pt-32">
      <Image
        src="/hero-digital-marketing-agency.jpg"
        alt="Digital growth team planning strategy"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-beige/40 bg-accent-beige/15 px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="h-2 w-2 rounded-full bg-accent-beige" />
              <span className="text-[11px] font-bold uppercase tracking-wide sm:text-sm">A Bergs & Co Company</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-6 text-4xl font-black leading-tight tracking-tighter sm:text-5xl md:text-7xl"
          >
            Marketing Architecture & <span className="text-accent-beige">Growth Systems</span> Agency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.8 }}
            className="mx-auto mb-8 max-w-3xl text-sm leading-relaxed text-foreground/70 sm:text-base"
          >
            Whether you search for us as bergsandmark or berg sand mark, our mission remains the same: from positioning and creative systems to media execution and reporting, every part of the growth engine is planned to move faster with stronger quality control and measurable business impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="h-auto w-full rounded-lg bg-foreground px-6 py-4 text-base font-bold text-background hover:bg-foreground/90 sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
              <Link href="/contact">Start a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-auto w-full border-accent-beige/40 bg-background/30 px-6 py-4 text-base hover:border-accent-beige/60 hover:bg-background/50 sm:w-auto sm:px-8 sm:py-6 sm:text-lg">
              <Link href="/work">View Case Studies</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid gap-6 border-y border-border/50 py-10 md:grid-cols-3 md:gap-8"
          >
            <div>
              <div className="mb-2 text-4xl font-black text-accent-beige sm:text-5xl">17+</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Brands Supported</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-black text-accent-beige sm:text-5xl">$6K</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Revenue Influenced</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-black text-accent-beige sm:text-5xl">65%</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Retention Improvement</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-foreground/65"
          >
            Ideal for healthcare providers, legal and financial firms, consultants, real estate teams, and other service brands that need reliable lead flow without fragmented execution.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
