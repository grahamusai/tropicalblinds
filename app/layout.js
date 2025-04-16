import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterSection from "./components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = { 
  title: "Tropical Shades",
  description: "Your partner in blinds, curtains, car-sheds, carpets and awnings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
