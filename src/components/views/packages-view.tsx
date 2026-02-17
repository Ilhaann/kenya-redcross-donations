"use client"

import { useState } from "react"
import { packages } from "@/lib/mock-data"
import { PackageCard } from "@/components/packages/package-card"

const filters = [
  { label: "All", value: "all" },
  { label: "Children", value: "children" },
  { label: "Families", value: "families" },
  { label: "Emergency", value: "emergency" },
]

export function PackagesView() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered =
    activeFilter === "all"
      ? packages
      : packages.filter((p) => p.category === activeFilter)

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
        Donation Packages
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Select a package and choose the duration that fits your giving. Every
        package directly feeds, shelters, or supports someone in need.
      </p>

      {/* Filter tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeFilter === f.value
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card text-muted-foreground border border-border hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  )
}
