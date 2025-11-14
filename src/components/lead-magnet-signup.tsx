import { EmailSubscribeForm } from "./email-subscribe-form";

type LeadMagnetSignupProps = {
  anchorId?: string;
};

export function LeadMagnetSignup({ anchorId }: LeadMagnetSignupProps) {
  return (
    <section
      id={anchorId}
      className="rounded-3xl border border-[color:var(--color-border)] bg-gradient-to-br from-primary/5 via-[color:var(--color-card)] to-accent/10 p-8 shadow-xl transition-colors sm:p-12 dark:from-primary/10 dark:via-slate-900 dark:to-amber-500/10"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Free resource
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-foreground)]">
        Get the Order-of-Operations Cheat Sheet
      </h2>
      <p className="mt-3 text-lg text-[color:var(--color-foreground-muted)]">
        A one-page guide that shows how we triage common performance and health questions—what to do first,
        what to skip, and when advanced tools are actually worth it.
      </p>
      <div className="mt-6">
        <EmailSubscribeForm />
      </div>
      <p className="mt-3 text-xs text-[color:var(--color-foreground-muted)]">
        By submitting you agree to receive educational emails. No medical advice. Opt out anytime.
      </p>
    </section>
  );
}
