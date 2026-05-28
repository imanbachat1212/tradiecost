import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TradieCost – Honest Trade Cost Guides for Australia",
  description:
    "Transparent cost guides and calculators for electrical, plumbing, and other trades in Melbourne. Find out what you should pay before you call a tradie.",
};

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        How Much Should You Pay a Tradie?
      </h1>
      <p className="text-lg text-slate-600 mb-10 max-w-2xl">
        TradieCost publishes real price data for trade jobs in Melbourne and
        across Australia — so you know what's fair before you get a quote.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/electrician-cost-melbourne/"
          className="block p-6 border border-slate-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-colors"
        >
          <p className="text-sm font-semibold text-orange-500 mb-1">Electrician</p>
          <p className="font-bold text-slate-900 text-lg">
            Electrician Cost Melbourne
          </p>
          <p className="text-sm text-slate-500 mt-1">
            All job types, updated 2026 prices.
          </p>
        </Link>
        <Link
          href="/switchboard-upgrade-cost-melbourne/"
          className="block p-6 border border-slate-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-colors"
        >
          <p className="text-sm font-semibold text-orange-500 mb-1">Electrician</p>
          <p className="font-bold text-slate-900 text-lg">
            Switchboard Upgrade Cost Melbourne
          </p>
          <p className="text-sm text-slate-500 mt-1">$1,200–$4,000+</p>
        </Link>
      </div>
    </div>
  );
}
