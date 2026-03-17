// ============================================
// ARTICLE DATA TYPES
// ============================================

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "section-heading"; heading: string }
  | { type: "bullets"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string }
  | { type: "closing"; text: string }
  | { type: "about"; heading: string; text: string };

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  publishedAt: string; // ISO date string e.g. "2026-03-17"
  location: string;
  category: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
  content: ContentBlock[];
}

// ============================================
// ARTICLES DATA
// ============================================

export const articles: Article[] = [
  {
    id: "1",
    slug: "nwrfhp-acquires-17-ton-trailer-truck",
    title: "NWRFHP Acquires a New 17-Ton Trailer Truck",
    subtitle:
      "A Major Milestone for Pharmaceutical Supply Chain Efficiency and Healthcare Access in Cameroon's North West Region",
    excerpt:
      "The North West Regional Fund for Health Promotion is proud to announce the purchase of a brand-new 17-ton trailer truck, dramatically expanding logistical capacity and directly addressing longstanding challenges of reaching remote and hard-to-access areas across the region.",
    publishedAt: "2026-03-17",
    location: "Bamenda, North West Region",
    category: "Infrastructure",
    tags: ["Supply Chain", "Logistics", "Healthcare Access", "Infrastructure"],
    coverImage:
      "/assets/article_1/WhatsApp%20Image%202026-03-17%20at%2010.24.56.jpeg",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "The North West Regional Fund for Health Promotion (NWRFHP), founded in 1987 and a cornerstone partner of Cameroon's Ministry of Public Health, is proud to announce the purchase of a brand-new 17-ton trailer truck. This strategic acquisition represents a significant achievement in our ongoing mission to deliver affordable, quality medicines and sustainable health services across the entire North West Region.",
      },
      {
        type: "paragraph",
        text: "For over three decades, NWRFHP has managed one of the most robust pharmaceutical supply chains in Cameroon. We procure, store, and distribute essential commodities — including life-saving drugs, medical consumables, vaccines, and laboratory reagents to health districts, hospitals, integrated health centres, and community pharmacies. The new 17-ton trailer truck dramatically expands our logistical capacity and directly addresses longstanding challenges of reaching remote and hard-to-access areas.",
      },
      {
        type: "image",
        src: "/assets/article_1/WhatsApp%20Image%202026-03-17%20at%2010.25.01.jpeg",
        alt: "The new 17-ton trailer truck acquired by NWRFHP",
        caption:
          "The new 17-ton trailer truck — a milestone in pharmaceutical supply chain infrastructure",
      },
      {
        type: "section-heading",
        heading: "Why This Truck Matters: Transforming Supply Chain Operations",
      },
      {
        type: "paragraph",
        text: "Previously, our fleet handled smaller loads with multiple trips, increasing fuel costs, delivery times, and exposure to road risks. The new 17-ton capacity trailer changes everything. It allows us to:",
      },
      {
        type: "bullets",
        items: [
          "Transport larger volumes of commodities in a single journey, reducing operational costs by up to 40% on long-haul routes.",
          "Ensure more frequent and reliable deliveries to all seven divisions of the North West Region, including remote health areas in Boyo, Donga-Mantung, Menchum, and Ngoketunjia.",
          'Facilitate "easy purchase and supply" directly from our central warehouse in Bamenda to peripheral health facilities, minimising stock-out periods that have historically affected patient care.',
          "Improve cold-chain compliance for temperature-sensitive products such as vaccines and certain antiretrovirals through better-equipped, climate-controlled transport.",
        ],
      },
      {
        type: "quote",
        text: "This is not just a vehicle; it is a mobile bridge connecting our central procurement hub to the furthest corners of the region.",
      },
      {
        type: "image",
        src: "/assets/article_1/WhatsApp%20Image%202026-03-17%20at%2010.25.014.jpeg",
        alt: "NWRFHP team with the new trailer truck",
        caption:
          "NWRFHP staff celebrate the arrival of the new 17-ton trailer at our Bamenda headquarters",
      },
      {
        type: "section-heading",
        heading: "Direct Impact on Healthcare Delivery",
      },
      {
        type: "paragraph",
        text: "In the North West Region, timely access to medicines is literally a matter of life and death. Health facilities in rural and semi-urban areas often face delays that lead to interrupted treatment for malaria, HIV, tuberculosis, maternal health complications, and childhood illnesses. With the new truck:",
      },
      {
        type: "bullets",
        items: [
          "Essential drugs and medical supplies will reach health centres faster and in greater quantities, drastically reducing stock-out rates.",
          "Vaccination campaigns and emergency responses will benefit from bulk, reliable transport, supporting higher coverage rates in hard-to-reach communities.",
          "Community pharmacies and district hospitals will enjoy more predictable replenishment schedules, allowing healthcare workers to focus on patient care rather than worrying about shortages.",
          "Overall patient outcomes will improve — fewer treatment interruptions, better chronic disease management, and stronger primary healthcare systems.",
        ],
      },
      {
        type: "paragraph",
        text: "By strengthening the pharmaceutical supply chain, NWRFHP is directly contributing to the Ministry of Public Health's goals of universal health coverage and the Sustainable Development Goals, particularly SDG 3 (Good Health and Well-being).",
      },
      {
        type: "image",
        src: "/assets/article_1/WhatsApp%20Image%202026-03-17%20at%2010.25.015.jpeg",
        alt: "Medicine delivery operations across the North West Region",
        caption:
          "Ensuring medicines reach every health facility across the North West Region",
      },
      {
        type: "section-heading",
        heading: "Broader Regional and Economic Benefits",
      },
      {
        type: "paragraph",
        text: "Beyond healthcare, the acquisition creates ripple effects across the region:",
      },
      {
        type: "bullets",
        items: [
          "It supports local economic activity by enabling health facilities to serve more patients efficiently, reducing the need for families to travel long distances or purchase medicines at inflated private-market prices.",
          "It demonstrates prudent financial stewardship, investing in durable infrastructure that will serve the region for the next 10–15 years.",
          "It reinforces NWRFHP's role as a trusted partner to the Regional Delegation of Public Health, development partners, and communities.",
        ],
      },
      {
        type: "paragraph",
        text: "This purchase was made possible through careful internal resource mobilisation and strategic planning, reflecting our commitment to self-reliance and sustainability even in a challenging operating environment.",
      },
      {
        type: "closing",
        text: "At NWRFHP, we remain committed to innovation, accountability, and people-centred health services. This milestone is just one step in our journey to make quality healthcare truly accessible to every resident of the North West Region, from Bamenda city to the most distant health post.",
      },
      {
        type: "about",
        heading: "About NWRFHP",
        text: "The North West Regional Fund for Health Promotion (NWRFHP-PIG) is a public corporate Dialogue Structure established in 1987. In partnership with the Ministry of Public Health, we manage the regional pharmaceutical supply chain, promote rational drug use, and support sustainable health financing for over 2 million people across the North West Region.\n\nFor more information, partnership opportunities, or to support our work, contact us at nwpsfh2003@yahoo.com or visit our headquarters in Bamenda.",
      },
    ],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured);
}

export function getLatestArticles(count?: number): Article[] {
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return count ? sorted.slice(0, count) : sorted;
}

export function formatArticleDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
