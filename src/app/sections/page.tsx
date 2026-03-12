"use client";

import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { sections } from "@/data/sections";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, ChevronRight, Heart, Layers, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function OverviewStats() {
  const { ref, isInView } = useInView({ rootMargin: "0px" });
  const totalPrograms = sections.reduce((acc, s) => acc + s.programs.length, 0);

  return (
    <section className="py-6 lg:py-8 lg:-mt-20 relative z-20">
      <div className="container">
        <div ref={ref} className="grid grid-cols-3 gap-3 sm:gap-6">
          <div
            className={`transition-animate hover:-translate-y-1 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg lg:shadow-xl border border-neutral-100 text-center ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <p className="text-2xl sm:text-4xl font-bold text-primary-600 mb-0.5 sm:mb-1">
              {sections.length}
            </p>
            <p className="text-xs sm:text-base text-neutral-600">Core Sections</p>
          </div>
          <div
            className={`transition-animate hover:-translate-y-1 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg lg:shadow-xl border border-neutral-100 text-center ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-2xl sm:text-4xl font-bold text-primary-600 mb-0.5 sm:mb-1">
              {totalPrograms}
            </p>
            <p className="text-xs sm:text-base text-neutral-600">Active Programs</p>
          </div>
          <div
            className={`transition-animate hover:-translate-y-1 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg lg:shadow-xl border border-neutral-100 text-center ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-2xl sm:text-4xl font-bold text-primary-600 mb-0.5 sm:mb-1">
              {siteConfig.stats.populationServed}M
            </p>
            <p className="text-xs sm:text-base text-neutral-600">Population Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionsHeader() {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
    >
      <span
        className={`transition-animate inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ transitionDelay: "0ms" }}
      >
        Explore Our Work
      </span>
      <h2
        className={`transition-animate text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ transitionDelay: "100ms" }}
      >
        Our Core <span className="text-gradient">Sections</span>
      </h2>
      <p
        className={`transition-animate text-lg text-neutral-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ transitionDelay: "200ms" }}
      >
        Each section represents a strategic pillar of our healthcare
        delivery system, working together to ensure comprehensive coverage
        for all communities.
      </p>
    </div>
  );
}

function SectionCard({ section, index }: { section: typeof sections[0]; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-animate grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Image */}
      <div
        className={`relative transition-animate ${isInView ? "opacity-100" : "opacity-0"} ${index % 2 === 1 ? "lg:order-2" : ""}`}
        style={{ transitionDelay: "200ms" }}
      >
        <div className="relative h-72 sm:h-96 lg:h-125 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
          <Image
            src={section.heroImage}
            alt={section.title}
            className="object-cover"
            fill
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-neutral-900/20 to-transparent" />

          {/* Section badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <div
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 backdrop-blur-sm`}
            >
              <section.icon
                className={`w-4 h-4 sm:w-5 sm:h-5 ${section.iconColor}`}
              />
              <span className="font-bold text-sm sm:text-base text-neutral-900">
                {section.acronym}
              </span>
            </div>
          </div>

          {/* Programs count */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {section.programs.slice(0, 2).map((program) => (
                <span
                  key={program.id}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-neutral-900"
                >
                  {program.shortTitle}
                </span>
              ))}
              {section.programs.length > 2 && (
                <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-neutral-900">
                  +{section.programs.length - 2} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Floating icon - hidden on mobile and tablet */}
        <div
          className={`hidden lg:block absolute -bottom-6 ${
            index % 2 === 0 ? "right-4 xl:-right-6" : "left-4 xl:-left-6"
          } bg-white rounded-2xl p-4 shadow-xl border border-neutral-100 hover:scale-105 transition-transform`}
        >
          <div
            className={`w-16 h-16 rounded-xl bg-linear-to-br ${section.color} flex items-center justify-center`}
          >
            <section.icon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`transition-animate mt-4 sm:mt-0 min-w-0 overflow-hidden ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} ${index % 2 === 1 ? "lg:order-1" : ""}`}
        style={{ transitionDelay: "300ms" }}
      >
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${section.bgColor} mb-3 sm:mb-4`}
        >
          <span className={`text-xs sm:text-sm font-bold ${section.iconColor}`}>
            Section {index + 1}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-1.5 sm:mb-2 wrap-break-word">
          {section.title}
        </h2>
        <p className="text-lg sm:text-xl text-primary-600 font-semibold mb-3 sm:mb-4">
          {section.acronym}
        </p>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 sm:mb-8 wrap-break-word">
          {section.fullDescription}
        </p>

        {/* Programs List */}
        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-400">
            Programs in this section
          </p>
          <div className="space-y-2">
            {section.programs.map((program) => (
              <Link
                key={program.id}
                href={`/programs/${program.slug}`}
                className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all group overflow-hidden"
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${program.bgColor} flex items-center justify-center shrink-0`}
                >
                  <program.icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${program.iconColor}`}
                  />
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className="text-sm sm:text-base font-medium text-neutral-900 group-hover:text-primary-600 transition-colors truncate">
                    {program.shortTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 truncate">
                    {program.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        <Button size="lg" className="group w-full sm:w-auto" asChild>
          <Link href={`/sections/${section.slug}`}>
            Explore {section.acronym} Section
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900">
      <div className="container">
        <div
          ref={ref}
          className={`transition-animate text-center max-w-3xl mx-auto px-2 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Partner With Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
            Want to Support Our Mission?
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8">
            Join us in our mission to make quality healthcare accessible to
            everyone in the North West Region. Together, we can make a
            difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-white text-primary-700 hover:bg-neutral-100 w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 w-full sm:w-auto"
              asChild
            >
              <a href={`tel:${siteConfig.contact.phone.primaryRaw}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SectionsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: Layers, text: "Our Sections" }}
        title="Strategic Healthcare"
        titleHighlight="Sections"
        description="Our work is organized into three core sections, each containing specialized programs designed to deliver comprehensive healthcare services to the North West Region."
        backgroundImage="/images/096A0599.jpg"
        overlay="gradient"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2 sm:px-0">
          <Button size="lg" variant="white" className="w-full sm:w-auto" asChild>
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline-accent"
            className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500 w-full sm:w-auto"
            asChild
          >
            <Link href="/health">Learn About UHC</Link>
          </Button>
        </div>
      </PageHero>

      {/* Overview Stats */}
      <OverviewStats />

      {/* Sections List */}
      <section className="py-12 lg:py-24 overflow-hidden">
        <div className="container">
          <SectionsHeader />

          {/* Sections */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {sections.map((section, index) => (
              <SectionCard key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
