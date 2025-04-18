"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sun, Home, Shield, Ruler } from "lucide-react"

export default function ProductsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const products = [
    {
      category: "Blinds",
      title: "Premium Window Blinds",
      description:
        "Our custom window blinds combine functionality with style. Available in various materials, colors, and opacities to perfectly match your interior design.",
      image: "/images/feature-blinds.jpeg",
      features: [
        { icon: <Sun className="h-5 w-5" />, text: "UV Protection" },
        { icon: <Home className="h-5 w-5" />, text: "Energy Efficient" },
        { icon: <Ruler className="h-5 w-5" />, text: "Custom Sizes" },
      ],
      variants: ["Vertical Blinds", "Aluminium Venetians", "Roller Blinds", "Wooden Blinds", "Bamboo Blinds", "Roman Blinds"],
    },
    {
      category: "Awnings",
      title: "Outdoor Awning Solutions",
      description:
        "Transform your outdoor space with our durable, weather-resistant awnings. Perfect for patios, decks, and commercial spaces to provide shade and style.",
      image: "/images/awnings-feature.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Weather Resistant" },
        { icon: <Sun className="h-5 w-5" />, text: "UV Protection" },
        { icon: <Ruler className="h-5 w-5" />, text: "Custom Designs" },
      ],
      variants: ["Retractable Awnings", "Fixed Awnings", "Freestanding Awnings", "Motorized Systems"],
    },
    {
      category: "Curtains",
      title: "Elegant Custom Curtains",
      description:
        "Add luxury and sophistication to your windows with our custom curtain collection. From sheer to blackout, our curtains offer both beauty and functionality for any room.",
      image: "/images/curtains.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Premium Fabrics" },
        { icon: <Sun className="h-5 w-5" />, text: "Light Control" },
        { icon: <Ruler className="h-5 w-5" />, text: "Made to Measure" },
      ],
      variants: ["Sheer Curtains", "Blackout Curtains", "Day & Night Curtains", "Wave Curtains", "Eyelet Curtains", "Pinch Pleat", "Decorative Tracks"],
    },
    {
      category: "Car Shades",
      title: "Automotive Sun Solutions",
      description:
        "Protect your vehicle's interior and maintain comfort with our premium car shade solutions. Custom-fitted for various vehicle models to ensure perfect coverage.",
      image: "/images/car-shade4.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Heat Reduction" },
        { icon: <Sun className="h-5 w-5" />, text: "99% UV Block" },
        { icon: <Ruler className="h-5 w-5" />, text: "Perfect Fit" },
      ],
      variants: ["Magnetic Shades", "Custom Roll-up Shades", "Window Tinting", "Windshield Sunshades", "Full Car Sets", "Privacy Shades"],
    },
    {
      category: "Carpets",
      title: "Premium Carpet Solutions",
      description:
        "Enhance your space with our extensive range of carpets. From luxurious residential carpets to durable commercial solutions, we offer quality materials and expert installation.",
      image: "/images/carpets0.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Stain Resistant" },
        { icon: <Sun className="h-5 w-5" />, text: "Long Lasting" },
        { icon: <Ruler className="h-5 w-5" />, text: "Professional Install" },
      ],
      variants: ["Wall-to-Wall Carpets", "Area Rugs", "Commercial Carpets", "Wool Carpets", "Synthetic Carpets", "Designer Collections", "Outdoor Carpets"],
    },
    {
      category: "Shutters",
      title: "Classic Window Shutters",
      description:
        "Experience timeless elegance with our premium window shutters. Combining traditional charm with modern functionality, our shutters provide perfect light control and privacy.",
      image: "/shutters/02.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Durable Build" },
        { icon: <Sun className="h-5 w-5" />, text: "Light Control" },
        { icon: <Ruler className="h-5 w-5" />, text: "Custom Fit" },
      ],
      variants: ["Plantation Shutters", "Wooden Shutters", "PVC Shutters", "Cafe Style", "Full Height", "Tier-on-Tier", "Security Shutters"],
    },
  ]

  return (
    <section id="products" ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      {/* Decorative elements */}
      <motion.div
        className="absolute -right-16 top-32 h-64 w-64 rounded-full bg-primary/5"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -left-32 bottom-32 h-96 w-96 rounded-full bg-primary/5"
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
          <h2 className="text-3xl text-gray-600 font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our <span className="text-[#56bbf1]">Products</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Discover our premium range of blinds and awnings, designed to enhance your space with style and
            functionality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-24"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.category}
              variants={itemVariants}
              className={`grid gap-8 md:grid-cols-2 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              {/* Product Image with animation */}
              <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <motion.div
                  className="relative overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={product.image || "/images/feature-blinds.jpeg"}
                    alt={product.title}
                    width={800}
                    height={600}
                    className="h-auto w-full object-cover"
                  />
                  <div className="absolute bg-[#56bbf1] left-4 top-4 rounded-full px-4 py-1 text-sm font-medium text-white">
                    {product.category}
                  </div>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <Link href="#gallery" className='cursor-pointer'>
                  <h3 className="text-2xl text-[#56bbf1] font-bold">{product.title}</h3>
                  <p className="mt-3 text-gray-600">{product.description}</p>
                  </Link>
                  
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-medium">Key Features</h4>
                  <div className="flex flex-wrap gap-4">
                    {product.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-primary">{feature.icon}</span>
                        <span>{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Variants */}
                <div className="space-y-3">
                  <h4 className="font-medium">Available Options</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.variants.map((variant, i) => (
                      <motion.div
                        key={i}
                        className="rounded-md border border-gray-200 px-3 py-2 text-sm"
                        whileHover={{ backgroundColor: "#f9fafb" }}
                      >
                        {variant}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mx-auto mt-24 max-w-3xl rounded-xl bg-[#56bbf1] p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold">Custom Solutions For Your Space</h3>
          <p className="mx-auto mt-3 max-w-xl text-gray-800">
            Not sure what you need? Our experts can help you find the perfect blinds or awnings for your home or
            business.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-black hover:bg-blue-600">Request a Consultation</Button>
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
