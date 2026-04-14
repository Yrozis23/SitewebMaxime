"use client";

import { motion } from "framer-motion";

const viewport = { once: true, margin: "-50px" };

export default function PortfolioMockup() {
  return (
    <div className="relative w-full h-full min-h-48 md:min-h-56 rounded-xl overflow-hidden bg-[#09090b] p-3 md:p-4 select-none" aria-hidden="true">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white/5 rounded-md px-3 py-0.5 text-[9px] text-white/40 text-center font-mono truncate">
            maximedumesny.fr
          </div>
        </div>
      </div>

      {/* Gradient orbs (like the real hero) */}
      <div className="absolute top-8 -left-10 w-32 h-32 rounded-full blur-[60px] opacity-20 bg-indigo-500" />
      <div className="absolute bottom-4 right-0 w-24 h-24 rounded-full blur-[50px] opacity-15 bg-indigo-400" />

      {/* Mini navbar */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="flex items-center justify-center mb-6"
      >
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
          {["Projets", "A propos", "Stack", "Contact"].map((item) => (
            <span key={item} className="text-[7px] text-white/40">{item}</span>
          ))}
          <div className="w-3 h-3 rounded-full bg-white/5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full border border-white/20" />
          </div>
        </div>
      </motion.div>

      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="relative z-10 px-2"
      >
        <p className="text-[8px] text-indigo-400 font-medium mb-1.5">Développeur Web &amp; SaaS</p>
        <p className="text-sm md:text-base font-extrabold text-white leading-tight">
          Des logiciels
          <br />
          <span className="text-indigo-400">modernes</span> pour
          <br />
          tous.
        </p>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="relative z-10 flex gap-2 mt-4 px-2"
      >
        <div className="px-2.5 py-1 rounded-full bg-indigo-500 text-[7px] font-semibold text-white">
          Découvrir mes projets
        </div>
        <div className="px-2.5 py-1 rounded-full border border-white/10 text-[7px] font-medium text-white/60">
          Me contacter
        </div>
      </motion.div>

      {/* Settings popup hint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="absolute bottom-3 right-3 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 backdrop-blur-sm"
      >
        <p className="text-[6px] font-semibold text-white/60 mb-1">Paramètres</p>
        <div className="flex gap-1">
          {["#6366f1", "#06b6d4", "#10b981", "#f43f5e", "#f59e0b"].map((c) => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
