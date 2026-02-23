import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Gift, Calendar, Users, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/campaign-data";

const SimpleDonationFlow = () => {
  const [step, setStep] = useState(1);
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);

  const donationAmounts = [
    { value: "500", label: "KES 500", impact: "Clean water for 1 family" },
    { value: "1000", label: "KES 1,000", impact: "Feeds 5 children" },
    { value: "2500", label: "KES 2,500", impact: "Shelter for 1 family" },
    { value: "5000", label: "KES 5,000", impact: "Education for 1 child" }
  ];

  const handleDonate = () => {
    console.log("Donation:", { type: donationType, amount, isMonthly });
    // Handle donation logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Step 1: Donation Type */}
          {step === 1 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-center">Choose Your Donation</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setDonationType("one-time"); setIsMonthly(false); }}
                  className={`rounded-xl border-2 p-6 text-left ${
                    donationType === "one-time" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
                  }`}
                >
                  <Gift className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">One-Time Donation</h3>
                  <p className="text-sm text-muted-foreground">Make a single impact today</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setDonationType("monthly"); setIsMonthly(true); }}
                  className={`rounded-xl border-2 p-6 text-left ${
                    donationType === "monthly" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
                  }`}
                >
                  <Calendar className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Monthly Giving</h3>
                  <p className="text-sm text-muted-foreground">Sustained support throughout the year</p>
                  {isMonthly && (
                    <div className="mt-2 rounded bg-green-100 p-2 text-xs text-green-800">
                      3x more impact over time!
                    </div>
                  )}
                </motion.button>
              </div>

              <div className="mt-8 text-center">
                <Button onClick={() => setStep(2)} className="rounded-full bg-primary px-8">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Amount Selection */}
          {step === 2 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-center">Select Amount</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {donationAmounts.map((donation) => (
                  <motion.button
                    key={donation.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAmount(donation.value)}
                    className={`rounded-xl border-2 p-4 text-left ${
                      amount === donation.value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
                    }`}
                  >
                    <div className="text-lg font-bold">{donation.label}</div>
                    <div className="text-sm text-muted-foreground">{donation.impact}</div>
                    {amount === donation.value && (
                      <div className="absolute right-2 top-2">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="mt-6">
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-lg border border-border p-4 text-lg"
                />
              </div>

              <div className="mt-8 flex justify-between">
                <Button onClick={() => setStep(1)} variant="outline" className="rounded-full">
                  Back
                </Button>
                <Button onClick={() => setStep(3)} disabled={!amount} className="rounded-full bg-primary px-8">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-center">Complete Your Donation</h2>
              
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 text-center">
                  <h3 className="text-lg font-semibold text-foreground">Donation Summary</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span className="font-medium capitalize">{donationType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span className="font-bold text-primary text-lg">
                      {amount ? formatCurrency(parseInt(amount)) : "Custom"}
                    </span>
                  </div>
                  {isMonthly && (
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span className="font-medium">Monthly</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button onClick={handleDonate} className="rounded-full bg-primary px-8 text-lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Donate {amount ? formatCurrency(parseInt(amount)) : "Custom Amount"}
                </Button>
              </div>
            </div>
          )}

          {/* Success State */}
          {step === 4 && (
            <div className="text-center py-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Thank You!</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Your donation will help provide clean water to families in need.
                </p>
                <Button onClick={() => setStep(1)} className="rounded-full bg-primary px-8">
                  Make Another Donation
                </Button>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleDonationFlow;
