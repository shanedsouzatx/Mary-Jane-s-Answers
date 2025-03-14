"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {  BookOpen, TrendingUp, Coffee, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function About(){
    const [isScrolled, setIsScrolled] = useState(false)
  
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
        {/* About Section */}
        <section id="about" className="py-20 px-0 bg-background "> 
  <div className="container mx-auto">
    <motion.div
      className="text-center max-w-3xl mx-auto mb-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <Badge className="bg-[#88BAC8] text-[#333A57] hover:bg-[#4D869B] rounded-full mb-4">
        Our Purpose
      </Badge>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        Empowering Through Knowledge
      </h2>
      <p className="text-lg md:text-xl text-[#88BAC8]">
        Our mission is to educate the cannabis community with reliable news and information, keeping people up to date on trends and advancements while providing practical recipes and how-to articles that help readers on their cannabis journey.
      </p>
    </motion.div>

    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
    >
      <motion.div className="bg-[#4D869B] p-6 rounded-xl" variants={item}>
        <BookOpen className="h-12 w-12 text-[#88BAC8] mb-4" />
        <h3 className="text-xl font-bold text-[#422C47] mb-2">
          Educational Content
        </h3>
        <p className="text-[#422C47]">
          Comprehensive guides and articles for both beginners and experienced users.
        </p>
      </motion.div>

      <motion.div className="bg-[#4D869B] p-6 rounded-xl" variants={item}>
        <TrendingUp className="h-12 w-12 text-[#88BAC8] mb-4" />
        <h3 className="text-xl font-bold text-[#422C47] mb-2">
          Latest Trends
        </h3>
        <p className="text-[#422C47]">
          Stay updated with the newest developments and trends in the cannabis industry.
        </p>
      </motion.div>

      <motion.div className="bg-[#4D869B] p-6 rounded-xl" variants={item}>
        <Coffee className="h-12 w-12 text-[#88BAC8] mb-4" />
        <h3 className="text-xl font-bold text-[#422C47] mb-2">
          Recipes & How-Tos
        </h3>
        <p className="text-[#422C47]">
          Practical guides and recipes to enhance your cannabis experience safely.
        </p>
      </motion.div>

      <motion.div className="bg-[#4D869B] p-6 rounded-xl" variants={item}>
        <Users className="h-12 w-12 text-[#88BAC8] mb-4" />
        <h3 className="text-xl font-bold text-[#422C47] mb-2">
          Community Support
        </h3>
        <p className="text-[#422C47]">
          A welcoming space for all backgrounds, genders, and experience levels.
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>




        </>
    )
}