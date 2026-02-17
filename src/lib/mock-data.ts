export interface Package {
  id: number
  name: string
  category: "children" | "families" | "emergency"
  emoji: string
  description: string
  color: string
  tiers: { label: string; price: number }[]
}

export interface Campaign {
  id: number
  title: string
  category: "individual" | "corporate" | "community"
  organiser: string
  orgInitials: string
  description: string
  raised: number
  target: number
  percentage: number
}

export interface Branch {
  id: number
  name: string
  address: string
  hours: string
}

export const packages: Package[] = [
  {
    id: 1,
    name: "Feed a Child",
    category: "children",
    emoji: "\uD83C\uDF5A",
    description:
      "Provide nutritious meals to a child in need. Every meal brings hope and energy for learning.",
    color: "bg-amber-50",
    tiers: [
      { label: "1 Day", price: 150 },
      { label: "1 Week", price: 900 },
      { label: "1 Month", price: 3500 },
    ],
  },
  {
    id: 2,
    name: "Feed a Family",
    category: "families",
    emoji: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66",
    description:
      "Support a full family with balanced daily meals. Keeping families nourished and together.",
    color: "bg-emerald-50",
    tiers: [
      { label: "1 Day", price: 500 },
      { label: "1 Week", price: 3000 },
      { label: "1 Month", price: 11000 },
    ],
  },
  {
    id: 3,
    name: "Infant Nutrition Kit",
    category: "children",
    emoji: "\uD83C\uDF7C",
    description:
      "Specialised nutrition for infants under 2 years. Critical nourishment during the first 1000 days.",
    color: "bg-pink-50",
    tiers: [
      { label: "1 Week", price: 1200 },
      { label: "1 Month", price: 4500 },
    ],
  },
  {
    id: 4,
    name: "Emergency Relief Bag",
    category: "emergency",
    emoji: "\uD83C\uDD98",
    description:
      "Immediate relief supplies for disaster-affected communities. Essential items when they need it most.",
    color: "bg-red-50",
    tiers: [
      { label: "1 Kit", price: 800 },
      { label: "7 Kits", price: 4800 },
    ],
  },
  {
    id: 5,
    name: "Clean Water Access",
    category: "families",
    emoji: "\uD83D\uDCA7",
    description:
      "Provide clean, safe drinking water to families in arid regions. Water is life.",
    color: "bg-sky-50",
    tiers: [
      { label: "1 Week", price: 600 },
      { label: "1 Month", price: 2000 },
    ],
  },
  {
    id: 6,
    name: "School Meals Programme",
    category: "children",
    emoji: "\uD83C\uDFEB",
    description:
      "Keep children in school with daily meals. Nutrition fuels education and a brighter future.",
    color: "bg-indigo-50",
    tiers: [
      { label: "1 Month", price: 1800 },
      { label: "1 Term", price: 5000 },
    ],
  },
]

export const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Safaricom Foundation Drive",
    category: "corporate",
    organiser: "Safaricom PLC",
    orgInitials: "SF",
    description:
      "Safaricom Foundation's annual giving drive to support flood relief across 12 counties. All donations are matched 1:1 by Safaricom.",
    raised: 1905000,
    target: 1500000,
    percentage: 127,
  },
  {
    id: 2,
    title: "Run for Flood Victims",
    category: "individual",
    organiser: "Peter Otieno",
    orgInitials: "PO",
    description:
      "Peter is running the Nairobi Marathon to raise funds for families displaced by floods in Tana River County.",
    raised: 204000,
    target: 300000,
    percentage: 68,
  },
  {
    id: 3,
    title: "Kibera Community Kitchen",
    category: "community",
    organiser: "Kibera Youth Alliance",
    orgInitials: "KY",
    description:
      "A community-led initiative to set up and run a soup kitchen in Kibera, serving 500 meals daily to vulnerable families.",
    raised: 102000,
    target: 300000,
    percentage: 34,
  },
  {
    id: 4,
    title: "Birthday for a Cause",
    category: "individual",
    organiser: "Amelia Wekesa",
    orgInitials: "AW",
    description:
      "Instead of gifts, Amelia is asking friends and family to donate to KRCS emergency response this birthday.",
    raised: 182000,
    target: 200000,
    percentage: 91,
  },
  {
    id: 5,
    title: "Equity Bank Staff Drive",
    category: "corporate",
    organiser: "Equity Bank Kenya",
    orgInitials: "EB",
    description:
      "Equity Bank employees across all branches are contributing monthly to support child nutrition programmes.",
    raised: 825000,
    target: 1500000,
    percentage: 55,
  },
  {
    id: 6,
    title: "Turkana School Feeding",
    category: "community",
    organiser: "Turkana Teachers Coop",
    orgInitials: "TT",
    description:
      "Teachers in Turkana County have pooled resources to fund school meal programmes for 3 primary schools.",
    raised: 66000,
    target: 150000,
    percentage: 44,
  },
]

