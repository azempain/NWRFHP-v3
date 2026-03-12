"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sections } from "@/data/sections";
import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";

export function ServicesSection() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, isInView: gridInView } = useInView<HTMLDivElement>();
  const { ref: ctaRef, isInView: ctaInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span
            className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Our Sections
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 transition-animate delay-100 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Core Healthcare{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p
            className={`text-lg text-neutral-600 transition-animate delay-200 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Our work is organized into three strategic sections, each containing
            specialized programs designed to deliver comprehensive healthcare to the
            North West Region.
          </p>
        </div>

        {/* Sections Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {sections.map((section, index) => {
            // Determine dropdown position: first card -> right, last card -> left, middle -> right
            const isLastCard = index === sections.length - 1;
            const dropdownPosition = isLastCard ? "right" : "left";

            return (
              <div
                key={section.id}
                className={`relative transition-animate ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${hoveredSection === section.id ? 'z-50' : 'z-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Section Card */}
                <div
                  className={`group relative bg-white rounded-3xl p-6 lg:p-8 border-2 transition-all duration-300 h-full ${
                    hoveredSection === section.id
                      ? "border-primary-500 shadow-2xl shadow-primary-500/10"
                      : "border-neutral-100 shadow-sm hover:shadow-xl active:scale-[0.98] lg:active:scale-100"
                  }`}
                >
                  {/* Mobile/Tablet: Full card tap area */}
                  <Link
                    href={`/sections/${section.slug}`}
                    className="absolute inset-0 z-20 lg:hidden"
                    aria-label={`View ${section.shortTitle} section`}
                  />

                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-linear-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Acronym */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${section.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <section.icon
                          className={`w-7 h-7 lg:w-8 lg:h-8 ${section.iconColor}`}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-bold ${section.iconColor} bg-linear-to-r ${section.color} bg-clip-text text-transparent`}
                        >
                          {section.acronym}
                        </span>
                        {/* Mobile indicator */}
                        <ChevronRight className={`w-5 h-5 lg:hidden ${section.iconColor}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {section.shortTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 mb-6 leading-relaxed text-sm lg:text-base line-clamp-3">
                      {section.description}
                    </p>

                    {/* Programs Preview */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        {section.programs.length} Programs
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {section.programs.slice(0, 3).map((program) => (
                          <span
                            key={program.id}
                            className={`text-xs px-2.5 py-1 rounded-full ${section.bgColor} ${section.iconColor} font-medium`}
                          >
                            {program.shortTitle}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Section Link - Desktop only */}
                    <Link
                      href={`/sections/${section.slug}`}
                      className={`hidden lg:inline-flex items-center text-sm font-semibold ${section.iconColor} group/link`}
                    >
                      Explore Section
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    {/* Mobile hint */}
                    <p className="lg:hidden text-xs text-neutral-400 flex items-center gap-1">
                      Tap to explore
                      <ArrowRight className="w-3 h-3" />
                    </p>
                  </div>

                  {/* Hover Dropdown - Desktop only, appears to the side */}
                  {hoveredSection === section.id && (
                    <div
                      className={`hidden lg:block absolute top-0 z-100 w-72 animate-fade-in ${
                        dropdownPosition === "left"
                          ? "left-full ml-3"
                          : "right-full mr-3"
                      }`}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl shadow-neutral-900/20 border border-neutral-100 p-4 backdrop-blur-sm">
                        {/* Arrow pointer */}
                        <div
                          className={`absolute top-6 w-3 h-3 bg-white border-neutral-100 rotate-45 ${
                            dropdownPosition === "left"
                              ? "-left-1.5 border-l border-b"
                              : "-right-1.5 border-r border-t"
                          }`}
                        />

                        <div className="relative">
                          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100">
                            <div
                              className={`w-8 h-8 rounded-lg bg-linear-to-br ${section.color} flex items-center justify-center`}
                            >
                              <section.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                                {section.acronym}
                              </p>
                              <p className="text-sm font-bold text-neutral-900">
                                {section.programs.length} Programs
                              </p>
                            </div>
                          </div>

                          <div className="space-y-1">
                            {section.programs.map((program) => (
                              <Link
                                key={program.id}
                                href={`/programs/${program.slug}`}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-colors group/item"
                              >
                                <div
                                  className={`w-9 h-9 rounded-lg ${program.bgColor} flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform`}
                                >
                                  <program.icon
                                    className={`w-4 h-4 ${program.iconColor}`}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-neutral-900 group-hover/item:text-primary-600 transition-colors">
                                    {program.shortTitle}
                                  </p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-neutral-300 group-hover/item:text-primary-600 group-hover/item:translate-x-0.5 transition-all" />
                              </Link>
                            ))}
                          </div>

                          <Link
                            href={`/sections/${section.slug}`}
                            className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-neutral-100 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                          >
                            View All in {section.acronym}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`text-center mt-12 transition-animate ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/sections">
              View All Sections
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
