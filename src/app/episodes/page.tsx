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
      <EpisodeBrowser episodes={EPISODES} />
    </div>
  );
}
