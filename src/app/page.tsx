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
import Slideshow from "./components/HeroSection/Slideshow"
import CoachingSection from "./components/HeroSection/Hero/CoachingSection"
import GallerySection from "./components/HeroSection/Hero/GallerySection"
import SeedProvidersSection from "./components/HeroSection/Hero/SeedProvider"
import WhyAttendSection from "./components/HeroSection/Hero/WhyAttendSection"
import WorkshopsSection from "./components/HeroSection/Hero/WorkshopsSection"
import TerminologySection from "./components/HeroSection/Hero/TerminologySection"
import About from "./components/HeroSection/About"
import Blog from "./components/HeroSection/Blog"
import Feature from "./components/HeroSection/Feature"
import NewsLetter from "./components/HeroSection/NewsLetter"
export default function Home() {
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

  return (
    <div className="bg-white w-auto overflow-x-hidden ">
<Slideshow/>
     <About/> 
      {/* Blog Section */}
<Blog/>
    
 <NewsLetter/>
     
      {/* <WhyAttendSection/> */}

      {/* Community Section */}
      {/* <section id="community" className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <Badge className="bg-green-700 text-white hover:bg-green-600 mb-4">Join Our Community</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Growing Family</h2>
            <p className="text-lg text-green-100">
              Connect with fellow cannabis enthusiasts, share experiences, and learn together in our welcoming
              community. No matter your experience level, you'll find your place here.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
          >
            <motion.div className="bg-green-700 p-8 rounded-xl text-center" variants={item}>
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">10,000+</h3>
              <p>Community Members</p>
            </motion.div>

            <motion.div className="bg-green-700 p-8 rounded-xl text-center" variants={item}>
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">500+</h3>
              <p>Educational Articles</p>
            </motion.div>

            <motion.div className="bg-green-700 p-8 rounded-xl text-center" variants={item}>
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">200+</h3>
              <p>Recipes & How-Tos</p>
            </motion.div>
          </motion.div>
        </div>
      </section> */}
<WorkshopsSection/>
<Feature/> 
 <SeedProvidersSection/>
      
<CoachingSection/>
<GallerySection/>
<TerminologySection/> 

     
    {/* CTA Section */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">Have Questions? We're Here to Help</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our cannabis experts are ready to answer your questions and guide you on your journey. Reach out to us
              anytime!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                onClick={() => (window.location.href = "tel:+11234567890")}
              >
                <Phone className="mr-2 h-5 w-5" /> Call Mary
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg"
                onClick={() => (window.location.href = "mailto:info@cannalearn.com")}
              >
                <Mail className="mr-2 h-5 w-5" /> Email Mary
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  )
}

// // Define prop types
// interface BlogCardProps {
//   title: string;
//   description: string;
//   category: string;
//   image?: string; // Optional (defaults to placeholder)
//   date: string;
// }
// const BlogCard: React.FC<BlogCardProps> = ({ title, description, category, image = "/placeholder.svg", date }) => {

//   return (
//     <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
//       <div className="relative">
//         <Image
//           src={image || "/placeholder.svg"}
//           alt={title}
//           width={400}
//           height={200}
//           className="w-full h-48 object-cover"
//         />
//         <Badge className="absolute top-3 left-3 bg-white text-green-800 hover:bg-green-100">{category}</Badge>
//       </div>
//       <CardHeader>
//         <CardTitle className="text-xl text-green-900">{title}</CardTitle>
//         <CardDescription className="text-gray-500">{date}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <p className="text-gray-700">{description}</p>
//       </CardContent>
//       <CardFooter>
//         <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
//           Read More <ArrowRight className="ml-2 h-4 w-4" />
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }

