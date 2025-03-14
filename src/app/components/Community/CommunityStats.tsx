
import { Button } from "@/components/ui/button"

export default function CommunityStats(){
    return(
        <>
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

        </>
    )
}