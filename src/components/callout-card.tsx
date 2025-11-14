import { ReactNode } from "react";

type CalloutCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  tone?: 'default' | 'safe' | 'caution';
};

const toneClasses: Record<NonNullable<CalloutCardProps['tone']>, string> = {
  default: "border-[color:var(--color-border)] bg-[color:var(--color-surface)]",
  safe: "border-emerald-200 bg-safe",
  caution: "border-amber-200 bg-caution",
};

export function CalloutCard({ title, description, icon, tone = 'default' }: CalloutCardProps) {
  return (
    <div className={`flex flex-col gap-3 rounded-2xl border p-6 shadow-soft ${toneClasses[tone]}`}>
      <div className="text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold text-[color:var(--color-foreground)]">{title}</h3>
      <p className="text-base text-[color:var(--color-foreground-muted)]">{description}</p>
    </div>
  );
}
