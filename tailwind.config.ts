import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        site: "var(--color-background)",
        card: "var(--color-card)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        muted: "var(--color-muted)",
        safe: "var(--color-safe)",
        caution: "var(--color-caution)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        soft: "0 15px 45px rgba(31, 41, 51, 0.08)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(59, 199, 212, 0.2) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
export default config;
