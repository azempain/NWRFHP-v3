"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, isInView: gridInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-10 lg:py-16 bg-neutral-50">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span
            className={`inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full transition-animate ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Testimonials
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 transition-animate delay-100 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Stories of{" "}
            <span className="text-gradient">Impact</span>
          </h2>
          <p
            className={`text-lg text-neutral-600 transition-animate delay-200 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Hear from the communities and individuals whose lives have been
            transformed by our healthcare programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={gridRef} className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-neutral-700 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  <p className="text-xs text-primary-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
