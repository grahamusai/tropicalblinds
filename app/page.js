import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Logos from "./components/logos";
import AboutSection from "./components/about-section";

export default function Home() {
  return (
    <div className="pt-[120px]">
      {" "}
      <Navbar />
      <Hero />
      <Logos />
      <AboutSection />
    </div>
  );
}
