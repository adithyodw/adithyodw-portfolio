import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { waLink } from "./bali-nav"
import type { Lang } from "./bali-page"

interface PkgFeature {
  text: string
  strong?: boolean
}

interface Package {
  name: string
  emoji: string
  tagline: string
  idr: string
  usd: string
  delivery: string
  features: PkgFeature[]
  popular: boolean
  accentColor: string
  accentText: string
  waMsg: string
  cta: string
}

interface Content {
  heading: string
  highlight: string
  subtitle: string
  popularBadge: string
  deliveryLabel: string
  packages: Package[]
  note: string
}

const content: Record<Lang, Content> = {
  id: {
    heading: "Harga",
    highlight: "Transparan & Jelas",
    subtitle:
      "Tidak ada biaya tersembunyi. Tidak ada langganan bulanan. Bayar sekali, website Anda hidup selamanya.",
    popularBadge: "⭐ Paling Populer",
    deliveryLabel: "Estimasi pengerjaan",
    packages: [
      {
        name: "Paket Starter",
        emoji: "🚀",
        tagline: "Cocok untuk bisnis yang baru mau go online",
        idr: "Rp 1 – 2 juta",
        usd: "~$60 – $120",
        delivery: "5–7 hari kerja",
        popular: false,
        accentColor: "#FFC224",
        accentText: "#0B0B0B",
        cta: "Chat WhatsApp",
        waMsg:
          "Halo Adithyo, saya tertarik dengan Paket Starter (1 halaman). Boleh saya tahu detail lebih lanjut?",
        features: [
          { text: "1 halaman landing page" },
          { text: "Tombol WhatsApp CTA" },
          { text: "Google Maps embed" },
          { text: "SEO dasar (title, meta, Open Graph)" },
          { text: "Mobile-friendly & responsive" },
          { text: "Deploy ke Vercel (gratis selamanya)" },
          { text: "1x revisi included" },
        ],
      },
      {
        name: "Paket Standard",
        emoji: "💼",
        tagline: "Ideal untuk bisnis yang butuh tampilan lengkap & profesional",
        idr: "Rp 3 – 5 juta",
        usd: "~$180 – $300",
        delivery: "10–14 hari kerja",
        popular: true,
        accentColor: "#0B0B0B",
        accentText: "#FFFFFF",
        cta: "Chat WhatsApp",
        waMsg:
          "Halo Adithyo, saya tertarik dengan Paket Standard (3–5 halaman). Boleh saya tahu detail lebih lanjut?",
        features: [
          { text: "3–5 halaman website", strong: true },
          { text: "Galeri foto & video" },
          { text: "Halaman layanan & harga" },
          { text: "WhatsApp CTA + integrasi link" },
          { text: "Full SEO optimization" },
          { text: "Google Analytics setup" },
          { text: "Mobile-first responsive" },
          { text: "3x revisi included" },
          { text: "Deploy ke Vercel production" },
        ],
      },
      {
        name: "Paket Custom",
        emoji: "⚙️",
        tagline: "Untuk bisnis dengan kebutuhan sistem & fitur khusus",
        idr: "Mulai dari Rp 8 juta",
        usd: "~from $500",
        delivery: "14–30 hari kerja",
        popular: false,
        accentColor: "#6366F1",
        accentText: "#FFFFFF",
        cta: "Konsultasi Gratis",
        waMsg:
          "Halo Adithyo, saya tertarik dengan Paket Custom. Saya ingin diskusi kebutuhan bisnis saya.",
        features: [
          { text: "Semua fitur Paket Standard" },
          { text: "Sistem booking / reservasi online", strong: true },
          { text: "Dashboard admin & manajemen konten" },
          { text: "Integrasi Firebase / database" },
          { text: "Bot WhatsApp & notifikasi otomatis" },
          { text: "Custom API integration" },
          { text: "Revisi unlimited" },
          { text: "Support & maintenance 1 bulan" },
        ],
      },
    ],
    note:
      "💡 Semua paket termasuk domain & hosting konsultasi setup. Harga dapat berubah tergantung kompleksitas proyek.",
  },
  en: {
    heading: "Transparent",
    highlight: "Pricing",
    subtitle:
      "No hidden fees. No monthly subscriptions. Pay once, your website lives forever.",
    popularBadge: "⭐ Most Popular",
    deliveryLabel: "Estimated delivery",
    packages: [
      {
        name: "Starter Package",
        emoji: "🚀",
        tagline: "Perfect for businesses just starting to go online",
        idr: "Rp 1 – 2 million",
        usd: "~$60 – $120",
        delivery: "5–7 working days",
        popular: false,
        accentColor: "#FFC224",
        accentText: "#0B0B0B",
        cta: "Chat WhatsApp",
        waMsg:
          "Hello Adithyo, I'm interested in the Starter Package (1 page). Can you tell me more?",
        features: [
          { text: "1-page landing page" },
          { text: "WhatsApp CTA button" },
          { text: "Google Maps embed" },
          { text: "Basic SEO (title, meta, Open Graph)" },
          { text: "Mobile-friendly & responsive" },
          { text: "Deploy to Vercel (free forever)" },
          { text: "1x revision included" },
        ],
      },
      {
        name: "Standard Package",
        emoji: "💼",
        tagline: "Ideal for businesses needing a complete, professional presence",
        idr: "Rp 3 – 5 million",
        usd: "~$180 – $300",
        delivery: "10–14 working days",
        popular: true,
        accentColor: "#0B0B0B",
        accentText: "#FFFFFF",
        cta: "Chat WhatsApp",
        waMsg:
          "Hello Adithyo, I'm interested in the Standard Package (3–5 pages). Can you tell me more?",
        features: [
          { text: "3–5 page website", strong: true },
          { text: "Photo & video gallery" },
          { text: "Services & pricing pages" },
          { text: "WhatsApp CTA + link integration" },
          { text: "Full SEO optimization" },
          { text: "Google Analytics setup" },
          { text: "Mobile-first responsive" },
          { text: "3x revisions included" },
          { text: "Vercel production deployment" },
        ],
      },
      {
        name: "Custom Package",
        emoji: "⚙️",
        tagline: "For businesses with specific system and feature requirements",
        idr: "From Rp 8 million",
        usd: "~from $500",
        delivery: "14–30 working days",
        popular: false,
        accentColor: "#6366F1",
        accentText: "#FFFFFF",
        cta: "Free Consultation",
        waMsg:
          "Hello Adithyo, I'm interested in the Custom Package. I'd like to discuss my business requirements.",
        features: [
          { text: "All Standard Package features" },
          { text: "Online booking / reservation system", strong: true },
          { text: "Admin dashboard & content management" },
          { text: "Firebase / database integration" },
          { text: "WhatsApp bot & automated notifications" },
          { text: "Custom API integration" },
          { text: "Unlimited revisions" },
          { text: "1-month support & maintenance" },
        ],
      },
    ],
    note:
      "💡 All packages include domain & hosting setup consultation. Prices may vary based on project complexity.",
  },
}

