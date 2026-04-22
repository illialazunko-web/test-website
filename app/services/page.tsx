import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/site-shell";
import { processSteps, services } from "../site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Service structure for an SEO-focused website: corporate websites, landing pages, and conversion-driven redesigns.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="container-shell py-20">
        <div className="max-w-3xl space-y-5">
          <p className="eyebrow">Services</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            What goes into building an SEO-focused multi-page website
          </h1>
          <p className="text-lg leading-8 text-[var(--muted)]">
            The site is designed not just to look polished, but to scale
            smoothly with service pages, local intent, case studies, and clear
            lead capture flows.
          </p>
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="section-card rounded-[1.75rem] p-7"
            >
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                {service.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="section-card rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Process</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                A step-by-step project build
              </h2>
            </div>
            <ol className="grid gap-4">
              {processSteps.map((step, index) => (
                <li
                  key={step}
                  className="rounded-2xl border border-black/10 bg-zinc-50 px-5 py-4"
                >
                  <span className="mr-3 font-semibold text-[var(--accent)]">
                    0{index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="rounded-[2rem] bg-zinc-950 px-8 py-10 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Need a version for a specific niche?
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-300">
                This structure can be quickly adapted for dentistry, home
                renovation, logistics, real estate, or any service-based
                business.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950"
            >
              Discuss Project
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
