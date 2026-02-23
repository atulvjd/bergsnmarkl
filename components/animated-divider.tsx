"use client"

import { motion } from "framer-motion"

interface AnimatedDividerProps {
  className?: string
}

export function AnimatedDivider({ className = "" }: AnimatedDividerProps) {
  return (
    <motion.div
      className={`h-px bg-gradient-to-r from-transparent via-border to-transparent ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ transformOrigin: "center" }}
    />
  )
}
