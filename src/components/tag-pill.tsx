'use client';

const palette: Record<string, string> = {
  fatigue: "bg-primary/10 text-primary border-primary/30",
  sleep: "bg-sky-100 text-slate-700 border-slate-200",
  fundamentals: "bg-emerald-50 text-emerald-700 border-emerald-200",
  tendon: "bg-orange-50 text-orange-700 border-orange-200",
  rehab: "bg-rose-50 text-rose-700 border-rose-200",
  immune: "bg-blue-50 text-blue-700 border-blue-200",
  recovery: "bg-indigo-50 text-indigo-700 border-indigo-200",
  brain: "bg-violet-50 text-violet-700 border-violet-200",
  labs: "bg-neutral-100 text-neutral-700 border-neutral-200",
  'cost-aware': "bg-amber-50 text-amber-700 border-amber-200",
  nutrition: "bg-lime-50 text-lime-700 border-lime-200",
  performance: "bg-cyan-50 text-cyan-700 border-cyan-200",
  running: "bg-slate-100 text-slate-700 border-slate-200",
  tools: "bg-gray-100 text-gray-700 border-gray-300",
  'female-athlete': "bg-pink-50 text-pink-700 border-pink-200",
  travel: "bg-purple-50 text-purple-700 border-purple-200",
  strategy: "bg-stone-100 text-stone-700 border-stone-200",
};

export function TagPill({ label }: { label: string }) {
  const key = label.toLowerCase();
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold capitalize bg-[color:var(--color-card)] border-[color:var(--color-border)] text-[color:var(--color-foreground)] ${palette[key] ?? ""}`}>
      {label}
    </span>
  );
}
