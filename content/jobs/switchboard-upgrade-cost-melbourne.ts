import type { JobData } from "@/types/job";

const job: JobData = {
  slug: "switchboard-upgrade-cost-melbourne",
  h1: "Switchboard Upgrade Cost in Melbourne (2026)",
  title: "Switchboard Upgrade Cost Melbourne 2026 | TradieCost",
  metaDescription:
    "A switchboard upgrade in Melbourne costs $1,200–$2,600 for most homes. Three-phase or asbestos jobs reach $4,000+. See the full price guide and use our free calculator.",

  quickAnswer:
    "A switchboard upgrade in Melbourne costs <strong>$1,200–$2,600</strong> for most homes in 2026. Small single-phase boards start around $1,000; three-phase upgrades or jobs needing meter-box or asbestos work can reach $4,000+. Use the calculator below to estimate the cost for your property.",

  priceTable: [
    { scenario: "Small board upgrade – single-phase (6–8 circuits)", low: 1000, high: 1400 },
    { scenario: "Standard board upgrade – single-phase (10–14 circuits)", low: 1400, high: 2000 },
    { scenario: "Large board upgrade – single-phase (16–20 circuits)", low: 1800, high: 2600 },
    { scenario: "Three-phase switchboard upgrade", low: 2500, high: 4000 },
    { scenario: "Upgrade + new circuits (EV charger / aircon / solar)", low: 2000, high: 3500 },
    { scenario: "Upgrade + meter box replacement", low: 1800, high: 3500 },
    { scenario: "Upgrade + asbestos handling (pre-1987 homes)", low: 1700, high: 3400 },
  ],

  costFactors: [
    "Board size — the number of circuits directly drives labour time and the cost of circuit breakers and RCDs. Each additional circuit adds roughly $80–$150 in parts and time.",
    "Single-phase vs three-phase power — three-phase requires larger din-rail components, heavier cable, and more labour. Expect to pay roughly double compared with a standard single-phase job.",
    "Age of property — Melbourne homes built before 1987 may contain asbestos sheeting around the meter box. Licensed asbestos removal adds $300–$800 and requires a certified contractor under Victorian Occupational Health and Safety regulations.",
    "Meter box condition — if the meter box is damaged, corroded, or undersized, a replacement adds $400–$900. This is common in Brunswick, Fitzroy, and other older inner-suburbs.",
    "New circuits — adding a dedicated circuit for an EV charger, split-system air conditioner, or solar inverter adds $600–$1,500 per circuit, depending on cable run length.",
    "Access difficulty — boards tucked under stairs, inside brick walls, or in confined roof spaces add 1–2 hours of labour time.",
    "Urgent or weekend work — most Melbourne electricians charge a $150–$300 callout premium for urgent bookings or weekend jobs.",
    "Suburb and tradie availability — inner suburbs (Essendon, Richmond, St Kilda) have higher tradie density than outer south-east areas (Berwick, Pakenham), which can influence wait times and rates.",
  ],

  signsYouNeedIt: [
    "Your switchboard still has ceramic fuses instead of modern circuit breakers — a sign the board is at least 25–30 years old.",
    "Circuit breakers trip frequently, especially when running multiple appliances simultaneously — the board is overloaded.",
    "There are no safety switches (RCDs) protecting your power points and lighting circuits — this is legally required in Victoria for all new installations.",
    "You're planning to install an EV charger, ducted air conditioning, solar panels, or a spa — each requires a dedicated high-current circuit.",
    "A licensed electrician, building inspector, or mortgage valuer has flagged the switchboard as non-compliant or a safety risk.",
    "You notice a burning smell, scorch marks, or discolouration around the switchboard — these are serious fire hazards.",
    "Lights flicker or dim when a large appliance switches on — a sign of undersized circuits or a failing board.",
    "You're selling your home and a pre-sale inspection report has recommended a switchboard upgrade.",
  ],

  whatsIncluded: [
    "Removal and safe disposal of the old switchboard and components.",
    "Supply and installation of a new distribution board with din-rail, rated to AS/NZS 3000 (Australian Wiring Rules).",
    "New Clipsal or equivalent branded circuit breakers (MCBs) for every circuit.",
    "Safety switches (RCDs) on all general power outlet and lighting circuits — required under Victorian electrical regulations.",
    "Neutral and earth link bars, labelling of all circuits, and cable management.",
    "Reconnection of existing sub-circuits in the home (no new cable runs to rooms unless specified).",
    "Testing and inspection of the completed installation.",
    "Electrical Certificate of Compliance (ECC) — a legal requirement in Victoria for all notifiable electrical work.",
  ],

  howToReadQuote: [
    "Check that the Electrical Certificate of Compliance (ECC) is included. In Victoria this is a legal requirement — if a quote doesn't mention it, ask explicitly.",
    "Look for itemised labour and materials. A quote that only shows a lump sum makes it impossible to compare apples with apples across multiple electricians.",
    "Confirm the brand and rating of components. Quality matters: Clipsal, Schneider, or Legrand breakers (rated to AS/NZS 61009/61008) cost more upfront but last far longer than no-name imports.",
    "If asbestos is mentioned, check whether licensed asbestos removal is included or a separate line item — and whether the electrician is coordinating it or you need to.",
    "Meter box replacement is often quoted as an optional add-on. Ask upfront whether the existing box is serviceable.",
    "Get at least two quotes. In Melbourne, pricing between licensed electricians rarely varies by more than 20% for the same scope — a quote that's significantly cheaper should prompt questions about what's been left out.",
  ],

  faqs: [
    {
      q: "How long does a switchboard upgrade take in Melbourne?",
      a: "Most residential switchboard upgrades take 2–4 hours for a standard single-phase board. Jobs requiring a meter box replacement, asbestos removal, or a three-phase upgrade can take a full day. Your electrician should give you a time estimate when they quote.",
    },
    {
      q: "Do I need a permit for a switchboard upgrade in Victoria?",
      a: "Yes — in Victoria, switchboard upgrades are classified as notifiable electrical work under the Electricity Safety Act 1998. Your licensed electrician must issue an Electrical Certificate of Compliance (ECC) and notify Energy Safe Victoria (ESV). You don't need to organise this yourself; your electrician handles it as part of the job.",
    },
    {
      q: "Can I just add safety switches without replacing the whole board?",
      a: "Yes. A licensed electrician can retrofit RCDs (safety switches) to an existing switchboard, typically for $150–$400 depending on the number of circuits. However, if the board is more than 25 years old, ceramic fuses are still in use, or the board is physically damaged, a full replacement is generally more cost-effective and safer long-term.",
    },
    {
      q: "How much does a three-phase switchboard upgrade cost in Melbourne?",
      a: "The switchboard work itself costs $2,500–$4,000. If you don't currently have a three-phase supply at your property, you'll need to separately arrange a three-phase connection upgrade with AusNet Services (Melbourne's electricity distributor). That's a separate application and can add $1,000–$3,000 depending on the network infrastructure in your street.",
    },
    {
      q: "Is a switchboard upgrade tax-deductible on a rental property?",
      a: "Capital improvements — including switchboard upgrades — are generally depreciated over time under Division 43 of the Income Tax Assessment Act 1997, not claimed as an immediate deduction. However, if the work is a repair to restore something to its original condition rather than an improvement, it may be immediately deductible. This is general information only; speak to your accountant for advice specific to your situation.",
    },
    {
      q: "What brands of switchboard components do Melbourne electricians use?",
      a: "Clipsal (Schneider Electric) is the most widely installed brand in Melbourne, followed by HPM and Legrand. Clipsal RCBOs and MCBs are certified to AS/NZS 61009 and AS/NZS 61008 respectively, and are widely available from trade suppliers including Rexel and Middy's. Specify your preferred brand when comparing quotes if it matters to you.",
    },
  ],

  calculator: "switchboard",

  pillarHref: "/electrician-cost-melbourne/",
  pillarLabel: "Electrician Cost Melbourne",

  relatedSlugs: [
    "house-rewiring-cost-melbourne",
    "ev-charger-installation-cost-melbourne",
    "safety-switch-installation-cost-melbourne",
  ],

  sources: [
    {
      label: "Energy Safe Victoria – Electrical Safety & Notifiable Work",
      url: "https://www.esv.vic.gov.au/electrical/",
    },
    {
      label: "Master Electricians Australia – Find a Registered Electrician",
      url: "https://www.masterelectricians.com.au/find-a-master-electrician/",
    },
    {
      label: "Victorian Building Authority – Electrical Work Licensing",
      url: "https://www.vba.vic.gov.au/electrical",
    },
    {
      label: "Consumer Affairs Victoria – Getting Quotes for Electrical Work",
      url: "https://www.consumer.vic.gov.au/housing/repairs-alterations-and-maintenance/getting-quotes",
    },
  ],
};

export default job;
