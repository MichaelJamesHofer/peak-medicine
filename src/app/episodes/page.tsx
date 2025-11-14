import { Suspense } from "react";
import { SectionTitle } from "@/components/section-title";
import { EpisodeBrowser } from "@/components/episode-browser";
import { EPISODES } from "@/data/episodes";

export default function EpisodesPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Podcast hub"
        title="Browse every Peak episode"
        description="Search by topic, skim summaries, and jump into detailed show notes with transcripts, references, and checklists."
      />
      <Suspense fallback={<EpisodeBrowserFallback />}>
        <EpisodeBrowser episodes={EPISODES} />
      </Suspense>
    </div>
  );
}

function EpisodeBrowserFallback() {
  return (
    <div className="space-y-6">
      <div className="h-48 animate-pulse rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]" />
      <div className="space-y-4">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="h-32 animate-pulse rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]"
          />
        ))}
      </div>
    </div>
  );
}
