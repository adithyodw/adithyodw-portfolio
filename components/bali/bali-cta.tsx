import { MessageCircle, Linkedin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { waLink } from "./bali-nav"
import type { Lang } from "./bali-page"

interface Content {
  heading: string
  highlight: string
  subtitle: string
  cta1: string
  cta2: string
  waMsg: string
  badges: string[]
}

const content: Record<Lang, Content> = {
  id: {
    heading: "Siap Membangun",
    highlight: "Website Bisnis Anda?",
    subtitle:
      "Konsultasi gratis, tanpa komitmen. Ceritakan bisnis Anda dan saya berikan solusi website terbaik yang sesuai kebutuhan dan budget Anda.",
    cta1: "Chat di WhatsApp Sekarang",
    cta2: "Tanya via LinkedIn",
    waMsg:
      "Halo Adithyo, saya ingin konsultasi gratis untuk website bisnis saya di Bali. Tolong bantu saya.",
    badges: ["Konsultasi gratis", "Respons cepat", "Portfolio nyata", "Mobile-friendly"],
  },
  en: {
    heading: "Ready to Build Your",
    highlight: "Business Website?",
    subtitle:
      "Free consultation, no commitment. Tell me about your business and I'll provide the best website solution that fits your needs and budget.",
    cta1: "Chat on WhatsApp Now",
    cta2: "Ask via LinkedIn",
    waMsg:
      "Hello Adithyo, I'd like a free consultation for my Bali business website. Please help me.",
    badges: ["Free consultation", "Fast response", "Real portfolio", "Mobile-friendly"],
  },
}

export function BaliCta({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <section className="bg-black py-16 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-[1.2]">
            {t.heading}{" "}
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
              {t.highlight}
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {t.badges.map((b, i) => (
              <span
                key={i}
                className="bg-white/10 border-2 border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2"
              >
                <Check className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0" />
                {b}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={waLink(t.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#25D366] text-white hover:bg-[#1fba5a] rounded-lg py-6 px-8 text-lg font-semibold h-auto w-full sm:min-w-[280px] border-[3px] border-white/30 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]">
                <MessageCircle className="w-6 h-6 mr-1" />
                {t.cta1}
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/adithyodewangga/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-6 px-8 text-lg font-semibold h-auto w-full sm:min-w-[220px]">
                <Linkedin className="w-6 h-6 mr-1" />
                {t.cta2}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
