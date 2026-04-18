import { Code2, GitBranch, Zap, X, Check, type LucideIcon } from "lucide-react"
import type { Lang } from "./bali-page"

const PILLAR_ICONS: LucideIcon[] = [Code2, GitBranch, Zap]

interface Pillar {
  title: string
  desc: string
  badge: string
  color: string
}

interface Content {
  eyebrow: string
  heading: string
  highlight: string
  subtitle: string
  pillars: Pillar[]
  vsHeading: string
  vsLeft: { label: string; items: string[] }
  vsRight: { label: string; items: string[] }
  stackHeading: string
  proof: string
}

const content: Record<Lang, Content> = {
  id: {
    eyebrow: "Kenapa Bukan WordPress?",
    heading: "Kami Build dari",
    highlight: "Nol. Bukan Template.",
    subtitle:
      "Website Anda dibangun dengan React.js — teknologi yang sama dipakai Netflix, Airbnb, dan ribuan startup global. Bukan WordPress. Bukan template. Bukan copy-paste.",
    pillars: [
      {
        title: "React.js & Next.js 15",
        desc: "Framework modern terdepan yang dipakai industri global. Server-side rendering, static generation, dan App Router — hasil akhirnya website yang cepat, SEO-friendly, dan bisa scale.",
        badge: "Industry Standard",
        color: "#2F81F7",
      },
      {
        title: "GitHub Workflow",
        desc: "Setiap baris kode disimpan di GitHub dan sepenuhnya milik Anda. Version control penuh, riwayat perubahan transparan, dan tidak pernah terkunci ke vendor manapun.",
        badge: "Code Ownership",
        color: "#6366F1",
      },
      {
        title: "Deploy via Vercel",
        desc: "CDN global Vercel memastikan website Anda loading di bawah 1 detik dari mana saja — Bali, Jakarta, Singapore, maupun Tokyo. Free SSL, uptime 99.99%, Lighthouse 90+.",
        badge: "< 1 Detik Loading",
        color: "#FF6B7A",
      },
    ],
    vsHeading: "WordPress vs Modern Tech Stack",
    vsLeft: {
      label: "WordPress / CMS Biasa",
      items: [
        "Plugin berbayar setiap bulan",
        "Rentan hack & malware",
        "Loading 3–8 detik",
        "Tampilan template yang sama-sama",
        "Update rutin, sering conflict",
        "Biaya hosting + domain + plugin",
        "SEO terbatas tanpa plugin berbayar",
      ],
    },
    vsRight: {
      label: "Tech Stack Kami",
      items: [
        "Bayar sekali, tidak ada biaya bulanan",
        "Code bersih, aman, tidak ada celah plugin",
        "Loading < 1 detik via Vercel CDN",
        "Desain unik, 100% custom dari nol",
        "Stable, low maintenance, long-term",
        "Deploy gratis ke Vercel (forever free tier)",
        "SEO built-in: metadata, JSON-LD, Open Graph",
      ],
    },
    stackHeading: "Tech Stack di Setiap Project",
    proof: "10+ project deployed · GitHub public · Vercel production · Lighthouse 90+",
  },
  en: {
    eyebrow: "Why Not WordPress?",
    heading: "We Build from",
    highlight: "Scratch. Not Templates.",
    subtitle:
      "Your website is built with React.js — the same technology used by Netflix, Airbnb, and thousands of global startups. Not WordPress. Not templates. Not copy-paste.",
    pillars: [
      {
        title: "React.js & Next.js 15",
        desc: "The leading modern framework used across the global industry. Server-side rendering, static generation, and App Router — the result is a fast, SEO-optimised, and scalable website.",
        badge: "Industry Standard",
        color: "#2F81F7",
      },
      {
        title: "GitHub Workflow",
        desc: "Every line of code lives in GitHub and belongs entirely to you. Full version control, transparent change history, and never locked into any vendor.",
        badge: "Code Ownership",
        color: "#6366F1",
      },
      {
        title: "Deploy via Vercel",
        desc: "Vercel's global CDN ensures your website loads under 1 second from anywhere — Bali, Jakarta, Singapore, or Tokyo. Free SSL, 99.99% uptime, Lighthouse 90+.",
        badge: "< 1s Load Time",
        color: "#FF6B7A",
      },
    ],
    vsHeading: "WordPress vs Modern Tech Stack",
    vsLeft: {
      label: "WordPress / Basic CMS",
      items: [
        "Monthly plugin subscription fees",
        "Vulnerable to hacks & malware",
        "Loads in 3–8 seconds",
        "Generic template appearance",
        "Constant updates, frequent conflicts",
        "Hosting + domain + plugin costs",
        "Limited SEO without paid plugins",
      ],
    },
    vsRight: {
      label: "Our Tech Stack",
      items: [
        "One-time payment, zero monthly fees",
        "Clean, secure code — no plugin exploits",
        "< 1 second load via Vercel CDN",
        "100% custom, unique design from scratch",
        "Stable, low maintenance, long-term reliable",
        "Free deploy on Vercel (forever free tier)",
        "Built-in SEO: metadata, JSON-LD, Open Graph",
      ],
    },
    stackHeading: "Tech Stack on Every Project",
    proof: "10+ projects deployed · GitHub public · Vercel production · Lighthouse 90+",
  },
}

