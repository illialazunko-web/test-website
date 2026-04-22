import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";
import { caseStudies } from "../site-data";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "A set of portfolio-ready demo case studies for local business, healthcare, construction, and B2B services.",
  alternates: {
    canonical: "/cases",
  },
};

export default function CasesPage() {
  return (
    <SiteShell>
      <section className="container-shell py-20">
        <div className="max-w-3xl space-y-5">
          <p className="eyebrow">Cases</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Project examples you can confidently show in a portfolio
          </h1>
          <p className="text-lg leading-8 text-[var(--muted)]">
            These are not real clients, but carefully packaged demo scenarios
            that help present experience with multi-page, SEO-oriented websites.
          </p>
        </div>
      </section>

      <section className="container-shell pb-16">
        <div className="grid gap-6">
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              className="section-card grid gap-6 rounded-[2rem] p-8 md:grid-cols-[0.35fr_1fr]"
            >
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[var(--accent)]">
                  Case 0{index + 1}
                </p>
                <p className="text-3xl font-semibold tracking-tight">
                  {item.result}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {item.summary}
                </p>
                <div className="mt-6 grid gap-3 text-sm text-zinc-700 md:grid-cols-3">
                  <div className="rounded-2xl bg-zinc-50 px-4 py-3">
                    Dedicated service pages by intent
                  </div>
                  <div className="rounded-2xl bg-zinc-50 px-4 py-3">
                    Commercial trust-building sections
                  </div>
                  <div className="rounded-2xl bg-zinc-50 px-4 py-3">
                    Clear CTA-driven conversion flow
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="rounded-[2rem] border border-dashed border-black/15 bg-white px-8 py-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Why this section matters on an SEO website
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Case studies build trust, explain the work in a concrete way, and
            answer client questions before the first call. They also strengthen
            the site&apos;s perceived expertise for search.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
