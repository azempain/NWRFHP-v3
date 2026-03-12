"use client";

import { useInView } from "@/hooks/use-in-view";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  id?: string;
  background?: "white" | "gray" | "primary" | "gradient";
}

export function SectionWrapper({
  children,
  className = "",
  badge,
  title,
  titleHighlight,
  description,
  centered = true,
  id,
  background = "white",
}: SectionWrapperProps) {
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>();

  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-neutral-50",
    primary: "bg-primary-600",
    gradient: "bg-linear-to-br from-primary-600 via-primary-700 to-primary-900",
  };

  const textClasses = {
    white: "text-neutral-900",
    gray: "text-neutral-900",
    primary: "text-white",
    gradient: "text-white",
  };

  const descriptionClasses = {
    white: "text-neutral-600",
    gray: "text-neutral-600",
    primary: "text-white/80",
    gradient: "text-white/80",
  };

  const badgeClasses = {
    white: "text-primary-600 bg-primary-50",
    gray: "text-primary-600 bg-primary-50",
    primary: "text-white/90 bg-white/10 border-white/20",
    gradient: "text-white/90 bg-white/10 border-white/20",
  };

  return (
    <section
      id={id}
      className={`py-8 lg:py-12 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container">
        {(badge || title || description) && (
          <div
            ref={headerRef}
            className={`mb-12 lg:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}
          >
            {badge && (
              <span
                className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider rounded-full transition-animate ${badgeClasses[background]} ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                {badge}
              </span>
            )}
            {title && (
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight transition-animate delay-100 ${textClasses[background]} ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                {title}{" "}
                {titleHighlight && (
                  <span className={`${background === "white" || background === "gray" ? "text-gradient" : "text-transparent bg-clip-text bg-linear-to-r from-accent-300 to-accent-400"}`}>
                    {titleHighlight}
                  </span>
                )}
              </h2>
            )}
            {description && (
              <p
                className={`text-lg leading-relaxed transition-animate delay-200 ${descriptionClasses[background]} ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
