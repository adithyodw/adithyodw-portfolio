"use client"

import { useState } from "react"
import { ArrowRight, ExternalLink, MapPin, Check } from "lucide-react"
import Image from "next/image"

type Segment = "all" | "fnb" | "laundry" | "healthcare" | "civic" | "business"

interface SegmentDef {
  id: Segment
  label: string
  color: string
  textColor: string
}

const SEGMENTS: SegmentDef[] = [
  { id: "all",        label: "All Work",           color: "#0B0B0B", textColor: "#FFFFFF" },
  { id: "fnb",        label: "F&B & Hospitality",  color: "#FF6B7A", textColor: "#FFFFFF" },
  { id: "laundry",    label: "Laundry",            color: "#2F81F7", textColor: "#FFFFFF" },
  { id: "healthcare", label: "Healthcare",          color: "#25D366", textColor: "#FFFFFF" },
  { id: "civic",      label: "Civic & Political",  color: "#FDB927", textColor: "#0B0B0B" },
  { id: "business",   label: "Business",           color: "#6366F1", textColor: "#FFFFFF" },
]

interface FeaturedProject {
  title: string
  description: string
  tag: string
  tagLine: string
  logo: string
  bgColor: string
  illustration: string
  link: string
}

interface ClientProject {
  title: string
  desc: string
  stack: string
  segment: Exclude<Segment, "all">
  github: string
  live?: string
  result?: string
}

const FEATURED: FeaturedProject[] = [
  {
    title: "TOL LANGIT Neural Quant Advisor",
    description:
      "Institutional-grade MetaTrader 5 quantitative trading system for gold (XAUUSD) and forex. Neural network pattern recognition with three-tier confirmation — trend filter, volatility gating, and z-score statistical entry. Live accounts with +1,408% growth since July 2021.",
    tag: "Quantitative Systems",
    tagLine: "MQL5 · Neural Networks · MetaTrader 5",
    logo: "/images/studio-logo.svg",
    bgColor: "bg-[#6366F1]",
    illustration: "/images/studio-workspace.svg",
    link: "https://github.com/adithyodw/TOL-LANGIT-Neural-Quant-Advisor",
  },
  {
    title: "LinkedIn Easy Apply Automation",
    description:
      "Playwright-powered job application bot that searches up to 12 job titles, intelligently fills every form field (text, dropdowns, radio buttons, file uploads), and submits up to 50 applications per day. Features session persistence, deduplication, and timestamped logging.",
    tag: "Automation",
    tagLine: "Node.js · Playwright · Chromium",
    logo: "/images/venture-logo.svg",
    bgColor: "bg-[#2F81F7]",
    illustration: "/images/venture-workspace.svg",
    link: "https://github.com/adithyodw/linkedin-easy-apply-bot",
  },
]

const CLIENT_PROJECTS: ClientProject[] = [
  {
    title: "Bhumi Lovina Bali",
    desc: "Premium hospitality and dining website for an upscale resort destination in Lovina, North Bali. Crafted to captivate international travelers with atmosphere and seamless booking.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "fnb",
    github: "https://github.com/adithyodw/Bhumi-lovina-bali",
  },
  {
    title: "Djaya Massage & Reflexology",
    desc: "Luxury spa and wellness website with interactive service menus, gallery, and WhatsApp booking integration. Designed to attract hotel guests and international tourists.",
    stack: "Next.js · TypeScript · Framer Motion · Tailwind CSS",
    segment: "fnb",
    github: "https://github.com/adithyodw/djaya-massage-website",
    result: "4.8★ Google Reviews — 38+ customer reviews",
  },
  {
    title: "Bandar Laundry Bali",
    desc: "Modern laundry business platform with online booking, real-time order tracking, transparent pricing, and digital invoicing tailored for Bali's growing market.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "laundry",
    github: "https://github.com/adithyodw/Bandar-laundry-bali",
  },
  {
    title: "Skinderma Aesthetic Clinic",
    desc: "Professional aesthetic clinic platform with patient management, consultation scheduling, and doctor profiles. Serving patients from Singapore, Malaysia, and Indonesia.",
    stack: "Next.js · TypeScript · Firebase · Tailwind CSS",
    segment: "healthcare",
    github: "https://github.com/adithyodw/skinderma-clinic-website",
    live: "https://skinderma-clinic-website.vercel.app",
    result: "Serving international patients from SG & MY",
  },
  {
    title: "Lapor Bro Ron",
    desc: "Civic digital platform enabling community members to submit and track reports directly to their local representative — transparent governance powered by technology.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "civic",
    github: "https://github.com/adithyodw/lapor-bro-ron",
  },
  {
    title: "Lapor Pak Manang",
    desc: "Community issue reporting system for transparent local governance. Empowers citizens to voice concerns and track resolution directly with elected officials.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "civic",
    github: "https://github.com/adithyodw/lapor-pak-manang",
  },
  {
    title: "Netdata Website",
    desc: "Corporate digital presence for a modern data-driven business. Performance-optimized, SEO-ready, and designed to establish enterprise-grade credibility online.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "business",
    github: "https://github.com/adithyodw/netdata-website",
  },
  {
    title: "Baginda Website",
    desc: "Distinguished corporate website delivering an authoritative brand presence. Premium visual design and clean architecture built for organizational excellence.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    segment: "business",
    github: "https://github.com/adithyodw/Baginda-Website",
  },
]

