"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface MotionWrapperProps {
  children: ReactNode
  delay?: number
}

export function FadeInSection({ children, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

export function ScaleInSection({ children, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

export function SlideInSection({
  children,
  delay = 0,
  direction = "left",
}: MotionWrapperProps & { direction?: "left" | "right" }) {
  const initialX = direction === "left" ? -60 : 60
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

export function RotateInSection({ children, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

export function FloatingSection({ children, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay }}
    >
      {children}
    </motion.div>
  )
}
