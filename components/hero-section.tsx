"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-agency-workspace-team.jpg"
          alt="Agency workspace"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95"></div>
      </div>

      <motion.div
        className="text-center max-w-4xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-balance text-foreground leading-tight"
        >
          Build brands that drive real growth.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-foreground/70 mb-12 text-balance max-w-2xl mx-auto leading-relaxed"
        >
          Strategy, identity, digital systems, and growth architecture executed with precision. We build comprehensive
          brand solutions that matter.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10">
            <Link href="/contact">Work With Us</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10"
          >
            <Link href="/work">See Our Work</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
