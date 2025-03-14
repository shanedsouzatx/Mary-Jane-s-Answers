import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, Users, Calendar, MessageCircle, Heart } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Hero from "../components/Community/Hero"

export default function CommunityPage() {
  return (
    <div className="overflow-x-hidden pt-36 bg-white ">
    <Hero/>
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

      {/* Community Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image 
                src="/ty1.jpg" 
                alt="Cannabis community member" 
                width={600} 
                height={600} 
                className="rounded-2xl shadow-lg object-cover  h-[500px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333A57] mb-6">
                Connecting the Cannabis Community Together
              </h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-4">
                  To my fellow Budtenders, I want to dedicate this page to you all—because through this journey, I've found a sense of belonging and community that I never thought was possible after my time in the army.
                </p>
                <p className="mb-4">
                  When I walked away from military service, I wasn't sure where I fit in. But here, in the world of cannabis, I've found my place. Each one of you has become part of a community that I am proud to be a part of, and for that, I am endlessly grateful.
                </p>
                <p className="mb-4">
                  I am deeply thankful for the bond we share, the support we offer one another, and the shared passion we have for the plant and its potential. I want to use my voice to advocate for all of us—especially those who are bound by NDAs or silenced by the corporate structures of the industry.
                </p>
                <p>
                  There are changes that need to be made, and together, we can shine a light on those issues and fight for a cannabis world that's built on fairness, transparency, and community. Thank you for inspiring me every day to be a stronger voice and a better advocate for us all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-gradient-to-r from-[#333A57] to-[#422C47] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-xl bg-white/10 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold mb-2 text-[#88BAC8]">150+</div>
              <div className="text-xl">Community Events</div>
            </div>
            <div className="p-8 rounded-xl bg-white/10 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold mb-2 text-[#88BAC8]">15</div>
              <div className="text-xl">Local Chapters</div>
            </div>
            <div className="p-8 rounded-xl bg-white/10 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold mb-2 text-[#88BAC8]">10K+</div>
              <div className="text-xl">Community Members</div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-[#88BAC8] hover:bg-[#4D869B] text-white px-8 py-6 rounded-full text-lg">
              Join Us
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#333A57] mb-12">
            Community Articles
          </h2>
          
          <Tabs defaultValue="spring" className="w-full">
            <div className="flex justify-center  mb-8">
              <TabsList className="bg-[#88BAC8]/10">
                <TabsTrigger value="spring" className="data-[state=active]:bg-accent text-md data-[state=active]:text-lg data-[state=active]:text-white">
                  Spring Collection
                </TabsTrigger>
                <TabsTrigger value="relationships" className="data-[state=active]:bg-accent text-md data-[state=active]:text-lg data-[state=active]:text-white">
                  Relationships
                </TabsTrigger>
                <TabsTrigger value="parenting" className="data-[state=active]:bg-accent text-md data-[state=active]:text-lg data-[state=active]:text-white">
                  Parenting
                </TabsTrigger>
                <TabsTrigger value="selfcare" className="data-[state=active]:bg-accent text-md data-[state=active]:text-lg data-[state=active]:text-white">
                  Self Care
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="spring" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ArticleCard 
                  image="/ty2.jpg"
                  title="Cannabis Travel Guide: The Best 420-Friendly Destinations"
                  date="3/3/2025"
                  readTime="3 min read"
                  category="SPRING"
                />
                <ArticleCard 
                  image="/ty3.webp"
                  title="Road Trips & Reefer: How to Travel with Cannabis Safely"
                  date="3/3/2025"
                  readTime="2 min read"
                  category="SPRING"
                />
                <ArticleCard 
                  image="/ty4.jpg"
                  title="Cannabis-Friendly Hotels & Resorts: Where to Stay"
                  date="3/3/2025"
                  readTime="3 min read"
                  category="SPRING"
                />
                <ArticleCard 
                  image="/ty5.png"
                  title="International Cannabis Laws: Where It's Legal"
                  date="3/3/2025"
                  readTime="3 min read"
                  category="SPRING"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="relationships" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ArticleCard 
                  image="/ty6.jpg"
                  title="Date Night & Downtime: How Parents Can Use Cannabis"
                  date="3/3/2025"
                  readTime="4 min read"
                  category="RELATIONSHIP"
                />
                <ArticleCard 
                  image="/ty7.jpg"
                  title="Meeting the In-Laws as a Cannabis User"
                  date="3/3/2025"
                  readTime="4 min read"
                  category="RELATIONSHIP"
                />
                <ArticleCard 
                  image="/ty8.webp"
                  title="Friends Who Blaze Together Stay Together"
                  date="3/3/2025"
                  readTime="1 min read"
                  category="RELATIONSHIP"
                />
                <ArticleCard 
                  image="/ty9.jpeg"
                  title="Cannabis & Conflict Resolution: Can Weed Help Couples"
                  date="3/3/2025"
                  readTime="3 min read"
                  category="RELATIONSHIP"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="parenting" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ArticleCard 
                  image="/ty10.jpg"
                  title="Talking to Your Kids About Cannabis"
                  date="3/3/2025"
                  readTime="2 min read"
                  category="PARENTING"
                />
                <ArticleCard 
                  image="/ty11.jpg"
                  title="Cannabis for the Stressed-Out Parent"
                  date="3/3/2025"
                  readTime="2 min read"
                  category="PARENTING"
                />
                <ArticleCard 
                  image="/ty12.jpg"
                  title="From Wine Mom to Weed Mom: Why Parents Choose Cannabis"
                  date="3/3/2025"
                  readTime="2 min read"
                  category="PARENTING"
                />
                <ArticleCard 
                  image="/ty13.jpg"
                  title="Cannabis & Co-Parenting: Navigating Different Views"
                  date="3/3/2025"
                  readTime="2 min read"
                  category="PARENTING"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="selfcare" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ArticleCard 
                  image="/ty15.jpg"
                  title="Meditation and Marijuana: Using Cannabis for Mindfulness"
                  date="3/3/2025"
                  readTime="4 min read"
                  category="SELF CARE"
                />
                <ArticleCard 
                  image="/ty16.jpg"
                  title="Cannabis and Book Clubs: How to Host the Ultimate Night"
                  date="3/3/2025"
                  readTime="4 min read"
                  category="SELF CARE"
                />
                <ArticleCard 
                  image="/ty18.webp"
                  title="Baking with Bud: A Guide to Cannabis-Infused Baking"
                  date="3/3/2025"
                  readTime="3 min read"
                  category="SELF CARE"
                />
                <ArticleCard 
                  image="/ty19.webp"
                  title="Cannabis Yoga: Finding Balance Through Plant Medicine"
                  date="3/3/2025"
                  readTime="3 min read"
                  category="SELF CARE"
                />
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-[#4D869B] bg-primary text-accent hover:bg-secondary hover:text-white">
              View All Articles <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#88BAC8]/10 to-[#4D869B]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#333A57] mb-12">
            Community Gallery
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our vibrant cannabis community through engaging images and articles. See what our members are sharing and experiencing.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-lg">
                <Image 
                  src={`/placeholder.svg?height=400&width=400`}
                  alt={`Gallery image ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333A57]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Community Moment</p>
                    <p className="text-sm opacity-80">Shared by community member</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button className="bg-[#4D869B] hover:bg-[#336063] text-white">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section - New Addition */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#333A57] mb-12">
            Upcoming Community Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard 
              title="Cannabis Education Workshop"
              date="April 20, 2025"
              location="Denver, CO"
              description="Join us for an educational workshop covering the basics of cannabis, its benefits, and responsible consumption."
              attendees={42}
            />
            <EventCard 
              title="Community Cleanup Day"
              date="May 15, 2025"
              location="Portland, OR"
              description="Help us keep our community clean and green. Volunteer for our monthly cleanup event followed by a social gathering."
              attendees={28}
            />
            <EventCard 
              title="Cannabis Cooking Class"
              date="June 5, 2025"
              location="Los Angeles, CA"
              description="Learn how to create delicious cannabis-infused meals and treats with our expert chef in this hands-on cooking class."
              attendees={35}
            />
          </div>
          
          <div className="flex justify-center mt-12">
            <Button className="bg-[#333A57] hover:bg-[#422C47] text-white">
              View All Events <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Forum Preview - New Addition */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#333A57]/5 to-[#422C47]/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333A57] mb-2">
                Community Discussions
              </h2>
              <p className="text-lg text-gray-600">
                Join the conversation in our community forums
              </p>
            </div>
            <Button className="mt-4 md:mt-0 bg-[#4D869B] hover:bg-[#336063] text-white">
              Visit Forums <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#88BAC8]/20 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-[#4D869B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#333A57] mb-2">
                    Best strains for anxiety relief?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    I've been dealing with anxiety and looking for recommendations on strains that have helped others...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image 
                        src="/placeholder.svg?height=100&width=100" 
                        alt="User avatar" 
                        width={32} 
                        height={32} 
                        className="rounded-full"
                      />
                      <span className="text-sm text-gray-500">Started by GreenTherapy</span>
                    </div>
                    <div className="text-sm text-gray-500">42 replies</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#88BAC8]/20 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-[#4D869B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#333A57] mb-2">
                    Home growing tips for beginners
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Just got approved for home growing and looking for some beginner-friendly advice on getting started...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image 
                        src="/placeholder.svg?height=100&width=100" 
                        alt="User avatar" 
                        width={32} 
                        height={32} 
                        className="rounded-full"
                      />
                      <span className="text-sm text-gray-500">Started by GreenThumb</span>
                    </div>
                    <div className="text-sm text-gray-500">78 replies</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#88BAC8]/20 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-[#4D869B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#333A57] mb-2">
                    Cannabis and exercise: Share your experiences
                  </h3>
                  <p className="text-gray-600 mb-4">
                    I've been incorporating cannabis into my workout routine and seeing great results. Anyone else...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image 
                        src="/placeholder.svg?height=100&width=100" 
                        alt="User avatar" 
                        width={32} 
                        height={32} 
                        className="rounded-full"
                      />
                      <span className="text-sm text-gray-500">Started by FitCannabist</span>
                    </div>
                    <div className="text-sm text-gray-500">36 replies</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#88BAC8]/20 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-[#4D869B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#333A57] mb-2">
                    Legislative updates: What's happening in your state?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Let's share updates on cannabis legislation in our respective states. I just heard that...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image 
                        src="/placeholder.svg?height=100&width=100" 
                        alt="User avatar" 
                        width={32} 
                        height={32} 
                        className="rounded-full"
                      />
                      <span className="text-sm text-gray-500">Started by AdvocateForChange</span>
                    </div>
                    <div className="text-sm text-gray-500">54 replies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New Addition */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#333A57] to-[#422C47] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Community Voices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex gap-1 text-[#88BAC8]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Heart key={star} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="flex-1 mb-6">
                  <p className="italic">
                    "Finding this community has been life-changing. As a medical cannabis patient, I've learned so much from others and found support when I needed it most."
                  </p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <Image 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Testimonial author" 
                    width={50} 
                    height={50} 
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm opacity-80">Member since 2023</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex gap-1 text-[#88BAC8]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Heart key={star} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="flex-1 mb-6">
                  <p className="italic">
                    "The educational resources and supportive community here have helped me navigate the cannabis industry as a small business owner. I've made valuable connections."
                  </p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <Image 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Testimonial author" 
                    width={50} 
                    height={50} 
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Marcus J.</p>
                    <p className="text-sm opacity-80">Member since 2022</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex gap-1 text-[#88BAC8]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Heart key={star} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="flex-1 mb-6">
                  <p className="italic">
                    "As someone new to cannabis, I was nervous about asking 'dumb questions.' This community welcomed me with open arms and helped me learn in a judgment-free environment. I've grown so much in my cannabis knowledge."
                  </p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <Image 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Testimonial author" 
                    width={50} 
                    height={50} 
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Jamie T.</p>
                    <p className="text-sm opacity-80">Member since 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#4D869B] to-[#336063] rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <Image 
                  src="/placeholder.svg?height=600&width=800" 
                  alt="Cannabis community" 
                  width={800} 
                  height={600} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#333A57]/60 to-transparent"></div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Join Our Cannabis Community Today
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  Connect with like-minded individuals, access exclusive content, participate in events, and be part of a supportive network that celebrates cannabis culture and advocacy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-[#333A57] hover:bg-gray-100">
                    <Users className="mr-2 h-5 w-5" /> Join Now
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Article Card Component
function ArticleCard({ image, title, date, readTime, category }:any) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <Image 
          src={image || "/placeholder.svg"} 
          alt={title} 
          width={400} 
          height={225} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-[#88BAC8] text-white text-xs font-semibold py-1 px-2 rounded">
          {category}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-[#333A57] line-clamp-2 mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link 
          href="#" 
          className="text-[#4D869B] font-medium text-sm hover:underline"
        >
          Read Article
        </Link>
      </CardFooter>
    </Card>
  )
}

// Event Card Component
function EventCard({ title, date, location, description, attendees }:any) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-4 border-b bg-gradient-to-r from-[#88BAC8]/10 to-[#4D869B]/10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-[#333A57]">{title}</h3>
            <p className="text-sm text-gray-500">{date} • {location}</p>
          </div>
          <div className="bg-[#88BAC8] text-white text-xs font-semibold py-1 px-2 rounded-full">
            Event
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          <span>{attendees} attending</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" className="border-[#4D869B] text-[#4D869B] hover:bg-[#4D869B] hover:text-white">
          Learn More
        </Button>
        <Button className="bg-[#4D869B] hover:bg-[#336063] text-white">
          RSVP
        </Button>
      </CardFooter>
    </Card>
  )
}
