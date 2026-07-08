import Image from "next/image"

type Lang = "en" | "id"

interface Content {
  heading: string
  headingHighlight: string
  subtitle: string
}

const content: Record<Lang, Content> = {
  en: {
    heading: "A career you can",
    headingHighlight: "hold in your hand",
    subtitle:
      "Every badge marks a milestone — from network engineering in Jakarta to global infrastructure in Singapore. Hover to pick one up.",
  },
  id: {
    heading: "Rekam jejak yang bisa",
    headingHighlight: "kamu genggam",
    subtitle:
      "Setiap kartu menandai satu tonggak — dari network engineering di Jakarta hingga infrastruktur global di Singapura. Arahkan kursor untuk mengangkatnya.",
  },
}

type BrandId =
  | "bank-indonesia"
  | "psi"
  | "ntt"
  | "tech-mahindra"
  | "indosat"
  | "ibm"
  | "ingram"
  | "singtel"
  | "deutsche-telekom"
  | "google"

interface Badge {
  id: BrandId
  role: string
  dept: string
  /** brand accent — drives the lanyard, role colour and bottom bar */
  accent: string
  /** header background tint behind the wordmark */
  headerBg: string
}

/**
 * Career milestones referenced from linkedin.com/in/adithyodewangga.
 * Dates are intentionally omitted and the personal name is shown only once
 * (in the section heading) to keep the collection visually clean.
 */
const BADGES: Badge[] = [
  { id: "bank-indonesia",   role: "Network Engineer (Intern)",  dept: "Human Capital Department", accent: "#1B3A6B", headerBg: "#f4f7fc" },
  { id: "psi",              role: "Network Engineer",           dept: "Engineering Department",   accent: "#0072BC", headerBg: "#f2f8fd" },
  { id: "ntt",              role: "Solutions Architect",        dept: "Enterprise Solutions",     accent: "#0033A0", headerBg: "#f2f5fc" },
  { id: "tech-mahindra",    role: "Project Lead",               dept: "Network Services",         accent: "#E31E24", headerBg: "#fdf3f3" },
  { id: "indosat",          role: "Senior Manager",             dept: "Network & IT Services",    accent: "#ED1B2F", headerBg: "#fdf3f4" },
  { id: "ibm",              role: "Lead Network Engineer",      dept: "Technology Services",      accent: "#1F70C1", headerBg: "#f2f7fc" },
  { id: "ingram",           role: "Solutions Consultant",       dept: "Advanced Solutions",       accent: "#003DA5", headerBg: "#f2f5fc" },
  { id: "singtel",          role: "Senior Solutions Manager",   dept: "Group Enterprise",         accent: "#ED1C24", headerBg: "#fdf3f3" },
  { id: "deutsche-telekom", role: "Senior Architect",           dept: "Global Carrier",           accent: "#E20074", headerBg: "#fdf1f8" },
  { id: "google",           role: "Technical Program Manager",  dept: "WAN Infrastructure & Capacity", accent: "#4285F4", headerBg: "#f5f8ff" },
]

const LOGO_SRC: Record<BrandId, string> = {
  "bank-indonesia": "/logos/badges/bank-indonesia.svg",
  "psi": "/logos/badges/packet-systems.png",
  "ntt": "/logos/badges/ntt.svg",
  "tech-mahindra": "/logos/badges/tech-mahindra.svg",
  "indosat": "/logos/badges/indosat.svg",
  "ibm": "/logos/badges/ibm.svg",
  "ingram": "/logos/badges/ingram-micro.svg",
  "singtel": "/logos/badges/singtel.svg",
  "deutsche-telekom": "/logos/badges/deutsche-telekom.svg",
  "google": "/logos/badges/google.svg",
}

const LOGO_ALT: Record<BrandId, string> = {
  "bank-indonesia": "Bank Indonesia",
  "psi": "Packet Systems Indonesia",
  "ntt": "NTT Communications",
  "tech-mahindra": "Tech Mahindra",
  "indosat": "Indosat Ooredoo Hutchison",
  "ibm": "IBM",
  "ingram": "Ingram Micro",
  "singtel": "Singtel",
  "deutsche-telekom": "Deutsche Telekom",
  "google": "Google",
}

/** Official employer logos, used to identify real career milestones. */
function BrandMark({ id }: { id: BrandId }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={LOGO_SRC[id]} alt={LOGO_ALT[id]} className="exd-logo" loading="lazy" />
  )
}

