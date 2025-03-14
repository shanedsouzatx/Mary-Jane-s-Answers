
import { ChevronRight, Mail, Users, Calendar, MessageCircle, Heart } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export default function newsLetter(){
    return(
        <>
         {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#88BAC8]/10 to-[#4D869B]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#333A57] to-[#422C47]">
                <h2 className="text-3xl font-bold text-white mb-4">Subscribe and Support</h2>
                <p className="text-white/90 mb-6">
                  Stay in the loop with the latest cannabis news, wellness tips, and expert advice—delivered straight to your inbox. Our newsletter keeps it real with no fluff, just the insights you actually care about.
                </p>
                <div className="flex items-center text-white/80 mb-2">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>Join 10,000+ subscribers</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 bg-white">
                <h3 className="text-2xl font-semibold text-[#333A57] mb-6">Subscribe Today</h3>
                <div className="space-y-4">
                  <Input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full border-[#88BAC8] focus:ring-[#4D869B]" 
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full border-[#88BAC8] focus:ring-[#4D869B]" 
                  />
                  <Button className="w-full bg-[#4D869B] hover:bg-[#336063] text-white">
                    Subscribe Now 🌿✨
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}