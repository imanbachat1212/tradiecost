# TradieCost — Product Requirements Document

**Version:** 1.0  
**Date:** May 2026  
**Status:** Phase 1 Complete

---

## 1. Product Overview

TradieCost is an SEO-focused, static cost-guide website that ranks for **"service + job + location + cost"** search queries (e.g. "switchboard upgrade cost melbourne") and converts organic visitors into lead-gen quote requests.

The core value proposition is transparency: give homeowners real price data before they call a tradie, then connect them with licensed local tradespeople.

**Live URL:** (Netlify deployment — replace with custom domain)  
**GitHub:** https://github.com/imanbachat1212/tradiecost

---

## 2. Goals

| Goal | Metric |
|---|---|
| Rank on page 1 for target keywords | Google Search Console position ≤ 10 |
| Generate inbound leads | Quote form submissions per month |
| Monetise via lead sales | Revenue per qualified lead |
| Scale to new trades and cities | New pages added with zero new components |

---

## 3. Target Users

### Visitors (homeowners)
- Melbourne homeowner researching cost before hiring a tradie
- Searching Google for "[job] cost melbourne" or "[job] price"
- Wants a fast, trustworthy answer — not a 10-page blog post
- Likely on mobile

### Customers (tradespeople)
- Licensed electricians (Phase 1) operating in Melbourne
- Willing to pay per qualified lead ($15–$50 typical)
- Want leads with suburb, phone, and job description pre-filled

---

## 4. Business Model

**Phase 1 (current):** Collect leads via quote form → manually forward to partner electrician(s) → charge flat monthly fee or per-lead fee.

**Phase 2:** Automate lead distribution via n8n webhook → multiple electricians receive leads simultaneously → first to respond wins the job.

**Phase 3:** Expand to other trades (plumbers, builders, painters) and cities (Sydney, Brisbane) — zero code changes required, only new content files.

---

## 5. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 16 (App Router, TypeScript) | SSG, file-based routing, metadata API |
| Styling | Tailwind CSS v4 | Utility-first, no runtime CSS |
| Rendering | Static Export (`output: export`) | Pure HTML — fast, no server, cheap hosting |
| Hosting | Netlify | Auto-deploy on git push, free tier |
| Lead capture | n8n webhook (env var) | Swappable — no vendor lock-in |
| Database | None (Phase 1) | All data lives in TypeScript content files |

---

## 6. Architecture — Core Principle

> **Adding a new cost page = adding ONE data file. No new components.**

### How it works

```
content/jobs/[slug].ts        ← one file per page, exports JobData object
        ↓
src/lib/jobs.ts               ← registry: imports all files, exports ALL_JOBS[]
        ↓
src/app/[slug]/page.tsx       ← reads from ALL_JOBS, renders full page
        ↓
generateStaticParams()        ← builds one static HTML page per job file
```

Adding a new page requires only:
```ts
// src/lib/jobs.ts
import safety from "../../content/jobs/safety-switch-installation-cost-melbourne";
export const ALL_JOBS = [...existing, safety];
```
The page, sitemap entry, and Pillar card all update automatically.

---

## 7. URL Structure

| URL | Template | Status |
|---|---|---|
| `/` | Homepage | ✅ Live |
| `/electrician-cost-melbourne/` | CityPillar | ✅ Live |
| `/switchboard-upgrade-cost-melbourne/` | JobCostPage | ✅ Live |
| `/house-rewiring-cost-melbourne/` | JobCostPage | ✅ Live |
| `/ev-charger-installation-cost-melbourne/` | JobCostPage | ✅ Live |
| `/ceiling-fan-installation-cost-melbourne/` | JobCostPage | ✅ Live |
| `/safety-switch-installation-cost-melbourne/` | JobCostPage | 🔲 Content file needed |
| `/electrician-cost-calculator/` | ToolPage | ✅ Live |
| `/guides/` | Stub | ✅ Live (stub) |
| `/sitemap.xml` | Auto-generated | ✅ Live |
| `/robots.txt` | Auto-generated | ✅ Live |

---

## 8. Data Model

Every cost page is driven by a single TypeScript object conforming to `JobData`:

```ts
interface JobData {
  slug: string;               // URL path segment
  h1: string;                 // Page heading (contains keyword)
  title: string;              // <title> tag
  metaDescription: string;    // Meta description
  quickAnswer: string;        // HTML — answer-first intro, price in <strong>
  priceTable: PriceRow[];     // { scenario, low, high }
  costFactors: string[];      // What drives the price
  signsYouNeedIt: string[];   // Conversion-focused signals
  whatsIncluded: string[];    // What the job covers
  howToReadQuote: string[];   // Numbered tips for evaluating quotes
  faqs: FAQ[];                // { q, a } — renders as FAQPage JSON-LD
  calculator: CalculatorType; // "switchboard" | "generic"
  relatedSlugs: string[];     // Internal links to sibling pages
  sources: Source[];          // { label, url } — cited for E-E-A-T
  pillarHref: string;         // Hub page URL (breadcrumb)
  pillarLabel: string;        // Hub page label (breadcrumb)
}
```

---

## 9. Page Layout (JobCostPage)

Every job cost page renders in this fixed order:

1. **Breadcrumb** — Home / [Pillar] / [Page]
2. **H1** — exact keyword match
3. **Quick answer** — 40–50 words, price in bold, answer-first
4. **Cost estimator calculator** — interactive, live range output
5. **Price guide table** — data table with scenario/range rows
6. **What affects the price** — bullet list of cost drivers
7. **Signs you need it** — conversion-focused checklist
8. **What's included** — sets scope expectations
9. **How to evaluate your quote** — numbered tips (trust-building)
10. **FAQ** — H3 questions + short answers (FAQPage JSON-LD)
11. **Quote form** — name, suburb, phone, job description → n8n webhook
12. **Sources** — cited authority links (E-E-A-T signal)
13. **Reviewer trust block** — "Reviewed by [NAME], Licensed Electrician (REC [NUMBER])"
14. **Related cost guides** — internal links to sibling pages

