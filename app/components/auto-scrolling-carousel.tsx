import Image from "next/image"

export default function AutoScrollingCarousel() {
  // Array of image data with different dimensions for visual variety
  const images = [
    { src: "/smart/1.jpg", alt: "Image 1", width: 400, height: 300 },
    { src: "/smart/2.jpg", alt: "Image 2", width: 400, height: 300 },
    { src: "/smart/3.jpg", alt: "Image 3", width: 400, height: 300 },
    { src: "/smart/4.jpg", alt: "Image 4", width: 400, height: 300 },
    { src: "/smart/5.jpg", alt: "Image 5", width: 400, height: 300 },
    { src: "/smart/6.jpg", alt: "Image 6", width: 400, height: 300 },
    { src: "/smart/7.jpg", alt: "Image 7", width: 400, height: 300 },
    { src: "/smart/8.jpg", alt: "Image 8", width: 400, height: 300 },
  ]

  return (
    <section className="w-full overflow-hidden bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Gallery</h2>

        <div className="relative overflow-hidden">
          {/* First row of images */}
          <div className="flex animate-scroll">
            {images.map((image, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 px-3">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
            {/* Duplicate the images to create a seamless loop */}
            {images.map((image, index) => (
              <div key={`row1-dup-${index}`} className="flex-shrink-0 px-3">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>

          {/* Second row of images scrolling in the opposite direction */}
          <div className="mt-8 flex animate-scroll-reverse">
            {[...images].reverse().map((image, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 px-3">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
            {/* Duplicate the images to create a seamless loop */}
            {[...images].reverse().map((image, index) => (
              <div key={`row2-dup-${index}`} className="flex-shrink-0 px-3">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
