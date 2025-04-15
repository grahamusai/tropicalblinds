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
      name: "Vertical Blinds1",
    //   role: "Founder & CEO",
      image: "/images/verticalblinds1.jpeg",
    },
    {
      name: "Vertical Blinds2",
    //   role: "Creative Director",
      image: "/images/verticalblinds2.jpeg",
    },
    {
      name: "Vertical Blinds",
    //   role: "Lead Developer",
      image: "/images/verticalblinds3.jpeg",
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our <span className="text-primary">Story</span>
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

          {/* Team section with staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative h-[400px] md:h-auto"
          >
            <div className="relative h-full">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="absolute rounded-lg bg-white p-2 shadow-lg"
                  initial={{
                    x: index % 2 === 0 ? -50 : 50,
                    y: 50 * index,
                    opacity: 0,
                    rotate: index % 2 === 0 ? -5 : 5,
                  }}
                  animate={
                    isInView
                      ? {
                          x: index % 2 === 0 ? 0 : index === 1 ? 120 : 60,
                          y: index * 120,
                          opacity: 1,
                          rotate: index % 2 === 0 ? -3 : 3,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                    zIndex: 10,
                    transition: { duration: 0.3 },
                  }}
                  style={{
                    width: `${220 - index * 20}px`,
                    zIndex: 3 - index,
                  }}
                >
                  <div className="relative overflow-hidden rounded">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="h-auto w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-200">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats counter */}
        <motion.div
          className="mt-20 grid grid-cols-2 gap-8 rounded-xl bg-white p-8 shadow-lg sm:grid-cols-4"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <CounterStat value={150} label="Clients" />
          <CounterStat value={80} label="Projects" />
          <CounterStat value={27} label="Team Members" />
          <CounterStat value={12} label="Awards" />
        </motion.div>
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
