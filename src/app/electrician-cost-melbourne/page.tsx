import type { Metadata } from "next";
import Link from "next/link";
import { ALL_JOBS } from "@/lib/jobs";
import { formatPrice } from "@/lib/calculator";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Electrician Cost Melbourne 2026 | TradieCost",
  description:
    "How much does an electrician cost in Melbourne in 2026? See real prices for switchboard upgrades, rewiring, EV chargers, ceiling fans, and more.",
  alternates: { canonical: "/electrician-cost-melbourne/" },
};

const HOURLY = { low: 80, high: 120 };
const CALLOUT = { low: 80, high: 150 };

const GENERAL_FAQS = [
  {
    q: "How much do Melbourne electricians charge per hour?",
    a: "Most licensed Melbourne electricians charge $80–$120 per hour for standard weekday work. After-hours, weekend, and public holiday rates typically add a 50–100% premium. Most jobs are quoted as a fixed price rather than hourly.",
  },
  {
    q: "Is there a call-out fee for Melbourne electricians?",
    a: "Yes — most Melbourne electricians charge a call-out or service fee of $80–$150 on top of the hourly or job rate. This covers travel and the first 30 minutes on site. Always ask upfront whether a call-out fee applies.",
  },
  {
    q: "How do I find a licensed electrician in Melbourne?",
    a: "All electricians working in Victoria must hold a licence issued by Energy Safe Victoria (ESV). You can verify a licence at the ESV website. Master Electricians Australia and the Victorian Building Authority also maintain searchable registers.",
  },
  {
    q: "Do I need a quote in writing?",
    a: "For any job over $500, Consumer Affairs Victoria recommends a written quote. For notifiable work (switchboards, rewiring, new circuits), your electrician must provide an Electrical Certificate of Compliance on completion — this is your legal proof the work was done correctly.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrician Cost Melbourne",
  description:
    "Electrician services and cost guide for Melbourne, Victoria, Australia.",
  provider: { "@type": "Organization", name: "TradieCost" },
  areaServed: {
    "@type": "City",
    name: "Melbourne",
    containedInPlace: {
      "@type": "State",
      name: "Victoria",
      containedInPlace: { "@type": "Country", name: "Australia" },
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GENERAL_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function ElectricianCostMelbourne() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-900 font-medium">
              Electrician Cost Melbourne
            </li>
          </ol>
        </nav>

        {/* H1 + intro */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          Electrician Cost Melbourne (2026)
        </h1>
        <div className="bg-orange-50 border-l-4 border-orange-400 pl-4 py-3 pr-4 rounded-r-xl mb-10 text-slate-700 text-base leading-relaxed">
          Melbourne electricians charge <strong>$80–$120/hour</strong> for
          standard work, with most jobs quoted at a fixed price. Common jobs
          range from{" "}
          <strong>
            {formatPrice(CALLOUT.low)} (call-out + minor fix)
          </strong>{" "}
          to <strong>$20,000+ (full house rewiring)</strong>. Use the guides
          below to find the typical price range for your specific job.
        </div>

        {/* Hourly rate table */}
        <section className="mb-12" aria-labelledby="rates-heading">
          <h2
            id="rates-heading"
            className="text-2xl font-bold text-slate-900 mb-4"
          >
            Melbourne Electrician Rates at a Glance
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Rate type
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700">
                    Typical range (AUD)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Standard hourly rate", low: HOURLY.low, high: HOURLY.high },
                  { label: "Call-out / service fee", low: CALLOUT.low, high: CALLOUT.high },
                  { label: "After-hours / weekend premium", low: 50, high: 100, suffix: "% on top of standard rate" },
                  { label: "Apprentice rate (supervised)", low: 40, high: 65 },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-4 py-3 text-slate-700">{row.label}</td>
                    <td className="px-4 py-3 text-right font-semibold text-slate-900 whitespace-nowrap">
                      {"suffix" in row
                        ? `${row.low}–${row.high}${row.suffix}`
                        : `${formatPrice(row.low)} – ${formatPrice(row.high)}/hr`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Estimates for Melbourne 2026. Most jobs are fixed-price — use the
            individual guides below for job-specific pricing.
          </p>
        </section>

        {/* Job cost guide cards */}
        <section className="mb-12" aria-labelledby="guides-heading">
          <h2
            id="guides-heading"
            className="text-2xl font-bold text-slate-900 mb-4"
          >
            Electrician Cost Guides for Melbourne
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ALL_JOBS.map((job) => {
              const low = Math.min(...job.priceTable.map((r) => r.low));
              const high = Math.max(...job.priceTable.map((r) => r.high));
              return (
                <Link
                  key={job.slug}
                  href={`/${job.slug}/`}
                  className="block p-5 border border-slate-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-colors group"
                >
                  <p className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {job.h1.replace(" (2026)", "")}
                  </p>
                  <p className="text-sm text-orange-500 font-semibold">
                    {formatPrice(low)} – {formatPrice(high)}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {job.metaDescription}
                  </p>
                </Link>
              );
            })}

            {/* Coming soon stubs */}
            {[
              {
                label: "Ceiling Fan Installation Cost Melbourne",
                slug: "ceiling-fan-installation-cost-melbourne",
                price: "$120–$350",
              },
              {
                label: "Safety Switch Installation Cost Melbourne",
                slug: "safety-switch-installation-cost-melbourne",
                price: "$150–$400",
              },
            ].map((stub) => (
              <div
                key={stub.slug}
                className="block p-5 border border-dashed border-slate-200 rounded-xl bg-slate-50 opacity-60"
              >
                <p className="font-bold text-slate-700 mb-1">{stub.label}</p>
                <p className="text-sm text-slate-400 font-semibold">
                  {stub.price}
                </p>
                <p className="text-xs text-slate-400 mt-1">Guide coming soon</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12" aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className="text-2xl font-bold text-slate-900 mb-6"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {GENERAL_FAQS.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-slate-900 mb-1.5 text-base">
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote CTA */}
        <section
          id="quote"
          className="mb-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8"
          aria-labelledby="quote-cta-heading"
        >
          <h2
            id="quote-cta-heading"
            className="text-2xl font-bold text-slate-900 mb-1"
          >
            Get a Free Quote from a Licensed Melbourne Electrician
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Describe your job and a qualified local electrician will respond
            within 1 business day.
          </p>
          <QuoteForm defaultJob="Electrician job in Melbourne" />
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-slate-400">
          All prices are estimates based on typical Melbourne jobs in 2026. They
          are not formal quotes. Actual costs vary by scope, materials, and
          contractor. Always get at least two written quotes from licensed
          electricians before proceeding.
        </p>
      </div>
    </>
  );
}
