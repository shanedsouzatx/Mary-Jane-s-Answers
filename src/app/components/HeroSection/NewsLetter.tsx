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
export default function NewsLetter(){
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
           
 {/* Newsletter Section */}
 <section className="py-20 bg-accent ">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto bg-text rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="bg-green-100 text-primary hover:bg-secondary mb-4">Stay Updated</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-secondary">
                  Get the latest cannabis news, recipes, and educational content delivered straight to your inbox.
                </p>
              </div>

              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 border-primary focus:border-primary focus:ring-secondary"
                  />
                  <Button className="bg-primary hover:bg-secondary text-text">Subscribe</Button>
                </div>
                <p className="text-xs text-primary text-center">
                  By subscribing, you agree to our Privacy Policy and confirm you are at least 21 years of age.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
        </>
    )
}