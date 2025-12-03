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

const specialtyHighlights = [
  "Functional Medicine, Internal Medicine, Sports Medicine, and Functional Immunology",
  "Homeopathy (CEDH method) and Frequency Specific Microcurrent",
  "Prolotherapy, scar treatments, and ultrasound-guided regenerative injections",
  "Genomics interpretation and personalized nutrition/supplement mapping",
  "Medical-legal orthopedic consultations and independent medical exams",
  "Complex conditions: concussion/TBI, fatigue, cognitive impairment, IBS, SIBO, autoimmune illness, mold/biotoxin illness, EDS, hormone imbalances, chronic pain",
];

const treatmentList = [
  "Bone Marrow Aspirate injections for osteoarthritis",
  "EFT Tapping training for stress and anxiety",
  "Frequency Specific Microcurrent (FSM)",
  "Genetic assessment and interpretation",
  "Homeopathy from the French School of Homeopathy",
  "Low Level Laser Therapy (LLLT)",
  "Neural Therapy",
  "Peri-neural injections for pain",
  "Prolotherapy regenerative injections of the spine and extremities",
  "Non-surgical regenerative treatments for ligaments, tendons, and joints",
  "Pulsed Electromagnetic Field (PEMF)",
  "Scar assessment and treatment",
  "Platelet Rich Plasma (PRP)",
  "Ultrasound-guided injections",
];

const sportsFocus = [
  {
    title: "Whole-person orthopedic evaluations",
    description:
      "Every orthopedic or sports concern begins with an in-depth history and physical exam. Dr. Musnick maps every joint, ligament, tendon, muscle, nerve, and pain-processing pathway involved, then layers supplements, homeopathy, FSM, physical therapy, manual care, and regenerative injections as needed.",
  },
  {
    title: "Osteoarthritis (OA)",
    description:
      "Unique integrative plans for knees, hips, neck, thumbs, low back, and ankles: exercise and posture updates, shoe-wear shifts, nutrition and homeopathy, microcurrent, Prolotherapy, non-surgical regenerative options, and Bone Marrow Aspirate. He authored the OA chapter in Metabolic Orthopedics.",
  },
  {
    title: "Ligament sprains & joint instability",
    description:
      "Supports incomplete healing after sprains with targeted PT plus Prolotherapy or other regenerative injections to rebuild collagen, fibroblasts, and stability in knees, thumbs, shoulders, hips, ankles, and feet.",
  },
  {
    title: "Tendonitis & tendinopathy",
    description:
      "Combines ultrasound diagnostics with biomechanical screens. Treatment spans exercise modification, microcurrent, laser therapy, and non-surgical regenerative injections to restore tendon capacity.",
  },
  {
    title: "Neck & cervical spine",
    description:
      "Evaluates cervical pain for joint hypermobility and destabilizing scars. Offers numerous options—including more than 26 years of neck Prolotherapy experience—to rebuild integrity.",
  },
  {
    title: "Muscle pain, spasm, and trigger points",
    description:
      "Identifies the root drivers of chronic spasm and uses FSM, Counterstrain, and trigger point injections to calm tissue.",
  },
  {
    title: "Ehlers-Danlos & hypermobility syndromes",
    description:
      "Delivers comprehensive ergonomics, shoe-wear, microcurrent, homeopathy, and regenerative injections (Prolotherapy and other non-surgical regenerative options) to stabilize lax tissues.",
  },
  {
    title: "Disc & nerve-root injuries",
    description:
      "Helps patients understand whether surgery is necessary or if excellent non-surgical choices—FSM, PT, regenerative injections—can resolve disc and nerve issues.",
  },
];

