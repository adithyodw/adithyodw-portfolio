import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import Image from "next/image"

export function ArticlesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Insights & Projects</h2>
          <a
            href="https://github.com/adithyodw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-[3px] border-black rounded-xl px-4 md:px-6 py-4 md:py-6 hover:bg-gray-50 bg-white font-semibold text-sm md:text-base w-full sm:w-auto"
            >
              <Pencil className="w-4 h-4 mr-2" />
              Browse all projects
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 mb-16">
          {/* Large featured card */}
          <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="bg-[#EDEDED] relative min-h-[220px] md:min-h-[320px] m-3 md:m-4 rounded-2xl overflow-hidden">
              <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                Quantitative
              </span>
              <Image
                src="/images/article-design-tools.png"
                alt="Neural Quant Advisor"
                fill
                className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Building a Neural Quant Advisor: From Zero to +1,408% Growth
              </h3>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FDB927] border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/adithyo.png"
                    alt="Adithyo Dewangga Wijaya"
                    width={64}
                    height={64}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-bold text-base md:text-lg text-[#0B0B0B]">Adithyo Dewangga</div>
                  <div className="text-sm md:text-base text-gray-600">Jan 22, 2026</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — two smaller cards */}
          <div className="space-y-6 md:space-y-8">
            <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#EDEDED] min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    Automation
                  </span>
                  <Image
                    src="/images/article-font-sizes.png"
                    alt="Playwright automation"
                    fill
                    className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                    Automating LinkedIn Job Applications with Playwright: The Complete Guide
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                    How I built a bot that applies to 50 jobs per day — intelligently.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#EDEDED] min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    Enterprise
                  </span>
                  <Image
                    src="/images/article-exercises.png"
                    alt="Enterprise network design"
                    fill
                    className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
                    Enterprise Network Security in 2025: What Actually Works at Scale
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                    Lessons from deploying Cisco, Palo Alto, and Check Point across APAC enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewsletterSignup />
      </div>
    </section>
  )
}
