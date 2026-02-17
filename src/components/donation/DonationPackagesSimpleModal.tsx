"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Heart } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Feed a Child",
    description: "Provide nutritious meals for a child for a month",
    category: "children",
    color: "bg-blue-100",
    emoji: "👶",
    tiers: [
      { label: "Monthly", price: 1500 },
      { label: "Quarterly", price: 4500 },
      { label: "Yearly", price: 18000 }
    ]
  },
  {
    id: 2, 
    name: "Family Support",
    description: "Support a family with essential supplies for a month",
    category: "families",
    color: "bg-green-100",
    emoji: "👨‍👩‍👧‍👦",
    tiers: [
      { label: "Monthly", price: 5000 },
      { label: "Quarterly", price: 15000 },
      { label: "Yearly", price: 60000 }
    ]
  },
  {
    id: 3,
    name: "Emergency Relief",
    description: "Provide emergency supplies for disaster response",
    category: "emergency", 
    color: "bg-red-100",
    emoji: "🚨",
    tiers: [
      { label: "One-time", price: 10000 },
      { label: "Monthly", price: 25000 },
      { label: "Yearly", price: 300000 }
    ]
  }
]

const filters = [
  { label: "All", value: "all" },
  { label: "Children", value: "children" },
  { label: "Families", value: "families" },
  { label: "Emergency", value: "emergency" },
]

interface DonationPackagesModalProps {
  isOpen: boolean
  onClose: () => void
}

function SimplePackageCard({ pkg }: { pkg: typeof packages[0] }) {
  const [selectedTier, setSelectedTier] = useState(0)

  const handleDonate = () => {
    alert(`Donation initiated: ${pkg.name} - ${pkg.tiers[selectedTier].label} - KES ${pkg.tiers[selectedTier].price.toLocaleString()}`)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className={`flex h-36 items-center justify-center ${pkg.color}`}>
        <span className="text-6xl">{pkg.emoji}</span>
      </div>
      
      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg">{pkg.name}</h3>
        <p className="text-sm text-muted-foreground">{pkg.description}</p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
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
              {tier.label} - KES {tier.price.toLocaleString()}
            </button>
          ))}
        </div>
        
        <p className="text-2xl font-bold text-primary">
          KES {pkg.tiers[selectedTier].price.toLocaleString()}
        </p>
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

export function DonationPackagesModal({ isOpen, onClose }: DonationPackagesModalProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered =
    activeFilter === "all"
      ? packages
      : packages.filter((p) => p.category === activeFilter)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">Donation Packages</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="mt-4">
          <p className="text-muted-foreground">
            Select a package and choose the duration that fits your giving. Every
            package directly feeds, shelters, or supports someone in need.
          </p>

          {/* Filter tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
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
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pkg) => (
              <SimplePackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
