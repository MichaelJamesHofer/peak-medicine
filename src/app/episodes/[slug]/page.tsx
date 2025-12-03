import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { EPISODES } from "@/data/episodes";
import { TagPill } from "@/components/tag-pill";
import { EpisodeList } from "@/components/episode-list";
import { DisclaimerBox } from "@/components/disclaimer-box";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export function generateStaticParams() {
  return EPISODES.map((episode) => ({ slug: episode.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const episode = EPISODES.find((item) => item.slug === params.slug);
  if (!episode) {
    return {
      title: "Episode not found",
    };
  }

  return {
    title: `${episode.title} (Episode ${episode.number})`,
    description: episode.summary,
  };
}

export default function EpisodeDetailPage({ params }: { params: { slug: string } }) {
  const episode = EPISODES.find((item) => item.slug === params.slug);
  if (!episode) {
    notFound();
  }

  const publishDate = dateFormatter.format(new Date(episode.publishDate));
  const related = EPISODES.filter(
    (item) =>
      item.slug !== episode.slug && item.topics.some((topic) => episode.topics.includes(topic))
  ).slice(0, 3);

  return (
    <article className="space-y-10">
      <div className="space-y-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-soft">
        <nav className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-foreground-muted)]">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>{" "}/{" "}
          <Link href="/episodes" className="hover:text-primary">
            Episodes
          </Link>{" "}/ {episode.title}
        </nav>
        <p className="text-sm font-semibold text-primary">Episode {episode.number}</p>
        <h1 className="text-4xl font-semibold text-[color:var(--color-foreground)]">{episode.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--color-foreground-muted)]">
          <span>{publishDate}</span>
          {episode.durationMinutes ? <span>• {episode.durationMinutes} min</span> : null}
          {episode.transcriptUrl ? (
            <Link href={episode.transcriptUrl} className="text-primary underline">
              Transcript
            </Link>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {episode.topics.map((topic) => (
            <TagPill key={`${episode.slug}-${topic}`} label={topic} />
          ))}
        </div>
        {episode.audioUrl && (
          <audio controls className="mt-6 w-full" src={episode.audioUrl}>
            Your browser does not support the audio element.
          </audio>
        )}
        {episode.videoUrl && (
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl">
            <iframe
              src={episode.videoUrl}
              title={episode.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">Key takeaways</h2>
          <ul className="mt-4 space-y-3 text-[color:var(--color-foreground-muted)]">
            {episode.keyTakeaways.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {episode.checklist && (
          <div className="rounded-3xl border border-emerald-200 bg-safe p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">Order-of-operations checklist</h2>
            <ul className="mt-4 space-y-3 text-[color:var(--color-foreground-muted)]">
              {episode.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span>✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="space-y-8">
        {episode.sections.map((section) => (
          <div key={section.title} className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">{section.title}</h2>
            <div className="mt-4 space-y-3 text-[color:var(--color-foreground-muted)]">
              {section.content.map((paragraph, index) => (
                <p key={`${section.title}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {episode.references && episode.references.length > 0 && (
        <section className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">References & resources</h2>
          <ul className="mt-4 space-y-2 text-[color:var(--color-foreground-muted)]">
            {episode.references.map((ref) => (
              <li key={ref.url}>
                <Link href={ref.url} className="text-primary underline" target="_blank">
                  {ref.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <DisclaimerBox>
        <p>
          The Peak Functional & Sports Medicine podcast and website are educational resources. They do not provide medical advice or individual treatment plans, and listening does not create a doctor–patient relationship.
        </p>
        <p>
          Talk with your own clinician before acting on the steps we describe. We disclose all sponsors and affiliate relationships on-air and in show notes.
        </p>
      </DisclaimerBox>

      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">Related episodes</h2>
          <EpisodeList episodes={related} compact />
        </section>
      )}
    </article>
  );
}
