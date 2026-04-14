"use client";

import { siteConfig } from "@/constants/content";

export default function Footer() {
  return (
    <footer className="py-12 section-padding border-t border-border" role="contentinfo">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="w-5 h-5 rounded-md" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-text">{siteConfig.name}</p>
              <p className="text-xs text-text-muted">{siteConfig.title} &middot; {siteConfig.location}</p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (nouvelle fenêtre)" className="transition-colors text-text-muted hover:text-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="transition-colors text-text-muted hover:text-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <a href="/cgv" className="text-xs text-text-muted hover:text-accent transition-colors">
              CGV
            </a>
            <span className="text-text-muted/30">|</span>
            <a href="/mentions-legales" className="text-xs text-text-muted hover:text-accent transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
