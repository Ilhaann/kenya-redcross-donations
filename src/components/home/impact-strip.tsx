const stats = [
  { value: "KES 480M", label: "Raised This Year" },
  { value: "12,400", label: "Families Fed" },
  { value: "340", label: "Active Campaigns" },
  { value: "19", label: "Drop-Off Branches" },
]

export function ImpactStrip() {
  return (
    <section className="bg-[#222222]">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-2xl font-bold text-card lg:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-card/50">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
