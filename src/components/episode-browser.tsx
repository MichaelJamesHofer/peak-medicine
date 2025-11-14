'use client';

import { useMemo, useState } from "react";
import { Episode } from "@/data/episodes";
import { EpisodeList } from "./episode-list";

type EpisodeBrowserProps = {
  episodes: Episode[];
  initialTopic?: string;
};

export function EpisodeBrowser({ episodes, initialTopic = "all" }: EpisodeBrowserProps) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState(initialTopic);

  const topics = useMemo(() => {
    const set = new Set<string>();
    episodes.forEach((episode) => episode.topics.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [episodes]);

  const filtered = episodes.filter((episode) => {
    const matchesTopic = topic === 'all' || episode.topics.includes(topic);
    const text = `${episode.title} ${episode.summary}`.toLowerCase();
    const matchesQuery = text.includes(query.toLowerCase());
    return matchesTopic && matchesQuery;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-soft">
        <label className="text-sm font-semibold text-slate-600">
          Search episodes
          <input
            type="search"
            placeholder="Type keywords from the episode title or summary"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </label>
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-600">Filter by topic</p>
          <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTopic('all')}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              topic === 'all'
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-slate-200 bg-white text-slate-600'
            }`}
          >
            All topics
          </button>
          {topics.map((topicValue) => (
            <button
              key={topicValue}
              type="button"
              onClick={() => setTopic(topicValue)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold capitalize transition ${
                topic === topicValue
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-slate-200 bg-white text-slate-600'
              }`}
            >
              {topicValue}
            </button>
          ))}
          </div>
        </div>
      </div>
      <EpisodeList episodes={filtered} />
    </div>
  );
}
