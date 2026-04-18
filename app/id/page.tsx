import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Adithyo Dewangga Wijaya — Senior Solutions Manager & Full-Stack Developer",
  description:
    "Portfolio profesional Adithyo Dewangga Wijaya. Senior Solutions Manager di Singtel Singapura dengan 12+ tahun pengalaman di arsitektur jaringan enterprise, sistem trading kuantitatif, dan pengembangan web full-stack.",
  keywords: [
    "Adithyo Dewangga Wijaya",
    "Senior Solutions Manager",
    "Singtel Singapore",
    "enterprise network architect",
    "full stack developer Indonesia",
    "web developer Singapura",
    "quantitative trading systems",
    "Next.js developer",
    "React developer",
    "portfolio developer Indonesia",
    "jasa pembuatan website",
    "web developer profesional",
  ],
  alternates: {
    canonical: "https://adithyodw-portfolio.vercel.app/id",
    languages: {
      "en": "https://adithyodw-portfolio.vercel.app",
      "id": "https://adithyodw-portfolio.vercel.app/id",
    },
  },
  openGraph: {
    title: "Adithyo Dewangga Wijaya — Senior Solutions Manager & Full-Stack Developer",
    description:
      "Portfolio profesional Adithyo Dewangga Wijaya. Senior Solutions Manager di Singtel Singapura dengan 12+ tahun pengalaman di arsitektur jaringan enterprise dan pengembangan web.",
    url: "https://adithyodw-portfolio.vercel.app/id",
    siteName: "Adithyo Dewangga Wijaya",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adithyo Dewangga Wijaya — Senior Solutions Manager & Full-Stack Developer",
    description:
      "Portfolio profesional Adithyo Dewangga Wijaya. 12+ tahun di enterprise networking, trading systems, dan full-stack development.",
  },
}

export default function IdHome() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <div id="home">
        <Navigation lang="id" />
        <HeroSection lang="id" />
      </div>
      <LogoMarquee />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutSection lang="id" />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="experience">
        <ExperienceSection lang="id" />
      </div>
      <TestimonialsSection />
      <ArticlesSection />
      <Footer lang="id" />
    </main>
  )
}
