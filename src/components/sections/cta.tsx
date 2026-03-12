"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";

export function CTASection() {
  const { ref, isInView } = useInView();

  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.contact.phone.primary,
      href: `tel:${siteConfig.contact.phone.primaryRaw}`,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email.primary,
      href: `mailto:${siteConfig.contact.email.primary}`,
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: siteConfig.contact.whatsapp.link,
      color: "from-green-500 to-green-600",
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location.shortAddress,
      href: siteConfig.location.googleMapsUrl,
      color: "from-red-500 to-red-600",
      external: true,
    },
  ];

  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`animate-on-scroll animate-fade-in-left transition-animate ${
              isInView ? "is-visible" : ""
            }`}
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-on-scroll animate-fade-in-up transition-animate delay-100 ${
                isInView ? "is-visible" : ""
              }`}
            >
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Join Our Healthcare Mission
              </span>
            </div>

            {/* Heading */}
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-on-scroll animate-fade-in-up transition-animate delay-200 ${
                isInView ? "is-visible" : ""
              }`}
            >
              Ready to Make a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-300 to-accent-400">
                Difference Together?
              </span>
            </h2>

            {/* Description */}
            <p
              className={`text-lg text-white/80 mb-8 leading-relaxed animate-on-scroll animate-fade-in-up transition-animate delay-300 ${
                isInView ? "is-visible" : ""
              }`}
            >
              Whether you are looking to partner with us, access our services, or support our mission,
              we would love to hear from you. Let us build a healthier community together.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 animate-on-scroll animate-fade-in-up transition-animate delay-400 ${
                isInView ? "is-visible" : ""
              }`}
            >
              <Button
                size="lg"
                variant="white"
                asChild
              >
                <Link href="/contact">
                  Get Started
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
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Contact Cards */}
          <div
            className={`grid gap-4 animate-on-scroll animate-fade-in-right transition-animate delay-200 ${
              isInView ? "is-visible" : ""
            }`}
          >
            {contactItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 hover:scale-[1.02] hover:translate-x-1 transition-all duration-300 animate-on-scroll animate-fade-in-up transition-animate ${
                  isInView ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/40 ml-auto group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
