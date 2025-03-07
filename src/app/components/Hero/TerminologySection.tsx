"use client"

import { motion } from "framer-motion"
import { Leaf, BookOpen, Globe, Heart } from "lucide-react"

export default function TerminologySection() {
  const reasons = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Scientific Accuracy",
      description:
        "The term 'cannabis' is botanically accurate, referring to the genus of the plant. It's a scientifically precise term that acknowledges the plant's biological classification.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Historical Context",
      description:
        "Terms like 'marijuana' have historically been used to stigmatize cannabis use and were popularized during prohibition eras to associate the plant with negative stereotypes.",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Global Acceptance",
      description:
        "As cannabis becomes more widely accepted for medicinal and recreational use worldwide, using neutral terminology helps normalize discussions around its benefits and applications.",
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Respect and Inclusivity",
      description:
        "Using the term 'cannabis' promotes a more respectful, inclusive dialogue that focuses on education and informed choices rather than perpetuating outdated stigmas.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          Why Do We Use Cannabis and Not Weed or Marijuana
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
          Our choice of terminology reflects our commitment to education, respect, and accuracy in all discussions about
          this remarkable plant.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-green-100"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-4 p-3 bg-green-100 rounded-full">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 flex-grow">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

