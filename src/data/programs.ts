import { Pill, Heart, Shield, Baby, Stethoscope, Droplets, Syringe, Activity, Users } from "lucide-react";

export interface Program {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  image: string;
  heroImage: string;
  icon: typeof Pill;
  color: string;
  bgColor: string;
  iconColor: string;
  features: string[];
  stats: {
    value: string;
    label: string;
  }[];
  objectives: string[];
  beneficiaries: string[];
  activities: string[];
}

export const programs: Program[] = [
  {
    id: "essential-medicines",
    slug: "essential-medicines",
    title: "Essential Medicines Management",
    shortTitle: "Essential Medicines",
    description: "Ensuring consistent supply and quality of essential medicines across 217 community pharmacies serving rural and urban populations.",
    fullDescription: "The Essential Medicines Management Program is the cornerstone of NWRFHP's healthcare delivery system. We ensure that quality, affordable essential medicines are available to all communities in the North West Region through a network of 217 community pharmacies. Our supply chain management system guarantees consistent stock levels, quality assurance, and accessible pricing aligned with WHO standards.",
    image: "/images/formulary.jpg",
    heroImage: "/images/096A0583.jpg",
    icon: Pill,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    features: [
      "95% medicine availability rate",
      "217 community pharmacies",
      "WHO quality standards",
      "Affordable pricing for all",
      "Regular quality inspections",
      "Supply chain optimization"
    ],
    stats: [
      { value: "217", label: "Community Pharmacies" },
      { value: "95%", label: "Availability Rate" },
      { value: "19", label: "Health Districts" },
      { value: "2.2M", label: "Population Served" }
    ],
    objectives: [
      "Ensure constant availability of essential medicines in all health facilities",
      "Maintain WHO quality standards across the supply chain",
      "Keep medicine prices affordable for all community members",
      "Train pharmacy staff on proper medicine handling and storage",
      "Monitor and evaluate medicine consumption patterns"
    ],
    beneficiaries: [
      "All residents of the North West Region",
      "Public and private health facilities",
      "Community health workers",
      "Pregnant women and children",
      "Patients with chronic conditions"
    ],
    activities: [
      "Centralized procurement of quality medicines",
      "Regular distribution to community pharmacies",
      "Staff training and capacity building",
      "Quality control and assurance testing",
      "Stock management and inventory control",
      "Price monitoring and regulation"
    ]
  },
  {
    id: "community-health",
    slug: "community-health",
    title: "Community Health Services",
    shortTitle: "Community Health",
    description: "Comprehensive primary healthcare services delivered through our extensive network of trained community health workers.",
    fullDescription: "Our Community Health Services program brings healthcare to the doorstep of every community in the North West Region. Through our network of 850+ trained community health workers, we provide essential primary healthcare services, health education, disease prevention, and early referral systems. This program ensures that no community is left behind in accessing quality healthcare.",
    image: "/images/delivery.jpg",
    heroImage: "/images/096A0599.jpg",
    icon: Heart,
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    features: [
      "850+ trained health workers",
      "19 health districts covered",
      "Primary care services",
      "Health education programs",
      "Community outreach initiatives",
      "Early referral systems"
    ],
    stats: [
      { value: "850+", label: "Health Workers" },
      { value: "19", label: "Districts Covered" },
      { value: "500K+", label: "Annual Consultations" },
      { value: "90%", label: "Geographic Coverage" }
    ],
    objectives: [
      "Extend primary healthcare to underserved communities",
      "Train and deploy community health workers",
      "Promote health education and disease prevention",
      "Establish effective referral pathways",
      "Support maternal and child health initiatives"
    ],
    beneficiaries: [
      "Rural and remote communities",
      "Mothers and children under 5",
      "Elderly community members",
      "People with limited mobility",
      "Underserved populations"
    ],
    activities: [
      "Community health worker training",
      "Door-to-door health education",
      "Immunization outreach campaigns",
      "Maternal health monitoring",
      "Disease surveillance and reporting",
      "Community health meetings"
    ]
  },
  {
    id: "universal-health-coverage",
    slug: "universal-health-coverage",
    title: "Universal Health Coverage",
    shortTitle: "Health Coverage",
    description: "Working towards accessible, affordable, and quality healthcare for all residents of the North West Region through comprehensive health insurance and subsidized care.",
    fullDescription: "The Universal Health Coverage (UHC) program is our flagship initiative to ensure that every resident of the North West Region has access to quality healthcare without facing financial hardship. Through government subsidies and community partnerships, we provide coverage for essential health services including maternal care, child health, and treatment for priority diseases.",
    image: "/images/UHC1.jpg",
    heroImage: "/images/logu1.jpg",
    icon: Shield,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    features: [
      "2.2M population served",
      "90% geographic coverage",
      "Subsidized healthcare",
      "Community partnerships",
      "Government backing",
      "Five service packages"
    ],
    stats: [
      { value: "2.2M", label: "Population Covered" },
      { value: "90%", label: "Coverage Rate" },
      { value: "5", label: "Service Packages" },
      { value: "FCFA 6K", label: "Health Voucher Cost" }
    ],
    objectives: [
      "Achieve universal health coverage for all residents",
      "Reduce out-of-pocket health expenditures",
      "Eliminate financial barriers to healthcare access",
      "Ensure equity in health service delivery",
      "Build sustainable health financing mechanisms"
    ],
    beneficiaries: [
      "All residents of the North West Region",
      "Pregnant women (Health Voucher program)",
      "Children aged 0-5 years",
      "Persons living with HIV/AIDS",
      "Dialysis patients"
    ],
    activities: [
      "Health Voucher program for maternal care",
      "Free consultation for children 0-5 years",
      "Subsidized treatment for HIV/TB patients",
      "Hemodialysis services at reduced cost",
      "User fee removal initiatives",
      "Community health insurance schemes"
    ]
  },
  {
    id: "maternal-child-health",
    slug: "maternal-child-health",
    title: "Maternal & Child Health",
    shortTitle: "Maternal Health",
    description: "Comprehensive care for mothers and children including prenatal care, safe delivery services, and child health programs.",
    fullDescription: "Our Maternal and Child Health program focuses on reducing maternal and child mortality through comprehensive care packages. The Health Voucher system provides pregnant women with affordable access to quality antenatal care, safe delivery, and postnatal services. Children under 5 receive free consultations and treatment for common childhood illnesses.",
    image: "/images/voucher.jpg",
    heroImage: "/images/delivery.jpg",
    icon: Baby,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    features: [
      "FCFA 6,000 Health Voucher",
      "Free child consultations",
      "Safe delivery services",
      "4 antenatal visits covered",
      "Emergency obstetric care",
      "42-day postnatal coverage"
    ],
    stats: [
      { value: "6K", label: "FCFA Voucher Cost" },
      { value: "4", label: "ANC Visits Covered" },
      { value: "42", label: "Days Postnatal Care" },
      { value: "0-5", label: "Years Free Care" }
    ],
    objectives: [
      "Reduce maternal mortality rates",
      "Eliminate preventable child deaths",
      "Increase facility-based deliveries",
      "Ensure comprehensive antenatal care",
      "Promote early childhood immunization"
    ],
    beneficiaries: [
      "Pregnant women",
      "Newborns up to 42 days",
      "Children aged 0-5 years",
      "Lactating mothers",
      "Women of reproductive age"
    ],
    activities: [
      "Health Voucher registration and distribution",
      "Antenatal clinic services",
      "Safe delivery and C-section services",
      "Child growth monitoring",
      "Immunization services",
      "Nutrition counseling"
    ]
  },
  {
    id: "disease-management",
    slug: "disease-management",
    title: "Priority Disease Management",
    shortTitle: "Disease Management",
    description: "Specialized programs for HIV/AIDS, Tuberculosis, and other priority diseases with free treatment and comprehensive care.",
    fullDescription: "Our Priority Disease Management program provides comprehensive care for patients with HIV/AIDS, Tuberculosis, and other priority diseases. Through government support and international partnerships, we offer free treatment, counseling, and support services to ensure patients receive continuous care and achieve better health outcomes.",
    image: "/images/096A0583.jpg",
    heroImage: "/images/096A0599.jpg",
    icon: Stethoscope,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    features: [
      "Free HIV/AIDS treatment",
      "TB treatment and follow-up",
      "Counseling services",
      "Support groups",
      "Partner notification",
      "Prevention programs"
    ],
    stats: [
      { value: "Free", label: "Treatment Cost" },
      { value: "100%", label: "ARV Availability" },
      { value: "24/7", label: "Support Available" },
      { value: "All", label: "Districts Covered" }
    ],
    objectives: [
      "Provide free treatment for all HIV/AIDS patients",
      "Achieve TB treatment success rates above 90%",
      "Reduce new HIV infections through prevention",
      "Eliminate mother-to-child HIV transmission",
      "Ensure continuous supply of antiretroviral drugs"
    ],
    beneficiaries: [
      "Persons living with HIV/AIDS",
      "TB patients",
      "HIV-exposed infants",
      "Key populations",
      "Healthcare workers"
    ],
    activities: [
      "Free ARV distribution",
      "TB directly observed therapy",
      "HIV testing and counseling",
      "Prevention of mother-to-child transmission",
      "Community awareness campaigns",
      "Health worker training"
    ]
  },
  {
    id: "hemodialysis",
    slug: "hemodialysis",
    title: "Hemodialysis Services",
    shortTitle: "Hemodialysis",
    description: "Affordable kidney dialysis services through annual subscription packages, making life-saving treatment accessible to all.",
    fullDescription: "The Hemodialysis Services program addresses the critical need for kidney disease treatment in the North West Region. Through our partnership with the government, patients can access dialysis services at the Bamenda Reference Hospital for just FCFA 15,000 annually, compared to the normal cost of FCFA 520,000. This dramatic cost reduction ensures that kidney patients can access life-saving treatment.",
    image: "/images/head-office.jpg",
    heroImage: "/images/096A0583.jpg",
    icon: Droplets,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    features: [
      "FCFA 15,000 annual cost",
      "97% cost reduction",
      "Unlimited sessions",
      "Professional care",
      "Modern equipment",
      "Specialist doctors"
    ],
    stats: [
      { value: "15K", label: "FCFA Annual Cost" },
      { value: "520K", label: "Normal Cost Saved" },
      { value: "97%", label: "Cost Reduction" },
      { value: "365", label: "Days Coverage" }
    ],
    objectives: [
      "Make dialysis affordable for all kidney patients",
      "Reduce mortality from kidney failure",
      "Provide quality dialysis services",
      "Ensure continuous treatment access",
      "Train specialized healthcare staff"
    ],
    beneficiaries: [
      "Patients with chronic kidney disease",
      "Patients requiring acute dialysis",
      "Low-income kidney patients",
      "Patients from rural areas"
    ],
    activities: [
      "Hemodialysis sessions",
      "Patient registration and enrollment",
      "Medical consultations",
      "Laboratory services",
      "Nutrition counseling",
      "Patient support groups"
    ]
  }
];

export const getProgram = (slug: string): Program | undefined => {
  return programs.find(p => p.slug === slug);
};

export const getAllPrograms = (): Program[] => {
  return programs;
};
