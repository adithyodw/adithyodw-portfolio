import { Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Lang } from "./bali-page"

// TODO: Replace with your actual WhatsApp number
export const WA_NUMBER = "6281234567890"
export const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
}

export function BaliNav({ lang, setLang }: Props) {
  const navLinks =
    lang === "id"
      ? [
          { label: "Layanan", href: "#layanan" },
          { label: "Industri", href: "#industri" },
          { label: "Portfolio", href: "#portfolio" },
          { label: "Kontak", href: "#kontak" },
        ]
      : [
          { label: "Services", href: "#layanan" },
          { label: "Industries", href: "#industri" },
          { label: "Portfolio", href: "#portfolio" },
          { label: "Contact", href: "#kontak" },
        ]

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-3xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <a
          href="/"
          className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Back to main portfolio"
        >
          <span className="text-white text-[10px] font-bold tracking-tight">ADW</span>
        </a>

        <div className="hidden md:flex items-center gap-5 flex-1 justify-center">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[16px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/"
            className="flex items-center gap-1 text-[15px] font-bold hover:opacity-70 transition-opacity text-gray-400"
          >
            <ArrowLeft className="w-3 h-3" />
            {lang === "id" ? "Portfolio Utama" : "Main Portfolio"}
          </a>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="border-2 border-black rounded-lg px-3 py-2 text-sm font-bold hover:bg-gray-50 transition-colors whitespace-nowrap"
            aria-label="Toggle language"
          >
            {lang === "id" ? "🇬🇧 EN" : "🇮🇩 ID"}
          </button>
          <a
            href={waLink(
              lang === "id"
                ? "Halo Adithyo, saya tertarik dengan jasa pembuatan website untuk bisnis saya di Bali."
                : "Hello Adithyo, I'm interested in your website services for my Bali business."
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
          >
            <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-4 h-12 min-w-[48px]">
              <Mail className="w-5 h-5" strokeWidth={2.5} />
            </Button>
          </a>
        </div>
      </nav>
    </div>
  )
}
