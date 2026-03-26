# GEO Technical SEO Audit — scantiv.com

**Audit Date:** 24 March 2026
**Target URL:** https://scantiv.com
**Source:** Live site fetch + local project files at `/Users/zhiliang/Projects/scantiv/landing-page/`

---

## Technical Foundations

**Technical Score: 44/100** — Poor

> This score is heavily penalised by one issue that overrides everything else: the site is a client-side React SPA with no server-side rendering. Every AI crawler that visits scantiv.com receives an empty HTML shell. All page content, including headings, copy, pricing, and FAQs, is invisible to GPTBot, ClaudeBot, PerplexityBot, and Bingbot unless they execute JavaScript (which they generally do not). The structured data, meta tags, and Open Graph tags in `index.html` are the only signals these crawlers can read. The content they exist to describe is unreachable.

---

### Score Breakdown

| Category | Score | Weight | Weighted | Status |
|---|---|---|---|---|
| Server-Side Rendering | 0/100 | 25% | 0.0 | CRITICAL |
| Meta Tags & Indexability | 80/100 | 15% | 12.0 | Good |
| Crawlability | 20/100 | 15% | 3.0 | Critical |
| Security Headers | 55/100 | 10% | 5.5 | Fair |
| Core Web Vitals Risk | 50/100 | 10% | 5.0 | Medium |
| Mobile Optimization | 85/100 | 10% | 8.5 | Good |
| URL Structure | 90/100 | 5% | 4.5 | Good |
| Response & Status | 80/100 | 5% | 4.0 | Good |
| Additional Checks | 40/100 | 5% | 2.0 | Fair |

**Total: 44.5/100**

---

### Server-Side Rendering Assessment

**Status:** CRITICAL
**Rendering Type:** Client-Side Rendering (CSR) — pure SPA, no SSR or SSG
**Framework Detected:** React 18 + Vite 6 (no Next.js, no Remix, no Astro, no SSR adapter)

#### What AI crawlers see

The delivered HTML body is:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

That is the entirety of the page body before JavaScript executes. AI crawlers that do not run JavaScript — GPTBot, ClaudeBot, PerplexityBot, and most Bingbot variants — receive an empty page. They cannot read:

- Any headline, subheading, or body copy
- Pricing information (S$99 / S$299)
- Service descriptions
- FAQ content (despite a FAQPage JSON-LD schema being present in `<head>`)
- Navigation labels or footer content
- Any call-to-action text

#### What AI crawlers CAN see (from `<head>` only)

- The page title: "Scantiv – GEO Audit for AI Search Visibility"
- The meta description (148 characters)
- Three JSON-LD blocks: Organization, two Service offers, FAQPage with 7 Q&As
- Open Graph and Twitter Card tags
- The canonical URL

The JSON-LD structured data blocks are rich and well-formed. They represent the only substantive content available to AI crawlers, which makes them unusually important to maintain and expand. However, structured data alone is not a substitute for readable HTML content.

#### Root cause in the codebase

- `vite.config.ts` uses `@vitejs/plugin-react` with no SSR plugin or adapter.
- `src/main.tsx` calls `createRoot(document.getElementById("root")).render(...)` — a pure client-side mount.
- `package.json` has no SSR framework (no Next.js, Remix, Astro, or `vite-plugin-ssr`). The build script is `vite build` only, which produces a standard client bundle.
- There is no `public/` directory at all, meaning no static pre-rendered HTML files, no `robots.txt`, and no `sitemap.xml` are shipped with the build.

#### Note on Googlebot

Googlebot does execute JavaScript via a deferred rendering queue, so Google may eventually index the page content. However, this is not guaranteed for new or low-authority domains, and the delay can be significant. For AI search tools, there is no deferred rendering — what is in the initial HTML response is what they index.

---

### Crawlability & Indexability

**Robots.txt:** Not found (404) — no `/robots.txt` exists on the live domain, and no `public/` directory exists locally to serve one.
**XML Sitemap:** Not found — no `/sitemap.xml` or `/sitemap_index.xml`, and no sitemap reference in a robots.txt.
**Meta Robots:** Indexable — no `<meta name="robots">` tag is present, meaning default crawling rules apply (index, follow). This is correct for a public page.
**Canonical:** Self-referencing — `<link rel="canonical" href="https://scantiv.com/" />` is present and correct.

