"use client";

import { useTheme } from "@/components/theme-provider";

type ThemeToggleProps = {
  variant?: "dark" | "light";
};

export function ThemeToggle({ variant = "light" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const next = theme === "light" ? "dark" : "light";

  const baseClasses =
    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";
  const palette =
    variant === "dark"
      ? "border-white/20 bg-white/10 text-white hover:border-primary/50 hover:bg-white/20"
      : "border-[color:var(--color-border)] bg-[color:var(--color-card)] text-[color:var(--color-foreground)] hover:border-primary hover:text-primary";

  return (
    <button type="button" onClick={() => setTheme(next)} className={`${baseClasses} ${palette}`}>
      <span aria-hidden className="text-base">
        {theme === "light" ? "🌙" : "☀️"}
      </span>
      {next} mode
    </button>
  );
}
