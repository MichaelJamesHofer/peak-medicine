'use client';

import Link from "next/link";
import { Episode } from "@/data/episodes";
import { TagPill } from "./tag-pill";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function EpisodeCard({
  episode,
  compact = false,
}: {
  episode: Episode;
  compact?: boolean;
}) {
  const publishDate = dateFormatter.format(new Date(episode.publishDate));
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-white to-slate-200 shadow-inner dark:from-slate-800 dark:via-slate-900 dark:to-black">
        <div className="flex h-full flex-col items-center justify-center gap-2 text-[color:var(--color-foreground-muted)]">
          <span className="text-3xl">🎬</span>
          <p className="text-sm font-semibold">Video + audio recording placeholder</p>
          <p className="text-xs uppercase tracking-[0.2em]">Coming soon</p>
        </div>
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-foreground-muted)]">
          Ep. {episode.number.toString().padStart(2, "0")}
        </p>
        <p className="text-xs text-[color:var(--color-foreground-muted)]">{publishDate}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[color:var(--color-foreground)]">{episode.title}</h3>
        {!compact && (
          <p className="mt-2 text-base text-[color:var(--color-foreground-muted)]">{episode.summary}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {episode.topics.map((topic) => (
          <TagPill key={`${episode.slug}-${topic}`} label={topic} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        {episode.durationMinutes ? (
          <span className="text-sm text-[color:var(--color-foreground-muted)]">
            {episode.durationMinutes} min listen
          </span>
        ) : null}
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-foreground-muted)]">
          🎥 Video ready
        </span>
        <Link
          href={`/episodes/${episode.slug}`}
          className="ml-auto inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
        >
          Watch & listen →
        </Link>
      </div>
    </article>
  );
}
