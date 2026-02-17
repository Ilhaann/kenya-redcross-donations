"use client"

import { useState } from "react"
import { useModal } from "@/lib/modal-context"
import { ModalOverlay } from "./modal-overlay"
import { SuccessScreen } from "./success-screen"
import { ProgressBar } from "@/components/campaigns/progress-bar"
import { formatKES, getProgressColor, generateRef } from "@/lib/mock-data"

const presetAmounts = [500, 1000, 2500, 5000]

export function CampaignDetailModal() {
  const { payload } = useModal()
  const campaign = payload.campaign
  const [amount, setAmount] = useState<number>(1000)
  const [customAmount, setCustomAmount] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)
  const [ref] = useState(generateRef())

  if (!campaign) return null

  const colors = getProgressColor(campaign.percentage)

  if (done) {
    return (
      <ModalOverlay>
        <SuccessScreen
          message={`Your donation to "${campaign.title}" has been received. Together we make a difference!`}
          reference={ref}
        />
      </ModalOverlay>
    )
  }

  return (
    <ModalOverlay>
      <div className="space-y-5">
        {/* Hero illustration */}
        <div className="flex h-28 items-center justify-center rounded-xl bg-secondary">
          <span className="font-serif text-4xl font-bold text-foreground/10">
            {campaign.orgInitials}
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="rounded-lg bg-secondary p-2">
            <p className="font-serif text-sm font-bold text-foreground">
              {formatKES(campaign.raised)}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Raised
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-2">
            <p className="font-serif text-sm font-bold text-foreground">
              {formatKES(campaign.target)}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Target
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-2">
            <p className={`font-serif text-sm font-bold ${colors.text}`}>
              {campaign.percentage}%
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Progress
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-2">
            <p className="font-serif text-sm font-bold text-foreground truncate">
              {campaign.organiser}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Organiser
            </p>
          </div>
        </div>

        <ProgressBar percentage={campaign.percentage} />

        <div>
          <h3 className="font-serif text-lg font-bold text-foreground">
            {campaign.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {campaign.description}
          </p>
        </div>

        <div className="border-t border-border pt-5">
          <p className="mb-3 text-sm font-semibold text-foreground">
            Support this campaign
          </p>
          {/* Amount chips */}
          <div className="flex flex-wrap gap-2">
            {presetAmounts.map((a) => (
              <button
                key={a}
                onClick={() => {
                  setAmount(a)
                  setCustomAmount("")
                }}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  amount === a && !customAmount
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {formatKES(a)}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Or enter custom amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          <input
            type="tel"
            placeholder="M-Pesa Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Email (for receipt)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          <button
            onClick={() => setDone(true)}
            className="mt-4 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Donate
          </button>
        </div>
      </div>
    </ModalOverlay>
  )
}
