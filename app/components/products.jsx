"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sun, Home, Shield, Ruler } from "lucide-react"

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
      category: "Roller Blinds",
      title: "Premium Roller Blinds",
      description:
        "Modern, versatile, and easy to operate, our roller blinds offer the perfect balance of light control and style. Ideal for both residential and commercial spaces.",
      image: "/roller-blinds/01.jpg",
      features: [
        { icon: <Sun className="h-5 w-5" />, text: "Light Control" },
        { icon: <Home className="h-5 w-5" />, text: "Easy Operation" },
        { icon: <Ruler className="h-5 w-5" />, text: "Custom Fit" },
      ],
      variants: ["Blackout", "Light Filtering", "Sunscreen", "Double Roller", "Motorized", "Chain Operated"],
    },
    {
      category: "Clear Strip Blinds",
      title: "Clear PVC Strip Solutions",
      description:
        "Perfect for commercial spaces, our clear strip blinds provide weather protection while maintaining visibility. Ideal for warehouses, industrial spaces, and outdoor areas.",
      image: "/clear/01.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Weather Protection" },
        { icon: <Sun className="h-5 w-5" />, text: "Clear Visibility" },
        { icon: <Ruler className="h-5 w-5" />, text: "Industrial Grade" },
      ],
      variants: ["Standard PVC", "Ribbed PVC", "Polar Grade", "Anti-Static", "UV Stabilized", "Various Widths"],
    },
    {
      category: "Vertical Blinds",
      title: "127mm Vertical Blinds",
      description:
        "Our 127mm vertical blinds offer superior light control and privacy. Perfect for large windows and sliding doors, combining functionality with contemporary style.",
      image: "/vertical-blinds/01.jpg",
      features: [
        { icon: <Sun className="h-5 w-5" />, text: "Precision Control" },
        { icon: <Shield className="h-5 w-5" />, text: "UV Protection" },
        { icon: <Ruler className="h-5 w-5" />, text: "Easy Maintenance" },
      ],
      variants: ["Block-Out", "Light Filter", "Textured", "Plain", "Perforated", "Metallic"],
    },
    {
      category: "Awnings",
      title: "Custom Awning Solutions",
      description:
        "Transform your outdoor space with our premium awnings. Designed for both residential and commercial applications, providing shade and style for any exterior.",
      image: "/images/awnings-feature.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "All-Weather" },
        { icon: <Sun className="h-5 w-5" />, text: "UV Resistant" },
        { icon: <Ruler className="h-5 w-5" />, text: "Custom Design" },
      ],
      variants: ["Fixed", "Retractable", "Folding Arm", "Drop Arm", "Conservatory", "Motorized"],
    },
    {
      category: "Curtains",
      title: "Luxury Curtain Collection",
      description:
        "Elevate your interior with our premium curtain collection. From sheer elegance to full blackout, our curtains combine luxury fabrics with expert craftsmanship.",
      image: "/curtains/01.png",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Premium Fabrics" },
        { icon: <Sun className="h-5 w-5" />, text: "Perfect Drape" },
        { icon: <Ruler className="h-5 w-5" />, text: "Custom Made" },
      ],
      variants: ["Sheer", "Blockout", "Lined", "Wave Pleat", "Pinch Pleat", "Eyelet", "S-Fold"],
    },
    {
      category: "Car Shades",
      title: "Automotive Shade Solutions",
      description:
        "Protect your vehicle interior with our premium car shades. Custom-fitted for all vehicle makes and models, providing superior UV protection and heat reduction.",
      image: "/car-shades/01.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "UV Blocking" },
        { icon: <Sun className="h-5 w-5" />, text: "Heat Reduction" },
        { icon: <Ruler className="h-5 w-5" />, text: "Custom Fit" },
      ],
      variants: ["Magnetic", "Static Cling", "Roll-Up", "Custom Cut", "Full Set", "Privacy"],
    },
    {
      category: "Floor Solutions",
      title: "Carpets & Rubber Mats",
      description:
        "Complete flooring solutions including premium carpets and durable rubber mats. Perfect for homes, offices, and commercial spaces, offering comfort and practicality.",
      image: "/carpets/01.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Stain Resistant" },
        { icon: <Home className="h-5 w-5" />, text: "Durability" },
        { icon: <Ruler className="h-5 w-5" />, text: "Professional Install" },
      ],
      variants: ["Wall-to-Wall", "Area Rugs", "Commercial Grade", "Anti-Fatigue Mats", "Entrance Mats", "Custom Design"],
    },
    {
      category: "Zebra Blinds",
      title: "Zebra Blinds",
      description:
        "Experience the perfect balance of light and privacy with our zebra blinds. Featuring alternating sheer and solid fabric bands, these modern window treatments offer precise light control and elegant styling.",
      image: "/wooden-blinds/01.jpg",
      features: [
        { icon: <Sun className="h-5 w-5" />, text: "Precise Light Control" },
        { icon: <Shield className="h-5 w-5" />, text: "Easy to Clean" },
        { icon: <Ruler className="h-5 w-5" />, text: "Custom Fit" },
      ],
      variants: ["Motorized", "Chain Operated", "Cordless", "Blackout", "Light Filtering", "Double Layer"],
    },
    {
      category: "Wooden Blinds",
      title: "Wooden Blinds",
      description:
        "Add warmth and sophistication to your space with our wooden blinds and shutters. Crafted from premium materials for lasting beauty and functionality.",
      image: "/wooden-blinds/06.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Natural Beauty" },
        { icon: <Sun className="h-5 w-5" />, text: "Insulation" },
        { icon: <Ruler className="h-5 w-5" />, text: "Made to Measure" },
      ],
      variants: ["Basswood", "Cedar", "Plantation Shutters", "Security Shutters", "Venetian Style", "Custom Finish"],
    },
    {
      category: "Shutters",
      title: "Premium Interior Shutters",
      description:
        "Elevate your space with our premium interior shutters. Combining timeless elegance with superior functionality, our shutters offer perfect light control, enhanced privacy, and excellent insulation properties.",
      image: "/shutters/01.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Premium Quality" },
        { icon: <Sun className="h-5 w-5" />, text: "Light Control" },
        { icon: <Ruler className="h-5 w-5" />, text: "Custom Fit" },
      ],
      variants: ["Plantation Style", "Traditional", "Modern", "Security Shutters", "Aluminum", "Wood Composite"],
    },
    {
      category: "Panel Blinds",
      title: "Panel Blinds",
      description:
        "Elegant panel blinds offering a contemporary solution for large windows and sliding doors. Perfect for room dividers and patio doors, combining style with practical functionality.",
      image: "/panel-blinds/01.jpg",
      features: [
        { icon: <Sun className="h-5 w-5" />, text: "Light Control" },
        { icon: <Home className="h-5 w-5" />, text: "Room Division" },
        { icon: <Ruler className="h-5 w-5" />, text: "Wide Coverage" },
      ],
      variants: ["Blockout", "Light Filter", "Screen", "Decorative", "Translucent", "Patterned"],
    },
    {
      category: "Roman Blinds",
      title: "Classic Roman Blinds",
      description:
        "Timeless roman blinds that combine the softness of curtains with the practicality of blinds. Perfect for creating a luxurious, tailored look in any room.",
      image: "/roman/01.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Elegant Design" },
        { icon: <Sun className="h-5 w-5" />, text: "Soft Lighting" },
        { icon: <Ruler className="h-5 w-5" />, text: "Custom Made" },
      ],
      variants: ["Flat Style", "Hobbled", "Relaxed", "Lined", "Blackout", "Motorized"],
    },
  ]

  return (
    <section id="products" ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12 sm:py-24">
      {/* Decorative elements */}
      <motion.div
        className="absolute hidden sm:-right-16 sm:top-32 sm:h-64 sm:w-64 sm:block rounded-full bg-primary/5"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute hidden sm:-left-32 sm:bottom-32 sm:h-96 sm:w-96 sm:block rounded-full bg-primary/5"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-gray-600 font-bold tracking-tight">
            Our <span className="text-[#56bbf1]">Products</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600 px-4">
            Discover our premium range of blinds and awnings, designed to enhance your space with style and
            functionality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 sm:space-y-24"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.category}
              variants={itemVariants}
              className={`grid gap-4 sm:gap-8 md:grid-cols-2 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
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
                    priority={index < 2}
                  />
                  <div className="absolute bg-[#56bbf1] left-2 sm:left-4 top-2 sm:top-4 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-white">
                    {product.category}
                  </div>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 px-2 sm:px-0">
                <div>
                  <Link href="#gallery" className='cursor-pointer'>
                    <h3 className="text-xl sm:text-2xl text-[#56bbf1] font-bold">{product.title}</h3>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">{product.description}</p>
                  </Link>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-sm sm:text-base font-medium">Key Features</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {product.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-1 sm:gap-2 rounded-lg bg-gray-50 px-2 sm:px-3 py-1 sm:py-2 text-sm"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-primary">{feature.icon}</span>
                        <span className="text-xs sm:text-sm">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Variants */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-sm sm:text-base font-medium">Available Options</h4>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {product.variants.map((variant, i) => (
                      <motion.div
                        key={i}
                        className="rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm"
                        whileHover={{ backgroundColor: "#f9fafb" }}
                      >
                        {variant}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mx-auto mt-12 sm:mt-24 max-w-3xl rounded-xl bg-[#56bbf1] p-4 sm:p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white">Custom Solutions For Your Space</h3>
          <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-sm sm:text-base text-white/90">
            Not sure what you need? Our experts can help you find the perfect blinds or awnings for your home or
            business.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
            <Button size="lg" className="bg-black hover:bg-blue-600 text-sm sm:text-base">Request a Consultation</Button>
            <Button variant="outline" size="lg" className="bg-white text-sm sm:text-base">
              View All Products
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