export function ExecutiveDeskSection({ lang = "en" }: { lang?: Lang }) {
  const t = content[lang]

  return (
    <section className="exd-desk">
      {/* Skeletal desk props — subtle, decorative only */}
      <svg className="exd-props" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {/* Laptop — bottom left */}
        <g className="exd-prop-stroke">
          <rect x="70" y="600" width="300" height="185" rx="14" />
          <rect x="92" y="620" width="256" height="145" rx="6" />
          <path d="M40 792 h360 l26 40 h-412 z" />
        </g>
        {/* Coffee cup — top right */}
        <g className="exd-prop-stroke">
          <ellipse cx="1270" cy="150" rx="86" ry="26" />
          <path d="M1184 150 v70 a86 26 0 0 0 172 0 v-70" />
          <path d="M1356 168 a44 40 0 0 1 0 74" />
          <path d="M1214 110 q10 -30 -6 -54 M1256 108 q10 -30 -6 -54 M1298 110 q10 -30 -6 -54" className="exd-steam" />
        </g>
        {/* Notebook + pen — bottom right */}
        <g className="exd-prop-stroke">
          <rect x="1080" y="640" width="300" height="200" rx="12" transform="rotate(8 1230 740)" />
          <line x1="1235" y1="660" x2="1235" y2="820" transform="rotate(8 1230 740)" />
          <rect x="1150" y="560" width="26" height="230" rx="12" transform="rotate(38 1163 675)" />
          <path d="M1198 738 l18 34 -34 4 z" transform="rotate(38 1163 675)" />
        </g>
        {/* Pen — top left accent */}
        <g className="exd-prop-stroke">
          <rect x="120" y="120" width="20" height="180" rx="10" transform="rotate(-32 130 210)" />
          <path d="M118 300 l10 26 10 -26 z" transform="rotate(-32 130 210)" />
        </g>
      </svg>

      <div className="exd-inner">
        <div className="exd-header">
          <span className="exd-eyebrow">The Working Journey</span>
          <h2 className="exd-title">
            {t.heading}{" "}
            <span className="exd-title-hl">{t.headingHighlight}</span>
          </h2>
          <p className="exd-subtitle">{t.subtitle}</p>
        </div>

        <div className="exd-grid">
          {BADGES.map((b) => (
            <div className="exd-badge" key={b.id}>
              <div className="exd-hang">
                {/* Lanyard strap + metal clip */}
                <div className="exd-lanyard" style={{ background: b.accent }}>
                  <span className="exd-lanyard-hole" />
                </div>
                <div className="exd-clip" />

                {/* Translucent acrylic holder */}
                <div className="exd-tilt">
                  <div className="exd-holder">
                    <div className="exd-card">
                      <div className="exd-card-head" style={{ background: b.headerBg }}>
                        <BrandMark id={b.id} />
                      </div>

                      <div className="exd-photo-wrap">
                        <Image
                          src="/adithyo.png"
                          alt="Portrait"
                          width={200}
                          height={230}
                          className="exd-photo"
                          loading="lazy"
                        />
                      </div>

                      <div className="exd-role">{b.role}</div>
                      <div className="exd-dept-bar" style={{ background: b.accent }}>
                        <span>{b.dept}</span>
                      </div>
                    </div>
                    <span className="exd-holder-shine" aria-hidden />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exd-desk {
          position: relative;
          overflow: hidden;
          padding: 5rem 1rem 5.5rem;
          background-color: #201510;
          background-image:
            radial-gradient(ellipse 120% 90% at 50% 30%, rgba(92,64,46,0.55) 0%, rgba(30,20,14,0) 60%),
            repeating-linear-gradient(115deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 5px),
            repeating-linear-gradient(25deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 6px),
            radial-gradient(ellipse at 50% 40%, #3c2a20 0%, #251912 55%, #140d09 100%);
        }
        .exd-desk::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          box-shadow: inset 0 0 200px 60px rgba(0,0,0,0.8);
          background: radial-gradient(ellipse at 50% 42%, transparent 45%, rgba(0,0,0,0.55) 100%);
        }
        .exd-props {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .exd-prop-stroke {
          fill: none;
          stroke: rgba(255,255,255,0.055);
          stroke-width: 2;
        }
        .exd-prop-stroke .exd-steam { stroke: rgba(255,255,255,0.04); }

        .exd-inner {
          position: relative;
          z-index: 1;
          max-width: 80rem;
          margin: 0 auto;
        }
        .exd-header { text-align: center; margin-bottom: 4rem; color: #fff; }
        .exd-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #d9b892;
          border: 1px solid rgba(217,184,146,0.35);
          border-radius: 9999px;
          padding: 0.4rem 1rem;
          margin-bottom: 1.4rem;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(4px);
        }
        .exd-title {
          font-size: clamp(1.9rem, 5vw, 3.25rem);
          font-weight: 800;
          line-height: 1.15;
          margin: 0 auto 1rem;
          max-width: 20ch;
        }
        .exd-title-hl {
          background: #FDB927;
          color: #0B0B0B;
          padding: 0 0.5rem;
          display: inline-block;
        }
        .exd-subtitle {
          color: rgba(255,255,255,0.62);
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.6;
          max-width: 44ch;
          margin: 0 auto;
        }

        .exd-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2.75rem 1rem;
          justify-items: center;
          align-items: start;
        }
        @media (min-width: 768px) {
          .exd-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 3.25rem 1.25rem;
          }
        }

        /* Perspective container */
        .exd-badge {
          perspective: 1000px;
          width: 100%;
          max-width: 190px;
          display: flex;
          justify-content: center;
        }
        /* Idle hanging sway — paused on hover */
        .exd-hang {
          position: relative;
          width: 100%;
          transform-origin: top center;
          animation: exd-sway 6.5s ease-in-out infinite;
          will-change: transform;
        }
        .exd-badge:nth-child(2n) .exd-hang { animation-delay: -1.2s; }
        .exd-badge:nth-child(3n) .exd-hang { animation-delay: -2.6s; animation-duration: 7.4s; }
        .exd-badge:nth-child(5n) .exd-hang { animation-delay: -3.8s; animation-duration: 5.8s; }
        .exd-badge:hover .exd-hang { animation-play-state: paused; }
        @keyframes exd-sway {
          0%, 100% { transform: rotate(-0.9deg); }
          50%      { transform: rotate(0.9deg); }
        }

        /* Lanyard + clip */
        .exd-lanyard {
          position: relative;
          width: 26px;
          height: 46px;
          margin: 0 auto -6px;
          border-radius: 4px 4px 0 0;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12), 0 2px 5px rgba(0,0,0,0.4);
        }
        .exd-lanyard::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(0deg, rgba(255,255,255,0.14) 0 2px, transparent 2px 8px);
          border-radius: inherit;
          opacity: 0.5;
        }
        .exd-lanyard-hole {
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 5px;
          border-radius: 9999px;
          background: rgba(0,0,0,0.55);
        }
        .exd-clip {
          position: relative;
          z-index: 3;
          width: 42px;
          height: 16px;
          margin: 0 auto -8px;
          border-radius: 5px;
          background: linear-gradient(180deg, #e9edf2 0%, #aab2bd 45%, #7c8794 100%);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -2px 3px rgba(0,0,0,0.35), 0 2px 4px rgba(0,0,0,0.45);
        }
        .exd-clip::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -5px;
          transform: translateX(-50%);
          width: 16px;
          height: 8px;
          border-radius: 0 0 5px 5px;
          background: linear-gradient(180deg, #9aa3af, #6c7480);
        }

        /* 3D tilt on hover */
        .exd-tilt {
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .exd-badge:hover .exd-tilt {
          transform: translateY(-12px) rotateX(7deg) rotateY(-8deg) scale(1.03);
        }
        .exd-badge:nth-child(2n):hover .exd-tilt {
          transform: translateY(-12px) rotateX(7deg) rotateY(8deg) scale(1.03);
        }

        /* Translucent acrylic holder (glassmorphism) */
        .exd-holder {
          position: relative;
          border-radius: 18px;
          padding: 9px 9px 14px;
          background: rgba(255,255,255,0.14);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.4);
          box-shadow:
            0 22px 40px rgba(0,0,0,0.5),
            0 4px 10px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.55),
            inset 0 -1px 0 rgba(255,255,255,0.15);
          transition: box-shadow 0.5s ease;
        }
        .exd-badge:hover .exd-holder {
          box-shadow:
            0 34px 55px rgba(0,0,0,0.55),
            0 8px 16px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.65),
            inset 0 -1px 0 rgba(255,255,255,0.2);
        }
        /* Top slot cut-out in the acrylic */
        .exd-holder::before {
          content: "";
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 46px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(0,0,0,0.28);
          box-shadow: inset 0 1px 1px rgba(0,0,0,0.4);
        }
        .exd-holder-shine {
          position: absolute;
          inset: 0;
          border-radius: 18px;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.12) 100%);
        }

        /* Inner printed card */
        .exd-card {
          position: relative;
          background: #ffffff;
          border-radius: 11px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.18);
        }
        .exd-card-head {
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .exd-photo-wrap {
          margin: 12px auto 10px;
          width: 78px;
          height: 90px;
          border-radius: 6px;
          overflow: hidden;
          background: #0b1220;
          box-shadow: 0 2px 6px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(0,0,0,0.08);
        }
        .exd-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .exd-role {
          font-size: 0.72rem;
          font-weight: 800;
          line-height: 1.2;
          text-align: center;
          color: #0B0B0B;
          padding: 0 8px 12px;
          min-height: 2.4em;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .exd-dept-bar {
          color: #fff;
          font-size: 0.6rem;
          font-weight: 700;
          text-align: center;
          padding: 6px 6px;
          line-height: 1.2;
        }
        .exd-dept-bar span { opacity: 0.95; }

        /* ── Brand logos ── */
        .exd-logo {
          display: block;
          width: auto;
          height: auto;
          max-width: 82%;
          max-height: 30px;
          object-fit: contain;
        }

        @media (prefers-reduced-motion: reduce) {
          .exd-hang { animation: none; }
          .exd-tilt { transition: none; }
        }
      `}</style>
    </section>
  )
}
