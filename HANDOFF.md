# HANDOFF — Dr. Reena Agrawal website

> **Next session: say "continue" and start at [What's next](#whats-next).**
> Read `PRODUCT.md` (product truth) and `DESIGN.md` (design system) first — they're authoritative and current.

---

## Where things stand

A complete 4-page static site is **built, visually QA'd, and working**. No framework, no build step.

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

### 1. Deploy to GitHub (the task that was interrupted)

Repo: **https://github.com/1dan1609/ReenaAgrawal** — verified **empty** (`git ls-remote` returns nothing, exit 0).

Verified environment facts:
- `git` 2.40.1 available; **`gh` CLI is NOT installed**
- No local git repo in the project dir yet
- git identity already configured: `1dan1609` / `47774683+1dan1609@users.noreply.github.com`

Steps:
1. `git init` + create `.gitignore`.
   **Decision needed from user first:** the raw source folders are 14MB of mostly-unused originals —
   `Yoga/` (8.3MB), `Leadership/` (5.8MB), `Energy & Spatial Consultant/` (228K), `Logos/` (208K).
   Only ~21 curated images in `assets/img/` (6.6MB) are actually used by the site.
   Ask whether to commit the raw folders (useful archive, 22MB repo) or gitignore them (lean ~7MB repo).
   Also decide on `whatsapp-svgrepo-com.svg` (source file, now inlined into the HTML — safe to remove or ignore).
2. Commit, `git remote add origin https://github.com/1dan1609/ReenaAgrawal.git`, push to `main`.
3. **Enable GitHub Pages — the user must do this in the browser** (no `gh` CLI):
   Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main` → Folder: `/ (root)` → Save.
   Site will be at `https://1dan1609.github.io/ReenaAgrawal/`.
4. Relative paths were used throughout, so a project-subpath deploy works without changes. Verify after deploy.

### 2. Finish the audit (was in progress, interrupted)

`/impeccable audit` was ~70% done. Findings below are **verified, not guesses** — keep them.
Still to do: formal 0–4 scoring per dimension, mobile-width runtime verification, energy-page motion check.

---

## Audit findings (verified)

### Contrast failures — WCAG AA (4.5:1 for body/small text), computed not eyeballed

| Page | Pair | Ratio | Where it's used |
|---|---|---|---|
| Yoga | ochre `#9c7539` on teal `#223b36` | **2.87** | `.motto__sanskrit` — the Sanskrit motto, a prominent brand element |
| Lead | slate@0.7 on navy-deep | **2.88** | `.site-footer__bottom` |
| Root | gold `#a9782f` on ivory-deep `#ece3d1` | **3.04** | `.field label` inside `.form-card` |
| Root | gold `#a9782f` on ivory `#f3ede0` | **3.32** | `.eyebrow-mono`, `.bio-data__type`, `.bio-data__fields dt`, `.visa-panel__no` |
| Yoga | ochre `#9c7539` on sand `#f5efdf` | **3.65** | `.eyebrow-mono`, `.folio-entry__no` |
| Lead | slate `#6c8296` on navy `#0c2136` | **4.10** | `.contact-card li`, `.credential-plate__label` |
| Yoga | sand@0.5 on `#1a302b` | **4.25** | `.site-footer__bottom` |
| Energy | blush@0.55 on oxblood-deep | **4.32** | `.site-footer__bottom` |

Everything else passed, including all body text, headings and buttons. **The Energy page passes every check.**
Recompute with `scratchpad/contrast.mjs` (script written this session) after any palette change.

### Other verified issues

- **Lightbox `<img src="">`** on yoga + leadership pages — empty `src` makes some browsers re-request the page URL as an image. Detector flags it as `broken-image`. Use no `src` attribute until opened.
- **Lightbox a11y** — missing `role="dialog"`, `aria-modal="true"`, focus trap, and focus-return-on-close.
- **`prefers-reduced-motion` is under-covered** — only `.radar-sweep` is handled. Four `.radar-blip` infinite pulse animations (2.4s) keep running, and the energy page's `needle-settle` isn't covered either.
- **Touch targets** — 6 footer links render at 20px height, below the WCAG 2.5.8 AA minimum of 24×24. Several nav/CTA elements are 31–37px (below the 44px AAA guideline).
- **Layout-property animation** — `transition: padding` on `.site-header__inner` and `transition: height` on `.site-header__submark` (both from the scroll-shrink header). Detector `layout-transition` warnings.
- **`aria-haspopup`** missing on `.nav-dropdown-trigger`.
- **Image payload** — 6.6MB across 21 images, 13 of them over 300KB, no `srcset`. Biggest perf issue; matters for Indian mobile networks. No image-compression CLI was available in-session (`sharp` did install fine into the scratchpad via npm, so compression IS achievable — that's the path if asked).
- **Theming drift** — literal color values outside tokens: root 13 lines, yoga 20, energy 9, leadership 6. Plus 100 advisory font-sizes off the `DESIGN.md` type ramp.

### Clean / good

Heading hierarchy correct on all 4 pages (single `h1`, descending). Every image has alt text. Every form input has an associated `<label>`. `.nav-toggle` has correct `aria-expanded`/`aria-controls`/`aria-label`. No horizontal overflow at desktop. Every multi-column grid has a mobile fallback.

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
