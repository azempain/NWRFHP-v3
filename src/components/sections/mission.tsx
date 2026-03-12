"use client";

import { Target, Eye, Heart } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const values = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To provide sustainable quality healthcare for the population of the North West Region.",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To assist the Ministry of Public Health in Promoting access to quality healthcare of the population of the North West Region by stimulating the performance of the health system.",
    iconBg: "bg-accent-100",
    iconColor: "text-accent-600",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Collaboration, communication, openness, respect, partnership, and outcome-focused decision making.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
];

export function MissionSection() {
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, isInView: gridInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-8 lg:py-12 bg-neutral-50">
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-animate ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-600 bg-white border border-neutral-200 rounded-full">
            Why We Exist
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
            Our Purpose & Commitment
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Dedicated to transforming healthcare delivery and improving lives across the North West Region
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={item.title}
              className={`group p-6 rounded-xl bg-white border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition-all duration-300 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${item.iconBg}`}>
                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
