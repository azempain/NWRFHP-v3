"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";

export function AboutPreviewSection() {
  const { ref: leftRef, isInView: leftInView } = useInView<HTMLDivElement>();
  const { ref: rightRef, isInView: rightInView } = useInView<HTMLDivElement>();

  const highlights = [
    "Public Interest Group since 2012",
    "Government-backed healthcare initiative",
    `Serving ${siteConfig.stats.populationServed} million population`,
    "WHO quality standards",
  ];

  return (
    <section className="py-10 lg:py-16 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Images */}
          <div
            ref={leftRef}
            className={`relative transition-animate ${leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Main Image */}
            <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/096A0583.jpg"
                alt="NWRFHP Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-900/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <div
              className={`hidden lg:block absolute -bottom-8 right-4 xl:-right-12 bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 max-w-xs transition-animate delay-400 ${leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">{siteConfig.stats.yearsOfService}+</p>
                  <p className="text-neutral-600 text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Accent Shape */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent-100 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 left-1/4 w-16 h-16 bg-primary-100 rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div
            ref={rightRef}
            className="stagger-children"
          >
            <span
              className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              About NWRFHP
            </span>

            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight transition-animate delay-100 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              Promoting Quality Healthcare{" "}
              <span className="text-gradient">Since 1987</span>
            </h2>

            <p
              className={`text-lg text-neutral-600 mb-6 leading-relaxed transition-animate delay-200 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              The North West Regional Fund for Health Promotion (NWRFHP-PIG) is a public
              corporate dialogue structure dedicated to ensuring accessible, affordable,
              and quality healthcare for all residents of Cameroon&apos;s North West Region.
            </p>

            <p
              className={`text-neutral-600 mb-8 leading-relaxed transition-animate delay-300 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              Established in line with the Bamako Initiative, we operate {siteConfig.stats.communityPharmacies} community
              pharmacies and partner with government and international organizations to
              deliver comprehensive healthcare services.
            </p>

            {/* Highlights */}
            <div
              className={`grid sm:grid-cols-2 gap-4 mb-8 transition-animate delay-400 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-accent-600" />
                  </div>
                  <span className="text-neutral-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div
              className={`flex flex-wrap gap-8 mb-8 pb-8 border-b border-neutral-100 transition-animate delay-500 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">{siteConfig.stats.healthFacilities}</p>
                  <p className="text-sm text-neutral-500">Pharmacies</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-neutral-900">{siteConfig.stats.populationServed}M+</p>
                  <p className="text-sm text-neutral-500">People Served</p>
                </div>
              </div>
            </div>

            <div className={`transition-animate delay-600 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <Button size="lg" asChild className="group">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
