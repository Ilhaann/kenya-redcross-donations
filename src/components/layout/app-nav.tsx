"use client"

import { useState } from "react"
import { useNav, type Page } from "@/lib/nav-context"
import { useModal } from "@/lib/modal-context"
import { Menu, X } from "lucide-react"

const tabs: { label: string; value: Page }[] = [
  { label: "Home", value: "home" },
  { label: "Packages", value: "packages" },
  { label: "Campaigns", value: "campaigns" },
  { label: "Drop-Off", value: "dropoff" },
]

export function AppNav() {
  const { activePage, setActivePage } = useNav()
  const { openModal } = useModal()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => setActivePage("home")}
          className="flex items-center gap-3"
        >
          <img src="/favicon.png" alt="Kenya Red Cross Logo" className="h-9 w-9 rounded-full object-contain" />
          <div className="hidden sm:block">
            <p className="font-serif text-lg font-bold leading-tight text-foreground">
              Kenya
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Red Cross Society
            </p>
          </div>
        </button>

        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center rounded-full bg-card p-1 shadow-sm border border-border/50">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActivePage(tab.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activePage === tab.value
                  ? "bg-card text-primary shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:block font-mono text-xs text-muted-foreground">
            1199
          </span>
          <button
            onClick={() => openModal("cash")}
            className="hidden sm:block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Donate Now
          </button>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-card px-4 pb-4 pt-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActivePage(tab.value)
                setMobileOpen(false)
              }}
              className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                activePage === tab.value
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <button
            onClick={() => {
              openModal("cash")
              setMobileOpen(false)
            }}
            className="mt-2 w-full rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Donate Now
          </button>
        </div>
      )}
    </nav>
  )
}
