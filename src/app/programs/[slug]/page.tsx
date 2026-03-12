"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Activity,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/shared/page-hero";
import { getProgramWithSection, getAllPrograms } from "@/data/sections";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";

interface ProgramPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = use(params);
  const result = getProgramWithSection(slug);

  // Scroll-triggered animation hooks
  const { ref: statsRef, isInView: statsInView } = useInView();
  const { ref: aboutRef, isInView: aboutInView } = useInView();
  const { ref: imageRef, isInView: imageInView } = useInView();
  const { ref: cardsRef, isInView: cardsInView } = useInView();
  const { ref: relatedHeaderRef, isInView: relatedHeaderInView } = useInView();
  const { ref: relatedGridRef, isInView: relatedGridInView } = useInView({ rootMargin: "-50px" });
  const { ref: ctaRef, isInView: ctaInView } = useInView();

  if (!result) {
    notFound();
  }

  const { program, section } = result;
  const allPrograms = getAllPrograms();

  // Get related programs from same section first, then others
  const sameSectionPrograms = section.programs.filter((p) => p.slug !== slug);
  const otherPrograms = allPrograms.filter(
    (p) => p.slug !== slug && p.sectionId !== section.id
  );
  const relatedPrograms = [...sameSectionPrograms, ...otherPrograms].slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: program.icon, text: program.shortTitle }}
        title={program.title}
        description={program.description}
        backgroundImage={program.heroImage}
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="white" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Get Involved
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline-accent"
            className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
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
      <section className="hidden lg:flex py-8 -mt-20 relative z-20">
        <div className="container">
          <div
            ref={statsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {program.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 text-center transition-all duration-500 hover:-translate-y-1 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-3xl font-bold text-primary-600 mb-1">
                  {stat.value}
                </p>
                <p className="text-neutral-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Navigation & Section Breadcrumb */}
      <section className="pt-8">
        <div className="container">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="ghost" asChild className="group">
              <Link href="/programs">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform uppercase" />
                Back to all Programs
              </Link>
            </Button>
            <div className="hidden sm:flex items-center gap-2 text-sm text-neutral-500">
              <span>|</span>
              <Link
                href={`/sections/${section.slug}`}
                className="flex items-center gap-2 hover:text-primary-600 transition-colors"
              >
                <section.icon className={`w-4 h-4 ${section.iconColor}`} />
                <span>Part of {section.acronym}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div ref={aboutRef}>
              <div
                className={`flex items-center gap-3 mb-4 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                <Badge className={`${section.bgColor} ${section.iconColor} border-0`}>
                  <section.icon className="w-3.5 h-3.5 mr-1.5" />
                  {section.acronym}
                </Badge>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Program
                </span>
              </div>
              <h2
                className={`text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '100ms' }}
              >
                {program.title}
              </h2>
              <p
                className={`text-lg text-neutral-600 leading-relaxed mb-8 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '200ms' }}
              >
                {program.fullDescription}
              </p>

              {/* Features Grid */}
              <div
                className={`grid sm:grid-cols-2 gap-4 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '300ms' }}
              >
                {program.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${program.bgColor} flex items-center justify-center shrink-0`}
                    >
                      <CheckCircle className={`w-4 h-4 ${program.iconColor}`} />
                    </div>
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div ref={imageRef} className="relative">
              <div
                className={`relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div
                className={`absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-neutral-100 transition-all duration-500 ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${program.color} flex items-center justify-center mb-3`}
                >
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-neutral-900">{program.shortTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives, Beneficiaries, Activities */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container">
          <div
            ref={cardsRef}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Objectives */}
            <div
              className={`transition-all duration-500 ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <Card className="h-full border-neutral-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Objectives
                  </h3>
                  <ul className="space-y-3">
                    {program.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                        <span className="text-neutral-600 text-sm">
                          {objective}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Beneficiaries */}
            <div
              className={`transition-all duration-500 ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <Card className="h-full border-neutral-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Beneficiaries
                  </h3>
                  <ul className="space-y-3">
                    {program.beneficiaries.map((beneficiary, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                        <span className="text-neutral-600 text-sm">
                          {beneficiary}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Activities */}
            <div
              className={`transition-all duration-500 ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <Card className="h-full border-neutral-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                    <Activity className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Key Activities
                  </h3>
                  <ul className="space-y-3">
                    {program.activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-neutral-600 text-sm">
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-8 lg:py-12 bg-neutral-50">
        <div className="container">
          <div
            ref={relatedHeaderRef}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span
              className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-all duration-500 ${relatedHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              Explore More
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-neutral-900 transition-all duration-500 ${relatedHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Related Programs
            </h2>
          </div>

          <div
            ref={relatedGridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {relatedPrograms.map((relatedProgram, index) => (
              <div
                key={relatedProgram.id}
                className={`transition-all duration-500 hover:-translate-y-2 ${relatedGridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={`/programs/${relatedProgram.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-neutral-100 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProgram.image}
                      alt={relatedProgram.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent" />
                    <div
                      className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-linear-to-br ${relatedProgram.color} flex items-center justify-center`}
                    >
                      <relatedProgram.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {relatedProgram.title}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-2 mb-4">
                      {relatedProgram.description}
                    </p>
                    <span className="inline-flex items-center text-primary-600 font-medium text-sm">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-12 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <div
            ref={ctaRef}
            className={`text-center max-w-3xl mx-auto transition-all duration-500 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Access This Program?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact us today to learn more about how you can benefit from our{" "}
              {program.shortTitle} program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="white" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline-accent"
                className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
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
