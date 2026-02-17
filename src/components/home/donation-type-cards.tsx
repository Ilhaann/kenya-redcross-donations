"use client"

import { useNav } from "@/lib/nav-context"
import { useModal } from "@/lib/modal-context"
import { ArrowRight } from "lucide-react"

const cards = [
  {
    icon: "\uD83D\uDCB3",
    title: "Cash Donation",
    desc: "Give directly via M-Pesa or bank transfer",
    color: "bg-red-50",
    borderColor: "bg-primary",
    action: "cash" as const,
  },
  {
    icon: "\uD83D\uDCE6",
    title: "Package Donation",
    desc: "Feed a child or family for a day, week, or month",
    color: "bg-amber-50",
    borderColor: "bg-amber-500",
    action: "packages" as const,
  },
  {
    icon: "\uD83C\uDFF3\uFE0F",
    title: "Campaign Donation",
    desc: "Support a cause championed by an individual or organisation",
    color: "bg-emerald-50",
    borderColor: "bg-emerald-500",
    action: "campaigns" as const,
  },
  {
    icon: "\uD83C\uDFE0",
    title: "Drop-Off / In-Kind",
    desc: "Donate food, clothing, or supplies at any KRCS branch",
    color: "bg-sky-50",
    borderColor: "bg-sky-500",
    action: "dropoff" as const,
  },
]

export function DonationTypeCards() {
  const { setActivePage } = useNav()
  const { openModal } = useModal()

  const handleClick = (action: string) => {
    if (action === "cash") {
      openModal("cash")
    } else {
      setActivePage(action as "packages" | "campaigns" | "dropoff")
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <h2 className="text-center font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
        Choose Your Donation Type
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
        Every contribution matters. Select the way that works best for you.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <button
            key={card.title}
            onClick={() => handleClick(card.action)}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Animated top border */}
            <div
              className={`absolute left-0 top-0 h-1 w-full ${card.borderColor} origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
            />
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${card.color} text-2xl`}
            >
              {card.icon}
            </div>
            <h3 className="font-serif text-lg font-bold text-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.desc}
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
              Get started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
