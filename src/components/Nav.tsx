import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight">
          Tradie<span className="text-orange-500">Cost</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link
            href="/electrician-cost-melbourne/"
            className="hover:text-slate-900 transition-colors hidden sm:inline"
          >
            Electrician Costs
          </Link>
          <Link
            href="/electrician-cost-calculator/"
            className="hover:text-slate-900 transition-colors hidden sm:inline"
          >
            Calculator
          </Link>
          <Link
            href="#quote"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
