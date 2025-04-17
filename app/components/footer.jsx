"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FooterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    e.preventDefault()
    if (email) {
      // Here you would typically handle the subscription with an API call
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-xl font-bold">
              Tropical Shades
            </div>
            <p className="text-black">
            Tropical Shades now manufactures and markets a full range of Internal and External blinds, curtains, doormats, car-sheds and awnings. 
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/tropical001"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black transition-colors hover:bg-primary hover:text-white"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/Tropical_shades"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black transition-colors hover:bg-primary hover:text-white"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              
              
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-3">
              {[
                "Roller Blinds",
                "Venetian Blinds",
                "Roman Blinds",
                "Vertical Blinds",
                "Retractable Awnings",
                "Fixed Awnings",
                "Motorized Systems",
                "Custom Solutions",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="inline-block text-black transition-colors hover:text-primary"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {[
                "About",
                "Gallery",
                "Contact",
                "Products",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="inline-block text-black transition-colors hover:text-primary"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-black">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>25 George Silundika Regal Star Hse, 4th Floor North wing</span>
                </li>
                <li className="flex flex-col  gap-3 text-black">
                  {/* <Phone className="h-5 w-5 shrink-0 text-primary" /> */}
                  <span>+263 242 721 060  </span>
                  <span>+263 772 211 411</span>
                  <span>+263 772 237 348</span>
                </li>
                <li className="flex flex-col  gap-3 text-black">
                  {/* <Mail className="h-5 w-5 shrink-0 text-primary" /> */}
                  <span>info@tropicalblinds.co.zw</span>
                  <span>sales@tropicalblinds.co.zw</span>
                </li>
              </ul>
            </div>

          
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 border-t border-gray-200 py-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-black">© {currentYear} Tropical Shades. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-black">
              
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
