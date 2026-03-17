"use client";

import { PageHero } from "@/components/shared/page-hero";
import { Newspaper } from "lucide-react";

export function ArticlesHero() {
  return (
    <PageHero
      badge={{ icon: Newspaper, text: "Articles & Updates" }}
      title="Latest News &"
      titleHighlight="Articles"
      description="Stay informed with the latest updates, milestones, and stories from NWRFHP's work to improve healthcare across the North West Region."
      backgroundImage="/images/head-office.jpg"
      overlay="gradient"
    />
  );
}
