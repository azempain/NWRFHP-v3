# NWRFHP Website - Development Guide

## Project Overview

North West Regional Fund for Health Promotion (NWRFHP) website - a Next.js 15 application for promoting healthcare services in Cameroon's North West Region.

**Tech Stack:**
- Next.js 15.5.9 (App Router)
- React 18.3
- TypeScript (strict mode)
- Tailwind CSS 4
- CSS animations & transitions (no Framer Motion)
- shadcn/ui components
- Radix UI primitives

## Design Style Guide

### Primary Color: rgb(0, 20, 220) - #0014DC

A vibrant, international blue used throughout the application for primary actions, brand identity, and accent elements.

**Color Palette:**
```css
--color-primary-50: #e6e8ff
--color-primary-100: #c0c5ff
--color-primary-200: #959eff
--color-primary-300: #6977ff
--color-primary-400: #3d50ff
--color-primary-500: #0014dc  /* Main primary blue */
--color-primary-600: #0010b8
--color-primary-700: #000c94
--color-primary-800: #000870
--color-primary-900: #00044c
--color-primary-950: #000228
```

**Accent Color (Teal):**
```css
--color-accent-500: #00d1a7  /* Healthcare fresh teal */
```

### Typography

- **Font Family:** Inter (sans-serif), JetBrains Mono (monospace)
- **Headings:** Bold, tight leading (1.1-1.2)
- **Body:** 16px base, relaxed leading

### Design Principles

1. **World-Class Standards:** Modern, clean, professional design inspired by SLB and international healthcare organizations
2. **Animations:** Subtle, purposeful CSS animations & transitions (IntersectionObserver-based)
3. **Accessibility:** WCAG 2.1 compliant color contrast and keyboard navigation
4. **Mobile-First:** Responsive design starting from mobile breakpoints
5. **Performance:** Optimized images, lazy loading, efficient bundle sizes

### Component Patterns

**Page Heroes:**
- Full-height or 60vh minimum
- Background image with gradient overlay
- Animated background elements (blurred circles)
- Staggered text animations
- CTA buttons with hover states

**Cards:**
- Rounded corners (rounded-2xl to rounded-3xl)
- Subtle shadows with hover elevation
- Border on hover for definition
- Icon badges with gradient backgrounds

**Buttons:**
- Primary: Gradient blue background with glow shadow on hover
- Secondary: Outline style with fill on hover
- All buttons have smooth transitions (0.3s)

**Sections:**
- Consistent padding (py-16 lg:py-24)
- Container max-width 1440px
- Responsive grid layouts (1-2-3-4 columns)
- Section headers with badge, title, description pattern

### Animation Guidelines

All animations use native CSS transitions with a custom `useInView` hook (`src/hooks/use-in-view.ts`) powered by IntersectionObserver. Framer Motion has been fully removed.

**Core Hook - `useInView`:**
```tsx
const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: "-100px", once: true });
```
Returns a `ref` to attach to an element and an `isInView` boolean that triggers CSS transitions.

**CSS Animation Pattern:**
```tsx
<div
  ref={ref}
  className={`transition-animate ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
  style={{ transitionDelay: '100ms' }}
