"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import FooterSection from "@/footer-section"



// Products data expanded with more details
const productsDetailed = [
  {
    id: "vertical-blinds",
    title: "Vertical Blinds",
    description:
      "Tropical Shades Vertical Blinds (also known as Vertical Drapes) combine the rich look of luxury and elegance with style and substance.",
    image: "/placeholder.svg?height=600&width=800",
    category: "blinds",
    longDescription:
      "Our Vertical Blinds offer the perfect blend of functionality and style. Ideal for large windows and sliding doors, these blinds provide excellent light control and privacy. The vertical slats can be rotated to allow precise control of light and visibility, or drawn completely to one side for unobstructed views. With a wide range of colors and materials available, our vertical blinds complement any interior design scheme.",
    features: [
      "Easy operation with chain and cord mechanisms",
      "Available in 89mm and 100mm slat widths",
      "Can be configured for split or one-way stacking",
      "Bottom weights for improved stability",
      "UV resistant materials",
    ],
    materials: ["Fabric", "PVC", "Aluminum", "Designer fabrics"],
    colors: ["White", "Cream", "Black", "Gray", "Beige", "Custom colors available"],
    applications: [
      "Large windows",
      "Sliding glass doors",
      "Office partitions",
      "Commercial spaces",
      "Residential living areas",
    ],
  },
  {
    id: "aluminium-venetians",
    title: "Aluminium Venetians",
    description:
      "Tropical Shades Aluminium Venetians are a classical, refreshing and practical alternative to both modern and traditional architecture.",
    image: "/placeholder.svg?height=600&width=800",
    category: "blinds",
    longDescription:
      "Our Aluminium Venetian Blinds offer timeless appeal with modern functionality. These durable blinds are perfect for controlling light while maintaining privacy. Made from high-quality aluminum, they're lightweight yet strong, and incredibly easy to maintain. The horizontal slats can be adjusted to control the amount of light entering the room, making them suitable for any room in your home or office.",
    features: [
      "Precision light control",
      "Slim profile headrail",
      "Child-safe cord tensioners",
      "Bottom rail for stability",
      "Anti-static treatment to repel dust",
    ],
    materials: ["Premium grade aluminum", "Lightweight and durable components"],
    colors: ["White", "Black", "Silver", "Charcoal", "Beige", "Metallic finishes"],
    applications: [
      "Windows in any room",
      "Kitchens and bathrooms",
      "Commercial spaces",
      "Offices",
      "Retail environments",
    ],
  },
  {
    id: "roller-blinds",
    title: "Roller Blinds",
    description:
      "Tropical Shades Roller Blinds - also known as Holland Blinds - are a practical and affordable window covering solutions.",
    image: "/placeholder.svg?height=600&width=800",
    category: "blinds",
    longDescription:
      "Our Roller Blinds offer a clean, contemporary look combined with simplicity of operation. These blinds roll up neatly at the top of your window, taking up minimal space when not in use. Available in a wide range of fabrics from sheer to blockout, they provide flexible light control and privacy options. Modern, practical, and affordable, roller blinds are an excellent choice for any window in your home.",
    features: [
      "Spring-assisted or chain operation",
      "Bottom rail for smooth operation",
      "Child-safe mechanisms available",
      "Custom sizing for exact fit",
      "Optional cassette valance for concealed roller",
    ],
    materials: ["Polyester", "Blockout fabric", "Light filtering fabric", "Sunscreen fabric"],
    colors: ["Wide range of colors and patterns available", "Custom printing options"],
    applications: [
      "Bedrooms",
      "Living areas",
      "Home offices",
      "Kitchens",
      "Bathrooms (with moisture-resistant fabrics)",
    ],
  },
  {
    id: "wooden-blinds",
    title: "Wooden Blinds (timber blinds)",
    description:
      "Tropical Shades Timber Venetians are a classical, refreshing and natural alternative to both modern, traditional architecture.",
    image: "/placeholder.svg?height=600&width=800",
    category: "blinds",
    longDescription:
      "Our Wooden Blinds bring natural warmth and elegance to any interior. Crafted from premium timber, these venetian-style blinds offer excellent light control while adding a touch of sophistication to your decor. The natural grain patterns of the wood make each blind uniquely beautiful. These blinds are perfect for creating a warm, inviting atmosphere in living rooms, studies, and bedrooms.",
    features: [
      "Made from sustainably sourced timber",
      "Cord and wand operation",
      "Child-safe options available",
      "Wide slat options: 50mm or 63mm",
      "Optional decorative tape for enhanced appearance",
    ],
    materials: ["Premium Basswood", "Cedar", "Oak", "Faux wood options"],
    colors: ["Natural", "Cherry", "Maple", "Walnut", "White", "Custom stains available"],
    applications: ["Living rooms", "Dining rooms", "Home offices", "Bedrooms", "Classic and contemporary interiors"],
  },
  {
    id: "bamboo-blinds",
    title: "Bamboo Blinds",
    description: "Tropical Shades Bamboo blinds are a renewable resource and are actually a wise environmental choice.",
    image: "/placeholder.svg?height=600&width=800",
    category: "blinds",
    longDescription:
      "Our Bamboo Blinds bring an organic, natural element to your interior design. Made from sustainable bamboo, these eco-friendly blinds add texture and warmth to any room. Each blind has a unique natural grain pattern, making them not just functional window coverings but also decorative elements. They filter light beautifully, creating a warm ambiance while providing privacy.",
    features: [
      "Eco-friendly, sustainable material",
      "Unique natural patterns",
      "Chain or cord operation",
      "Edge binding for durability",
      "Optional liner for increased privacy",
    ],
    materials: ["Natural bamboo", "Reed", "Jute", "Mixed natural fibers"],
    colors: ["Natural bamboo tones", "Stained finishes", "Painted options"],
    applications: [
      "Sunrooms",
      "Living areas",
      "Bedrooms",
      "Eco-friendly homes",
      "Coastal or tropical-themed interiors",
    ],
  },
  {
    id: "panel-roman-blinds",
    title: "Panel & Roman Blinds",
    description:
      "Tropical Shades Panel blinds system provides a contemporary method of obtaining privacy and sun protection. Tropical Shades Roman Blinds (also known as Roman Shades) are the ideal window covering solution for your home.",
    image: "/placeholder.svg?height=600&width=800",
    category: "blinds",
    longDescription:
      "Our Panel and Roman Blinds collection offers elegant solutions for modern homes. Panel blinds are ideal for large windows and sliding doors, creating a contemporary look with smooth-sliding fabric panels. Roman blinds provide a soft, fabric window covering that folds up neatly when raised, creating a cascading effect of fabric folds. Both styles combine functionality with decorative appeal, allowing you to express your design style through fabric choices.",
    features: [
      "Panel blinds: Smooth tracking system for easy operation",
      "Roman blinds: Chain operation with fold options",
      "Wide fabric selection for both styles",
      "Lining options for enhanced light blocking",
      "Custom sizing for perfect fit",
    ],
    materials: ["Designer fabrics", "Light filtering options", "Blockout fabrics", "Decorative patterns"],
    colors: ["Extensive range of colors and patterns", "Custom fabric options available"],
    applications: ["Living rooms", "Dining areas", "Bedrooms", "Home theaters", "Large window spans (panel blinds)"],
  },
  {
    id: "curtains",
    title: "Curtains (rods and rails)",
    description:
      "Tropical Shades Curtains - A set of curtains is a window treatment that comes in 2 or more sections consisting of left and right curtains.",
    image: "/placeholder.svg?height=600&width=800",
    category: "other",
    longDescription:
      "Our Curtains collection offers timeless elegance and versatility. Available in various fabrics from sheer to heavy drapes, our curtains add softness and style to any room. We offer both rod and rail systems to suit your preference and décor style. Curtains provide excellent insulation, helping to keep your home warmer in winter and cooler in summer, while also offering complete privacy when closed.",
    features: [
      "Rod pocket, eyelet, and pinch pleat heading options",
      "Single or double track systems available",
      "Manual or motorized operation",
      "Optional tiebacks and holdbacks",
      "Custom lengths and fullness",
    ],
    materials: ["Cotton", "Linen", "Polyester", "Silk", "Velvet", "Blackout lined options"],
    colors: ["Extensive color options", "Patterns and prints", "Textures", "Custom fabrics available"],
    applications: [
      "Living rooms",
      "Bedrooms",
      "Dining rooms",
      "Home theaters",
      "Any room requiring softness and elegance",
    ],
  },
  {
    id: "car-sheds",
    title: "Car-sheds",
    description:
      "Tropical Shades Car-sheds material range from 70% - 100% waterproof shade cloth can last for above 6 years before it is changed.",
    image: "/placeholder.svg?height=600&width=800",
    category: "other",
    longDescription:
      "Our Car-sheds provide durable protection for vehicles from the elements. Constructed with high-quality waterproof shade cloth ranging from 70% to 100% UV blockage, these structures offer excellent protection from sun damage, rain, and bird droppings. The breathable nature of the fabric allows air circulation while still providing shade and weather protection. Built to last with corrosion-resistant frames, our car-sheds are a practical investment for extending the life of your vehicles.",
    features: [
      "70% to 100% waterproof shade cloth options",
      "Durable, corrosion-resistant framework",
      "Custom sizes to fit your space",
      "Professional installation available",
      "Minimum 6-year lifespan",
    ],
    materials: ["High-density polyethylene shade cloth", "Galvanized or powder-coated steel frames"],
    colors: ["Beige", "Green", "Black", "Charcoal", "Custom colors available"],
    applications: [
      "Residential driveways",
      "Multi-car households",
      "Commercial parking areas",
      "Boat storage",
      "Outdoor equipment protection",
    ],
  },
  {
    id: "carpets-doormats",
    title: "Carpets and Doormats",
    description:
      "Tropical Shades Carpets were originally woven to the dimensions of the specific area they were covering.",
    image: "/placeholder.svg?height=600&width=800",
    category: "other",
    longDescription:
      "Our Carpets and Doormats collection offers both functionality and style for your home. We provide custom-sized carpets woven specifically to the dimensions of your space, ensuring a perfect fit every time. Our doormats are designed to trap dirt and moisture at entryways, protecting your interior flooring. Made from durable materials that withstand heavy foot traffic, our carpets and doormats add comfort and warmth to any space while being practical additions to your home.",
    features: [
      "Custom sizing for exact fit",
      "Stain-resistant treatments available",
      "Non-slip backing options",
      "Indoor and outdoor varieties",
      "Easy-clean materials",
    ],
    materials: ["Wool", "Nylon", "Polypropylene", "Coir", "Rubber-backed options"],
    colors: ["Wide range of colors and patterns", "Custom designs available"],
    applications: ["Entryways", "Living areas", "Bedrooms", "High-traffic areas", "Indoor and outdoor spaces"],
  },
  {
    id: "awnings-drop-blinds",
    title: "Awnings & Drop Blinds",
    description:
      "Tropical Shades wide range of Fixed Awnings, canopies, pergolas, verandahs, outdoor living areas and restaurants for privacy and sun protection. The Tropical Shades Straight Drop Awnings are designed to maximise the use of your outdoor areas all year around without necessarily creating a visual barrier.",
    image: "/placeholder.svg?height=600&width=800",
    category: "awnings",
    longDescription:
      "Our Awnings and Drop Blinds collection offers versatile solutions for outdoor spaces. Fixed awnings provide permanent shade for windows, doorways, and outdoor areas, while our straight drop awnings can be deployed when needed and retracted when not in use. Perfect for patios, decks, verandahs, and commercial outdoor spaces like restaurants, our awnings significantly reduce heat and glare while providing protection from UV rays. They extend your living space by making outdoor areas comfortable regardless of weather conditions.",
    features: [
      "Manual or motorized operation options",
      "Weather-resistant fabrics and components",
      "Wind rating options for different environments",
      "Clear or tinted PVC window options for drop blinds",
      "Custom designs to suit your architecture",
    ],
    materials: ["Acrylic canvas", "PVC-coated polyester", "Mesh fabrics", "Aluminum or steel frames"],
    colors: ["Wide range of colors and patterns", "Custom branding for commercial applications"],
    applications: ["Patios and decks", "Verandahs", "Windows", "Outdoor dining areas", "Commercial spaces"],
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.productId 
  const [product, setProduct] = useState<ProductDetailed | null>(null)

  useEffect(() => {
    const foundProduct = productsDetailed.find((p) => p.id === productId)
    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      // Redirect to products page if product not found
      router.push("/products")
    }
  }, [productId, router])

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Loading product information...</h2>
          </div>
        </div>
        <FooterSection />
      </>
    )
  }

  const relatedProducts = productsDetailed
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <div className="bg-white pb-24">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-primary">
                Products
              </Link>
              <span>/</span>
              <span className="text-gray-900">{product.title}</span>
            </div>
          </div>
        </div>

        {/* Product Hero Section */}
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="overflow-hidden rounded-xl border">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-3xl font-bold sm:text-4xl">{product.title}</h1>
              <div className="mt-4 flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">(25 reviews)</span>
              </div>
              <p className="mt-4 text-lg text-gray-600">{product.description}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="flex-1">
                  <Link href={`/contact?product=${product.id}`}>Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="mt-8 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Free Consultation:</span> Available for all products
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6 rounded-lg border p-6">
              <h3 className="text-xl font-semibold">Product Description</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">{product.longDescription}</p>
            </TabsContent>
            <TabsContent value="features" className="mt-6 rounded-lg border p-6">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6 rounded-lg border p-6">
              <h3 className="text-xl font-semibold">Specifications</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-medium">Available Materials</h4>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {product.materials.map((material, index) => (
                      <li key={index} className="text-gray-700">
                        • {material}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Color Options</h4>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {product.colors.map((color, index) => (
                      <li key={index} className="text-gray-700">
                        • {color}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="applications" className="mt-6 rounded-lg border p-6">
              <h3 className="text-xl font-semibold">Ideal Applications</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{application}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Related Products</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{relatedProduct.title}</h3>
                    <p className="mt-2 line-clamp-2 text-gray-600">{relatedProduct.description}</p>
                    <Link
                      href={`/products/${relatedProduct.id}`}
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      View Details
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Back to products button */}
        <div className="container mx-auto mt-12 px-4 text-center sm:px-6 lg:px-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/products" className="inline-flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </div>
      <FooterSection />
    </>
  )
}
