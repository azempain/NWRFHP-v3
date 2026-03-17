import {
  Pill,
  Heart,
  Shield,
  Baby,
  Stethoscope,
  Droplets,
  GraduationCap,
  Building2,
  Megaphone,
  ClipboardCheck,
  Syringe,
  FileCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

// ============================================
// TYPES
// ============================================

export interface Program {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  image: string;
  heroImage: string;
  icon: LucideIcon;
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
  sectionId: string;
}

export interface Section {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  acronym: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
  image: string;
  heroImage: string;
  programs: Program[];
}

// ============================================
// SECTIONS DATA
// ============================================

export const sections: Section[] = [
  {
    id: "ppm",
    slug: "pharmaceutical-product-management",
    title: "Pharmaceutical Product Management",
    shortTitle: "Pharmaceutical Management",
    acronym: "PPM",
    description:
      "Ensuring consistent supply, storage, and quality control of essential medicines across 430+ health facilities in the North West Region.",
    fullDescription:
      "The Pharmaceutical Product Management (PPM) section is the backbone of NWRFHP's healthcare delivery system. We manage the entire pharmaceutical supply chain from procurement to distribution, ensuring that quality medicines reach every corner of the North West Region. Our comprehensive approach includes centralized procurement, secure storage, inventory control, and rigorous quality assurance protocols aligned with WHO standards.",
    icon: Pill,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    gradientFrom: "blue-500",
    gradientTo: "blue-600",
    image: "/images/formulary.jpg",
    heroImage: "/images/096A0583.jpg",
    programs: [
      {
        id: "essential-medicines",
        slug: "essential-medicines",
        title: "Essential Medicines Supply",
        shortTitle: "Essential Medicines",
        description:
          "Ensuring consistent supply of quality essential medicines across 430+ community pharmacies serving rural and urban populations.",
        fullDescription:
          "The Essential Medicines Supply Program is the cornerstone of NWRFHP's healthcare delivery system. We ensure that quality, affordable essential medicines are available to all communities in the North West Region through a network of 430+ community pharmacies. Our supply chain management system guarantees consistent stock levels, quality assurance, and accessible pricing aligned with WHO standards.",
        image: "/images/formulary.jpg",
        heroImage: "/images/096A0583.jpg",
        icon: Pill,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        features: [
          "95% medicine availability rate",
          "430+ community pharmacies",
          "WHO quality standards",
          "Affordable pricing for all",
          "Regular quality inspections",
          "Supply chain optimization",
        ],
        stats: [
          { value: "430+", label: "Health Facilities" },
          { value: "95%", label: "Availability Rate" },
          { value: "21", label: "Health Districts" },
          { value: "2.2M", label: "Population Served" },
        ],
        objectives: [
          "Ensure constant availability of essential medicines in all health facilities",
          "Maintain WHO quality standards across the supply chain",
          "Keep medicine prices affordable for all community members",
          "Train pharmacy staff on proper medicine handling and storage",
          "Monitor and evaluate medicine consumption patterns",
        ],
        beneficiaries: [
          "All residents of the North West Region",
          "Public and private health facilities",
          "Community health workers",
          "Pregnant women and children",
          "Patients with chronic conditions",
        ],
        activities: [
          "Centralized procurement of quality medicines",
          "Regular distribution to community pharmacies",
          "Staff training and capacity building",
          "Quality control and assurance testing",
          "Stock management and inventory control",
          "Price monitoring and regulation",
        ],
        sectionId: "ppm",
      },
      {
        id: "priority-disease-management",
        slug: "priority-disease-management",
        title: "Priority Disease Management",
        shortTitle: "Disease Management",
        description:
          "Free supply, storage, inventory control, and supervision of pharmacies for HIV, TB, and Neglected Tropical Diseases medications.",
        fullDescription:
          "Our Priority Disease Management program ensures the complete pharmaceutical support for treating HIV/AIDS, Tuberculosis, and Neglected Tropical Diseases (NTDs). We provide free supply of medications, secure storage facilities, comprehensive inventory control systems, and regular supervision of pharmacies handling these critical medicines. This program is vital to achieving disease elimination goals in the region.",
        image: "/images/096A0583.jpg",
        heroImage: "/images/096A0599.jpg",
        icon: Syringe,
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
        features: [
          "Free medication supply",
          "Secure storage facilities",
          "Real-time inventory tracking",
          "Regular pharmacy supervision",
          "Cold chain maintenance",
          "Zero stockout policy",
        ],
        stats: [
          { value: "Free", label: "Treatment Cost" },
          { value: "100%", label: "ARV Availability" },
          { value: "21", label: "Districts Covered" },
          { value: "0", label: "Target Stockouts" },
        ],
        objectives: [
          "Ensure uninterrupted supply of HIV, TB, and NTD medications",
          "Maintain proper storage conditions for all sensitive medications",
          "Implement robust inventory control systems",
          "Provide regular supervision and support to pharmacies",
          "Achieve zero stockouts for priority disease medications",
        ],
        beneficiaries: [
          "Persons living with HIV/AIDS",
          "TB patients",
          "Patients with Neglected Tropical Diseases",
          "Health facilities handling priority disease medications",
          "Pharmacy staff requiring training",
        ],
        activities: [
          "Procurement and distribution of free medications",
          "Temperature-controlled storage management",
          "Monthly inventory reconciliation",
          "Quarterly pharmacy supervision visits",
          "Staff training on medication handling",
          "Reporting and data management",
        ],
        sectionId: "ppm",
      },
      {
        id: "quality-control",
        slug: "quality-control",
        title: "Enhancing Quality of Health Control",
        shortTitle: "Quality Control",
        description:
          "Rigorous quality assurance protocols ensuring all medicines meet international standards before reaching patients.",
        fullDescription:
          "The Quality Control program ensures that every medicine distributed through NWRFHP meets stringent international quality standards. Our team conducts regular quality assessments, laboratory testing, and facility inspections to protect patients from substandard or counterfeit medications. This program is essential in maintaining trust in the healthcare system and ensuring patient safety.",
        image: "/images/head-office.jpg",
        heroImage: "/images/096A0583.jpg",
        icon: FileCheck,
        color: "from-indigo-500 to-indigo-600",
        bgColor: "bg-indigo-50",
        iconColor: "text-indigo-600",
        features: [
          "Laboratory testing protocols",
          "Facility inspection programs",
          "Counterfeit detection systems",
          "Batch tracking and traceability",
          "WHO prequalification standards",
          "Regular quality audits",
        ],
        stats: [
          { value: "100%", label: "Medicines Tested" },
          { value: "WHO", label: "Standards Applied" },
          { value: "Monthly", label: "Quality Audits" },
          { value: "0", label: "Tolerance for Substandard" },
        ],
        objectives: [
          "Test all incoming medicines before distribution",
          "Maintain WHO prequalification standards",
          "Detect and prevent counterfeit medications",
          "Ensure proper storage conditions in all facilities",
          "Train staff on quality assurance protocols",
        ],
        beneficiaries: [
          "All patients receiving medications",
          "Health facilities and pharmacies",
          "Healthcare providers",
          "The general public",
          "Regulatory authorities",
        ],
        activities: [
          "Pre-distribution quality testing",
          "Random sampling and laboratory analysis",
          "Facility compliance inspections",
          "Staff training on quality standards",
          "Documentation and reporting",
          "Corrective action implementation",
        ],
        sectionId: "ppm",
      },
    ],
  },
  {
    id: "hpps",
    slug: "health-promotion-partnership-support",
    title: "Health Promotion and Partnership Support",
    shortTitle: "Health Promotion",
    acronym: "HPPS",
    description:
      "Building healthcare capacity through training programs, decentralized healthcare structures, and community awareness initiatives.",
    fullDescription:
      "The Health Promotion and Partnership Support (HPPS) section focuses on strengthening the healthcare ecosystem through comprehensive training programs, decentralized service delivery structures, and community-level health awareness campaigns. We believe that sustainable healthcare requires empowered communities and well-trained health workers working together in effective partnerships.",
    icon: Heart,
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    gradientFrom: "rose-500",
    gradientTo: "rose-600",
    image: "/images/delivery.jpg",
    heroImage: "/images/096A0599.jpg",
    programs: [
      {
        id: "training-refresher-courses",
        slug: "training-refresher-courses",
        title: "Training and Refresher Courses",
        shortTitle: "Training Programs",
        description:
          "Comprehensive training and refresher courses for Pharmacy Assistants (PA), Pharmacy Technicians (PT), and healthcare workers.",
        fullDescription:
          "Our Training and Refresher Courses program ensures that all healthcare workers in the region maintain up-to-date knowledge and skills. We provide initial training for new Pharmacy Assistants and Technicians, as well as regular refresher courses to keep existing staff current with best practices, new medications, and evolving healthcare protocols. This continuous education approach is fundamental to maintaining service quality.",
        image: "/images/delivery.jpg",
        heroImage: "/images/096A0599.jpg",
        icon: GraduationCap,
        color: "from-amber-500 to-amber-600",
        bgColor: "bg-amber-50",
        iconColor: "text-amber-600",
        features: [
          "PA and PT certification programs",
          "Annual refresher courses",
          "Practical skills workshops",
          "Online learning modules",
          "Competency assessments",
          "Continuing education credits",
        ],
        stats: [
          { value: "850+", label: "Health Workers Trained" },
          { value: "Annual", label: "Refresher Frequency" },
          { value: "21", label: "Districts Covered" },
          { value: "95%", label: "Completion Rate" },
        ],
        objectives: [
          "Train all pharmacy assistants and technicians to certification level",
          "Provide annual refresher courses to maintain competency",
          "Update staff on new medications and protocols",
          "Build capacity for quality pharmaceutical services",
          "Assess and certify competency levels",
        ],
        beneficiaries: [
          "Pharmacy Assistants (PA)",
          "Pharmacy Technicians (PT)",
          "Community health workers",
          "Health facility managers",
          "New healthcare recruits",
        ],
        activities: [
          "Initial certification training programs",
          "Annual refresher course delivery",
          "Practical skills workshops",
          "Competency testing and assessment",
          "Training material development",
          "Trainer capacity building",
        ],
        sectionId: "hpps",
      },
      {
        id: "decentralization-healthcare",
        slug: "decentralization-healthcare",
        title: "Decentralisation of Healthcare",
        shortTitle: "Decentralisation",
        description:
          "Establishing dialogue structures and community health committees to bring healthcare decision-making closer to the people.",
        fullDescription:
          "The Decentralisation of Healthcare program establishes effective dialogue structures that connect communities with healthcare services. Through community health committees, district health management teams, and participatory planning processes, we ensure that healthcare services respond to local needs and priorities. This bottom-up approach empowers communities to take ownership of their health outcomes.",
        image: "/images/head-office.jpg",
        heroImage: "/images/delivery.jpg",
        icon: Building2,
        color: "from-teal-500 to-teal-600",
        bgColor: "bg-teal-50",
        iconColor: "text-teal-600",
        features: [
          "Community health committees",
          "District dialogue structures",
          "Participatory planning processes",
          "Local health governance",
          "Community feedback mechanisms",
          "Partnership coordination",
        ],
        stats: [
          { value: "21", label: "Health Districts" },
          { value: "500+", label: "Health Committees" },
          { value: "Monthly", label: "Dialogue Meetings" },
          { value: "90%", label: "Community Coverage" },
        ],
        objectives: [
          "Establish health committees in all communities",
          "Create effective dialogue structures at all levels",
          "Enable participatory health planning",
          "Strengthen local health governance",
          "Facilitate community feedback and response",
        ],
        beneficiaries: [
          "Local communities",
          "Community health committees",
          "District health management teams",
          "Local government authorities",
          "Civil society organizations",
        ],
        activities: [
          "Formation of community health committees",
          "Regular dialogue meetings",
          "Participatory needs assessments",
          "Joint planning sessions",
          "Monitoring and evaluation",
          "Capacity building for local leaders",
        ],
        sectionId: "hpps",
      },
      {
        id: "awareness-behavior-change",
        slug: "awareness-behavior-change",
        title: "Awareness and Behavior Change",
        shortTitle: "Health Awareness",
        description:
          "Community health education and distribution of health materials to promote healthy behaviors and disease prevention.",
        fullDescription:
          "The Awareness and Behavior Change program focuses on transforming health outcomes through education and communication. We develop and distribute health education materials, conduct community awareness campaigns, and promote healthy behaviors that prevent disease and improve wellbeing. From hygiene practices to family planning, our programs address the full spectrum of health promotion needs.",
        image: "/images/voucher.jpg",
        heroImage: "/images/delivery.jpg",
        icon: Megaphone,
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
        features: [
          "Health education materials",
          "Community awareness campaigns",
          "Radio and media programs",
          "School health initiatives",
          "Door-to-door education",
          "Health promotion events",
        ],
        stats: [
          { value: "500K+", label: "People Reached" },
          { value: "1000+", label: "Campaigns Annually" },
          { value: "21", label: "Districts Covered" },
          { value: "Multiple", label: "Local Languages" },
        ],
        objectives: [
          "Increase health awareness in all communities",
          "Promote healthy behaviors and disease prevention",
          "Distribute health education materials widely",
          "Reduce stigma around health conditions",
          "Empower communities with health knowledge",
        ],
        beneficiaries: [
          "General population",
          "School children and youth",
          "Women and mothers",
          "Community leaders",
          "Vulnerable populations",
        ],
        activities: [
          "Development of IEC materials",
          "Community health campaigns",
          "Radio health programs",
          "School health education",
          "Health promotion events",
          "Distribution of health materials (HM)",
        ],
        sectionId: "hpps",
      },
    ],
  },
  {
    id: "uhc1",
    slug: "universal-health-coverage",
    title: "Universal Health Coverage Phase 1",
    shortTitle: "Health Coverage",
    acronym: "UHC1",
    description:
      "Comprehensive health insurance and subsidized healthcare programs ensuring no one is left behind in accessing quality health services.",
    fullDescription:
      "Universal Health Coverage Phase 1 (UHC1) is our flagship initiative to ensure that every resident of the North West Region has access to quality healthcare without facing financial hardship. Through innovative health insurance schemes, targeted subsidies, and free care programs, we are building a healthcare system where financial barriers no longer prevent anyone from receiving the care they need.",
    icon: Shield,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    gradientFrom: "emerald-500",
    gradientTo: "emerald-600",
    image: "/images/UHC1.jpg",
    heroImage: "/images/UHC4.jpg",
    programs: [
      {
        id: "health-insurance-schemes",
        slug: "health-insurance-schemes",
        title: "Health Insurance Schemes",
        shortTitle: "Health Insurance",
        description:
          "Free healthcare coverage for children under 5 years at all health facilities across the North West Region.",
        fullDescription:
          "Our Health Insurance Schemes program provides comprehensive healthcare coverage for vulnerable populations, starting with free care for all children under 5 years. This groundbreaking initiative ensures that the youngest and most vulnerable members of our communities receive complete healthcare coverage at any health facility in the region, eliminating financial barriers that previously prevented families from seeking care.",
        image: "/images/UHC1.jpg",
        heroImage: "/images/UHC3.jpg",
        icon: Shield,
        color: "from-emerald-500 to-emerald-600",
        bgColor: "bg-emerald-50",
        iconColor: "text-emerald-600",
        features: [
          "Free care for children under 5",
          "All facilities in the region",
          "No enrollment fees",
          "Comprehensive coverage",
          "Immediate eligibility",
          "Family-centered approach",
        ],
        stats: [
          { value: "0-5", label: "Years Coverage" },
          { value: "Free", label: "Treatment Cost" },
          { value: "430+", label: "Participating Facilities" },
          { value: "100%", label: "Service Coverage" },
        ],
        objectives: [
          "Provide free healthcare for all children under 5",
          "Eliminate financial barriers to child healthcare",
          "Reduce child mortality and morbidity",
          "Ensure equitable access across all districts",
          "Build sustainable health financing mechanisms",
        ],
        beneficiaries: [
          "All children aged 0-5 years",
          "Families with young children",
          "Low-income households",
          "Rural and undeserved communities",
          "Health facilities providing pediatric care",
        ],
        activities: [
          "Patient registration and verification",
          "Service provision at all facilities",
          "Claims processing and reimbursement",
          "Quality assurance monitoring",
          "Community awareness campaigns",
          "Partnership with health facilities",
        ],
        sectionId: "uhc1",
      },
      {
        id: "hemodialysis-services",
        slug: "hemodialysis-services",
        title: "Hemodialysis Services",
        shortTitle: "Hemodialysis",
        description:
          "Affordable kidney dialysis services at the Regional Hospital Bamenda through subsidized annual subscription packages.",
        fullDescription:
          "The Hemodialysis Services program addresses the critical need for kidney disease treatment in the North West Region. Located at the Regional Hospital Bamenda, patients can access dialysis services for just FCFA 15,000 annually, compared to the normal cost of FCFA 520,000. This 97% cost reduction ensures that kidney patients can access life-saving treatment that would otherwise be unaffordable.",
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
          "Specialist doctors",
        ],
        stats: [
          { value: "15K", label: "FCFA Annual Cost" },
          { value: "520K", label: "Normal Cost Saved" },
          { value: "97%", label: "Cost Reduction" },
          { value: "365", label: "Days Coverage" },
        ],
        objectives: [
          "Make dialysis affordable for all kidney patients",
          "Reduce mortality from kidney failure",
          "Provide quality dialysis services",
          "Ensure continuous treatment access",
          "Train specialized healthcare staff",
        ],
        beneficiaries: [
          "Patients with chronic kidney disease",
          "Patients requiring acute dialysis",
          "Low-income kidney patients",
          "Patients from rural areas",
        ],
        activities: [
          "Hemodialysis sessions",
          "Patient registration and enrollment",
          "Medical consultations",
          "Laboratory services",
          "Nutrition counseling",
          "Patient support groups",
        ],
        sectionId: "uhc1",
      },
      {
        id: "maternal-child-health",
        slug: "maternal-child-health",
        title: "Maternal and Child Health",
        shortTitle: "Maternal Health",
        description:
          "Comprehensive care for mothers including the Health Voucher program for affordable antenatal care and safe delivery services.",
        fullDescription:
          "Our Maternal and Child Health program focuses on reducing maternal and child mortality through comprehensive care packages. The Health Voucher system provides pregnant women with affordable access to quality antenatal care, safe delivery, and postnatal services at just FCFA 6,000. This program ensures that every mother has access to skilled care during pregnancy and childbirth.",
        image: "/images/voucher.jpg",
        heroImage: "/images/delivery.jpg",
        icon: Baby,
        color: "from-pink-500 to-pink-600",
        bgColor: "bg-pink-50",
        iconColor: "text-pink-600",
        features: [
          "FCFA 6,000 Health Voucher",
          "4 antenatal visits covered",
          "Safe delivery services",
          "Emergency obstetric care",
          "42-day postnatal coverage",
          "C-section coverage",
        ],
        stats: [
          { value: "6K", label: "FCFA Voucher Cost" },
          { value: "4", label: "ANC Visits Covered" },
          { value: "42", label: "Days Postnatal Care" },
          { value: "100%", label: "Delivery Coverage" },
        ],
        objectives: [
          "Reduce maternal mortality rates",
          "Increase facility-based deliveries",
          "Ensure comprehensive antenatal care",
          "Provide emergency obstetric services",
          "Support postnatal recovery",
        ],
        beneficiaries: [
          "Pregnant women",
          "Newborns up to 42 days",
          "Lactating mothers",
          "Women of reproductive age",
          "Families expecting children",
        ],
        activities: [
          "Health Voucher registration and distribution",
          "Antenatal clinic services",
          "Safe delivery and C-section services",
          "Postnatal care and monitoring",
          "Emergency referral services",
          "Health education for mothers",
        ],
        sectionId: "uhc1",
      },
      {
        id: "free-hiv-tb-services",
        slug: "free-hiv-tb-services",
        title: "Free HIV and TB Services",
        shortTitle: "HIV/TB Services",
        description:
          "Completely free medication and consultation services for HIV/AIDS and Tuberculosis patients across all health facilities.",
        fullDescription:
          "Our Free HIV and TB Services program ensures that all patients living with HIV/AIDS or Tuberculosis receive comprehensive care at no cost. This includes free testing, counseling, medications (ARVs for HIV, full TB treatment regimens), regular consultations, and support services. By removing financial barriers, we ensure that patients can access and continue their treatment without interruption.",
        image: "/images/096A0583.jpg",
        heroImage: "/images/096A0599.jpg",
        icon: Stethoscope,
        color: "from-violet-500 to-violet-600",
        bgColor: "bg-violet-50",
        iconColor: "text-violet-600",
        features: [
          "Free HIV testing and counseling",
          "Free ARV medications",
          "Free TB treatment",
          "Regular consultations",
          "Support services",
          "Prevention programs",
        ],
        stats: [
          { value: "Free", label: "All Services" },
          { value: "100%", label: "ARV Availability" },
          { value: "24/7", label: "Support Available" },
          { value: "All", label: "Facilities Covered" },
        ],
        objectives: [
          "Provide free treatment for all HIV/AIDS patients",
          "Ensure free TB treatment and follow-up care",
          "Achieve high treatment adherence rates",
          "Eliminate mother-to-child HIV transmission",
          "Reduce new infections through prevention",
        ],
        beneficiaries: [
          "Persons living with HIV/AIDS",
          "TB patients",
          "HIV-exposed infants",
          "Key populations",
          "Healthcare workers",
        ],
        activities: [
          "Free HIV testing and counseling",
          "ARV distribution and monitoring",
          "TB directly observed therapy",
          "Prevention of mother-to-child transmission",
          "Community awareness campaigns",
          "Patient support groups",
        ],
        sectionId: "uhc1",
      },
    ],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getSection = (slug: string): Section | undefined => {
  return sections.find((s) => s.slug === slug);
};

export const getSectionById = (id: string): Section | undefined => {
  return sections.find((s) => s.id === id);
};

export const getAllSections = (): Section[] => {
  return sections;
};

export const getProgram = (slug: string): Program | undefined => {
  for (const section of sections) {
    const program = section.programs.find((p) => p.slug === slug);
    if (program) return program;
  }
  return undefined;
};

export const getProgramWithSection = (
  slug: string
): { program: Program; section: Section } | undefined => {
  for (const section of sections) {
    const program = section.programs.find((p) => p.slug === slug);
    if (program) return { program, section };
  }
  return undefined;
};

export const getAllPrograms = (): Program[] => {
  return sections.flatMap((s) => s.programs);
};

export const getProgramsBySection = (sectionId: string): Program[] => {
  const section = sections.find((s) => s.id === sectionId);
  return section ? section.programs : [];
};
