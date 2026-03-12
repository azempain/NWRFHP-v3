"use client";

import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";
import {
  ArrowRight,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  Filter,
  GraduationCap,
  Handshake,
  Heart,
  MapPin,
  PartyPopper,
  Search,
  Sparkles,
  Stethoscope,
  Truck,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

// Event categories
const categories = [
  { value: "all", label: "All Events", icon: Camera },
  { value: "distribution", label: "Medicine Distribution", icon: Truck },
  { value: "outreach", label: "Community Outreach", icon: MapPin },
  { value: "health-voucher", label: "Health Voucher", icon: Heart },
  { value: "training", label: "Training & Capacity", icon: GraduationCap },
  { value: "partnerships", label: "Partner Events", icon: Handshake },
  { value: "uhc", label: "UHC Activities", icon: Stethoscope },
  { value: "social", label: "Social Events", icon: PartyPopper },
];

// Featured highlights for carousel
const featuredHighlights = [
  {
    image: "/images/coach.jpg",
    title: "Staff Coaching Session",
    description: "LUKONG JULIUS leads an engaging coaching session to enhance team skills and service delivery.",
    category: "Training",
  },
  {
    image: "/images/puncture.jpg",
    title: "Field Operations",
    description: "KUH JOSEPH handles van maintenance during delivery operations, ensuring medicines reach their destinations.",
    category: "Operations",
  },
  {
    image: "/images/offload.jpg",
    title: "Medicine Delivery",
    description: "KUH JOSEPH oversees the offloading of essential medicines at community pharmacies across the region.",
    category: "Logistics",
  },
  {
    image: "/images/voucher.jpg",
    title: "Health Voucher Program",
    description: "Pregnant women receive health vouchers worth FCFA 6,000 for complete maternal care coverage.",
    category: "Health Voucher",
  },
];

// Recent activities
const recentActivities = [
  {
    title: "Community Health Outreach",
    description: "Our team visited remote communities to provide health education and screenings.",
    date: "Recent",
  },
  {
    title: "Staff Development Workshop",
    description: "Quarterly training to enhance service delivery and customer care skills.",
    date: "Recent",
  },
  {
    title: "Medicine Distribution",
    description: "Successful delivery of essential medicines to all 430 community pharmacies.",
    date: "Ongoing",
  },
  {
    title: "Partner Coordination Meeting",
    description: "Strategic planning with international partners for improved healthcare delivery.",
    date: "Recent",
  },
];

// Gallery events data
const galleryEvents = [
  // Medicine Distribution
  {
    id: "1",
    title: "Medicine Distribution to Bamenda District",
    description: "Our logistics team successfully delivered essential medicines to 45 community pharmacies across Bamenda Health District, ensuring availability of critical healthcare supplies.",
    image: "/images/offload.jpg",
    category: "distribution",
    date: "2024",
    location: "Bamenda Health District",
  },
  {
    id: "2",
    title: "Regional Medical Store Operations",
    description: "Daily operations at our Regional Medical Store where we manage inventory for over 430 community pharmacies across the North West Region.",
    image: "/images/store.jpg",
    category: "distribution",
    date: "2024",
    location: "Regional Medical Store, Bamenda",
  },
  {
    id: "3",
    title: "Field Delivery Operations",
    description: "Our dedicated drivers navigate challenging terrain to ensure medicines reach even the most remote health facilities in the region.",
    image: "/images/puncture.jpg",
    category: "distribution",
    date: "2024",
    location: "North West Region",
  },
  // Community Outreach
  {
    id: "4",
    title: "Community Health Education Campaign",
    description: "Health education sessions conducted in rural communities to raise awareness about preventive healthcare and available UHC services.",
    image: "/images/front3.jpg",
    category: "outreach",
    date: "2024",
    location: "Rural Communities, NWR",
  },
  {
    id: "5",
    title: "Mobile Health Screening Program",
    description: "Our team provides free health screenings to community members, identifying health issues early and connecting people with appropriate care.",
    image: "/images/096A0583.jpg",
    category: "outreach",
    date: "2024",
    location: "Various Locations",
  },
  // Health Voucher Program
  {
    id: "6",
    title: "Health Voucher Distribution Ceremony",
    description: "Pregnant women receive their health vouchers worth FCFA 6,000, giving them access to complete maternal care from conception to 42 days after delivery.",
    image: "/images/voucher.jpg",
    category: "health-voucher",
    date: "2024",
    location: "Enrolled Health Facilities",
  },
  {
    id: "7",
    title: "Safe Delivery Under Health Voucher",
    description: "A successful delivery at one of our enrolled facilities. The Health Voucher program covers all costs including C-sections if needed.",
    image: "/images/delivery.jpg",
    category: "health-voucher",
    date: "2024",
    location: "Regional Hospital",
  },
  {
    id: "8",
    title: "Antenatal Care Sessions",
    description: "Regular antenatal visits covered by the Health Voucher program ensure healthy pregnancies and safe deliveries for mothers across the region.",
    image: "/images/magg1.jpg",
    category: "health-voucher",
    date: "2024",
    location: "Health Centers, NWR",
  },
  // Training & Capacity Building
  {
    id: "9",
    title: "Staff Development Workshop",
    description: "Quarterly training sessions to enhance the skills of our healthcare workers in customer service, inventory management, and healthcare delivery.",
    image: "/images/coach.jpg",
    category: "training",
    date: "2024",
    location: "NWRFHP Head Office",
  },
  {
    id: "10",
    title: "Pharmacy Management Training",
    description: "Capacity building program for community pharmacy managers on stock management, quality assurance, and patient counseling.",
    image: "/images/formulary.jpg",
    category: "training",
    date: "2024",
    location: "Training Center, Bamenda",
  },
  // Partner Events
  {
    id: "11",
    title: "GIZ Partnership Meeting",
    description: "Strategic coordination meeting with GIZ to strengthen healthcare delivery systems and expand coverage of essential health services.",
    image: "/images/logo1.gif",
    category: "partnerships",
    date: "2024",
    location: "Conference Room",
  },
  {
    id: "12",
    title: "Ministry of Health Coordination",
    description: "Working closely with the Ministry of Public Health to align our programs with national health priorities and policies.",
    image: "/images/head-office.jpg",
    category: "partnerships",
    date: "2024",
    location: "Ministry of Health",
  },
  // UHC Activities
  {
    id: "13",
    title: "Children Under 5 Free Consultation",
    description: "Children aged 0-5 years receiving free medical consultations and malaria treatment at enrolled government health facilities.",
    image: "/images/logu1.jpg",
    category: "uhc",
    date: "2024",
    location: "Health Facilities, NWR",
  },
  {
    id: "14",
    title: "Hemodialysis Service Delivery",
    description: "Our hemodialysis program provides kidney patients with unlimited dialysis sessions for just FCFA 15,000 annually - a 97% cost reduction.",
    image: "/images/store.jpg",
    category: "uhc",
    date: "2024",
    location: "Dialysis Centers",
  },
  // Social Events
  {
    id: "15",
    title: "Annual Staff Appreciation Day",
    description: "Celebrating the dedication of our team members who work tirelessly to ensure healthcare reaches every corner of the North West Region.",
    image: "/images/social1.jpg",
    category: "social",
    date: "2024",
    location: "NWRFHP Premises",
  },
  {
    id: "16",
    title: "International Women's Day Celebration",
    description: "Honoring the 18 dedicated women of NWRFHP who form the backbone of our exceptional customer service and healthcare delivery.",
    image: "/images/njamsi.JPG",
    category: "social",
    date: "2024",
    location: "NWRFHP Head Office",
  },
  {
    id: "17",
    title: "Medal Award Ceremony",
    description: "Staff members receive recognition for their outstanding contributions to healthcare delivery in the North West Region.",
    image: "/images/fonmedal1.jpg",
    category: "social",
    date: "2024",
    location: "Ceremony Hall",
  },
  {
    id: "18",
    title: "Team Building Activities",
    description: "Building stronger bonds among team members through various social and recreational activities.",
    image: "/images/social2.jpg",
    category: "social",
    date: "2024",
    location: "Various Venues",
  },
  {
    id: "19",
    title: "End of Year Celebration",
    description: "Annual celebration bringing together all staff to reflect on achievements and set goals for the coming year.",
    image: "/images/social3.jpg",
    category: "social",
    date: "2024",
    location: "NWRFHP Premises",
  },
  {
    id: "20",
    title: "Staff Social Gathering",
    description: "Regular social gatherings that strengthen team spirit and foster a positive working environment.",
    image: "/images/social4.jpg",
    category: "social",
    date: "2024",
    location: "Bamenda",
  },
];

interface GalleryEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  location: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [lightboxVisible, setLightboxVisible] = useState(false);

  // InView hooks for scroll animations
  const { ref: featuredRef, isInView: featuredInView } = useInView();
  const { ref: carouselRef, isInView: carouselInView } = useInView();
  const { ref: activitiesLeftRef, isInView: activitiesLeftInView } = useInView();
  const { ref: activitiesRightRef, isInView: activitiesRightInView } = useInView({ rootMargin: "-50px" });
  const { ref: statsRef, isInView: statsInView } = useInView();
  const { ref: statsGridRef, isInView: statsGridInView } = useInView();
  const { ref: filterRef, isInView: filterInView } = useInView();
  const { ref: ctaRef, isInView: ctaInView } = useInView();

  // Auto-play carousel
  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselApi]);

  const filteredEvents = useMemo(() => {
    return galleryEvents.filter((event) => {
      const matchesCategory =
        selectedCategory === "all" || event.category === selectedCategory;
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openLightbox = (event: GalleryEvent, index: number) => {
    setSelectedEvent(event);
    setCurrentIndex(index);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + filteredEvents.length) % filteredEvents.length;
    setCurrentIndex(newIndex);
    setSelectedEvent(filteredEvents[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredEvents.length;
    setCurrentIndex(newIndex);
    setSelectedEvent(filteredEvents[newIndex]);
  };

  const getCategoryIcon = (categoryValue: string) => {
    const category = categories.find((c) => c.value === categoryValue);
    return category?.icon || Camera;
  };

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: Camera, text: "Gallery & News" }}
        title="Our Activities"
        titleHighlight="& Events"
        description="Explore moments captured across our healthcare programs, community outreach initiatives, and organizational events that showcase our commitment to quality healthcare."
        backgroundImage="/images/096A0583.jpg"
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="white"
            asChild
          >
            <Link href="/programs">
              <Heart className="mr-2 h-5 w-5" />
              Our Programs
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline-accent"
            className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
            asChild
          >
            <Link href="/team">Meet Our Team</Link>
          </Button>
        </div>
      </PageHero>

      {/* Featured Highlights Carousel */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div
            ref={featuredRef}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <span
              className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${featuredInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              Featured Stories
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 transition-animate ${featuredInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Highlights from{" "}
              <span className="text-gradient">The Fund</span>
            </h2>
            <p
              className={`text-lg text-neutral-600 transition-animate ${featuredInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Capturing the moments and efforts that drive our mission forward.
            </p>
          </div>

          <div
            ref={carouselRef}
            className={`max-w-5xl mx-auto transition-animate ${carouselInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <Carousel
              setApi={setCarouselApi}
              className="w-full rounded-2xl overflow-hidden shadow-xl"
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent>
                {featuredHighlights.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                        <Badge className="bg-primary-600 text-white border-0 mb-3">
                          {item.category}
                        </Badge>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base max-w-2xl line-clamp-2">
                          {item.description}
                        </p>
                      </div>
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

      {/* Recent Activities Section */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div ref={activitiesLeftRef}>
              <span
                className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${activitiesLeftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                Recent Activities
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 transition-animate ${activitiesLeftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '100ms' }}
              >
                What We Have Been{" "}
                <span className="text-gradient">Up To</span>
              </h2>
              <p
                className={`text-lg text-neutral-600 mb-8 leading-relaxed transition-animate ${activitiesLeftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '200ms' }}
              >
                Our team is constantly engaged in activities that improve healthcare
                delivery across the North West Region. Here are some of our recent
                initiatives.
              </p>

              <div
                className={`transition-animate ${activitiesLeftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '300ms' }}
              >
                <Button size="lg" asChild>
                  <Link href="/programs">
                    View Our Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div
              ref={activitiesRightRef}
              className="space-y-4"
            >
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className={`transition-animate hover:translate-x-2 ${activitiesRightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-neutral-200 bg-white">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                          <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-neutral-900 text-sm md:text-base truncate">
                              {activity.title}
                            </h3>
                            <Badge variant="secondary" className="bg-neutral-100 text-neutral-600 shrink-0 text-xs">
                              {activity.date}
                            </Badge>
                          </div>
                          <p className="text-neutral-600 text-xs md:text-sm line-clamp-2">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <div
            ref={statsRef}
            className={`text-center mb-10 transition-animate ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Making a Difference Every Day
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our daily activities contribute to the overall health and well-being
              of the North West Region.
            </p>
          </div>

          <div
            ref={statsGridRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { value: `${siteConfig.stats.communityPharmacies}+`, label: "Pharmacies Served" },
              { value: `${siteConfig.stats.populationServed}M`, label: "Population Reached" },
              { value: `${siteConfig.stats.healthDistricts}+`, label: "Health Districts" },
              { value: `${siteConfig.stats.yearsOfService}+`, label: "Years of Service" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 text-center transition-animate hover:-translate-y-1 hover:scale-[1.02] ${statsGridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</p>
                <p className="text-white/70 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-neutral-50" id="browse">
        <div className="container">
          <div
            ref={filterRef}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span
              className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${filterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              Photo Gallery
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 transition-animate ${filterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Browse All{" "}
              <span className="text-gradient">Events</span>
            </h2>
          </div>

          <div
            className={`flex flex-col gap-6 transition-animate ${filterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Search */}
            <div className="relative w-full max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search events, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-neutral-200 focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className={`rounded-full transition-all duration-300 ${
                      selectedCategory === category.value
                        ? "bg-primary-600 hover:bg-primary-700 text-white shadow-md"
                        : "bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <div
            className={`mt-6 flex items-center justify-center gap-2 text-neutral-600 transition-animate ${filterInView ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <Filter className="h-4 w-4" />
            <span className="text-sm">
              Showing <strong className="text-neutral-900">{filteredEvents.length}</strong> events
              {selectedCategory !== "all" && (
                <span>
                  {" "}in{" "}
                  <Badge variant="secondary" className="ml-1">
                    {categories.find((c) => c.value === selectedCategory)?.label}
                  </Badge>
                </span>
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16">
        <div className="container">
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <div
                    key={event.id}
                    className="group transition-animate opacity-100 translate-y-0 hover:-translate-y-2"
                    style={{ transitionDelay: `${Math.min(index * 60, 600)}ms` }}
                  >
                    <div
                      onClick={() => openLightbox(event, index)}
                      className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-neutral-100 h-full"
                    >
                      {/* Image Container */}
                      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-neutral-100">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-white/90 text-neutral-800 backdrop-blur-sm text-xs">
                            <CategoryIcon className="w-3 h-3 mr-1" />
                            <span className="hidden sm:inline">{categories.find((c) => c.value === event.category)?.label}</span>
                          </Badge>
                        </div>

                        {/* Hover overlay content */}
                        <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-2 text-white text-sm font-medium">
                            <Camera className="h-4 w-4" />
                            <span>View Details</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-3 sm:p-4 md:p-5">
                        <h3 className="font-bold text-neutral-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors text-sm md:text-base">
                          {event.title}
                        </h3>
                        <p className="text-neutral-600 text-xs md:text-sm line-clamp-2 mb-2 sm:mb-3 hidden sm:block">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-2 sm:gap-4 text-xs text-neutral-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                className="col-span-full text-center py-20"
              >
                <Camera className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                  No events found
                </h3>
                <p className="text-neutral-500 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedEvent && (
        <div
          className={`fixed inset-0 z-50 bg-neutral-900/95 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 ${lightboxVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Content */}
          <div
            className={`bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row transition-all duration-300 ${lightboxVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full md:w-3/5 h-64 sm:h-80 md:h-auto md:min-h-[500px] shrink-0">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto">
              <Badge
                variant="secondary"
                className="w-fit bg-primary-50 text-primary-700 mb-4"
              >
                {categories.find((c) => c.value === selectedEvent.category)?.label}
              </Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                {selectedEvent.title}
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {selectedEvent.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-neutral-600">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Date</p>
                    <p className="font-medium text-neutral-900">{selectedEvent.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-neutral-600">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Location</p>
                    <p className="font-medium text-neutral-900">{selectedEvent.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-neutral-100 flex flex-wrap gap-3">
                <Button asChild className="flex-1 sm:flex-none">
                  <Link href="/programs">
                    View Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="flex-1 sm:flex-none">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {filteredEvents.length}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div
            ref={ctaRef}
            className={`bg-linear-to-br from-primary-600 to-primary-800 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 text-center transition-animate ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Heart className="w-4 h-4" />
              Be Part of Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Join Us in Making Healthcare Accessible
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Whether as a partner, volunteer, or beneficiary - there are many ways to be part
              of our mission to bring quality healthcare to every community in the North West Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="white"
                asChild
              >
                <Link href="/contact">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline-accent"
                className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
                asChild
              >
                <Link href="/health">Learn About UHC</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
