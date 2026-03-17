import {
  articles,
  formatArticleDate,
  getArticleBySlug,
  getLatestArticles,
  type ContentBlock,
} from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Newspaper,
  Tag,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ─── Static Params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | NWRFHP`,
    description: article.excerpt,
  };
}

// ─── Content Block Renderer ───────────────────────────────────────────────────
// Typography inspired by Medium: comfortable 18–19px body, generous line-height,
// neutral-500/600 colours (never full black), normal font-weight for prose.
function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-neutral-600 font-normal mb-7">
          {block.text}
        </p>
      );

    case "section-heading":
      return (
        <h2 className="mt-14 mb-4 text-xl sm:text-2xl font-semibold text-neutral-800 tracking-tight">
          {block.heading}
        </h2>
      );

    case "bullets":
      return (
        <ul className="mb-8 space-y-4 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3.5">
              <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
              <span className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-neutral-600 font-normal">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote className="my-12 pl-5 border-l-[3px] border-primary-400">
          <p className="text-xl sm:text-2xl font-normal italic text-neutral-500 leading-relaxed">
            {block.text}
          </p>
        </blockquote>
      );

    case "image":
      return (
        <figure className="my-12 -mx-4 sm:-mx-10 lg:-mx-16">
          <div className="relative w-full aspect-[16/10] overflow-hidden sm:rounded-xl shadow-md">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-sm text-neutral-400 text-center px-4">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "closing":
      return (
        <div className="my-12 pl-5 border-l-[3px] border-primary-400 bg-primary-50/50 py-4 pr-4 rounded-r-xl">
          <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.8] text-neutral-700 font-normal">
            {block.text}
          </p>
        </div>
      );

    case "about":
      return (
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
              <Newspaper className="w-3.5 h-3.5 text-primary-600" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
              {block.heading}
            </h3>
          </div>
          {block.text.split("\n\n").map((para, i) => (
            <p
              key={i}
              className={`text-sm text-neutral-500 leading-relaxed ${i > 0 ? "mt-3" : ""}`}
            >
              {para}
            </p>
          ))}
        </div>
      );

    default:
      return null;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const otherArticles = getLatestArticles().filter((a) => a.slug !== slug);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero image ── */}
      <div className="relative w-full h-[55vh] lg:h-[65vh]">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* gradient: heavier at bottom for title legibility, lighter at top */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/85 via-neutral-900/40 to-neutral-900/10" />

        {/* Back nav */}
        <div className="absolute top-6 left-0 right-0 z-10">
          <div className="container max-w-3xl">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/15 text-white/90 text-sm hover:bg-black/35 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Articles
            </Link>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 pt-20">
          <div className="container max-w-3xl">
            <Badge className="bg-primary-600/90 text-white border-0 mb-4 text-xs tracking-wide">
              {article.category}
            </Badge>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="mt-3 text-base text-white/70 font-normal leading-relaxed max-w-2xl">
                {article.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Meta strip ── */}
      <div className="bg-white border-b border-neutral-100 sticky top-16 z-30">
        <div className="container max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3">
            <span className="flex items-center gap-1.5 text-sm text-neutral-400">
              <Calendar className="w-3.5 h-3.5" />
              {formatArticleDate(article.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-neutral-400">
              <MapPin className="w-3.5 h-3.5" />
              {article.location}
            </span>
            <div className="flex flex-wrap gap-1.5 ml-auto">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500 text-xs"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      {/* Narrow prose column — ~65 chars per line for comfortable reading */}
      <main className="container max-w-3xl py-12 lg:py-16">

        {/* Lead / excerpt */}
        <p className="text-lg sm:text-xl text-neutral-500 font-normal leading-relaxed mb-10 pb-10 border-b border-neutral-100">
          {article.excerpt}
        </p>

        {/* Content blocks */}
        <div>
          {article.content.map((block, i) => (
            <RenderBlock key={i} block={block} />
          ))}
        </div>

        {/* ── More articles ── */}
        {otherArticles.length > 0 && (
          <section className="mt-20 pt-10 border-t border-neutral-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold text-neutral-800">
                More Articles
              </h2>
              <Button variant="ghost" size="sm" className="text-primary-600" asChild>
                <Link href="/articles">
                  View All
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {otherArticles.slice(0, 2).map((a) => (
                <Link
                  key={a.id}
                  href={`/articles/${a.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden bg-neutral-100">
                    <Image
                      src={a.coverImage}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-medium text-primary-500 mb-2">
                      {a.category}
                    </span>
                    <h3 className="text-sm font-semibold text-neutral-800 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-auto pt-3">
                      {formatArticleDate(a.publishedAt)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
