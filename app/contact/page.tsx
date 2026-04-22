import type { Metadata } from "next";
import { SiteShell } from "../components/site-shell";
import { siteConfig } from "../site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact page for the demo website with CTA blocks, contact methods, and a short project brief checklist.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="container-shell py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <p className="eyebrow">Contact</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Let’s talk about a website you can confidently show to clients
            </h1>
            <p className="text-lg leading-8 text-[var(--muted)]">
              A contact page on an SEO website should do more than list a phone
              number. It should move the conversation forward with a clear
              offer, timeline, and next step.
            </p>
          </div>

          <div className="section-card rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <div className="mt-6 space-y-4 text-[var(--muted)]">
              <p>
                Phone:{" "}
                <a
                  className="font-medium text-zinc-950"
                  href={`tel:${siteConfig.phone}`}
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  className="font-medium text-zinc-950"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                City:{" "}
                <span className="font-medium text-zinc-950">
                  {siteConfig.city}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="section-card rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                What to include in the brief
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                Even in a demo project, it is useful to show how collaboration
                starts. This type of section also works well on a real
                commercial website.
              </p>
            </div>

            <ul className="grid gap-4 text-sm text-zinc-700">
              <li className="rounded-2xl bg-zinc-50 px-5 py-4">
                Business niche and target region
              </li>
              <li className="rounded-2xl bg-zinc-50 px-5 py-4">
                Which services the site should include
              </li>
              <li className="rounded-2xl bg-zinc-50 px-5 py-4">
                Whether you already have copy, cases, or testimonials
              </li>
              <li className="rounded-2xl bg-zinc-50 px-5 py-4">
                Preferred launch timeline and reference websites
              </li>
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
