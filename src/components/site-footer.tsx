import Link from "next/link";

const footerLinks = [
  { href: "/episodes", label: "Episodes" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[color:var(--color-border)] bg-[color:var(--color-card)]/80 transition-colors">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between text-[color:var(--color-foreground)]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-foreground-muted)]">
            Peak Functional & Sports Medicine
          </p>
          <p className="mt-2 text-sm text-[color:var(--color-foreground-muted)]">
            Educational only, not medical advice. © {new Date().getFullYear()} Peak Functional & Sports Medicine.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-semibold text-[color:var(--color-foreground-muted)]">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[color:var(--color-foreground)]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
