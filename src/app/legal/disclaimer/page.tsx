import { SectionTitle } from "@/components/section-title";

const sections = [
  {
    title: "Medical disclaimer",
    body: [
      "Peak Functional & Sports Medicine publishes educational content only.",
      "Listening, reading, or submitting a form does not create a doctor–patient relationship.",
      "Always consult your own licensed clinician before acting on concepts from our episodes or resources.",
    ],
  },
  {
    title: "Affiliate & sponsor disclosure",
    body: [
      "From time to time we may mention tools or services that use affiliate links or sponsor support.",
      "We only reference products we actually use with ourselves or clients and we disclose compensation every time.",
    ],
  },
  {
    title: "HIPAA & privacy",
    body: [
      "We do not request personal health information through this site.",
      "Do not send lab results, imaging, or urgent medical questions via the contact form.",
      "Case stories are de-identified and often composited to maintain privacy.",
    ],
  },
  {
    title: "Supplement & health claims",
    body: [
      "We use structure/function language and do not claim to diagnose, treat, cure, or prevent disease.",
      "If we link to supplements, we include dosing and safety context plus an invite to discuss with your clinician.",
    ],
  },
];

export default function LegalDisclaimerPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Legal"
        title="Disclaimer & boundaries"
        description="Peak is about clarity and trust. Please read the notes below to understand how we operate online."
      />
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-[color:var(--color-foreground)]">{section.title}</h2>
            <ul className="mt-4 space-y-3 text-[color:var(--color-foreground-muted)]">
              {section.body.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
