import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "./components/site-shell";
import {
  caseStudies,
  processSteps,
  services,
  siteConfig,
  stats,
} from "./site-data";

export const metadata: Metadata = {
  title: "Multi-Page SEO Website Demo",
  description:
    "A portfolio-style SEO website demo with a clear offer, intent-driven service pages, case studies, and contact conversion paths.",
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    areaServed: "Ukraine",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
    },
    url: siteConfig.domain,
  };

  return (
    <SiteShell>
      <section className="container-shell py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="eyebrow">Portfolio Demo</p>
              <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
                A multi-page business website that looks credible and performs
                well for SEO.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
                {siteConfig.name} is a concept website for a studio that builds
                service-focused websites designed for search visibility, trust,
                and stronger lead generation.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/cases"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                View Cases
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition hover:border-black/20"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="section-card rounded-[2rem] p-8">
            <p className="text-sm font-semibold text-zinc-500">
              Why this works as a portfolio demo
            </p>
            <div className="mt-6 space-y-5">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-black/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <p className="text-3xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="section-card rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="space-y-4">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="leading-7 text-[var(--muted)]">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-zinc-700">
                  {service.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="section-card rounded-[1.75rem] p-7"
            >
              <p className="text-sm font-semibold text-[var(--accent)]">
                {item.result}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="grid gap-8 rounded-[2rem] bg-zinc-950 px-8 py-10 text-white md:grid-cols-[0.9fr_1.1fr] md:px-12">
          <div className="space-y-4">
            <p className="eyebrow text-blue-300">How the process works</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              From idea to SEO-ready launch
            </h2>
          </div>
          <ol className="grid gap-4">
            {processSteps.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-200"
              >
                <span className="mr-3 text-blue-300">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="rounded-[2rem] border border-black/10 bg-white px-8 py-10 text-center shadow-[0_18px_60px_rgba(16,17,20,0.05)]">
          <h2 className="text-3xl font-semibold tracking-tight">
            Need a similar project for your portfolio or a client?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            This demo can be adapted into a strong starting point for a local
            business, agency, clinic, construction company, or B2B service
            brand.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Request Adaptation
            </Link>
            <Link
              href="/cases"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-zinc-900"
            >
              Review Case Structure
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </SiteShell>
  );
}
