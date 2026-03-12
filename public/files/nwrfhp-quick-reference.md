# NWRFHP Design Quick Reference
## Essential Specifications for Claude AI Implementation

---

## QUICK START: Give this to Claude AI

**Prompt Template:**
```
I need you to redesign the NWRFHP website to match world-class medical organization standards 
like SLB.com. Here are the key design specifications:

[Copy relevant sections from below based on what you're building]
```

---

## 1. COLOR SYSTEM (Copy This Exactly)

```css
:root {
  /* Primary Colors */
  --primary-blue: #0F4C81;
  --secondary-blue: #1E88E5;
  --accent-teal: #00897B;
  
  /* Neutrals */
  --white: #FFFFFF;
  --gray-50: #F5F7FA;
  --gray-200: #E0E5EB;
  --gray-700: #263238;
  --gray-900: #1A1A1A;
  
  /* Accents */
  --success: #43A047;
  --warning: #FB8C00;
  --error: #E53935;
}
```

---

## 2. TYPOGRAPHY (Copy This)

```css
/* Font Stack */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Sizes */
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 32px;
--text-4xl: 40px;
--text-5xl: 56px;

/* Headings */
h1 { font-size: 56px; line-height: 1.15; font-weight: 700; }
h2 { font-size: 40px; line-height: 1.2; font-weight: 700; }
h3 { font-size: 32px; line-height: 1.25; font-weight: 600; }
h4 { font-size: 24px; line-height: 1.33; font-weight: 600; }

/* Body */
body { font-size: 16px; line-height: 1.5; color: #263238; }
```

---

## 3. SPACING SYSTEM

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 40px;
--space-8: 48px;
--space-9: 64px;
--space-10: 80px;
--space-11: 120px;

/* Section spacing */
section { padding: 120px 0; }  /* Desktop */
section { padding: 80px 0; }   /* Tablet */
section { padding: 60px 0; }   /* Mobile */
```

---

## 4. COMPONENT TEMPLATES

### Header/Navigation
```html
<header class="sticky top-0 bg-white shadow-sm h-20 z-50">
  <div class="container mx-auto px-4 flex items-center justify-between h-full">
    <img src="logo.svg" alt="NWRFHP" class="h-12" />
    <nav class="hidden md:flex gap-8">
      <a href="/programs">Our Programs</a>
      <a href="/about">About Us</a>
      <a href="/gallery">Staff Gallery</a>
      <a href="/contact">Contact</a>
    </nav>
    <div class="flex gap-4">
      <a href="tel:+237651421052" class="btn-secondary">Call Now</a>
      <a href="/contact" class="btn-primary">Contact Us</a>
    </div>
  </div>
</header>
```

### Hero Section
```html
<section class="hero relative h-[700px] flex items-center justify-center">
  <div class="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/85 to-[#1E88E5]/75"></div>
  <img src="hero.jpg" class="absolute inset-0 w-full h-full object-cover -z-10" />
  <div class="relative z-10 text-center text-white max-w-4xl px-4">
    <h1 class="text-5xl md:text-6xl font-bold mb-6">
      Quality Healthcare for All in North West Region
    </h1>
    <p class="text-xl mb-8">
      Promoting sustainable access to essential medicines and health services
    </p>
    <div class="flex gap-4 justify-center">
      <button class="btn-primary">Learn More</button>
      <button class="btn-secondary-white">Our Programs</button>
    </div>
  </div>
</section>
```

### Card Component
```html
<div class="card bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
  <img src="program.jpg" class="w-full h-60 object-cover rounded-lg mb-6" />
  <h3 class="text-2xl font-semibold mb-4">Essential Medicines Program</h3>
  <p class="text-gray-700 mb-6">
    Making quality medicines available and affordable across 217 community pharmacies.
  </p>
  <a href="#" class="text-primary-blue font-semibold flex items-center gap-2 hover:gap-3 transition-all">
    Learn More <span>→</span>
  </a>
