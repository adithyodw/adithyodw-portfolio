export function BaliMarquee() {
  const industries = [
    "🧺 Laundry & Dry Cleaning",
    "🍜 Restoran & F&B",
    "🏨 Hotel & Villa",
    "🏪 UMKM Bali",
    "🧖 Spa & Wellness",
    "☕ Kafe & Warung",
    "🌴 Wisata & Tour",
    "💇 Salon & Beauty",
    "🏋️ Fitness & Studio",
    "🛍️ Toko Lokal",
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-5 -rotate-[3deg] mt-24 mb-12 min-w-[120vw] -mx-[10vw]">
        <div className="flex items-center gap-14 animate-marquee whitespace-nowrap">
          {[...industries, ...industries, ...industries, ...industries].map((item, i) => (
            <span key={i} className="text-white text-base md:text-lg font-bold flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
