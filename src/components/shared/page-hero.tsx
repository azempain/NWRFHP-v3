"use client";

import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  badge?: {
    icon?: LucideIcon;
    text: string;
  };
  title: string;
  titleHighlight?: string;
  description?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  centered?: boolean;
  minHeight?: string;
  overlay?: "dark" | "primary" | "gradient";
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  backgroundImage,
  children,
  centered = true,
  minHeight = "min-h-[60vh]",
  overlay = "primary",
}: PageHeroProps) {
  const overlayClasses = {
    dark: "bg-linear-to-r from-neutral-900/95 via-neutral-900/85 to-neutral-900/70",
    primary: "bg-linear-to-r from-primary-950/95 via-primary-900/90 to-primary-800/80",
    gradient: "bg-linear-to-br from-primary-950/95 via-primary-900/85 to-primary-700/70",
  };

  return (
    <section className={`relative ${minHeight} flex items-center overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-bg-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-bg-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary-500/5 rounded-full blur-3xl animate-fade-in delay-500" />
      </div>

      {/* Gradient Background when no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 z-0 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900" />
      )}

      <div className="container relative z-10 py-8 sm:py-10 lg:py-14">
        <div className={`${centered ? "text-center max-w-4xl mx-auto" : "max-w-3xl"}`}>
          {/* Badge */}
          {badge && (
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium animate-hero-badge">
              {badge.icon && <badge.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              {badge.text}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-hero-title">
            {title}{" "}
            {titleHighlight && (
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-300 to-accent-400">
                {titleHighlight}
              </span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto animate-hero-subtitle">
              {description}
            </p>
          )}

          {/* Children (CTA buttons, etc.) */}
          {children && (
            <div className="animate-hero-cta">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Decorative bottom gradient - pointer-events-none allows clicks through */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-neutral-50 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
