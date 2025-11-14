import { ReactNode } from "react";

export function DisclaimerBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-card)]/80 p-6 text-sm text-[color:var(--color-foreground-muted)]">
      <p className="font-semibold text-[color:var(--color-foreground)]">Educational Only</p>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-[color:var(--color-foreground-muted)]">{children}</div>
    </div>
  );
}
