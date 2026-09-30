---
name: Dr. Reena Agrawal — Personal Brand Portal
description: A credential passport for one practitioner, forking into three instrument-grade sub-brand worlds.
colors:
  root-ivory: "#f3ede0"
  root-ivory-deep: "#ece3d1"
  root-paper-line: "#d8ccae"
  root-charcoal: "#2a2620"
  root-charcoal-soft: "#514a3d"
  root-gold: "#a9782f"
  root-gold-ink: "#825c24"
  root-gold-bright: "#c99a3f"
  root-gold-foil: "#e3c477"
  root-stamp-red: "#7c2f2a"
  yoga-sand: "#f5efdf"
  yoga-sand-deep: "#ece0c2"
  yoga-paper-line: "#d9c99a"
  yoga-teal: "#223b36"
  yoga-teal-soft: "#4a6058"
  yoga-sage: "#7c9473"
  yoga-sage-bright: "#97b087"
  yoga-ochre: "#9c7539"
  yoga-ochre-ink: "#7b5c2d"
  yoga-ochre-bright: "#c9a061"
  energy-oxblood: "#4a0e22"
  energy-oxblood-deep: "#2b0713"
  energy-blush: "#efc9b4"
  energy-rose-gold: "#cf9c72"
  energy-rose-gold-bright: "#e3b989"
  energy-cream: "#f7ece0"
  leadership-navy: "#0c2136"
  leadership-navy-deep: "#071522"
  leadership-slate: "#768b9d"
  leadership-white: "#f2f5f7"
  leadership-amber: "#f2a93c"
  leadership-amber-bright: "#ffc266"
typography:
  display:
    fontFamily: "Bodoni Moda, Times New Roman, serif"
    fontSize: "clamp(2.2rem, 5vw, 4.2rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.72rem–0.85rem"
    fontWeight: 500
    letterSpacing: "0.05em–0.16em"
  devanagari:
    fontFamily: "Noto Sans Devanagari, serif"
    fontSize: "1.3rem"
    fontWeight: 500
spacing:
  section-y: "clamp(3.5rem, 8vw, 6rem)"
  section-x: "clamp(1.25rem, 4vw, 2.5rem)"
  gap-sm: "0.5rem"
  gap-md: "1.1rem–1.5rem"
  gap-lg: "clamp(2rem, 5vw, 3.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.root-charcoal}"
    textColor: "{colors.root-ivory}"
    padding: "0.85rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.root-gold}"
    textColor: "{colors.root-charcoal}"
---

# Design System: Dr. Reena Agrawal — Personal Brand Portal

## Overview

**Creative North Star: "One Instrument Case, Four Tools"**

The site is a single practitioner's credential passport (the root page) that forks into three sub-brand worlds, each rendered as a precision instrument she carries: a bound sutra folio for yoga, an engraved navigational compass for Vastu/astrology, a radar scope for leadership coaching. All four worlds share one hand — the same display serif, the same hairline technical drafting linework (dimension lines, manuscript ruling, compass ticks, radar range-rings), and one recurring 12-point compass-rose seal mark that appears as the site's colophon on every page — while each vertical's color and material shift completely to its own confirmed or brief-pinned identity.

This is a deliberate rejection of two category defaults: the generic three-card "portfolio" personal-brand homepage, and the pastel/gradient wellness-guru template each individual vertical would otherwise default to (soft yoga-studio pastels, purple-gradient astrology mysticism, stock-photo corporate-coach navy). Two of the four worlds are anchored to real, confirmed brand assets rather than invented: Yoga's palette is drawn directly from the Art of Learning Institute's own logo; Divine Power's palette is drawn directly from its own confirmed logo (oxblood/blush/rose-gold), overriding the original brief's placeholder indigo/amethyst direction once the real asset arrived.

