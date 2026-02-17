"use client"

import { useModal } from "@/lib/modal-context"
import { CashDonationModal } from "./cash-donation-modal"
import { PackageDonateModal } from "./package-donate-modal"
import { CampaignDetailModal } from "./campaign-detail-modal"
import { NewCampaignModal } from "./new-campaign-modal"
import { DropOffSuccessModal } from "./dropoff-success-modal"

export function ModalManager() {
  const { activeModal } = useModal()

  if (!activeModal) return null

  switch (activeModal) {
    case "cash":
      return <CashDonationModal />
    case "package":
      return <PackageDonateModal />
    case "campaign-detail":
      return <CampaignDetailModal />
    case "new-campaign":
      return <NewCampaignModal />
    case "dropoff-success":
      return <DropOffSuccessModal />
    default:
      return null
  }
}
