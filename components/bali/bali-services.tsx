import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { waLink } from "./bali-nav"
import type { Lang } from "./bali-page"

interface Service {
  title: string
  desc: string
  img: string
}

interface Content {
  heading: string
  highlight: string
  subtitle: string
  services: Service[]
  ctaTitle: string
  ctaDesc: string
  ctaBtn: string
  waMsg: string
}

const content: Record<Lang, Content> = {
  id: {
    heading: "Layanan",
    highlight: "Website & Digital",
    subtitle:
      "Dari website sederhana hingga aplikasi web kompleks — semua dibangun modern, cepat, dan mobile-friendly.",
    services: [
      {
        title: "Website Bisnis",
        desc: "Landing page, company profile, dan website toko yang tampil profesional untuk menarik pelanggan baru secara online.",
        img: "/images/web-design.svg",
      },
      {
        title: "Sistem Booking Online",
        desc: "Reservasi hotel, villa, jadwal laundry, dan layanan lainnya — otomatis, real-time, dan mudah dikelola dari HP Anda.",
        img: "/images/ui-ux-design.svg",
      },
      {
        title: "Toko Online",
        desc: "Katalog produk digital, keranjang belanja, dan integrasi pembayaran lokal seperti QRIS dan transfer bank.",
        img: "/images/product-design.svg",
      },
      {
        title: "Aplikasi Web Custom",
        desc: "Dashboard manajemen bisnis, laporan penjualan, sistem antrian — semua sesuai kebutuhan spesifik bisnis Anda.",
        img: "/images/user-research.svg",
      },
      {
        title: "Automation & Bot",
        desc: "Bot WhatsApp, notifikasi otomatis, dan integrasi sistem untuk menghemat waktu dan tenaga operasional bisnis Anda.",
        img: "/images/motion-graphics.svg",
      },
    ],
    ctaTitle: "Ada proyek lain?",
    ctaDesc:
      "Ceritakan bisnis Anda dan saya berikan solusi website terbaik yang sesuai kebutuhan dan budget.",
    ctaBtn: "Chat di WhatsApp",
    waMsg:
      "Halo Adithyo, saya ingin konsultasi gratis untuk website bisnis saya di Bali.",
  },
  en: {
    heading: "Website &",
    highlight: "Digital Services",
    subtitle:
      "From simple websites to complex web applications — everything built modern, fast, and mobile-friendly.",
    services: [
      {
        title: "Business Website",
        desc: "Landing pages, company profiles, and store websites that look professional and attract new customers online.",
        img: "/images/web-design.svg",
      },
      {
        title: "Online Booking System",
        desc: "Hotel, villa, laundry scheduling, and service reservations — automated, real-time, easy to manage from your phone.",
        img: "/images/ui-ux-design.svg",
      },
      {
        title: "Online Store",
        desc: "Digital product catalogs, shopping cart, and local payment integration (QRIS, bank transfer).",
        img: "/images/product-design.svg",
      },
      {
        title: "Custom Web Application",
        desc: "Business dashboards, sales reports, queue systems — built to your specific business requirements.",
        img: "/images/user-research.svg",
      },
      {
        title: "Automation & Bots",
        desc: "WhatsApp bots, automated notifications, and system integrations to save time and operational effort.",
        img: "/images/motion-graphics.svg",
      },
    ],
    ctaTitle: "Other project?",
    ctaDesc:
      "Tell me about your business and I'll provide the best website solution that fits your needs and budget.",
    ctaBtn: "Chat on WhatsApp",
    waMsg:
      "Hello Adithyo, I'd like a free consultation for my Bali business website.",
  },
}

export function BaliServices({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              {t.heading}{" "}
              <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">
                {t.highlight}
              </span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((s, i) => (
              <div
                key={i}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={382}
                    height={328}
                    className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">
                    {s.title}
                  </h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA card — same yellow style as main portfolio */}
            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">
                {t.ctaTitle}
              </h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                {t.ctaDesc}
              </p>
              <a
                href={waLink(t.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[340px]"
              >
                <Button className="bg-[#25D366] text-white hover:bg-[#1fba5a] rounded-[16px] px-12 py-6 font-medium text-[18px] w-full h-[64px] border-[3px] border-black">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.ctaBtn}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
