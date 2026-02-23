// Program data management system
export interface Program {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: any;
  category: "disaster" | "health" | "youth" | "development" | "special";
  impact: {
    peopleReached: number;
    communitiesServed: number;
    volunteersEngaged: number;
    annualBudget: number;
    keyAchievements: string[];
  };
  stats: {
    projectsCompleted: number;
    peopleTrained: number;
    livesSaved: number;
    communitiesResilient: number;
  };
  successStories: {
    id: string;
    title: string;
    story: string;
    impact: string;
    location: string;
    date: string;
    images: string[];
    beneficiary?: {
      name?: string;
      age?: string;
      story?: string;
      photo?: string;
    };
  }[];
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    coordinator: string;
  };
  getInvolved: {
    volunteer: boolean;
    donate: boolean;
    partner: boolean;
    learnMore: string;
  };
}

// Comprehensive program data
export const programs: Program[] = [
  {
    id: "disaster-management",
    title: "Disaster Management",
    description: "Rapid response to save lives, protect livelihoods, and strengthen recovery from disasters and crises.",
    fullDescription: "Our Disaster Management program is at the forefront of emergency response, providing immediate relief to communities affected by natural disasters, conflicts, and other crises. We coordinate search and rescue operations, provide emergency shelter, distribute relief supplies, and support early recovery efforts. Our teams are trained in international standards and work closely with government agencies and other humanitarian organizations to ensure efficient, coordinated response.",
    icon: "Shield",
    category: "disaster",
    impact: {
      peopleReached: 500000,
      communitiesServed: 1500,
      volunteersEngaged: 15000,
      annualBudget: 250000000,
      keyAchievements: [
        "Responded to 50+ emergencies in 2025",
        "Evacuated 10,000+ people during floods",
        "Established early warning systems in 20 counties"
      ]
    },
    stats: {
      projectsCompleted: 127,
      peopleTrained: 25000,
      livesSaved: 3500,
      communitiesResilient: 500
    },
    successStories: [
      {
        id: "flood-rescue-2025",
        title: "Rapid Flood Response Saves 500 Lives",
        story: "When severe flooding hit Western Kenya, our disaster response team deployed within hours. Through coordinated rescue operations and timely evacuation, we successfully saved over 500 people from rising waters. Our volunteers worked tirelessly around the clock, distributing emergency supplies and providing medical care to affected communities.",
        impact: "500 people rescued, 2,000 provided with emergency shelter",
        location: "Western Kenya",
        date: "2025-04-15",
        images: ["/flood-rescue-1.jpg", "/flood-rescue-2.jpg"],
        beneficiary: {
          name: "Grace Wanjiru",
          age: "34",
          story: "I was trapped in my home with rising waters for 3 days. The Red Cross team found me and carried me to safety. They saved my life and the lives of my three children.",
          photo: "/beneficiary-grace.jpg"
        }
      },
      {
        id: "drought-relief-2025",
        title: "Water Trucking Operation Reaches Remote Communities",
        story: "During the severe drought, our water trucking operation delivered clean water to 50,000 people in remote Turkana communities. Our drivers navigated challenging terrain to reach families who had been walking 10km for water. This operation prevented waterborne diseases and saved countless lives.",
        impact: "50,000 people with daily clean water access",
        location: "Turkana County",
        date: "2025-08-20",
        images: ["/water-trucking-1.jpg", "/water-trucking-2.jpg"],
        beneficiary: {
          name: "John Lokwani",
          age: "45",
          story: "The water trucking program changed our village. Before, we suffered from cholera and children were always sick. Now we have clean water and our children are healthy. I volunteer with the Red Cross to help other communities.",
          photo: "/beneficiary-john.jpg"
        }
      }
    ],
    contactInfo: {
      email: "disaster@redcross.or.ke",
      phone: "+254 719 771 000",
      address: "Kenya Red Cross Headquarters, Westlands, Nairobi",
      coordinator: "Sarah Kimani - Disaster Response Coordinator"
    },
    getInvolved: {
      volunteer: true,
      donate: true,
      partner: true,
      learnMore: "Learn disaster preparedness and response techniques"
    }
  },
  {
    id: "health-services",
    title: "Health Services",
    description: "Providing affordable, accessible and equitable community-based health care across Kenya.",
    fullDescription: "Our Health Services program focuses on making quality healthcare accessible to all Kenyans, especially in underserved communities. We operate health clinics, mobile medical units, and community health worker programs. Our services include maternal and child health, immunization campaigns, health education, and disease prevention programs. We work closely with the Ministry of Health to complement national health priorities.",
    icon: "Heart",
    category: "health",
    impact: {
      peopleReached: 1000000,
      communitiesServed: 300,
      volunteersEngaged: 8000,
      annualBudget: 400000000,
      keyAchievements: [
        "Provided healthcare to 1M+ Kenyans annually",
        "Reduced maternal mortality by 25% in target areas",
        "Vaccinated 500,000+ children against preventable diseases"
      ]
    },
    stats: {
      projectsCompleted: 89,
      peopleTrained: 15000,
      livesSaved: 8500,
      communitiesResilient: 300
    },
    successStories: [
      {
        id: "maternal-health-2025",
        title: "Mobile Clinic Saves Mother and Child",
        story: "Our mobile health clinic in Samburu County provides essential maternal and child health services to remote communities. Last month, our team successfully delivered a healthy baby and provided critical care to a mother with complications, saving both lives during a difficult home birth.",
        impact: "Safe delivery for mother and child in remote area",
        location: "Samburu County",
        date: "2025-09-10",
        images: ["/maternal-health-1.jpg"],
        beneficiary: {
          name: "Aisha Mohamed",
          age: "28",
          story: "I had complications during my pregnancy. The Red Cross mobile clinic came to my village and helped me deliver safely. Without them, I don't know what would have happened to me and my baby.",
          photo: "/beneficiary-aisha.jpg"
        }
      }
    ],
    contactInfo: {
      email: "health@redcross.or.ke",
      phone: "+254 703 037 000",
      address: "Kenya Red Cross Headquarters, Westlands, Nairobi",
      coordinator: "Dr. Grace Njoroge - Health Services Director"
    },
    getInvolved: {
      volunteer: true,
      donate: true,
      partner: true,
      learnMore: "Explore health programs and volunteer opportunities"
    }
  },
  {
    id: "youth-development",
    title: "Youth Development",
    description: "Empowering young people through volunteerism and sustainable action programs.",
    fullDescription: "Our Youth Development program engages young Kenyans in meaningful community service and leadership development. Through You-Red spaces, youth clubs, and training programs, we empower young people to become agents of positive change. Our programs focus on civic engagement, peacebuilding, environmental conservation, and skills development.",
    icon: "Users",
    category: "youth",
    impact: {
      peopleReached: 50000,
      communitiesServed: 200,
      volunteersEngaged: 25000,
      annualBudget: 150000000,
      keyAchievements: [
        "Established 500+ You-Red clubs in schools",
        "Trained 10,000+ youth leaders",
        "Implemented 200+ community service projects"
      ]
    },
    stats: {
      projectsCompleted: 156,
      peopleTrained: 30000,
      livesSaved: 1200,
      communitiesResilient: 200
    },
    successStories: [
      {
        id: "youth-leadership-2025",
        title: "Youth Leader Transforms Community",
        story: "Kevin Ochieng, a graduate of our youth leadership program, mobilized his peers to address water scarcity in his village. Through his training, he established a water conservation project that now serves 5,000 people and has created a model for sustainable community development.",
        impact: "5,000 people with sustainable water access",
        location: "Siaya County",
        date: "2025-07-15",
        images: ["/youth-project-1.jpg", "/youth-project-2.jpg"],
        beneficiary: {
          name: "Kevin Ochieng",
          age: "22",
          story: "The Red Cross gave me skills and confidence. Now I'm leading change in my community and helping other young people do the same.",
          photo: "/beneficiary-kevin.jpg"
        }
      }
    ],
    contactInfo: {
      email: "youth@redcross.or.ke",
      phone: "+254 703 037 000",
      address: "Kenya Red Cross Headquarters, Westlands, Nairobi",
      coordinator: "David Mutiso - Youth Development Director"
    },
    getInvolved: {
      volunteer: true,
      donate: true,
      partner: false,
      learnMore: "Join youth programs and develop leadership skills"
    }
  },
  {
    id: "national-development",
    title: "National Development",
    description: "Building organizational capacity across branches and volunteer networks nationwide.",
    fullDescription: "Our National Development program strengthens the Kenya Red Cross Society's institutional capacity to serve communities effectively. We focus on branch development, volunteer management, resource mobilization, and partnership building. This ensures we have the infrastructure and systems to deliver our humanitarian mandate across all 47 counties.",
    icon: "Building",
    category: "development",
    impact: {
      peopleReached: 47000,
      communitiesServed: 47,
      volunteersEngaged: 100000,
      annualBudget: 100000000,
      keyAchievements: [
        "Strengthened all 47 county branches",
        "Trained 50,000+ volunteers",
        "Established national resource mobilization system"
      ]
    },
    stats: {
      projectsCompleted: 45,
      peopleTrained: 50000,
      livesSaved: 2500,
      communitiesResilient: 47
    },
    successStories: [
      {
        id: "branch-development-2025",
        title: "Branch Transformation Improves Emergency Response",
        story: "The Mandera County branch transformation project equipped our local volunteers with advanced disaster response skills and equipment. When recent floods struck, the branch was able to respond within 30 minutes, saving critical time and lives. This demonstrates how investing in local capacity building directly translates to saved lives.",
        impact: "30-minute response time in flood emergencies",
        location: "Mandera County",
        date: "2025-11-20",
        images: ["/branch-training-1.jpg", "/branch-training-2.jpg"],
        beneficiary: {
          name: "Fatuma Noor",
          age: "35",
          story: "I've been a Red Cross volunteer for 10 years. The new training and equipment has made us more effective. We're now saving more lives in our community.",
          photo: "/beneficiary-fatuma.jpg"
        }
      }
    ],
    contactInfo: {
      email: "development@redcross.or.ke",
      phone: "+254 703 037 000",
      address: "Kenya Red Cross Headquarters, Westlands, Nairobi",
      coordinator: "Samuel Karanja - National Development Director"
    },
    getInvolved: {
      volunteer: true,
      donate: true,
      partner: true,
      learnMore: "Support organizational development and capacity building"
    }
  },
  {
    id: "special-programmes",
    title: "Special Programmes",
    description: "Targeted programmes addressing the unique needs of vulnerable communities across Kenya.",
    fullDescription: "Our Special Programs target specific vulnerable groups and address unique challenges faced by different communities. These include gender-based violence prevention, social inclusion programs, livelihood support, and protection services. We work closely with community leaders and stakeholders to ensure our programs are culturally appropriate and effectively address the specific needs of each community.",
    icon: "Sparkles",
    category: "special",
    impact: {
      peopleReached: 200000,
      communitiesServed: 100,
      volunteersEngaged: 5000,
      annualBudget: 200000000,
      keyAchievements: [
        "Established 200+ community protection committees",
        "Supported 50,000+ people with disabilities",
        "Implemented livelihood support for 15,000+ households"
      ]
    },
    stats: {
      projectsCompleted: 78,
      peopleTrained: 8000,
      livesSaved: 1800,
      communitiesResilient: 100
    },
    successStories: [
      {
        id: "gbv-prevention-2025",
        title: "Community Protection Program Reduces Gender-Based Violence",
        story: "Our community protection program in Garissa has successfully reduced gender-based violence cases by 60% through community engagement, education, and support services. Local leaders credit the program with creating safer communities where women and girls can thrive without fear.",
        impact: "60% reduction in GBV cases, 5,000+ people reached",
        location: "Garissa County",
        date: "2025-06-10",
        images: ["/gbv-program-1.jpg"],
        beneficiary: {
          name: "Halima Abdi",
          age: "42",
          story: "The Red Cross program changed our community. Women now walk safely and girls can go to school. Our children have a better future.",
          photo: "/beneficiary-halima.jpg"
        }
      }
    ],
    contactInfo: {
      email: "special@redcross.or.ke",
      phone: "+254 703 037 000",
      address: "Kenya Red Cross Headquarters, Westlands, Nairobi",
      coordinator: "Joyce Mwaura - Special Programs Director"
    },
    getInvolved: {
      volunteer: true,
      donate: true,
      partner: true,
      learnMore: "Support vulnerable communities and inclusion programs"
    }
  }
];

// Utility functions
export const getProgramById = (id: string): Program | undefined => {
  return programs.find(program => program.id === id);
};

export const getProgramsByCategory = (category: string): Program[] => {
  return programs.filter(program => program.category === category);
};

export const getFeaturedPrograms = (): Program[] => {
  return programs.filter(program => program.impact.peopleReached > 100000);
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
};
