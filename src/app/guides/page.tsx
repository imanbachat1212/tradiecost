import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electrical Guides Melbourne | TradieCost",
  description: "Practical guides for Melbourne homeowners on electrical safety, hiring electricians, and understanding quotes.",
};

export default function GuidesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Guides</h1>
      <p className="text-slate-500 mb-8">In-depth guides are coming soon.</p>
      <Link
        href="/electrician-cost-melbourne/"
        className="text-orange-500 underline hover:text-orange-600"
      >
        ← Back to Electrician Cost Melbourne
      </Link>
    </div>
  );
}
