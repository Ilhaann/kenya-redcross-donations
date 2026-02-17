"use client"

import { useModal } from "@/lib/modal-context"

const stats = [
  { value: "2.4M+", label: "Lives Reached" },
  { value: "47", label: "Counties Active" },
  { value: "Est. 1963", label: "" },
]

export function HeroSection() {
  const { openModal } = useModal()

  return (
    <section className="relative overflow-hidden bg-foreground text-card">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Red radial glow */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
        <div
          className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full"
          style={{
            background: "radial-gradient(circle, #C8102E 0%, transparent 70%)",
          }}
        />
      </div>
      {/* Cross watermark */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 font-serif text-[300px] font-bold text-card/[0.03] leading-none select-none hidden lg:block">
        +
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-card/10 bg-card/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-card/80">
              Humanitarian Action &middot; Kenya
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight lg:text-7xl text-balance">
            Every Gift Saves a{" "}
            <span className="text-primary">Life.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-card/70 lg:text-lg">
            The Kenya Red Cross Society has been at the forefront of humanitarian
            action for over 60 years — providing relief, building resilience, and
            saving lives across all 47 counties.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => openModal("cash")}
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Donate Now
            </button>
            <button className="rounded-full border border-card/20 bg-card/5 px-8 py-3 text-sm font-semibold text-card transition-all hover:bg-card/10">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-8 lg:gap-12">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="font-serif text-2xl font-bold text-card lg:text-3xl">
                  {s.value}
                </p>
                {s.label && (
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-card/50">
                    {s.label}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
