import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Variant for different backgrounds */
  variant?: "default" | "light";
  /** Size of the logo */
  size?: "sm" | "md" | "lg";
  /** Show the tagline text below the name */
  showTagline?: boolean;
  /** Custom class name */
  className?: string;
  /** Whether to link to home page */
  asLink?: boolean;
}

const sizeClasses = {
  sm: {
    container: "w-8 h-8 lg:w-9 lg:h-9",
    image: 36,
    name: "text-base lg:text-lg",
    tagline: "text-[9px]",
  },
  md: {
    container: "w-10 h-10 lg:w-12 lg:h-12",
    image: 48,
    name: "text-lg lg:text-xl",
    tagline: "text-[10px]",
  },
  lg: {
    container: "w-12 h-12 lg:w-14 lg:h-14",
    image: 56,
    name: "text-xl lg:text-2xl",
    tagline: "text-xs",
  },
};

export function Logo({
  variant = "default",
  size = "md",
  showTagline = true,
  className,
  asLink = true,
}: LogoProps) {
  const sizes = sizeClasses[size];

  const logoContent = (
    <>
      <div
        className={cn(
          "relative rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300",
          sizes.container,
          variant === "default"
            ? "bg-primary-50 group-hover:bg-primary-100"
            : "bg-white group-hover:scale-105"
        )}
      >
        <Image
          src="/images/logo.jpg"
          alt={siteConfig.name}
          width={sizes.image}
          height={sizes.image}
          priority
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-bold tracking-tight transition-colors",
            sizes.name,
            variant === "default"
              ? "text-primary-600 group-hover:text-primary-700"
              : "text-white group-hover:text-primary-300"
          )}
        >
          {siteConfig.name}
        </span>
        {showTagline && (
          <span
            className={cn(
              "font-medium tracking-wider uppercase hidden sm:block",
              sizes.tagline,
              variant === "default" ? "text-neutral-500" : "text-neutral-400"
            )}
          >
            Health Promotion
          </span>
        )}
      </div>
    </>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className={cn("flex items-center gap-3 group", className)}
      >
        {logoContent}
      </Link>
    );
  }

  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      {logoContent}
    </div>
  );
}
