import { SectionTitle } from "@/components/section-title";
import { CalloutCard } from "@/components/callout-card";
import { DisclaimerBox } from "@/components/disclaimer-box";

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
      "Unique integrative plans for knees, hips, neck, thumbs, low back, and ankles: exercise and posture updates, shoe-wear shifts, nutrition and homeopathy, microcurrent, Prolotherapy, non-surgical regenerative options, and Bone Marrow Aspirate. He authored the OA chapter in *Metabolic Orthopedics*.",
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
      "Concussion: Dr. Musnick created the world’s first integrative concussion protocol based on brain pathophysiology—comprehensive assessments, therapeutic nutrition, supplements, exercise, EMF reduction, brain training, and FSM. He contributed a chapter to *Integrative Neurology*.",
      "Memory disorders: full assessment and treatment programs for cognitive impairment, early dementia, and brain fog.",
      "Other neurologic cases: ADD, Parkinson’s disease, MS, peripheral and cranial neuropathy, limbic system dysfunction.",
      "POTS and dysautonomia: integrative strategies for postural orthostatic tachycardia and EDS-related challenges.",
    ],
  },
  {
    title: "Hormones, sleep, and mood",
    items: [
      "Adrenal, thyroid, and testosterone imbalance—including Hashimoto’s support.",
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
  {
    title: "Integrative Approaches to Concussion and Traumatic Brain Injury",
    source: "Integrative Neurology, Oxford University Press (2020)",
  },
  {
    title: "Osteoarthritis & Tendinosis chapters",
    source: "Metabolic Therapies in Orthopedics, CRC Press (2019)",
  },
  {
    title: "Concussion and TBI",
    source: "Townsend Letter (May 2019)",
  },
  {
    title: "Osteoarthritis",
    source: "Advancing Medicine with Food and Nutrients, 2nd Ed. (2013)",
  },
  {
    title: "Exercise Prescription",
    source: "Textbook of Functional Medicine (2010)",
  },
  {
    title: "Scientific Evidence for Musculoskeletal, Bariatric, and Sports Nutrition",
    source: "CRC Press (2006) — Osteoarthritis chapter",
  },
  {
    title: "Conditioning for Outdoor Fitness",
    source: "Mountaineers Publishing, 2nd Ed. (2004)",
  },
  {
    title: "Medical Screening & Cervical Instability",
    source: "Therapeutic Exercise: Moving Toward Function (2005) and Orthopedic Physical Therapy Clinics (2001)",
  },
  {
    title: "Rowing Injuries",
    source: "Medical Issues of Active and Athletic Women (1994)",
  },
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

const podcastEpisodes = [
  {
    title: "Ep. 22: Tissues, Issues, PRP & More",
    summary: "Functional Medicine Foundations podcast conversation covering regenerative tools, PRP, and tissue healing conversations with Dr. Musnick.",
  },
  {
    title: "Ep. 21: Osteoarthritis (OA) with Dr. David Musnick",
    summary: "Deep dive into his integrative OA program, Metabolic Orthopedics insights, and case studies.",
  },
  {
    title: "Ep. 8: Scars and Prolotherapy",
    summary: "How scar tissue impacts biomechanics and how Dr. Musnick sequences Prolotherapy for stability.",
  },
  {
    title: "Ep. 5: Healing the Brain After Concussion",
    summary: "Outlines the step-by-step concussion healing system—nutrition, microcurrent, and neuro rehab.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        eyebrow="Meet the physician"
        title="Dr. David Musnick, MD"
        description="Board-certified internist (ABIM), sports medicine physician (CAQ), and integrative medicine specialist (ABOIM) with 35+ years of orthopedic, neurologic, and functional medicine innovation across the Pacific Northwest."
      />

      <section className="grid gap-8 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-soft transition md:grid-cols-2">
        <div className="space-y-4 text-[color:var(--color-foreground-muted)]">
          <p>
            David Musnick, MD, has dedicated 35+ years to Sports Medicine and Internal Medicine and 28 years to Functional Medicine. His
            career includes thousands of complex orthopedic and neurologic cases, long-standing work at his Bellevue practice, and formal
            collaborations with multidisciplinary teams in Seattle, Bellevue, and Idaho.
          </p>
          <p>
            He developed detailed decision trees for joint, tendon, muscle, nerve, concussion, and brain-related conditions, published in
            books such as <em>Metabolic Orthopedics</em> and <em>Integrative Neurology</em>. He routinely lectures nationally on osteoarthritis,
            cognitive decline, concussion, long COVID, and dysautonomia, and is frequently retained for medical-legal orthopedic consultations
            and independent medical exams.
          </p>
          <p>
            A Certified Functional Medicine practitioner for more than 25 years—and one of IFM’s earliest teachers—Dr. Musnick spent 33 years
            in Seattle before relocating to Idaho in 2022. Away from the microphone he can be found hiking, mountain biking, skiing, kayaking,
            or playing pickleball—experiences that keep his athlete-centered lens sharp.
          </p>
        </div>
        <CalloutCard
          title="Credentials snapshot"
          description="• Board certified: Internal Medicine (ABIM), Sports Medicine (CAQ), Integrative Medicine (ABOIM)\n• Former faculty: Bastyr University, University of Washington, Institute for Functional Medicine\n• Contributor: Metabolic Orthopedics, Integrative Neurology, Conditioning for Outdoor Fitness"
          tone="safe"
        />
      </section>

      <section className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft transition">
        <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">Specialty domains at a glance</h2>
        <ul className="mt-4 space-y-3 text-[color:var(--color-foreground-muted)]">
          {specialtyHighlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">Treatments Dr. Musnick administers</h2>
        <p className="mt-2 text-[color:var(--color-foreground-muted)]">
          Each plan blends hands-on diagnostics with precise therapeutic tools. Here are the modalities he personally delivers:
        </p>
        <ul className="mt-4 grid gap-3 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft transition sm:grid-cols-2">
          {treatmentList.map((item) => (
            <li key={item} className="flex gap-3 text-[color:var(--color-foreground-muted)]">
              <span className="text-primary">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Orthopedic & sports medicine"
          title="Decision-order care for every tissue"
          description="Every evaluation captures the involved tissues, neurologic tone, and pain-processing patterns before layering these interventions."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {sportsFocus.map((focus) => (
            <CalloutCard key={focus.title} title={focus.title} description={focus.description} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Functional medicine focus"
          title="Systems Dr. Musnick evaluates in depth"
          description="His functional immunology and neurology background lets him map how each system interacts with orthopedic complaints."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {functionalExpertise.map((area) => (
            <div key={area.title} className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft transition">
              <h3 className="text-xl font-semibold text-[color:var(--color-foreground)]">{area.title}</h3>
              <ul className="mt-4 space-y-3 text-[color:var(--color-foreground-muted)]">
                {area.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">Featured podcasts & media</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {podcastEpisodes.map((episode) => (
            <div key={episode.title} className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-soft transition">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Functional Medicine Foundations Podcast</p>
              <h3 className="mt-2 text-xl font-semibold text-[color:var(--color-foreground)]">{episode.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--color-foreground-muted)]">{episode.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft transition">
          <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">Selected publications</h2>
          <ul className="mt-4 space-y-3 text-[color:var(--color-foreground-muted)]">
            {publications.map((pub) => (
              <li key={pub.title}>
                <p className="font-semibold text-[color:var(--color-foreground)]">{pub.title}</p>
                <p className="text-sm text-[color:var(--color-foreground-muted)]">{pub.source}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft transition">
          <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">Lectures & workshops</h2>
          <ul className="mt-4 space-y-3 text-[color:var(--color-foreground-muted)]">
            {lectures.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft transition">
        <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">Teaching & ongoing training</h2>
        <ul className="mt-4 space-y-3 text-[color:var(--color-foreground-muted)]">
          {facultyTraining.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft transition">
        <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">Outside the clinic</h2>
        <p className="mt-3 text-[color:var(--color-foreground-muted)]">
          Mountain biking in Sedona, hiking Rainier, skiing, cooking, nature photography, and time with friends and his daughter all keep him
          grounded. That blend of outdoor life plus constant learning informs the way he approaches every Peak episode and clinical decision tree.
        </p>
      </section>

      <DisclaimerBox>
        <p>
          Peak Functional & Sports Medicine is an educational platform. This page summarizes Dr. Musnick’s background to provide context for the
          podcast and does not create a doctor–patient relationship.
        </p>
        <p>
          Always work directly with your chosen clinician for diagnosis and treatment. Case examples are de-identified and may be composited to
          protect privacy.
        </p>
      </DisclaimerBox>
    </div>
  );
}
