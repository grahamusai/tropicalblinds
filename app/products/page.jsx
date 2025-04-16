"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"



// Products data based on the provided image
const products = [
  {
    id: "vertical-blinds",
    name: "Vertical Blinds",
    description:
      "Tropical Shades- Vertical Blinds (also known as Vertical Drapes) combine the rich look of luxury and elegance with style and substance.",
    image: "/images/verticalblinds3.jpeg",
    category: "blinds",
    features: ["Perfect for large windows and sliding doors", "Excellent light control", "Easy to clean", "Variety of fabrics and colors"],
  },
  {
    id: "aluminium-venetians",
    name: "Aluminium Venetians",
    description:
      "Tropical Shades-Aluminium Venetians are a classical, refreshing and practical alternative to both modern and traditional architecture.",
    image: "/gallery/aluminium.jpg",
    category: "blinds",
    features: ["Durable and moisture resistant", "Easy to clean", "Excellent light control", "Sleek, modern appearance"],
  },
  {
    id: "roller-blinds",
    name: "Roller Blinds",
    description:
      "Tropical Shades Roller Blinds - also known as Holland Blinds - are a practical and affordable window covering solutions.",
    image: "/gallery/roller.jpg",
    category: "blinds",
    features: ["Clean, minimal look", "Wide range of fabrics", "Easy operation", "Child-safe options available"],
  },
  {
    id: "wooden-blinds",
    name: "Wooden Blinds (timber blinds)",
    description:
      "Tropical Shades- Timber Venetians are a classical, refreshing and natural alternative to both modern, traditional architecture.",
    image: "/gallery/gallery-3.jpg",
    category: "blinds",
    features: ["Natural warmth and beauty", "Excellent insulation", "Various stain options", "Durable and long-lasting"],
  },
  {
    id: "bamboo-blinds",
    name: "Bamboo Blinds",
    description:
      "Tropical Shades -Bamboo blinds are a renewable resource and are actually a wise environmental choice.",
    image: "/gallery/gallery-5.jpg",
    category: "blinds",
    features: ["Eco-friendly material", "Natural aesthetic", "Filtered light quality", "Unique texture and appearance"],
  },
  {
    id: "panel-roman-blinds",
    name: "Panel & Roman Blinds",
    description:
      "Tropical Shades Panel blinds system provides a contemporary method of obtaining privacy and sun protection. Tropical Shades Roman Blinds (also known as Roman Shades) are the ideal window covering solution for your home.",
    image: "/gallery/roller.jpg",
    category: "blinds",
    features: ["Elegant folding design", "Soft fabric appearance", "Excellent insulation", "Various fabric options"],
  },
  {
    id: "curtains",
    name: "Curtains (rods and rails)",
    description:
      "Tropical Shades Curtains -A set of curtains is a window treatment that comes in 2 or more sections consisting of left and right curtains.",
    image: "/gallery/curtains.webp",
    category: "other",
    features: ["Full privacy options", "Decorative element", "Sound dampening", "Various hanging styles available"],
  },
  {
    id: "car-sheds",
    name: "Car-sheds",
    description:
      "Tropical Shades Car -sheds material range from 70% - 100 % waterproof shade cloth can last for above 6 years before it is changed.",
    image: "/gallery/car-shed.jpg",
    category: "awnings",
    features: ["Weather protection", "UV resistant", "Durable construction", "Custom sizing available"],
  },
  {
    id: "carpets-doormats",
    name: "Carpets and Doormats",
    description:
      "Tropical Shades Carpets were originally woven to the dimensions of the specific area they were covering.",
    image: "/gallery/carpet.jpg",
    category: "other",
    features: ["Custom sizing", "Various materials", "Stain resistant options", "Indoor and outdoor options"],
  },
  {
    id: "awnings-drop-blinds",
    name: "Awnings & Drop Blinds",
    description:
      "Tropical Shades wide range of Fixed Awnings, canopies, pergolas, verandahs, outdoor living areas and restaurants for privacy and sun protection. The Tropical Shades Straight Drop Awnings are designed to maximise the use of your outdoor areas all year around without necessarily creating a visual barrier.",
    image: "/gallery/awning.jpg",
    category: "awnings",
    features: ["Sun protection", "Extends outdoor living space", "Weather resistant", "Manual or motorized options"],
  },
]

export default function ProductsPage() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Group products by category
  const blinds = products.filter((product) => product.category === "blinds")
  const awnings = products.filter((product) => product.category === "awnings")
  const other = products.filter((product) => product.category === "other")

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
    <>
      <div className="mt-24 bg-gradient-to-b from-gray-50 to-white pb-24">
        {/* Header */}
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              className="text-3xl text-gray-600 font-bold tracking-tight sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our <span className="text-[#56bbf1]">Products</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Discover our complete range of premium blinds, awnings, and other window treatments designed to enhance your
              space with style and functionality.
            </motion.p>
          </div>

          {/* Breadcrumbs */}
          <motion.div
            className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-2 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-gray-900">Products</span>
          </motion.div>
        </div>

        {/* Products sections */}
        <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blinds Section */}
          <motion.section
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold sm:text-3xl">Blinds</h2>
              <p className="mt-2 text-gray-600">
                Our premium range of blinds combines functionality with style, offering solutions for every window and
                interior design.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blinds.map((product) => (
                <ProductCard key={product.id} product={product} variants={itemVariants} />
              ))}
            </div>
          </motion.section>

          {/* Awnings Section */}
          <motion.section
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold sm:text-3xl">Awnings</h2>
              <p className="mt-2 text-gray-600">
                Transform your outdoor space with our durable, weather-resistant awnings and shade solutions.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {awnings.map((product) => (
                <ProductCard key={product.id} product={product} variants={itemVariants} />
              ))}
            </div>
          </motion.section>

          {/* Other Products Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold sm:text-3xl">Other Products</h2>
              <p className="mt-2 text-gray-600">
                Explore our additional window treatment options and home accessories to complete your space.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {other.map((product) => (
                <ProductCard key={product.id} product={product} variants={itemVariants} />
              ))}
            </div>
          </motion.section>

          {/* Call to action */}
          <motion.div
            className="mx-auto mt-20 max-w-3xl rounded-xl bg-[#56bbf1] p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold">Need Help Choosing the Right Product?</h3>
            <p className="mx-auto mt-3 max-w-xl text-gray-800">
              Our experts can help you find the perfect solution for your home or business. Contact us for a free
              consultation.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg">
              <Link href="/contact">Request a Quote</Link>
                
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

// Product Card Component
function ProductCard({
  product,
  variants,
}) {
  return (
    <motion.div
      variants={variants}
      className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="mt-2 text-gray-600">{product.description}</p>

        {product.features && (
          <div className="mt-4">
            <h4 className="font-medium">Features:</h4>
            <ul className="mt-2 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 text-primary">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex justify-between">

          <Link
            href={`/contact?product=${product.id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Inquire
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

