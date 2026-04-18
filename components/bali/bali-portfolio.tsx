import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import type { Lang } from "./bali-page"

interface Project {
  title: string
  desc: string
  tag: string
  stack: string
  result: string
  logo: string
  bgColor: string
  illustration: string
  github: string
  live: string | null
}

interface Content {
  heading: string
  highlight: string
  subtitle: string
  viewGithub: string
  viewLive: string
  browseAll: string
  projects: Project[]
}

const content: Record<Lang, Content> = {
  id: {
    heading: "Contoh",
    highlight: "Website Nyata",
    subtitle:
      "Proyek nyata yang sudah saya bangun dan diluncurkan — bukan mockup, bukan template.",
    viewGithub: "Lihat di GitHub",
    viewLive: "Buka Website",
    browseAll: "Lihat Semua Proyek",
    projects: [
      {
        title: "Skinderma Aesthetic Clinic",
        desc: "Website klinik kecantikan profesional dengan manajemen pasien, jadwal konsultasi, dan profil dokter. Diakses oleh pasien dari Singapura, Malaysia, dan seluruh Indonesia.",
        tag: "Website Klinik Profesional",
        stack: "Next.js · TypeScript · Firebase · Tailwind CSS",
        result: "Melayani pasien internasional dari SG & MY",
        logo: "/images/studio-logo.svg",
        bgColor: "bg-[#FF6B7A]",
        illustration: "/images/studio-workspace.svg",
        github: "https://github.com/adithyodw/skinderma-clinic-website",
        live: "https://skinderma-clinic-website.vercel.app",
      },
      {
        title: "Djaya Massage & Reflexology",
        desc: "Website premium untuk bisnis spa dan pijat refleksi mewah. Termasuk menu layanan interaktif, galeri, integrasi WhatsApp, dan desain yang menarik tamu hotel bintang.",
        tag: "Website Spa & Wellness",
        stack: "Next.js · TypeScript · Framer Motion · Tailwind CSS",
        result: "4.8★ Google Reviews — 38+ ulasan pelanggan",
        logo: "/images/venture-logo.svg",
        bgColor: "bg-[#FDB927]",
        illustration: "/images/venture-workspace.svg",
        github: "https://github.com/adithyodw/djaya-massage-website",
        live: null,
      },
    ],
  },
  en: {
    heading: "Real",
    highlight: "Website Examples",
    subtitle:
      "Real projects I've built and launched — not mockups, not templates.",
    viewGithub: "View on GitHub",
    viewLive: "Open Website",
    browseAll: "Browse All Projects",
    projects: [
      {
        title: "Skinderma Aesthetic Clinic",
        desc: "Professional aesthetic clinic website with patient management, consultation scheduling, and doctor profiles. Serving patients from Singapore, Malaysia, and Indonesia.",
        tag: "Professional Clinic Website",
        stack: "Next.js · TypeScript · Firebase · Tailwind CSS",
        result: "Serving international patients from SG & MY",
        logo: "/images/studio-logo.svg",
        bgColor: "bg-[#FF6B7A]",
        illustration: "/images/studio-workspace.svg",
        github: "https://github.com/adithyodw/skinderma-clinic-website",
        live: "https://skinderma-clinic-website.vercel.app",
      },
      {
        title: "Djaya Massage & Reflexology",
        desc: "Premium website for a luxury spa and reflexology business. Includes interactive service menu, gallery, WhatsApp integration, and a design that attracts hotel guests.",
        tag: "Spa & Wellness Website",
        stack: "Next.js · TypeScript · Framer Motion · Tailwind CSS",
        result: "4.8★ Google Reviews — 38+ customer reviews",
        logo: "/images/venture-logo.svg",
        bgColor: "bg-[#FDB927]",
        illustration: "/images/venture-workspace.svg",
        github: "https://github.com/adithyodw/djaya-massage-website",
        live: null,
      },
    ],
  },
}

export function BaliPortfolio({ lang }: { lang: Lang }) {
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

        <div className="space-y-8 mb-12">
          {t.projects.map((p, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-5">
                  <Image
                    src={p.logo}
                    alt={`${p.title} logo`}
                    width={120}
                    height={32}
                    className="h-6 md:h-8 w-auto"
                    loading="lazy"
                  />
                </div>

                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-2 w-fit">
                  {p.tag}
                </span>
                <span className="text-gray-400 text-xs font-medium mb-5">{p.stack}</span>

                <h3 className="text-xl md:text-[26px] font-bold mb-3 leading-tight text-[#0B0B0B]">
                  {p.title}
                </h3>
                <p className="text-base md:text-[17px] text-[#393939] mb-5 leading-relaxed font-medium">
                  {p.desc}
                </p>

                <div className="bg-[#f0fdf4] border-2 border-[#86efac] rounded-xl px-4 py-2 mb-6 w-fit">
                  <span className="text-[#16a34a] text-sm font-bold">✓ {p.result}</span>
                </div>

                <div className="flex items-center gap-5 flex-wrap">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                  >
                    {t.viewGithub}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-semibold text-[#2F81F7] hover:gap-3 transition-all text-sm md:text-base"
                    >
                      {t.viewLive}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className={`${p.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[460px]`}>
                <Image
                  src={p.illustration}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="https://github.com/adithyodw" target="_blank" rel="noopener noreferrer">
            <button className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2 text-sm md:text-base">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {t.browseAll}
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
