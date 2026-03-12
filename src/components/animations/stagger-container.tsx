"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
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
