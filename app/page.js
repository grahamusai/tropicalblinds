'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Logos from "./components/logos";
import AboutSection from "./components/about-section";
import ProductsSection from "./components/products";
import GallerySection from "./components/gallery-section";
import FooterSection from "./components/footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
  return (
    <div className="pt-[120px]">
      <Hero />
      <Logos />
      <ProductsSection />
      <AboutSection />
      <GallerySection />
    </div>
  );
}
