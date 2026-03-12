"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

interface SlideInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SlideInUp({ children, delay = 0, className }: SlideInUpProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-animate ${className || ''} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}
