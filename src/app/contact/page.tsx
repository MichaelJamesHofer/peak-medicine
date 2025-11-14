import { SectionTitle } from "@/components/section-title";
import { ContactForm } from "@/components/contact-form";
import { CalloutCard } from "@/components/callout-card";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Contact"
        title="Reach the Peak team"
        description="We can’t give personal medical advice here, but we love hearing from listeners, partners, and event organizers."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <CalloutCard
          title="Need podcast support?"
          description="Send feedback, references, or guest ideas. We read every email and queue the most common requests into future episodes."
        />
        <CalloutCard
          title="Business & speaking"
          description="For consulting, course licensing, or speaking engagements, use the form and include dates plus scope."
          tone="safe"
        />
      </div>
      <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-soft transition">
        <ContactForm />
      </div>
    </div>
  );
}
