# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML/CSS/JS, no framework or build step. This is a 4-page brochure/lead-generation site (root + 3 verticals) with no CMS, auth, or dynamic data needs, so static output keeps it fast, simple to hand off, and free to host. The user confirmed a $0 hosting budget with occasional future content updates — static files on GitHub Pages, Cloudflare Pages, Netlify, or Vercel (all free tiers for a site this size) satisfy both: updates are just edited files pushed to redeploy, no server or database cost. Revisit the no-framework call only if the user later wants frequent self-service content edits without touching code.

## Users

- **Root landing page:** General visitors who may not yet know which of the three verticals they need — arriving via search, word of mouth, or a shared link — evaluating Dr. Agrawal's overall credibility before choosing a path.
- **Yoga Expert / Art of Learning Institute:** Aspiring yoga teachers seeking Skill India-aligned certification, general public seeking classes, people seeking therapeutic/prescriptive yoga, and event/retreat participants.
- **Energy & Spatial Consultant / Divine Power:** Homeowners and businesses seeking Vastu consultation (residential, commercial, land/flat selection), individuals seeking crystal/gemstone therapy, and individuals seeking numerology, tarot, or Vedic astrology readings.
- **Leadership & Mindset Coach:** Corporate HR/L&D buyers booking training programs, school/college administrators booking student orientation, event organizers booking keynote speakers, and individuals seeking confidential personal/behavioral counseling.

## Product Purpose

An umbrella personal-brand portal for Dr. Reena Agrawal that routes visitors into three specialized, independently-branded consultancy sub-pages. Each sub-page exists to convert a visitor into a categorized inquiry/booking lead for its vertical.

## Positioning

A single practitioner with credentialed, cross-disciplinary authority that no single-vertical competitor could truthfully claim: government-recognized (Skill India) yoga teacher-training accreditation plus a PhD in Yogic Science, entrepreneurial leadership as founder of a 15-person marketing/PR firm, and standing across both classical yogic science and mystical/predictive arts (Vastu, astrology, numerology, tarot, crystal therapy).

## Operating Context

- Work happens through in-person and event-based engagements: yoga championships and retreats, corporate workshops, campus orientation drives, keynote sessions, and one-on-one consultations.
- Vastu/Astro consultations require visitors to upload floor plans, floor maps, or birth details ahead of a booked session.
- Every form submission across the three verticals must be tagged by lead category (e.g. `Category: Yoga`, `Category: Vastu`, `Category: Corporate Training`) before reaching the central inbox.

## Capabilities and Constraints

- No form backend exists yet. Build forms against a no-backend-required static form service (e.g. Formspree or Web3Forms) so submissions land as email immediately, structured so swapping in a real CRM later is a config change, not a rebuild.
- Lead routing/category tagging is a functional requirement of every inquiry form, not just the central hub's.
- Responsive, mobile-first layout across all pages; event photography and certificate images must render at high quality.
- Per-page SEO metadata is specified in `website_development_requirements_specification.md` §4 and must be implemented as given.
- University names behind the PhD/MA/M.Sc. credentials were not provided (marked `[University Name]` in the spec). Do not fabricate institutions — leave clearly marked as pending or omit the field.
- Leadership & Mindset Coach vertical still has no logo or visual brand mark. Treat its identity as typographic/text-based; the spec's Navy Blue/Slate Grey/Crisp White/Amber palette stands until a mark arrives.
- Divine Power's real logo (see Evidence on Hand) is deep maroon/oxblood with blush-peach and cream, not the spec's placeholder "Deep Indigo, Amethyst, Champagne Gold." The user explicitly authorized deciding the vertical's color scheme once the real logo arrived — build the Energy & Spatial Consultant vertical around the logo's actual maroon/oxblood, rose-gold, and blush palette instead of the spec text.

## Brand Commitments

- **Art of Learning Institute** (Yoga vertical) has a confirmed logo file at `/Logos/AoLi logo.jpg` — a circular mark, earthy brown/ochre disc, dark teal silhouette of a figure in a backbend (ustrasana), cream ground, "Art of Learning Institute · Yoga Teachers Training Institute" in tracked caps. Preserve it as-is; do not redesign it. (Event banners in `/Yoga` also show it in orange/red colorways — the file above is the authoritative version.)
- **Divine Power World** (Energy & Spatial Consultant vertical) has a confirmed logo file at `/Logos/Divine.png` — a deep maroon/oxblood ground, a blush-peach ornamental floral/mandala emblem, "DIVINE" in cream serif with "POWER · WORLD" tracked beneath. This is the vertical's authoritative palette (see Capabilities and Constraints); preserve the mark as-is.
- Institute motto: *॥ योगः कर्मसु कौशलम् ॥* ("Excellence in Action is Yoga").
- Titles and honors are real and must be stated accurately: **Yoga Guru**, **Yoga Ratna** and **Yoga Bhushan Samman** (February 2019).
- **Victorious Media** — Dr. Agrawal's marketing/PR firm (15+ professionals) — is the entrepreneurial credential backing the Leadership vertical.
- **Divine Power** is the confirmed firm name for the Energy & Spatial Consultant vertical (no logo existed at project start; now confirmed, see above).

## Evidence on Hand

- **Yoga vertical:** `/Yoga` — 21 real event photographs (National/International Yogasana Championship ceremonies, trophy/award displays, students and teachers performing asanas, group photos with certificates). Includes one strong solo portrait of Dr. Agrawal in traditional red/gold attire, and the Art of Learning Institute logo visible in multiple banners.
- **Leadership vertical:** `/Leadership` — 26 real event photographs (corporate talks, student induction/orientation sessions, Lions Club engagements, a presentation shot of Dr. Agrawal speaking with a screen behind her). Several files carry a baked-in "GPS Map Camera" location/timestamp overlay burned into the image — crop or select around these rather than using the overlay as-is.
- **Energy & Spatial Consultant vertical:** `/Energy & Spatial Consultant` — only 5 generic stock/clip-art images (`Astrology.png` birth chart, `Crystals.jpg`, `Numero.jpg`, `Tarot.jpg`, `Vastu.jpg` compass diagram). None are proprietary photography of Dr. Agrawal's actual practice; no logo exists for this vertical. This vertical is visually the least evidenced of the three.
- **Contact details (confirmed):**
  - Email: reena2851@gmail.com
  - Phone/WhatsApp: +91 80802 12851
  - Instagram (personal/yoga brand): @yogaguru_reena
  - Instagram (Divine Power vertical): @divine.powerworld
  - Facebook: reenaagrawal.agrawal
  - LinkedIn and YouTube were requested by the spec but no links were provided — state as not yet available; do not fabricate profile URLs.
- **Logos (confirmed):** `/Logos/AoLi logo.jpg` (Art of Learning Institute) and `/Logos/Divine.png` (Divine Power World). Leadership vertical has no logo yet.

## Product Principles

1. One authoritative personal brand fronts three genuinely distinct professional identities — the root page carries shared credibility; each vertical earns its own theme without breaking that shared authority.
2. Lead with real evidence over generic stock wherever it exists (Yoga, Leadership); never fabricate proof for the vertical that currently lacks it (Divine Power).
3. Every page is built to convert: each vertical's job is to produce a categorized inquiry, not just to inform.
4. Build what's pending to be replaced cleanly: Divine Power's visual identity is provisional until real brand assets arrive, so its theming should be easy to reskin, not treated as finished work.
