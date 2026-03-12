"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Heart, ArrowRight, Sparkles, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PageHero } from "@/components/shared/page-hero";
import { useInView } from "@/hooks/use-in-view";

const committeeMembers = [
  { name: "LUKONG JULIUS", role: "Obstetrics Kit Management Unit", image: "/images/lukong.JPG" },
  { name: "FON EVELENE MUNDI", role: "Computerized Stock Management Unit", image: "/images/fon3.jpg" },
  { name: "FOPA TEMBONG ALIDA", role: "Laboratory Unit", image: "/images/alida.jpg" },
  { name: "ASAFOR ATUNGOMBI ANIMBOM", role: "Administrative Assistant", image: "/images/anembum.JPG" },
  { name: "NGWANA ALPHONSE", role: "Driver and Janitor", image: "/images/ngwana.JPG" },
  { name: "TAMANJONG DIVINE AMBE", role: "Regional Medical Store - Storekeeper", image: "/images/ambe.JPG" },
];

const socialEvents = [
  "/images/social1.jpg",
  "/images/social2.jpg",
  "/images/social3.jpg",
  "/images/social4.jpg",
  "/images/social5.jpg",
  "/images/social6.jpg",
  "/images/social7.jpg",
  "/images/social8.jpg",
  "/images/social10.jpg",
  "/images/social12.jpg",
];

