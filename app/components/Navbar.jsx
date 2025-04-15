"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, MapPin, Award, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-blue-400 font-semibold
 w-full flex flex-col fixed  top-0 z-50">
      {/* Top bar */}
      <div className="w-full bg-black  py-2 px-4 md:px-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call us at</span>
            <a href="tel:+263772237348" className="hover:underline ">
              +263 77 223 7348
            </a>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link
              href="/retailers"
              className="flex items-center hover:underline"
            >
              <MapPin className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline ">25 George Silundika Regal Star Hse, 10 th Floor North wing</span>
              <span className="sm:hidden ">25 George Silundika</span>
            </Link>
            <Link href="/dealers" className="flex items-center hover:underline">
              <Award className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Become a dealer</span>
              <span className="sm:hidden">Dealers</span>
            </Link>
          </div>
        </div>
      </div>

     {/* main Navigation */}
        <div className="w-full bg-white  py-2 px-4 md:px-6 border-b-1 border-gray-300">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
          <Link href="/" className="flex-shrink-0">
              <img
                className="w-auto h-16"
                src="/images/logo.png"
                alt=""
              />
           
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
            <Link href="/" className="text-blue-600 font-medium">
              HOME
            </Link>
            <Link
              href="/products"
              className="text-gray-600 hover:text-blue-600"
            >
              ABOUT
            </Link>
            <Link
              href="/tailoring"
              className="text-gray-600 hover:text-blue-600"
            >
              PRODUCTS
            </Link>
            <Link
              href="/smart-home"
              className="text-gray-600 hover:text-blue-600"
            >
              GALLERY
            </Link>

            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              CONTACT US
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/documents/profile.pdf" target="_blank" className="bg-blue-400  hover:bg-blue-500 text-white px-4 py-2 gap-0.5 flex items-center">
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
                className="text-blue-600 font-medium py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/products"
                className="text-gray-600 py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                PRODUCTS
              </Link>
              <Link
                href="/tailoring"
                className="text-gray-600 py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                TAILORING
              </Link>
              <Link
                href="/smart-home"
                className="text-gray-600 py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                SMART HOME
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
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center mt-2">
                Get a free quote
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
