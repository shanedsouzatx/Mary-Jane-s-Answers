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
export default function Blog(){
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
          {/* Blog Section */}
      <section id="blog" className="py-20 bg-green-100 ">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <Badge className="bg-white text-[#333A57] hover:bg-[#4D869B] mb-4">Latest Articles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333A57] mb-6">Explore Our Blog</h2>
            <p className="text-lg text-gray-700">
              Discover the latest news, guides, and insights from our cannabis experts. Whether you're a beginner or
              experienced user, there's always something new to learn.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
          >
            <motion.div variants={item}>
              <BlogCard
                title="Beginner's Guide to Cannabis Strains"
                description="Learn about the differences between indica, sativa, and hybrid strains and how to choose the right one for you."
                category="Education"
                image="/ab1.jpg"
                date="May 15, 2023"
              />
            </motion.div>

            <motion.div variants={item}>
              <BlogCard
                title="5 Delicious Cannabis-Infused Recipes"
                description="Explore these easy-to-make recipes that will elevate your culinary experience with cannabis."
                category="Recipes"
                image="/ab2.webp"
                date="June 2, 2023"
              />
            </motion.div>

            <motion.div variants={item}>
              <BlogCard
                title="Latest Cannabis Research Breakthroughs"
                description="Stay informed about the newest scientific discoveries and medical applications of cannabis."
                category="News"
                image="/ab3.jpg"
                date="June 10, 2023"
              />
            </motion.div>

            <motion.div variants={item}>
              <BlogCard
                title="How to Grow Cannabis at Home: A Beginner's Guide"
                description="Everything you need to know about starting your own small cannabis garden at home legally."
                category="How-To"
                image="/ab4.jpg"
                date="June 18, 2023"
              />
            </motion.div>

            <motion.div variants={item}>
              <BlogCard
                title="Understanding CBD vs. THC: Benefits and Effects"
                description="A comprehensive comparison of the two most prominent cannabinoids and their effects on the body."
                category="Education"
                image="/ab5.webp"
                date="June 25, 2023"
              />
            </motion.div>

            <motion.div variants={item}>
              <BlogCard
                title="Cannabis and Wellness: Beyond Recreation"
                description="Explore how cannabis is being integrated into wellness routines for better health and wellbeing."
                category="Wellness"
                image="/ab6.jpg"
                date="July 3, 2023"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link href={'/blog'} className="bg-[#336063] hover:bg-[#4D869B] text-white px-8 py-6 text-lg">
              View All Articles </Link>
          </motion.div>
        </div>
      </section>
        </>
    )
}


// Define prop types
interface BlogCardProps {
    title: string;
    description: string;
    category: string;
    image?: string; // Optional (defaults to placeholder)
    date: string;
  }
  const BlogCard: React.FC<BlogCardProps> = ({ title, description, category, image = "/placeholder.svg", date }) => {
  
    return (
      <Card className="overflow-hidden bg-[#88BAC8] h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute  top-3 left-3 bg-white text-green-800 hover:bg-green-100">{category}</Badge>
        </div>
        <CardHeader className="">
          <CardTitle className="text-xl text-[#333A57]">{title}</CardTitle>
          <CardDescription className="text-[#422C47]">{date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-[#336063]">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="text-[#422C47] md:text-[15px] bottom-0 hover:text-[#422C47]  p-0">
            Read More <ArrowRight className="ml-2 h-4 w-4 " />
          </Button>
        </CardFooter>
      </Card>
    )
  }
  
  