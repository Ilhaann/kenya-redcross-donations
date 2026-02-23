// Peer-to-Peer Fundraising data structures
export interface P2PFundraiser {
  id: string;
  title: string;
  description: string;
  fullStory: string;
  image: string;
  goal: {
    amount: number;
    currency: string;
    deadline: string;
    raised: number;
    donors: number;
    targetAudience: string;
  };
  stats: {
    totalRaised: number;
    totalDonors: number;
    averageDonation: number;
    daysActive: number;
    socialShares: number;
    teamMembers: number;
    updates: number;
  };
  organizer: {
    id: string;
    name: string;
    email: string;
    phone: string;
    avatar: string;
    bio: string;
    location: string;
    socialLinks: {
      website?: string;
      facebook?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  };
  updates: {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
    images: string[];
    impact: string;
  }[];
  teamMembers: {
    id: string;
    name: string;
    role: string;
    avatar: string;
    bio: string;
    joinedDate: string;
    skills: string[];
  }[];
  supporters: {
    id: string;
    name: string;
    amount: number;
    message: string;
    date: string;
    isAnonymous: boolean;
  }[];
  getInvolved: {
    volunteer: boolean;
    donate: boolean;
    share: boolean;
    follow: boolean;
  };
  rewards: {
    id: string;
    title: string;
    description: string;
    requirement: string;
    icon: string;
    count: number;
  };
  socialProof: {
    id: string;
    type: "photo" | "video" | "testimonial";
      content: string;
      author?: string;
      date: string;
      media?: string;
      url?: string;
    };
  };
}

