"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 md:mb-20 max-w-3xl"
    >
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-4xl md:text-6xl leading-[1.05] text-text text-balance">{title}</h2>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-text-secondary">{description}</p>
      )}
    </motion.div>
  );
}
