# NWRFHP Complete Website Redesign - Part 3
## Page Implementations, Image Sourcing & Migration Guide

---

## PAGE IMPLEMENTATIONS

### Homepage (app/page.tsx)

```typescript
// app/(marketing)/page.tsx
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { ProgramsSection } from "@/components/sections/programs";
import { MissionSection } from "@/components/sections/mission";
import { ImpactSection } from "@/components/sections/impact";
import { PartnersSection } from "@/components/sections/partners";
import { CTASection } from "@/components/sections/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NWRFHP - Quality Healthcare for North West Region",
  description: "Promoting sustainable access to essential medicines and quality health services across the North West Region of Cameroon.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <ProgramsSection />
      <ImpactSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
}
```

### Hero Section

```typescript
// components/sections/hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInUp, fadeIn } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 lg:min-h-[700px]">
      {/* Background Pattern (optional) */}
      <div className="absolute inset-0 bg-[url('/patterns/medical-grid.svg')] opacity-5" />
      
      <div className="container relative z-10 px-4 py-20 text-center lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            variants={slideInUp}
          >
            Quality Healthcare for{" "}
            <span className="text-primary">North West Region</span>
          </motion.h1>
          
          <motion.p 
            className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground sm:text-xl"
            variants={slideInUp}
            transition={{ delay: 0.2 }}
          >
            Promoting sustainable access to essential medicines and health services
            for the population since 1987
          </motion.p>
          
          <motion.div 
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={slideInUp}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href="/programs">
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+237651421052">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
}
```

### Stats Section

```typescript
// components/sections/stats.tsx
"use client";

import { StatCard } from "@/components/shared/stat-card";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { Building2, Users, Package, MapPin } from "lucide-react";

const stats = [
  {
    value: 217,
    label: "Community Pharmacies",
    icon: Building2,
  },
  {
    value: 90,
    label: "Population Coverage",
    suffix: "%",
    icon: Users,
  },
  {
    value: 95,
    label: "Medicine Availability",
    suffix: "%",
    icon: Package,
  },
  {
    value: 19,
    label: "Health Districts Served",
    icon: MapPin,
  },
];

export function StatsSection() {
  return (
    <section className="border-b bg-muted/50 py-16 lg:py-24">
      <div className="container px-4">
        <StaggerContainer>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  icon={stat.icon}
                  delay={index * 0.1}
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
```

### Mission Section

```typescript
// components/sections/mission.tsx
"use client";

import { SlideInUp } from "@/components/animations/slide-in-up";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Our Vision",
    description: "To assist the Ministry of Public Health in providing sustainable quality healthcare for the population.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "Promoting access to quality healthcare by improving the performance of the health system.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Collaboration, communication, openness, respect, partnership, and outcome-focused decision making.",
  },
];

export function MissionSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container px-4">
        <SlideInUp>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Our Purpose
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Committed to improving healthcare access and quality across North West Region
            </p>
          </div>
        </SlideInUp>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item, index) => (
            <SlideInUp key={item.title} delay={index * 0.2}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </SlideInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Programs Section

```typescript
// components/sections/programs.tsx
"use client";

import { ProgramCard } from "@/components/shared/program-card";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { SlideInUp } from "@/components/animations/slide-in-up";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Essential Medicines Management",
    description: "Ensuring 95% availability of quality medicines across 217 community pharmacies serving rural and urban populations.",
    imageUrl: "/images/programs/medicines.jpg",
    slug: "essential-medicines",
  },
  {
    title: "Community Health Services",
    description: "Comprehensive primary healthcare services delivered through our extensive network of community health workers.",
    imageUrl: "/images/programs/community-health.jpg",
    slug: "community-health",
  },
  {
    title: "Universal Health Coverage",
    description: "Working towards accessible, affordable, and quality healthcare for all residents of North West Region.",
    imageUrl: "/images/programs/uhc.jpg",
    slug: "universal-health-coverage",
  },
];

