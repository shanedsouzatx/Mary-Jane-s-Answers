"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function SeedProvidersSection() {
  const providers = [
    {
      name: "Green Genetics",
      logo: "/seed1.svg",
      url: "https://example.com/green-genetics",
    },
    {
      name: "Seed Supreme",
      logo: "seed2.svg",
      url: "https://example.com/seed-supreme",
    },
    {
      name: "Botanical Innovations",
      logo: "/seed3.svg",
      url: "https://example.com/botanical-innovations",
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
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-5 text-center">Trusted Seed Providers</h2>
        <p className="text-lg md:text-xl  text-gray-800 mb-12 text-center mb-12">At Mary Jane’s Answers, we believe great cultivation starts with quality seeds. That’s why we recommend only trusted cannabis seed providers known for exceptional genetics and reliability. Whether you're a seasoned grower or just starting, sourcing from reputable seed banks ensures healthy plants and a successful harvest. We make it easy by connecting you with proven brands, so you can grow with confidence.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Link href={provider.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl   transition-all duration-300 transform hover:scale-105 border border-green-100">
                  <Image
                    src={provider.logo || "/placeholder.svg"}
                    alt={`${provider.name} logo`}
                    width={200}
                    height={200}
                    className="mx-auto h-[170px] w-[220px] "
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

