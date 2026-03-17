"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import { getFeaturedArticle, formatArticleDate } from "@/data/articles";

export function NewsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: cardRef, isInView: cardInView } = useInView({ rootMargin: "-50px" });

  const article = getFeaturedArticle();
  if (!article) return null;

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 stagger-children ${
            headerInView ? "is-visible" : ""
          }`}
        >
          <div>
            <span
              className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              Featured Article
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 transition-animate delay-100 ${
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              Latest{" "}
              <span className="text-gradient">News</span>
            </h2>
          </div>
          <div
            className={`transition-animate delay-200 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <Button variant="outline" asChild>
              <Link href="/articles">
                All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Featured Article Card */}
        <div
          ref={cardRef}
          className={`transition-animate ${cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Link
            href={`/articles/${article.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-72 sm:h-96 lg:h-full min-h-80 overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 via-neutral-900/10 to-transparent lg:bg-linear-to-r" />
              {/* Category badge on image */}
              <span className="absolute top-5 left-5 px-3 py-1 bg-primary-500 text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                {article.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary-400" />
                  {formatArticleDate(article.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  {article.location}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                {article.title}
              </h3>

              {/* Subtitle */}
              {article.subtitle && (
                <p className="text-sm font-medium text-primary-600 mb-4">
                  {article.subtitle}
                </p>
              )}

              {/* Excerpt */}
              <p className="text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm">
                Read Full Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
