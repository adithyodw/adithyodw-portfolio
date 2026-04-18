import { Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

type Lang = "en" | "id"

interface NavLink {
  labelEn: string
  labelId: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { labelEn: "Home",       labelId: "Beranda",    href: "#home" },
  { labelEn: "About",      labelId: "Tentang",    href: "#about" },
  { labelEn: "Portfolio",  labelId: "Portfolio",  href: "#portfolio" },
  { labelEn: "Experience", labelId: "Pengalaman", href: "#experience" },
]

export function Navigation({ lang = "en" }: { lang?: Lang }) {
  const otherLang = lang === "en" ? "id" : "en"
  const otherLangHref = lang === "en" ? "/id" : "/"
  const otherLangLabel = lang === "en" ? "ID" : "EN"

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <a href="#home" className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold tracking-tight">ADW</span>
        </a>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
            >
              {lang === "id" ? l.labelId : l.labelEn}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={otherLangHref}
            className="flex items-center gap-1.5 border-2 border-black rounded-lg px-3 py-2 text-sm font-bold hover:bg-gray-50 transition-colors whitespace-nowrap"
            aria-label={`Switch to ${otherLang === "en" ? "English" : "Bahasa Indonesia"}`}
          >
            <Globe className="w-4 h-4" />
            {otherLangLabel}
          </a>
          <a
            href="https://www.linkedin.com/in/adithyodewangga/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on LinkedIn"
          >
            <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
              <Mail className="w-10 h-10" strokeWidth={2.5} />
            </Button>
          </a>
        </div>
      </nav>
    </div>
  )
}
