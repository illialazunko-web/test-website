import Link from "next/link";
import type { ReactNode } from "react";
import { navigation, siteConfig } from "../site-data";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {siteConfig.shortName}
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-600 transition hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Discuss Project
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-black/10 bg-zinc-950 text-zinc-200">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-white">
              {siteConfig.name}
            </p>
            <p className="max-w-md text-sm leading-6 text-zinc-400">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="font-medium text-white">Pages</p>
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <p className="font-medium text-white">Contact</p>
            <div className="flex flex-col gap-2 text-zinc-400">
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <p>{siteConfig.city}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
