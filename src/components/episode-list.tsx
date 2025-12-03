'use client';

import { Episode } from "@/data/episodes";
import { EpisodeCard } from "./episode-card";

type EpisodeListProps = {
  episodes: Episode[];
  limit?: number;
  compact?: boolean;
};

export function EpisodeList({ episodes, limit, compact }: EpisodeListProps) {
  const list = typeof limit === "number" ? episodes.slice(0, limit) : episodes;

  if (!list.length) {
    return (
      <p className="rounded-xl border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-card)]/70 p-6 text-sm text-[color:var(--color-foreground-muted)]">
        No episodes match yet. Try adjusting your filters.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {list.map((episode) => (
        <EpisodeCard key={episode.slug} episode={episode} compact={compact} />
      ))}
    </div>
  );
}
