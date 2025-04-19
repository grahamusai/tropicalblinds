"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Menu,
  MapPin,
  Award,
  FileText,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 120; // Adjust for navbar height
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
        duration: 1500, // Slower scroll (1.5 seconds)
      });
    }
    setIsOpen(false);
  };

  return (
    <div
      className="text-blue-400 font-semibold
 w-full flex flex-col fixed  top-0 z-50"
    >
      {/* Top bar */}
      <div className="w-full bg-gray-700  py-3 px-4 md:px-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call us at</span>
            <a href="tel:+263242721060 " className="hover:underline ">
            +263 242 721 060 
            </a>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link
              href="/retailers"
              className="flex items-center hover:underline"
            >
              <MapPin className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline ">
              25 George Silundika, 4th floor regal star house north wing, Harare Zimbabwe
              </span>
              <span className="sm:hidden ">25 George Silundika, 4th floor regal star house north wing, Harare Zimbabwe</span>
            </Link>
            
          </div>
        </div>
      </div>

      {/* main Navigation */}
      <div className="w-full bg-white  py-2 px-4 md:px-6 border-b-1 border-gray-300">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img className="w-auto h-16" src="/images/logo.png" alt="" />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 font-medium">
              HOME
            </Link>
            <a
              href="/smart-home"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              SMART HOME
            </a>
           
            <a
              href="/products"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              PRODUCTS
            </a>
            
            <Link href="/gallery" className="text-gray-600 hover:text-blue-600">
              GALLERY
            </Link>
            <a
              href="/about"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              ABOUT
            </a>

            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              CONTACT US
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/documents/profile.pdf"
              target="_blank"
              className="bg-blue-400  hover:bg-blue-500 text-white px-4 py-2 gap-0.5 flex items-center"
            >
              <FileText className="ml-2 h-4 w-4" />
              Download Profile
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-600 font-medium py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/smart-home"
                className="text-gray-600 font-medium py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                SMART HOME
              </Link>
              
              <Link
                href="/products"
                className="text-gray-600 py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                PRODUCTS
              </Link>
              <Link
                href="/gallery"
                className="text-gray-600 py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                GALLERY
              </Link>
              <Link
                href="/about"
                className="text-gray-600 py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>

              <Link
                href="/contact"
                className="text-gray-600 py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </Link>
              <Link
                href="/documents/profile.pdf"
                target="_blank"
                className="bg-blue-400  hover:bg-blue-500 text-white px-4 py-2 gap-0.5 flex items-center justify-center"
              >
                <FileText className="ml-2 h-4 w-4" />
                Download Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
