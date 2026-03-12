"use client";

import { StatCard } from "@/components/shared/stat-card";
import { Building2, Users, Package, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  {
    value: siteConfig.stats.communityPharmacies,
    label: "Community Pharmacies",
    description: "Serving rural & urban areas",
    icon: Building2,
    color: "primary" as const,
  },
  {
    value: 90,
    label: "Population Coverage",
    description: "Of the North West Region",
    suffix: "%",
    icon: Users,
    color: "accent" as const,
  },
  {
    value: siteConfig.stats.medicineAvailability,
    label: "Medicine Availability",
    description: "Essential medicines in stock",
    suffix: "%",
    icon: Package,
    color: "success" as const,
  },
  {
    value: siteConfig.stats.healthDistricts,
    label: "Health Districts",
    description: "Actively supported",
    icon: MapPin,
    color: "primary" as const,
  },
];

export function StatsSection() {
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
            Our Impact
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
            Making a Difference Every Day
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Numbers that reflect our commitment to healthcare excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`transition-animate ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                description={stat.description}
                suffix={stat.suffix}
                icon={stat.icon}
                color={stat.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
