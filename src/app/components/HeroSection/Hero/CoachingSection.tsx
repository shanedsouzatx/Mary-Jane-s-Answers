"use client"

import { motion } from "framer-motion"
import { UserCircle, Compass, Target, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoachingSection() {
  const offerings = [
    {
      icon: <UserCircle className="h-8 w-8 text-green-600" />,
      title: "Personalized Guidance",
      description:
        "Work directly with our expert coaches to understand the benefits, safe usage, and practical applications of cannabis in your lifestyle.",
    },
    {
      icon: <Compass className="h-8 w-8 text-green-600" />,
      title: "Holistic Approach",
      description:
        "Learn how to integrate cannabis into your wellness routine, creative pursuits, or personal growth strategies.",
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Tailored Sessions",
      description: "Each coaching session is customized to address your unique questions, goals, and experiences.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-green-600" />,
      title: "Ongoing Support",
      description: "Benefit from continuous support and expert advice as you navigate your cannabis journey.",
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Mary Jane Cannabis Coaching</h2>
            <p className="text-lg text-gray-700 mb-6">
              Unlock the full potential of your cannabis journey with our personalized coaching sessions. At Mary Jane,
              our experienced cannabis coaches provide one-on-one guidance tailored to your individual needs—whether
              you're new to cannabis or looking to deepen your knowledge.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Discover a more informed, balanced, and confident approach to cannabis use.
            </p>
            <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-105">
              Book Your Coaching Session Today
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-green-200 hover:shadow-md transition-all duration-300 bg-white/90">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{offering.icon}</div>
                    <CardTitle className="text-xl text-green-800">{offering.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{offering.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

