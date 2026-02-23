"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function NewHeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <Image
        src="/hero-digital-marketing-agency.jpg"
        alt="Digital growth team planning strategy"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-beige/40 bg-accent-beige/15 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-accent-beige" />
              <span className="text-sm font-bold uppercase tracking-wide">Integrated Growth Partner</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-8 text-6xl font-black leading-tight tracking-tighter md:text-7xl"
          >
            Build a Stronger <span className="text-accent-beige">Digital System</span> for Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-foreground/80"
          >
            We design websites, manage social channels, run paid media, and optimize full-funnel campaigns through one coordinated team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-16 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="h-auto rounded-lg bg-accent-beige px-8 py-6 text-lg font-bold text-background hover:bg-accent-beige/90">
              <Link href="/contact">Start a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-auto border-accent-beige/40 bg-background/30 px-8 py-6 text-lg hover:border-accent-beige/60 hover:bg-background/50">
              <Link href="/work">View Case Studies</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid gap-8 border-y border-border/50 py-10 md:grid-cols-3"
          >
            <div>
              <div className="mb-2 text-5xl font-black text-accent-beige">17+</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Brands Supported</p>
            </div>
            <div>
              <div className="mb-2 text-5xl font-black text-accent-beige">$6K</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Client Revenue Influenced</p>
            </div>
            <div>
              <div className="mb-2 text-5xl font-black text-accent-beige">65%</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Client Retention</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
