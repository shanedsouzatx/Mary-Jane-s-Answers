"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/c1.jpg",
      alt: "Cannabis plant close-up",
      caption: "Cannabis Sativa Leaf Detail",
    },
    {
      src: "/c2.avif",
      alt: "Cannabis flower bud",
      caption: "Premium Cannabis Flower",
    },
    {
      src: "/c3.jpeg",
      alt: "Cannabis tincture bottles",
      caption: "Therapeutic Cannabis Tinctures",
    },
    {
      src: "/c4.jpg",
      alt: "Cannabis edibles",
      caption: "Artisanal Cannabis Edibles",
    },
    {
      src: "/c5.jpg",
      alt: "Cannabis cultivation",
      caption: "Sustainable Cannabis Cultivation",
    },
    {
      src: "/c6.jpg",
      alt: "Cannabis oil extraction",
      caption: "Pure Cannabis Extract Process",
    },
    {
      src: "/c7.jpg",
      alt: "Cannabis topical products",
      caption: "Therapeutic Cannabis Topicals",
    },
    {
      src: "/c8.webp",
      alt: "Cannabis research laboratory",
      caption: "Cannabis Research & Development",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-green-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">Cannabis Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden rounded-lg relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-green-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative max-w-4xl max-h-[80vh] w-full">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] mx-auto"
              />
              <p className="text-white text-center mt-4 text-lg">{images[selectedImage].caption}</p>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}