export default function SocialPage() {
  const [api, setApi] = useState<CarouselApi>();
  const { ref: aboutRef, isInView: aboutInView } = useInView<HTMLDivElement>();
  const { ref: aboutImageRef, isInView: aboutImageInView } = useInView<HTMLDivElement>();
  const { ref: committeeHeaderRef, isInView: committeeHeaderInView } = useInView<HTMLDivElement>();
  const { ref: committeeHeadRef, isInView: committeeHeadInView } = useInView<HTMLDivElement>();
  const { ref: committeeMembersRef, isInView: committeeMembersInView } = useInView<HTMLDivElement>();
  const { ref: ladiesImageRef, isInView: ladiesImageInView } = useInView<HTMLDivElement>();
  const { ref: ladiesContentRef, isInView: ladiesContentInView } = useInView<HTMLDivElement>();
  const { ref: eventsRef, isInView: eventsInView } = useInView<HTMLDivElement>();
  const { ref: ctaRef, isInView: ctaInView } = useInView<HTMLDivElement>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: Heart, text: "Social Activities" }}
        title="Our Community"
        titleHighlight="& Social Life"
        description="We believe in fostering strong relationships and community bonds. Our social activities are a key part of our mission to serve with care and dedication."
        backgroundImage="/images/social1.jpg"
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-primary-700 hover:bg-neutral-100"
            asChild
          >
            <Link href="/team">
              <Users className="mr-2 h-5 w-5" />
              Meet Our Team
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10"
            asChild
          >
            <Link href="/gallery">View Gallery</Link>
          </Button>
        </div>
      </PageHero>

      {/* About Social Activities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div ref={aboutRef}>
              <span
                className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                About Our Social Activities
              </span>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 transition-animate delay-100 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                Building Stronger{" "}
                <span className="text-gradient">Communities Together</span>
              </h2>
              <p
                className={`text-lg text-neutral-600 mb-6 leading-relaxed transition-animate delay-200 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                We work every single day during our working periods to render you with
                services that will provide you with the satisfaction you deserve.
              </p>
              <p
                className={`text-neutral-600 mb-8 leading-relaxed transition-animate delay-300 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                That is why we carry out social activities as one of our strategies to
                enable us complete our health package provision. Our team bonds translate
                to better service for our communities.
              </p>
              <div className={`transition-animate delay-400 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div
              ref={aboutImageRef}
              className={`relative transition-animate-slow ${aboutImageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="relative h-100 lg:h-125 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/magg1.jpg"
                  alt="Social Mobilizer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-900/40 to-transparent" />
              </div>
              <div
                className={`hidden lg:block absolute -bottom-6 left-4 xl:-left-6 bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 transition-animate delay-400 ${aboutImageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-neutral-900">Social Mobilizer</p>
                    <p className="text-neutral-600 text-sm">Community Outreach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Committee Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container">
          <div
            ref={committeeHeaderRef}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span
              className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${committeeHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              Social Committee
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 transition-animate delay-100 ${committeeHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              Meet Our{" "}
              <span className="text-gradient">Committee Members</span>
            </h2>
            <p
              className={`text-lg text-neutral-600 transition-animate delay-200 ${committeeHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              The dedicated individuals who organize and lead our social initiatives.
            </p>
          </div>

          {/* Committee Head */}
          <div
            ref={committeeHeadRef}
            className={`max-w-4xl mx-auto mb-16 transition-animate ${committeeHeadInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto md:min-h-100">
                  <Image
                    src="/images/ndum.JPG"
                    alt="NDUM SEPHERINE KENG"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-10 flex flex-col justify-center bg-linear-to-br from-primary-600 to-primary-800 text-white">
                  <Badge className="w-fit bg-white/20 text-white border-0 mb-4">
                    Committee Head
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    NDUM SEPHERINE KENG
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    She is head of the social committee of the North West Regional Fund
                    For Health Promotion, leading our community engagement initiatives.
                  </p>
                  <Button
                    variant="outline"
                    className="w-fit border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/team">
                      View Full Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Committee Members Grid */}
          <div
            ref={committeeMembersRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {committeeMembers.map((member, index) => (
              <div
                key={index}
                className={`transition-animate ${committeeMembersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-neutral-200 bg-white h-full card-hover">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-neutral-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-sm md:text-base lg:text-lg font-bold text-neutral-900 mb-1 md:mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                      {member.name}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 line-clamp-2">{member.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-animate delay-600 ${committeeMembersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <Button size="lg" asChild>
              <Link href="/team">
                View All Team Members
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ladies of the Fund */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              ref={ladiesImageRef}
              className={`relative order-2 lg:order-1 transition-animate-slow ${ladiesImageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="relative h-100 lg:h-125 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/njamsi.JPG"
                  alt="MADAM NJAMSI MILDRED"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-900/40 to-transparent" />
              </div>
              <div
                className={`hidden lg:block absolute -bottom-6 right-4 xl:-right-6 bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 transition-animate delay-400 ${ladiesImageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-neutral-900">18</p>
                    <p className="text-neutral-600 text-sm">Female Staff</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={ladiesContentRef}
              className="order-1 lg:order-2"
            >
              <span
                className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-accent-600 bg-accent-50 rounded-full transition-animate ${ladiesContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                Ladies of the Fund
              </span>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 transition-animate delay-100 ${ladiesContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                Our Amazing{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-500 to-accent-600">
                  Women Team
                </span>
              </h2>
              <p
                className={`text-lg text-neutral-600 mb-6 leading-relaxed transition-animate delay-200 ${ladiesContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                The North West Regional Fund For Health Promotion has eighteen female
                staff who are the backbone of our exceptional customer service.
              </p>

              <div className={`space-y-4 mb-8 transition-animate delay-300 ${ladiesContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                {["Energetic", "Intelligent", "Generous", "Charismatic"].map(
                  (trait, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-accent-600" />
                      </div>
                      <span className="text-lg font-semibold text-neutral-800">
                        {trait}
                      </span>
                    </div>
                  )
                )}
              </div>

              <p
                className={`text-neutral-600 mb-8 transition-animate delay-400 ${ladiesContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                All of these qualities explain why our customer services are unique
                and highly valued by our community.
              </p>

              <div className={`transition-animate delay-500 ${ladiesContentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <Button size="lg" asChild>
                  <Link href="/team">
                    Discover Our Ladies
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Carousel */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <div
            ref={eventsRef}
            className={`text-center mb-12 transition-animate ${eventsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Social Events
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              More Social Events
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Capturing the moments that bring our team together and strengthen
              our bonds.
            </p>
          </div>

          <div
            className={`max-w-5xl mx-auto transition-animate delay-200 ${eventsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <Carousel
              setApi={setApi}
              className="w-full rounded-2xl overflow-hidden shadow-2xl"
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent>
                {socialEvents.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-100 lg:h-125">
                      <Image
                        src={src}
                        alt={`Social event ${index + 1}`}
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
              <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div
            ref={ctaRef}
            className={`text-center max-w-3xl mx-auto transition-animate ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
              Join Our Community
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-neutral-600 mb-8">
              Whether you want to work with us or learn more about our activities,
              we welcome you to reach out and connect with our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
