"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Users, Zap, Globe } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

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

  const teamMembers = [
    {
      name: "Blinds",
      // role: "Founder & CEO",
      image: "/roller-blinds/01.jpg",
    },
    {
      name: "Awnings",
      // role: "Creative Director", 
      image: "/images/awning-hero.jpg",
    },
    {
      name: "Shutters",
      // role: "Lead Designer",
      image: "/shutters/03.jpg",
    },
    {
      name: "Curtains",
      // role: "Installation Manager",
      image: "/images/curtains.jpg",
    },
    {
      name: "Car Shades",
      // role: "Customer Service Lead",
      image: "/images/car-shade4.jpg",
    },
    {
      name: "Carperts",
      // role: "Sales Director",
      image: "/images/carpets0.jpg",
    },
  ]

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24">
      {/* Decorative elements */}
      <motion.div
        className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/5"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/5"
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
            Our <span className="text-[#56bbf1]">Story</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We're a team of passionate creators dedicated to building exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* About content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-600">
            Tropical Shades was established in 2017 only manufacturing vertical blinds in Zimbabwe. Our aim is to completely satisfy our customers by using the knowledge and expertise gained from our experience. Tropical Shades now manufactures and markets a full range of Internal and External blinds, curtains, doormats, car-sheds and awnings.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Quality First Approach</h3>
                  <p className="text-gray-600">We never compromise on quality and attention to detail.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Client-Centered Solutions</h3>
                  <p className="text-gray-600">Your goals and needs are at the center of everything we create.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Innovative Thinking</h3>
                  <p className="text-gray-600">We push boundaries to find new and better solutions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Global Perspective</h3>
                  <p className="text-gray-600">Our diverse team brings insights from around the world.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        
                <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative h-[600px] md:h-auto"
                >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center rounded-lg bg-white p-2 shadow-md transition-shadow hover:shadow-lg"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="mb-2 h-40 w-full rounded-md object-cover"
                    />
                    <h3 className="text-lg font-medium">{member.name}</h3>
                  </motion.div>
                  ))}
                </div>
                </motion.div>
              </div>

            
      </div>
    </section>
  )
}

// Counter component with animation
function CounterStat({ value, label }) {
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: true })

  return (
    <div ref={counterRef} className="text-center">
      <motion.div
        className="text-3xl font-bold text-primary"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {isInView ? <Counter from={0} to={value} duration={2} /> : "0"}
        </motion.span>
        <span>+</span>
      </motion.div>
      <p className="text-gray-600">{label}</p>
    </div>
  )
}

// Counter animation component
function Counter({ from, to, duration = 2 }) {
  const nodeRef = useRef(null)

  return (
    <motion.span
      ref={nodeRef}
      initial={{ count: from }}
      animate={{ count: to }}
      transition={{ duration, ease: "easeOut" }}
    >
      {({ count }) => Math.floor(count)}
    </motion.span>
  )
}
