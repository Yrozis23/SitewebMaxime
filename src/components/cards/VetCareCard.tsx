"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";

const codeLines = [
  { text: "const patient = await prisma.patient.create({", color: "text-accent", indent: 0 },
  { text: "  data: {", color: "text-text-muted", indent: 0 },
  { text: '    name: "Luna",', color: "text-medical", indent: 0 },
  { text: '    species: "Felin",', color: "text-medical", indent: 0 },
  { text: '    owner: { connect: { id: ownerId } },', color: "text-side", indent: 0 },
  { text: "  },", color: "text-text-muted", indent: 0 },
  { text: "});", color: "text-accent", indent: 0 },
];

export default function VetCareCard() {
  return (
    <BentoCard
      gridClass="col-span-2 row-span-2"
      label="VetCare - SaaS pour cliniques veterinaires"
    >
      <div className="h-full flex flex-col p-6 md:p-8 min-h-[280px]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-medical" />
              <h2 className="text-xl font-bold">VetCare</h2>
            </div>
            <p className="text-sm text-text-muted">SaaS pour cliniques veterinaires</p>
          </div>
          <span className="px-2.5 py-1 text-[11px] rounded-full bg-side/10 text-side border border-side/20 font-medium">
            Production
          </span>
        </div>

        {/* Fake code editor */}
        <div className="flex-1 rounded-xl bg-[#080812] border border-white/5 overflow-hidden">
          {/* Editor tab bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="ml-3 text-[11px] font-mono text-text-muted">patient.service.ts</span>
          </div>

          {/* Code */}
          <div className="p-4 font-mono text-xs md:text-[13px] leading-6 overflow-hidden">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.3 }}
                className={`${line.color} whitespace-pre`}
              >
                {line.text}
              </motion.div>
            ))}
            {/* Blinking cursor */}
            <motion.span
              className="inline-block w-2 h-4 bg-accent ml-0.5"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"].map((t) => (
            <span key={t} className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 text-text-muted border border-white/5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
