"use client";

import { createContext, useContext, useCallback, useSyncExternalStore } from "react";
import { createLogger } from "@/lib/logger";

const log = createLogger("Settings");

export interface Settings {
  theme: "light" | "dark" | "system";
  accentColor: string;
  accentHover: string;
  rgaa: boolean;
}

const STORAGE_KEY = "md-settings";

const defaultSettings: Settings = {
  theme: "dark",
  accentColor: "#6366f1",
  accentHover: "#818cf8",
  rgaa: false,
};

let listeners: (() => void)[] = [];
let cachedSettings: Settings | null = null;

function getSnapshot(): Settings {
  if (cachedSettings) return cachedSettings;
  if (typeof window === "undefined") return defaultSettings;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    cachedSettings = raw ? { ...defaultSettings, ...JSON.parse(raw) } : defaultSettings;
  } catch {
    cachedSettings = defaultSettings;
  }
  return cachedSettings!;
}

function getServerSnapshot(): Settings {
  return defaultSettings;
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function emitChange() {
  cachedSettings = null; // bust cache
  listeners.forEach((l) => l());
}

export function setSettings(partial: Partial<Settings>) {
  const current = getSnapshot();
  const next = { ...current, ...partial };
  log.info("Settings updated", partial);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch { /* quota exceeded */ }
  emitChange();
}

export function useSettings(): [Settings, (partial: Partial<Settings>) => void] {
  const settings = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [settings, setSettings];
}