---

## 10. Calculator Engine

Located at `src/lib/calculator.ts`. Fully config-driven — no per-trade UI code.

```
CalculatorConfig {
  id, title,
  fields: InputField[]    ← radio | toggle | select3
  defaults: Record        ← initial UI state
  calculate(inputs)       ← returns { low, high }
}
```

The `Calculator` React component renders any `CalculatorConfig` generically. Adding a new calculator = adding a new config object, zero new components.

### Switchboard config (Melbourne 2026)

| Input | Options |
|---|---|
| Board size | Small (6–8) / Standard (10–14) / Large (16–20 circuits) |
| Power type | Single-phase / Three-phase |
| Built before 1987? | Yes / No |
| Meter box replacement? | No / Yes / Not sure |
| Adding new circuits? | Yes / No |
| Timing | Standard / Urgent |

| Scenario | Range |
|---|---|
| Small single-phase | $1,000–$1,400 |
| Standard single-phase | $1,400–$2,000 |
| Large single-phase | $1,800–$2,600 |
| Three-phase (replaces base) | $2,500–$4,000 |
| + Pre-1987 / asbestos | +$300–$800 |
| + Meter box | +$400–$900 |
| + New circuits | +$600–$1,500 |
| + Urgent/weekend | +$150–$300 |

---

## 11. SEO / AEO Requirements (every page)

- Exact keyword in URL, `<title>`, H1, and first sentence
- Answer-first intro with bolded price range
- At least one data table
- FAQ section with H3 headings (short answers, under 60 words each)
- `FAQPage` + `Service` JSON-LD injected via server component
- `<title>` format: `[Job] Cost Melbourne 2026 | TradieCost`
- Canonical URL set via Next.js `alternates.canonical`
- Mobile-first layout, semantic HTML (`<article>`, `<section>`, `<nav>`)
- Internal linking: Pillar ↔ all Job pages, Job pages ↔ 2–3 siblings
- `sitemap.xml` auto-generated from `ALL_JOBS` registry
- All prices show disclaimer: "estimate only, not a formal quote"
- Sources block with cited authority URLs (E-E-A-T)

---

## 12. Lead Form

Component: `src/components/QuoteForm.tsx`

**Fields:** Name, Suburb, Phone, Job Description

**Validation (client-side):**
- Name: required
- Suburb: min 2 characters
- Phone: Australian format — `/^(\+?61|0)[2-9]\d{8}$/`
- Job description: required

**Submission:** `POST` JSON to `NEXT_PUBLIC_N8N_WEBHOOK_URL`

**States:** idle → submitting → success / error

**Success:** Green confirmation, no page reload  
**Error:** Red inline message, user can retry

---

## 13. Components

| Component | Type | Purpose |
|---|---|---|
| `Nav` | Server | Sticky header, logo, nav links |
| `Footer` | Server | Links, disclaimer |
| `Calculator` | Client | Renders any `CalculatorConfig`, live price range |
| `QuoteForm` | Client | Lead capture, posts to n8n |
| `JsonLd` | Server | `FAQPage` + `Service` schema tags |

---

## 14. Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_N8N_WEBHOOK_URL` | Yes | Endpoint that receives lead form POSTs |

Set in Netlify: **Site configuration → Environment variables**

---

## 15. Deployment

**Platform:** Netlify (static hosting)  
**Build command:** `npm run build`  
**Publish directory:** `out`  
**Node version:** 20  
**Auto-deploy:** Yes — every push to `main` triggers a rebuild

Config file: `netlify.toml` in project root.

---

## 16. Phases

### Phase 1 — Melbourne Electrician (complete ✅)
- 4 job cost pages live
- City Pillar live
- Standalone calculator live
- Static export, deployed to Netlify

### Phase 2 — Expand Melbourne Electrician content
- Safety switch installation page
- Additional job pages (smoke alarms, hot water, data points)
- Reviewer name + REC number added to trust block
- n8n workflow live — leads emailed to partner electrician(s)
- Google Search Console connected, sitemap submitted

### Phase 3 — New city (e.g. Sydney)
- New City Pillar: `/electrician-cost-sydney/`
- New job pages with Sydney pricing: `switchboard-upgrade-cost-sydney`, etc.
- Update `pillarHref`/`pillarLabel` in each content file

### Phase 4 — New trade (e.g. plumber)
- New City Pillar: `/plumber-cost-melbourne/`
- New job pages: `blocked-drain-cost-melbourne`, `hot-water-system-cost-melbourne`, etc.
- Add new calculator config to `calculator.ts` if job warrants it
- Zero changes to existing components or templates

---

## 17. Things Still To Do

| Task | Priority |
|---|---|
| Fill in reviewer name + REC number in `[slug]/page.tsx` | High |
| Set real `NEXT_PUBLIC_N8N_WEBHOOK_URL` on Netlify | High |
| Connect Google Search Console + submit sitemap | High |
| Replace `tradiecost.com.au` in `sitemap.ts` with real domain | High |
| Build safety-switch-installation-cost-melbourne content file | Medium |
| Write guides section content | Medium |
| Add OG image / social share preview | Medium |
| Find and onboard first partner electrician | High (business) |

---

*All prices are estimates for Melbourne 2026 based on publicly available market data. They are not formal quotes.*
