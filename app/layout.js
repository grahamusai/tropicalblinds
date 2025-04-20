import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import FooterSection from "./components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Tropical Shades",
  description:
    "Your partner in blinds, curtains, car-sheds, carpets and awnings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <div className="fixed bottom-6 right-6" style={{ zIndex: 9999 }}>
          <a
            href="https://wa.me/+263772237348"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0fc244] text-white font-medium rounded-md px-3 py-2 flex items-center justify-center hover:bg-green-800 transition duration-300 ease-in-out shadow-lg"
          >
            <FaWhatsapp />
          </a>
        </div>
        <Navbar />
        
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