const functionalExpertise = [
  {
    title: "Brain & autonomic system",
    items: [
      "Concussion: Dr. Musnick created the world's first integrative concussion protocol based on brain pathophysiology—comprehensive assessments, therapeutic nutrition, supplements, exercise, EMF reduction, brain training, and FSM. He contributed a chapter to Integrative Neurology.",
      "Memory disorders: full assessment and treatment programs for cognitive impairment, early dementia, and brain fog.",
      "Other neurologic cases: ADD, Parkinson's disease, MS, peripheral and cranial neuropathy, limbic system dysfunction.",
      "POTS and dysautonomia: integrative strategies for postural orthostatic tachycardia and EDS-related challenges.",
    ],
  },
  {
    title: "Hormones, sleep, and mood",
    items: [
      "Adrenal, thyroid, and testosterone imbalance—including Hashimoto's support.",
      "Insomnia: decades of teaching on non-medication and medication approaches using homeopathy, supplements, tapping, stress management, sleep hygiene, and prescriptions only when needed.",
      "Mood disorders, depression, and anxiety: blends supplements, homeopathy, exercise, tapping, and other modalities when medications fall short or cause side effects.",
      "Stress, limbic system reset, PTSD, and anxiety management with tapping, microcurrent, breath work, and nervous-system retraining.",
    ],
  },
  {
    title: "GI, metabolic, and immune",
    items: [
      "GI disorders including complex SIBO and IBS cases with motility issues.",
      "Fatty liver (alcoholic and non-alcoholic): precise diagnostics, diet upgrades, phosphatidylcholine, leaky-gut repair, and FSM to decrease inflammation, swelling, and fibrosis.",
      "Post-COVID and Long COVID: addresses loss of taste and smell plus multi-organ sequelae with supplements, homeopathy, and microcurrent.",
      "Cardiovascular and lipid issues with integrative options for patients avoiding statins.",
      "Energy and fatigue: evaluates hormones, mitochondrial ATP/energy production, and lifestyle factors.",
      "Oxalates and low-oxalate nutrition coaching.",
      "MCAS/Mast Cell Activation support backed by years of diagnostic and treatment experience.",
      "Allergy and sensitivity assessment: food, inhalant, mold, sulfur, oxalates, glyphosate.",
    ],
  },
];

const publications = [
  { title: "Integrative Approaches to Concussion and Traumatic Brain Injury", source: "Integrative Neurology, Oxford University Press (2020)" },
  { title: "Osteoarthritis & Tendinosis chapters", source: "Metabolic Therapies in Orthopedics, CRC Press (2019)" },
  { title: "Concussion and TBI", source: "Townsend Letter (May 2019)" },
  { title: "Osteoarthritis", source: "Advancing Medicine with Food and Nutrients, 2nd Ed. (2013)" },
  { title: "Exercise Prescription", source: "Textbook of Functional Medicine (2010)" },
  { title: "Scientific Evidence for Musculoskeletal, Bariatric, and Sports Nutrition", source: "CRC Press (2006) — Osteoarthritis chapter" },
  { title: "Conditioning for Outdoor Fitness", source: "Mountaineers Publishing, 2nd Ed. (2004)" },
  { title: "Medical Screening & Cervical Instability", source: "Therapeutic Exercise: Moving Toward Function (2005) and Orthopedic Physical Therapy Clinics (2001)" },
  { title: "Rowing Injuries", source: "Medical Issues of Active and Athletic Women (1994)" },
];

const lectures = [
  "Forum for Integrative Medicine: concussion/TBI pathophysiology and healing (2020)",
  "Frequency Specific Microcurrent Advanced Meetings: insomnia, chronic orthopedic pain, and brain injury workshops (2019–2021)",
  "Institute for Functional Medicine Annual Meeting: chronic orthopedic pain workshop (2019) and functional medicine approach to TBI (2017)",
  "Washington & British Columbia Associations of Naturopathic Physicians: concussion/TBI lectures (2018–2020)",
  "Andrews University: three-day chronic pain seminar (2019)",
  "Bastyr University: chronic orthopedic pain intensive (2019)",
  "BetterHealthGuy Podcast: concussion and TBI (2020)",
];

