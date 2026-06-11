# MAN + WOMAN HOME — Homepage Redesign (v1)

**Date:** 2026-06-10  
**Status:** Approved for review  
**Scope:** Homepage only  
**Stack:** Next.js (App Router), custom backend later — no Shopify

---

## 1. Summary

Redesign the manwomanhome.com homepage as a custom Next.js site with an **intentional architectural** aesthetic: photography-led, generous negative space, a single coherent type system, and deliberate grid rhythm. Inspired by editorial fashion sites (e.g. Zara) but not a clone — distinct brand world with Man / Woman / Home / Accessories.

**v1 delivers:** One polished, responsive homepage with mock product/collection data. Nav links and CTAs are stubs (`#` or placeholder routes) until collection and product pages exist.

---

## 2. Goals

| Goal | Success looks like |
|------|-------------------|
| Modern, intentional design | Every spacing, type, and line choice feels deliberate — not template defaults |
| Strong negative space | Sections breathe; grid gaps are visibly larger than current site |
| Brand continuity without copying old UI | Same world (categories, photography, premium feel) — new visual system |
| Foundation for full shop | Components and tokens reusable for collection/product pages later |

---

## 3. Non-goals (v1)

- Shopify integration or theme work
- Collection pages, product detail, cart, checkout, auth
- CMS or database — static/mock JSON only
- Search, account, or functional cart icons
- Animations beyond subtle hover and header scroll transition

---

## 4. Design direction: Intentional architectural

### 4.1 Keep (spirit)

- Photography-first hero and product presentation
- Four-world navigation: Man, Woman, Home, Accessories
- Premium, calm, fashion-editorial tone

### 4.2 Remove or rework (current pain)

- Inconsistent serif/sans mixing across announcement, logo, products, promo
- Centered grey newsletter band and decorative horizontal rules
- Rigid, cramped 3-column product grid
- Header clutter overlaid on hero (too many competing elements)

### 4.3 Principles

1. **One visual language** — primary sans everywhere; at most one serif accent for a single editorial line per viewport
2. **Grid as architecture** — 8px base, consistent section padding, hairline rules only where they define structure
3. **UI stays neutral** — photography provides color
4. **Asymmetry with purpose** — product grid varies column span/height intentionally, not randomly

---

## 5. Typography & color (approved)

### Typography

| Role | Treatment |
|------|-----------|
| Primary family | Neo-grotesque sans — **DM Sans** (Google Font, free, good Next.js support) |
| Logo / wordmark | Same family, medium weight, tracked slightly — single or two-line lockup |
| Nav | 11–12px, uppercase, letter-spacing ~0.12em |
| Section titles | 24–32px, regular or medium weight |
| Product names | 13–14px, regular weight — no italic |
| Prices | 13–14px, medium weight |
| Editorial accent (optional) | One serif line only — **Instrument Serif** or **Lora** for hero subline OR one section title — never both on mobile |

### Color

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#F7F7F5` | Page background (warm off-white) |
| `--fg` | `#1A1A1A` | Primary text |
| `--muted` | `#6B6B66` | Secondary text, placeholders |
| `--border` | `#E5E5E0` | Hairline rules, input underlines |
| `--inverse` | `#FFFFFF` | Text on dark/photo overlays when needed |

No grey promo panels. Newsletter lives on the same `--bg` as the rest of the page.

### Spacing

- Base unit: **8px**
- Section vertical padding: **80–120px** desktop, **48–64px** mobile
- Product grid gap: **24–40px**
- Max content width: **1400px** centered; hero and collection tiles may break full-bleed

---

## 6. Homepage sections

### 6.1 Announcement bar

- Single centered line: `FREE SHIPPING ON ORDERS OF $250+`
- 11px uppercase sans, `--muted` text, minimal vertical padding (12px)
- Hairline bottom border `--border`
- Dismiss not required in v1

### 6.2 Header

- **Position:** Fixed top; transparent over hero, transitions to `--bg` with hairline border on scroll (after ~60px)
- **Layout:** Logo left | Nav center (Man, Woman, Home, Accessories) | Icons right (search, account, bag — decorative in v1)
- **Nav links:** Uppercase tracked caps; dropdown chevrons omitted in v1 (flat links to `#`)
- **Mobile:** Hamburger left, logo center, bag right; full-screen overlay menu with large type and generous line height
- **No** heavy white text on hero — header uses `--fg` with subtle backdrop or scroll-based solid fill for legibility

### 6.3 Hero

- Full viewport width, **min-height ~85vh** desktop / **70vh** mobile
- Single editorial image (from current site CDN or local placeholder)
- Minimal overlay copy: optional serif accent line + sans CTA link (`Shop Woman →`)
- Copy positioned bottom-left or bottom-center with ample margin — never centered block on busy image area
- No carousel in v1 — one strong image

### 6.4 Newsletter

