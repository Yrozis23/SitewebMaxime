"use client";

import { motion } from "framer-motion";
import { stack } from "@/constants/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 section-padding" aria-label="Stack technique">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p className="text-sm font-medium tracking-wide mb-3 text-accent">
            Stack
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-text"
          >
            Technologies que j&apos;utilise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: gi * 0.1, ease: "easeOut" as const } },
              }}
            >
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4 text-text-muted"
              >
                {group.category}
              </h3>
              <div className="space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 hover:translate-x-1 bg-bg-card border-border text-text hover:border-accent hover:text-accent"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
