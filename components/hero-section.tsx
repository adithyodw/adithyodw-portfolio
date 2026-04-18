import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Lang = "en" | "id"

interface Content {
  line1: string
  name: string
  line2: string
  location: string
  subtitle: string
  cta1: string
  cta2: string
}

const content: Record<Lang, Content> = {
  en: {
    line1: "I'm",
    name: "Adithyo",
    line2: ", a Senior Solutions Manager from",
    location: "Singapore",
    subtitle:
      "Enterprise network architect, quantitative systems developer, and full-stack builder. Bridging complex infrastructure with business outcomes across Asia-Pacific.",
    cta1: "Get in touch",
    cta2: "View portfolio",
  },
  id: {
    line1: "Halo, saya",
    name: "Adithyo",
    line2: ", Senior Solutions Manager berbasis di",
    location: "Singapura",
    subtitle:
      "Arsitek jaringan enterprise, pengembang sistem kuantitatif, dan full-stack builder. Menghubungkan infrastruktur kompleks dengan hasil bisnis nyata di seluruh Asia-Pasifik.",
    cta1: "Hubungi saya",
    cta2: "Lihat portfolio",
  },
}

export function HeroSection({ lang = "en" }: { lang?: Lang }) {
  const t = content[lang]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            {t.line1}{" "}
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">{t.name}</span>
            {t.line2}{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">{t.location}</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <a
              href="https://www.linkedin.com/in/adithyodewangga/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:min-w-[240px]">
                <Mail className="w-5 h-5" />
                {t.cta1}
              </Button>
            </a>
            <a href="#portfolio" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:min-w-[240px]"
              >
                <FolderOpen className="w-5 h-5" />
                {t.cta2}
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/adithyo.png"
              alt="Adithyo Dewangga Wijaya"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
