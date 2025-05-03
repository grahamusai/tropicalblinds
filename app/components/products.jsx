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
      category: "Wooden Blinds",
      title: "Wooden Blinds & Shutters",
      description:
        "Add warmth and sophistication to your space with our wooden blinds and shutters. Crafted from premium materials for lasting beauty and functionality.",
      image: "/wooden-blinds/01.jpg",
      features: [
        { icon: <Shield className="h-5 w-5" />, text: "Natural Beauty" },
        { icon: <Sun className="h-5 w-5" />, text: "Insulation" },
        { icon: <Ruler className="h-5 w-5" />, text: "Made to Measure" },
      ],
      variants: ["Basswood", "Cedar", "Plantation Shutters", "Security Shutters", "Venetian Style", "Custom Finish"],
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
