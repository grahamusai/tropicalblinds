"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Tailored Shades <br /> for Every Style
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-xl text-gray-200 sm:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Tropical Shades is a registered company in Zimbabwe which specializes in blinds, curtains, car-sheds, carpets and awnings.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button size="lg" className="bg-blue-400 hover:bg-blue-500 min-w-[150px]">
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[150px] bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          className="h-12 w-6 rounded-full border-2 border-white p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="h-2 w-2 rounded-full bg-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}
