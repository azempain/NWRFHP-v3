"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import teamData from "@/data/team.json";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Building,
  Calendar,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  date: string;
  slug: string;
}

interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = use(params);
  const member = (teamData as TeamMember[]).find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  // Generate department from role
  const getDepartment = (role: string): string => {
    if (role.toLowerCase().includes("administrator") || role.toLowerCase().includes("admin")) {
      return "Administration";
    }
    if (role.toLowerCase().includes("finance") || role.toLowerCase().includes("accountant") || role.toLowerCase().includes("cashier")) {
      return "Finance Department";
    }
    if (role.toLowerCase().includes("uhc") || role.toLowerCase().includes("universal health")) {
      return "UHC";
    }
    if (role.toLowerCase().includes("health") || role.toLowerCase().includes("program")) {
      return "Health Programs";
    }
    if (role.toLowerCase().includes("secretary") || role.toLowerCase().includes("secretariat")) {
      return "Secretariat";
    }
    if (role.toLowerCase().includes("hr") || role.toLowerCase().includes("human")) {
      return "Human Resources";
    }
    if (role.toLowerCase().includes("supervisor") || role.toLowerCase().includes("distribution")) {
      return "Distribution & Supervision";
    }
    if (role.toLowerCase().includes("lab") || role.toLowerCase().includes("laboratory")) {
      return "Laboratory Services";
    }
    if (role.toLowerCase().includes("store") || role.toLowerCase().includes("medical store")) {
      return "Regional Medical Store";
    }
    if (role.toLowerCase().includes("driver") || role.toLowerCase().includes("janitor")) {
      return "Operations & Support";
    }
    return "Operations";
  };

  // Get the level/rank from role
  const getLevel = (role: string): string => {
    const roleLower = role.toLowerCase();
    if (roleLower.includes("administrator")) return "Administrator";
    if (roleLower.includes("head of section")) return "Head of Section";
    if (roleLower.includes("head of unit")) return "Head of Unit";
    if (roleLower.includes("officer") || roleLower.includes("auditor") || roleLower.includes("scientist")) return "Officer";
    if (roleLower.includes("assistant")) return "Assistant";
    if (roleLower.includes("storekeeper")) return "Storekeeper";
    if (roleLower.includes("driver")) return "Driver";
    if (roleLower.includes("janitor")) return "Support Staff";
    if (roleLower.includes("secretary")) return "Secretary";
    if (roleLower.includes("cashier")) return "Finance Staff";
    return "Staff";
  };

  const department = getDepartment(member.role);
  const level = getLevel(member.role);

  // Get related team members (same department, level, or section)
  const getRelatedMembers = (): TeamMember[] => {
    const allMembers = teamData as TeamMember[];
    const otherMembers = allMembers.filter((m) => m.slug !== slug);

    // Score members by relevance
    const scoredMembers = otherMembers.map((m) => {
      let score = 0;
      const mDepartment = getDepartment(m.role);
      const mLevel = getLevel(m.role);

      // Same department = highest priority
      if (mDepartment === department) score += 3;
      // Same level = high priority
      if (mLevel === level) score += 2;
      // Similar keywords in role
      const memberKeywords = member.role.toLowerCase().split(/[\s,]+/);
      const otherKeywords = m.role.toLowerCase().split(/[\s,]+/);
      const commonKeywords = memberKeywords.filter(k =>
        k.length > 3 && otherKeywords.includes(k)
      );
      score += commonKeywords.length;

      return { member: m, score };
    });

    // Sort by score (descending) and take top 8
    return scoredMembers
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((s) => s.member);
  };

  const relatedMembers = getRelatedMembers();

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-14 bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-bg-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-bg-float-delayed" />
        </div>

        <div className="container relative z-10">
          {/* Back Link */}
          <div className="mb-8 animate-hero-badge">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10" asChild>
              <Link href="/team">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative animate-hero-image">
              <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-950/40 via-transparent to-transparent" />
              </div>

              {/* Date Badge */}
              <div className="hidden lg:block absolute -bottom-6 right-4 xl:-right-6 bg-white rounded-2xl p-5 border border-neutral-200 animate-slide-up delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Joined</p>
                    <p className="font-semibold text-neutral-900">{member.date}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="stagger-children">
              <div className="animate-slide-up">
                <Badge className="bg-white/10 border-white/20 text-white/90 mb-4">
                  {department}
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slide-up delay-100">
                {member.name}
              </h1>

              <p className="text-xl text-accent-300 font-medium mb-6 animate-slide-up delay-200">
                {member.role}
              </p>

              <div className="prose prose-lg max-w-none animate-slide-up delay-300">
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  As a valued member of the NWRFHP team, {member.name} plays a crucial role
                  in our organization&apos;s mission to promote health and wellness across the
                  North West Region of Cameroon. With expertise in {member.role.toLowerCase()},
                  they contribute significantly to our efforts in ensuring quality healthcare
                  delivery to communities throughout the region.
                </p>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Working within the {department} department, {member.name.split(" ")[0]} collaborates
                  with fellow team members to support NWRFHP&apos;s various programs including
                  essential medicines management, community health services, and universal
                  health coverage initiatives.
                </p>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Since joining NWRFHP in {member.date}, {member.name.split(" ")[0]} has been
                  instrumental in advancing our organization&apos;s goals of making healthcare
                  accessible and affordable for all residents of the North West Region.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8 animate-slide-up delay-400">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Building className="w-5 h-5 text-accent-400" />
                  <div>
                    <p className="text-xs text-white/50">Department</p>
                    <p className="text-white font-medium">{department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Award className="w-5 h-5 text-accent-400" />
                  <div>
                    <p className="text-xs text-white/50">Role</p>
                    <p className="text-white font-medium text-sm">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-slide-up delay-500">
                <Button
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-neutral-100"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10"
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
        </div>
      </section>

      {/* Related Team Members */}
      <section className="py-8 lg:py-12 bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
              Related Colleagues
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              Team Members You May Know
            </h2>
            <p className="mt-4 text-neutral-600">
              Colleagues from {department} and similar roles
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {relatedMembers.map((relatedMember) => (
              <div key={relatedMember.id} className="group">
                <Link
                  href={`/team/${relatedMember.slug}`}
                  className="block bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-primary-300 transition-colors duration-300"
                >
                  <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                    <Image
                      src={relatedMember.image}
                      alt={relatedMember.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-white font-medium text-sm">
                        <ArrowRight className="mr-2 w-4 h-4" />
                        View Profile
                      </span>
                    </div>
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1 text-sm md:text-base">
                      {relatedMember.name}
                    </h3>
                    <p className="text-neutral-500 text-xs md:text-sm line-clamp-1">
                      {relatedMember.role.split(",")[0]}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link href="/team">
                View All Team Members
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-14 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Users className="w-4 h-4" />
              Join Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Want to Work With Us?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We are always looking for passionate individuals who want to make a
              difference in healthcare delivery across the North West Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100"
                asChild
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
