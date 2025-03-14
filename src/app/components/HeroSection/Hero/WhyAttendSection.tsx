"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhyAttendSection() {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Expert Insights",
      description: "Gain valuable knowledge from industry professionals with years of experience",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Practical Skills",
      description: "Learn in a supportive, interactive environment designed for hands-on learning",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-600" />,
      title: "Responsible Enjoyment",
      description: "Discover new ways to enjoy cannabis responsibly and enhance your experience",
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
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">Why Attend?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-green-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-green-100 rounded-full">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Reserve your spot today and embark on a journey of discovery and culinary innovation.
          </p>
          <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-105">
            Register Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

