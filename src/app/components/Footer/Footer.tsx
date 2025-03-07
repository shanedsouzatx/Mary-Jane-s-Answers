import Image from "next/image"
import Link from "next/link"


import { ChevronRight, Phone, Mail, Menu, X, ArrowRight, Leaf, BookOpen, TrendingUp, Coffee, Users } from "lucide-react"
export default function Footer(){
    return(
        <>
          {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo2.png" alt=" Learn Logo" width={200} height={200} />
              </Link>
              <p className="text-green-200">
                Educating the cannabis community with reliable information, recipes, and how-to guides.
              </p>
              <p className="text-green-200">For adults 21 and older.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-green-200 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-green-200 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-green-200 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#community" className="text-green-200 hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-green-200 hover:text-white transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-200 hover:text-white transition-colors">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-200 hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-200 hover:text-white transition-colors">
                    How-To Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-200 hover:text-white transition-colors">
                    Wellness
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+112345890" className="text-green-200 hover:text-white transition-colors">
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:maryjanes@gmail.com" className="text-green-200 hover:text-white transition-colors">
                   maryjanes@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-200">
            <p>© {new Date().getFullYear()} techcraftinc. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </>
    )
}