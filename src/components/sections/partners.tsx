"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/use-in-view";

const partners = [
  { src: "/images/logo8.jpg", alt: "Ministry of Health", name: "Ministry of Health" },
  { src: "/images/logo1.gif", alt: "GIZ", name: "GIZ" },
  { src: "/images/logo3.png", alt: "USAID", name: "USAID" },
  { src: "/images/logo4.png", alt: "WHO", name: "WHO" },
  { src: "/images/logo5.png", alt: "KFW", name: "KFW" },
  { src: "/images/logo9.jpg", alt: "Universal Health Coverage", name: "Universal Health Coverage" },
];

export function PartnersSection() {
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, isInView: gridInView } = useInView<HTMLDivElement>();
  const { ref: statsRef, isInView: statsInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-8 lg:py-12 bg-white border-y border-neutral-100">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-animate ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
            Our Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
            Trusted by Leading Organizations
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Working together with government agencies and international organizations
            to deliver quality healthcare across the North West Region.
          </p>
        </div>

        {/* Partners Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center group transition-animate hover:scale-110 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-16 w-full flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={80}
                  className="h-16 w-auto object-contain grayscale-25 hover:grayscale-0 opacity-40 hover:cursor-pointer hover:opacity-100 transition-all duration-300"
                />
              </div>
              <p className="mt-3 text-xs text-neutral-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div
          ref={statsRef}
          className={`mt-12 pt-12 border-t border-neutral-100 transition-animate delay-400 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary-600">15+</p>
              <p className="text-sm text-neutral-600">Partner Organizations</p>
            </div>
            <div className="w-px h-12 bg-neutral-200 hidden sm:block" />
            <div>
              <p className="text-3xl font-bold text-primary-600">10+</p>
              <p className="text-sm text-neutral-600">International Funders</p>
            </div>
            <div className="w-px h-12 bg-neutral-200 hidden sm:block" />
            <div>
              <p className="text-3xl font-bold text-primary-600">{siteConfig.stats.yearsOfService}+</p>
              <p className="text-sm text-neutral-600">Years of Partnership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