const facultyTraining = [
  "Institute for Functional Medicine teaching faculty member",
  "Sports & Orthopedic Medicine faculty, Bastyr University (16 years)",
  "Professor at Andrews University Department of Physical Therapy",
  "Faculty roles at UW Department of Sports Medicine & Orthopedics and Department of Rehabilitation",
  "Recent CME: CEDH clinical homeopathy, Cogence Immunology training, IFM pain management and autoimmune intensives, FSM Advanced Meetings, SIBO training with Alison Siebecker, EMF protection, genomics interpretation, and ongoing internal medicine board review",
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
              Board-certified internist (ABIM), sports medicine physician (CAQ), and integrative 
              medicine specialist (ABOIM) with 35+ years of orthopedic, neurologic, and functional 
              medicine innovation across the Pacific Northwest.
            </p>
            <div className="space-y-4 text-body text-foreground-muted mb-8">
              <p>
                David Musnick, MD, has dedicated 35+ years to Sports Medicine and Internal Medicine 
                and 28 years to Functional Medicine. His career includes thousands of complex orthopedic 
                and neurologic cases, long-standing work at his Bellevue practice, and formal 
                collaborations with multidisciplinary teams in Seattle, Bellevue, and Idaho.
              </p>
              <p>
                He developed detailed decision trees for joint, tendon, muscle, nerve, concussion, 
                and brain-related conditions, published in books such as <em>Metabolic Orthopedics</em> and{" "}
                <em>Integrative Neurology</em>. He routinely lectures nationally on osteoarthritis, 
                cognitive decline, concussion, long COVID, and dysautonomia, and is frequently retained 
                for medical-legal orthopedic consultations and independent medical exams.
              </p>
              <p>
                A Certified Functional Medicine practitioner for more than 25 years—and one of IFM&apos;s 
                earliest teachers—Dr. Musnick spent 33 years in Seattle before relocating to Idaho in 2022.
              </p>
            </div>
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

      {/* Specialty Highlights */}
      <section className="mb-16">
        <h2 className="text-heading-xl font-bold text-foreground mb-6">Specialty domains at a glance</h2>
        <div className="rounded-2xl border border-border bg-surface p-8">
          <ul className="space-y-4">
            {specialtyHighlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-body text-foreground-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Treatments */}
      <section className="mb-16">
        <h2 className="text-heading-xl font-bold text-foreground mb-4">Treatments Dr. Musnick administers</h2>
        <p className="text-body text-foreground-muted mb-8">
          Each plan blends hands-on diagnostics with precise therapeutic tools. Here are the modalities he personally delivers:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {treatmentList.map((treatment, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-surface px-4 py-3 text-body-sm text-foreground-muted flex items-start gap-3"
            >
              <span className="text-primary">•</span>
              <span>{treatment}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Orthopedic & Sports Medicine */}
      <section className="mb-16">
        <p className="text-caption font-semibold uppercase tracking-wider text-primary mb-3">
          Orthopedic & sports medicine
        </p>
        <h2 className="text-heading-xl font-bold text-foreground mb-4">Decision-order care for every tissue</h2>
        <p className="text-body text-foreground-muted mb-8">
          Every evaluation captures the involved tissues, neurologic tone, and pain-processing patterns before layering interventions.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {sportsFocus.map((focus, index) => (
            <div key={index} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-heading font-semibold text-foreground mb-3">{focus.title}</h3>
              <p className="text-body-sm text-foreground-muted">{focus.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Functional Medicine Focus */}
      <section className="mb-16">
        <p className="text-caption font-semibold uppercase tracking-wider text-primary mb-3">
          Functional medicine focus
        </p>
        <h2 className="text-heading-xl font-bold text-foreground mb-4">Systems Dr. Musnick evaluates in depth</h2>
        <p className="text-body text-foreground-muted mb-8">
          His functional immunology and neurology background lets him map how each system interacts with orthopedic complaints.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {functionalExpertise.map((area, index) => (
            <div key={index} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-heading font-semibold text-foreground mb-4">{area.title}</h3>
              <ul className="space-y-3">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-body-sm text-foreground-muted">
                    <span className="text-primary shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Publications & Lectures */}
      <section className="mb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Publications */}
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-heading-lg font-bold text-foreground mb-6">Selected publications</h2>
            <ul className="space-y-4">
              {publications.map((pub, index) => (
                <li key={index}>
                  <p className="text-body font-semibold text-foreground">{pub.title}</p>
                  <p className="text-body-sm text-foreground-muted">{pub.source}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Lectures */}
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-heading-lg font-bold text-foreground mb-6">Lectures & workshops</h2>
            <ul className="space-y-3">
              {lectures.map((lecture, index) => (
                <li key={index} className="flex items-start gap-2 text-body-sm text-foreground-muted">
                  <span className="text-primary shrink-0">•</span>
                  <span>{lecture}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Teaching & Training */}
      <section className="mb-16">
        <h2 className="text-heading-xl font-bold text-foreground mb-6">Teaching & ongoing training</h2>
        <div className="rounded-2xl border border-border bg-surface p-8">
          <ul className="space-y-4">
            {facultyTraining.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-body text-foreground-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured Media */}
      <section className="mb-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-heading-xl font-bold text-foreground">Featured media</h2>
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

      {/* Outside the Clinic */}
      <section className="mb-16">
        <h2 className="text-heading-xl font-bold text-foreground mb-6">Outside the clinic</h2>
        <div className="rounded-2xl border border-border bg-surface p-8">
          <p className="text-body text-foreground-muted">
            Mountain biking in Sedona, hiking Rainier, skiing, cooking, nature photography, and time 
            with friends and his daughter all keep him grounded. That blend of outdoor life plus 
            constant learning informs the way he approaches every Peak episode and clinical decision tree.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="rounded-2xl border border-dashed border-border bg-surface p-8">
        <h2 className="text-heading font-semibold text-foreground mb-4">Educational Only</h2>
        <div className="space-y-3 text-body text-foreground-muted">
          <p>
            Peak Functional & Sports Medicine is an educational platform. This page summarizes 
            Dr. Musnick&apos;s background to provide context for the podcast and does not create 
            a doctor–patient relationship.
          </p>
          <p>
            Always work directly with your chosen clinician for diagnosis and treatment. 
            Case examples are de-identified and may be composited to protect privacy.
          </p>
        </div>
      </section>
    </div>
  );
}