export function BaliPricing({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <section id="harga" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.heading}{" "}
              <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
                {t.highlight}
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch mb-8">
            {t.packages.map((pkg, i) => {
              const isFeatured = pkg.popular
              return (
                <div
                  key={i}
                  className={`flex flex-col relative border-[3px] border-black rounded-[28px] overflow-hidden transition-all duration-300 ${
                    isFeatured
                      ? "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] scale-[1.02]"
                      : "bg-white hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                  style={isFeatured ? { backgroundColor: pkg.accentColor } : {}}
                >
                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#FFC224] text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-black">
                        {t.popularBadge}
                      </span>
                    </div>
                  )}

                  {/* Top accent for non-featured cards */}
                  {!isFeatured && (
                    <div className="h-2 w-full flex-shrink-0" style={{ backgroundColor: pkg.accentColor }} />
                  )}

                  <div className="p-7 flex flex-col flex-1">
                    {/* Package name */}
                    <div className="mb-5">
                      <span className="text-3xl">{pkg.emoji}</span>
                      <h3
                        className="text-xl font-bold mt-3 mb-1"
                        style={{ color: isFeatured ? pkg.accentText : "#0B0B0B" }}
                      >
                        {pkg.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: isFeatured ? "rgba(255,255,255,0.75)" : "#6B7280" }}
                      >
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div
                      className="mb-5 pb-5 border-b-2"
                      style={{ borderColor: isFeatured ? "rgba(255,255,255,0.2)" : "#E5E7EB" }}
                    >
                      <div
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: isFeatured ? pkg.accentText : "#0B0B0B" }}
                      >
                        {pkg.idr}
                      </div>
                      <div
                        className="text-sm font-medium mt-0.5"
                        style={{ color: isFeatured ? "rgba(255,255,255,0.6)" : "#9CA3AF" }}
                      >
                        {pkg.usd}
                      </div>
                      <div
                        className="text-xs font-semibold mt-2 px-3 py-1 rounded-full w-fit border-2"
                        style={
                          isFeatured
                            ? { backgroundColor: "rgba(255,255,255,0.15)", color: pkg.accentText, borderColor: "rgba(255,255,255,0.3)" }
                            : { backgroundColor: "#F3F4F6", color: "#374151", borderColor: "#E5E7EB" }
                        }
                      >
                        {t.deliveryLabel}: {pkg.delivery}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 flex-1 mb-7">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <Check
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: isFeatured ? "#86EFAC" : "#16A34A" }}
                          />
                          <span
                            className={`text-sm leading-relaxed ${f.strong ? "font-bold" : "font-medium"}`}
                            style={{ color: isFeatured ? pkg.accentText : "#374151" }}
                          >
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href={waLink(pkg.waMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-auto"
                    >
                      <Button
                        className="w-full h-[52px] rounded-[14px] font-bold text-base border-[3px] border-black"
                        style={
                          isFeatured
                            ? { backgroundColor: "#25D366", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)" }
                            : { backgroundColor: "#0B0B0B", color: "#FFFFFF", borderColor: "#0B0B0B" }
                        }
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {pkg.cta}
                      </Button>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Note */}
          <p className="text-center text-sm text-gray-500 max-w-xl mx-auto">{t.note}</p>

        </div>
      </div>
    </section>
  )
}
