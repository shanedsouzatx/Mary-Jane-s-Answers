import { Button } from "@/components/ui/button"

export default function Community(){
    return(
        <>
          {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#333A57] to-[#422C47] opacity-90 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Cannabis Community Hub
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join our thriving community of cannabis enthusiasts, advocates, and experts. Share experiences, learn together, and be part of a movement.
            </p>
            <Button 
              className="bg-secondary hover:bg-primary text-white px-8 py-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Join Our Community
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

        </>
    )
}