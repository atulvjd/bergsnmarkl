"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clientLogos = [
  { name: "Radisson", url: "/radisson-hotel-logo.jpg" },
  { name: "PayTm", url: "/paytm-payment-logo.jpg" },
  { name: "Google", url: "/google-logo.png" },
  { name: "Hyatt", url: "/hyatt-hotel-logo.jpg" },
  { name: "Audi", url: "/audi-car-logo.jpg" },
  { name: "BlueSea", url: "/bluesea-logistics-logo.jpg" },
  { name: "Amazon", url: "/amazon-logo.png" },
  { name: "Netflix", url: "/netflix-inspired-logo.png" },
]

export function ClientLogosCarousel() {
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="flex gap-12">
        <motion.div
          className="flex gap-12 min-w-max"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-20 min-w-[160px]">
              <Image
                src={logo.url || "/placeholder.svg"}
                alt={logo.name}
                width={140}
                height={60}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )
}
