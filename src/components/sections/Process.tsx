"use client";

import { motion } from "framer-motion";
import { workflow } from "@/constants/content";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 section-padding bg-bg-alt" aria-label="Méthode de travail">
      <div className="max-w-350 mx-auto">
        <SectionHeader
          eyebrow="Méthode"
          title="Un projet clair, de A à Z"
          description="Un process simple et transparent pour que vous sachiez toujours où on en est."
        />

        <ol className="grid md:grid-cols-4 gap-8 md:gap-6">
          {workflow.map((item, i) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative pt-6 border-t border-border"
            >
              <span className="absolute -top-px left-0 h-px w-12 bg-accent" aria-hidden="true" />
              <span className="font-display text-5xl text-accent/30 leading-none" aria-hidden="true">
                {item.step}
              </span>
              <h3 className="font-display text-2xl text-text mt-4 mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-between gap-6 p-8 md:p-10 rounded-3xl border border-border bg-bg-card"
        >
          <div>
            <p className="font-display text-2xl md:text-3xl text-text">Un projet en tête ?</p>
            <p className="text-sm md:text-base text-text-secondary mt-1">Parlons-en, la première discussion est sans engagement.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-accent transition-all hover:brightness-110 hover:-translate-y-0.5"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
