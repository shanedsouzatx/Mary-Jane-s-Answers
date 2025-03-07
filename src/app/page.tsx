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
import CoachingSection from "./components/Hero/CoachingSection"
import GallerySection from "./components/Hero/GallerySection"
import SeedProvidersSection from "./components/Hero/SeedProvider"
import WhyAttendSection from "./components/Hero/WhyAttendSection"
import WorkshopsSection from "./components/Hero/WorkshopsSection"
import TerminologySection from "./components/Hero/TerminologySection"

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-green-800">CannaLearn</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-green-800 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#blog" className="text-green-800 hover:text-green-600 transition-colors">
              Blog
            </Link>
            <Link href="#features" className="text-green-800 hover:text-green-600 transition-colors">
              Features
            </Link>
            <Link href="#community" className="text-green-800 hover:text-green-600 transition-colors">
              Community
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => (window.location.href = "tel:+11234567890")}
            >
              <Phone className="mr-2 h-4 w-4" /> Ask a Question
            </Button>
          </div>

          <button className="md:hidden text-green-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-green-800 hover:text-green-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#blog"
                className="text-green-800 hover:text-green-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="#features"
                className="text-green-800 hover:text-green-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#community"
                className="text-green-800 hover:text-green-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white w-full"
                onClick={() => (window.location.href = "tel:+11234567890")}
              >
                <Phone className="mr-2 h-4 w-4" /> Ask a Question
              </Button>
            </div>
          </motion.div>
        )}
      </header> */}

      {/* Hero Section */}
      {/* <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <div className="md:w-1/2 space-y-6">
              <motion.div variants={item}>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">For Ages 21+</Badge>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 leading-tight"
                variants={item}
              >
                Educating the Cannabis Community
              </motion.h1>
              <motion.p className="text-lg md:text-xl text-gray-700 max-w-xl" variants={item}>
                Stay informed with the latest news, trends, and advancements in the cannabis world. From beginners to
                experts, we've got you covered.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={item}>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                  onClick={() => (window.location.href = "tel:+11234567890")}
                >
                  <Phone className="mr-2 h-5 w-5" /> Ask an Expert
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg"
                >
                  Explore Articles <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
            <motion.div className="md:w-1/2" variants={item}>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Cannabis Education"
                width={600}
                height={500}
                className="rounded-xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section> */}
<Slideshow/>
      {/* About Section */}
      <section id="about" className="py-20 px-0 bg-white">
        <div className="container mx-auto ">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">Our Purpose</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6">Empowering Through Knowledge</h2>
            <p className="text-lg text-gray-700">
              Our mission is to educate the cannabis community with reliable news and information, keeping people up to
              date on trends and advancements while providing practical recipes and how-to articles that help readers on
              their cannabis journey.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
          >
            <motion.div className="bg-green-50 p-6 rounded-xl" variants={item}>
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Educational Content</h3>
              <p className="text-gray-700">
                Comprehensive guides and articles for both beginners and experienced users.
              </p>
            </motion.div>

            <motion.div className="bg-green-50 p-6 rounded-xl" variants={item}>
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Latest Trends</h3>
              <p className="text-gray-700">
                Stay updated with the newest developments and trends in the cannabis industry.
              </p>
            </motion.div>

            <motion.div className="bg-green-50 p-6 rounded-xl" variants={item}>
              <Coffee className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Recipes & How-Tos</h3>
              <p className="text-gray-700">Practical guides and recipes to enhance your cannabis experience safely.</p>
            </motion.div>

            <motion.div className="bg-green-50 p-6 rounded-xl" variants={item}>
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Community Support</h3>
              <p className="text-gray-700">A welcoming space for all backgrounds, genders, and experience levels.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <Badge className="bg-white text-green-800 hover:bg-green-100 mb-4">Latest Articles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">Explore Our Blog</h2>
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
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              View All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
 {/* Newsletter Section */}
 <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">Stay Updated</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-700">
                  Get the latest cannabis news, recipes, and educational content delivered straight to your inbox.
                </p>
              </div>

              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 border-green-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Subscribe</Button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to our Privacy Policy and confirm you are at least 21 years of age.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
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
                    <h3 className="text-xl font-bold text-green-800">Expert Insights:</h3>
                    <p className="text-gray-700">Gain invaluable knowledge from industry professionals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800"> Hands-On Learning : </h3>
                    <p className="text-gray-700"> Master practical skills in a supportive, interactive environment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800">Expand Your Knowledge :</h3>
                    <p className="text-gray-700"> Discover new ways to enjoy cannabis responsibly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800">Tailored Sessions:</h3>
                    <p className="text-gray-700">Reserve your spot today and embark on a journey of discovery and culinary.</p>
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
      <WhyAttendSection/>

      {/* Community Section */}
      <section id="community" className="py-20 bg-green-800 text-white">
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
      </section>


<WorkshopsSection/>
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
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-white text-green-800 hover:bg-green-100">{category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-green-900">{title}</CardTitle>
        <CardDescription className="text-gray-500">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

