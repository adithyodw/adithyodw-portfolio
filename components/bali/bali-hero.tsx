import { MessageCircle, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { waLink } from "./bali-nav"
import type { Lang } from "./bali-page"

interface Content {
  eyebrow: string
  line1: string
  accent: string
  line2: string
  subtitle: string
  badges: string[]
  cta1: string
  cta2: string
  waMsg: string
}

const content: Record<Lang, Content> = {
  id: {
    eyebrow: "Web Developer untuk Bisnis Lokal Bali",
    line1: "Dapatkan Lebih Banyak",
    accent: "Booking & Pelanggan",
    line2: "via Google & WhatsApp.",
    subtitle:
      "Kebanyakan pemilik bisnis Bali tidak punya waktu atau keahlian teknis untuk urus website. Kami yang handle semuanya — dari desain, coding, sampai live di Google. Anda fokus ke bisnis.",
    badges: [
      "✓ Konsultasi gratis",
      "✓ Live dalam 7–14 hari",
      "✓ Mulai Rp 1 juta",
      "✓ 8+ bisnis Bali",
    ],
    cta1: "Chat WhatsApp Sekarang",
    cta2: "Lihat Portfolio",
    waMsg:
      "Halo Adithyo, saya tertarik konsultasi gratis untuk website bisnis saya di Bali.",
  },
  en: {
    eyebrow: "Web Developer for Bali Local Businesses",
    line1: "Get More",
    accent: "Bookings & Customers",
    line2: "via Google & WhatsApp.",
    subtitle:
      "Most Bali business owners don't have time or technical knowledge to manage a website. We handle everything — design, coding, live on Google. You focus on running your business.",
    badges: [
      "✓ Free consultation",
      "✓ Live in 7–14 days",
      "✓ From Rp 1 million",
      "✓ 8+ Bali businesses",
    ],
    cta1: "Chat WhatsApp Now",
    cta2: "View Portfolio",
    waMsg:
      "Hello Adithyo, I'd like a free consultation for my Bali business website.",
  },
}

export function BaliHero({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <section className="container mx-auto px-4 py-14 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-sm font-bold text-[#6366F1] uppercase tracking-widest">
            {t.eyebrow}
          </p>

          <h1 className="text-[38px] leading-[48px] md:text-[62px] font-bold md:leading-[74px]">
            {t.line1}{" "}
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">
              {t.accent}
            </span>{" "}
            <span className="text-[#0B0B0B]">{t.line2}</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            {t.subtitle}
          </p>

          {/* Social proof badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {t.badges.map((b, i) => (
              <span
                key={i}
                className="bg-white border-2 border-black text-[#0B0B0B] text-sm font-bold px-4 py-2 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
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
