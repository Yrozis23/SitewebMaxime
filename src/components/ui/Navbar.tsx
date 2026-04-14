"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { siteConfig } from "@/constants/content";

interface NavbarProps {
  onOpenSettings: () => void;
}

const navLinks = [
  { label: "Projets", href: "#projects" },
  { label: "A propos", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenSettings }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-1/2 z-30 transition-all duration-300 rounded-2xl"
      style={{
        background: "color-mix(in srgb, var(--color-bg-card) 80%, transparent)",
        backdropFilter: "blur(16px)",
        border: "1px solid var(--color-border)",
        boxShadow: scrolled
          ? "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)"
          : "0 4px 20px rgba(0,0,0,0.06)",
      }}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-base font-bold tracking-tight text-text" aria-label="Accueil - Maxime Dumesny">
          <img src="/logo.png" alt="" className="w-6 h-6 rounded-md" aria-hidden="true" />
          {siteConfig.name}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-100 text-text-secondary hover:text-accent"
            >
              {link.label}
            </a>
          ))}

          {/* Settings button */}
          <button
            type="button"
            onClick={onOpenSettings}
            aria-label="Ouvrir les paramètres"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-bg-alt text-text-secondary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        {/* Mobile: settings + burger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenSettings}
            aria-label="Paramètres"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-bg-alt text-text-secondary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            {...{ "aria-expanded": mobileOpen ? "true" : "false" }}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-bg-alt text-text-secondary"
          >
            <div className="relative w-4 h-4">
              <span className="absolute left-0 w-full h-0.5 rounded bg-current transition-all duration-200" style={{ top: mobileOpen ? "7px" : "2px", transform: mobileOpen ? "rotate(45deg)" : "none" }} />
              <span className="absolute left-0 top-1.75 w-full h-0.5 rounded bg-current transition-all duration-200" style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span className="absolute left-0 w-full h-0.5 rounded bg-current transition-all duration-200" style={{ top: mobileOpen ? "7px" : "12px", transform: mobileOpen ? "rotate(-45deg)" : "none" }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t px-5 pb-4 pt-2 rounded-b-2xl border-border"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-text-secondary"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
