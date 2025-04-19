"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import FooterSection from "../components/footer"
import Navbar from "../components/Navbar"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    productCategory: "",
    specificProduct: "",
    message: "",
    preferredContact: "email",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const handleChange = () => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name, value) => {
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const errors= {}

    if (!formState.name.trim()) errors.name = "Name is required"
    if (!formState.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      errors.email = "Please enter a valid email"
    }
    if (!formState.phone.trim()) errors.phone = "Phone number is required"
    if (!formState.productCategory) errors.productCategory = "Please select a product category"
    if (!formState.message.trim()) errors.message = "Message is required"

    return errors
  }

  const handleSubmit = () => {
    e.preventDefault()

    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        productCategory: "",
        specificProduct: "",
        message: "",
        preferredContact: "email",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const blindsProducts = [
    "Roller Blinds",
    "Venetian Blinds",
    "Roman Blinds",
    "Vertical Blinds",
    "Wooden Blinds",
    "Motorized Blinds",
  ]

  const awningsProducts = [
    "Retractable Awnings",
    "Fixed Awnings",
    "Freestanding Awnings",
    "Motorized Awnings",
    "Commercial Awnings",
    "Pergola Covers",
  ]

  const getSpecificProducts = () => {
    switch (formState.productCategory) {
      case "blinds":
        return blindsProducts
      case "awnings":
        return awningsProducts
      default:
        return []
    }
  }

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
      <div className="bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Have questions about our blinds or awnings? We're here to help. Fill out the form below and our team will
              get back to you as soon as possible.
            </motion.p>
          </div>
        </div>

        {/* Contact section */}
        <div ref={sectionRef} className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-xl bg-white p-6 shadow-lg sm:p-10">
            <div className="grid gap-10 md:grid-cols-5">
              {/* Contact form - 3 columns */}
              <motion.div
                className="md:col-span-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.h2 variants={itemVariants} className="text-2xl text-[#56bbf1] font-bold">
                  Send Us a Message
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-2 text-gray-600">
                  Please fill out the form below with your inquiry
                </motion.p>

                {isSubmitted ? (
                  <motion.div
                    className="mt-8 rounded-lg bg-green-50 p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20 }}
                  >
                    <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                    <h3 className="mt-4 text-xl font-medium text-green-800">Thank You!</h3>
                    <p className="mt-2 text-green-700">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form variants={itemVariants} onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={formErrors.name ? "border-red-500" : ""}
                        />
                        {formErrors.name && <p className="text-sm text-red-500">{formErrors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={formErrors.email ? "border-red-500" : ""}
                        />
                        {formErrors.email && <p className="text-sm text-red-500">{formErrors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+263 1234-567 899"
                        className={formErrors.phone ? "border-red-500" : ""}
                      />
                      {formErrors.phone && <p className="text-sm text-red-500">{formErrors.phone}</p>}
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="productCategory">Product Category</Label>
                        <Select
                          value={formState.productCategory}
                          onValueChange={(value) => handleSelectChange("productCategory", value)}
                        >
                          <SelectTrigger
                            id="productCategory"
                            className={formErrors.productCategory ? "border-red-500" : ""}
                          >
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="blinds">Blinds</SelectItem>
                            <SelectItem value="awnings">Awnings</SelectItem>
                            <SelectItem value="other">Other Products</SelectItem>
                          </SelectContent>
                        </Select>
                        {formErrors.productCategory && (
                          <p className="text-sm text-red-500">{formErrors.productCategory}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="specificProduct">Specific Product</Label>
                        <Select
                          value={formState.specificProduct}
                          onValueChange={(value) => handleSelectChange("specificProduct", value)}
                          disabled={!formState.productCategory || formState.productCategory === "other"}
                        >
                          <SelectTrigger id="specificProduct">
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {formState.productCategory && (
                                <SelectLabel>
                                  {formState.productCategory === "blinds" ? "Blinds" : "Awnings"}
                                </SelectLabel>
                              )}
                              {getSpecificProducts().map((product) => (
                                <SelectItem key={product} value={product.toLowerCase().replace(/\s+/g, "-")}>
                                  {product}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        className={`min-h-[120px] ${formErrors.message ? "border-red-500" : ""}`}
                      />
                      {formErrors.message && <p className="text-sm text-red-500">{formErrors.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Contact Method</Label>
                      <RadioGroup
                        value={formState.preferredContact}
                        onValueChange={(value) => handleSelectChange("preferredContact", value)}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="contact-email" />
                          <Label htmlFor="contact-email" className="cursor-pointer">
                            Email
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone" className="cursor-pointer">
                            Phone
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="either" id="contact-either" />
                          <Label htmlFor="contact-either" className="cursor-pointer">
                            Either
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button type="submit" className="bg-[#56bbf1] w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className=" flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </motion.form>
                )}
              </motion.div>

              {/* Contact info - 2 columns */}
              <motion.div
                className="md:col-span-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div variants={itemVariants} className="rounded-lg bg-gray-50 p-6">
                  <h2 className="text-2xl text-[#56bbf1] font-bold">Contact Information</h2>
                  <p className="mt-2 text-gray-600">Reach out to us directly through any of these channels</p>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Our Location</h3>
                        <p className="mt-1 text-gray-600">25 George Silundika Regal Star Hse, 4th Floor North Wing</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone Number</h3>
                        <p className="mt-1 text-gray-600">+263 242 721 060 </p>
                        <p className="text-gray-600">+263 772 211 411</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email Address</h3>
                        <p className="mt-1 text-gray-600">info@tropicalblinds.co.zw</p>
                        <p className="text-gray-600">sales@trobicalblinds.co.zw</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Business Hours</h3>
                        <p className="mt-1 text-gray-600">Monday - Friday: 8:00 AM - 16:30 PM</p>
                        <p className="text-gray-600">Saturday: 08:00 AM - 11:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 overflow-hidden rounded-lg border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1129.2079867214488!2d31.049733691441396!3d-17.82983684454879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s25%20George%20Silundika%20Regal%20Star!5e0!3m2!1sen!2sza!4v1744803829555!5m2!1sen!2sza"
                       
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ShadeBright Location"
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
