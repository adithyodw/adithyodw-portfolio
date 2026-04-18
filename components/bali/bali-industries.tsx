import { Waves, UtensilsCrossed, Building2, Store, type LucideIcon } from "lucide-react"
import type { Lang } from "./bali-page"

const INDUSTRY_ICONS: LucideIcon[] = [Waves, UtensilsCrossed, Building2, Store]

interface Industry {
  title: string
  desc: string
  bgColor: string
  tags: string[]
}

interface Content {
  heading: string
  highlight: string
  subtitle: string
  industries: Industry[]
}

const content: Record<Lang, Content> = {
  id: {
    heading: "Industri yang",
    highlight: "Saya Layani",
    subtitle:
      "Saya spesialis membangun website untuk bisnis lokal Bali — dengan pemahaman mendalam terhadap kebutuhan setiap industri.",
    industries: [
      {
        title: "Laundry & Dry Cleaning",
        desc: "Website dengan booking online, tracking status laundry real-time, harga transparan, dan invoice digital. Tingkatkan kepercayaan dan loyalitas pelanggan secara signifikan.",
        bgColor: "bg-[#6366F1]",
        tags: ["Booking Online", "Status Tracking", "Invoice Digital", "Notifikasi WA"],
      },
      {
        title: "Restoran, Kafe & F&B",
        desc: "Menu digital interaktif, sistem reservasi meja, galeri makanan yang menggugah selera — menarik tamu lokal dan wisatawan mancanegara setiap harinya.",
        bgColor: "bg-[#FF6B7A]",
        tags: ["Menu Digital", "Reservasi Meja", "Google Maps", "Galeri Foto"],
      },
      {
        title: "Hotel & Villa",
        desc: "Website galeri premium, sistem booking terintegrasi, ulasan tamu, dan tampilan yang bersaing dengan properti internasional di Google dan platform OTA.",
        bgColor: "bg-[#2F81F7]",
        tags: ["Booking System", "Galeri Premium", "SEO Google", "Ulasan Tamu"],
      },
      {
        title: "UMKM & Jasa Lokal",
        desc: "Landing page profesional, katalog layanan, testimoni pelanggan, dan tombol WhatsApp CTA — untuk semua jenis bisnis lokal Bali yang ingin naik kelas.",
        bgColor: "bg-[#FDB927]",
        tags: ["Landing Page", "Katalog Produk", "WhatsApp CTA", "SEO Lokal"],
      },
    ],
  },
  en: {
    heading: "Industries I",
    highlight: "Serve",
    subtitle:
      "I specialise in building websites for Bali local businesses — with deep understanding of each industry's unique needs.",
    industries: [
      {
        title: "Laundry & Dry Cleaning",
        desc: "Online booking website, real-time order tracking, transparent pricing, and digital invoicing. Build customer trust and drive repeat business significantly.",
        bgColor: "bg-[#6366F1]",
        tags: ["Online Booking", "Order Tracking", "Digital Invoice", "WA Notification"],
      },
      {
        title: "Restaurant, Café & F&B",
        desc: "Interactive digital menus, table reservation system, food photography gallery — attracting both local guests and international tourists every day.",
        bgColor: "bg-[#FF6B7A]",
        tags: ["Digital Menu", "Table Booking", "Google Maps", "Photo Gallery"],
      },
      {
        title: "Hotel & Villa",
        desc: "Premium gallery website, integrated booking system, guest reviews, and a presentation that competes with international properties on Google and OTA platforms.",
        bgColor: "bg-[#2F81F7]",
        tags: ["Booking System", "Premium Gallery", "SEO Google", "Guest Reviews"],
      },
      {
        title: "SMEs & Local Services",
        desc: "Professional landing page, service catalog, customer testimonials, and WhatsApp CTA — for every type of Bali local business ready to level up.",
        bgColor: "bg-[#FDB927]",
        tags: ["Landing Page", "Product Catalog", "WhatsApp CTA", "Local SEO"],
      },
    ],
  },
}

export function BaliIndustries({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.heading}{" "}
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
              {t.highlight}
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.industries.map((ind, i) => {
            const Icon = INDUSTRY_ICONS[i]
            return (
              <div
                key={i}
                className={`${ind.bgColor} border-[3px] border-black rounded-[32px] p-8 md:p-10 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300`}
              >
                <div className="mb-5">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-[24px] md:text-[28px] leading-[36px] font-bold text-white mb-4">
                  {ind.title}
                </h3>
                <p className="text-white/90 text-base md:text-[17px] leading-[28px] mb-6">
                  {ind.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ind.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-white/20 border-2 border-white/30 text-white text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
