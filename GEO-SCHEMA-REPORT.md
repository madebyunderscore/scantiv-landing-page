# GEO Schema & Structured Data Report — scantiv.com
Date: 2026-03-23

---

## Schema Score: 5/100

Scantiv has zero structured data. The only points awarded are for the absence of deprecated schemas (there are none to deprecate). Every other criterion scores 0.

---

## Detected Schemas

| Page | Schema Type | Format | Status | Issues |
|---|---|---|---|---|
| / | — | — | None found | No structured data of any kind in HTML source |

The `index.html` contains Open Graph and Twitter card meta tags, which is a good start, but these are social-sharing signals only. They do not help AI platforms identify, verify, or trust the Scantiv entity.

---

## Validation Results

No schemas present to validate.

---

## Critical Rendering Issue

Scantiv is built as a React SPA (Vite). The `index.html` delivered by the server contains only:

```html
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```

All page content is JavaScript-rendered. Per Google's December 2025 guidance, **JavaScript-injected structured data faces delayed or unreliable processing** by both Google and AI crawlers. The fix is straightforward: add JSON-LD blocks directly into the `<head>` of `index.html`. Static JSON-LD in `<head>` is always processed correctly, even on SPAs.

---

## Missing Recommended Schemas

| Schema | Priority | Reason |
|---|---|---|
| Organization | Critical | Needed for entity recognition across all AI platforms |
| WebSite + SearchAction | High | Sitelinks and AI platform indexing signal |
| Service (×2) | High | Makes both pricing tiers machine-readable |
| FAQPage | High | FAQ section already exists in the page — just needs schema |
| AggregateRating | Medium | Testimonials/reviews are present but not structured |

---

## sameAs Audit

No `sameAs` links anywhere on the page or in any schema. This is the single biggest GEO gap. Without sameAs, AI platforms cannot connect scantiv.com to any other known entity profile, which significantly reduces citation trust.

| Platform | Status | Action |
|---|---|---|
| Wikipedia | Missing | Low priority — only relevant once brand is established |
| Wikidata | Missing | Add once Wikipedia exists |
| LinkedIn | Unknown | Add company page URL once confirmed |
| Twitter / X | Unknown | Add profile URL once confirmed |
| YouTube | Unknown | Add channel URL once confirmed |
| Facebook | Unknown | Add page URL once confirmed |
| Crunchbase | Missing | Create a listing — free, high authority for AI citation |

**Immediate action:** Create a Crunchbase listing for Scantiv and add it as `sameAs` in the Organization schema. Crunchbase is one of the highest-authority entity signals for AI platforms evaluating business legitimacy.

---

## Scoring Breakdown

| Criterion | Score | Notes |
|---|---|---|
| Organization schema present and complete | 0/15 | No schema at all |
| sameAs links (5+ platforms) | 0/15 | No sameAs anywhere |
| Article schema with author | 0/10 | N/A — not a publisher; no author content |
| Business-type-specific schema (Service) | 0/10 | No Service schema for the two products |
| WebSite + SearchAction | 0/5 | Missing |
| BreadcrumbList on inner pages | 0/5 | N/A — single-page site |
| JSON-LD format | 0/5 | No structured data at all |
| Server-rendered (not JS-injected) | 0/10 | SPA — all content is JS-rendered |
| speakable property | 0/5 | Missing |
| Valid JSON + valid Schema.org types | 0/10 | No schema to validate |
| knowsAbout on Organization | 0/5 | Missing |
| No deprecated schemas present | 5/5 | Clean (nothing to deprecate) |
| **Total** | **5/100** | |

---

## Generated JSON-LD

Place all of the following inside the `<head>` tag of `/index.html`, directly above the closing `</head>` tag. This keeps it server-rendered and immediately readable by AI crawlers.

Replace every `[PLACEHOLDER]` with the real value before deploying.

---