</div>
```

### Stats Section
```html
<section class="stats py-20 bg-gray-50">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
    <div>
      <div class="text-6xl font-bold text-primary-blue mb-2">217</div>
      <div class="text-lg text-gray-700">Community Pharmacies</div>
    </div>
    <div>
      <div class="text-6xl font-bold text-primary-blue mb-2">90%</div>
      <div class="text-lg text-gray-700">Population Coverage</div>
    </div>
    <div>
      <div class="text-6xl font-bold text-primary-blue mb-2">95%</div>
      <div class="text-lg text-gray-700">Medicine Availability</div>
    </div>
    <div>
      <div class="text-6xl font-bold text-primary-blue mb-2">19</div>
      <div class="text-lg text-gray-700">Health Districts</div>
    </div>
  </div>
</section>
```

---

## 5. BUTTON STYLES

```css
/* Primary Button */
.btn-primary {
  background: #43A047;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background: #388E3C;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(67, 160, 71, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #0F4C81;
  border: 2px solid #0F4C81;
  padding: 14px 30px;
  border-radius: 8px;
  font-weight: 600;
}
.btn-secondary:hover {
  background: #0F4C81;
  color: white;
}

/* White Variant for Dark Backgrounds */
.btn-secondary-white {
  border: 2px solid white;
  color: white;
}
.btn-secondary-white:hover {
  background: rgba(255, 255, 255, 0.1);
}
```

---

## 6. ANIMATION UTILITIES

```css
/* Fade in on scroll */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover elevate */
.hover-elevate {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-elevate:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}
```

---

## 7. RESPONSIVE BREAKPOINTS

```css
/* Mobile First */
/* Default: 320px+ */

@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1440px) {
  /* Large Desktop */
  .container { max-width: 1440px; }
}
```

---

## 8. LAYOUT PATTERNS

### Full-Width Section
```html
<section class="py-20">
  <div class="container mx-auto px-4 max-w-7xl">
    <!-- Content -->
  </div>
</section>
```

### Two-Column Layout
```html
<div class="grid md:grid-cols-2 gap-12 items-center">
  <div>
    <h2>Heading</h2>
    <p>Content</p>
  </div>
  <div>
    <img src="image.jpg" class="rounded-xl" />
  </div>
</div>
```

### Three-Column Cards
```html
<div class="grid md:grid-cols-3 gap-8">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

---

## 9. FOOTER STRUCTURE

```html
<footer class="bg-gray-900 text-white py-20">
  <div class="container mx-auto px-4 grid md:grid-cols-4 gap-12">
    <div>
      <img src="logo-white.svg" class="h-12 mb-4" />
      <p class="text-gray-300">
        Promoting quality healthcare in North West Region
      </p>
    </div>
    <div>
      <h4 class="font-semibold mb-4">Quick Links</h4>
      <nav class="flex flex-col gap-2">
        <a href="/programs">Programs</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
    <div>
      <h4 class="font-semibold mb-4">Resources</h4>
      <nav class="flex flex-col gap-2">
        <a href="/health">Health Coverage</a>
        <a href="/gallery">Gallery & News</a>
      </nav>
    </div>
    <div>
      <h4 class="font-semibold mb-4">Contact</h4>
      <p>Phone: +237651421052</p>
      <p>Email: info@nwrfhp.org</p>
    </div>
  </div>
  <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
    © 2025 NWRFHP. All rights reserved.
  </div>
</footer>
```

---

## 10. ACCESSIBILITY CHECKLIST

```
✓ Color contrast minimum 4.5:1
✓ Focus states visible on all interactive elements
✓ Alt text on all images
✓ Semantic HTML (header, nav, main, footer, article, section)
✓ ARIA labels where needed
✓ Keyboard navigation support
✓ Skip to content link
```

---

## PROMPT FOR CLAUDE AI - HOMEPAGE

