import type { Metadata } from "next"
import { BaliPageContent } from "@/components/bali/bali-page"

const baseUrl = "https://adithyodw-portfolio.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Jasa Pembuatan Website Bali | Adithyo Dewangga – Developer Profesional",
  description:
    "Jasa pembuatan website profesional untuk bisnis Bali. Spesialis website laundry, hotel, villa, restoran, dan UMKM. Konsultasi gratis, hasil modern & cepat. Hubungi sekarang.",
  keywords: [
    "jasa website Bali",
    "jasa pembuatan website Bali",
    "website laundry Bali",
    "website hotel Bali",
    "website villa Bali",
    "website restoran Bali",
    "web developer Bali",
    "jasa web Bali",
    "pembuatan website UMKM Bali",
    "website F&B Bali",
    "website warung Bali",
    "website spa Bali",
    "website kafe Bali",
    "jasa website murah Bali",
    "developer website Bali profesional",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: `${baseUrl}/bali`,
    title: "Jasa Pembuatan Website Bali | Adithyo Dewangga",
    description:
      "Website profesional untuk bisnis Bali. Laundry, hotel, villa, restoran & UMKM. Konsultasi gratis.",
    siteName: "Adithyo Dewangga Wijaya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Bali | Adithyo Dewangga",
    description: "Website profesional untuk bisnis Bali. Laundry, hotel, villa, restoran & UMKM.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/bali`,
    languages: {
      "id-ID": `${baseUrl}/bali`,
      "en-US": `${baseUrl}/bali`,
    },
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Adithyo Dewangga Wijaya – Jasa Website Bali",
  description:
    "Jasa pembuatan website profesional untuk bisnis Bali: laundry, hotel, villa, restoran, UMKM",
  url: `${baseUrl}/bali`,
  sameAs: [
    "https://www.linkedin.com/in/adithyodewangga/",
    "https://github.com/adithyodw",
  ],
  areaServed: { "@type": "Place", name: "Bali, Indonesia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Jasa Website untuk Bisnis Bali",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Bisnis Profesional" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistem Booking Online" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toko Online / E-Commerce" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aplikasi Web Custom" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automation & WhatsApp Bot" } },
    ],
  },
}

export default function BaliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BaliPageContent />
    </>
  )
}
