"use client"

import { useState } from "react"
import { ArrowRight, ExternalLink, Check } from "lucide-react"
import type { Lang } from "./bali-page"

type Segment = "all" | "fnb" | "laundry" | "healthcare" | "civic" | "business"

interface SegmentDef {
  id: Segment
  labelId: string
  labelEn: string
  color: string
  textColor: string
}

const SEGMENTS: SegmentDef[] = [
  { id: "all",        labelId: "Semua",             labelEn: "All Work",           color: "#0B0B0B", textColor: "#FFFFFF" },
  { id: "fnb",        labelId: "F&B & Hospitality", labelEn: "F&B & Hospitality",  color: "#FF6B7A", textColor: "#FFFFFF" },
  { id: "laundry",    labelId: "Laundry",           labelEn: "Laundry",            color: "#2F81F7", textColor: "#FFFFFF" },
  { id: "healthcare", labelId: "Kesehatan",         labelEn: "Healthcare",         color: "#25D366", textColor: "#FFFFFF" },
  { id: "civic",      labelId: "Civic & Politik",   labelEn: "Civic & Political",  color: "#FDB927", textColor: "#0B0B0B" },
  { id: "business",   labelId: "Bisnis",            labelEn: "Business",           color: "#6366F1", textColor: "#FFFFFF" },
]

interface Project {
  title: string
  descId: string
  descEn: string
  stack: string
  segment: Exclude<Segment, "all">
  github: string
  live?: string
  resultId?: string
  resultEn?: string
}

const PROJECTS: Project[] = [
  {
    title: "Bhumi Lovina Bali",
    descId: "Website premium untuk destinasi restoran dan resort di Lovina, Bali Utara. Dirancang untuk menarik wisatawan internasional dengan visual atmosfer dan integrasi booking.",
    descEn: "Premium hospitality website for an upscale restaurant and resort destination in Lovina, North Bali. Crafted to captivate international travellers.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "fnb",
    github: "https://github.com/adithyodw/Bhumi-lovina-bali",
  },
  {
    title: "Djaya Massage & Reflexology",
    descId: "Website spa mewah dengan menu layanan interaktif, galeri, dan integrasi WhatsApp booking. Dirancang untuk menarik tamu hotel bintang dan wisatawan.",
    descEn: "Luxury spa website with interactive service menus, gallery, and WhatsApp booking. Designed to attract hotel guests and international tourists.",
    stack: "Next.js · TypeScript · Framer Motion · Tailwind CSS",
    segment: "fnb",
    github: "https://github.com/adithyodw/djaya-massage-website",
    resultId: "4.8★ Google Reviews — 38+ ulasan pelanggan",
    resultEn: "4.8★ Google Reviews — 38+ customer reviews",
  },
  {
    title: "Bandar Laundry Bali",
    descId: "Platform laundry modern dengan booking online, tracking pesanan real-time, harga transparan, dan invoice digital untuk pasar laundry Bali.",
    descEn: "Modern laundry platform with online booking, real-time order tracking, transparent pricing, and digital invoicing for Bali's growing market.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "laundry",
    github: "https://github.com/adithyodw/Bandar-laundry-bali",
  },
  {
    title: "Skinderma Aesthetic Clinic",
    descId: "Platform klinik estetika profesional dengan manajemen pasien, jadwal konsultasi, dan profil dokter. Melayani pasien dari Singapura, Malaysia, dan Indonesia.",
    descEn: "Professional aesthetic clinic platform with patient management, consultation scheduling, and doctor profiles. Serving patients from Singapore, Malaysia, and Indonesia.",
    stack: "Next.js · TypeScript · Firebase · Tailwind CSS",
    segment: "healthcare",
    github: "https://github.com/adithyodw/skinderma-clinic-website",
    live: "https://skinderma-clinic-website.vercel.app",
    resultId: "Melayani pasien internasional dari SG & MY",
    resultEn: "Serving international patients from SG & MY",
  },
  {
    title: "Lapor Bro Ron",
    descId: "Platform civic digital yang memungkinkan warga melaporkan dan memantau isu langsung ke perwakilan mereka — tata kelola transparan berbasis teknologi.",
    descEn: "Civic digital platform enabling community members to submit and track reports directly to their local representative — transparent governance through technology.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "civic",
    github: "https://github.com/adithyodw/lapor-bro-ron",
  },
  {
    title: "Lapor Pak Manang",
    descId: "Sistem pelaporan komunitas untuk tata kelola lokal yang transparan. Warga dapat menyuarakan masalah dan memantau penyelesaiannya secara real-time.",
    descEn: "Community reporting system for transparent local governance. Citizens can voice concerns and track resolution directly with elected officials in real time.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "civic",
    github: "https://github.com/adithyodw/lapor-pak-manang",
  },
  {
    title: "Netdata Website",
    descId: "Website corporate untuk bisnis berbasis data modern. Dioptimalkan untuk performa, SEO-ready, dan dirancang untuk kredibilitas enterprise-grade secara online.",
    descEn: "Corporate digital presence for a modern data-driven business. Performance-optimised, SEO-ready, and built for enterprise-grade online credibility.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "business",
    github: "https://github.com/adithyodw/netdata-website",
  },
  {
    title: "Baginda Website",
    descId: "Website corporate premium dengan brand presence yang berwibawa. Desain visual premium dan arsitektur bersih dibangun untuk keunggulan organisasi.",
    descEn: "Distinguished corporate website with an authoritative brand presence. Premium visual design and clean architecture built for organisational excellence.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "business",
    github: "https://github.com/adithyodw/Baginda-Website",
  },
]