// Mock P2P fundraising data
export const p2pFundraisers: P2PFundraiser[] = [
  {
    id: "clean-water-initiative",
    title: "Clean Water Initiative",
    description: "Join our community-led initiative to bring clean water to drought-affected communities in Turkana. Every donation helps provide sustainable water solutions for families in need.",
    fullStory: "When severe drought struck Turkana County, communities were left without access to clean water. Our P2P fundraising campaign mobilized 50 volunteers who raised awareness and funds. Through community engagement and transparent reporting, we successfully installed water purification systems serving 5,000 people daily.",
    image: "/p2p-water-campaign.jpg",
    goal: {
      amount: 500000,
      currency: "KES",
      deadline: "2026-03-31",
      raised: 325000,
      donors: 156,
      targetAudience: "General public, corporate partners"
    },
    stats: {
      totalRaised: 325000,
      totalDonors: 156,
      averageDonation: 2083,
      daysActive: 45,
      socialShares: 234,
      teamMembers: 50,
      updates: 12
    },
    organizer: {
      id: "mary-wanjiru",
      name: "Mary Wanjiru",
      email: "mary.wanjiru@redcross.or.ke",
      phone: "+254 703 037 000",
      avatar: "/organizer-mary.jpg",
      bio: "Community mobilizer with 10+ years experience in humanitarian work.",
      location: "Turkana, Kenya",
      socialLinks: {
        facebook: "https://facebook.com/kenyaredcross",
        twitter: "@kenyaredcross"
      }
    },
    getInvolved: {
      volunteer: true,
      donate: true,
      share: true,
      follow: true
    }
  },
  {
    id: "education-for-all",
    title: "Education for All Children",
    description: "Support education access for vulnerable children in remote communities. This campaign provides school supplies, learning materials, and teacher training to ensure no child is left behind due to poverty or crisis.",
    fullStory: "In remote areas of Samburu, many children were missing out on education due to distance and poverty. Our P2P campaign established temporary learning centers and provided essential supplies. Through community involvement, we've helped 200 children continue their education and provided hope for a brighter future.",
    image: "/p2p-education.jpg",
    goal: {
      amount: 200000,
      currency: "KES",
      deadline: "2026-06-30",
      raised: 85000,
      donors: 89,
      targetAudience: "Education supporters, local communities"
    },
    stats: {
      totalRaised: 85000,
      totalDonors: 89,
      averageDonation: 954,
      daysActive: 60,
      socialShares: 156,
      teamMembers: 25,
      updates: 8
    },
    organizer: {
      id: "james-ndeti",
      name: "James Ndeti",
      email: "james.ndeti@redcross.or.ke",
      phone: "+254 703 037 000",
      avatar: "/organizer-james.jpg",
      bio: "Education specialist passionate about ensuring every child has access to quality education.",
      location: "Samburu, Kenya",
      socialLinks: {
        linkedin: "https://linkedin.com/in/jamesndeti"
      }
    },
    getInvolved: {
      volunteer: true,
      donate: true,
      share: true,
      follow: false
    }
  },
  {
    id: "marathon-for-cause",
    title: "Nairobi Marathon Team",
    description: "Run the Nairobi Marathon to raise funds for our disaster response programs. Each runner commits to raise funds that directly support emergency relief efforts across Kenya.",
    image: "/p2p-marathon.jpg",
    goal: {
      amount: 1000000,
      currency: "KES",
      deadline: "2026-03-15",
      raised: 750000,
      donors: 234,
      targetAudience: "Athletes, fitness enthusiasts"
    },
    stats: {
      totalRaised: 750000,
      totalDonors: 234,
      averageDonation: 3205,
      daysActive: 30,
      socialShares: 567,
      teamMembers: 12,
      updates: 15
    },
    organizer: {
      id: "samuel-karanja",
      name: "Samuel Karanja",
      email: "samuel.karanja@redcross.or.ke",
      phone: "+254 703 037 000",
      avatar: "/organizer-samuel.jpg",
      bio: "Marathon runner and Red Cross volunteer coordinating fundraising efforts.",
      location: "Nairobi, Kenya",
      socialLinks: {
        instagram: "@nairobi_marathon_team"
      }
    },
    getInvolved: {
      volunteer: false,
      donate: true,
      share: true,
      follow: false
    }
  },
  {
    id: "birthday-campaign",
    title: "Birthday Fundraiser",
    description: "Instead of gifts, donate your birthday to support our humanitarian work. Start a P2P fundraising campaign and ask friends and family to contribute to your chosen Red Cross program.",
    image: "/p2p-birthday.jpg",
    goal: {
      amount: 50000,
      currency: "KES",
      deadline: "2026-02-28",
      raised: 42500,
      donors: 178,
      targetAudience: "Friends, family, colleagues"
    },
    stats: {
      totalRaised: 42500,
      totalDonors: 178,
      averageDonation: 239,
      daysActive: 30,
      socialShares: 89,
      teamMembers: 8,
      updates: 6
    },
    organizer: {
      id: "fatuma-noor",
      name: "Fatuma Noor",
      email: "fatuma.noor@redcross.or.ke",
      phone: "+254 703 037 000",
      avatar: "/organizer-fatuma.jpg",
      bio: "Community leader passionate about mobilizing resources for humanitarian causes.",
      location: "Nairobi, Kenya",
      socialLinks: {
        twitter: "@fatuma_noor"
      }
    },
    getInvolved: {
      volunteer: true,
      donate: true,
      share: true,
      follow: true
    }
  }
];

// Utility functions
export const getP2PFundraiserById = (id: string): P2PFundraiser | undefined => {
  return p2pFundraisers.find(fundraiser => fundraiser.id === id);
};

export const getP2PFundraisersByCategory = (category: string): P2PFundraiser[] => {
  return p2pFundraisers.filter(fundraiser => fundraiser.targetAudience.toLowerCase().includes(category));
};

export const getFeaturedP2PFundraisers = (): P2PFundraiser[] => {
  return p2pFundraisers.filter(fundraiser => fundraiser.stats.totalRaised > 100000);
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

export const getDaysRemaining = (deadline: string): number => {
  const end = new Date(deadline);
  const now = new Date();
  const diffTime = end.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
};
