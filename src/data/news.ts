export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  href: string;
}

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Health Voucher Program Expands to All 19 Districts",
    excerpt: "The maternal health voucher program now covers all health districts in the North West Region, making safe delivery accessible to more pregnant women.",
    image: "/images/voucher.jpg",
    date: "Jan 15, 2026",
    readTime: "3 min read",
    category: "Program Update",
    href: "/programs/maternal-child-health",
  },
  {
    id: 2,
    title: "New Community Health Workers Trained in Nkambe",
    excerpt: "Over 50 new community health workers completed their training program and are now serving remote communities in Nkambe health district.",
    image: "/images/front2.jpg",
    date: "Jan 10, 2026",
    readTime: "4 min read",
    category: "Training",
    href: "/programs/community-health",
  },
  {
    id: 3,
    title: "Partnership with WHO Strengthens Medicine Supply",
    excerpt: "A new partnership agreement with WHO will enhance our medicine supply chain, ensuring better availability across all community pharmacies.",
    image: "/images/formulary.jpg",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    category: "Partnership",
    href: "/programs/essential-medicines",
  },
];
