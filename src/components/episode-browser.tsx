'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Episode } from "@/data/episodes";
import { EpisodeList } from "./episode-list";

type EpisodeBrowserProps = {
  episodes: Episode[];
  initialTopic?: string;
};

export function EpisodeBrowser({ episodes, initialTopic = "all" }: EpisodeBrowserProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const normalizedDefault = initialTopic.toLowerCase();

  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState(normalizedDefault);

  useEffect(() => {
    const paramTopic = (searchParams.get("topic") ?? normalizedDefault).toLowerCase();
    if (paramTopic !== topic) {
      setTopic(paramTopic);
    }
  }, [searchParams, normalizedDefault, topic]);

  const topics = useMemo(() => {
    const map = new Map<string, string>();
    episodes.forEach((episode) => {
      episode.topics.forEach((label) => {
        const value = label.toLowerCase();
        if (!map.has(value)) {
          map.set(value, label);
        }
      });
    });
    return Array.from(map.entries())
      .map(([value, label]) => ({ value, label }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [episodes]);

  const updateTopic = useCallback(
    (nextTopic: string) => {
      setTopic(nextTopic);
      const params = new URLSearchParams(searchParams.toString());
      if (nextTopic === normalizedDefault) {
        params.delete("topic");
      } else {
        params.set("topic", nextTopic);
      }
      const queryString = params.toString();
      router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    },
    [normalizedDefault, pathname, router, searchParams]
  );

  const filtered = episodes.filter((episode) => {
    const matchesTopic =
      topic === "all" || episode.topics.some((episodeTopic) => episodeTopic.toLowerCase() === topic);
    const text = `${episode.title} ${episode.summary}`.toLowerCase();
    const matchesQuery = text.includes(query.toLowerCase());
    return matchesTopic && matchesQuery;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 shadow-soft backdrop-blur">
        <label className="text-sm font-semibold text-[color:var(--color-foreground-muted)]">
          Search episodes
          <input
            type="search"
            placeholder="Type keywords from the episode title or summary"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-base text-[color:var(--color-foreground)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </label>
        <div>
          <p className="mb-2 text-sm font-semibold text-[color:var(--color-foreground-muted)]">Filter by topic</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => updateTopic("all")}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                topic === "all"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-[color:var(--color-border)] bg-[color:var(--color-card)] text-[color:var(--color-foreground-muted)]"
              }`}
            >
              All topics
            </button>
            {topics.map((topicOption) => (
              <button
                key={topicOption.value}
                type="button"
                onClick={() => updateTopic(topicOption.value)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  topic === topicOption.value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-[color:var(--color-border)] bg-[color:var(--color-card)] text-[color:var(--color-foreground-muted)]"
                }`}
              >
                {topicOption.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <EpisodeList episodes={filtered} />
    </div>
  );
}
