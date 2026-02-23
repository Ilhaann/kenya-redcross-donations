// Campaign data management system
export interface Campaign {
  id: string;
  title: string;
  description: string;
  fullStory?: string;
  image: string;
  tag: "URGENT" | "CRITICAL" | "ONGOING" | "NEW" | "COMPLETED";
  category: "emergency" | "health" | "education" | "shelter" | "water" | "nutrition" | "fundraising";
  raised: number;
  goal: number;
  donors: number;
  daysLeft: number;
  startDate: string;
  endDate?: string;
  location: string;
  impact: string;
  updates?: CampaignUpdate[];
  featured?: boolean;
  organization?: string;
  contactInfo?: {
    email: string;
    phone: string;
  };
}

export interface CampaignUpdate {
  id: string;
  date: string;
  title: string;
  content: string;
  author: string;
  images?: string[];
}

export interface EmergencyAlert {
  id: string;
  type: "drought" | "flood" | "conflict" | "disease" | "other";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  description: string;
  affectedAreas: string[];
  peopleAffected: number;
  date: string;
  status: "active" | "monitoring" | "resolved";
  responseActions: string[];
  lastUpdated: string;
}

// Mock dynamic campaign data
export const campaigns: Campaign[] = [
  {
    id: "drought-water-2026",
    title: "Clean Water for Drought-Hit Communities",
    description: "Provide clean drinking water to 300,000 households in arid counties through water trucking and source rehabilitation.",
    fullStory: "The severe drought affecting Turkana, Mandera, and Samburu counties has created an unprecedented water crisis. Over 300,000 households are currently without access to clean drinking water, forcing families to travel long distances and rely on contaminated sources. Your support helps us deploy water trucks, rehabilitate existing wells, and distribute water purification tablets to save lives.",
    image: "/campaign-water.jpg",
    tag: "URGENT",
    category: "water",
    raised: 12500000,
    goal: 45000000,
    donors: 2340,
    daysLeft: 28,
    startDate: "2026-01-15",
    endDate: "2026-03-15",
    location: "Turkana, Mandera, Samburu Counties",
    impact: "300,000 people with clean water access",
    featured: true,
    updates: [
      {
        id: "update-1",
        date: "2026-02-10",
        title: "Water Trucks Deployed to Turkana",
        content: "5 water trucks now serving 50,000 people daily in Turkana North. Community response has been overwhelming with volunteers helping distribute water.",
        author: "Emergency Response Team",
        images: ["/water-truck-1.jpg", "/water-truck-2.jpg"]
      },
      {
        id: "update-2", 
        date: "2026-02-08",
        title: "Well Rehabilitation Progress",
        content: "3 wells successfully rehabilitated in Samburu, now serving 15,000 people. Local communities trained in basic maintenance.",
        author: "Field Operations"
      }
    ]
  },
  {
    id: "child-nutrition-2026",
    title: "Child Nutrition & Maternal Health",
    description: "Support nutrition services for 784,000 children and 134,000 pregnant & breastfeeding women facing malnutrition.",
    fullStory: "Malnutrition rates have reached critical levels in 10 drought-affected counties. 784,000 children under 5 are acutely malnourished, while 134,000 pregnant and breastfeeding women need urgent nutritional support. We're establishing therapeutic feeding centers, distributing fortified foods, and training community health workers.",
    image: "/campaign-nutrition.jpg",
    tag: "CRITICAL",
    category: "nutrition",
    raised: 8200000,
    goal: 30000000,
    donors: 1856,
    daysLeft: 45,
    startDate: "2026-01-01",
    endDate: "2026-03-30",
    location: "10 affected counties",
    impact: "918,000 women and children receiving nutrition support",
    featured: true,
    updates: [
      {
        id: "nutrition-update-1",
        date: "2026-02-12",
        title: "Therapeutic Centers Opened",
        content: "4 new therapeutic feeding centers opened, treating 500 severely malnourished children. Recovery rates at 85%.",
        author: "Dr. Grace Njoroge"
      }
    ]
  },
  {
    id: "emergency-food-2026",
    title: "Emergency Food Relief",
    description: "Distribute essential food supplies to families facing severe food insecurity across drought-stricken regions.",
    fullStory: "With crops failing for the third consecutive season, 150,000 families are facing severe food insecurity. We're distributing emergency food baskets containing maize, beans, oil, and salt to sustain families until the next harvest.",
    image: "/campaign-food.jpg",
    tag: "CRITICAL",
    category: "emergency",
    raised: 5600000,
    goal: 25000000,
    donors: 1234,
    daysLeft: 15,
    startDate: "2026-02-01",
    endDate: "2026-02-28",
    location: "Garissa, Isiolo, Marsabit",
    impact: "150,000 families with food security",
    featured: true
  },
  {
    id: "shelter-support-2026",
    title: "Shelter & Housing Support",
    description: "Provide temporary shelter and housing materials for families displaced by climate-related disasters.",
    fullStory: "Extreme weather events have displaced over 5,000 families. We're providing emergency shelter kits, temporary housing materials, and supporting communities to rebuild resilient homes that can withstand future climate shocks.",
    image: "/campaign-shelter.jpg",
    tag: "ONGOING",
    category: "shelter",
    raised: 3400000,
    goal: 15000000,
    donors: 892,
    daysLeft: 60,
    startDate: "2026-01-10",
    endDate: "2026-03-10",
    location: "Coastal and Eastern regions",
    impact: "2,500 households with shelter support",
    featured: false
  },
  {
    id: "education-emergencies-2026",
    title: "Education in Emergencies",
    description: "Ensure continued education for children affected by emergencies through temporary learning centers.",
    fullStory: "When disasters strike, education is often the first service disrupted. We're establishing temporary learning centers, providing school supplies, and training teachers to ensure 5,000 children can continue their education during crises.",
    image: "/campaign-education.jpg",
    tag: "NEW",
    category: "education",
    raised: 1200000,
    goal: 8000000,
    donors: 456,
    daysLeft: 90,
    startDate: "2026-02-15",
    endDate: "2026-05-15",
    location: "Multiple counties",
    impact: "5,000 students continuing education",
    featured: false
  },
  {
    id: "medical-response-2026",
    title: "Medical Emergency Response",
    description: "Deploy medical teams and supplies to remote areas with limited healthcare access.",
    fullStory: "Remote communities in Northern Kenya have virtually no access to healthcare. We're deploying mobile medical clinics, training community health workers, and establishing telemedicine connections to serve 100,000 people who would otherwise go without medical care.",
    image: "/campaign-medical.jpg",
    tag: "ONGOING",
    category: "health",
    raised: 6800000,
    goal: 20000000,
    donors: 1567,
    daysLeft: 35,
    startDate: "2026-01-20",
    endDate: "2026-03-25",
    location: "Northern Kenya",
    impact: "100,000 patients receiving medical care",
    featured: false
  }
];

