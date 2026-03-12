"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Heart,
  Baby,
  Droplets,
  Stethoscope,
  CheckCircle,
  ArrowRight,
  Phone,
  Users,
  Building,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";

const uhcPackages = [
  {
    id: 1,
    icon: Baby,
    title: "Children 0-5 Years",
    subtitle: "Free Consultations",
    description: "All children aged 0-5 years receive free medical consultations and treatment for malaria at enrolled government health facilities.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    features: [
      "Free consultation by doctors",
      "Malaria treatment included",
      "No registration required",
      "Available at all enrolled facilities",
    ],
  },
  {
    id: 2,
    icon: Heart,
    title: "Health Voucher",
    subtitle: "FCFA 6,000 Only",
    description: "Pregnant women pay just FCFA 6,000 for complete maternal care from conception to 42 days after delivery, including C-sections.",
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    features: [
      "4 antenatal visits covered",
      "Safe delivery (including C-section)",
      "42 days postnatal care",
      "Emergency transport included",
    ],
  },
  {
    id: 3,
    icon: Stethoscope,
    title: "HIV/AIDS & TB",
    subtitle: "Free Treatment",
    description: "Persons living with HIV/AIDS, Tuberculosis, and Onchocerciasis receive completely free treatment including consultations and medications.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    features: [
      "Free ARV medications",
      "Free TB treatment",
      "Regular consultations",
      "Laboratory tests included",
    ],
  },
  {
    id: 4,
    icon: Droplets,
    title: "Hemodialysis",
    subtitle: "FCFA 15,000/Year",
    description: "Kidney patients access unlimited dialysis sessions for just FCFA 15,000 annually instead of FCFA 520,000 - a 97% cost reduction.",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    features: [
      "Unlimited sessions for one year",
      "97% cost reduction",
      "Professional medical care",
      "Modern equipment",
    ],
  },
  {
    id: 5,
    icon: Users,
    title: "User Fee Removal",
    subtitle: "General Population",
    description: "The general public can access preventive and promotional health services free of charge at all enrolled government facilities.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    features: [
      "Free health education",
      "Preventive services",
      "Community outreach",
      "Promotional activities",
    ],
  },
];

const stats = [
  { value: "5", label: "Service Packages", icon: Shield },
  { value: `${siteConfig.stats.populationServed}M`, label: "Population Covered", icon: Users },
  { value: "90%", label: "Geographic Coverage", icon: Building },
  { value: "6K", label: "FCFA Health Voucher", icon: Heart },
];

