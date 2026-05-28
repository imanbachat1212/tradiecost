import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_JOBS, getJob } from "@/lib/jobs";
import { getCalculatorConfig, formatPrice } from "@/lib/calculator";
import Calculator from "@/components/Calculator";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return ALL_JOBS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return {
    title: job.title,
    description: job.metaDescription,
    alternates: { canonical: `/${job.slug}/` },
  };
}

export default async function JobCostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const calcConfig = getCalculatorConfig(job.calculator);

  return (
    <>
      <JsonLd job={job} />

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-slate-500 flex-wrap">
            <li>
              <Link href="/" className="hover:text-slate-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link
                href={job.pillarHref}
                className="hover:text-slate-700 transition-colors"
              >
                {job.pillarLabel}
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-900 font-medium truncate">{job.h1}</li>
          </ol>
        </nav>

        {/* ── 1. H1 + quick answer ── */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          {job.h1}
        </h1>
        <div
          className="text-base text-slate-700 leading-relaxed bg-orange-50 border-l-4 border-orange-400 pl-4 py-3 pr-4 rounded-r-xl mb-10"
          dangerouslySetInnerHTML={{ __html: job.quickAnswer }}
        />

        {/* ── 2. Calculator ── */}
        {calcConfig.fields.length > 0 && (
          <section className="mb-12" aria-labelledby="calc-heading">
            <h2 id="calc-heading" className="text-2xl font-bold text-slate-900 mb-4">
              Estimate Your Cost
            </h2>
            <Calculator type={job.calculator} />
          </section>
        )}

        {/* ── 3. Price table ── */}
        <section className="mb-12" aria-labelledby="price-heading">
          <h2 id="price-heading" className="text-2xl font-bold text-slate-900 mb-4">
            Price Guide
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Scenario
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700">
                    Typical Range (AUD)
                  </th>
                </tr>
              </thead>
              <tbody>
                {job.priceTable.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-4 py-3 text-slate-700">{row.scenario}</td>
                    <td className="px-4 py-3 text-right font-semibold text-slate-900 whitespace-nowrap">
                      {formatPrice(row.low)} – {formatPrice(row.high)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Estimates for Melbourne 2026. Prices vary by scope, materials, and
            contractor. Not a formal quote.
          </p>
        </section>

        {/* ── 4. What affects price ── */}
        <section className="mb-12" aria-labelledby="factors-heading">
          <h2 id="factors-heading" className="text-2xl font-bold text-slate-900 mb-4">
            What Affects the Price?
          </h2>
          <ul className="space-y-3">
            {job.costFactors.map((f, i) => (
              <li key={i} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                <span className="text-orange-400 mt-0.5 shrink-0 font-bold">→</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 5. Signs you need it ── */}
        <section className="mb-12" aria-labelledby="signs-heading">
          <h2 id="signs-heading" className="text-2xl font-bold text-slate-900 mb-4">
            Signs You Need This Job Done
          </h2>
          <ul className="space-y-3">
            {job.signsYouNeedIt.map((s, i) => (
              <li key={i} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                <span className="text-orange-400 mt-0.5 shrink-0">✓</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 6. What's included ── */}
        <section className="mb-12" aria-labelledby="included-heading">
          <h2 id="included-heading" className="text-2xl font-bold text-slate-900 mb-4">
            What&apos;s Included in the Price?
          </h2>
          <ul className="space-y-3">
            {job.whatsIncluded.map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 7. How to read a quote ── */}
        {job.howToReadQuote.length > 0 && (
          <section className="mb-12" aria-labelledby="read-quote-heading">
            <h2 id="read-quote-heading" className="text-2xl font-bold text-slate-900 mb-4">
              How to Evaluate Your Quote
            </h2>
            <ol className="space-y-3">
              {job.howToReadQuote.map((tip, i) => (
                <li key={i} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* ── 8. FAQ ── */}
        <section className="mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {job.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-slate-900 mb-1.5 text-base">
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. Lead CTA + Quote Form ── */}
        <section
          id="quote"
          className="mb-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8"
          aria-labelledby="quote-heading"
        >
          <h2 id="quote-heading" className="text-2xl font-bold text-slate-900 mb-1">
            Get a Free Quote from a Licensed Melbourne Electrician
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Fill in your details and a qualified local electrician will respond
            within 1 business day.
          </p>
          <QuoteForm defaultJob={job.h1} />
        </section>

        {/* ── 10. Sources + reviewer trust block ── */}
        <section className="mb-8" aria-labelledby="sources-heading">
          <h2
            id="sources-heading"
            className="text-base font-semibold text-slate-700 mb-3"
          >
            Sources
          </h2>
          <ul className="space-y-1.5">
            {job.sources.map((src, i) => (
              <li key={i} className="text-sm text-slate-500">
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline decoration-slate-300 hover:text-slate-700 hover:decoration-slate-500 transition-colors"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="text-xs text-slate-400 border-t border-slate-100 pt-4 mb-10">
          Reviewed by [REVIEWER_NAME], Licensed Electrician (REC [NUMBER]). Last
          updated: May 2026.
        </div>

        {/* ── Internal links to sibling pages ── */}
        {job.relatedSlugs.length > 0 && (
          <nav aria-label="Related cost guides" className="mt-2">
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Related Cost Guides
            </p>
            <div className="flex flex-wrap gap-2">
              {job.relatedSlugs.map((s) => (
                <Link
                  key={s}
                  href={`/${s}/`}
                  className="text-sm bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 px-3 py-1.5 rounded-lg transition-colors border border-slate-200 hover:border-orange-200"
                >
                  {slugToLabel(s)}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </article>
    </>
  );
}

function slugToLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