>
```

**Utility Classes (defined in globals.css):**
- `transition-animate` - Base transition class (duration, easing, properties)
- `animate-fade-in` - Keyframe fade-in animation
- `animate-slide-up` - Keyframe slide-up animation
- `animate-hero-badge`, `animate-hero-image` - Hero-specific animations
- `stagger-children` + `is-visible` - Staggered child animations

**Animation Components (src/components/ui/animations.tsx):**
- `FadeIn`, `FadeInUp`, `FadeInDown`, `FadeInLeft`, `FadeInRight`
- `ScaleIn`, `StaggerContainer`, `StaggerItem`
- `PageTransition`, `Counter`, `HoverScale`, `Parallax`

**Additional Components (src/components/animations/):**
- `Counter` - Animated number counting
- `FadeIn` - Simple fade-in wrapper
- `SlideInUp` - Slide-up animation wrapper
- `StaggerContainer` - Container for staggered children

**Settings:**
- Transitions trigger once by default (IntersectionObserver `once: true`)
- Default rootMargin: `-100px` (triggers slightly before element enters viewport)
- Stagger delays via inline `transitionDelay` styles

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with 10+ sections
│   ├── health/            # UHC page (modernized)
│   ├── programs/          # Programs list & [slug] pages
│   ├── sections/          # Sections list & [slug] pages
│   ├── team/              # Team list & [slug] pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   └── socials/           # Social media page
├── components/
│   ├── animations/        # CSS animation wrapper components
│   │   ├── counter.tsx
│   │   ├── fade-in.tsx
│   │   ├── slide-in-up.tsx
│   │   └── stagger-container.tsx
│   ├── sections/          # Homepage sections
│   │   ├── hero.tsx
│   │   ├── about-preview.tsx
│   │   ├── services.tsx
│   │   ├── impact.tsx
│   │   ├── stats.tsx
│   │   ├── programs.tsx
│   │   ├── mission.tsx
│   │   ├── testimonials.tsx
│   │   ├── partners.tsx
│   │   ├── news.tsx
│   │   ├── faq.tsx
│   │   └── cta.tsx
│   ├── shared/            # Reusable components
│   │   ├── page-hero.tsx
│   │   ├── section-wrapper.tsx
│   │   ├── animated-card.tsx
│   │   ├── program-card.tsx
│   │   ├── stat-card.tsx
│   │   ├── logo.tsx
│   │   └── scroll-to-top.tsx
│   ├── layout/            # Header & Footer
│   └── ui/                # shadcn UI components + animations.tsx
├── hooks/
│   ├── use-in-view.ts     # IntersectionObserver hook for scroll animations
│   ├── use-mobile.ts      # Mobile detection hook
│   └── use-reveal.ts      # Reveal animation hook
├── config/
│   └── site.ts            # Centralized site configuration
├── data/
│   ├── team.json          # Team members data
│   ├── programs.ts        # Programs data with types
│   └── sections.ts        # Sections data with programs
├── lib/
│   └── utils.ts           # Utility functions
└── app/globals.css        # Global styles, CSS animations & Tailwind theme
```

## Key Configuration

**Site Config (src/config/site.ts):**
- Organization info, contact details
- Social media links
- Statistics (217 pharmacies, 850+ health workers, etc.)
- Navigation and footer links

**Programs & Sections Data (src/data/sections.ts):**
- 3 sections (SMSS, SHPS, SUHC) with nested programs
- Slug-based routing for sections and individual programs
- Icons, colors, stats, features, objectives, beneficiaries, activities

**Team Data (src/data/team.json):**
- 40+ team members
- Slug-based routing for profiles
- Photos, roles, department info

## Development Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## Key Files to Know

- `/src/app/globals.css` - Theme colors, CSS animations, utility classes
- `/src/hooks/use-in-view.ts` - IntersectionObserver hook for scroll animations
- `/src/components/ui/animations.tsx` - Reusable CSS animation wrapper components
- `/src/config/site.ts` - Site-wide configuration
- `/src/components/shared/page-hero.tsx` - Reusable hero component
- `/src/data/sections.ts` - Sections & programs data and types

## Common Patterns

**Creating a new page with hero:**
```tsx
import { PageHero } from "@/components/shared/page-hero";
import { Icon } from "lucide-react";

export default function NewPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <PageHero
        badge={{ icon: Icon, text: "Badge Text" }}
        title="Page Title"
        titleHighlight="Highlighted"
        description="Page description text"
        backgroundImage="/images/background.jpg"
        overlay="gradient"
      >
        {/* CTA buttons */}
      </PageHero>
      {/* Page content */}
    </div>
  );
}
```

**Adding scroll animations to a section:**
```tsx
import { useInView } from "@/hooks/use-in-view";

function MySection() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`transition-animate ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {/* Content */}
        </div>
      ))}
    </div>
  );
}
```

**Using animation wrapper components:**
```tsx
import { FadeInUp, StaggerContainer } from "@/components/ui/animations";

<StaggerContainer>
  <FadeInUp delay={0.1}>Content 1</FadeInUp>
  <FadeInUp delay={0.2}>Content 2</FadeInUp>
</StaggerContainer>
```

## Deployment

The site is configured for Vercel deployment:
- Automatic builds on push
- next-sitemap for SEO
- Image optimization enabled
- ISR for dynamic pages

## Notes

- All pages use the vibrant primary blue (#0014DC) consistently
- Animations use pure CSS transitions + IntersectionObserver (no Framer Motion)
- Animations should be subtle and enhance UX, not distract
- Mobile navigation has slide animations
- Dark mode is supported via CSS variables
- Use the PageHero component for consistent page headers
- Mobile UX: cards that have hover dropdowns on desktop should be tappable links on mobile
