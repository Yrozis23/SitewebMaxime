"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";
import { stack } from "@/constants/content";

const allTech = [
  ...stack.frontend.map((t) => ({ name: t, color: "accent" })),
  ...stack.backend.map((t) => ({ name: t, color: "medical" })),
  ...stack.devops.map((t) => ({ name: t, color: "side" })),
  ...stack.tools.map((t) => ({ name: t, color: "contact" })),
];

export default function StackCard() {
  return (
    <BentoCard gridClass="col-span-2 md:col-span-1" label="Stack technique">
      <div className="p-6 h-full flex flex-col min-h-[200px]">
        <p className="text-[11px] font-mono uppercase tracking-widest text-text-muted mb-4">Stack</p>

        <div className="flex flex-wrap gap-2 flex-1 content-start">
          {allTech.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.3 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className={`px-3 py-1.5 text-xs rounded-lg font-medium cursor-default transition-colors
                ${tech.color === "accent" ? "bg-accent/10 text-accent border border-accent/15" : ""}
                ${tech.color === "medical" ? "bg-medical/10 text-medical border border-medical/15" : ""}
                ${tech.color === "side" ? "bg-side/10 text-side border border-side/15" : ""}
                ${tech.color === "contact" ? "bg-contact/10 text-contact border border-contact/15" : ""}
              `}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
