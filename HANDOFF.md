# HANDOFF — Dr. Reena Agrawal website

> **Next session: say "continue" and start at [What's next](#whats-next).**
> Read `PRODUCT.md` (product truth) and `DESIGN.md` (design system) first — they're authoritative and current.

---

## Where things stand

A complete 4-page static site is **built, audited, fixed, and pushed to GitHub**. No framework, no build step.

```
index.html                          Root — "Credential Passport" (ivory/charcoal/gold)
yoga-expert/index.html              Art of Learning Institute — "Sutra Folio" (sand/teal/ochre)
energy-spatial-consultant/index.html  Divine Power — "Navigational Instrument" (oxblood/blush/rose-gold)
leadership-mindset-coach/index.html  Leadership — "Radar Scope" (navy/slate/amber)
assets/css/  base.css + one stylesheet per page
assets/js/   main.js (nav, header-shrink, lightbox, reveal, forms) + root.js
assets/img/  curated photos + logos (6.6MB)
```

Unifying concept: **"one instrument case, four tools."** Shared Bodoni Moda / Source Serif 4 / JetBrains Mono type system, a hand-authored compass-rose seal mark, and a hard-edge (no border-radius) rule across all four worlds. Details in `DESIGN.md`.

**To preview:** start a local server (Claude-in-Chrome refuses `file://` URLs):
```bash
cd "C:\Users\vanda\Desktop\Reena Agrawal\Website"
node -e "const http=require('http'),fs=require('fs'),path=require('path');const m={'.html':'text/html','.css':'text/css','.js':'application/javascript','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'};http.createServer((q,s)=>{let p=decodeURIComponent(q.url.split('?')[0]);let f=path.join(process.cwd(),p);if(p.endsWith('/'))f=path.join(f,'index.html');fs.readFile(f,(e,d)=>{if(e){s.writeHead(404);s.end();return;}s.writeHead(200,{'Content-Type':m[path.extname(f)]||'application/octet-stream'});s.end(d);});}).listen(8123,()=>console.log('http://localhost:8123'));"
```

---

## What's next

### 1. Enable GitHub Pages (user action — no `gh` CLI here)
Code is pushed to https://github.com/1dan1609/ReenaAgrawal (`main`). In the repo: Settings → Pages → Source "Deploy from a branch" → `main` / `(root)` → Save. Site: https://1dan1609.github.io/ReenaAgrawal/. Relative paths throughout, so the subpath deploy needs no changes — verify after it goes live.

### 2. Remaining polish (P3, optional)
- 17 literal colours outside tokens and 100 font sizes off the DESIGN.md ramp (detector advisories) → `/impeccable polish`.
- Instrument-graphic labels (compass bearings, radar blip labels) stay at 0.68rem (~10.9px) so they don't collide inside the graphics.
- Header brand link and footer links are 30–32px tall: they pass WCAG 2.5.8 AA (24px) but not the 44px AAA guideline.

---

## Audit — 2026-09-30 (`/impeccable audit`, then fixes)

**Before fixes: 12/20.** Accessibility 2, Performance 2, Responsive 2, Theming 3, Integrity 3.

Fixed and browser-verified (375px + 1280px, all 4 pages):
- **Contact form cut off on phones** (Yoga/Energy/Leadership): the mobile `1fr` grid track grew to the service `<select>`'s min-content (408px on a 375px screen) and `html { overflow-x: hidden }` clipped it. Fixed with `minmax(0, 1fr)`, `min-width: 0` on grid children and `width: 100%` on fields (base.css). **The earlier ~500px check missed this — always test at 375px.**
- **Contrast:** all failing pairs fixed via new tokens (root `--gold-ink`, yoga `--ochre-ink` / `--ochre-bright`, leadership `--slate` lifted to #768b9d) and brighter footer fine print. Also caught the Yoga primary button (sand on ochre, 3.65:1), which the old table missed. Computed in-browser afterwards: 0 real failures on all 4 pages.
- **Lightbox:** `role="dialog"` + `aria-modal`, focus moves to the close button and returns on close, Tab is trapped, the `<img>` is created on open and removed on close (no empty `src`), close button now square (Hard-Edge Rule).
- **Nav dropdown:** `aria-controls="verticals-menu"` (deliberately not `aria-haspopup` — it's a disclosure, not an ARIA menu).
- **Touch targets:** footer links padded to ≥24px; mobile nav items, menu toggle and `.btn` are 44px min.
- **Motion:** one `prefers-reduced-motion` block in base.css covers reveals (fade only), compass needle, radar sweep and blips, nav transitions and smooth scroll. The header no longer animates padding/height: padding is constant and the sub-brand mark scales via `transform`.
- **Performance:** photos re-encoded (mozjpeg q74, full-size 5.84MB → 3.05MB) plus `-800.jpg` variants served via `srcset` (≈55KB each; verified a 265px tile loads the 800w file). AoLI logo 100KB → 6KB. Fonts load via parallel `<link>`s with preconnect instead of a chained `@import`.
- **Small labels** raised from 0.62–0.68rem to 0.72rem.

Detector after fixes: 0 warnings (only the 117 advisories above). It ran DEGRADED (its parser modules aren't installed), so contrast came from an in-browser computation rather than the detector.

---

## Still-open content gaps (never fabricate these)

- **Forms don't deliver yet** — all four post to a `YOUR_FORM_ID` Formspree placeholder. User needs a free Formspree account, then swap the ID in 4 files. `main.js` detects the placeholder and shows a notice instead of silently failing.
- **No LinkedIn / YouTube links** — requested by the spec, never provided, deliberately omitted.
- **No real testimonials** — leadership page carries an honest "endorsements being compiled" note instead of a fabricated carousel.
- **No university names** for the PhD/MA/M.Sc. — degree titles only.
- **Leadership vertical has no logo** — uses an authored mini radar-scope glyph + wordmark.

---

## Gotchas learned this session (will save you time)

- **`resize_window` is unreliable on an existing tab.** To test mobile, `tabs_create_mcp` a **fresh** tab first, then resize. Even then it sometimes lands at a different size than requested — always confirm with `window.innerWidth` before trusting a mobile screenshot.
- **Screenshots lag the DOM.** After a click/scroll, a screenshot often shows the *previous* frame. Re-take it or add a wait before concluding something is broken. Several "bugs" this session were just stale frames.
- **`javascript_tool` blocks base64 returns** (exfiltration guard), and programmatic downloads don't land in the Downloads folder. Don't try to move binary data out of the browser that way.
- **Claude-in-Chrome refuses `file://`** — always use the local server.
- **Bugs fixed this session, don't reintroduce:** `overflow-x:hidden` on *both* `html` and `body` created nested scroll containers and silently broke `position:sticky` (keep it on `html` only); a higher-specificity `[data-open="true"]` rule was overriding the mobile nav `transform:none`; and headings were rendering invisible on dark sections because the global `h1–h4` color rule beat the inherited section color (fixed on `.contact-band` and `.endorsements` — **watch for this pattern on any new dark section**).
