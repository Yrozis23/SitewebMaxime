"use client";

import { useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [settings] = useSettings();

  useEffect(() => {
    const root = document.documentElement;

    // Theme
    let resolved = settings.theme;
    if (resolved === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    root.classList.toggle("dark", resolved === "dark");

    // RGAA
    root.classList.toggle("rgaa-mode", settings.rgaa);

    // Accent color
    root.style.setProperty("--color-accent", settings.accentColor);
    root.style.setProperty("--color-accent-hover", settings.accentHover);
  }, [settings]);

  return <>{children}</>;
}