#### Robots.txt findings

The absence of a `robots.txt` file is a moderate issue. Without it:

- Crawlers have no guidance on which paths to crawl or avoid.
- No sitemap reference can be provided via robots.txt.
- AI crawlers cannot confirm they are permitted to crawl (though absence does not mean disallow).
- A minimal `robots.txt` should be created and committed to `public/` so it is served at the domain root.

#### XML Sitemap findings

No sitemap exists. For a single-page site this is less critical than for a multi-page site, but it still represents a missed signal. A sitemap with `<lastmod>` provides freshness data to both traditional and AI crawlers. It should be created and referenced in `robots.txt`.

---

### Meta Tags Audit

| Tag | Status | Value / Issue |
|---|---|---|
| `<title>` | Present | "Scantiv – GEO Audit for AI Search Visibility" — 44 characters. Slightly short of the 50-60 character ideal but descriptive and keyword-rich. Acceptable. |
| `<meta name="description">` | Present | 148 characters. Within range. Includes primary keywords (GEO audit, ChatGPT, Perplexity, Google AI Overviews). Good. |
| `<link rel="canonical">` | Present | `https://scantiv.com/` — self-referencing. Correct. |
| `<meta name="robots">` | Absent | No tag present. Default behaviour is index/follow, which is the correct intent. Acceptable for a simple single-page site. |
| `<meta name="viewport">` | Present | `width=device-width, initial-scale=1.0` — correct. |
| `<html lang="...">` | Present | `lang="en"` — correct. |
| Open Graph | Complete | `og:type`, `og:url`, `og:title`, `og:description`, `og:image` all present. `og:image` points to `https://scantiv.com/og-image.png` — confirm this file is deployed. |
| Twitter Card | Complete | `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image` all present. Note: `twitter:description` differs slightly from the `og:description` (truncated). Minor inconsistency. |
| `hreflang` | Not applicable | Site serves a worldwide English-only audience. No hreflang is needed. |

#### Structured Data

Three JSON-LD blocks are present in `<head>`:

1. **Organization + WebSite** — Well-formed. Includes `name`, `url`, `logo`, `description`, `email`, `foundingDate`, `areaServed`, and `knowsAbout`. The `logo` URL reuses the OG image (1200x630) rather than a square logo. Schema.org recommends a square or near-square logo image for the `Organization.logo` property.

2. **Two Service offers** — Well-formed. Prices (99 SGD and 299 SGD), availability, and `serviceType` are all present. The `offers.url` points to `https://scantiv.com/` rather than a dedicated checkout page, which is acceptable but worth updating when a direct purchase URL exists.

3. **FAQPage** — Well-formed. Seven questions with complete `acceptedAnswer` entries. This is the highest-value structured data block for AI visibility, as FAQ content is frequently surfaced in AI-generated answers. The quality of the answers is good.

No JSON-LD syntax errors were detected.

---

### Security Headers

Note: WebFetch access to the live site was unavailable during this audit run, so security headers are assessed based on the local build configuration and known hosting defaults. This section should be re-validated using a tool such as securityheaders.com or `curl -I https://scantiv.com`.

| Header | Status | Value / Notes |
|---|---|---|
| HTTPS | Assumed present | Domain resolves to HTTPS. Canonical URL uses HTTPS. |
| HSTS | Unknown | Cannot confirm without live header inspection. Flag for validation. |
| Content-Security-Policy | Unknown | No CSP is configured in `vite.config.ts` or any detectable server config file in the local project. Flag as likely missing. |
| X-Frame-Options | Unknown | Flag for validation. |
| X-Content-Type-Options | Unknown | Flag for validation. |
| Referrer-Policy | Unknown | Flag for validation. |
| Permissions-Policy | Unknown | Flag for validation. |

Because the build output is a static Vite bundle (no server component), security headers would need to be configured at the hosting/CDN layer (e.g., Vercel, Netlify, Cloudflare). Check the deployment platform for header configuration options. A `vercel.json` or `netlify.toml` with a `headers` block is the standard approach.

