import { Heart, Camera, Users, Phone, Info, Layers, type LucideIcon } from 'lucide-react';

/**
 * Central Site Configuration
 * Update contact info here and it will reflect throughout the entire website
 */

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavigationLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface NavigationGroup {
  title: string;
  links: Omit<NavigationLink, 'icon'>[];
}

// ============================================
// NAVIGATION CONFIG
// ============================================

/**
 * Main navigation links used in header, mobile menu, and footer
 * Order matters - links appear in this order throughout the site
 */
export const navigationLinks: NavigationLink[] = [
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/sections', label: 'Our Sections', icon: Layers },
  { href: '/team', label: 'Our Team', icon: Users },
  { href: '/contact', label: 'Get in Touch', icon: Phone },
  { href: '/gallery', label: 'Gallery & News', icon: Camera },
];

// ============================================
// SITE CONFIG
// ============================================

export const siteConfig = {
  // Organization Info
  name: "NWRFHP",
  fullName: "North West Regional Fund for Health Promotion",
  tagline: "Promoting sustainable quality healthcare for the population of North West Region, Cameroon since 1987.",
  description: "Promoting sustainable quality healthcare for the population of North West Region, Cameroon since 1987.",
  foundedYear: 1987,

  // Contact Information
  contact: {
    phone: {
      primary: "+237 651 421 052",
      primaryRaw: "+237651421052", // For tel: links
      secondary: "+237 677 123 456",
      secondaryRaw: "+237677123456",
    },
    email: {
      primary: "nwrfhp@nwrfundforhealth.org",
      contact: "contact@nwrfundforhealth.org",
      partnerships: "partnerships@nwrfundforhealth.org",
      recruitment: "recruitment@nwrfundforhealth.org"
    },
    whatsapp: {
      number: "+237 651 421 052",
      numberRaw: "237651421052", // For wa.me links (no + sign)
      link: "https://wa.me/237651421052",
      channelLink: "https://whatsapp.com/channel/0029Vb6H2mbFnSz0BzhGWI27"
    },
  },

  // Location
  location: {
    address: "Hospital Round About",
    city: "Bamenda",
    region: "North West Region",
    country: "Cameroon",
    fullAddress: "Bamenda Regional Hospital, North West Region, Cameroon",
    shortAddress: "Regional Hospital, Bamenda, NWR, CM",
    coordinates: {
      lat: 5.9547297,
      lng: 10.1439435,
    },
    googleMapsUrl: "https://maps.google.com/?q=5.9547297,10.1439435",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/nwrfhp",
    instagram: "https://instagram.com/nwrfhp",
    linkedin: "https://www.linkedin.com/company/nwrfhp-pig/",
  },

  // Key Statistics
  stats: {
    healthFacilities: 430,
    communityPharmacies: 430,
    communitiesServed: 500,
    populationServed: 2.2, // In millions (2.2M)
    yearsOfService: new Date().getFullYear() - 1987,
    healthWorkers: 850,
    medicineAvailability: 95,
    healthDistricts: 21,
  },

  // Footer Links - Updated with Sections structure
  footerLinks: {
    sections: [
      { label: "PPM - Pharmaceutical Management", href: "/sections/pharmaceutical-product-management" },
      { label: "HPPS - Health Promotion", href: "/sections/health-promotion-partnership-support" },
      { label: "UHC1 - Health Coverage", href: "/sections/universal-health-coverage" },
      { label: "All Sections", href: "/sections" },
    ],
    programs: [
      { label: "Essential Medicines", href: "/programs/essential-medicines" },
      { label: "Disease Management", href: "/programs/priority-disease-management" },
      { label: "Maternal Health", href: "/programs/maternal-child-health" },
      { label: "Hemodialysis", href: "/programs/hemodialysis-services" },
      { label: "Training Programs", href: "/programs/training-refresher-courses" },
    ],
    organization: [
      { label: "Gallery", href: "/gallery" },
      { label: "Our Team", href: "/team" },
      { label: "UHC Services", href: "/health" },
      { label: "About Us", href: "/about" },
    ],
    quickLinks: [
      { label: "Contact Us", href: "/contact" },
      { label: "Health Voucher", href: "/health" },
      { label: "HIV/TB Services", href: "/programs/free-hiv-tb-services" },
      { label: "Quality Control", href: "/programs/quality-control" },
    ],
  },
} as const;

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig;
