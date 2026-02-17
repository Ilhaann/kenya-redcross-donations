"use client"

import { useState } from "react"
import { campaigns } from "@/lib/mock-data"
import { useModal } from "@/lib/modal-context"
import { CampaignCard } from "@/components/campaigns/campaign-card"
import { Plus } from "lucide-react"

const filters = [
  { label: "All", value: "all" },
  { label: "Individual", value: "individual" },
  { label: "Corporate", value: "corporate" },
  { label: "Community", value: "community" },
]

export function CampaignsView() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { openModal } = useModal()

  const filtered =
    activeFilter === "all"
      ? campaigns
      : campaigns.filter((c) => c.category === activeFilter)

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Active Campaigns
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Support causes led by individuals, organisations, and communities across
            Kenya.
          </p>
        </div>
        <button
          onClick={() => openModal("new-campaign")}
          className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
        >
          <Plus className="h-4 w-4" />
          Start a Campaign
        </button>
      </div>

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
        {filtered.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </section>
  )
}
