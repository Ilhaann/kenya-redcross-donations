"use client"

import { useState } from "react"
import { campaigns } from "@/lib/mock-data"
import { CampaignCard } from "@/components/campaigns/campaign-card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus, X } from "lucide-react"

const filters = [
  { label: "All", value: "all" },
  { label: "Individual", value: "individual" },
  { label: "Corporate", value: "corporate" },
  { label: "Community", value: "community" },
]

interface DonationCampaignsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DonationCampaignsModal({ isOpen, onClose }: DonationCampaignsModalProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered =
    activeFilter === "all"
      ? campaigns
      : campaigns.filter((c) => c.category === activeFilter)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">Active Campaigns</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="mt-4">
          <p className="text-muted-foreground">
            Support causes led by individuals, organisations, and communities across
            Kenya.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
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
            <Button className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md">
              <Plus className="h-4 w-4" />
              Start a Campaign
            </Button>
          </div>

          {/* Grid */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
