"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/use-in-view";
import { news } from "@/data/news";

export function NewsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView({ rootMargin: "-50px" });

  return (
    <section className="py-10 lg:py-16 bg-neutral-50">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 stagger-children ${
            headerInView ? "is-visible" : ""
          }`}
        >
          <div>
            <span
              className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full animate-on-scroll animate-fade-in-up transition-animate ${
                headerInView ? "is-visible" : ""
              }`}
            >
              Latest Updates
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 animate-on-scroll animate-fade-in-up transition-animate delay-100 ${
                headerInView ? "is-visible" : ""
              }`}
            >
              News &{" "}
              <span className="text-gradient">Announcements</span>
            </h2>
          </div>
          <div
            className={`animate-on-scroll animate-fade-in-up transition-animate delay-200 ${
              headerInView ? "is-visible" : ""
            }`}
          >
            <Button variant="outline" asChild>
              <Link href="/gallery">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* News Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 stagger-children ${
            gridInView ? "is-visible" : ""
          }`}
        >
          {news.map((item, index) => (
            <article
              key={item.id}
              className={`animate-on-scroll animate-fade-in-up transition-animate ${
                gridInView ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={item.href}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-neutral-100 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-primary-700 hover:bg-white">
                    {item.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-neutral-600 line-clamp-2 mb-4">
                    {item.excerpt}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center text-primary-600 font-medium text-sm">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
