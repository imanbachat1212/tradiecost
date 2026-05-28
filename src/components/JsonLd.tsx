import type { JobData } from "@/types/job";

export default function JsonLd({ job }: { job: JobData }) {
  const lowestLow = Math.min(...job.priceTable.map((r) => r.low));
  const highestHigh = Math.max(...job.priceTable.map((r) => r.high));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: job.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: job.h1,
    description: job.metaDescription,
    provider: {
      "@type": "Organization",
      name: "TradieCost",
    },
    areaServed: {
      "@type": "City",
      name: "Melbourne",
      containedInPlace: { "@type": "State", name: "Victoria", containedInPlace: { "@type": "Country", name: "Australia" } },
    },
    priceRange: `$${lowestLow.toLocaleString("en-AU")}–$${highestHigh.toLocaleString("en-AU")}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
