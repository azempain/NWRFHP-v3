"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Building, Users, Heart, Pill, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/shared/page-hero";
import { sections, getAllPrograms } from "@/data/sections";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  { value: siteConfig.stats.healthFacilities, label: "Health Facilities", icon: Building },
  { value: siteConfig.stats.communitiesServed, label: "People Served", icon: Users },
  { value: siteConfig.stats.medicineAvailability, label: "Medicine Availability", icon: Pill },
  { value: `${siteConfig.stats.yearsOfService}+`, label: "Years of Service", icon: Shield },
];

function StatsSection() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-6 lg:py-8 lg:-mt-20 relative z-20">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg lg:shadow-xl border border-neutral-100 transition-all duration-500 hover:-translate-y-1 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary-100 flex items-center justify-center mb-2 sm:mb-4">
                <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary-600" />
              </div>
              <p className="text-xl sm:text-3xl font-bold text-neutral-900 mb-0.5 sm:mb-1">{stat.value}</p>
              <p className="text-neutral-600 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const allPrograms = getAllPrograms();

  return (
    <div
      ref={ref}
      className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
    >
      <span
        className={`inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        What We Do
      </span>
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        style={{ transitionDelay: '100ms' }}
      >
        Our Healthcare{" "}
        <span className="text-gradient">Programs</span>
      </h2>
      <p
        className={`text-base sm:text-lg text-neutral-600 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        style={{ transitionDelay: '200ms' }}
      >
        Explore our {allPrograms.length} comprehensive programs organized across {sections.length} strategic sections,
        designed to serve every member of our community with quality healthcare services.
      </p>
    </div>
  );
}

function ProgramSection({ section }: { section: typeof sections[0] }) {
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, isInView: gridInView } = useInView<HTMLDivElement>();

  return (
    <div className="mb-12 sm:mb-16 lg:mb-24">
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-500 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-linear-to-br ${section.color} flex items-center justify-center shrink-0`}>
          <section.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
        </div>
        <div className="min-w-0">
          <Link
            href={`/sections/${section.slug}`}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 hover:text-primary-600 transition-colors"
          >
            {section.acronym}
          </Link>
          <p className="text-sm sm:text-base text-neutral-500 truncate">{section.shortTitle}</p>
        </div>
        <div className="flex-1" />
        <Button variant="outline" size="sm" asChild className="hidden sm:flex">
          <Link href={`/sections/${section.slug}`}>
            View Section
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Programs Grid */}
      <div
        ref={gridRef}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {section.programs.map((program, index) => (
          <div
            key={program.id}
            className={`transition-all duration-500 hover:-translate-y-2 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Link
              href={`/programs/${program.slug}`}
              className="group block h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent" />

                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-linear-to-br ${program.color} flex items-center justify-center`}>
                  <program.icon className="w-6 h-6 text-white" />
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {program.stats.slice(0, 2).map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-900"
                      >
                        <span className="font-bold text-primary-600">{stat.value}</span> {stat.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Badge className={`${program.bgColor} text-neutral-700 border-0 mb-3`}>
                  {section.acronym}
                </Badge>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {program.features.slice(0, 3).map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-500 shrink-0" />
                      <span className="text-neutral-600 text-xs truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center text-primary-600 font-medium text-sm">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTASection() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900">
      <div className="container">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto px-2 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Partner With Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
            Want to Support Our Mission?
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8">
            Join us in our mission to make quality healthcare accessible to everyone
            in the North West Region. Together, we can make a difference.
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

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <PageHero
        badge={{ icon: Heart, text: "Our Programs" }}
        title="Healthcare Programs for"
        titleHighlight="Every Community"
        description="Comprehensive healthcare initiatives designed to improve access and outcomes across the North West Region of Cameroon."
        backgroundImage="/images/096A0599.jpg"
        overlay="gradient"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2 sm:px-0">
          <Button
            size="lg"
            variant="white"
            className="w-full sm:w-auto"
            asChild
          >
            <Link href="/sections">
              <Shield className="mr-2 h-5 w-5" />
              View Sections
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline-accent"
            className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500 w-full sm:w-auto"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </PageHero>

      {/* Stats */}
      <StatsSection />

      {/* Programs by Section */}
      <section className="py-8 lg:py-12">
        <div className="container">
          {/* Section Header */}
          <SectionHeader />

          {/* Programs by Section */}
          {sections.map((section) => (
            <ProgramSection key={section.id} section={section} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
