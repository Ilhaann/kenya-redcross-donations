"use client"

import { useState } from "react"
import { branches, dropOffItems } from "@/lib/mock-data"
import { useModal } from "@/lib/modal-context"
import { MapPin, Clock } from "lucide-react"

interface ItemState {
  checked: boolean
  quantity: string
}

export function DropOffView() {
  const { openModal } = useModal()
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null)
  const [items, setItems] = useState<Record<string, ItemState>>(
    Object.fromEntries(
      dropOffItems.map((item) => [item.id, { checked: false, quantity: "1" }])
    )
  )
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [date, setDate] = useState("")
  const [notes, setNotes] = useState("")
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setItems((prev) => ({
      ...prev,
      [id]: { ...prev[id], checked: !prev[id].checked },
    }))
  }

  const updateQuantity = (id: string, value: string) => {
    setItems((prev) => ({
      ...prev,
      [id]: { ...prev[id], quantity: value },
    }))
  }

  const handleSubmit = () => {
    const newErrors: Record<string, boolean> = {}
    if (selectedBranch === null) newErrors.branch = true
    if (!Object.values(items).some((i) => i.checked)) newErrors.items = true
    if (!name.trim()) newErrors.name = true
    if (!contact.trim()) newErrors.contact = true

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    const selectedItems = Object.entries(items)
      .filter(([, v]) => v.checked)
      .map(([k]) => {
        const item = dropOffItems.find((i) => i.id === k)
        return item?.label || k
      })

    const branch = branches.find((b) => b.id === selectedBranch)
    openModal("dropoff-success", {
      branch: branch?.name,
      items: selectedItems,
    })
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
        Drop-Off / In-Kind Donation
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Donate food, clothing, or supplies at any KRCS branch near you. Register
        your drop-off below.
      </p>

      {/* Section 1 - Branch Selection */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-foreground">
          <MapPin className="h-5 w-5 text-primary" />
          Select a Branch
        </h2>
        {errors.branch && (
          <p className="mt-1 text-sm text-primary">Please select a branch</p>
        )}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => {
                setSelectedBranch(branch.id)
                setErrors((e) => ({ ...e, branch: false }))
              }}
              className={`rounded-xl border-2 p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md ${
                selectedBranch === branch.id
                  ? "border-primary bg-primary/5"
                  : errors.branch
                    ? "border-primary/30 bg-card"
                    : "border-border bg-card"
              }`}
            >
              <p className="font-semibold text-foreground">{branch.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {branch.address}
              </p>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {branch.hours}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Section 2 - Item Selection */}
      <div className="mt-10">
        <h2 className="font-serif text-xl font-bold text-foreground">
          Items to Donate
        </h2>
        {errors.items && (
          <p className="mt-1 text-sm text-primary">
            Please select at least one item
          </p>
        )}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {dropOffItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-4 rounded-lg border p-4 transition-colors ${
                items[item.id].checked
                  ? "border-primary/30 bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                  items[item.id].checked
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border"
                }`}
                aria-label={`Select ${item.label}`}
              >
                {items[item.id].checked && (
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
              <span className="text-xl">{item.emoji}</span>
              <span className="flex-1 text-sm font-medium text-foreground">
                {item.label}
              </span>
              {items[item.id].checked && (
                <input
                  type={item.id === "other" ? "text" : "number"}
                  value={items[item.id].quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  placeholder={item.id === "other" ? "Describe..." : "Qty"}
                  min={1}
                  className="w-20 rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground outline-none focus:border-primary"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 - Donor Details */}
      <div className="mt-10">
        <h2 className="font-serif text-xl font-bold text-foreground">
          Your Details
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setErrors((er) => ({ ...er, name: false }))
              }}
              className={`w-full rounded-lg border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary ${
                errors.name ? "border-primary" : "border-border"
              }`}
              placeholder="e.g. Wanjiku Kamau"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-primary">Name is required</p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Phone / Email <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value)
                setErrors((er) => ({ ...er, contact: false }))
              }}
              className={`w-full rounded-lg border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary ${
                errors.contact ? "border-primary" : "border-border"
              }`}
              placeholder="0712 345 678 or email"
            />
            {errors.contact && (
              <p className="mt-1 text-xs text-primary">Contact is required</p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Preferred Drop-Off Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={1}
              className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
              placeholder="Any special instructions..."
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="mt-10 w-full rounded-lg bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:px-16"
      >
        Register My Drop-Off
      </button>
    </section>
  )
}
