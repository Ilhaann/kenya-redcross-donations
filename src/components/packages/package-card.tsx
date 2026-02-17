"use client"

import { useState } from "react"
import { useModal } from "@/lib/modal-context"
import type { Package } from "@/lib/mock-data"
import { formatKES } from "@/lib/mock-data"

export function PackageCard({ pkg }: { pkg: Package }) {
  const [selectedTier, setSelectedTier] = useState(0)
  const { openModal } = useModal()

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Emoji illustration area */}
      <div
        className={`flex h-36 items-center justify-center ${pkg.color}`}
      >
        <span className="text-6xl">{pkg.emoji}</span>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg font-bold text-foreground">
          {pkg.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {pkg.description}
        </p>

        {/* Tier chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {pkg.tiers.map((tier, i) => (
            <button
              key={tier.label}
              onClick={() => setSelectedTier(i)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                selectedTier === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {tier.label} &mdash; {formatKES(tier.price)}
            </button>
          ))}
        </div>

        {/* Price */}
        <p className="mt-4 font-serif text-2xl font-bold text-primary">
          {formatKES(pkg.tiers[selectedTier].price)}
        </p>

        <button
          onClick={() =>
            openModal("package", { package: pkg, tierIndex: selectedTier })
          }
          className="mt-4 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          Donate
        </button>
      </div>
    </div>
  )
}
