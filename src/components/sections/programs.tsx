"use client";

import { ProgramCard } from "@/components/shared/program-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";

const programs = [
  {
    title: "Essential Medicines Management",
    description:
      `Ensuring ${siteConfig.stats.medicineAvailability}% availability of quality medicines across ${siteConfig.stats.communityPharmacies} community pharmacies serving rural and urban populations.`,
    imageUrl: "/images/formulary.jpg",
    slug: "essential-medicines",
  },
  {
    title: "Community Health Services",
    description:
      "Comprehensive primary healthcare services delivered through our extensive network of community health workers.",
    imageUrl: "/images/delivery.jpg",
    slug: "community-health",
  },
  {
    title: "Universal Health Coverage",
    description:
      "Working towards accessible, affordable, and quality healthcare for all residents of North West Region.",
    imageUrl: "/images/UHC1.jpg",
    slug: "universal-health-coverage",
  },
];

export function ProgramsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, isInView: gridInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-animate ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
            What We Do
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
            Our Healthcare Programs
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Comprehensive initiatives designed to improve healthcare access and outcomes across the North West Region
          </p>
        </div>

        {/* Programs Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10"
        >
          {programs.map((program, index) => (
            <div
              key={program.slug}
              className={`transition-animate ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProgramCard {...program} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/programs">
              Explore All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
