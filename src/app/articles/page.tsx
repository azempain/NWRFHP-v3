import { formatArticleDate, getLatestArticles } from "@/data/articles";
import { ArticlesHero } from "@/components/articles/articles-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Newspaper, Tag } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles | NWRFHP",
  description:
    "Latest news, articles, and updates from the North West Regional Fund for Health Promotion.",
};

export default function ArticlesPage() {
  const allArticles = getLatestArticles();
  const [featured, ...rest] = allArticles;

  return (
    <div className="min-h-screen bg-neutral-50">
      <ArticlesHero />

      <div className="container py-16 lg:py-24">
        {/* Featured Article */}
        {featured && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider">
                <Newspaper className="w-3.5 h-3.5" />
                Featured Article
              </span>
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            <Link href={`/articles/${featured.slug}`} className="group block">
              <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-72 lg:h-full min-h-72 overflow-hidden">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-600 text-white border-0 shadow-md">
                      {featured.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        {formatArticleDate(featured.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary-400" />
                        {featured.location}
                      </span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    {featured.subtitle && (
                      <p className="text-base font-medium text-primary-600 mb-4">
                        {featured.subtitle}
                      </p>
                    )}
                    <p className="text-neutral-600 leading-relaxed line-clamp-3">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button
                      size="lg"
                      className="group/btn bg-primary-600 hover:bg-primary-700"
                      asChild
                    >
                      <span>
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-medium"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}

        {/* More Articles Grid */}
        {rest.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold uppercase tracking-wider">
                More Articles
              </span>
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {rest.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 border border-neutral-100 h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-neutral-900/50 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-primary-600 text-white border-0 text-xs">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatArticleDate(article.publishedAt)}
                        </span>
                      </div>
                      <h3 className="font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-neutral-600 text-sm line-clamp-2 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-primary-600 text-sm font-medium">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {allArticles.length === 0 && (
          <div className="text-center py-24">
            <Newspaper className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">
              No articles yet
            </h3>
            <p className="text-neutral-500">
              Check back soon for the latest updates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