const STACK: { label: string; color: string; text: string }[] = [
  { label: "Next.js 15", color: "#0B0B0B", text: "#FFFFFF" },
  { label: "React.js", color: "#2F81F7", text: "#FFFFFF" },
  { label: "TypeScript", color: "#3178C6", text: "#FFFFFF" },
  { label: "Tailwind CSS", color: "#06B6D4", text: "#FFFFFF" },
  { label: "Firebase", color: "#F59E0B", text: "#0B0B0B" },
  { label: "Framer Motion", color: "#FF4A60", text: "#FFFFFF" },
  { label: "Vercel", color: "#0B0B0B", text: "#FFFFFF" },
  { label: "GitHub", color: "#6366F1", text: "#FFFFFF" },
]

export function BaliTech({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <section id="teknologi" className="bg-[#F5F5F0] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              {t.eyebrow}
            </span>
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

          {/* 3 Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {t.pillars.map((p, i) => {
              const Icon = PILLAR_ICONS[i]
              return (
                <div
                  key={i}
                  className="bg-white border-[3px] border-black rounded-[28px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                >
                  <div className="h-2" style={{ backgroundColor: p.color }} />
                  <div className="p-7">
                    <div className="mb-4">
                      <Icon className="w-9 h-9" style={{ color: p.color }} />
                    </div>
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 border-2 border-black"
                      style={{ backgroundColor: p.color, color: "#FFFFFF" }}
                    >
                      {p.badge}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-[#0B0B0B]">{p.title}</h3>
                    <p className="text-[15px] leading-[24px] text-[#393939] font-medium">{p.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Comparison */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6">{t.vsHeading}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Left — WordPress */}
              <div className="bg-white border-[3px] border-black rounded-[24px] overflow-hidden">
                <div className="bg-[#FEE2E2] border-b-[3px] border-black px-6 py-3 flex items-center gap-2">
                  <X className="w-4 h-4 text-[#991B1B] flex-shrink-0" />
                  <span className="font-bold text-[#991B1B] text-sm">{t.vsLeft.label}</span>
                </div>
                <ul className="px-6 py-5 space-y-3">
                  {t.vsLeft.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#393939] font-medium">
                      <X className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — Our Stack */}
              <div className="bg-white border-[3px] border-black rounded-[24px] overflow-hidden">
                <div className="bg-[#DCFCE7] border-b-[3px] border-black px-6 py-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#166534] flex-shrink-0" />
                  <span className="font-bold text-[#166534] text-sm">{t.vsRight.label}</span>
                </div>
                <ul className="px-6 py-5 space-y-3">
                  {t.vsRight.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#393939] font-medium">
                      <Check className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="text-center">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
              {t.stackHeading}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {STACK.map((s, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-bold border-2 border-black"
                  style={{ backgroundColor: s.color, color: s.text }}
                >
                  {s.label}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 font-medium">{t.proof}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
