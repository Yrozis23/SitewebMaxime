"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/constants/content";
import HeroBlob from "@/components/ui/HeroBlob";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center section-padding pt-24" aria-label="Introduction">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-accent" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-[100px] opacity-15 bg-accent-hover" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium mb-6 tracking-wide text-accent">
              Développeur Web &amp; SaaS &middot; Bretagne, France
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-balance text-text">
              Des logiciels
              <br />
              <span className="text-accent">modernes</span> pour
              <br />
              tous.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed text-text-secondary"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:brightness-110 hover:scale-[1.02] bg-accent"
            >
              Découvrir mes projets
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-all hover:scale-[1.02] text-text border-border"
            >
              Me contacter
            </a>
          </motion.div>
        </div>

        {/* Right: Blob — desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden md:flex items-center justify-center aspect-square"
        >
          <HeroBlob />
        </motion.div>
      </div>
    </section>
  );
}
