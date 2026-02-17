"use client"

import { useState } from "react"
import { ModalOverlay } from "./modal-overlay"
import { SuccessScreen } from "./success-screen"
import { formatKES, generateRef } from "@/lib/mock-data"

const presetAmounts = [500, 1000, 2500, 5000, 10000]
const funds = [
  "General",
  "Disaster Response",
  "Child Nutrition",
  "Water & Sanitation",
  "Medical Aid",
  "Refugee Support",
]

function StepIndicator({ current }: { current: number }) {
  const steps = ["Amount", "Payment", "Confirm"]
  return (
    <div className="mb-6 flex items-center justify-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
              i + 1 <= current
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {i + 1}
          </div>
          <span
            className={`text-xs font-medium ${
              i + 1 <= current ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <div className="mx-1 h-px w-6 bg-border" />
          )}
        </div>
      ))}
    </div>
  )
}

export function CashDonationModal() {
  const [step, setStep] = useState(1)
  const [amount, setAmount] = useState<number>(1000)
  const [customAmount, setCustomAmount] = useState("")
  const [fund, setFund] = useState("General")
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time")
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "bank">("mpesa")
  const [phone, setPhone] = useState("")
  const [txRef, setTxRef] = useState("")
  const [donorName, setDonorName] = useState("")
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [done, setDone] = useState(false)
  const [ref] = useState(generateRef())

  const displayAmount = customAmount ? Number(customAmount) || 0 : amount

  if (done) {
    return (
      <ModalOverlay>
        <SuccessScreen
          message="Your donation has been received. A confirmation will be sent to your email."
          reference={ref}
        />
      </ModalOverlay>
    )
  }

  return (
    <ModalOverlay title="Cash Donation">
      <StepIndicator current={step} />

      {step === 1 && (
        <div className="space-y-5">
          {/* Preset amounts */}
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Select Amount
            </label>
            <div className="flex flex-wrap gap-2">
              {presetAmounts.map((a) => (
                <button
                  key={a}
                  onClick={() => {
                    setAmount(a)
                    setCustomAmount("")
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
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
          </div>

          {/* Fund */}
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Earmark Fund
            </label>
            <select
              value={fund}
              onChange={(e) => setFund(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            >
              {funds.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          {/* Frequency */}
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Frequency
            </label>
            <div className="flex gap-2">
              {(["one-time", "monthly"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-all ${
                    frequency === f
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                >
                  {f === "one-time" ? "One-Time" : "Monthly"}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          {/* Payment method cards */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPaymentMethod("mpesa")}
              className={`rounded-xl border-2 p-4 text-center transition-all ${
                paymentMethod === "mpesa"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <span className="text-2xl">{"📱"}</span>
              <p className="mt-1 text-sm font-semibold text-foreground">
                M-Pesa
              </p>
            </button>
            <button
              onClick={() => setPaymentMethod("bank")}
              className={`rounded-xl border-2 p-4 text-center transition-all ${
                paymentMethod === "bank"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <span className="text-2xl">{"🏦"}</span>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Bank Transfer
              </p>
            </button>
          </div>

          {paymentMethod === "mpesa" ? (
            <div className="space-y-3">
              <input
                type="tel"
                placeholder="M-Pesa Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
              />
              <div className="rounded-lg bg-secondary p-3 text-xs text-muted-foreground">
                <p className="font-semibold text-foreground">Paybill: 125125</p>
                <p>Account: REDCROSS</p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="rounded-lg bg-secondary p-3 text-xs text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Kenya Red Cross Society
                </p>
                <p>Bank: Kenya Commercial Bank</p>
                <p>Account: 1143 244 034</p>
                <p>Branch: Nairobi</p>
              </div>
              <input
                type="text"
                placeholder="Transaction Reference"
                value={txRef}
                onChange={(e) => setTxRef(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
              />
            </div>
          )}

          {/* Name + Email */}
          <input
            type="text"
            placeholder="Full Name (for receipt)"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Email (for receipt)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />

          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="flex-1 rounded-lg border border-border py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-accent"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex-1 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          {/* Receipt box */}
          <div className="rounded-xl border border-dashed border-border p-5">
            <h3 className="font-serif text-sm font-bold text-foreground">
              Donation Summary
            </h3>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Donor</span>
                <span className="font-medium text-foreground">
                  {donorName || "Anonymous"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fund</span>
                <span className="font-medium text-foreground">{fund}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment</span>
                <span className="font-medium text-foreground capitalize">
                  {paymentMethod === "mpesa" ? "M-Pesa" : "Bank Transfer"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Frequency</span>
                <span className="font-medium text-foreground capitalize">
                  {frequency === "one-time" ? "One-Time" : "Monthly"}
                </span>
              </div>
              <div className="my-3 border-t border-dashed border-border" />
              <div className="flex justify-between">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-serif text-lg font-bold text-primary">
                  {formatKES(displayAmount)}
                </span>
              </div>
            </div>
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
              I agree to the Kenya Red Cross Society Terms & Conditions and
              acknowledge my donation.
            </span>
          </label>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="flex-1 rounded-lg border border-border py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-accent"
            >
              Back
            </button>
            <button
              onClick={() => {
                if (agreed) setDone(true)
              }}
              disabled={!agreed}
              className="flex-1 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:translate-y-0"
            >
              Confirm Donation
            </button>
          </div>
        </div>
      )}
    </ModalOverlay>
  )
}
