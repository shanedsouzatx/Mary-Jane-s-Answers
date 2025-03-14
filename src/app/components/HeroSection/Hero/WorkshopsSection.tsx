"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function WorkshopsSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const workshops = [
    {
      title: "Basic Cannabis Education",
      description:
        "In this workshop, you'll learn about the fascinating world of cannabis—from its rich history and diverse strains to its safe usage and legal considerations. Our session is crafted to demystify cannabis, covering topics such as its effects, medicinal benefits, and responsible consumption practices. Ideal for beginners and those seeking a refresher, this workshop will equip you with the knowledge to make informed decisions.",
    },
    {
      title: "Cooking with Cannabis",
      description:
        "Unlock the art of infusing cannabis into your culinary creations. This workshop guides you through the fundamentals of dosage, preparation, and cooking techniques. Enjoy step-by-step demonstrations, explore creative recipes, and learn how to integrate cannabis into everyday meals responsibly. Whether you're a cooking enthusiast or simply curious about innovative recipes, this session offers a delicious blend of education and creativity.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-blue-50 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
          Discover Our Cannabis Workshops
        </h2>
        <p className="text-lg text-text mb-12 max-w-3xl mx-auto text-center">
          Join our engaging, hands-on workshops designed to empower and educate. Whether you're looking to deepen your
          understanding of cannabis or explore innovative culinary techniques, our expert-led sessions offer valuable
          insights and practical tips.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-background hover:shadow-lg transition-shadow duration-300 bg-accent backdrop-blur-sm">
                <CardHeader className="bg-green-100/50 rounded-t-lg">
                  <CardTitle className="text-2xl text-accent ">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-blue-200 text-base">{workshop.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="bg-secondary hover:bg-primary text-white w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}

