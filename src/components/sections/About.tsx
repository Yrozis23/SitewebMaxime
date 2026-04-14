"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/constants/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stats = [
  { value: "4+", label: "Projets livrés ou en cours" },
  { value: "2026", label: "Début de mon plus gros projet" },
  { value: "100%", label: "Passion" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 section-padding" aria-label="A propos">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="text-sm font-medium tracking-wide mb-3 text-accent">
              A propos
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-text"
            >
              Créer des outils qui comptent
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-text-secondary">
              <p>
                Moi c&apos;est Maxime, développeur web en {siteConfig.location}.
                J&apos;aime créer des outils qui simplifient vraiment la vie
                des gens qui les utilisent.
              </p>
              <p>
                Ce qui me motive, c&apos;est de partir d&apos;un vrai besoin et
                d&apos;en faire un outil performant et réellement utile pour vous.
              </p>
              <p>
                Chaque projet est l&apos;occasion d&apos;apprendre, de tester
                de nouvelles approches/technologies, et de livrer un produit
                dont je suis fier, et qui vous aidera dans votre vie professionnelle.
              </p>
            </div>
          </motion.div>

          {/* Right: stats + visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" as const } },
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 md:p-6 rounded-2xl border bg-bg-card border-border"
                >
                  <p className="text-2xl md:text-3xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-xs mt-1 text-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div
              className="p-8 rounded-2xl border bg-bg-card border-border"
            >
              <blockquote>
                <p className="text-lg italic leading-relaxed text-text-secondary">
                  &ldquo;Un logiciel réussi, c&apos;est du temps gagné chaque jour.&rdquo;
                </p>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
