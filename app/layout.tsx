import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest } from "next/font/google"

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
})

const baseUrl = "https://adithyodw.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Adithyo Dewangga Wijaya — Senior Solutions Manager & Tech Builder",
    template: "%s | Adithyo Dewangga Wijaya",
  },
  description:
    "Senior Solutions Manager at Singtel. Enterprise network architect, quantitative systems developer, and full-stack builder with 12+ years across Telco and IT infrastructure in Singapore.",
  keywords: [
    "Adithyo Dewangga Wijaya",
    "Senior Solutions Manager",
    "Singtel",
    "Enterprise Solutions Architect",
    "Network Security",
    "Singapore",
    "Cisco",
    "Palo Alto Networks",
    "Full-Stack Developer",
    "Quantitative Systems",
  ],
  authors: [{ name: "Adithyo Dewangga Wijaya", url: "https://www.linkedin.com/in/adithyodewangga/" }],
  creator: "Adithyo Dewangga Wijaya",
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: baseUrl,
    siteName: "Adithyo Dewangga Wijaya",
    title: "Adithyo Dewangga Wijaya — Senior Solutions Manager & Tech Builder",
    description:
      "Senior Solutions Manager at Singtel. Enterprise network architect, quantitative systems developer, and full-stack builder based in Singapore.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adithyo Dewangga Wijaya — Senior Solutions Manager & Tech Builder",
    description:
      "Senior Solutions Manager at Singtel. Enterprise solutions architect and full-stack builder based in Singapore.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adithyo Dewangga Wijaya",
  jobTitle: "Senior Solutions Manager",
  worksFor: {
    "@type": "Organization",
    name: "Singtel",
    url: "https://www.singtel.com",
  },
  url: baseUrl,
  sameAs: [
    "https://www.linkedin.com/in/adithyodewangga/",
    "https://github.com/adithyodw",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Singapore",
    addressCountry: "SG",
  },
  knowsAbout: [
    "Enterprise Network Architecture",
    "Network Security",
    "Pre-Sales Solutions",
    "Next.js",
    "TypeScript",
    "Quantitative Trading Systems",
    "Cisco",
    "Palo Alto Networks",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
