export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: "The Health Voucher program saved my life and my baby's life. I delivered safely at the hospital for just FCFA 6,000. Thank you NWRFHP!",
    author: "Mary N.",
    role: "Health Voucher Beneficiary",
    location: "Bamenda",
    image: "/images/social11.jpg",
    rating: 5,
  },
  {
    quote: "Having access to affordable medicines at the community pharmacy near my village has made a huge difference for my family's health.",
    author: "Peter T.",
    role: "Community Member",
    location: "Nkambe",
    image: "/images/front3.jpg",
    rating: 5,
  },
  {
    quote: "The dialysis program gave me hope when I thought all was lost. Paying FCFA 15,000 for a whole year of treatment is a blessing.",
    author: "Emmanuel F.",
    role: "Dialysis Patient",
    location: "Bamenda",
    image: "/images/front4.jpg",
    rating: 5,
  },
];
