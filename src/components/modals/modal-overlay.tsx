"use client"

import { useEffect, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { useModal } from "@/lib/modal-context"
import { X } from "lucide-react"

export function ModalOverlay({
  children,
  title,
}: {
  children: ReactNode
  title?: string
}) {
  const { closeModal } = useModal()

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [closeModal])

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 pt-[5vh] pb-[5vh]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />
      {/* Modal */}
      <div className="relative w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-300 rounded-2xl border border-border bg-card shadow-2xl">
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="font-serif text-lg font-bold text-foreground">
              {title}
            </h2>
            <button
              onClick={closeModal}
              className="rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
        {!title && (
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body
  )
}