const SEGMENT_ORDER: Exclude<Segment, "all">[] = ["fnb", "laundry", "healthcare", "civic", "business"]

interface Content {
  heading: string
  highlight: string
  subtitle: string
  count: (n: number) => string
  browseAll: string
}

const content: Record<Lang, Content> = {
  id: {
    heading: "Semua",
    highlight: "Proyek Nyata",
    subtitle: "Website yang sudah dibangun dan diluncurkan — bukan mockup, bukan template, bukan demo.",
    count: (n) => `${n} proyek`,
    browseAll: "Lihat Semua di GitHub",
  },
  en: {
    heading: "All",
    highlight: "Real Projects",
    subtitle: "Websites built and launched — not mockups, not templates, not demos.",
    count: (n) => `${n} project${n !== 1 ? "s" : ""}`,
    browseAll: "Browse All on GitHub",
  },
}

export function BaliPortfolio({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<Segment>("all")
  const t = content[lang]

  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.segment === active)

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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

        {/* Count + Tabs */}
        <div className="flex items-center justify-between mb-4 gap-4">
          <span className="text-gray-400 text-sm font-medium">{t.count(filtered.length)}</span>
        </div>

        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {SEGMENTS.map((seg) => {
            const isActive = active === seg.id
            const label = lang === "id" ? seg.labelId : seg.labelEn
            return (
              <button
                key={seg.id}
                onClick={() => setActive(seg.id)}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold border-[2.5px] border-black transition-all duration-200"
                style={
                  isActive
                    ? {
                        backgroundColor: seg.color,
                        color: seg.textColor,
                        boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
                        transform: "translate(-1px,-1px)",
                      }
                    : { backgroundColor: "#FFFFFF", color: "#0B0B0B" }
                }
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        {active === "all" ? (
          <div className="space-y-12">
            {SEGMENT_ORDER.map((segId) => {
              const segProjects = PROJECTS.filter((p) => p.segment === segId)
              const segDef = SEGMENTS.find((s) => s.id === segId)!
              const segLabel = lang === "id" ? segDef.labelId : segDef.labelEn
              return (
                <div key={segId}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-3 h-3 rounded-full border-2 border-black flex-shrink-0"
                      style={{ backgroundColor: segDef.color }}
                    />
                    <span className="text-base font-bold text-[#0B0B0B] tracking-wide">
                      {segLabel}
                    </span>
                    <div className="flex-1 h-[2px] bg-black/10" />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {segProjects.map((p, i) => (
                      <ProjectCard key={i} project={p} lang={lang} segDef={segDef} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => {
              const segDef = SEGMENTS.find((s) => s.id === p.segment)!
              return <ProjectCard key={i} project={p} lang={lang} segDef={segDef} />
            })}
          </div>
        )}

        {/* Browse all */}
        <div className="flex justify-center mt-14">
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

function ProjectCard({
  project,
  lang,
  segDef,
}: {
  project: Project
  lang: Lang
  segDef: SegmentDef
}) {
  const desc = lang === "id" ? project.descId : project.descEn
  const result = lang === "id" ? project.resultId : project.resultEn

  return (
    <div className="group bg-white border-[3px] border-black rounded-[24px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col">
      <div className="h-2 w-full flex-shrink-0" style={{ backgroundColor: segDef.color }} />
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <span
            className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full border-2 border-black"
            style={{ backgroundColor: segDef.color, color: segDef.textColor }}
          >
            {lang === "id" ? segDef.labelId : segDef.labelEn}
          </span>
        </div>

        <h3 className="text-[20px] leading-[28px] font-bold mb-2 text-[#0B0B0B]">
          {project.title}
        </h3>
        <p className="text-xs text-gray-400 font-medium mb-3">{project.stack}</p>
        <p className="text-[14px] leading-[22px] text-[#393939] font-medium flex-1 mb-4">{desc}</p>

        {result && (
          <div className="bg-[#f0fdf4] border-2 border-[#86efac] rounded-xl px-3 py-1.5 mb-4 w-fit flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#16a34a] flex-shrink-0" />
            <span className="text-[#16a34a] text-xs font-bold">{result}</span>
          </div>
        )}

        <div className="flex items-center gap-4 mt-auto pt-2 border-t border-gray-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold text-[#0B0B0B] hover:gap-2.5 transition-all text-sm"
          >
            GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-[#2F81F7] hover:gap-2.5 transition-all text-sm"
            >
              Live
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