**Key Characteristics:**
- One shared display/body/mono type system across all four worlds; only color, imagery, and a handful of world-specific display touches (Devanagari numerals, compass bearings, radar coordinates) change.
- A single hand-authored SVG seal (12-tick compass rose + 8-point star) recolored per world, used as brand mark, stamp, and colophon everywhere.
- Every world is dark-surface-for-authority except the root (light/ivory) and Yoga (light/sand hero band with a dark teal banner) — light/dark is chosen per world's own material logic, not a blanket rule.
- No invented testimonials, stock mystical clip-art, or fabricated institution names; gaps in real evidence (university names, Leadership's logo, customer quotes) are left honest rather than fabricated.

## Colors

Four independent palettes under one shared neutral-ink logic (a near-black/near-white ink against each world's own ground), never mixed across pages.

### Root — Credential Passport
- **Ivory** (`#f3ede0`): primary page ground, laid-paper texture.
- **Charcoal** (`#2a2620`): primary ink, headings, the Endorsements section ground.
- **Warm Gold** (`#a9782f`) / **Gold Foil** (`#e3c477`): accreditation accents, borders, the CTA hover state.
- **Gold Ink** (`#825c24`): gold deepened for small mono labels on ivory — Warm Gold itself fails 4.5:1 there.
- **Stamp Red** (`#7c2f2a`): used only for the passport/visa "ink stamp" seal marks — never for text or UI chrome.

### Yoga — Sutra Folio (Art of Learning Institute)
- **Sand** (`#f5efdf`): page ground, drawn from the institute logo's cream field.
- **Teal** (`#223b36`): primary ink and the hero/contact band ground, drawn directly from the logo's figure color.
- **Sage** (`#7c9473`) / **Sage Bright** (`#97b087`): secondary accent, marginalia, links on dark ground.
- **Ochre** (`#9c7539`): large verse numerals, marks and linework, the logo's circle tone.
- **Ochre Ink** (`#7b5c2d`) / **Ochre Bright** (`#c9a061`): ochre for small text — deepened on sand (eyebrows, small numerals, the primary button fill), lifted on teal (the Sanskrit motto).

### Energy & Spatial Consultant — Navigational Instrument (Divine Power)
- **Oxblood** (`#4a0e22`) / **Oxblood Deep** (`#2b0713`): page ground — taken directly from the confirmed Divine Power logo, replacing the brief's placeholder indigo/amethyst.
- **Blush** (`#efc9b4`): secondary text, drawn from the logo's floral emblem tone.
- **Rose Gold** (`#cf9c72`) / **Rose Gold Bright** (`#e3b989`): the "engraved brass" accent — compass instrument, CTAs, focus rings.
- **Cream** (`#f7ece0`): primary text on the dark ground.

### Leadership & Mindset Coach — Radar Scope
- **Navy** (`#0c2136`) / **Navy Deep** (`#071522`): page ground, the scope housing.
- **Slate** (`#768b9d`): secondary/body text on navy (4.63:1 — lifted from #6c8296, which measured only 4.10:1; this is the floor for text on this ground).
- **White** (`#f2f5f7`): primary text.
- **Amber** (`#f2a93c`) / **Amber Bright** (`#ffc266`): the radar "contact" color — blips, sweep, CTAs, stat numerals.

### Named Rules
**The Text-Ink Rule.** A world's metallic accent is for marks, linework and large type; any small text in that hue uses the world's ink variant (gold-ink, ochre-ink / ochre-bright) so every label clears 4.5:1.
**The One Hand, Four Grounds Rule.** Every world uses the same ink-on-ground logic (one primary ink, one ground, one warm metallic accent) so the four pages read as siblings despite sharing no hex values.
**The Stamp-Color Rule.** A world's "ink stamp" color (root's stamp-red) is reserved for literal seal/stamp marks and never bleeds into body text, links, or UI chrome.

## Typography

**Display Font:** Bodoni Moda (with Times New Roman, serif fallback) — a high-contrast Didone chosen for its engraved, official-document character: it reads as passport titling, instrument nameplate lettering, and manuscript display type across all four worlds without changing family.
**Body Font:** Source Serif 4 (with Georgia, serif fallback) — warm and legible, paired to complement Bodoni's contrast rather than compete with it.
**Label/Mono Font:** JetBrains Mono — used exclusively for "instrument readout" content: credential data fields, compass bearings, radar coordinates, stat plates, form labels, CTAs.
**Devanagari Font:** Noto Sans Devanagari — used only on the Yoga vertical, only for the institute's Sanskrit motto (`॥ योगः कर्मसु कौशलम् ॥`) and the folio's verse numerals; never a general body substitute.

**Character:** One typographic voice — an official, engraved authority — carried by family choice alone; each world's personality comes from color and motif, never from swapping type families.

### Hierarchy
- **Display** (500, `clamp(2.2rem, 5vw, 4.2rem)`, 1.03–1.05 line-height): hero H1s only.
- **Headline** (500, `clamp(1.85rem, 4vw, 2.9rem)`): section H2s.
- **Title** (500, 1.35–1.6rem): card/entry H3s (visa panels, folio entries, contact cards, bearing blocks).
- **Body** (400, 1.0625rem, 1.6–1.65 line-height): paragraph copy.
- **Label** (500, 0.62–0.85rem, 0.05–0.22em tracking, uppercase): eyebrows, badges, form labels, CTAs — always JetBrains Mono.

### Named Rules
**The No-Kicker Rule.** Section eyebrows use mono labels tied to the world's own vocabulary (e.g. "Instrument Readings," "The Folio · Core Offerings") rather than generic numbered kickers; they carry information (which section of the instrument/document you're in), not decoration.

## Layout

Single-column content max-width of `1180px`, centered, with responsive section padding `clamp(3.5rem, 8vw, 6rem)` vertical / `clamp(1.25rem, 4vw, 2.5rem)` horizontal — consistent across all four pages. Each world's signature composition sits inside this shell:
- **Root:** a two-column "passport spread" hero (bio-data fields left, framed portrait right) collapsing to one column under 860px; a 3-column "visa panel" grid for the verticals collapsing to 1 column under 900px.
- **Yoga:** a dark two-column institute banner; folio entries as a numbered 90px/1fr two-column list collapsing to one column under 640px; a hand-placed asymmetric photo gallery grid (6 images) collapsing to 2 columns under 760px.
- **Energy:** a two-column hero (copy / compass face) collapsing under 860px; "bearing blocks" as a 200px/1fr two-column list (degree readout / content) collapsing under 760px.
- **Leadership:** a two-column hero (copy / radar scope) collapsing under 860px; a 2×2 "contact card" grid for the four service verticals collapsing to one column under 760px.

All four pages share one header/footer skeleton (`.site-header`, `.site-footer`, `.nav-menu`, `.nav-dropdown`) from `assets/css/base.css`; only color tokens differ per page's stylesheet.

## Elevation & Depth

Flat by design — no drop shadows anywhere in the system except soft, large-radius ambient shadows under the root passport spread and photo frames (`0 40px 80px -40px rgba(...)`, `0 24px 50px -24px rgba(...)`). Depth otherwise comes from material logic, not shadow: the root's stamped ink seals sit at reduced opacity to read as pressed-in ink; the energy compass face uses `drop-shadow` as instrument glow, not card elevation; borders and hairline dividers (`1px solid` in each world's line-color token) do the separating work everywhere else.

