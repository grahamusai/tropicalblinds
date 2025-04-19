"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    id: 1,
    src: "/bamboo/01.jpg",
    alt: "Modern roller blinds in a living room",
    category: "all",
    description: "Modern Roller Blinds",
    location: "Contemporary Living Room",
  },
  {
    id: 2,
    src: "/bamboo/02.jpg",
    alt: "Retractable awning on a patio",
    category: "all",
    description: "Retractable Patio Awning",
    location: "Suburban Home",
  },
  {
    id: 3,
    src: "/bamboo/03.jpg",
    alt: "Venetian blinds in an office",
    category: "all",
    description: "Aluminum Venetian Blinds",
    location: "Corporate Office",
  },

  {
    id: 4,
    src: "/drop-blinds/01.jpg",
    alt: "Fixed awning for a storefront",
    category: "all",
    description: "Commercial Fixed Awning",
    location: "Retail Storefront",
  },
  {
    id: 5,
    src: "/drop-blinds/02.jpg",
    alt: "Roman blinds in a bedroom",
    category: "all",
    description: "Elegant Roman Blinds",
    location: "Master Bedroom",
  },
  {
    id: 6,
    src: "/panel-blinds/01.jpg",
    alt: "Motorized awning for a restaurant",
    category: "all",
    description: "Motorized Restaurant Awning",
    location: "Outdoor Dining Area",
  },
  {
    id: 7,
    src: "/panel-blinds/02.jpg",
    alt: "Vertical blinds for a sliding door",
    category: "all",
    description: "Vertical Blinds",
    location: "Patio Door Installation",
  },
  {
    id: 8,
    src: "/panel-blinds/03.jpg",
    alt: "Freestanding awning by a pool",
    category: "all",
    description: "Freestanding Poolside Awning",
    location: "Luxury Backyard",
  },
  // Roller Blinds
  {
    id: 9,
    src: "/roller-blinds/01.jpg",
    alt: "Wooden blinds in a study",
    category: "roller-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 10,
    src: "/roller-blinds/02.jpg",
    alt: "Wooden blinds in a study",
    category: "roller-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 11,
    src: "/roller-blinds/03.jpg",
    alt: "Wooden blinds in a study",
    category: "roller-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  // venitian-blinds
  {
    id: 12,
    src: "/venitian-blinds/01.jpg",
    alt: "Wooden blinds in a study",
    category: "roller-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 13,
    src: "/venitian-blinds/05.jpg",
    alt: "Wooden blinds in a study",
    category: "venitian-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 14,
    src: "/venitian-blinds/03.webp",
    alt: "Wooden blinds in a study",
    category: "venitian-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 15,
    src: "/venitian-blinds/04.jpg",
    alt: "Wooden blinds in a study",
    category: "venitian-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },

  // 127 mm vertical blinds
  {
    id: 16,
    src: "/vertical-blinds/01.jpg",
    alt: "Wooden blinds in a study",
    category: "vertical-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 17,
    src: "/vertical-blinds/02.jpg",
    alt: "Wooden blinds in a study",
    category: "vertical-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 18,
    src: "/vertical-blinds/03.jpg",
    alt: "Wooden blinds in a study",
    category: "vertical-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 19,
    src: "/vertical-blinds/04.jpg",
    alt: "Wooden blinds in a study",
    category: "vertical-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 20,
    src: "/vertical-blinds/05.jpg",
    alt: "Wooden blinds in a study",
    category: "vertical-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  // Awnings
  {
    id: 21,
    src: "/awnings/01.jpg",
    alt: "Wooden blinds in a study",
    category: "awnings",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 22,
    src: "/awnings/02.jpg",
    alt: "Wooden blinds in a study",
    category: "awnings",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  // Curtains
  {
    id: 23,
    src: "/vertical-blinds/05.jpg",
    alt: "Wooden blinds in a study",
    category: "blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 24,
    src: "/curtains/01.png",
    alt: "Wooden blinds in a study",
    category: "curtains",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 25,
    src: "/curtains/02.avif",
    alt: "Wooden blinds in a study",
    category: "curtains",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 26,
    src: "/curtains/03.webp",
    alt: "Wooden blinds in a study",
    category: "curtains",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 27,
    src: "/curtains/04.avif",
    alt: "Wooden blinds in a study",
    category: "curtains",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },

  {
    id: 28,
    src: "/curtains/06.webp",
    alt: "Wooden blinds in a study",
    category: "curtains",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 29,
    src: "/curtains/05.jpg",
    alt: "Wooden blinds in a study",
    category: "curtains",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  // Car Shades
  {
    id: 30,
    src: "/car-shades/01.jpg",

    alt: "Wooden blinds in a study",
    category: "carsheds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 31,
    src: "/car-shades/02.jpg",
    alt: "Wooden blinds in a study",
    category: "carsheds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 32,
    src: "/car-shades/03.jpg",
    alt: "Wooden blinds in a study",
    category: "carsheds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 33,
    src: "/car-shades/04.jpg",
    alt: "Wooden blinds in a study",
    category: "carsheds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 34,
    src: "/car-shades/05.jpg",
    alt: "Wooden blinds in a study",
    category: "carsheds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 35,
    src: "/car-shades/06.jpg",
    alt: "Wooden blinds in a study",
    category: "carsheds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 36,
    src: "/car-shades/07.jpg",
    alt: "Wooden blinds in a study",
    category: "carsheds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 37,
    src: "/car-shades/08.jpg",
    alt: "Wooden blinds in a study",
    category: "carsheds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  // Carpets
  {
    id: 38,
    src: "/carpets/01.jpg",
    alt: "Wooden blinds in a study",
    category: "carpets",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 39,
    src: "/carpets/02.jpg",
    alt: "Wooden blinds in a study",
    category: "carpets",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 40,
    src: "/carpets/03.jpg",
    alt: "Wooden blinds in a study",
    category: "carpets",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  // {
  //   id: 33,
  //   src: "/carpets/04.jpg",
  //   alt: "Wooden blinds in a study",
  //   category: "carpets",
  //   description: "Premium Wooden Blinds",
  //   location: "Home Office",
  // },
  {
    id: 41,
    src: "/carpets/04.webp",
    alt: "Wooden blinds in a study",
    category: "carpets",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 42,
    src: "/carpets/04.jpg",
    alt: "Wooden blinds in a study",
    category: "carpets",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 43,
    src: "/carpets/05.jpg",
    alt: "Wooden blinds in a study",
    category: "carpets",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 44,
    src: "/carpets/06.jpg",
    alt: "Wooden blinds in a study",
    category: "carpets",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 45,
    src: "/carpets/07.jpg",
    alt: "Wooden blinds in a study",
    category: "carpets",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  // Shutters
  {
    id: 46,
    src: "/shutters/01.jpg",
    alt: "Wooden blinds in a study",
    category: "shutters",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 47,
    src: "/shutters/02.jpg",
    alt: "Wooden blinds in a study",
    category: "shutters",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 48,
    src: "/shutters/03.jpg",
    alt: "Wooden blinds in a study",
    category: "shutters",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 49,
    src: "/shutters/04.jpg",
    alt: "Wooden blinds in a study",
    category: "shutters",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 50,
    src: "/shutters/05.jpg",
    alt: "Wooden blinds in a study",
    category: "shutters",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 51,
    src: "/shutters/05.jpg",
    alt: "Wooden blinds in a study",
    category: "shutters",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 52,
    src: "/shutters/06.jpg",
    alt: "Wooden blinds in a study",
    category: "shutters",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 53,
    src: "/shutters/07.jpg",
    alt: "Wooden blinds in a study",
    category: "shutters",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 54,
    src: "/clear/01.jpg",
    alt: "Wooden blinds in a study",
    category: "clear-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 55,
    src: "/clear/02.jpg",
    alt: "Wooden blinds in a study",
    category: "clear-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 56,
    src: "/clear/03.jpg",
    alt: "Wooden blinds in a study",
    category: "clear-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 57,
    src: "/clear/04.jpg",
    alt: "Wooden blinds in a study",
    category: "clear-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 58,
    src: "/wooden-blinds/01.jpg",
    alt: "Wooden blinds in a study",
    category: "wooden-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 59,
    src: "/wooden-blinds/02.jpg",
    alt: "Wooden blinds in a study",
    category: "wooden-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
  {
    id: 60,
    src: "/wooden-blinds/03.webp",
    alt: "Wooden blinds in a study",
    category: "wooden-blinds",
    description: "Premium Wooden Blinds",
    location: "Home Office",
  },
];

export default function GallerySection() {
  const [filter, setFilter] = useState("venitian-blinds");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show fewer items per page on mobile
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredItems = galleryItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Handle lightbox navigation
  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const previousIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

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
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24"
    >
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
          <h2 className="text-3xl text-gray-600 font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our <span className="text-[#56bbf1]">Gallery</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Browse our portfolio of completed projects and get inspired for your
            own space.
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
            variant="outline"
            onClick={() => setFilter("all")}
            className={`min-w-[100px] ${
              filter === "all"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            All
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("venitian-blinds")}
            className={`min-w-[100px] ${
              filter === "venitian-blinds"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            Venetians blinds
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("roller-blinds")}
            className={`min-w-[100px] ${
              filter === "roller-blinds"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            Roller blinds
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("clear-blinds")}
            className={`min-w-[100px] ${
              filter === "clear-blinds"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            Clear Strip Blinds
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("vertical-blinds")}
            className={`min-w-[100px] ${
              filter === "vertical-blinds"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            127 mm vertical blinds
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("awnings")}
            className={`min-w-[100px] ${
              filter === "awnings"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            Awnings
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("curtains")}
            className={`min-w-[100px] ${
              filter === "curtains"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            Curtains
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("carsheds")}
            className={`min-w-[100px] ${
              filter === "carsheds"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            Car Shades
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("carpets")}
            className={`min-w-[100px] ${
              filter === "carpets"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            Carpets & Rubber Mats
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("wooden-blinds")}
            className={`min-w-[100px] ${
              filter === "wooden-blinds"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            Wooden Blinds
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("shutters")}
            className={`min-w-[100px] ${
              filter === "shutters"
                ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                : ""
            }`}
          >
            Shutters
          </Button>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {currentItems.map((item) => (
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
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-2 ${
                    currentPage === i + 1
                      ? "bg-[#56bbf1] text-white hover:bg-[#56bbf1]/90"
                      : ""
                  }`}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
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
                <h3 className="text-xl font-bold">
                  {selectedImage.description}
                </h3>
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
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
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
  );
}
