"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

// Animation wrapper components
interface AnimatedProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: AnimatedProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-animate ${className || ''} ${isInView ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}

export function FadeInUp({ children, className, delay = 0 }: AnimatedProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-animate ${className || ''} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}

export function FadeInDown({ children, className, delay = 0 }: AnimatedProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-animate ${className || ''} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}

export function FadeInLeft({ children, className, delay = 0 }: AnimatedProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-animate ${className || ''} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}

export function FadeInRight({ children, className, delay = 0 }: AnimatedProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-animate ${className || ''} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}

export function ScaleIn({ children, className, delay = 0 }: AnimatedProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-animate ${className || ''} ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}

interface StaggerContainerProps extends AnimatedProps {
  staggerDelay?: number;
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`stagger-children ${className || ''} ${isInView ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: Omit<AnimatedProps, 'delay'>) {
  return (
    <div className={`transition-animate ${className || ''}`}>
      {children}
    </div>
  );
}

// Page transition wrapper - simplified for CSS
export function PageTransition({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`animate-fade-in ${className || ''}`}>
      {children}
    </div>
  );
}

// Counter animation for stats - uses native IntersectionObserver
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function Counter({ from = 0, to, duration = 2, suffix = "", prefix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const increment = (to - from) / (duration * 60);
          let current = from;

          const timer = setInterval(() => {
            current += increment;
            if (current >= to) {
              setCount(to);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [from, to, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// Hover scale effect - simplified using CSS
export function HoverScale({ children, className }: { children: ReactNode; className?: string; scale?: number }) {
  return (
    <div className={`hover:scale-105 active:scale-98 transition-transform duration-200 ${className || ''}`}>
      {children}
    </div>
  );
}

// Parallax scroll effect - simplified
export function Parallax({ children, className }: { children: ReactNode; className?: string; offset?: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-animate ${className || ''} ${isInView ? 'translate-y-0' : 'translate-y-12'}`}
    >
      {children}
    </div>
  );
}