### Named Rules
**The Pressed-Ink Rule.** Where a "stamp" motif needs depth, use reduced opacity and rotation rather than a shadow — it should read as ink pressed into paper, not a floating card.

## Shapes

No border radius anywhere in the system — every container, button, card, form field, and image frame is hard-edged (`border-radius: 0` implicit, never overridden). This is deliberate: it is the one silhouette rule that holds across all four worlds, reinforcing "official document / engraved instrument" over "soft app UI." Borders are hairline (`1px`) in each world's own line-color token; the root's passport spread additionally uses an inset `1px` border 14px from its edge to read as a printed document's safety margin.

### Named Rules
**The Hard-Edge Rule.** No rounded corners anywhere, on any world. A rounded corner is the first tell of a generic template and is refused categorically here.

## Components

### Buttons
- **Shape:** hard-edged rectangle, `1px solid` border in the current ink color, no radius.
- **Primary:** solid fill in the world's ink-on-metallic pairing (root: charcoal→gold on hover; yoga: ochre→sand; energy: rose-gold→cream; leadership: amber→white), JetBrains Mono label, uppercase, `0.85rem 1.6rem` padding.
- **Ghost:** transparent fill, current-color border and text, inverts to solid fill on hover.

### Cards / Containers
- **Corner style:** hard-edged, no radius, anywhere.
- **Background:** the world's ground or ground-deep token; panel/card grids use a shared hairline-color background so a 1px gap reads as a grid rule between siblings (root visa-grid, energy bearing-blocks, leadership contact-grid).
- **Border:** `1px solid` in the world's line token; no shadow elevation.
- **Reveal state:** cards using `[data-reveal]` fade and rise 14–18px into place on scroll via `IntersectionObserver` (`assets/js/main.js`), staggered ~0.12s per sibling.

### Inputs / Fields
- **Style:** `1px solid` line-color border, low-opacity tint of the ground as fill, no radius.
- **Focus:** a themed `2px solid` outline in the world's bright accent (gold / sage-bright / rose-gold-bright / amber) with `3px` offset — never the browser default blue ring.
- **Status:** a mono-font status line beneath each form (`data-form-status`) that reports a placeholder-endpoint notice or a pending-send state.

### Navigation
- Sticky header, blurred translucent version of the world's ground; a mono-labeled "Explore Verticals" dropdown lists all three verticals plus itself from every page. Mobile collapses to a slide-in panel; the dropdown's mobile open/close animates `grid-template-rows` (never `max-height`) to avoid layout-property animation.

### The Seal Mark (signature component)
A single hand-authored SVG symbol (12 compass ticks, double ring, 8-point compass-rose star) reused on every page as the header brand mark, and reinterpreted per world: root's passport stamp (rotated, low-opacity, red ink), the visa panels' corner stamps, Yoga's footer mark, and — most literally — Energy's hero, where it *is* the compass face itself with a separate rotating needle overlay.

## Do's and Don'ts

### Do:
- **Do** keep the seal mark, the three-font system, and the hard-edge/no-radius rule identical across all four worlds — this is what makes four different color systems read as one site.
- **Do** source a vertical's palette from its own confirmed logo when one exists (Yoga, Energy), overriding the original brief's placeholder color text.
- **Do** use JetBrains Mono exclusively for instrument-readout content (data fields, bearings, coordinates, labels) — never for body prose.
- **Do** theme focus rings, selection color, and form-field states per world; never leave browser defaults on a themed dark page.

### Don't:
- **Don't** round any corner, anywhere, on any world.
- **Don't** invent testimonials, customer quotes, or institution names to fill a content gap — the Leadership gallery's honest "endorsements being compiled" note and Yoga's unattributed degree list are the pattern to follow.
- **Don't** reuse one vertical's ground/ink pairing on another; each world's palette is closed to the other three.
- **Don't** animate `max-height`, `width`, `height`, or `padding` for reveal/collapse states — use `grid-template-rows`, `transform`, and `opacity`.