- Full-width section on `--bg`, **no** grey box
- Left-aligned text block (max-width ~480px), centered in section or offset left on desktop
- Headline: `GET 10% OFF` — section title scale
- Body: existing promo copy, `--muted`, 14px
- Input: underline style only (no box border), placeholder `Your email`
- Button: text-only or minimal black fill — `Subscribe`, uppercase small caps
- Hairline rule above section optional

### 6.5 Featured products — "Dresses for any Occasion"

- Section title left-aligned with optional hairline or generous margin below
- **Grid:** 4 columns desktop, 2 columns tablet, 2 columns mobile
- **Asymmetric variant:** First row can use 2 large + 2 standard tiles OR staggered aspect ratios (4:5 portraits) — implement one consistent pattern, not random per item
- Each card: image (aspect-ratio locked), name, price — no sale badges in v1 unless in mock data
- Hover: subtle image scale (1.02) or opacity shift — no heavy shadows
- **12–24 products** from mock data (subset of current catalog names/prices)
- "View all" link stub at section end

### 6.6 Collection tiles

- Horizontal row of **4 large image tiles**: Man, Woman, Home, Accessories
- Desktop: 4 equal columns with 16–24px gap
- Mobile: 2×2 grid or horizontal scroll snap — prefer 2×2 for clarity
- Tile: full-bleed image, label overlaid bottom-left in white sans caps
- Links to `#` in v1

### 6.7 Footer

- Minimal: wordmark, copyright, optional Instagram link
- Large bottom padding (64px+)
- Hairline top border

---

## 7. Component inventory

| Component | Responsibility |
|-----------|----------------|
| `AnnouncementBar` | Top promo strip |
| `Header` | Fixed nav, scroll state, mobile menu |
| `Hero` | Full-bleed editorial image + optional CTA |
| `Newsletter` | Email capture UI (non-functional submit in v1 — `preventDefault` + console or toast stub) |
| `ProductCard` | Image, name, price |
| `ProductGrid` | Section title + asymmetric grid of `ProductCard` |
| `CollectionTile` | Image + label link |
| `CollectionRow` | Grid of four `CollectionTile` |
| `Footer` | Minimal site footer |

Shared tokens in `globals.css` (CSS variables) + Tailwind theme extension.

---

## 8. Technical architecture

### 8.1 Stack

- **Next.js 15** App Router
- **TypeScript**
- **Tailwind CSS v4** (or v3 if project init defaults differ)
- **next/font** for DM Sans (+ optional Instrument Serif)
- No UI component library in v1 — custom components only

### 8.2 File structure (target)

```
manwomann/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Homepage composition
│   └── globals.css         # CSS variables, base styles
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Newsletter.tsx
│   │   ├── ProductGrid.tsx
│   │   └── CollectionRow.tsx
│   └── ui/
│       └── ProductCard.tsx
├── lib/
│   └── data/
│       ├── products.ts     # Mock featured products
│       └── collections.ts  # Mock collection tiles
├── public/
│   └── images/             # Local hero/collection placeholders if needed
└── docs/superpowers/specs/
    └── 2026-06-10-homepage-redesign-design.md
```

### 8.3 Data (v1)

- `products.ts`: array of `{ id, name, price, imageUrl, href }` — reuse real product names/prices from current site where possible; images from existing CDN URLs or placeholders
- `collections.ts`: array of `{ slug, label, imageUrl, href }` for four worlds
- No API routes in v1 — page imports static data directly

### 8.4 Metadata

- `title`: `MAN + WOMAN — Home`
- `description`: Short brand line matching current positioning
- Open Graph image: hero image

### 8.5 Responsive breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| `sm` | 640px | 2-col product grid |
| `md` | 768px | Header nav visible |
| `lg` | 1024px | 4-col product grid, full collection row |
| `xl` | 1280px | Max-width container |

---

## 9. Accessibility & performance

- Semantic landmarks: `header`, `main`, `footer`, `nav`
- Hero image: meaningful `alt` text
- Focus states on all interactive elements (visible outline, not removed)
- `prefers-reduced-motion`: disable image scale hover
- Images: `next/image` with appropriate `sizes` and priority on hero
- Target Lighthouse performance ≥ 90 on homepage (local)

---

## 10. Future extension points (post-v1)

- PostgreSQL + Prisma or similar for products
- `/[category]` collection routes reusing `ProductGrid`
- `/products/[slug]` detail page
- Functional cart (React context or server session)
- CMS for hero and featured collections
- Replace mock CDN URLs with owned assets

---

## 11. Open decisions (resolved)

| Question | Decision |
|----------|----------|
| Platform | Custom Next.js — no Shopify |
| v1 scope | Homepage only |
| Design approach | Intentional architectural (B), not conservative MAN+WOMAN clone |
| Typography | DM Sans primary; optional single serif accent line |
| Color | Warm off-white ground, near-black text, neutral UI |

---

## 12. Approval checklist

- [x] Design direction agreed
- [x] Typography & color agreed
- [x] Homepage sections defined
- [ ] User review of this spec
- [ ] Implementation plan written