### Block 1: Organization + WebSite

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://scantiv.com/#organization",
      "name": "Scantiv",
      "url": "https://scantiv.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://scantiv.com/og-image.png",
        "width": 1200,
        "height": 630
      },
      "description": "Scantiv provides GEO audits that tell business owners how visible they are to AI search tools like ChatGPT, Perplexity, and Google AI Overviews, with a prioritised action plan delivered as a PDF within 24 hours.",
      "email": "contact@scantiv.com",
      "areaServed": [
        {
          "@type": "Country",
          "name": "Singapore"
        }
      ],
      "foundingDate": "[YYYY-MM-DD]",
      "founder": {
        "@type": "Person",
        "name": "[Founder Full Name]",
        "sameAs": "[LinkedIn profile URL]"
      },
      "sameAs": [
        "[LinkedIn company page URL]",
        "[Twitter/X profile URL]",
        "[Crunchbase profile URL]"
      ],
      "knowsAbout": [
        "Generative Engine Optimisation",
        "AI search visibility",
        "GEO audits",
        "Answer Engine Optimisation",
        "ChatGPT search ranking",
        "Google AI Overviews optimisation",
        "Perplexity search ranking"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://scantiv.com/#website",
      "name": "Scantiv",
      "url": "https://scantiv.com",
      "publisher": {
        "@id": "https://scantiv.com/#organization"
      }
    }
  ]
}
</script>
```

---

### Block 2: Service Offerings

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://scantiv.com/#geo-audit-report",
      "name": "GEO Audit Report",
      "description": "A full GEO audit across all major AI search signals. Includes a Composite GEO Score (0–100), prioritised action plan, and a PDF report delivered within 24 hours. Works for any web platform.",
      "provider": {
        "@id": "https://scantiv.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Singapore"
      },
      "offers": {
        "@type": "Offer",
        "price": "99",
        "priceCurrency": "SGD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "url": "https://scantiv.com/",
        "description": "One-time payment. No subscription. No retainer."
      },
      "serviceType": "GEO Audit",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GEO Audit Report includes",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full GEO audit across all AI search signals" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Composite GEO Score (0–100)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prioritised action plan" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PDF report within 24 hours" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customised to your industry and customer" } }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://scantiv.com/#geo-audit-strategy-call",
      "name": "GEO Audit Report + Strategy Call",
      "description": "Everything in the GEO Audit Report, plus a 60-minute strategy call with a GEO specialist and a call recording. For business owners who want expert guidance on interpreting and acting on their results.",
      "provider": {
        "@id": "https://scantiv.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Singapore"
      },
      "offers": {
        "@type": "Offer",
        "price": "299",
        "priceCurrency": "SGD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "url": "https://scantiv.com/",
        "description": "One-time payment. No subscription. No retainer."
      },
      "serviceType": "GEO Audit with Consultation"
    }
  ]
}
</script>
```

---

### Block 3: FAQPage

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a GEO audit, and how is it different from an SEO audit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard SEO audit looks at how well your site performs in traditional search engines like Google's organic results. A GEO audit (Generative Engine Optimisation) looks at a different question: how visible is your business to AI search tools like ChatGPT, Perplexity, and Google AI Overviews? These tools use different signals to decide what to surface and recommend — and most SEO tools don't track them at all."
      }
    },
    {
      "@type": "Question",
      "name": "Can I see a sample report before I pay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Click 'View Sample Report' on the Scantiv website to see an anonymised version of an actual Scantiv GEO audit. It shows the full structure, scoring breakdown, and the type of actionable fixes you'll receive."
      }
    },
    {
      "@type": "Question",
      "name": "My website is simple. Is this still useful for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. AI tools surface businesses based on how they're described and structured online — not just how complex or polished the website is. A simple site can still rank highly in AI recommendations with the right signals in place."
      }
    }
  ]
}
</script>
```

---

## Implementation Notes

### Where to add the code

Open `/index.html` and paste all three `<script>` blocks just before the closing `</head>` tag:

```html
  <!-- Structured Data -->
  [Block 1: Organization + WebSite]
  [Block 2: Services]
  [Block 3: FAQPage]

</head>
```

This ensures the schemas are in the server-rendered HTML, not dependent on JavaScript execution.

### What to fill in before deploying

- `[YYYY-MM-DD]` — Scantiv's founding date
- `[Founder Full Name]` — founder's full name
- `[LinkedIn profile URL]` — founder's LinkedIn URL
- `[LinkedIn company page URL]` — Scantiv company LinkedIn page (create one if it doesn't exist)
- `[Twitter/X profile URL]` — Scantiv Twitter/X profile (create one if it doesn't exist)
- `[Crunchbase profile URL]` — Scantiv Crunchbase listing (create one at crunchbase.com/add-company)
- `priceValidUntil` — update to reflect the actual promotion end date if the discounted pricing is temporary

### Testing after deployment

1. [Google Rich Results Test](https://search.google.com/test/rich-results) — paste `https://scantiv.com` to validate FAQPage and Service schemas
2. [Schema.org Validator](https://validator.schema.org/) — full validation of all three blocks
3. Fetch HTML source of the live page and confirm the JSON-LD blocks appear in the raw HTML (not only after JavaScript runs)

### Priority order

1. **Organization + WebSite** (Block 1) — deploy first. Entity recognition is the foundation of everything else.
2. **FAQPage** (Block 3) — quick win. The content already exists; this is just wrapping it.
3. **Services** (Block 2) — fills in the pricing and offering details for AI platforms.
4. **sameAs links** — create the missing platform profiles (Crunchbase is the highest priority), then add their URLs to Block 1.
