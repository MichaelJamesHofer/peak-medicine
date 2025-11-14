import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { HeroBackground } from "@/components/hero-background";
import { ParallaxShell } from "@/components/parallax-shell";
import { EPISODES } from "@/data/episodes";

const threatSignals = [
  {
    title: "Electromagnetic saturation",
    detail:
      "5G towers, wearables, and Wi-Fi in every room collide with elevated metal loads to create internal magnetism, rouleaux blood, and nervous-system static.",
  },
  {
    title: "Engineered pathogens & microbots",
    detail:
      "Manufactured viruses, programmable nanotech, and long-tail post-viral syndromes demand clinicians who understand both immunology and electricity.",
  },
  {
    title: "Aerosol & water drift",
    detail:
      "Chemtrails, PFAS, microplastics, and pharmaceutical runoff infiltrate the very basics—air, light, water—forcing us to rebuild foundations daily.",
  },
];

const tangibleProtocols = [
  {
    title: "Water as a daily lab",
    detail: "Distill, remineralize, vortex, and test. Protect lymph, fascia, and signal speed before debating peptides.",
  },
  {
    title: "EMF hygiene rituals",
    detail: "Kill routers nightly, hardwire laptops, buffer phones, and pair FSM/microcurrent sessions with grounding to keep cells listening.",
  },
  {
    title: "Metal + magnetism relief",
    detail: "Binders, sauna, and targeted amino acids disrupt clumping so red cells glide instead of soldering together in 60 Hz fog.",
  },
  {
    title: "Light timing",
    detail: "Catch sunrise photons, shield junk light after dusk, and stack near-IR in the evening to repair the barriers EMF erodes.",
  },
  {
    title: "Frequency-specific dosing",
    detail: "Microcurrent protocols target vagus tone, limbic loops, lymph, and scar interference so “intangible” tools deliver measurable deltas.",
  },
  {
    title: "Order-of-operations journaling",
    detail: "Document exposures, behaviors, labs, and subjective signals daily. Pattern recognition beats guessing.",
  },
];

const manifestoPoints = [
  "The modern assault isn’t theoretical—EMF, light pollution, microplastics, microbots, and chemtrails are quantified realities.",
  "Most patients think the tools feel like magic because they haven’t been taught the work they must do between sessions.",
  "Health is earned through boring consistency layered with precise technology, not doom scrolling or protocol collecting.",
];

const quickLinks = [
  { label: "Enter the episode signal library", href: "/episodes" },
  { label: "Study Dr. Musnick’s CV", href: "/about" },
  { label: "See external talks & media", href: "/media" },
];

export default function Home() {
  const latestEpisode = EPISODES[0];
  return (
    <>
      <section
        className="hero-shell relative -mx-4 overflow-hidden rounded-[40px] border border-[color:var(--color-border)] p-6 text-white shadow-[0_40px_120px_rgba(15,23,42,0.45)] sm:-mx-8 sm:p-12 lg:-mx-16"
        style={{ background: "var(--hero-bg)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,199,212,0.18),transparent_45%)]" />
        <HeroBackground />
        <ParallaxShell>
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Peak Signal</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              The Dr. David Musnick podcast decoding the modern health war—EMF, engineered pathogens, chemtrails, microbots, and the boring work that
              keeps humans resilient.
            </h1>
            <div className="grid w-full gap-4 sm:grid-cols-3">
              {manifestoPoints.map((point) => (
                <p key={point} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-slate-100">
                  {point}
                </p>
              ))}
            </div>
            {latestEpisode ? (
              <p className="text-sm text-slate-200">
                Latest briefing:{" "}
                <Link href={`/episodes/${latestEpisode.slug}`} className="font-semibold text-primary hover:underline">
                  Episode {latestEpisode.number} — {latestEpisode.title}
                </Link>
              </p>
            ) : null}
          </div>
        </ParallaxShell>
      </section>

      <section className="space-y-6 text-center">
        <SectionTitle
          eyebrow="Threat landscape"
          title="If it feels intangible, we break it apart."
          description="Peak is a clinic-grade lab notebook translated into audio. We address the stuff your feed calls conspiracies because patients live in it every day."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {threatSignals.map((signal) => (
            <article
              key={signal.title}
              className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[color:var(--color-foreground)]">{signal.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--color-foreground-muted)]">{signal.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="protocol-section space-y-4 rounded-[32px] border border-[color:var(--color-border)] p-8 shadow-soft transition"
        style={{ background: "var(--protocol-section-bg)" }}
      >
        <SectionTitle
          eyebrow="Tangible order-of-operations"
          title="The protocols behind every episode"
          description="We don’t tease magic gear and leave you hanging. Here are the behaviors and tech stacks that keep us moving through the noise."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {tangibleProtocols.map((protocol) => (
            <div
              key={protocol.title}
              className="rounded-2xl border border-[color:var(--color-border)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "var(--protocol-card-bg)" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Protocol</p>
              <h3 className="mt-2 text-xl font-semibold text-[color:var(--color-foreground)]">{protocol.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--color-foreground-muted)]">{protocol.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 text-center">
        <SectionTitle
          eyebrow="Signal > noise"
          title="One link, no previews, just get inside"
          description="Episodes include transcripts, references, microcurrent maps, water playbooks, and exposure logs."
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-[color:var(--color-foreground)] transition hover:border-primary hover:text-primary"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-soft md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Host</p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-foreground)]">Dr. David Musnick</h2>
          <p className="mt-3 text-lg text-[color:var(--color-foreground-muted)]">
            Board-certified in internal medicine, sports medicine, and integrative medicine; faculty for IFM, Bastyr University, Andrews University,
            and UW; pioneer in frequency-specific microcurrent, regenerative orthopedics, and integrative concussion rehab.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-card)]/80 p-6 text-sm text-[color:var(--color-foreground-muted)]">
          <p className="font-semibold text-[color:var(--color-foreground)]">This is not medical advice.</p>
          <p className="mt-3">
            Peak Functional & Sports Medicine is a signal chain: one doctor’s real clinic notes translated into episodes so athletes, clinicians, and
            curious humans can think clearly amid EMF storms, engineered pathogens, and aerosolized nonsense.
          </p>
        </div>
      </section>
    </>
  );
}
