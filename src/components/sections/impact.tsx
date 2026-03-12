"use client";

import { Building, Users, Pill, MapPin, Heart, Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";
import { Counter } from "@/components/animations/counter";

const impactStats = [
  {
    icon: Building,
    value: siteConfig.stats.communityPharmacies,
    suffix: "+",
    label: "Community Pharmacies",
    description: "Serving rural & urban areas",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: Users,
    value: siteConfig.stats.populationServed,
    suffix: "M+",
    label: "Population Served",
    description: "Across the region",
    color: "from-accent-500 to-accent-600",
  },
  {
    icon: Pill,
    value: siteConfig.stats.medicineAvailability,
    suffix: "%",
    label: "Medicine Availability",
    description: "WHO quality standards",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: MapPin,
    value: siteConfig.stats.healthDistricts,
    suffix: "",
    label: "Health Districts",
    description: "Complete coverage",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Heart,
    value: siteConfig.stats.healthWorkers,
    suffix: "+",
    label: "Health Workers",
    description: "Trained professionals",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Award,
    value: siteConfig.stats.yearsOfService,
    suffix: "+",
    label: "Years of Service",
    description: `Since ${siteConfig.foundedYear}`,
    color: "from-purple-500 to-purple-600",
  },
];

export function ImpactSection() {
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, isInView: gridInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-10 lg:py-16 bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span
            className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full transition-animate ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Our Impact
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-animate delay-100 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Transforming Healthcare{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-300 to-accent-400">
              Across the Region
            </span>
          </h2>
          <p
            className={`text-lg text-white/70 transition-animate delay-200 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            For over three decades, we have been dedicated to improving healthcare
            access and outcomes for millions of people in the North West Region.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative group transition-animate ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 card-hover">
                {/* Icon */}
                <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </div>

                {/* Value */}
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 md:mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>

                {/* Label */}
                <p className="text-sm md:text-base lg:text-lg font-semibold text-white/90 mb-1">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-xs md:text-sm text-white/60">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