export default function HealthPage() {
  const { ref: statsRef, isInView: statsInView } = useInView<HTMLDivElement>();
  const { ref: introContentRef, isInView: introContentInView } = useInView<HTMLDivElement>();
  const { ref: introImageRef, isInView: introImageInView } = useInView<HTMLDivElement>();
  const { ref: packagesHeaderRef, isInView: packagesHeaderInView } = useInView<HTMLDivElement>();
  const { ref: packagesRef, isInView: packagesInView } = useInView<HTMLDivElement>();
  const { ref: stepsRef, isInView: stepsInView } = useInView<HTMLDivElement>();
  const { ref: stepsImageRef, isInView: stepsImageInView } = useInView<HTMLDivElement>();
  const { ref: ctaRef, isInView: ctaInView } = useInView<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: Shield, text: "Universal Health Coverage" }}
        title="Quality Healthcare"
        titleHighlight="For Everyone"
        description="Comprehensive health coverage ensuring accessible, affordable, and quality healthcare for all residents of the North West Region through five key service packages."
        backgroundImage="/images/logu1.jpg"
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="white"
            asChild
          >
            <a href="#packages">
              View Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline-accent"
            className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
            asChild
          >
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Stats Section */}
      <section className="py-8 -mt-20 relative z-20">
        <div className="container">
          <div
            ref={statsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-fast"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 card-hover transition-animate ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</p>
                <p className="text-neutral-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div ref={introContentRef} className="stagger-children">
              <span
                className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${introContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                About UHC
              </span>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 transition-animate delay-100 ${introContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                Universal Health Coverage:{" "}
                <span className="text-gradient">The Umbrella of Care</span>
              </h2>
              <p
                className={`text-lg text-neutral-600 mb-6 leading-relaxed transition-animate delay-200 ${introContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                Universal Health Coverage (UHC) is a flagship health financing mechanism
                of the Government of Cameroon aimed at ensuring that all residents have
                access to quality healthcare services without facing financial hardship.
              </p>
              <p
                className={`text-neutral-600 mb-8 leading-relaxed transition-animate delay-300 ${introContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                Through NWRFHP, the UHC program in the North West Region covers five key
                service packages subsidized by the state budget, making essential healthcare
                accessible to the most vulnerable populations including children, pregnant
                women, and persons living with chronic conditions.
              </p>

              <div className={`flex flex-wrap gap-4 transition-animate delay-400 ${introContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <Button size="lg" asChild>
                  <Link href="/gallery">
                    <Users className="mr-2 h-5 w-5" />
                    Meet Our Team
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div
              ref={introImageRef}
              className={`relative transition-animate-slow ${introImageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/logu1.jpg"
                  alt="Universal Health Coverage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-900/30 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div
                className={`hidden lg:block absolute -bottom-6 left-4 xl:-left-6 bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 transition-animate delay-400 ${introImageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-600">5</p>
                    <p className="text-neutral-600 text-sm">Service Packages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UHC Packages Section */}
      <section id="packages" className="py-10 lg:py-14 bg-neutral-50">
        <div className="container">
          {/* Header */}
          <div
            ref={packagesHeaderRef}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span
              className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${packagesHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              UHC Packages
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 transition-animate delay-100 ${packagesHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              Five Packages of{" "}
              <span className="text-gradient">Health Coverage</span>
            </h2>
            <p
              className={`text-lg text-neutral-600 transition-animate delay-200 ${packagesHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              Comprehensive healthcare services subsidized by the government to ensure
              no one is left behind in accessing quality care.
            </p>
          </div>

          {/* Packages Grid */}
          <div
            ref={packagesRef}
            className="space-y-8"
          >
            {uhcPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl shadow-lg border border-neutral-100 overflow-hidden hover:shadow-xl transition-all duration-300 card-hover ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } ${packagesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 150}ms`, transition: 'opacity 0.6s ease, transform 0.6s ease' }}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${pkg.color} flex items-center justify-center shrink-0`}>
                        <pkg.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Badge className={`${pkg.bgColor} ${pkg.iconColor} border-0 mb-2`}>
                          Package {pkg.id}
                        </Badge>
                        <h3 className="text-2xl font-bold text-neutral-900">{pkg.title}</h3>
                        <p className="text-primary-600 font-semibold">{pkg.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full ${pkg.bgColor} flex items-center justify-center shrink-0`}>
                            <CheckCircle className={`w-4 h-4 ${pkg.iconColor}`} />
                          </div>
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`relative h-64 lg:h-auto ${pkg.bgColor} flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }} />
                    </div>
                    <div className="relative text-center p-8">
                      <div className={`w-24 h-24 mx-auto rounded-3xl bg-linear-to-br ${pkg.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <pkg.icon className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-4xl font-bold text-neutral-900">{pkg.subtitle}</p>
                      <p className={`text-sm ${pkg.iconColor} font-medium`}>{pkg.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Benefit Section */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div ref={stepsRef}>
              <span
                className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                Get Started
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-bold text-neutral-900 mb-8 transition-animate delay-100 ${stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                How to Become a{" "}
                <span className="text-gradient">Beneficiary</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Visit a Health Facility",
                    description: "Go to any enrolled government health facility or community pharmacy in the North West Region.",
                  },
                  {
                    step: "02",
                    title: "Register for Services",
                    description: "Register for the appropriate UHC package. Health Voucher costs FCFA 6,000, Dialysis costs FCFA 15,000 annually.",
                  },
                  {
                    step: "03",
                    title: "Receive Your Care",
                    description: "Access quality healthcare services as covered by your package. No hidden costs or additional fees.",
                  },
                  {
                    step: "04",
                    title: "Stay Healthy",
                    description: "Continue to benefit from follow-up care and preventive services included in your coverage.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 transition-animate ${stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{item.title}</h3>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div
              ref={stepsImageRef}
              className={`grid grid-cols-2 gap-4 transition-animate-slow ${stepsImageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src="/images/voucher.jpg" alt="Health Voucher" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src="/images/delivery.jpg" alt="Healthcare Delivery" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src="/images/front3.jpg" alt="Community" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src="/images/formulary.jpg" alt="Medicines" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-14 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <div
            ref={ctaRef}
            className={`text-center max-w-3xl mx-auto transition-animate ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Access Quality Healthcare?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Do not let cost be a barrier to your health. Register for Universal Health Coverage
              today and join millions of beneficiaries across the North West Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="white"
                asChild
              >
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
