import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-bold text-slate-900 mb-2">
              Tradie<span className="text-orange-500">Cost</span>
            </p>
            <p className="text-sm text-slate-500">
              Honest cost guides for trade jobs across Australia. All prices are
              estimates only — not formal quotes.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm text-slate-700 mb-3">
              Electrician Costs Melbourne
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link
                  href="/electrician-cost-melbourne/"
                  className="hover:text-slate-700 transition-colors"
                >
                  Electrician Cost Melbourne
                </Link>
              </li>
              <li>
                <Link
                  href="/switchboard-upgrade-cost-melbourne/"
                  className="hover:text-slate-700 transition-colors"
                >
                  Switchboard Upgrade Cost
                </Link>
              </li>
              <li>
                <Link
                  href="/house-rewiring-cost-melbourne/"
                  className="hover:text-slate-700 transition-colors"
                >
                  House Rewiring Cost
                </Link>
              </li>
              <li>
                <Link
                  href="/ev-charger-installation-cost-melbourne/"
                  className="hover:text-slate-700 transition-colors"
                >
                  EV Charger Installation Cost
                </Link>
              </li>
              <li>
                <Link
                  href="/ceiling-fan-installation-cost-melbourne/"
                  className="hover:text-slate-700 transition-colors"
                >
                  Ceiling Fan Installation Cost
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm text-slate-700 mb-3">Tools</p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link
                  href="/electrician-cost-calculator/"
                  className="hover:text-slate-700 transition-colors"
                >
                  Electrician Cost Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/"
                  className="hover:text-slate-700 transition-colors"
                >
                  Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} TradieCost. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 md:text-right max-w-md">
            All prices shown are estimates only and do not constitute a formal
            quote. Prices vary based on site conditions, materials, and
            individual contractors.
          </p>
        </div>
      </div>
    </footer>
  );
}
