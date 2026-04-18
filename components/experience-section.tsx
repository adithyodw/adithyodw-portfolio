import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "2020 — Present",
      title: "Senior Solutions Manager",
      company: "Singtel, Singapore",
      description:
        "Leading pre-sales technical architecture for enterprise clients. Designing end-to-end network, security, and cloud infrastructure solutions across the APAC region.",
      icon: "/images/agency.png",
    },
    {
      period: "2016 — 2020",
      title: "Solutions Architect",
      company: "Singapore",
      description:
        "Designed and delivered complex ICT infrastructure proposals for enterprise segment clients. Specialising in network security, unified communications, and managed services.",
      icon: "/images/company.png",
    },
    {
      period: "2013 — 2016",
      title: "Enterprise Network Specialist",
      company: "Tech Mahindra",
      description:
        "Deployed enterprise networking and security infrastructure for multinational clients across Greater Jakarta. Awarded Best Team Award (2015) for outstanding project delivery.",
      icon: "/images/busines.png",
    },
    {
      period: "2011 — 2013",
      title: "Network Engineer",
      company: "Jakarta, Indonesia",
      description:
        "Foundation-level network engineering and security infrastructure management. Earned CCNA, CCSA, Palo Alto ACE, and HP AIS certifications during this period.",
      icon: "/images/startup.png",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">past experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              12+ years across enterprise networking, pre-sales solutions architecture, and full-stack development — from Jakarta to Singapore.
            </p>
            <a
              href="https://www.linkedin.com/in/adithyodewangga/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
                <FileText className="w-5 h-5" />
                See full resume
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
                    {exp.title}
                  </h3>
                  <p className="text-[#6366F1] text-sm md:text-base font-semibold mb-2 md:mb-3">{exp.company}</p>
                  <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {exp.description}
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
