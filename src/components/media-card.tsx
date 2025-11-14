import Link from "next/link";
import { MediaFeature } from "@/data/media";
import { TagPill } from "@/components/tag-pill";

export function MediaCard({ feature }: { feature: MediaFeature }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-white to-slate-200 shadow-inner dark:from-slate-800 dark:via-slate-900 dark:to-black">
        <div className="flex h-full flex-col items-center justify-center gap-2 text-[color:var(--color-foreground-muted)]">
          <span className="text-3xl">▶️</span>
          <p className="text-sm font-semibold">Media feature placeholder</p>
          <p className="text-xs uppercase tracking-[0.2em]">External recording</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <TagPill label={feature.type} />
        <TagPill label={feature.platform} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{feature.show}</p>
        <h3 className="mt-2 text-xl font-semibold text-[color:var(--color-foreground)]">{feature.title}</h3>
        <p className="mt-2 text-sm text-[color:var(--color-foreground-muted)]">{feature.summary}</p>
      </div>
      <div className="mt-auto flex items-center gap-3">
        <Link
          href={feature.url}
          className="ml-auto inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
          target="_blank"
          rel="noreferrer"
        >
          Watch / Listen ↗
        </Link>
      </div>
    </article>
  );
}