export function ProgramsSection() {
  return (
    <section className="border-t bg-background py-16 lg:py-24">
      <div className="container px-4">
        <SlideInUp>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Our Programs
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive healthcare initiatives improving lives across the region
            </p>
          </div>
        </SlideInUp>

        <StaggerContainer>
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <StaggerItem key={program.slug}>
                <ProgramCard {...program} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <SlideInUp className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </SlideInUp>
      </div>
    </section>
  );
}
```

### Programs Listing Page

```typescript
// app/(marketing)/programs/page.tsx
import { ProgramCard } from "@/components/shared/program-card";
import { SlideInUp } from "@/components/animations/slide-in-up";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs | NWRFHP",
  description: "Explore our comprehensive healthcare programs serving the North West Region of Cameroon.",
};

const allPrograms = [
  {
    title: "Essential Medicines Management",
    description: "Comprehensive pharmaceutical supply chain management ensuring availability of quality medicines across 217 community pharmacies.",
    imageUrl: "/images/programs/medicines.jpg",
    slug: "essential-medicines",
  },
  {
    title: "Community Health Services",
    description: "Primary healthcare delivery through trained community health workers and integrated health programs.",
    imageUrl: "/images/programs/community-health.jpg",
    slug: "community-health",
  },
  {
    title: "Universal Health Coverage",
    description: "Expanding access to affordable, quality healthcare services for all population groups.",
    imageUrl: "/images/programs/uhc.jpg",
    slug: "universal-health-coverage",
  },
  {
    title: "Health System Strengthening",
    description: "Building capacity of health facilities and personnel to deliver quality services.",
    imageUrl: "/images/programs/health-systems.jpg",
    slug: "health-systems",
  },
  {
    title: "Community Pharmacy Network",
    description: "Supporting 217 community pharmacies with training, supplies, and quality assurance.",
    imageUrl: "/images/programs/pharmacy-network.jpg",
    slug: "pharmacy-network",
  },
  {
    title: "Training & Capacity Building",
    description: "Continuous professional development for health workers and dialogue structure members.",
    imageUrl: "/images/programs/training.jpg",
    slug: "training",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="border-b bg-muted/50 py-16">
        <div className="container px-4 text-center">
          <SlideInUp>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
              Our Programs
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive healthcare initiatives improving lives across North West Region
            </p>
          </SlideInUp>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <StaggerContainer>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allPrograms.map((program) => (
                <StaggerItem key={program.slug}>
                  <ProgramCard {...program} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
```

### About Page

```typescript
// app/(marketing)/about/page.tsx
import { SlideInUp } from "@/components/animations/slide-in-up";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | NWRFHP",
  description: "Learn about NWRFHP's history, mission, and commitment to healthcare in North West Region.",
};

const coreValues = [
  {
    title: "Collaboration",
    description: "Improving and sustaining performance through teamwork at all system levels.",
  },
  {
    title: "Communication",
    description: "Effective information flow between all stakeholders and the community.",
  },
  {
    title: "Openness",
    description: "Transparent performance monitoring and factual reporting.",
  },
  {
    title: "Respect",
    description: "Valuing the role of everyone engaged in improving performance.",
  },
  {
    title: "Partnership",
    description: "Collaborative approach to providing accessible and equitable healthcare.",
  },
  {
    title: "Outcome Focused",
    description: "Performance-based decision making for programs and services.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b bg-muted/50 py-16 lg:py-24">
        <div className="container px-4">
          <SlideInUp>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
                About NWRFHP
              </h1>
              <p className="text-lg text-muted-foreground">
                The North West Regional Fund for Health Promotion is a public corporate dialogue 
                structure committed to promoting quality healthcare for all residents of North West Region.
              </p>
            </div>
          </SlideInUp>
        </div>
      </section>

      {/* History */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SlideInUp>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border-2 border-border">
                <Image
                  src="/images/about/history.jpg"
                  alt="NWRFHP History"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideInUp>
            <SlideInUp delay={0.2}>
              <div>
                <h2 className="mb-6 text-3xl font-bold">Our History</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Established in 1987 as a revolving medicines program, NWRFHP has evolved into 
                    a comprehensive public interest group dedicated to health promotion.
                  </p>
                  <p>
                    Formally constituted on June 11, 2012, in accordance with Law No. 2010/023, 
                    we operate as a public corporate dialogue structure bringing together the state, 
                    technical/financial partners, and the North West community.
                  </p>
                  <p>
                    Today, we serve 90% of the population through 217 community pharmacies, 
                    maintaining 95% medicine availability and supporting health services across 
                    19 health districts.
                  </p>
                </div>
              </div>
            </SlideInUp>
          </div>
        </div>
      </section>

      <Separator />

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <SlideInUp>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To assist the Ministry of Public Health in providing sustainable quality 
                    healthcare for the population of North West Region.
                  </p>
                </CardContent>
              </Card>
            </SlideInUp>

            <SlideInUp delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Promoting access to quality healthcare for the population by improving 
                    the performance of the health system across all levels.
                  </p>
                </CardContent>
              </Card>
            </SlideInUp>
          </div>
        </div>
      </section>

      <Separator />

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <SlideInUp>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Six values and attitudes that shape behavior and drive continuous improvement
              </p>
            </div>
          </SlideInUp>

          <StaggerContainer>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value) => (
                <StaggerItem key={value.title}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
```

### Contact Page with Form

```typescript
// app/(marketing)/contact/page.tsx
"use client";

import { SlideInUp } from "@/components/animations/slide-in-up";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <main>
      {/* Header */}
      <section className="border-b bg-muted/50 py-16">
        <div className="container px-4 text-center">
          <SlideInUp>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Contact Us</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Get in touch with our team for inquiries, support, or partnerships
            </p>
          </SlideInUp>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <SlideInUp>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+237651421052"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +237 651 421 052
                    </a>
                  </CardContent>
                </Card>
              </SlideInUp>

              <SlideInUp delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:info@nwrfhp.org"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@nwrfhp.org
                    </a>
                  </CardContent>
                </Card>
              </SlideInUp>

              <SlideInUp delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Bamenda
                      <br />
                      North West Region
                      <br />
                      Cameroon
                    </p>
                  </CardContent>
                </Card>
              </SlideInUp>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SlideInUp delay={0.3}>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            {...register("name")}
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder="+237..."
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            {...register("subject")}
                            placeholder="How can we help?"
                          />
                          {errors.subject && (
                            <p className="text-sm text-destructive">
                              {errors.subject.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          placeholder="Your message..."
                          rows={6}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button type="submit" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </SlideInUp>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

## IMAGE SOURCING - AFRICAN MEDICAL CONTENT

### Top Sources for High-Quality African Healthcare Images

**1. Unsplash (Free, High Quality)**
```
Search Terms:
- "african healthcare"
- "african hospital"
- "african doctor"
- "african medical"
- "cameroon health"
- "african pharmacy"
- "community health africa"

Recommended Collections:
- https://unsplash.com/s/photos/african-healthcare
- https://unsplash.com/s/photos/african-doctor
- https://unsplash.com/s/photos/african-hospital
```

**2. Pexels (Free, Commercial Use)**
```
Search Terms:
- "african healthcare worker"
- "african clinic"
- "african medicine"
- "healthcare cameroon"
- "african medical team"

URL: https://www.pexels.com/search/african%20healthcare/
```

**3. Pixabay (Free, No Attribution)**
```
Search Terms:
- "african health"
- "medical africa"
- "african hospital"
- "healthcare workers africa"

URL: https://pixabay.com/images/search/african%20healthcare/
```

**4. WHO Photo Library (Free, Authentic)**
```
World Health Organization's collection of real African healthcare images

URL: https://www.who.int/publications/i
Sections: Africa region, immunization, maternal health
```

**5. UNICEF Photo Library**
```
Authentic images from UNICEF programs in Cameroon and West Africa

URL: https://www.unicef.org/media/photo-library
Filter: Cameroon, Health, West and Central Africa
```

**6. Médecins Sans Frontières (MSF) Photo Library**
```
High-quality images from actual healthcare programs

URL: https://www.msf.org/photo-library
Filter: Cameroon, West Africa
```

### Image Categories Needed

**Homepage:**
```
1. Hero Image: African healthcare worker with community (1920x1080)
2. Medicine Distribution: Pharmacy/medicine dispensing (1200x800)
3. Community Health: Group of community health workers (1200x800)
4. Facility: Modern African health facility exterior (1200x800)
```

**Programs Page:**
```
1. Essential Medicines: Pharmacist organizing medicines (800x600)
2. Community Health: Health worker visiting rural home (800x600)
3. UHC: Healthcare consultation scene (800x600)
4. Health Systems: Training session for health workers (800x600)
5. Pharmacy Network: Community pharmacy storefront (800x600)
6. Training: Health workers in training session (800x600)
```

**About Page:**
```
1. History: Historic photo of NWRFHP facility (1200x800)
2. Team: Professional headshots of staff (400x400 each)
3. Mission: Healthcare delivery in action (1200x800)
```

**Gallery Page:**
```
1. Staff Photos: Professional team photos (400x400 each)
2. Field Work: Various field activities (600x400 each)
3. Facilities: Different health facilities (600x400 each)
4. Events: Community health events (600x400 each)
```

### Image Optimization Checklist

```bash
# Next.js Image Component (automatic optimization)
<Image
  src="/images/programs/medicines.jpg"
  alt="Medicine distribution at community pharmacy"
  width={800}
  height={600}
  quality={85}
  priority={false} // true only for above-fold images
  placeholder="blur"
  blurDataURL="data:image/..." // generated by plaiceholder
/>

# Manual Optimization (if needed)
- Format: Convert to WebP
- Size: Compress to 85% quality
- Dimensions: Match exact use case
- Alt text: Descriptive, keyword-rich
- Loading: Lazy load below fold
```

---

## MIGRATION GUIDE

### Step-by-Step Migration from Current Site

**Phase 1: Setup & Foundation (Week 1)**

```bash
# 1. Create new Next.js project
pnpm create next-app@latest nwrfhp-new --typescript --tailwind --app --use-pnpm

# 2. Install Shadcn UI
cd nwrfhp-new
pnpm dlx shadcn-ui@latest init

# 3. Install all dependencies (from package.json above)
pnpm install

# 4. Setup project structure
mkdir -p app/(marketing)/{about,programs,gallery,contact,health}
mkdir -p components/{ui,layout,sections,animations,shared}
mkdir -p lib/{animations,validations}
mkdir -p public/images/{hero,programs,team,partners}

# 5. Configure Tailwind (use config from Part 1)
# 6. Setup globals.css (use config from Part 1)
```

**Phase 2: Install Shadcn Components (Week 1)**

```bash
# Install all necessary components
pnpm dlx shadcn-ui@latest add button
pnpm dlx shadcn-ui@latest add card
pnpm dlx shadcn-ui@latest add input
pnpm dlx shadcn-ui@latest add label
pnpm dlx shadcn-ui@latest add textarea
pnpm dlx shadcn-ui@latest add form
pnpm dlx shadcn-ui@latest add navigation-menu
pnpm dlx shadcn-ui@latest add sheet
pnpm dlx shadcn-ui@latest add separator
pnpm dlx shadcn-ui@latest add avatar
pnpm dlx shadcn-ui@latest add tabs
pnpm dlx shadcn-ui@latest add accordion
pnpm dlx shadcn-ui@latest add dialog
pnpm dlx shadcn-ui@latest add toast
pnpm dlx shadcn-ui@latest add carousel
pnpm dlx shadcn-ui@latest add scroll-area
```

**Phase 3: Build Core Components (Week 2)**

```typescript
// 1. Animation wrappers (from Part 2)
// 2. Layout components (Header, Footer)
// 3. Shared components (ProgramCard, StatCard, etc.)
// 4. Custom Shadcn modifications (flat design variants)
```

**Phase 4: Build Pages (Weeks 3-4)**

```
Day 1-2: Homepage
Day 3-4: Programs page + individual program pages
Day 5-6: About page
Day 7-8: Contact page
Day 9-10: Gallery page
Day 11-12: Health/UHC page
Day 13-14: Polish and refinements
```

**Phase 5: Content Migration (Week 5)**

```
1. Extract all text content from old site
2. Download all existing images
3. Organize content by page
4. Replace with new images where better quality available
5. Update all text for clarity and SEO
6. Add metadata to all pages
```

**Phase 6: Testing & QA (Week 6)**

```
1. Cross-browser testing (Chrome, Firefox, Safari, Edge)
2. Mobile responsive testing (iOS Safari, Android Chrome)
3. Accessibility audit (WAVE, axe DevTools)
4. Performance testing (Lighthouse, PageSpeed Insights)
5. Form testing (all form submissions)
6. Link checking (all internal and external links)
7. SEO audit (meta tags, structured data, sitemaps)
```

**Phase 7: Deployment (Week 7)**

```
1. Setup hosting (Vercel recommended for Next.js)
2. Configure domain (nwrfundforhealth.org)
3. Setup SSL certificate
4. Configure environment variables
5. Deploy to production
6. Monitor for 48 hours
7. Fix any issues
8. Redirect old URLs to new structure
```

### Content Migration Mapping

```
OLD SITE → NEW SITE

/                          → / (homepage)
/about                     → /about
/programs                  → /programs
/gallery                   → /gallery (includes info & activities)
/contact                   → /contact
/health                    → /health
/infos                     → /gallery (consolidated)
/animation                 → /about (consolidate)
/socials                   → Remove (add social links to footer)

All images:                → /public/images/[category]/
All static assets:         → /public/
```

### SEO & Performance Optimization

```typescript
// app/layout.tsx - Root metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://nwrfundforhealth.org'),
  title: {
    default: 'NWRFHP - North West Regional Fund For Health Promotion',
    template: '%s | NWRFHP',
  },
  description: 'Promoting sustainable access to quality healthcare and essential medicines across North West Region of Cameroon since 1987.',
  keywords: ['healthcare Cameroon', 'NWRFHP', 'North West Region health', 'community pharmacy', 'essential medicines', 'universal health coverage'],
  authors: [{ name: 'NWRFHP' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nwrfundforhealth.org',
    siteName: 'NWRFHP',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'NWRFHP - Quality Healthcare for North West Region',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NWRFHP - Quality Healthcare for North West Region',
    description: 'Promoting sustainable access to quality healthcare since 1987',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### Performance Checklist

```typescript
// next.config.js
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
```

---

## FINAL DEPLOYMENT CHECKLIST

- [ ] All pages built and tested
- [ ] All images optimized and placed
- [ ] All animations working smoothly
- [ ] Forms validated and tested
- [ ] Mobile responsive on all pages
- [ ] Accessibility score 90+ (Lighthouse)
- [ ] Performance score 90+ (Lighthouse)
- [ ] SEO score 90+ (Lighthouse)
- [ ] All meta tags configured
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] 404 page created
- [ ] Loading states implemented
- [ ] Error handling implemented
- [ ] Analytics configured
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Old site redirects setup

---

This completes the comprehensive redesign specification. You now have:
1. Complete technical stack
2. All dependencies and setup
3. Animation system with Framer Motion
4. All page implementations
5. Image sourcing guide
6. Complete migration plan

Ready to build a world-class healthcare website! 🚀
