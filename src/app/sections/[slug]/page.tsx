"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/shared/page-hero";
import { sections, getSection } from "@/data/sections";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";

interface SectionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function SectionPage({ params }: SectionPageProps) {
  const { slug } = use(params);
  const section = getSection(slug);

  // useInView hooks for each animated section
  const { ref: statsRef, isInView: statsInView } = useInView();
  const { ref: aboutRef, isInView: aboutInView } = useInView();
  const { ref: aboutImageRef, isInView: aboutImageInView } = useInView();
  const { ref: programsHeaderRef, isInView: programsHeaderInView } = useInView();
  const { ref: programsGridRef, isInView: programsGridInView } = useInView();
  const { ref: otherSectionsHeaderRef, isInView: otherSectionsHeaderInView } = useInView();
  const { ref: otherSectionsGridRef, isInView: otherSectionsGridInView } = useInView();
  const { ref: ctaRef, isInView: ctaInView } = useInView();

  if (!section) {
    notFound();
  }

  // Get other sections for navigation
  const otherSections = sections.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: section.icon, text: section.acronym }}
        title={section.title}
        description={section.description}
        backgroundImage={section.heroImage}
        overlay="gradient"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2 sm:px-0">
          <Button size="lg" variant="white" className="w-full sm:w-auto" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Get Involved
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline-accent"
            className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500 w-full sm:w-auto"
            asChild
          >
            <a href={`tel:${siteConfig.contact.phone.primaryRaw}`}>
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="py-6 lg:py-8 lg:-mt-20 relative z-20">
        <div className="container">
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-3 sm:gap-6"
          >
            <div
              className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg lg:shadow-xl border border-neutral-100 text-center transition-all duration-500 hover:-translate-y-1 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '0ms' }}
            >
              <p className="text-2xl sm:text-4xl font-bold text-primary-600 mb-0.5 sm:mb-1">
                {section.programs.length}
              </p>
              <p className="text-xs sm:text-base text-neutral-600">Programs</p>
            </div>
            <div
              className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg lg:shadow-xl border border-neutral-100 text-center transition-all duration-500 hover:-translate-y-1 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <p className="text-2xl sm:text-4xl font-bold text-primary-600 mb-0.5 sm:mb-1">
                {siteConfig.stats.healthDistricts}
              </p>
              <p className="text-xs sm:text-base text-neutral-600">Districts</p>
            </div>
            <div
              className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg lg:shadow-xl border border-neutral-100 text-center transition-all duration-500 hover:-translate-y-1 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-2xl sm:text-4xl font-bold text-primary-600 mb-0.5 sm:mb-1">
                {siteConfig.stats.populationServed}M
              </p>
              <p className="text-xs sm:text-base text-neutral-600">Population</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="pt-8">
        <div className="container">
          <Button variant="ghost" asChild className="group">
            <Link href="/sections">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform uppercase" />
              Back to All Sections
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 lg:py-16 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Content */}
            <div ref={aboutRef}>
              <div
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${section.bgColor} mb-3 sm:mb-4 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '0ms' }}
              >
                <section.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${section.iconColor}`} />
                <span className={`text-xs sm:text-sm font-bold ${section.iconColor}`}>
                  {section.acronym}
                </span>
              </div>
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 sm:mb-6 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '100ms' }}
              >
                {section.title}
              </h2>
              <p
                className={`text-base sm:text-lg text-neutral-600 leading-relaxed mb-6 sm:mb-8 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '200ms' }}
              >
                {section.fullDescription}
              </p>

              {/* Quick Program Links */}
              <div
                className={`space-y-2 sm:space-y-3 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '300ms' }}
              >
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-400">
                  Quick Access to Programs
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {section.programs.map((program) => (
                    <Link
                      key={program.id}
                      href={`/programs/${program.slug}`}
                      className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${program.bgColor} ${program.iconColor} text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity`}
                    >
                      <program.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {program.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              ref={aboutImageRef}
              className={`relative transition-all duration-700 ${aboutImageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="relative h-72 sm:h-96 lg:h-125 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge - hidden on mobile and tablet */}
              <div
                className={`hidden lg:block absolute -bottom-6 left-4 xl:-left-6 bg-white rounded-2xl p-5 shadow-xl border border-neutral-100 transition-all duration-500 ${aboutImageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${section.color} flex items-center justify-center mb-3`}
                >
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-neutral-900">{section.acronym}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="container">
          <div
            ref={programsHeaderRef}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <span
              className={`inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-all duration-500 ${programsHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '0ms' }}
            >
              Our Programs
            </span>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4 transition-all duration-500 ${programsHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Programs in <span className="text-gradient">{section.acronym}</span>
            </h2>
            <p
              className={`text-base sm:text-lg text-neutral-600 transition-all duration-500 ${programsHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Explore the specialized programs within our {section.shortTitle}{" "}
              section.
            </p>
          </div>

          <div
            ref={programsGridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {section.programs.map((program, index) => (
              <div
                key={program.id}
                className={`transition-all duration-500 hover:-translate-y-2 ${programsGridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="h-full border-neutral-200 hover:shadow-xl hover:border-primary-200 transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 to-transparent" />
                    <div
                      className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-linear-to-br ${program.color} flex items-center justify-center`}
                    >
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                      {program.description}
                    </p>

                    {/* Features preview */}
                    <div className="space-y-2 mb-6">
                      {program.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent-500 shrink-0" />
                          <span className="text-xs text-neutral-600 truncate">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/programs/${program.slug}`}
                      className="inline-flex items-center text-primary-600 font-medium text-sm group/link"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="py-10 lg:py-16 bg-neutral-50">
        <div className="container">
          <div
            ref={otherSectionsHeaderRef}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <span
              className={`inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-all duration-500 ${otherSectionsHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '0ms' }}
            >
              Explore More
            </span>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 transition-all duration-500 ${otherSectionsHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Other Sections
            </h2>
          </div>

          <div
            ref={otherSectionsGridRef}
            className="grid sm:grid-cols-2 gap-4 sm:gap-8"
          >
            {otherSections.map((otherSection, index) => (
              <div
                key={otherSection.id}
                className={`transition-all duration-500 hover:-translate-y-1 ${otherSectionsGridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={`/sections/${otherSection.slug}`}
                  className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all group"
                >
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${otherSection.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <otherSection.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-primary-600 mb-0.5 sm:mb-1">
                      {otherSection.acronym}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {otherSection.shortTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500">
                      {otherSection.programs.length} programs
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <div
            ref={ctaRef}
            className={`text-center max-w-3xl mx-auto px-2 transition-all duration-500 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Want to Learn More About {section.acronym}?
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8">
              Contact us today to learn more about our {section.shortTitle}{" "}
              programs and how they can benefit your community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button size="lg" variant="white" className="w-full sm:w-auto" asChild>
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
    </div>
  );
}
