"use client"

import { useState } from "react"
import { BaliNav } from "./bali-nav"
import { BaliHero } from "./bali-hero"
import { BaliValue } from "./bali-value"
import { BaliMarquee } from "./bali-marquee"
import { BaliServices } from "./bali-services"
import { BaliTech } from "./bali-tech"
import { BaliIndustries } from "./bali-industries"
import { BaliPricing } from "./bali-pricing"
import { BaliPortfolio } from "./bali-portfolio"
import { BaliCta } from "./bali-cta"
import { BaliFooter } from "./bali-footer"
import { BaliWhatsAppFloat } from "./bali-whatsapp-float"

export type Lang = "id" | "en"

export function BaliPageContent() {
  const [lang, setLang] = useState<Lang>("id")

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <div id="top">
        <BaliNav lang={lang} setLang={setLang} />
        <BaliHero lang={lang} />
      </div>
      <BaliValue lang={lang} />
      <BaliMarquee />
      <div id="layanan">
        <BaliServices lang={lang} />
      </div>
      <div id="teknologi">
        <BaliTech lang={lang} />
      </div>
      <div id="industri">
        <BaliIndustries lang={lang} />
      </div>
      <div id="harga">
        <BaliPricing lang={lang} />
      </div>
      <div id="portfolio">
        <BaliPortfolio lang={lang} />
      </div>
      <div id="kontak">
        <BaliCta lang={lang} />
      </div>
      <BaliFooter lang={lang} />
      <BaliWhatsAppFloat lang={lang} />
    </main>
  )
}
