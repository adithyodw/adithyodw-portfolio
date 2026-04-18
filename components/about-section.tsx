import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-me.svg" alt="About Adithyo Dewangga Wijaya" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who&apos;s behind all this{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">great work?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Senior Solutions Manager at Singtel, based in Singapore. I architect enterprise-grade network and security solutions for large organisations across APAC — and build web applications and quantitative trading systems in my own time. Born in Jakarta, I bring an Indonesian work ethic to Singapore&apos;s fast-moving tech scene.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">12+ years of enterprise experience</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Deep expertise in pre-sales solutions architecture, network security design, and enterprise infrastructure across Telco and IT services.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Builder across multiple disciplines</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  From institutional quantitative trading systems (+1,408% growth) to professional web applications — I ship real products, not just slide decks.
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/adithyodewangga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <User className="w-5 h-5" />
              More about me
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
