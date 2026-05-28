import type { JobData } from "@/types/job";

const job: JobData = {
  slug: "house-rewiring-cost-melbourne",
  h1: "House Rewiring Cost in Melbourne (2026)",
  title: "House Rewiring Cost Melbourne 2026 | TradieCost",
  metaDescription:
    "House rewiring in Melbourne costs $4,000–$12,000 for most homes in 2026. See real prices for 2–5 bedroom homes, partial rewires, and what's included.",

  quickAnswer:
    "House rewiring in Melbourne costs <strong>$4,000–$12,000</strong> for most homes in 2026. A standard 3-bedroom single-storey home typically runs $7,000–$10,000; double-storey or large homes can reach $15,000–$20,000. Partial rewires start from around $800 for a single room or circuit.",

  priceTable: [
    { scenario: "2-bedroom house – single storey", low: 4000, high: 7000 },
    { scenario: "3-bedroom house – single storey", low: 7000, high: 10000 },
    { scenario: "4-bedroom house – single storey", low: 9000, high: 14000 },
    { scenario: "Double-storey home (any size)", low: 12000, high: 20000 },
    { scenario: "Partial rewire – single room or area", low: 800, high: 2000 },
    { scenario: "Full rewire + switchboard upgrade", low: 8000, high: 16000 },
  ],

  costFactors: [
    "House size — the number of circuits, power points, and light fittings drives both labour time and cable volume. Every extra circuit adds roughly $200–$500.",
    "Construction type — weatherboard homes are significantly faster to rewire than brick veneer or double-brick, because cables can be fished through wall cavities without opening large sections of plasterboard.",
    "Age and condition of existing wiring — cloth-covered wiring from the 1950s–70s (common in inner Melbourne suburbs like Brunswick, Northcote, and Coburg) must be completely stripped out, adding time and disposal costs.",
    "Wall access — if walls must be opened and replastered, that cost (usually by a plasterer separately) adds $1,500–$5,000 on top of the electrical quote.",
    "Number of power points and data points — modern homes expect far more outlets. Adding USB-A/C outlets, data points, and extra GPOs during a rewire costs less than retrofitting later.",
    "Switchboard upgrade — almost always required when rewiring. Budget an additional $1,400–$2,600 if not already included in the quote.",
    "Asbestos — Melbourne homes built before 1987 may have asbestos sheeting in wall or ceiling cavities. Licensed asbestos removal adds $500–$2,000 depending on the extent.",
    "Suburb — inner-city Melbourne suburbs (Fitzroy, Richmond, Collingwood) have a high density of pre-1970 homes where complex, time-consuming rewires are standard. Outer suburbs generally have younger housing stock.",
  ],

  signsYouNeedIt: [
    "Your home was built or last wired before 1975 — that's 50-year-old wiring and should be assessed by a licensed electrician.",
    "You can see cloth-covered wiring (brown or white woven fabric insulation) anywhere in the home — this insulation degrades and becomes a fire risk.",
    "Persistent tripping, flickering lights, or outlets that don't work — signs of failing insulation or undersized circuits.",
    "There are no safety switches (RCDs) on any circuits — illegal for new work in Victoria and a serious safety risk.",
    "Your home insurance renewal has flagged old wiring or an electrician has flagged it in a building inspection.",
    "You're undertaking a major renovation — with walls already open, rewiring is far cheaper than doing it as a standalone job later.",
    "Burning smells from wall outlets, light switches, or the switchboard — a potential fire hazard requiring urgent attention.",
  ],

  whatsIncluded: [
    "Complete removal and disposal of all old wiring throughout the home.",
    "New flat TPS (twin-and-earth) copper cable installed to AS/NZS 3000 standards.",
    "New standard power point outlets and light switches throughout.",
    "Switchboard upgrade (confirm whether included — most electricians price it separately).",
    "Safety switches (RCDs) on all power and lighting circuits as required by Victorian regulations.",
    "Testing of all circuits and outlets on completion.",
    "Electrical Certificate of Compliance (ECC) — mandatory for all notifiable work in Victoria.",
  ],

  howToReadQuote: [
    "Confirm whether a switchboard upgrade is included or a separate line item — rewiring almost always requires one.",
    "Check whether wall patching and repainting is in scope. Most electricians quote labour and materials only; wall repairs are usually a separate trade.",
    "Ask about temporary power supply — for larger jobs, a temporary board may be needed so you can stay in the home during the work.",
    "Confirm the number of power points and light points included. 'Standard' varies by electrician — agree on a count before signing.",
    "Check the cabling type specified. Flat TPS cable is standard; if a quote uses cheaper alternatives, ask why.",
    "Get at least two quotes and compare line-by-line. A significantly lower quote may exclude the switchboard, wall patching coordination, or the compliance certificate.",
  ],

  faqs: [
    {
      q: "How long does a full house rewiring take in Melbourne?",
      a: "A 3-bedroom single-storey home typically takes 3–5 days for a team of two electricians. Double-storey or larger homes can take 7–10 days. Partial rewires (one room or a few circuits) are usually a 1-day job.",
    },
    {
      q: "Do I need to move out during the rewire?",
      a: "For a full rewire, most families choose to vacate for at least part of the job — power will be off for extended periods and the home will be dusty and disrupted. For a partial rewire of one room or area, you can usually stay.",
    },
    {
      q: "Will walls need to be opened and repaired?",
      a: "In most cases, yes — especially in brick homes. Electricians will cut access holes in plasterboard to run new cable. Wall patching is usually done by a separate plasterer and is quoted separately. Weatherboard homes can often have cables fished through cavities with minimal wall damage.",
    },
    {
      q: "Does house rewiring require a permit in Victoria?",
      a: "Yes. Full and partial rewiring is notifiable electrical work under the Electricity Safety Act 1998 (Vic). Your electrician must issue an Electrical Certificate of Compliance and notify Energy Safe Victoria. You don't organise this — your licensed electrician does.",
    },
    {
      q: "What type of wiring will be installed?",
      a: "Standard residential wiring in Victoria is flat TPS (twin-and-earth) copper cable, typically 2.5mm² for power circuits and 1.5mm² for lighting. This conforms to AS/NZS 3000 (Australian Wiring Rules). Ask your electrician to specify the cable rating in the quote.",
    },
    {
      q: "When should I rewire rather than just upgrade the switchboard?",
      a: "If the wiring is cloth-covered, aluminium, or over 40 years old, a full rewire is safer and more cost-effective long-term than piecemeal repairs. If the wiring is copper TPS but the switchboard is old or missing safety switches, a switchboard upgrade alone is often sufficient. An electrician can advise after a visual inspection.",
    },
  ],

  calculator: "generic",

  pillarHref: "/electrician-cost-melbourne/",
  pillarLabel: "Electrician Cost Melbourne",

  relatedSlugs: [
    "switchboard-upgrade-cost-melbourne",
    "ev-charger-installation-cost-melbourne",
    "safety-switch-installation-cost-melbourne",
  ],

  sources: [
    {
      label: "Energy Safe Victoria – Electrical Safety Requirements",
      url: "https://www.esv.vic.gov.au/electrical/",
    },
    {
      label: "Master Electricians Australia",
      url: "https://www.masterelectricians.com.au/",
    },
    {
      label: "Consumer Affairs Victoria – Getting Quotes",
      url: "https://www.consumer.vic.gov.au/housing/repairs-alterations-and-maintenance/getting-quotes",
    },
  ],
};

export default job;
