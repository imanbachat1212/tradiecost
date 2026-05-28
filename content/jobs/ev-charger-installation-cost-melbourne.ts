import type { JobData } from "@/types/job";

const job: JobData = {
  slug: "ev-charger-installation-cost-melbourne",
  h1: "EV Charger Installation Cost in Melbourne (2026)",
  title: "EV Charger Installation Cost Melbourne 2026 | TradieCost",
  metaDescription:
    "EV charger installation in Melbourne costs $800–$2,500 for a home Level 2 charger in 2026. Three-phase or switchboard upgrade jobs reach $4,000. Full price guide inside.",

  quickAnswer:
    "Installing a home EV charger in Melbourne costs <strong>$800–$2,500</strong> for a standard 7.2kW single-phase unit in 2026. If your switchboard needs upgrading or you want a three-phase 11kW charger, budget $2,500–$4,000. The main variable is cable run distance from your switchboard to the garage.",

  priceTable: [
    { scenario: "7.2kW charger – existing wiring OK, short cable run (<5m)", low: 800, high: 1400 },
    { scenario: "7.2kW charger – new dedicated 32A circuit (up to 20m)", low: 1200, high: 2200 },
    { scenario: "11kW three-phase charger installation", low: 1500, high: 2800 },
    { scenario: "EV charger + switchboard upgrade", low: 2500, high: 4000 },
    { scenario: "Commercial / strata shared charging (per bay)", low: 2000, high: 5000 },
  ],

  costFactors: [
    "Cable run distance — the further the garage or carport is from your switchboard, the more cable and conduit is required. Runs over 20m add $300–$700.",
    "Whether a dedicated circuit already exists — most homes don't have a spare 32A circuit. Adding one from the switchboard is usually the biggest cost driver.",
    "Single-phase vs three-phase power — a 7.2kW single-phase charger is standard for most Melbourne homes. A three-phase 11kW charger charges faster but requires three-phase supply and costs more to install.",
    "Switchboard capacity — if the switchboard is full or doesn't have capacity for a new 32A breaker, an upgrade is required before the charger can be installed.",
    "Charger brand and model — hardware ranges from $300 (basic hardwired) to $1,500+ for smart chargers like Wallbox, JuiceBox, or Tesla Wall Connector. Most electricians supply and install.",
    "Conduit requirements — exposed outdoor cable runs require UV-rated conduit. In Melbourne's variable climate, this is standard for garage and carport installs.",
    "Solar integration — pairing your EV charger with solar panels requires a smart charger with load management capability, adding $200–$500 to the hardware cost.",
    "Strata / apartment buildings — shared EV charging in Melbourne apartments involves strata approval, load management hardware, and sometimes metering infrastructure, significantly increasing cost.",
  ],

  signsYouNeedIt: [
    "You own or have ordered an EV or PHEV and are relying on a standard 10A household powerpoint — these are rated for temporary use only and present a fire risk for nightly charging.",
    "Overnight charging via a standard socket takes 20+ hours, meaning the vehicle is never fully charged before your morning commute.",
    "Your electricity provider or EV manufacturer recommends a dedicated wall charger for warranty or insurance purposes.",
    "You've installed solar panels and want to maximise self-consumption by charging your EV during the day.",
    "Your strata corporation has approved an EV charging upgrade for the building.",
    "You're building a new home or extending the garage — the ideal time to run conduit and wiring before walls are finished.",
  ],

  whatsIncluded: [
    "Supply and installation of the EV charging unit (hardwired or plug-in Type 2).",
    "New dedicated 32A circuit run from the switchboard to the charger location.",
    "UV-rated conduit and mounting bracket for outdoor installations.",
    "Load balancing setup and app configuration (for smart chargers).",
    "Testing and commissioning of the charger with your vehicle.",
    "Electrical Certificate of Compliance (ECC) — required in Victoria for all new circuit installations.",
  ],

  howToReadQuote: [
    "Confirm whether charger hardware is included in the price or quoted separately — most Melbourne electricians supply and install, but some quote labour only.",
    "Check the assumed cable run distance. If your garage is more than 10m from the switchboard, ask for the price to be re-quoted with the actual distance.",
    "Ask whether the quote assumes your switchboard has a spare breaker slot. If it's full, add $1,400–$2,000 for a switchboard upgrade.",
    "Confirm smart charging features: Wi-Fi connectivity, app control, and solar load management are not included in all charger models. Specify what you need before signing.",
    "Check charger compatibility with your EV. Most chargers use a Type 2 (Mennekes) connector, compatible with virtually all EVs sold in Australia — but confirm for your specific vehicle.",
    "Ask about warranty: hardware warranties (typically 2–3 years) and installation workmanship warranties are separate. A reputable Melbourne electrician should offer at least a 1-year workmanship guarantee.",
  ],

  faqs: [
    {
      q: "What's the difference between Level 1 and Level 2 EV charging?",
      a: "Level 1 is a standard 10A household powerpoint (~2.4kW) — slow and not recommended for regular overnight charging. Level 2 is a dedicated wall charger operating at 7.2kW (single-phase) or 11–22kW (three-phase). A Level 2 charger can fully charge most EVs in 4–8 hours overnight.",
    },
    {
      q: "How fast will a 7.2kW home charger charge my EV?",
      a: "Most EVs with a 60–80kWh battery will charge from near-empty to full in 8–12 hours on a 7.2kW charger — ideal for overnight charging. A Nissan Leaf (40kWh) would charge in roughly 6 hours. Charging speed also depends on your vehicle's onboard charger limit.",
    },
    {
      q: "Do I need three-phase power for a home EV charger?",
      a: "Not necessarily. A 7.2kW single-phase charger is sufficient for most Melbourne households and EV models. Three-phase (11kW) charging is faster but requires three-phase supply at your property — not all Melbourne homes have it. Your electrician can check at the switchboard.",
    },
    {
      q: "Can I install an EV charger myself in Victoria?",
      a: "No. Installing a new dedicated electrical circuit is notifiable electrical work under Victorian law and must be carried out by a licensed electrician. DIY electrical work is illegal and will void your home insurance. Your electrician must issue an Electrical Certificate of Compliance.",
    },
    {
      q: "Will my switchboard need upgrading for an EV charger?",
      a: "It depends on your existing switchboard. If it has spare circuit breaker capacity and the overall load is within limits, no upgrade is needed. Older boards (pre-2000) often lack capacity. Your electrician will assess this during quoting.",
    },
    {
      q: "Can I charge my EV with solar power?",
      a: "Yes, with the right setup. A smart EV charger (e.g. Wallbox Pulsar Plus, Zappi) with load management can detect when your solar system is generating excess power and automatically increase charging speed. This maximises self-consumption and can significantly reduce charging costs.",
    },
  ],

  calculator: "generic",

  pillarHref: "/electrician-cost-melbourne/",
  pillarLabel: "Electrician Cost Melbourne",

  relatedSlugs: [
    "switchboard-upgrade-cost-melbourne",
    "house-rewiring-cost-melbourne",
    "ceiling-fan-installation-cost-melbourne",
  ],

  sources: [
    {
      label: "Energy Safe Victoria – Electrical Safety",
      url: "https://www.esv.vic.gov.au/electrical/",
    },
    {
      label: "Electric Vehicle Council – Home Charging Guide",
      url: "https://electricvehiclecouncil.com.au/",
    },
    {
      label: "Master Electricians Australia",
      url: "https://www.masterelectricians.com.au/",
    },
    {
      label: "Solar Victoria – EV Charging Support",
      url: "https://www.solar.vic.gov.au/",
    },
  ],
};

export default job;