// Emergency alerts data
export const emergencyAlerts: EmergencyAlert[] = [
  {
    id: "drought-alert-2026",
    type: "drought",
    severity: "critical",
    title: "Severe Drought Alert - 10 Counties Affected",
    description: "Extreme drought conditions affecting over 2 million people across 10 counties. Water sources depleted, livestock dying, food security at crisis levels.",
    affectedAreas: ["Turkana", "Mandera", "Samburu", "Garissa", "Isiolo", "Marsabit", "Wajir", "Tana River", "West Pokot", "Baringo"],
    peopleAffected: 2000000,
    date: "2026-01-15",
    status: "active",
    responseActions: [
      "Water trucking operations active",
      "Emergency food distribution ongoing", 
      "Nutrition centers established",
      "Medical teams deployed",
      "Livestock support programs initiated"
    ],
    lastUpdated: "2026-02-18"
  },
  {
    id: "flood-watch-2026",
    type: "flood",
    severity: "medium",
    title: "Flood Watch - Coastal Region",
    description: "Heavy rainfall forecast for coastal region. Potential flooding in low-lying areas. Monitoring situation closely.",
    affectedAreas: ["Mombasa", "Kilifi", "Kwale", "Taita Taveta"],
    peopleAffected: 50000,
    date: "2026-02-10",
    status: "monitoring",
    responseActions: [
      "Emergency teams on standby",
      "Rescue equipment prepositioned",
      "Evacuation centers identified",
      "Community awareness campaigns active"
    ],
    lastUpdated: "2026-02-18"
  }
];

// Campaign utility functions
export const getCampaignById = (id: string): Campaign | undefined => {
  return campaigns.find(campaign => campaign.id === id);
};

export const getCampaignsByCategory = (category: string): Campaign[] => {
  return campaigns.filter(campaign => campaign.category === category);
};

export const getFeaturedCampaigns = (): Campaign[] => {
  return campaigns.filter(campaign => campaign.featured);
};

export const getUrgentCampaigns = (): Campaign[] => {
  return campaigns.filter(campaign => campaign.tag === "URGENT" || campaign.tag === "CRITICAL");
};

export const getActiveCampaigns = (): Campaign[] => {
  return campaigns.filter(campaign => campaign.daysLeft > 0);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const getProgressPercentage = (raised: number, goal: number): number => {
  return Math.min((raised / goal) * 100, 100);
};

export const getDaysRemaining = (endDate: string): number => {
  const end = new Date(endDate);
  const now = new Date();
  const diffTime = end.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
};
