import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Lang = "en" | "id"

interface Content {
  heading: string
  headingHighlight: string
  subtitle: string
  resumeBtn: string
  resumeYearsLabel: string
}

const content: Record<Lang, Content> = {
  en: {
    heading: "Take a look at my",
    headingHighlight: "past experience",
    subtitle: "12+ years across enterprise networking, pre-sales solutions architecture, and full-stack development — from Jakarta to Singapore.",
    resumeBtn: "See full resume",
    resumeYearsLabel: "12+ years",
  },
  id: {
    heading: "Lihat rekam jejak",
    headingHighlight: "pengalaman saya",
    subtitle: "12+ tahun di bidang enterprise networking, solusi arsitektur pre-sales, dan pengembangan full-stack — dari Jakarta hingga Singapura.",
    resumeBtn: "Lihat resume lengkap",
    resumeYearsLabel: "12+ tahun",
  },
}

interface Experience {
  period: string
  titleEn: string
  titleId: string
  company: string
  descEn: string
  descId: string
  icon: string
}

const experiences: Experience[] = [
  {
    period: "2026 — Present",
    titleEn: "Technical Program Manager, WAN Infrastructure and Capacity",
    titleId: "Technical Program Manager, WAN Infrastructure and Capacity",
    company: "Google, Singapore",
    descEn:
      "Driving technical program management for wide-area network (WAN) infrastructure and capacity planning across global backbone systems. Aligning cross-functional engineering execution with large-scale capacity strategy.",
    descId:
      "Memimpin manajemen program teknis untuk infrastruktur wide-area network (WAN) dan perencanaan kapasitas di seluruh sistem backbone global. Menyelaraskan eksekusi engineering lintas fungsi dengan strategi kapasitas berskala besar.",
    icon: "/images/agency.png",
  },
  {
    period: "2022 — 2026",
    titleEn: "Senior Solutions Manager",
    titleId: "Senior Solutions Manager",
    company: "Singtel, Singapore",
    descEn:
      "Pre-sales technical consultation and solution architecture for global SD-WAN and MPLS/IP WAN networks. Lead presales architect for Singtel Wholesale, driving USD 150M+ annual revenue across enterprise, carrier, and financial-sector customers.",
    descId:
      "Konsultasi teknis pre-sales dan arsitektur solusi untuk jaringan SD-WAN serta MPLS/IP WAN global. Lead presales architect untuk Singtel Wholesale, mendorong pendapatan tahunan USD 150 juta+ di segmen enterprise, carrier, dan sektor finansial.",
    icon: "/images/company.png",
  },
  {
    period: "2018 — 2022",
    titleEn: "Senior Technical Solutions Engineer",
    titleId: "Senior Technical Solutions Engineer",
    company: "Ingram Micro, Singapore",
    descEn:
      "Delivered innovative pre-sales network solutions across routing & switching, IP telephony, wireless LAN, and network security from Cisco, Juniper, Palo Alto Networks, and HPE Aruba — architecting complete solutions with sales and vendor teams.",
    descId:
      "Menghadirkan solusi jaringan pre-sales inovatif mencakup routing & switching, IP telephony, wireless LAN, dan keamanan jaringan dari Cisco, Juniper, Palo Alto Networks, dan HPE Aruba — merancang solusi lengkap bersama tim sales dan vendor.",
    icon: "/images/startup.png",
  },
  {
    period: "2017 — 2018",
    titleEn: "Lead Network Engineer",
    titleId: "Lead Network Engineer",
    company: "IBM, Singapore",
    descEn:
      "Led a team of network and security engineers, owning capacity planning, fault tolerance, and network operations strategy while delivering configuration changes and project implementations with minimal disruption.",
    descId:
      "Memimpin tim network dan security engineer, menangani capacity planning, fault tolerance, dan strategi operasi jaringan sekaligus mengeksekusi perubahan konfigurasi dan implementasi proyek dengan gangguan minimal.",
    icon: "/images/busines.png",
  },
  {
    period: "2016 — 2017",
    titleEn: "Network Operations Manager",
    titleId: "Network Operations Manager",
    company: "Indosat Ooredoo Hutchison, Singapore",
    descEn:
      "Led the Network Operations team with 24/7 support across international submarine cable projects (JB3JS, INDIGO, JAKABARE, SMW3), managing terrestrial backhaul and CLS/PoP integration with subsea systems across Singapore, Indonesia, and APAC.",
    descId:
      "Memimpin tim Network Operations dengan dukungan 24/7 untuk proyek kabel laut internasional (JB3JS, INDIGO, JAKABARE, SMW3), mengelola backhaul terestrial dan integrasi CLS/PoP dengan sistem subsea di Singapura, Indonesia, dan APAC.",
    icon: "/images/agency.png",
  },
  {
    period: "2014 — 2016",
    titleEn: "Lead Network Engineer",
    titleId: "Lead Network Engineer",
    company: "Tech Mahindra, Indonesia",
    descEn:
      "Deployed to Hutchison 3 Indonesia (H3I) managing data center service operations — F5 ASM/LTM/GTM virtual servers and Cisco Nexus / Arista fabrics — ensuring secure, high-availability network infrastructure.",
    descId:
      "Ditempatkan di Hutchison 3 Indonesia (H3I) mengelola operasi layanan data center — virtual server F5 ASM/LTM/GTM serta fabric Cisco Nexus / Arista — memastikan infrastruktur jaringan aman dan high-availability.",
    icon: "/images/company.png",
  },
  {
    period: "2014 — 2015",
    titleEn: "Project Manager & Presales Engineer",
    titleId: "Project Manager & Presales Engineer",
    company: "NTT Communications, Indonesia",
    descEn:
      "Managed network integration projects and presales design — leading terrestrial backhaul, IEPL/IPLC, and data-center interconnect solutions while delivering technical presentations to support enterprise sales.",
    descId:
      "Mengelola proyek integrasi jaringan dan desain presales — memimpin solusi backhaul terestrial, IEPL/IPLC, dan interkoneksi data center sekaligus memberikan presentasi teknis untuk mendukung penjualan enterprise.",
    icon: "/images/startup.png",
  },
  {
    period: "2013 — 2014",
    titleEn: "Network Security Engineer",
    titleId: "Network Security Engineer",
    company: "Packet Systems Indonesia",
    descEn:
      "Built, deployed, and monitored firewalls, DDoS shields, and intrusion-detection systems for hundreds of customers — installing and troubleshooting Check Point, Juniper, Cisco, Blue Coat, and HP TippingPoint security devices.",
    descId:
      "Membangun, men-deploy, dan memantau firewall, perisai DDoS, dan sistem deteksi intrusi untuk ratusan pelanggan — instalasi dan troubleshooting perangkat keamanan Check Point, Juniper, Cisco, Blue Coat, dan HP TippingPoint.",
    icon: "/images/busines.png",
  },
]

export function ExperienceSection({ lang = "en" }: { lang?: Lang }) {
  const t = content[lang]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              {t.heading}{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">{t.headingHighlight}</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              {t.subtitle}
            </p>
            <a
              href="https://www.linkedin.com/in/adithyodewangga/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
                <FileText className="w-5 h-5" />
                {t.resumeBtn}
              </Button>
            </a>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-1 md:mb-2">
                    {lang === "id" ? exp.titleId : exp.titleEn}
                  </h3>
                  <p className="text-[#6366F1] text-sm md:text-base font-semibold mb-2 md:mb-3">{exp.company}</p>
                  <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {lang === "id" ? exp.descId : exp.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
