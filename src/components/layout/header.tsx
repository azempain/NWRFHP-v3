"use client";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { sections } from "@/data/sections";
import {
  Camera,
  ChevronDown,
  ChevronRight,
  Heart,
  Info,
  LinkedinIcon,
  Menu,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Top contact bar */}
      <div className="bg-primary-600">
        <div className="container mx-auto flex gap-6 items-center justify-end h-9 text-xs px-4 sm:px-6 lg:px-8">
          <Link
            href={`${siteConfig.social.linkedin}`}
            className="flex gap-2 items-center text-neutral-300 hover:text-white transition-colors duration-200 font-medium group"
          >
            <LinkedinIcon className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>
          <Link
            href={`tel:${siteConfig.contact.phone.primaryRaw}`}
            className="flex gap-2 items-center text-neutral-300 hover:text-white transition-colors duration-200 font-medium group"
          >
            <Phone className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Call Us</span>
          </Link>
          <Link
            href={`https://wa.me/${siteConfig.contact.whatsapp.numberRaw}`}
            className="flex gap-2 items-center text-neutral-300 hover:text-accent-400 transition-colors duration-200 font-medium group"
            rel="noopener"
            target="_blank"
          >
            <MessageCircle className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo variant="default" size="md" showTagline />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* About Link */}
            <Link
              href="/about"
              className="relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors group"
            >
              About Us
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
            </Link>

            {/* Sections Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSectionsOpen(true)}
              onMouseLeave={() => setIsSectionsOpen(false)}
            >
              <button
                className="relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors group flex items-center gap-1"
              >
                Our Sections
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isSectionsOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </button>

              {/* Mega Menu Dropdown */}
              {isSectionsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in"
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-6 w-180">
                    <div className="grid grid-cols-3 gap-6">
                      {sections.map((section) => (
                        <div key={section.id} className="space-y-3">
                          {/* Section Header */}
                          <Link
                            href={`/sections/${section.slug}`}
                            className="flex items-center gap-3 p-2 -m-2 rounded-xl hover:bg-neutral-50 transition-colors group"
                          >
                            <div
                              className={`w-10 h-10 rounded-xl ${section.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform`}
                            >
                              <section.icon
                                className={`w-5 h-5 ${section.iconColor}`}
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-neutral-900 text-sm group-hover:text-primary-600 transition-colors">
                                {section.acronym}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {section.programs.length} programs
                              </p>
                            </div>
                          </Link>

                          {/* Programs List */}
                          <div className="space-y-1 pl-2 border-l-2 border-neutral-100">
                            {section.programs.map((program) => (
                              <Link
                                key={program.id}
                                href={`/programs/${program.slug}`}
                                className="block px-3 py-1.5 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                              >
                                {program.shortTitle}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View All Link */}
                    <div className="mt-6 pt-4 border-t border-neutral-100">
                      <Link
                        href="/sections"
                        className="flex items-center justify-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        View All Sections & Programs
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link
              href="/team"
              className="relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors group"
            >
              Our Team
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
            </Link>
            <Link
              href="/contact"
              className="relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
            </Link>
            <Link
              href="/gallery"
              className="relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors group"
            >
              Gallery & News
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-neutral-100">
                <Menu className="h-6 w-6 text-neutral-800" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-90 border-l-0 p-0 overflow-hidden"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full bg-linear-to-b from-primary-600 via-primary-700 to-primary-800">
                {/* Mobile Header - Primary Blue Background */}
                <div
                  className={`relative px-6 pt-6 pb-8 ${isOpen ? "animate-slide-down" : ""}`}
                >
                  {/* Decorative blur circles */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute top-10 -left-10 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl" />

                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="relative flex items-center gap-4 group"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl overflow-hidden bg-white/20 backdrop-blur-sm p-1 ring-2 ring-white/30 group-hover:ring-white/50 transition-all ${isOpen ? "animate-scale-in delay-100" : ""}`}
                    >
                      <Image
                        src="/images/logo.jpg"
                        alt="NWRFHP Logo"
                        width={56}
                        height={56}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <div
                      className={`flex flex-col ${isOpen ? "animate-slide-left delay-200" : ""}`}
                    >
                      <span className="text-xl font-bold text-white tracking-tight">
                        NWRFHP
                      </span>
                      <span className="text-xs text-white/70 font-medium tracking-wide">
                        Health Promotion
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-4">
                  {isOpen && (
                    <div className="space-y-2 stagger-fast">
                      {/* About Link */}
                      <div className={`transition-animate ${isOpen ? "animate-slide-left" : "opacity-0"}`}>
                        <Link
                          href="/about"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-5 py-4 text-white font-medium text-base bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 group border border-white/10 hover:border-white/20"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                              <Info className="h-5 w-5 text-white/90" />
                            </div>
                            <span>About Us</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </Link>
                      </div>

                      {/* Sections with Expandable Programs */}
                      {sections.map((section, index) => (
                        <div key={section.id} className={`transition-animate ${isOpen ? "animate-slide-left" : "opacity-0"}`} style={{ transitionDelay: `${(index + 1) * 80}ms` }}>
                          <button
                            onClick={() =>
                              setExpandedMobileSection(
                                expandedMobileSection === section.id ? null : section.id
                              )
                            }
                            className="w-full flex items-center justify-between px-5 py-4 text-white font-medium text-base bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 group border border-white/10 hover:border-white/20"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-lg ${section.bgColor} flex items-center justify-center`}
                              >
                                <section.icon
                                  className={`h-5 w-5 ${section.iconColor}`}
                                />
                              </div>
                              <div className="text-left">
                                <span className="block">{section.acronym}</span>
                                <span className="text-xs text-white/60">
                                  {section.programs.length} programs
                                </span>
                              </div>
                            </div>
                            <ChevronDown
                              className={`h-5 w-5 text-white/60 transition-transform duration-200 ${
                                expandedMobileSection === section.id ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Expanded Programs */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              expandedMobileSection === section.id
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="pt-2 pl-6 space-y-1">
                              {section.programs.map((program) => (
                                <Link
                                  key={program.id}
                                  href={`/programs/${program.slug}`}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-3 px-4 py-3 text-white/80 text-sm bg-white/5 hover:bg-white/15 rounded-lg transition-colors"
                                >
                                  <program.icon className="w-4 h-4" />
                                  <span>{program.shortTitle}</span>
                                </Link>
                              ))}
                              <Link
                                href={`/sections/${section.slug}`}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-accent-400 text-sm font-medium hover:bg-white/10 rounded-lg transition-colors"
                              >
                                <span>View {section.acronym} Section</span>
                                <ChevronRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Other Nav Links */}
                      {[
                        { href: "/team", label: "Our Team", icon: Users },
                        { href: "/contact", label: "Contact", icon: Phone },
                        { href: "/gallery", label: "Gallery & News", icon: Camera },
                      ].map((link, index) => (
                        <div key={link.href} className={`transition-animate ${isOpen ? "animate-slide-left" : "opacity-0"}`} style={{ transitionDelay: `${(sections.length + index + 2) * 80}ms` }}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between px-5 py-4 text-white font-medium text-base bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 group border border-white/10 hover:border-white/20"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <link.icon className="h-5 w-5 text-white/90" />
                              </div>
                              <span>{link.label}</span>
                            </div>
                            <ChevronRight className="h-5 w-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Quick Links Section */}
                  <div
                    className={`mt-8 pt-6 border-t border-white/10 ${isOpen ? "animate-slide-up delay-500" : "opacity-0"}`}
                  >
                    <p
                      className="px-2 text-xs font-semibold text-white/50 uppercase tracking-wider mb-4"
                    >
                      Quick Access
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Link
                          href="/sections"
                          onClick={() => setIsOpen(false)}
                          className="flex flex-col items-center gap-2 p-4 text-white/80 text-sm bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                        >
                          <Heart className="h-5 w-5" />
                          <span className="text-xs text-center">All Sections</span>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="/socials"
                          onClick={() => setIsOpen(false)}
                          className="flex flex-col items-center gap-2 p-4 text-white/80 text-sm bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                        >
                          <MessageCircle className="h-5 w-5" />
                          <span className="text-xs text-center">Socials Committee</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>

                {/* Mobile Footer Actions */}
                <div
                  className={`p-5 bg-primary-900/50 backdrop-blur-sm space-y-3 border-t border-white/10 ${isOpen ? "animate-slide-up delay-600" : "opacity-0"}`}
                >
                  <Button
                    className="w-full bg-white text-primary-700 hover:bg-white/90 font-semibold shadow-lg"
                    size="lg"
                    asChild
                  >
                    <a href={`tel:${siteConfig.contact.phone.primaryRaw}`}>
                      <Phone className="h-4 w-4" />
                      Call Us Now
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 font-semibold"
                    size="lg"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.numberRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
