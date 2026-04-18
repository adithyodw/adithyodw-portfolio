export function LogoMarquee() {
  const items = [
    { logo: "/logos/application.svg", alt: "Cisco" },
    { logo: "/logos/business.svg", alt: "Singtel" },
    { logo: "/logos/company.svg", alt: "Palo Alto Networks" },
    { logo: "/logos/startup.svg", alt: "Check Point" },
    { logo: "/logos/venture.svg", alt: "Fortinet" },
    { logo: "/logos/agency.svg", alt: "HPE" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <img
              key={index}
              src={item.logo}
              alt={item.alt}
              className="h-12 w-auto"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
