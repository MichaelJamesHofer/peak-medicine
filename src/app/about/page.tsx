import Link from "next/link";
import Image from "next/image";
import { MEDIA_FEATURES } from "@/data/media";

export const metadata = {
  title: "About Dr. David Musnick",
  description: "Meet Dr. David Musnick, MD – board-certified internist, sports medicine physician, and integrative medicine specialist with 35+ years of experience.",
};

const credentials = [
  { label: "Internal Medicine", org: "ABIM Board Certified" },
  { label: "Sports Medicine", org: "CAQ Certified" },
  { label: "Integrative Medicine", org: "ABOIM Board Certified" },
];

const facultyRoles = [
  "Institute for Functional Medicine – Teaching Faculty",
  "Bastyr University – Sports & Orthopedic Medicine Faculty (16 years)",
  "Andrews University – Professor, Department of Physical Therapy",
  "University of Washington – Sports Medicine & Orthopedics Faculty",
];

const publications = [
  { title: "Integrative Approaches to Concussion and TBI", source: "Integrative Neurology, Oxford University Press (2020)" },
  { title: "Osteoarthritis & Tendinosis chapters", source: "Metabolic Therapies in Orthopedics, CRC Press (2019)" },
  { title: "Concussion and TBI", source: "Townsend Letter (May 2019)" },
  { title: "Conditioning for Outdoor Fitness", source: "Mountaineers Publishing, 2nd Ed. (2004)" },
];

const treatments = [
  "Frequency Specific Microcurrent (FSM)",
  "Prolotherapy regenerative injections",
  "Platelet Rich Plasma (PRP)",
  "Bone Marrow Aspirate for OA",
  "Neural Therapy",
  "Low Level Laser Therapy (LLLT)",
  "Pulsed Electromagnetic Field (PEMF)",
  "Ultrasound-guided injections",
  "Genetic assessment & interpretation",
  "Homeopathy (CEDH method)",
];

const featuredMedia = MEDIA_FEATURES.slice(0, 4);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <p className="text-caption font-semibold uppercase tracking-wider text-primary mb-3">
              Meet the physician
            </p>
            <h1 className="text-display font-bold text-foreground mb-6">
              Dr. David Musnick, MD
            </h1>
            <p className="text-body-lg text-foreground-muted mb-6">
              Board-certified internist, sports medicine physician, and integrative medicine 
              specialist with 35+ years pioneering order-of-operations protocols across 
              orthopedics, neurology, and functional medicine.
            </p>
            <p className="text-body text-foreground-muted mb-8">
              Dr. Musnick has dedicated his career to Sports Medicine, Internal Medicine, 
              and Functional Medicine—treating thousands of complex orthopedic and neurologic 
              cases. His work spans Seattle, Bellevue, and Idaho, with formal collaborations 
              across multidisciplinary teams.
            </p>
            {/* Credentials */}
            <div className="flex flex-wrap gap-3">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="rounded-xl border border-border bg-surface px-4 py-3"
                >
                  <p className="text-body-sm font-semibold text-foreground">{cred.label}</p>
                  <p className="text-caption text-foreground-muted">{cred.org}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-surface-elevated to-surface mb-6">
                <Image
                  src="/images/davidmusnicksketch.jpg"
                  alt="Dr. David Musnick"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="space-y-3 text-body-sm text-foreground-muted">
                <p>
                  <strong className="text-foreground">Location:</strong> Idaho (relocated 2022)
                </p>
                <p>
                  <strong className="text-foreground">Experience:</strong> 35+ years clinical practice
                </p>
                <p>
                  <strong className="text-foreground">Focus:</strong> Integrative sports & functional medicine
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Teaching */}
      <section className="mb-16">
        <h2 className="text-heading-xl font-bold text-foreground mb-6">Teaching & Faculty</h2>
        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {facultyRoles.map((role) => (
              <div key={role} className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-body text-foreground-muted">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="mb-16">
        <h2 className="text-heading-xl font-bold text-foreground mb-6">Treatments & Modalities</h2>
        <p className="text-body text-foreground-muted mb-8 max-w-2xl">
          Dr. Musnick integrates hands-on diagnostics with precise therapeutic tools. 
          Here are the key modalities he personally administers:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <div
              key={treatment}
              className="rounded-xl border border-border bg-surface px-4 py-3 text-body-sm text-foreground-muted"
            >
              {treatment}
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="mb-16">
        <h2 className="text-heading-xl font-bold text-foreground mb-6">Selected Publications</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {publications.map((pub) => (
            <div key={pub.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-body font-semibold text-foreground mb-2">{pub.title}</h3>
              <p className="text-body-sm text-foreground-muted">{pub.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Media */}
      <section className="mb-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-heading-xl font-bold text-foreground">Featured Media</h2>
          <Link
            href="/media"
            className="hidden sm:inline-flex items-center gap-2 text-body-sm font-semibold text-primary hover:text-primary-hover transition-colors duration-200"
          >
            View all
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredMedia.map((media) => (
            <a
              key={media.url}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary/50 transition-all duration-200"
            >
              <p className="text-caption font-semibold text-primary mb-2">{media.show}</p>
              <h3 className="text-body font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                {media.title}
              </h3>
              <p className="text-body-sm text-foreground-muted line-clamp-2">{media.summary}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="rounded-2xl border border-dashed border-border bg-surface p-8">
        <h2 className="text-heading font-semibold text-foreground mb-3">Educational Only</h2>
        <p className="text-body text-foreground-muted mb-3">
          Peak Functional & Sports Medicine is an educational platform. This page summarizes 
          Dr. Musnick&apos;s background to provide context for the podcast and does not create 
          a doctor–patient relationship.
        </p>
        <p className="text-body text-foreground-muted">
          Always work directly with your chosen clinician for diagnosis and treatment. 
          Case examples are de-identified and may be composited to protect privacy.
        </p>
      </section>
    </div>
  );
}