export const branches: Branch[] = [
  {
    id: 1,
    name: "Nairobi HQ",
    address: "South C, Bellevue, Red Cross Rd",
    hours: "Mon-Fri 8:00-17:00",
  },
  {
    id: 2,
    name: "Mombasa",
    address: "Moi Avenue, Mombasa CBD",
    hours: "Mon-Fri 8:00-16:30",
  },
  {
    id: 3,
    name: "Kisumu",
    address: "Oginga Odinga St, Kisumu",
    hours: "Mon-Fri 8:00-16:30",
  },
  {
    id: 4,
    name: "Nakuru",
    address: "Kenyatta Avenue, Nakuru",
    hours: "Mon-Fri 8:30-16:30",
  },
  {
    id: 5,
    name: "Eldoret",
    address: "Uganda Road, Eldoret",
    hours: "Mon-Fri 8:30-16:00",
  },
  {
    id: 6,
    name: "Garissa",
    address: "Hospital Road, Garissa",
    hours: "Mon-Fri 9:00-15:30",
  },
  {
    id: 7,
    name: "Nyeri",
    address: "Kimathi Way, Nyeri",
    hours: "Mon-Fri 8:00-16:00",
  },
  {
    id: 8,
    name: "Turkana",
    address: "Lodwar Town Centre",
    hours: "Mon-Fri 9:00-15:00",
  },
]

export const dropOffItems = [
  { id: "food", label: "Food Items", emoji: "\uD83C\uDF5E" },
  { id: "clothing", label: "Clothing", emoji: "\uD83D\uDC55" },
  { id: "water", label: "Water", emoji: "\uD83D\uDCA7" },
  { id: "blankets", label: "Blankets / Sleeping Mats", emoji: "\uD83D\uDECF\uFE0F" },
  { id: "medicine", label: "Medicine / First Aid", emoji: "\uD83D\uDC8A" },
  { id: "hygiene", label: "Hygiene Products", emoji: "\uD83E\uDDFC" },
  { id: "books", label: "Books / School Supplies", emoji: "\uD83D\uDCDA" },
  { id: "other", label: "Other", emoji: "\uD83D\uDCE6" },
]

export function formatKES(amount: number): string {
  return `KES ${amount.toLocaleString("en-KE")}`
}

export function generateRef(prefix = "KRC"): string {
  const year = new Date().getFullYear()
  const num = Math.floor(10000 + Math.random() * 90000)
  return `${prefix}-${year}-${num}`
}

export function getProgressColor(percentage: number) {
  if (percentage > 100) return { text: "text-green-700", bg: "bg-green-600", badge: "Exceeded", badgeBg: "bg-green-100 text-green-800" }
  if (percentage >= 50) return { text: "text-orange-600", bg: "bg-orange-500", badge: "In Progress", badgeBg: "bg-orange-100 text-orange-800" }
  return { text: "text-red-600", bg: "bg-red-500", badge: "Needs Support", badgeBg: "bg-red-100 text-red-700" }
}
