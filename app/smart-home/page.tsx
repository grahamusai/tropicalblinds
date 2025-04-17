"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import AutoScrollingCarousel from "../components/auto-scrolling-carousel";
import {
  Smartphone,
  Wifi,
  Clock,
  Sun,
  Moon,
  Zap,
  Shield,
  Volume2,
  Sliders,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import FooterSection from "../components/footer";

export default function SmartHomePage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/images/curtains.jpg", "/smart/02.jpg", "/smart/03.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const smartProducts = [
    {
      id: "motorized-roller-blinds",
      title: "Motorized Roller Blinds",
      description:
        "Our motorized roller blinds combine sleek design with smart technology. Control light and privacy with the touch of a button or voice command. Perfect for hard-to-reach windows and modern living spaces.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Whisper-quiet motors",
        "Programmable schedules",
        "Remote and smartphone control",
        "Battery or hardwired options",
      ],
    },
    {
      id: "motorized-venetian-blinds",
      title: "Motorized Venetian Blinds",
      description:
        "Experience precise light control with our motorized venetian blinds. Adjust slat angles and height automatically to create the perfect ambiance throughout the day. Available in aluminum, wood, and faux wood options.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Precise slat angle control",
        "Customizable presets",
        "Sun tracking capability",
        "Child-safe cordless design",
      ],
    },
    {
      id: "motorized-curtains",
      title: "Motorized Curtains",
      description:
        "Transform your living space with our elegant motorized curtains. Silently glide open or closed on schedule or on demand. Perfect for creating dramatic reveals or ensuring privacy with minimal effort.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Ultra-quiet belt drive system",
        "Adjustable speed settings",
        "Compatible with decorative rods",
        "Straight or curved track options",
      ],
    },
    {
      id: "remote-controlled-shutters",
      title: "Remote Controlled Shutters",
      description:
        "Our remote-controlled shutters provide superior insulation, security, and light control. Built with durable materials and reliable motors, these shutters can be programmed to respond to temperature, time of day, or security needs.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Weather-resistant construction",
        "Enhanced security features",
        "Superior insulation",
        "Integrated obstacle detection",
      ],
    },
  ];

  const integrations = [
    {
      name: "Amazon Alexa",
      icon: <Volume2 className="h-8 w-8" />,
      description:
        "Control your blinds with voice commands through Amazon Alexa devices.",
    },
    {
      name: "Google Home",
      icon: <Volume2 className="h-8 w-8" />,
      description:
        "Seamless integration with Google Home for voice-activated control.",
    },
    {
      name: "Apple HomeKit",
      icon: <Smartphone className="h-8 w-8" />,
      description:
        "Connect with Apple HomeKit for control via Siri and the Home app.",
    },
    {
      name: "Samsung SmartThings",
      icon: <Wifi className="h-8 w-8" />,
      description:
        "Integrate with SmartThings for comprehensive home automation.",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white ">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-900 py-48 text-white">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/images/smart-home.jpg"
              alt="Smart home background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 to-black/30" />

          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Smart Home{" "}
                  <span className="text-[#56bbf1]">Window Solutions</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300">
                  Transform your home with our range of motorized blinds,
                  curtains, and shutters. Experience the perfect blend of
                  convenience, style, and energy efficiency.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#56bbf1] hover:bg-primary/90"
                  >
                    <Link href="#products">Explore Products</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-black hover:bg-white/10 hover:text-white"
                  >
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto hidden md:block"
              >
                <div className="relative h-[400px] w-[400px]">
                  <motion.div
                    className="absolute left-0 top-0 h-full w-full rounded-full bg-primary/20"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="Smart home control"
                    width={400}
                    height={400}
                    className="relative z-10 rounded-full object-cover"
                  />
                  <motion.div
                    className="absolute -right-6 -top-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Smartphone className="h-10 w-10" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-6 left-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <Wifi className="h-8 w-8" />
                  </motion.div>
                  <motion.div
                    className="absolute -left-6 top-1/3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-lg"
                    animate={{ x: [0, -10, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Clock className="h-7 w-7" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose{" "}
                <span className="text-primary">Smart Window Coverings</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Experience the perfect blend of technology and convenience with
                our motorized solutions.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-lg bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Effortless Control</h3>
                <p className="mt-2 text-gray-600">
                  Control all your window coverings from your smartphone,
                  tablet, remote, or voice commands.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-lg bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Energy Efficiency</h3>
                <p className="mt-2 text-gray-600">
                  Automatically adjust blinds based on temperature and sunlight
                  to reduce energy costs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-lg bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Scheduled Automation</h3>
                <p className="mt-2 text-gray-600">
                  Set schedules to automatically open and close your window
                  coverings throughout the day.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-lg bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Enhanced Security</h3>
                <p className="mt-2 text-gray-600">
                  Create the appearance of an occupied home by automatically
                  operating blinds while you're away.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        <AutoScrollingCarousel />
       

        {/* Call to Action */}
        <section className="bg-primary py-20 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Transform Your Home?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Schedule a free consultation with our smart home specialists to
                discover the perfect motorized window solutions for your space.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/products">Browse All Products</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
