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
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          Discover Our Cannabis Workshops
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
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
              <Card className="h-full border-green-200 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-green-100/50 rounded-t-lg">
                  <CardTitle className="text-2xl text-green-800">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-gray-700 text-base">{workshop.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="bg-green-700 hover:bg-green-800 text-white w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-16">
          <h3 className="text-2xl font-semibold text-green-800 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                question: "Who can attend these workshops?",
                answer:
                  "Our workshops are open to adults 21+ who are interested in learning more about cannabis in a legal, educational setting.",
              },
              {
                question: "Do I need prior knowledge to participate?",
                answer:
                  "No prior knowledge is required. Our workshops are designed to accommodate beginners while still providing value to those with some experience.",
              },
              {
                question: "Will there be hands-on activities?",
                answer: "Yes, all our workshops include interactive components to enhance the learning experience.",
              },
              {
                question: "How long are the workshops?",
                answer:
                  "Most workshops run for 2-3 hours, with breaks included. The exact duration is specified when you register.",
              },
            ].map((faq, index) => (
              <div key={index} className="border border-green-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-4 text-left font-medium text-green-800 hover:bg-green-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-green-600 transition-transform duration-200 ${expandedFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-4 pt-0 text-gray-700 bg-green-50/50">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </motion.div>
    </section>
  )
}

