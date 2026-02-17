"use client"

import { useModal } from "@/lib/modal-context"
import type { Campaign } from "@/lib/mock-data"
import { formatKES, getProgressColor } from "@/lib/mock-data"
import { ProgressBar } from "./progress-bar"

const categoryColors: Record<string, string> = {
  individual: "bg-sky-100 text-sky-800",
  corporate: "bg-amber-100 text-amber-800",
  community: "bg-emerald-100 text-emerald-800",
}

const categoryIllustration: Record<string, string> = {
  individual: "bg-sky-50",
  corporate: "bg-amber-50",
  community: "bg-emerald-50",
}

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const { openModal } = useModal()
  const colors = getProgressColor(campaign.percentage)

  return (
    <button
      onClick={() => openModal("campaign-detail", { campaign })}
      className="group overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Illustration area */}
      <div
        className={`relative flex h-32 items-center justify-center ${
          categoryIllustration[campaign.category]
        }`}
      >
        <span className="text-5xl font-serif font-bold text-foreground/10">
          {campaign.orgInitials}
        </span>
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize ${
            categoryColors[campaign.category]
          }`}
        >
          {campaign.category}
        </span>
      </div>

      <div className="p-5">
        {/* Organiser */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {campaign.orgInitials}
          </div>
          <span className="text-xs text-muted-foreground">
            {campaign.organiser}
          </span>
        </div>

        <h3 className="mt-3 font-serif text-lg font-bold leading-tight text-foreground">
          {campaign.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {campaign.description}
        </p>

        {/* Progress */}
        <div className="mt-4">
          <ProgressBar percentage={campaign.percentage} />
          <div className="mt-2 flex items-center justify-between">
            <span className={`text-sm font-bold ${colors.text}`}>
              {campaign.percentage}%
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors.badgeBg}`}
            >
              {colors.badge}
            </span>
          </div>
        </div>

        {/* Amounts */}
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>Raised {formatKES(campaign.raised)}</span>
          <span>Target {formatKES(campaign.target)}</span>
        </div>
      </div>
    </button>
  )
}
