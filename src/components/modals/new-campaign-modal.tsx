"use client"

import { useState, useCallback } from "react"
import { ModalOverlay } from "./modal-overlay"
import { SuccessScreen } from "./success-screen"
import { generateRef } from "@/lib/mock-data"
import { Upload, X } from "lucide-react"

export function NewCampaignModal() {
  const [title, setTitle] = useState("")
  const [orgType, setOrgType] = useState("Individual")
  const [orgName, setOrgName] = useState("")
  const [targetAmount, setTargetAmount] = useState("")
  const [description, setDescription] = useState("")
  const [photos, setPhotos] = useState<{ file: File; preview: string }[]>([])
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [done, setDone] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [ref] = useState(generateRef())

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (!files) return
      const newPhotos = Array.from(files)
        .slice(0, 6 - photos.length)
        .map((file) => ({
          file,
          preview: URL.createObjectURL(file),
        }))
      setPhotos((prev) => [...prev, ...newPhotos].slice(0, 6))
    },
    [photos.length]
  )

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    const newErrors: Record<string, boolean> = {}
    if (!title.trim()) newErrors.title = true
    if (!orgName.trim()) newErrors.orgName = true
    if (!targetAmount.trim()) newErrors.target = true
    if (!description.trim()) newErrors.description = true

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return
    if (!agreed) return

    setDone(true)
  }

  if (done) {
    return (
      <ModalOverlay>
        <SuccessScreen
          message="Your campaign has been submitted for review. You'll receive a confirmation within 24 hours."
          reference={ref}
        />
      </ModalOverlay>
    )
  }

  return (
    <ModalOverlay title="Start a New Campaign">
      <div className="space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Campaign Title <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                setErrors((er) => ({ ...er, title: false }))
              }}
              className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary ${
                errors.title ? "border-primary" : "border-border"
              }`}
              placeholder="e.g. Run for Flood Victims"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Organiser Type
            </label>
            <select
              value={orgType}
              onChange={(e) => setOrgType(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            >
              <option>Individual</option>
              <option>Corporate</option>
              <option>Community</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Organiser Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              value={orgName}
              onChange={(e) => {
                setOrgName(e.target.value)
                setErrors((er) => ({ ...er, orgName: false }))
              }}
              className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary ${
                errors.orgName ? "border-primary" : "border-border"
              }`}
              placeholder="Your name or organisation"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Target Amount (KES) <span className="text-primary">*</span>
            </label>
            <input
              type="number"
              value={targetAmount}
              onChange={(e) => {
                setTargetAmount(e.target.value)
                setErrors((er) => ({ ...er, target: false }))
              }}
              className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary ${
                errors.target ? "border-primary" : "border-border"
              }`}
              placeholder="e.g. 300000"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Description <span className="text-primary">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
              setErrors((er) => ({ ...er, description: false }))
            }}
            rows={3}
            className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary ${
              errors.description ? "border-primary" : "border-border"
            }`}
            placeholder="Tell donors what this campaign is about..."
          />
        </div>

        {/* Photo upload */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Photos (max 6)
          </label>
          <div className="flex flex-wrap gap-3">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="relative h-20 w-20 overflow-hidden rounded-lg border border-border"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.preview}
                  alt={`Upload ${i + 1}`}
                  className="h-full w-full object-cover"
                />
                <button
                  onClick={() => removePhoto(i)}
                  className="absolute right-1 top-1 rounded-full bg-foreground/70 p-0.5 text-card"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            {photos.length < 6 && (
              <label className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <Upload className="h-5 w-5" />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="sr-only"
                />
              </label>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>

        {/* T&Cs */}
        <label className="flex items-start gap-2">
          <button
            onClick={() => setAgreed(!agreed)}
            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 transition-colors ${
              agreed
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border"
            }`}
          >
            {agreed && (
              <svg
                className="h-2.5 w-2.5"
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
          <span className="text-xs text-muted-foreground">
            I agree to the KRCS campaign terms and certify this campaign is
            legitimate.
          </span>
        </label>

        <button
          onClick={handleSubmit}
          disabled={!agreed}
          className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:translate-y-0"
        >
          Submit Campaign
        </button>
      </div>
    </ModalOverlay>
  )
}
