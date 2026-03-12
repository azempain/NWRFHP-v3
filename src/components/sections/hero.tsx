"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/head-office.jpg"
          alt="NWRFHP Healthcare"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay - Using new primary blue with stronger contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-primary-950/65 via-primary-900/50 to-primary-800/40" />
        <div className="absolute inset-0 bg-linear-to-t from-primary-950/60 via-transparent to-primary-950/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-bg-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-bg-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary-600/10 rounded-full blur-3xl animate-fade-in delay-500" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium animate-hero-badge">
              <span className="w-2.5 h-2.5 bg-accent-400 rounded-full animate-pulse" />
              Serving Communities Since {siteConfig.foundedYear}
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-lg animate-hero-title">
              Quality Healthcare for{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-300 via-accent-400 to-accent-300">
                North West Region
              </span>
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg lg:text-xl text-white/95 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md animate-hero-subtitle">
              We partner with organizations and communities to build a healthier future for over 2.2 million people in Cameroon.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start animate-hero-cta">
              {[
                `${siteConfig.stats.medicineAvailability}% Medicines Availability`,
                `${siteConfig.stats.healthDistricts}+ Health Districts`
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 text-sm text-white font-medium"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-slide-up delay-700">
              <Button
                size="lg"
                variant="default"
                className="w-full sm:w-auto group"
                asChild
              >
                <Link href="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="white"
                className="w-full sm:w-auto"
                asChild
              >
                <a href={`tel:${siteConfig.contact.phone.primaryRaw}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Today
                </a>
              </Button>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="hidden lg:block animate-hero-image">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-linear-to-r from-primary-500/20 to-accent-500/20 rounded-[2rem] blur-2xl" />

              {/* Main Stats Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-accent-400" />
                  <h3 className="text-white text-lg font-semibold">Our Impact in Numbers</h3>
                </div>

                <div className="grid grid-cols-2 gap-6 stagger-children">
                  {[
                    { value: `${siteConfig.stats.healthFacilities}+`, label: "Health Facilities", color: "primary" },
                    { value: `${siteConfig.stats.communitiesServed}k+`, label: "Communities Served", color: "accent" },
                    { value: `${siteConfig.stats.yearsOfService}+`, label: "Years of Service", color: "primary" },
                    { value: `${siteConfig.stats.healthWorkers}+`, label: "Health Workers Empowered", color: "accent" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                    >
                      <p className={`text-3xl xl:text-4xl font-bold ${stat.color === 'primary' ? 'text-white' : 'text-accent-400'}`}>
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/80 mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* WHO Badge */}
                <div className="mt-8 flex items-center justify-center gap-4 p-5 rounded-2xl bg-linear-to-r from-accent-500/20 to-primary-500/20 border border-white/10 animate-slide-up delay-1000">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-accent-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg">WHO Standards</p>
                    <p className="text-white/80 text-sm">Certified Healthcare Provider</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 animate-fade-in delay-1000">
          <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
