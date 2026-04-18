import { MessageCircle, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { waLink } from "./bali-nav"
import type { Lang } from "./bali-page"

const content = {
  id: {
    eyebrow: "Web Developer & Konsultan Digital untuk Bisnis Bali",
    line1: "Website Profesional untuk",
    accent1: "Bisnis Bali",
    line2: "dari",
    accent2: "Indonesia",
    subtitle:
      "Dari laundry hingga villa mewah — saya bantu bisnis Anda tampil profesional di internet dan mendapatkan lebih banyak pelanggan.",
    cta1: "Konsultasi Gratis via WhatsApp",
    cta2: "Lihat Portfolio",
    waMsg:
      "Halo Adithyo, saya tertarik konsultasi gratis untuk website bisnis saya di Bali.",
  },
  en: {
    eyebrow: "Web Developer & Digital Consultant for Bali Businesses",
    line1: "Professional Websites for",
    accent1: "Bali Businesses",
    line2: "from",
    accent2: "Indonesia",
    subtitle:
      "From laundry shops to luxury villas — I help your Bali business look world-class online and attract more customers.",
    cta1: "Free Consultation on WhatsApp",
    cta2: "View Portfolio",
    waMsg:
      "Hello Adithyo, I'd like a free consultation for my Bali business website.",
  },
}

export function BaliHero({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-sm font-bold text-[#6366F1] uppercase tracking-widest">
            {t.eyebrow}
          </p>
          <h1 className="text-[38px] leading-[48px] md:text-[66px] font-bold md:leading-[78px]">
            {t.line1}{" "}
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">
              {t.accent1}
            </span>{" "}
            {t.line2}{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
              {t.accent2}
            </span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-4">
            <a
              href={waLink(t.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#25D366] text-white hover:bg-[#1fba5a] rounded-lg py-5 px-8 md:py-[22px] md:px-[40px] text-base md:text-lg font-semibold h-auto w-full sm:min-w-[270px] border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <MessageCircle className="w-5 h-5 mr-1" />
                {t.cta1}
              </Button>
            </a>
            <a href="#portfolio" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[48px] text-base md:text-lg font-semibold h-auto w-full sm:min-w-[200px]"
              >
                <FolderOpen className="w-5 h-5 mr-1" />
                {t.cta2}
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/adithyo.png"
              alt="Adithyo Dewangga Wijaya – Web Developer Bali"
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
