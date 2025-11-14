'use client';

import { useMemo, useState } from "react";
import { MediaFeature } from "@/data/media";
import { MediaCard } from "@/components/media-card";

export function MediaBrowser({ features }: { features: MediaFeature[] }) {
  const [query, setQuery] = useState("");
  const [showFilter, setShowFilter] = useState("all");

  const shows = useMemo(() => {
    const set = new Set<string>();
    features.forEach((feature) => set.add(feature.show));
    return Array.from(set).sort();
  }, [features]);

  const filtered = features.filter((feature) => {
    const matchesShow = showFilter === "all" || feature.show === showFilter;
    const text = `${feature.title} ${feature.summary} ${feature.show} ${feature.platform}`.toLowerCase();
    const matchesQuery = text.includes(query.toLowerCase());
    return matchesShow && matchesQuery;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 shadow-soft">
        <label className="text-sm font-semibold text-[color:var(--color-foreground-muted)]">
          Search media
          <input
            type="search"
            placeholder="Type keywords, show names, or topics"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-base text-[color:var(--color-foreground)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </label>
        <div>
          <p className="mb-2 text-sm font-semibold text-[color:var(--color-foreground-muted)]">Filter by show</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setShowFilter('all')}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                showFilter === 'all'
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-[color:var(--color-border)] bg-[color:var(--color-card)] text-[color:var(--color-foreground-muted)]'
              }`}
            >
              All shows
            </button>
            {shows.map((show) => (
              <button
                key={show}
                type="button"
                onClick={() => setShowFilter(show)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  showFilter === show
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-[color:var(--color-border)] bg-[color:var(--color-card)] text-[color:var(--color-foreground-muted)]'
                }`}
              >
                {show}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.length ? (
          filtered.map((feature) => <MediaCard key={feature.url} feature={feature} />)
        ) : (
          <p className="rounded-2xl border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-card)]/70 p-6 text-sm text-[color:var(--color-foreground-muted)] md:col-span-2">
            No media matches yet. Try adjusting your search or show filter.
          </p>
        )}
      </div>
    </div>
  );
}
