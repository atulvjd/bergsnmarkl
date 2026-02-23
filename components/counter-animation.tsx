"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface CounterAnimationProps {
  from: number
  to: number
  duration?: number
  suffix?: string
}

export function CounterAnimation({ from, to, duration = 2, suffix = "" }: CounterAnimationProps) {
  const [displayValue, setDisplayValue] = useState(from)

  useEffect(() => {
    const incrementPerMS = (to - from) / (duration * 1000)
    const startTime = Date.now()
    let animationId: NodeJS.Timeout

    const updateCount = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      setDisplayValue(Math.floor(from + (to - from) * progress))

      if (progress < 1) {
        animationId = setTimeout(updateCount, 1000 / 60)
      }
    }

    animationId = setTimeout(updateCount, 1000 / 60)

    return () => clearTimeout(animationId)
  }, [from, to, duration])

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {displayValue}
      {suffix}
    </motion.span>
  )
}
