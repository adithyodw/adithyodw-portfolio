import { Linkedin, Github, MessageCircle } from "lucide-react"
import { waLink } from "./bali-nav"
import type { Lang } from "./bali-page"

interface Content {
  tagline: string
  navTitle: string
  contactTitle: string
  links: { label: string; href: string }[]
  copyright: string
}

const content: Record<Lang, Content> = {
  id: {
    tagline:
      "Web Developer & Konsultan Digital untuk bisnis Bali. Berbasis di Singapura, melayani seluruh Indonesia.",
    navTitle: "Navigasi",
    contactTitle: "Hubungi Saya",
    links: [
      { label: "Beranda", href: "#top" },
      { label: "Layanan", href: "#layanan" },
      { label: "Industri", href: "#industri" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Kontak", href: "#kontak" },
      { label: "← Portfolio Utama", href: "/" },
    ],
    copyright: "© 2026 Adithyo Dewangga Wijaya. Hak cipta dilindungi.",
  },
  en: {
    tagline:
      "Web Developer & Digital Consultant for Bali businesses. Based in Singapore, serving all of Indonesia.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    links: [
      { label: "Home", href: "#top" },
      { label: "Services", href: "#layanan" },
      { label: "Industries", href: "#industri" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#kontak" },
      { label: "← Main Portfolio", href: "/" },
    ],
    copyright: "© 2026 Adithyo Dewangga Wijaya. All rights reserved.",
  },
}

const WA_MSG_ID = "Halo Adithyo, saya tertarik dengan jasa pembuatan website untuk bisnis saya di Bali."

export function BaliFooter({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black text-[10px] font-bold">ADW</span>
                </div>
                <span className="text-lg md:text-xl font-bold">Adithyo DW</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{t.tagline}</p>
              <div className="flex gap-3">
                <a
                  href={waLink(WA_MSG_ID)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adithyodewangga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/adithyodw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t.navTitle}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {t.links.map((l, i) => (
                  <li key={i}>
                    <a href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t.contactTitle}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a
                    href={waLink(WA_MSG_ID)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 flex-shrink-0" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/adithyodewangga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 flex-shrink-0" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/adithyodw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 flex-shrink-0" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