const SEGMENT_ORDER: Exclude<Segment, "all">[] = ["fnb", "laundry", "healthcare", "civic", "business"]

function ClientCard({ project }: { project: ClientProject }) {
  const seg = SEGMENTS.find((s) => s.id === project.segment)!

  return (
    <div className="group bg-white border-[3px] border-black rounded-[24px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col">
      {/* Colored accent bar */}
      <div className="h-2 w-full flex-shrink-0" style={{ backgroundColor: seg.color }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Segment tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full border-2 border-black"
            style={{ backgroundColor: seg.color, color: seg.textColor }}
          >
            {seg.label}
          </span>
        </div>

        <h3 className="text-[20px] leading-[28px] font-bold mb-2 text-[#0B0B0B]">
          {project.title}
        </h3>

        <p className="text-xs text-gray-400 font-medium mb-3">{project.stack}</p>

        <p className="text-[14px] leading-[22px] text-[#393939] font-medium flex-1 mb-4">
          {project.desc}
        </p>

        {project.result && (
          <div className="bg-[#f0fdf4] border-2 border-[#86efac] rounded-xl px-3 py-1.5 mb-4 w-fit flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#16a34a] flex-shrink-0" />
            <span className="text-[#16a34a] text-xs font-bold">{project.result}</span>
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

export function PortfolioSection() {
  const [active, setActive] = useState<Segment>("all")

  const filtered =
    active === "all"
      ? CLIENT_PROJECTS
      : CLIENT_PROJECTS.filter((p) => p.segment === active)

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
              project portfolio
            </span>
          </h2>
        </div>

        {/* ── Signature Work ── */}
        <div className="space-y-8 mb-16">
          {FEATURED.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={120}
                    height={32}
                    className="h-6 md:h-8 w-auto"
                    loading="lazy"
                  />
                </div>

                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3 w-fit">
                  {project.tag}
                </span>
                <span className="inline-block text-gray-500 text-xs font-medium mb-6">
                  {project.tagLine}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                >
                  View on GitHub
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div
                className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}
              >
                <Image
                  src={project.illustration}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Bali Market Promo ── */}
        <div className="my-4 bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-7 h-7 text-black flex-shrink-0" />
              <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-3 py-1.5 rounded-full">
                Bali Market
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B0B0B] mb-2 leading-tight">
              Also building websites for<br className="hidden md:block" /> Bali&apos;s local businesses.
            </h3>
            <p className="text-[#393939] text-base font-medium max-w-lg mb-5 leading-relaxed">
              Dedicated bilingual (ID/EN) web service for Bali&apos;s market — F&B, laundry, hotels, villas, clinics & SMEs. Pricing from Rp 1 juta (~$60).
            </p>
            <div className="flex flex-wrap gap-2">
              {["8+ Bali Projects", "ID/EN Bilingual", "From Rp 1 juta", "WhatsApp-optimised", "Next.js + Vercel"].map((tag) => (
                <span key={tag} className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a href="/bali" className="flex-shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto bg-black text-white px-8 py-5 rounded-[14px] font-bold text-base hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 border-[3px] border-black whitespace-nowrap">
              View Bali Portfolio
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </a>
        </div>

        {/* ── Client Work ── */}
        <div>
          {/* Sub-heading */}
          <div className="flex items-end justify-between mb-8 gap-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              Client Work
            </h3>
            <span className="text-gray-400 text-sm font-medium whitespace-nowrap">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Segment tabs */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            {SEGMENTS.map((seg) => {
              const isActive = active === seg.id
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
                      : {
                          backgroundColor: "#FFFFFF",
                          color: "#0B0B0B",
                        }
                  }
                >
                  {seg.label}
                </button>
              )
            })}
          </div>

          {/* Grid */}
          {active === "all" ? (
            /* Grouped by segment when "All" is selected */
            <div className="space-y-12">
              {SEGMENT_ORDER.map((segId) => {
                const segProjects = CLIENT_PROJECTS.filter((p) => p.segment === segId)
                const segDef = SEGMENTS.find((s) => s.id === segId)!
                return (
                  <div key={segId}>
                    {/* Segment group header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-3 h-3 rounded-full border-2 border-black flex-shrink-0"
                        style={{ backgroundColor: segDef.color }}
                      />
                      <span className="text-base font-bold text-[#0B0B0B] tracking-wide">
                        {segDef.label}
                      </span>
                      <div className="flex-1 h-[2px] bg-black/10" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {segProjects.map((p, i) => (
                        <ClientCard key={i} project={p} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* Flat grid for single segment */
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p, i) => (
                <ClientCard key={i} project={p} />
              ))}
            </div>
          )}
        </div>

        {/* Browse all button */}
        <div className="flex justify-center mt-14">
          <a
            href="https://github.com/adithyodw"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Browse all projects
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
