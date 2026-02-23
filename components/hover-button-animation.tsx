"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HoverButtonAnimationProps {
  children: ReactNode
  onClick?: () => void
}

export function HoverButtonAnimation({ children, onClick }: HoverButtonAnimationProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClick} className="cursor-pointer">
      {children}
    </motion.div>
  )
}

export function ShineHoverAnimation({ children, onClick }: HoverButtonAnimationProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="cursor-pointer relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        whileHover={{ opacity: 0.2, x: ["-100%", "100%"] }}
        transition={{ duration: 0.5 }}
      />
      {children}
    </motion.div>
  )
}

export function BounceHoverAnimation({ children, onClick }: HoverButtonAnimationProps) {
  return (
    <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }} onClick={onClick} className="cursor-pointer">
      {children}
    </motion.div>
  )
}
