"use client"

import { useState } from "react"
import { useModal } from "@/lib/modal-context"
import { ModalOverlay } from "./modal-overlay"
import { generateRef } from "@/lib/mock-data"
import { CircleCheck } from "lucide-react"

export function DropOffSuccessModal() {
  const { payload, closeModal } = useModal()
  const [ref] = useState(generateRef("KRC-DO"))

  return (
    <ModalOverlay>
      <div className="flex flex-col items-center py-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CircleCheck className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
          Thank You!
        </h3>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Your drop-off at <span className="font-semibold text-foreground">{payload.branch}</span> has been registered
          for {payload.items?.length} item{(payload.items?.length ?? 0) > 1 ? "s" : ""}.
        </p>
        <div className="mt-4 rounded-lg bg-secondary px-4 py-2">
          <p className="font-mono text-sm font-semibold text-foreground">
            {ref}
          </p>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Please bring this reference number when you visit the branch.
        </p>
        <button
          onClick={closeModal}
          className="mt-6 rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          Done
        </button>
      </div>
    </ModalOverlay>
  )
}
