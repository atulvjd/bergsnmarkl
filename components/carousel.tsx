"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface CarouselProps {
  items: React.ReactNode[]
  autoplay?: boolean
  interval?: number
  itemsPerView?: number
  className?: string
}

export function Carousel({ items, autoplay = true, interval = 5000, itemsPerView = 1, className = "" }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % items.length)
    }, interval)
    return () => clearInterval(timer)
  }, [autoplay, interval, items.length])

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % items.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {items[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-3 transition-all"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-3 transition-all"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${index === current ? "bg-accent w-8" : "bg-muted w-2"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
