"use client"

import { useModal } from "@/lib/modal-context"
import { CircleCheck } from "lucide-react"

export function SuccessScreen({
  title = "Thank You!",
  message,
  reference,
}: {
  title?: string
  message: string
  reference: string
}) {
  const { closeModal } = useModal()

  return (
    <div className="flex flex-col items-center py-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CircleCheck className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{message}</p>
      <div className="mt-4 rounded-lg bg-secondary px-4 py-2">
        <p className="font-mono text-sm font-semibold text-foreground">
          {reference}
        </p>
      </div>
      <button
        onClick={closeModal}
        className="mt-6 rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
      >
        Done
      </button>
    </div>
  )
}
