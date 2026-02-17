"use client"

import { useState } from "react"
import { useModal } from "@/lib/modal-context"
import { ModalOverlay } from "./modal-overlay"
import { SuccessScreen } from "./success-screen"
import { formatKES, generateRef } from "@/lib/mock-data"
import { Minus, Plus } from "lucide-react"

export function PackageDonateModal() {
  const { payload } = useModal()
  const pkg = payload.package
  const [tierIndex, setTierIndex] = useState(payload.tierIndex ?? 0)
  const [quantity, setQuantity] = useState(1)
  const [dedication, setDedication] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)
  const [ref] = useState(generateRef())

  if (!pkg) return null

  const tier = pkg.tiers[tierIndex]
  const total = tier.price * quantity

  if (done) {
    return (
      <ModalOverlay>
        <SuccessScreen
          message={`Your ${pkg.name} package donation has been received. Thank you for your generosity!`}
          reference={ref}
        />
      </ModalOverlay>
    )
  }

  return (
    <ModalOverlay title={`Donate: ${pkg.name}`}>
      <div className="space-y-5">
        {/* Package info */}
        <div className={`flex items-center gap-4 rounded-xl p-4 ${pkg.color}`}>
          <span className="text-4xl">{pkg.emoji}</span>
          <div>
            <p className="font-serif font-bold text-foreground">{pkg.name}</p>
            <p className="text-xs text-muted-foreground">{pkg.description}</p>
          </div>
        </div>

        {/* Tier selection */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Duration
          </label>
          <div className="flex flex-wrap gap-2">
            {pkg.tiers.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setTierIndex(i)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  tierIndex === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {t.label} &mdash; {formatKES(t.price)}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Quantity
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center font-semibold text-foreground">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Total */}
        <div className="rounded-xl bg-secondary p-4 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Total
          </p>
          <p className="font-serif text-3xl font-bold text-primary">
            {formatKES(total)}
          </p>
        </div>

        {/* Dedication */}
        <input
          type="text"
          placeholder="Optional: Dedicate this donation to..."
          value={dedication}
          onChange={(e) => setDedication(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
        />

        {/* Phone + Email */}
        <input
          type="tel"
          placeholder="M-Pesa Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
        />
        <input
          type="email"
          placeholder="Email (for receipt)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
        />

        <button
          onClick={() => setDone(true)}
          className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          Confirm Donation
        </button>
      </div>
    </ModalOverlay>
  )
}
