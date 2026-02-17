"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X, Package, MapPin } from "lucide-react"

const branches = [
  { id: 1, name: "Nairobi Headquarters", location: "Nairobi CBD" },
  { id: 2, name: "Mombasa Branch", location: "Mombasa Town" },
  { id: 3, name: "Kisumu Branch", location: "Kisumu City" },
  { id: 4, name: "Eldoret Branch", location: "Eldoret Town" }
]

const dropOffItems = [
  { id: "1", name: "Non-perishable Food", description: "Canned goods, rice, flour, pasta" },
  { id: "2", name: "Clothing", description: "Clean clothes for all ages and seasons" },
  { id: "3", name: "School Supplies", description: "Books, pens, backpacks, calculators" },
  { id: "4", name: "Medical Supplies", description: "First aid kits, bandages, basic medications" },
  { id: "5", name: "Hygiene Products", description: "Soap, toothpaste, sanitary products" }
]

interface ItemState {
  checked: boolean
  quantity: string
}

interface DropOffDonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DropOffDonationModal({ isOpen, onClose }: DropOffDonationModalProps) {
  const [selectedBranch, setSelectedBranch] = useState<string>("")
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
    if (!selectedBranch) newErrors.branch = true
    if (!Object.values(items).some((i) => i.checked)) newErrors.items = true
    if (!name.trim()) newErrors.name = true
    if (!contact.trim()) newErrors.contact = true

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    // Handle submission logic here
    alert(`Drop-off donation scheduled for ${date} at ${branches.find(b => b.id.toString() === selectedBranch)?.name}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">Drop-off Donation</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          {/* Branch Selection */}
          <div>
            <Label className="text-base font-semibold">Select Drop-off Location</Label>
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger className={`mt-2 ${errors.branch ? "border-red-500" : ""}`}>
                <SelectValue placeholder="Choose a branch near you" />
              </SelectTrigger>
              <SelectContent>
                {branches.map((branch) => (
                  <SelectItem key={branch.id} value={branch.id.toString()}>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {branch.name} - {branch.location}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Items Selection */}
          <div>
            <Label className="text-base font-semibold flex items-center gap-2">
              <Package className="h-5 w-5" />
              Select Items to Donate
            </Label>
            <div className="mt-3 space-y-3">
              {dropOffItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                  <Checkbox
                    id={item.id}
                    checked={items[item.id].checked}
                    onCheckedChange={() => toggleItem(item.id)}
                  />
                  <div className="flex-1">
                    <Label htmlFor={item.id} className="font-medium">
                      {item.name}
                    </Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`qty-${item.id}`} className="text-sm">Qty:</Label>
                    <Input
                      id={`qty-${item.id}`}
                      type="number"
                      min="1"
                      value={items[item.id].quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                      className="w-20"
                      disabled={!items[item.id].checked}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Donor Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 ${errors.name ? "border-red-500" : ""}`}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <Label htmlFor="contact">Contact Information</Label>
              <Input
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className={`mt-1 ${errors.contact ? "border-red-500" : ""}`}
                placeholder="Phone number or email"
              />
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <Label htmlFor="date">Preferred Drop-off Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-1"
              placeholder="Any special instructions or details..."
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="bg-primary">
              Schedule Drop-off
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
