"use client"
import { type ReactNode, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0.8])

  useEffect(() => {
    // Dynamically import Lenis for smooth scrolling
    const importLenis = async () => {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical" as const,
          gestureDirection: "vertical" as const,
          smoothWheel: true,
          smoothTouch: false,
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
          lenis.destroy()
        }
      } catch (error) {
        // Lenis is optional; if not installed, scrolling will be normal
        console.log("Lenis not installed")
      }
    }

    importLenis()
  }, [])

  return (
    <div className="relative">
      <motion.div style={{ opacity }} className="fixed inset-0 -z-10 pointer-events-none" />
      {children}
    </div>
  )
}
