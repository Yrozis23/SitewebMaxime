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
      <div className="max-w-350 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p className="eyebrow mb-4">Stack</p>
          <h2 className="text-4xl md:text-6xl leading-[1.05] mb-16 text-text text-balance">
            Des technologies modernes et éprouvées
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
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3.5 py-2 rounded-full border text-sm font-medium transition-colors duration-200 bg-bg-card border-border text-text hover:border-accent hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
