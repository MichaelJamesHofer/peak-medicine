import Link from "next/link";

type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  highlights?: string[];
  ctas: CTA[];
};

export function HeroSection({ eyebrow, title, description, highlights = [], ctas }: HeroSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl ring-1 ring-primary/5 sm:p-12">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">{title}</h1>
      <p className="mt-4 text-xl text-slate-600">{description}</p>
      {highlights.length > 0 && (
        <ul className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-8 flex flex-wrap gap-4">
        {ctas.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className={
              cta.variant === "secondary"
                ? "inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
                : "inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
            }
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
