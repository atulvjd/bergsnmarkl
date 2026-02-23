"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ServiceCarouselProps {
  services: Array<{
    title: string
    description: string
    image: string
    features: string[]
  }>
}

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % services.length)
  const prev = () => setCurrent((prev) => (prev - 1 + services.length) % services.length)

  return (
    <div className="relative">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h3 className="text-4xl font-bold mb-6 text-foreground">{services[current].title}</h3>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">{services[current].description}</p>
          <div className="space-y-3 mb-8">
            {services[current].features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">✓</span>
                <span className="text-foreground/70">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src={services[current].image || "/placeholder.svg"}
            alt={services[current].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12">
        <button
          onClick={prev}
          className="bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-3 transition-all"
          aria-label="Previous service"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${index === current ? "bg-accent w-8" : "bg-muted w-2"}`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-3 transition-all"
          aria-label="Next service"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
