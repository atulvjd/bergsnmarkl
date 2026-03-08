"use client"

import { motion } from "framer-motion"

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Aurora Blob 1 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-accent-beige/10 blur-[100px]"
      />

      {/* Aurora Blob 2 */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -150, 0],
          y: [0, 100, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-accent-beige/5 blur-[120px]"
      />

      {/* Aurora Blob 3 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[10%] left-[20%] h-[400px] w-[400px] rounded-full bg-accent-beige/10 blur-[80px]"
      />

      {/* Grid Pattern (Optional, adds more texture) */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent-beige) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  )
}
