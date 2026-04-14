"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSettings } from "@/hooks/useSettings";
import { colorThemes } from "@/constants/content";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const [settings, update] = useSettings();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();

      // Focus trap
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    // Focus first element on open
    const timer = setTimeout(() => {
      const first = panelRef.current?.querySelector<HTMLElement>("button, [href], input");
      first?.focus();
    }, 100);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Subtle backdrop — click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={onClose}
            role="presentation"
          />

          {/* Floating panel — bottom right */}
          <motion.aside
            ref={panelRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 sm:w-85 max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border shadow-2xl bg-bg-card border-border"
            style={{
              boxShadow: "0 25px 60px rgba(0,0,0,0.25), 0 0 0 1px var(--color-border)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Paramètres du site"
          >
            <div className="p-5">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-sm font-bold text-text">Paramètres</h2>
                  <p className="text-xs text-text-muted">Personnalisez votre expérience</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fermer les paramètres"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-bg-alt text-text-secondary"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Theme */}
              <section className="mb-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-2.5 text-text-muted">
                  Apparence
                </h3>
                <div className="grid grid-cols-3 gap-1.5">
                  {(["light", "dark", "system"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update({ theme: t })}
                      className="px-3 py-2 rounded-xl text-xs font-medium transition-all border"
                      style={{
                        background: settings.theme === t ? "var(--color-accent)" : "var(--color-bg-alt)",
                        color: settings.theme === t ? "white" : "var(--color-text-secondary)",
                        borderColor: settings.theme === t ? "var(--color-accent)" : "var(--color-border)",
                      }}
                    >
                      {t === "light" ? "Clair" : t === "dark" ? "Sombre" : "Auto"}
                    </button>
                  ))}
                </div>
              </section>

              {/* Accent Color */}
              <section className="mb-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-2.5 text-text-muted">
                  Couleurs
                </h3>
                <div className="flex gap-2.5 flex-wrap">
                  {colorThemes.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => update({ accentColor: c.value, accentHover: c.hover })}
                      aria-label={`Couleur ${c.name}`}
                      className="w-9 h-9 rounded-full transition-transform hover:scale-110 flex items-center justify-center border-2"
                      style={{
                        backgroundColor: c.value,
                        borderColor: settings.accentColor === c.value ? "white" : "transparent",
                        boxShadow: settings.accentColor === c.value ? `0 0 12px ${c.value}60` : "none",
                      }}
                    >
                      {settings.accentColor === c.value && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </section>

              {/* RGAA */}
              <section className="mb-4">
                <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-2.5 text-text-muted">
                  Accessibilité (RGAA)
                </h3>
                <label
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-colors bg-bg-alt cursor-pointer ${settings.rgaa ? "border-accent" : "border-border"}`}
                >
                  <div>
                    <p className="text-xs font-medium text-text">Mode RGAA</p>
                    <p className="text-[11px] mt-0.5 text-text-muted">
                      Contrastes renforcés, texte agrandi
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    role="switch"
                    checked={settings.rgaa}
                    onChange={() => update({ rgaa: !settings.rgaa })}
                    className="sr-only"
                    aria-label="Activer le mode RGAA"
                  />
                  <div
                    className={`w-11 h-6 rounded-full p-0.5 transition-colors shrink-0 ml-3 ${settings.rgaa ? "bg-accent" : "bg-border"}`}
                  >
                    <motion.div
                      className="w-5 h-5 rounded-full bg-white shadow-sm"
                      animate={{ x: settings.rgaa ? 20 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </div>
                </label>
              </section>

              {/* Info footer */}
              <p className="text-[10px] text-center text-text-muted">
                Sauvegardé localement &middot; Appliqué instantanément
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
