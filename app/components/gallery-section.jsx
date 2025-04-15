"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    src: "/gallery/gallery-1.jpg",
    alt: "Modern roller blinds in a living room",
    category: "blinds",
    description: "Modern Roller Blinds",
    location: "Contemporary Living Room",
  },
  {
    id: 2,
    src: "/gallery/gallery-2.jpg",
    alt: "Retractable awning on a patio",
    category: "awnings",
    description: "Retractable Patio Awning",
    location: "Suburban Home",
  },
  {
    id: 3,
    src: "/gallery/gallery-3.jpg",
    alt: "Venetian blinds in an office",
    category: "blinds",
    description: "Aluminum Venetian Blinds",
    location: "Corporate Office",
  },
  {
    id: 4,
    src: "/gallery/gallery-4.jpg",
    alt: "Fixed awning for a storefront",
    category: "awnings",
    description: "Commercial Fixed Awning",
    location: "Retail Storefront",
  },
  {
    id: 5,
    src: "/gallery/gallery-5.jpg",
    alt: "Roman blinds in a bedroom",
    category: "blinds",
    description: "Elegant Roman Blinds",
    location: "Master Bedroom",
  },
  {
    id: 6,
    src: "/gallery/gallery-6.jpg",
    alt: "Motorized awning for a restaurant",
    category: "awnings",
    description: "Motorized Restaurant Awning",
    location: "Outdoor Dining Area",
  },
  {
    id: 7,
    src: "/gallery/gallery-7.jpg",
    alt: "Vertical blinds for a sliding door",
    category: "blinds",
    description: "Vertical Blinds",
    location: "Patio Door Installation",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Freestanding awning by a pool",
    category: "awnings",
    description: "Freestanding Poolside Awning",
    location: "Luxury Backyard",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Wooden blinds in a study",
    category: "blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
]

export default function GallerySection() {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const filteredItems = galleryItems.filter((item) => filter === "all" || item.category === filter)

  // Handle lightbox navigation
  const handlePrevious = () => {
    if (!selectedImage) return
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id)
    const previousIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setSelectedImage(galleryItems[previousIndex])
  }

  const handleNext = () => {
    if (!selectedImage) return
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setSelectedImage(galleryItems[nextIndex])
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-24">
      {/* Decorative elements */}
      <motion.div
        className="absolute -left-16 top-32 h-64 w-64 rounded-full bg-primary/5"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -right-32 bottom-32 h-96 w-96 rounded-full bg-primary/5"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Browse our portfolio of completed projects and get inspired for your own space.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="min-w-[100px]"
          >
            All
          </Button>
          <Button
            variant={filter === "blinds" ? "default" : "outline"}
            onClick={() => setFilter("blinds")}
            className="min-w-[100px]"
          >
            Blinds
          </Button>
          <Button
            variant={filter === "awnings" ? "default" : "outline"}
            onClick={() => setFilter("awnings")}
            className="min-w-[100px]"
          >
            Awnings
          </Button>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">{item.description}</h3>
                  <p className="text-gray-200">{item.location}</p>
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="mt-4 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                  >
                    <ZoomIn className="h-4 w-4" />
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* "View more" button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Button variant="outline" size="lg">
            View More Projects
          </Button>
        </motion.div>
      </div>

      {/* Lightbox/Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-xl bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{selectedImage.description}</h3>
                <p className="text-gray-600">{selectedImage.location}</p>
                <p className="mt-2 text-gray-600">
                  {selectedImage.category === "blinds"
                    ? "Our custom blinds are designed to perfectly fit your windows while complementing your interior design."
                    : "Our premium awnings provide shade and protection while enhancing the exterior of your property."}
                </p>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
