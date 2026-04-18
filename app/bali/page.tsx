import type { Metadata } from "next"
import { BaliPageContent } from "@/components/bali/bali-page"

const baseUrl = "https://adithyodw-portfolio.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Jasa Pembuatan Website Bali #1 | Adithyo Dewangga – React & Next.js Developer",
  description:
    "Jasa pembuatan website profesional untuk bisnis Bali. Spesialis website laundry, hotel, villa, restoran, klinik, dan UMKM menggunakan React.js & Next.js — bukan WordPress. Harga mulai Rp 1 juta. Konsultasi gratis via WhatsApp.",
  keywords: [
    // Primary — high intent
    "jasa website Bali",
    "jasa pembuatan website Bali",
    "buat website bisnis Bali",
    "web developer Bali profesional",
    "developer website Bali",
    // Industry-specific
    "website laundry Bali",
    "website hotel Bali",
    "website villa Bali",
    "website restoran Bali",
    "website kafe Bali",
    "website spa Bali",
    "website klinik Bali",
    "website UMKM Bali",
    "website F&B Bali",
    "website warung Bali",
    "website booking Bali",
    // Tech-specific
    "jasa website React Bali",
    "jasa website Next.js Bali",
    "website modern Bali",
    "website cepat Bali",
    "website SEO Bali",
    // Price-specific
    "jasa website murah Bali",
    "harga buat website Bali",
    "website Bali harga terjangkau",
    // Location variants
    "jasa web Denpasar",
    "web developer Ubud",
    "web developer Seminyak",
    "web developer Canggu",
    "web developer Kuta Bali",
    // Competitor differentiator
    "website bukan WordPress Bali",
    "website custom Bali",
    "freelance web developer Bali",
    "Singapore developer website Bali",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: `${baseUrl}/bali`,
    title: "Jasa Pembuatan Website Bali | Adithyo Dewangga – React & Next.js Developer",
    description:
      "Website profesional untuk bisnis Bali mulai Rp 1 juta. Laundry, hotel, villa, restoran & UMKM. Bukan WordPress — dibangun dengan React.js & Next.js. Konsultasi gratis.",
    siteName: "Adithyo Dewangga Wijaya",
    images: [
      {
        url: `${baseUrl}/adithyo.png`,
        width: 800,
        height: 800,
        alt: "Adithyo Dewangga Wijaya – Web Developer Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Bali | Adithyo Dewangga",
    description:
      "Website profesional untuk bisnis Bali mulai Rp 1 juta. Bukan WordPress — React.js + Next.js + Vercel. Konsultasi gratis.",
    images: [`${baseUrl}/adithyo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: {
    canonical: `${baseUrl}/bali`,
    languages: {
      "id-ID": `${baseUrl}/bali`,
      "en-US": `${baseUrl}/bali`,
    },
  },
  authors: [{ name: "Adithyo Dewangga Wijaya", url: `${baseUrl}` }],
  creator: "Adithyo Dewangga Wijaya",
  publisher: "Adithyo Dewangga Wijaya",
  category: "Web Development",
}

// ── Structured Data ────────────────────────────────────────────────────────────

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/bali#service`,
  name: "Adithyo Dewangga Wijaya – Jasa Website Bali",
  description:
    "Jasa pembuatan website profesional untuk bisnis Bali menggunakan React.js dan Next.js. Spesialis laundry, hotel, villa, restoran, klinik, dan UMKM. Harga mulai Rp 1 juta.",
  url: `${baseUrl}/bali`,
  telephone: "+6590616870",
  priceRange: "Rp 1.000.000 – Rp 8.000.000+",
  currenciesAccepted: "IDR, SGD, USD",
  paymentAccepted: "Cash, Bank Transfer, PayNow",
  sameAs: [
    "https://www.linkedin.com/in/adithyodewangga/",
    "https://github.com/adithyodw",
    `${baseUrl}`,
  ],
  founder: {
    "@type": "Person",
    name: "Adithyo Dewangga Wijaya",
    jobTitle: "Web Developer & Digital Consultant",
    url: `${baseUrl}`,
    sameAs: [
      "https://www.linkedin.com/in/adithyodewangga/",
      "https://github.com/adithyodw",
    ],
  },
  areaServed: [
    { "@type": "Place", name: "Bali, Indonesia" },
    { "@type": "Place", name: "Denpasar, Bali" },
    { "@type": "Place", name: "Ubud, Bali" },
    { "@type": "Place", name: "Seminyak, Bali" },
    { "@type": "Place", name: "Canggu, Bali" },
    { "@type": "Place", name: "Kuta, Bali" },
    { "@type": "Place", name: "Indonesia" },
  ],
  knowsAbout: [
    "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Firebase",
    "Vercel", "GitHub", "SEO", "WhatsApp Business Integration",
    "Website untuk Bisnis Laundry", "Website Hotel Bali", "Website Villa Bali",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paket Jasa Website Bali",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Paket Starter",
        description: "1-halaman landing page, WhatsApp CTA, Google Maps, SEO dasar, mobile-friendly",
        price: "1000000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "Website 1 Halaman (Starter)" },
      },
      {
        "@type": "Offer",
        name: "Paket Standard",
        description: "3-5 halaman website, galeri, layanan & harga, WhatsApp CTA, full SEO, Google Analytics",
        price: "3000000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "Website 3-5 Halaman (Standard)" },
      },
      {
        "@type": "Offer",
        name: "Paket Custom",
        description: "Sistem booking online, dashboard admin, Firebase, WhatsApp bot, unlimited revisi",
        price: "8000000",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "Website Custom dengan Sistem Booking" },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12",
    bestRating: "5",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa harga jasa pembuatan website bisnis di Bali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga jasa website Bali mulai dari Rp 1–2 juta untuk Paket Starter (1 halaman landing page), Rp 3–5 juta untuk Paket Standard (3–5 halaman dengan galeri dan SEO lengkap), dan mulai Rp 8 juta untuk Paket Custom dengan sistem booking online dan dashboard admin. Semua paket sudah termasuk WhatsApp CTA, SEO dasar, mobile-friendly, dan deploy ke Vercel.",
      },
    },
    {
      "@type": "Question",
      name: "Siapa web developer terbaik untuk bisnis lokal Bali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adithyo Dewangga Wijaya adalah web developer berbasis di Singapura yang spesialis membangun website untuk bisnis lokal Bali. Dengan pengalaman membangun 8+ proyek nyata untuk industri laundry, F&B, hotel/villa, klinik, dan UMKM Bali, menggunakan React.js dan Next.js — bukan WordPress. Bisa dihubungi via WhatsApp +65 9061 6870.",
      },
    },
    {
      "@type": "Question",
      name: "Kenapa tidak pakai WordPress untuk website bisnis di Bali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WordPress membutuhkan biaya plugin bulanan, rentan serangan malware, dan loading-nya 3–8 detik. Website yang dibangun dengan React.js dan Next.js loading di bawah 1 detik via Vercel CDN, lebih aman karena tidak ada plugin, bayar sekali tidak ada biaya bulanan, desain 100% custom dari nol, dan SEO built-in dengan metadata, JSON-LD, dan Open Graph.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama pengerjaan website untuk bisnis Bali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paket Starter (1 halaman) selesai dalam 5–7 hari kerja. Paket Standard (3–5 halaman) selesai dalam 10–14 hari kerja. Paket Custom dengan fitur booking dan dashboard membutuhkan 14–30 hari kerja tergantung kompleksitas.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa buat website untuk laundry di Bali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, salah satu spesialisasi adalah website untuk bisnis laundry Bali. Contoh nyata: Bandar Laundry Bali — website dengan fitur booking online, tracking pesanan real-time, harga transparan, dan invoice digital. Cocok untuk bisnis laundry yang ingin go online dan menarik pelanggan baru.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah website bisa dibuat dalam bahasa Indonesia dan Inggris?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, semua website dapat dibuat bilingual (Bahasa Indonesia dan Inggris) dengan toggle bahasa yang mudah. Ini sangat penting untuk bisnis Bali yang melayani wisatawan mancanegara — tamu dari Australia, Eropa, dan Asia bisa membaca website dalam bahasa mereka.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja proyek website Bali yang sudah dikerjakan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proyek website Bali yang sudah dikerjakan antara lain: Skinderma Aesthetic Clinic (klinik kecantikan, melayani pasien dari Singapura dan Malaysia), Djaya Massage & Reflexology (spa mewah dengan 4.8 bintang Google Reviews), Bandar Laundry Bali (laundry online dengan booking system), dan Bhumi Lovina Bali (hospitality & F&B di Lovina). Semua proyek tersedia di GitHub.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara pesan website untuk bisnis saya di Bali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cara termudah adalah chat langsung via WhatsApp ke +65 9061 6870. Konsultasi pertama gratis, tanpa komitmen. Ceritakan bisnis Anda — jenis usaha, kebutuhan fitur, dan budget — dan akan dibuatkan proposal website yang sesuai.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Portfolio Utama", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Jasa Website Bali", item: `${baseUrl}/bali` },
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/bali`,
  name: "Jasa Pembuatan Website Bali – Adithyo Dewangga Wijaya",
  description:
    "Halaman layanan jasa pembuatan website profesional untuk bisnis Bali. React.js, Next.js, Vercel. Harga mulai Rp 1 juta.",
  url: `${baseUrl}/bali`,
  inLanguage: ["id-ID", "en-US"],
  author: {
    "@type": "Person",
    name: "Adithyo Dewangga Wijaya",
    url: baseUrl,
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable"],
  },
}

export default function BaliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <BaliPageContent />
    </>
  )
}
