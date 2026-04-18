import { MessageCircle } from "lucide-react"
import { waLink } from "./bali-nav"
import type { Lang } from "./bali-page"

interface Fear {
  icon: string
  question: string
  answer: string
  color: string
}

interface Content {
  heading: string
  highlight: string
  subtitle: string
  fears: Fear[]
  handleHeading: string
  handleSubtitle: string
  items: string[]
  ctaNote: string
  ctaBtn: string
  waMsg: string
}

const content: Record<Lang, Content> = {
  id: {
    heading: "Kami Handle",
    highlight: "Semuanya.",
    subtitle:
      "Anda tidak perlu tau tentang coding, hosting, SEO, atau desain. Kirim info bisnis Anda via WhatsApp — kami yang kerjakan dari A sampai Z.",
    fears: [
      {
        icon: "🤷",
        question: "Tidak tau teknis?",
        answer:
          "Tidak perlu tau apa-apa soal coding atau hosting. Anda cukup ceritakan bisnis Anda. Kami yang desain, coding, dan deploy semuanya.",
        color: "#6366F1",
      },
      {
        icon: "⏰",
        question: "Tidak ada waktu?",
        answer:
          "Cukup 1 sesi chat WhatsApp 30 menit. Kirim foto, info harga, dan deskripsi bisnis — website Anda live dalam 7 sampai 14 hari kerja.",
        color: "#FF6B7A",
      },
      {
        icon: "💰",
        question: "Takut mahal?",
        answer:
          "Mulai dari Rp 1 juta. Bayar sekali — tidak ada biaya plugin bulanan, tidak ada biaya hosting tahunan. Website Anda hidup selamanya.",
        color: "#FDB927",
      },
    ],
    handleHeading: "Yang Kami Kerjakan untuk Anda",
    handleSubtitle:
      "Dari nol sampai website Anda live di Google — semua ditangani tanpa Anda perlu pusing.",
    items: [
      "Setup domain & hosting (konsultasi & panduan gratis)",
      "Desain 100% custom dari nol — bukan template",
      "Coding dengan React.js & Next.js (lebih cepat dari WordPress)",
      "Deploy ke Vercel CDN — loading < 1 detik, free selamanya",
      "Tombol WhatsApp langsung terhubung ke nomor Anda",
      "SEO dasar agar bisnis Anda muncul di Google Maps & Search",
      "Mobile-first — tampil sempurna di HP semua jenis",
      "Google Maps embed agar pelanggan mudah menemukan lokasi Anda",
      "Revisi sampai Anda puas",
    ],
    ctaNote: "Konsultasi pertama gratis. Tidak ada komitmen.",
    ctaBtn: "Chat WhatsApp Sekarang",
    waMsg:
      "Halo Adithyo, saya ingin konsultasi gratis untuk website bisnis saya di Bali. Tolong bantu saya.",
  },
  en: {
    heading: "We Handle",
    highlight: "Everything.",
    subtitle:
      "You don't need to know anything about coding, hosting, SEO, or design. Send your business info via WhatsApp — we take care of it all from A to Z.",
    fears: [
      {
        icon: "🤷",
        question: "Don't know tech?",
        answer:
          "You don't need to know anything about coding or hosting. Just tell us about your business. We design, code, and deploy everything for you.",
        color: "#6366F1",
      },
      {
        icon: "⏰",
        question: "No time?",
        answer:
          "Just one 30-minute WhatsApp chat. Send photos, pricing, and business info — your website goes live in 7 to 14 working days.",
        color: "#FF6B7A",
      },
      {
        icon: "💰",
        question: "Worried about cost?",
        answer:
          "Starting from Rp 1 million. Pay once — no monthly plugin fees, no annual hosting bills. Your website lives forever.",
        color: "#FDB927",
      },
    ],
    handleHeading: "What We Do for You",
    handleSubtitle:
      "From zero to your website live on Google — all handled without you needing to stress.",
    items: [
      "Domain & hosting setup (free consultation & guidance)",
      "100% custom design from scratch — not a template",
      "Coded in React.js & Next.js (faster than WordPress)",
      "Deploy to Vercel CDN — loads < 1 second, free forever",
      "WhatsApp button directly connected to your number",
      "Basic SEO so your business shows up on Google Maps & Search",
      "Mobile-first — looks perfect on all smartphones",
      "Google Maps embed so customers can easily find your location",
      "Revisions until you are satisfied",
    ],
    ctaNote: "First consultation is free. No commitment.",
    ctaBtn: "Chat WhatsApp Now",
    waMsg:
      "Hello Adithyo, I'd like a free consultation for my Bali business website. Please help me.",
  },
}

export function BaliValue({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              {t.heading}{" "}
              <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
                {t.highlight}
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* 3 Fear-busting cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {t.fears.map((f, i) => (
              <div
                key={i}
                className="bg-white border-[3px] border-white/20 rounded-[28px] overflow-hidden hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="h-2 w-full" style={{ backgroundColor: f.color }} />
                <div className="p-7">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-[#0B0B0B]">{f.question}</h3>
                  <p className="text-[15px] leading-[25px] text-[#393939] font-medium">{f.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What we handle — full-width checklist card */}
          <div className="bg-white/5 border-[3px] border-white/20 rounded-[32px] p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {t.handleHeading}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">{t.handleSubtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {t.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
                >
                  <span className="text-[#25D366] font-bold text-base mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-white text-sm font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-5">{t.ctaNote}</p>
            <a
              href={waLink(t.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-[#25D366] text-white px-10 py-5 rounded-[14px] font-bold text-lg flex items-center gap-3 border-[3px] border-white/20 hover:bg-[#1fba5a] transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]">
                <MessageCircle className="w-6 h-6" />
                {t.ctaBtn}
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
