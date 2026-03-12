"use client";

import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { PartnersSection } from "@/components/sections";
import { useInView } from "@/hooks/use-in-view";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone.primary,
    description: "Mon-Fri from 8am to 5pm",
    href: `tel:${siteConfig.contact.phone.primaryRaw}`,
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email.primary,
    description: "We'll respond within 24 hours",
    href: `mailto:${siteConfig.contact.email.primary}`,
    color: "bg-purple-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Start a conversation",
    description: "Quick responses guaranteed",
    href: siteConfig.contact.whatsapp.link,
    color: "bg-green-500",
    external: true,
  },
  {
    icon: MapPin,
    label: "Office",
    value: siteConfig.location.city,
    description: siteConfig.location.fullAddress,
    href: siteConfig.location.googleMapsUrl,
    color: "bg-red-500",
    external: true,
  },
];

export default function ContactPage() {
  const { ref: cardsRef, isInView: cardsInView } = useInView<HTMLDivElement>();
  const { ref: infoRef, isInView: infoInView } = useInView<HTMLDivElement>();
  const { ref: mapRef, isInView: mapInView } = useInView<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/096A0599.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-900/95 via-primary-900/85 to-primary-800/75" />
        </div>

        <div className="container relative z-10 py-10 lg:py-14">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium animate-hero-badge">
              <Mail className="w-4 h-4" />
              Get In Touch
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-hero-title">
              We Are Here to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-300 to-accent-400">
                Help You
              </span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-2xl animate-hero-subtitle">
              For enquiries, supplies, support, bulk purchase orders, or any kind of assistance,
              please contact us directly through any of the channels below.
            </p>

            <div className="flex flex-wrap gap-4 animate-hero-cta">
              <Button
                size="lg"
                variant="white"
                asChild
              >
                <a href={siteConfig.contact.whatsapp.link} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
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

      {/* Contact Methods */}
      <section className="py-8 lg:py-12 -mt-16 relative z-10">
        <div className="container">
          <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-neutral-100 transition-all duration-300 card-hover ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms`, transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease' }}
              >
                <div className={`w-14 h-14 rounded-xl ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">{method.label}</h3>
                <p className="text-primary-600 font-medium mb-2">{method.value}</p>
                <p className="text-sm text-neutral-500">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Additional Info */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Info */}
            <div
              ref={infoRef}
              className={`transition-animate ${infoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
                <Clock className="w-4 h-4" />
                Business Hours
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Visit Our Office
              </h2>

              <p className="text-neutral-600 mb-8 leading-relaxed">
                Our headquarters is located in Bamenda, the heart of the North West Region.
                We welcome visitors during business hours and are always ready to assist you.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Address</p>
                    <p className="text-neutral-600">{siteConfig.location.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Working Hours</p>
                    <p className="text-neutral-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-neutral-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <Button size="lg" asChild>
                <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Map placeholder */}
            <div
              ref={mapRef}
              className={`relative h-100 rounded-2xl overflow-hidden shadow-xl transition-animate ${mapInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63547.24!2d${siteConfig.location.coordinates.lng}!3d${siteConfig.location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f41b0f8c87c8f%3A0x2e9b5c1e3e7a8b3d!2sBamenda%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />
    </div>
  );
}
