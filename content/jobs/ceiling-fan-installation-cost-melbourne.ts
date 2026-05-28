import type { JobData } from "@/types/job";

const job: JobData = {
  slug: "ceiling-fan-installation-cost-melbourne",
  h1: "Ceiling Fan Installation Cost in Melbourne (2026)",
  title: "Ceiling Fan Installation Cost Melbourne 2026 | TradieCost",
  metaDescription:
    "Ceiling fan installation in Melbourne costs $120–$350 for a standard fan in 2026. New wiring or high ceilings add to the price. See the full price guide.",

  quickAnswer:
    "Installing a ceiling fan in Melbourne costs <strong>$120–$350</strong> for a standard fan on an existing wiring point in 2026. If new wiring or a dedicated circuit is required, expect $350–$600. High ceilings, remote controls, and DC motor fans can also add to the price.",

  priceTable: [
    { scenario: "Standard fan — existing wiring point, single storey", low: 120, high: 250 },
    { scenario: "Fan with light kit — existing wiring point", low: 180, high: 350 },
    { scenario: "Fan with remote control kit", low: 200, high: 380 },
    { scenario: "Fan requiring new wiring / circuit", low: 350, high: 600 },
    { scenario: "High-ceiling installation (3m+) — extra labour", low: 250, high: 450 },
    { scenario: "Each additional fan (same visit)", low: 100, high: 200 },
  ],

  costFactors: [
    "Existing wiring — if a wiring point (ceiling rose or outlet) already exists where you want the fan, installation is quick and cheap. If new cable must be run from the switchboard or a light circuit, cost increases significantly.",
    "Ceiling height — standard installation assumes ceilings up to 2.7m. Ceilings above 3m require a taller ladder or scaffold and add $50–$150 to the job.",
    "Fan type — basic AC motor fans are the cheapest to install. DC motor fans are more energy-efficient but may require a compatible wall controller, adding parts and labour.",
    "Remote control — wireless remote kits need a receiver installed inside the fan canopy, adding 20–30 minutes of labour.",
    "Number of fans — electricians often discount additional fans installed in the same visit, since travel and setup cost is shared.",
    "Access to roof cavity — if cable needs to be run through the ceiling, access to the roof space significantly affects how long the job takes.",
    "Suburb — as with all Melbourne electrical work, outer suburbs (Cranbourne, Sunbury) may carry higher call-out fees than inner areas.",
  ],

  signsYouNeedIt: [
    "You're relying on portable fans or air conditioning to stay cool — a ceiling fan uses up to 95% less energy than a split-system AC.",
    "A ceiling fan already exists but it's wobbling, noisy, or the motor runs hot — signs it needs replacing.",
    "You've moved into a new home or renovated a room and want to add a fan before summer.",
    "Your existing fan lacks a light kit and the room has poor lighting.",
    "The current fan uses a pull-cord and you want a remote or wall controller upgrade.",
  ],

  whatsIncluded: [
    "Supply and installation of the ceiling fan (or installation only if you supply the fan).",
    "Connection to the existing wiring point or light circuit.",
    "Balancing of fan blades and test run.",
    "Wall controller or remote receiver installation (if applicable).",
    "Electrical Certificate of Compliance (ECC) if a new circuit or wiring is installed.",
  ],

  howToReadQuote: [
    "Check whether the fan hardware is included in the price or labour-only — clarify before accepting.",
    "Ask whether the quote assumes existing wiring. If the electrician hasn't inspected the ceiling, the quote may change on the day.",
    "Confirm the brand and model of fan being supplied — entry-level fans ($50–$80) behave very differently to a quality DC motor fan ($200–$400).",
    "If getting multiple fans, ask for a per-fan rate on a single visit — this is where you can negotiate.",
    "For high ceilings, ask whether a downrod extension is included in the price.",
  ],

  faqs: [
    {
      q: "Can I install a ceiling fan myself in Victoria?",
      a: "No. Connecting any fixed electrical fitting — including a ceiling fan — to a wiring point is electrical work that must be done by a licensed electrician in Victoria. Doing it yourself is illegal and will void your home insurance. The job itself is quick (1–2 hours), so the electrician cost is reasonable.",
    },
    {
      q: "How long does ceiling fan installation take?",
      a: "A straightforward installation on an existing wiring point takes 45–90 minutes. If new wiring is needed or the ceiling is high, allow 2–3 hours. Installing multiple fans in the same visit is faster per fan.",
    },
    {
      q: "Can a ceiling fan be installed on any ceiling?",
      a: "Most ceilings are suitable. Raked or vaulted ceilings need an angled mounting bracket. Very low ceilings (under 2.1m) may not safely accommodate a fan — check blade clearance requirements. Your electrician can advise on the day.",
    },
    {
      q: "Do I need a new circuit for a ceiling fan?",
      a: "Usually no. Ceiling fans are low-draw appliances and can typically be added to an existing lighting circuit. A new dedicated circuit is only needed if the existing circuit is already near capacity or if you're installing a high-powered fan with a heater element.",
    },
    {
      q: "What's the difference between AC and DC ceiling fans?",
      a: "AC fans use a standard alternating-current motor — cheaper to buy ($60–$150) but less efficient and louder. DC fans use a brushless DC motor — quieter, use up to 70% less energy, and often include more speed settings. DC fans cost more ($150–$400+) but are worth it for rooms used daily.",
    },
  ],

  calculator: "generic",

  pillarHref: "/electrician-cost-melbourne/",
  pillarLabel: "Electrician Cost Melbourne",

  relatedSlugs: [
    "switchboard-upgrade-cost-melbourne",
    "safety-switch-installation-cost-melbourne",
    "ev-charger-installation-cost-melbourne",
  ],

  sources: [
    {
      label: "Energy Safe Victoria – Electrical Safety",
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