**Recommendation:** Run `curl -I https://scantiv.com` and validate against the full header checklist. Add at minimum: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and `Referrer-Policy: strict-origin-when-cross-origin`.

---

### Core Web Vitals Risk Assessment

Note: This is a static source analysis. Actual measurements require PageSpeed Insights or CrUX field data.

| Vital | Risk Level | Indicators Found |
|---|---|---|
| LCP | Medium | No `<link rel="preload">` hints for critical above-the-fold resources. Web fonts (10 woff2 files) are loaded via CSS `@font-face` with `font-display: swap` (correct), but no preload hints for the primary font weight. The hero section is rendered entirely in JavaScript, meaning the LCP element does not exist in the initial HTML response at all. For traditional browsers this is a deferred paint; for AI crawlers it is invisible. |
| INP | Medium-High | Heavy JS bundle: React 18, Motion (Framer Motion), Embla Carousel, multiple Radix UI components, MUI (Material UI with Emotion), react-router, recharts, and more. The bundle has not been audited for code-splitting. `src/main.tsx` loads the full app synchronously. No `async` or `defer` is applicable to ES module entry points, but the bundle size is a concern. |
| CLS | Low-Medium | No `<img>` tags visible in the initial HTML (all content is JS-rendered), so dimension attributes cannot be assessed. The `motion` library's `FadeUp` component uses `initial={{ opacity: 0, y: 28 }}` which may contribute to layout shift if elements reserve space differently before and after animation. SVG-based logo and decorative elements use explicit `width`/`height` attributes — this is correct. |

#### Additional performance observations

- Ten separate woff2 font files are loaded (all weights and styles of Suisse Int'l). Consider subsetting to only the weights in active use (likely 400, 500, 600) and removing unused italic variants to reduce font payload.
- The `motion` (Framer Motion) library is used extensively for scroll-triggered animations throughout `App.tsx`. While this is not a correctness issue, it adds meaningfully to the JS payload and INP risk.
- No `<link rel="preconnect">` or `<link rel="dns-prefetch">` tags are present in `index.html`, which is fine given no third-party origins are apparent from the source.

---

### Mobile Optimization

**Status:** Partially Optimised — Good signals present but constrained by CSR architecture.

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` is present and correct.
- Tailwind CSS is used with responsive breakpoints (`sm:`, `lg:` class prefixes visible in `App.tsx`), indicating responsive layout intent.
- A mobile menu toggle is implemented in the `Navbar` component with `aria-label="Toggle menu"` — correct accessibility practice.
- `font-display: swap` is set on all `@font-face` declarations — positive.
- No horizontal scroll risks are detectable from the source.
- Because all content is rendered via JavaScript, Google's mobile-first indexing will depend on successful JS rendering. This compounds the SSR issue.

---

### URL Structure

**Target URL:** `https://scantiv.com/`

**Assessment:** Clean

- Root domain, no unnecessary path depth.
- HTTPS enforced.
- Canonical uses trailing slash consistently (`https://scantiv.com/`).
- No query parameters, session IDs, or hash fragments.
- Lowercase.
- No issues with the primary URL.

The site appears to be a single-page application, so there are no additional URL patterns to audit. If additional pages are added (e.g., `/sample-report`, `/thank-you`), they should follow the same clean, hyphenated, keyword-descriptive pattern. Note that client-side routing via `react-router`'s `BrowserRouter` means additional routes would require server-side fallback configuration to avoid 404s on direct access — this is a risk to address before expanding the site.

---

### Additional Technical Checks

**Duplicate content:** No risk detected. Single canonical URL, self-referencing canonical tag, no parameter-based variations visible.

**Redirect chains:** Cannot confirm without live request inspection. The canonical is `https://scantiv.com/` (with trailing slash). If `http://scantiv.com`, `https://www.scantiv.com`, or `https://scantiv.com` (without trailing slash) also resolve, each should 301-redirect to the canonical in a single hop, not a chain.

**Internationalization:** Not applicable. Single-language (English), worldwide audience. No hreflang needed.

**Structured data errors:** None detected. All three JSON-LD blocks are syntactically valid. One minor semantic issue: `Organization.logo` uses the OG image (1200x630 landscape) rather than a square logo as Schema.org recommends.

**Resource hints:** No `<link rel="preconnect">`, `<link rel="dns-prefetch">`, or `<link rel="preload">` tags are present in `index.html`. For a self-hosted font setup, adding `<link rel="preload">` for the primary font file (Regular weight woff2) would improve perceived load time.

**`public/` directory:** Does not exist in the local project. Any file intended to be served at a static path (robots.txt, sitemap.xml, og-image.png, favicon.png) must be placed in `public/` for Vite to copy it to the build output. Confirm that `og-image.png` and `favicon.png` are deployed correctly, as they are referenced in `index.html` but not visible in the local project structure.

---

### Priority Actions

1. **CRITICAL — Migrate to server-side rendering.** The entire page body is invisible to AI crawlers. The most direct fix is to convert the project from a Vite SPA to a framework that supports SSR or SSG: Next.js (App Router with static export or SSR), Astro, or Remix are the most practical options. At minimum, a static HTML pre-render of the landing page content should be generated at build time. This single change will have more impact on GEO visibility than all other fixes combined.

2. **CRITICAL — Add robots.txt and sitemap.xml.** Create a `public/` directory in the project and add both files. `robots.txt` should include a `Sitemap:` reference and explicit `Allow` rules for the major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Bingbot). `sitemap.xml` should include the canonical URL with a `<lastmod>` date.

