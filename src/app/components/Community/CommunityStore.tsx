import Image from "next/image"

export default function CommunityStore(){
    return(
        <>
          {/* Community Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image 
                src="/placeholder.svg?height=600&width=600" 
                alt="Cannabis community member" 
                width={600} 
                height={600} 
                className="rounded-2xl shadow-lg object-cover h-[500px]"
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
        </>
    )
}