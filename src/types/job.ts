export interface PriceRow {
  scenario: string;
  low: number;
  high: number;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Source {
  label: string;
  url: string;
}

export type CalculatorType = "switchboard" | "generic";

export interface JobData {
  slug: string;
  h1: string;
  title: string;
  metaDescription: string;
  /** Raw HTML string — only <strong> tags permitted */
  quickAnswer: string;
  priceTable: PriceRow[];
  costFactors: string[];
  signsYouNeedIt: string[];
  whatsIncluded: string[];
  howToReadQuote: string[];
  faqs: FAQ[];
  calculator: CalculatorType;
  relatedSlugs: string[];
  sources: Source[];
  /** The hub page this job belongs to — used for breadcrumbs and internal linking */
  pillarHref: string;
  pillarLabel: string;
}