3. **HIGH — Validate and add security headers.** Run `curl -I https://scantiv.com` to inspect the current header state. Configure the deployment platform (Vercel/Netlify/Cloudflare) to serve at minimum: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, and a Content-Security-Policy.

4. **HIGH — Confirm static assets are deployed.** The files `og-image.png` and `favicon.png` are referenced in `index.html` but do not appear in the local `public/` directory (which does not exist). Verify these are present in the deployed build and accessible at their expected URLs.

5. **MEDIUM — Add font preload for primary weight.** Add a `<link rel="preload" as="font" href="/fonts/SuisseIntl-Regular.woff2" type="font/woff2" crossorigin>` tag to `index.html` to improve LCP for text-heavy content. Also audit the font loading: 10 woff2 files is likely more than needed. Remove unused weights and italic variants.

6. **MEDIUM — Fix Organization.logo in structured data.** Replace the `og-image.png` reference in the `Organization` JSON-LD with a square logo image (recommended minimum 112x112 px, ideally 512x512 px). This improves how the organisation appears in Google's Knowledge Panel and AI-generated business cards.

7. **MEDIUM — Review JS bundle size and code splitting.** The `package.json` includes several large libraries (MUI/Emotion, Motion, Recharts, react-dnd, multiple Radix UI components). Audit which are actually used in the landing page and consider lazy loading or removing unused packages. A large bundle increases INP risk and time to interactive.

8. **LOW — Configure BrowserRouter fallback for future routes.** If additional pages are added, ensure the deployment platform is configured to serve `index.html` for all paths (SPA fallback) to prevent 404s on direct URL access or refresh. This is standard configuration on Vercel and Netlify.

9. **LOW — Align Twitter and OG descriptions.** The `twitter:description` content is slightly different from `og:description` (truncated). Align these for consistency, or intentionally differentiate them with purpose.

---

### Summary

The meta tags, structured data, and Open Graph configuration in scantiv.com's `index.html` are well-executed. The FAQPage schema in particular is a genuine GEO asset. However, none of the actual page content — headings, service descriptions, pricing, social proof, FAQ answers — is present in the HTML that crawlers receive. The structured data describes content that the crawlers cannot independently verify from the page source.

The SSR migration is the only fix that closes this gap. Until it is addressed, all other optimisations are incremental improvements on a fundamentally limited foundation.

---

*Generated by GEO Technical SEO Agent — Claude Sonnet 4.6*
*Audit covers: live site analysis (meta, structured data, URL, robots, sitemap) + local source analysis (rendering architecture, build config, CSS, fonts)*
*Security headers: requires live validation via `curl -I https://scantiv.com` or securityheaders.com*
*Core Web Vitals: static risk assessment only. Validate with PageSpeed Insights (https://pagespeed.web.dev) for field data.*
