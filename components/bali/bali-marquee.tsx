export function BaliMarquee() {
  const industries = [
    "Laundry & Dry Cleaning",
    "Restoran & F&B",
    "Hotel & Villa",
    "UMKM Bali",
    "Spa & Wellness",
    "Kafe & Warung",
    "Wisata & Tour",
    "Salon & Beauty",
    "Fitness & Studio",
    "Toko Lokal",
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-5 -rotate-[3deg] mt-24 mb-12 min-w-[120vw] -mx-[10vw]">
        <div className="flex items-center gap-0 animate-marquee whitespace-nowrap">
          {[...industries, ...industries, ...industries, ...industries].map((item, i) => (
            <span key={i} className="text-white text-base md:text-lg font-bold flex-shrink-0 flex items-center">
              <span className="px-10">{item}</span>
              <span className="text-white/30 font-light">—</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
