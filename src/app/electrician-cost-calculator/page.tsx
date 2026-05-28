import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Electrician Cost Calculator Melbourne 2026 | TradieCost",
  description:
    "Free electrician cost calculator for Melbourne. Estimate the cost of a switchboard upgrade based on your home's size, age, and specific requirements.",
  alternates: { canonical: "/electrician-cost-calculator/" },
};

export default function CalculatorPage() {
  return (
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
            Electrician Cost Calculator
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight">
        Electrician Cost Calculator Melbourne
      </h1>
      <p className="text-slate-600 text-base mb-8 leading-relaxed">
        Use the calculator below to estimate the cost of a switchboard upgrade
        for your Melbourne home. Adjust the inputs to match your property.
      </p>

      <Calculator type="switchboard" />

      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
        <strong>Disclaimer:</strong> This calculator produces an estimate based
        on typical Melbourne jobs in 2026. Your actual cost depends on a site
        inspection by a licensed electrician. Always get a written quote before
        proceeding.
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            href: "/switchboard-upgrade-cost-melbourne/",
            label: "Switchboard Upgrade Cost",
            sub: "Full price guide + FAQ",
          },
          {
            href: "/house-rewiring-cost-melbourne/",
            label: "House Rewiring Cost",
            sub: "Full price guide + FAQ",
          },
          {
            href: "/ev-charger-installation-cost-melbourne/",
            label: "EV Charger Installation Cost",
            sub: "Full price guide + FAQ",
          },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block p-4 border border-slate-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-colors"
          >
            <p className="font-semibold text-slate-900 text-sm">{link.label}</p>
            <p className="text-xs text-slate-400 mt-0.5">{link.sub}</p>
          </Link>
        ))}
      </div>

      <section
        id="quote"
        className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8"
        aria-labelledby="calc-quote-heading"
      >
        <h2
          id="calc-quote-heading"
          className="text-xl font-bold text-slate-900 mb-1"
        >
          Ready for a real quote?
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          A licensed Melbourne electrician will get back to you within 1
          business day.
        </p>
        <QuoteForm defaultJob="Switchboard upgrade" />
      </section>
    </div>
  );
}
