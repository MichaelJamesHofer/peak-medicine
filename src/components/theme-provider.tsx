"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const THEME_KEY = "peak-theme";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (next: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem(THEME_KEY)) as Theme | null;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  function handleThemeChange(next: Theme) {
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem(THEME_KEY, next);
    setTheme(next);
  }

  return <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
