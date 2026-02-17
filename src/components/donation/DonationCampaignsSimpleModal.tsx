"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { X, Heart, Users } from "lucide-react"

const campaigns = [
  {
    id: 1,
    title: "School Supplies for Rural Children",
    description: "Provide essential learning materials for children in remote areas",
    category: "individual",
    raised: 45000,
    goal: 100000,
    donors: 23,
    image: "🎒"
  },
  {
    id: 2,
    title: "Community Water Project",
    description: "Build a sustainable water source for an entire village",
    category: "community",
    raised: 120000,
    goal: 200000,
    donors: 67,
    image: "💧"
  },
  {
    id: 3,
    title: "Medical Equipment for Local Clinic",
    description: "Fund essential medical equipment for rural healthcare",
    category: "corporate",
    raised: 280000,
    goal: 500000,
    donors: 45,
    image: "🏥"
  }
]

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

function CampaignCard({ campaign }: { campaign: typeof campaigns[0] }) {
  const progress = (campaign.raised / campaign.goal) * 100

  const handleDonate = () => {
    alert(`Donation initiated: ${campaign.title}`)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
        <span className="text-6xl">{campaign.image}</span>
      </div>
      
      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg">{campaign.title}</h3>
        <p className="text-sm text-muted-foreground">{campaign.description}</p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">KES {campaign.raised.toLocaleString()}</span>
              <span className="text-muted-foreground">of KES {campaign.goal.toLocaleString()}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="flex justify-between text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {campaign.donors} donors
            </span>
            <span className="capitalize">{campaign.category}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button onClick={handleDonate} className="w-full bg-primary hover:bg-primary/90">
          <Heart className="mr-2 h-4 w-4" />
          Donate Now
        </Button>
      </CardFooter>
    </Card>
  )
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
            <DialogTitle className="text-2xl font-bold">Community Campaigns</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="mt-4">
          <p className="text-muted-foreground">
            Support causes led by individuals, organisations, and communities across Kenya.
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
