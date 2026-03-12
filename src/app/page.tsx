import {
  HeroSection,
  AboutPreviewSection,
  ServicesSection,
  ImpactSection,
  MissionSection,
  TestimonialsSection,
  PartnersSection,
  NewsSection,
  FAQSection,
  CTASection,
} from "@/components/sections";

export default function Home(): JSX.Element {
  return (
    <main>
      <HeroSection />
      <AboutPreviewSection />
      <ServicesSection />
      <ImpactSection />
      <MissionSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
