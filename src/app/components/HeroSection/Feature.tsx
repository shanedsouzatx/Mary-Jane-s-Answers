"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Phone, Mail, Menu, X, ArrowRight, Leaf, BookOpen, TrendingUp, Coffee, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"




export default function Feature(){

    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }
  
    const item = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    }
  
    const fadeIn = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    }
  
return(
    <>
    
 {/* Features Section */}
 <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/ab7.webp"
                alt="Cannabis Community"
                width={700}
                height={800}
                className="rounded-xl shadow-xl"
              />
            </motion.div>

            <motion.div
              className="lg:w-1/2 space-y-5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={container}
            >
              <motion.div variants={item}>
                {/* <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">Why Choose Us</Badge> */}
              </motion.div>
              <motion.h2 className="text-3xl md:text-4xl font-bold text-green-900" variants={item}>
              Why Attend?
              </motion.h2>
              <motion.p className="text-lg text-gray-700" variants={item}>
              Join our engaging, hands-on workshops designed to empower and educate. Whether you're looking to deepen your understanding of cannabis or explore innovative culinary techniques, our expert-led sessions offer valuable insights and practical tips.
              </motion.p>

              <motion.div className="space-y-4 pt-4" variants={item}>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 pt-2">Gain invaluable knowledge from industry professionals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 pt-2"> Master practical skills in a supportive, interactive environment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 pt-2"> Discover new ways to enjoy cannabis responsibly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 pt-2">Reserve your spot today and embark on a journey of discovery and culinary.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item}>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white mt-6"
                  onClick={() => (window.location.href = "tel:+11234567890")}
                >
                  <Phone className="mr-2 h-4 w-4" /> Register Now !
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
)
}