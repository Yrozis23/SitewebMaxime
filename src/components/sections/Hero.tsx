"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { siteConfig } from "@/constants/content";

const HeroBlob = dynamic(() => import("@/components/ui/HeroBlob"), { ssr: false });

const proofs = [
  { value: "3", label: "projets en ligne" },
  { value: "100 %", label: "sur mesure" },
  { value: "FR · EN", label: "sites bilingues" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 pb-16" aria-label="Introduction">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-accent" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-[100px] opacity-15 bg-accent-hover" />
      </div>

      <div className="relative z-10 max-w-350 mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-bg-card text-xs font-medium text-text-secondary mb-8">
              <span className="relative flex w-2 h-2" aria-hidden="true">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
              </span>
              Disponible pour de nouveaux projets
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance text-text">
              Des logiciels{" "}
              <em className="not-italic text-gradient">modernes</em>
              <br />
              pour tous.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-8 text-lg md:text-xl max-w-xl leading-relaxed text-text-secondary"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-accent transition-all hover:brightness-110 hover:-translate-y-0.5 shadow-lg shadow-accent/25"
            >
              Discutons de votre projet
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border border-border text-text bg-bg-card/60 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              Voir mes réalisations
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-14 pt-6 border-t border-border grid grid-cols-3 gap-4 max-w-md"
          >
            {proofs.map((p) => (
              <div key={p.label}>
                <dt className="sr-only">{p.label}</dt>
                <dd className="font-display text-2xl md:text-3xl text-text">{p.value}</dd>
                <p className="text-xs text-text-muted mt-1" aria-hidden="true">{p.label}</p>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden md:flex items-center justify-center aspect-square"
          aria-hidden="true"
        >
          <HeroBlob />
        </motion.div>
      </div>
    </section>
  );
}
