import { MessageCircle } from "lucide-react"
import { waLink } from "./bali-nav"
import type { Lang } from "./bali-page"

const content: Record<Lang, { label: string; msg: string }> = {
  id: {
    label: "Chat WhatsApp",
    msg: "Halo Adithyo, saya tertarik dengan jasa pembuatan website untuk bisnis saya di Bali.",
  },
  en: {
    label: "Chat WhatsApp",
    msg: "Hello Adithyo, I'm interested in your website services for my Bali business.",
  },
}

export function BaliWhatsAppFloat({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <a
      href={waLink(t.msg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.label}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white font-semibold px-5 py-3.5 rounded-full border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all duration-200 group"
    >
      <MessageCircle className="w-6 h-6 flex-shrink-0" />
      <span className="text-sm hidden sm:inline">{t.label}</span>
    </a>
  )
}