```
Create a modern, professional homepage for NWRFHP (North West Regional Fund For Health Promotion) 
using these exact specifications:

DESIGN SYSTEM:
- Primary color: #0F4C81 (blue)
- Secondary: #1E88E5 (bright blue)
- Success: #43A047 (green)
- Neutrals: #F5F7FA (light gray), #263238 (dark gray)

TYPOGRAPHY:
- Font: Inter or system fonts
- H1: 56px, bold
- H2: 40px, bold
- Body: 16px, line-height 1.5

LAYOUT SECTIONS:
1. Sticky header (80px height) with logo, navigation, and CTA buttons
2. Hero section (700px) with gradient overlay, headline, subtext, and 2 CTAs
3. Organization overview (2-column: text + image)
4. Stats section (4 stats in a row showing: 217 pharmacies, 90% coverage, 95% availability, 19 districts)
5. Programs grid (3 cards: Essential Medicines, Health Services, Community Support)
6. Impact section with image carousel
7. Partner logos section
8. Footer (dark bg with 4 columns)

STYLING:
- Cards: white bg, border, rounded-xl, hover: elevate with shadow
- Buttons: Primary (green), Secondary (blue outline)
- Spacing: 120px vertical section padding
- Animations: fade-in-up on scroll, hover elevate on cards
- Responsive: mobile-first, breakpoints at 768px, 1024px

Make it look as professional and polished as SLB.com but adapted for healthcare.
Include proper accessibility features.
```

---

## PROMPT FOR CLAUDE AI - PROGRAMS PAGE

```
Create a programs listing page for NWRFHP using the design system:

COLORS: #0F4C81 (primary blue), #1E88E5 (accent), #43A047 (green CTAs)
FONTS: Inter, 16px body, 40px headings

LAYOUT:
1. Header (same as homepage)
2. Page hero (400px) with title "Our Programs" and breadcrumb
3. Programs grid (3 columns, responsive):
   - Essential Medicines Management
   - Community Health Services
   - Universal Health Coverage
   - Health System Strengthening
   - Community Pharmacy Network
   - Training & Capacity Building

Each card should have:
- Image (240px height)
- Title (24px)
- Description (3-4 lines)
- "Learn More" link with arrow

4. CTA section: "Want to learn more about our programs?"
5. Footer (same as homepage)

STYLING:
- Card hover: lift up 8px with shadow
- Smooth transitions (0.3s)
- Proper spacing (32px gap between cards)
- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
```

---

## WORDPRESS/CMS INSTRUCTIONS

If implementing in WordPress:
```
1. Use Elementor or Gutenberg with custom CSS
2. Install "Inter" font via Google Fonts
3. Create custom CSS file with the color variables
4. Build reusable card/section templates
5. Optimize images (WebP, lazy load)
6. Install accessibility plugin (WP Accessibility)
7. Use Advanced Custom Fields for repeatable sections
```

---

## FIGMA TO CODE

If you have Figma designs:
```
1. Export design tokens (colors, typography, spacing)
2. Export SVG icons and logos
3. Export images in WebP format
4. Get exact hex codes from design
5. Note all spacing values
6. Screenshot hover states
7. Document all animations/transitions
```

---

## PERFORMANCE TARGETS

```
✓ First Contentful Paint: < 1.8s
✓ Largest Contentful Paint: < 2.5s
✓ Total Page Size: < 2MB
✓ Images: WebP format, lazy loading
✓ CSS: Minified, critical CSS inline
✓ JavaScript: Defer non-critical scripts
```

---

## TESTING CHECKLIST

```
✓ Test on Chrome, Firefox, Safari
✓ Test on iPhone, Android
✓ Test keyboard navigation
✓ Run Lighthouse audit (score 90+)
✓ Test with screen reader
✓ Validate HTML/CSS
✓ Check all links work
✓ Test contact forms
✓ Test on slow 3G connection
```

---

## Need help? Tell Claude:

"I need a [component name] following the NWRFHP design system. Use primary blue #0F4C81, 
Inter font, and make it match the professional style of SLB.com. Include hover states 
and accessibility features."
