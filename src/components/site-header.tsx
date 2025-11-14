'use client';

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--header-border)] bg-[color:var(--header-bg)] backdrop-blur supports-[backdrop-filter]:bg-[color:var(--header-bg)]/90 transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 gap-4">
        <Link href="/" className="flex items-center gap-3 text-[color:var(--color-foreground)]">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-bold text-white shadow-soft">
            ⛰️
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-foreground-muted)]">
              Peak
            </p>
            <p className="text-base font-semibold text-[color:var(--color-foreground)]">
              Functional & Sports Medicine
            </p>
          </div>
        </Link>
        <nav className="hidden gap-6 text-sm font-semibold text-[color:var(--color-foreground-muted)] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[color:var(--color-foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
        </div>
      </div>
      <nav className="mt-3 flex gap-4 overflow-x-auto px-4 pb-4 text-sm font-semibold text-[color:var(--color-foreground-muted)] lg:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap rounded-full border border-[color:var(--color-border)] px-3 py-1.5">
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
