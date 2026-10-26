"use client";

import { motion } from "framer-motion";

const viewport = { once: true, margin: "-50px" };

const steps = ["Prise d'eau", "Élevage", "Pêche", "Retrait"];

export default function MesEtMaraisMockup() {
  return (
    <div className="relative w-full h-full min-h-56 md:min-h-96 rounded-xl overflow-hidden bg-[#0e1a1a] p-3 md:p-5 select-none" aria-hidden="true">
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        <div className="flex gap-1">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-2 md:mx-4">
          <div className="bg-white/5 rounded-md md:rounded-lg px-2 md:px-4 py-1 text-[8px] md:text-[11px] text-white/40 text-center font-mono truncate">
            mesetmarais.maximedumesny.fr
          </div>
        </div>
      </div>

      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[70px] opacity-30 bg-teal-400" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative z-10 px-1 md:px-3 pt-2 md:pt-6"
      >
        <p className="text-[8px] md:text-[11px] tracking-[0.25em] uppercase text-teal-300/80 mb-2 md:mb-3">
          Piriac-sur-Mer · 47°22′ N
        </p>
        <p className="font-display text-xl md:text-4xl leading-[1.05] text-white">
          Mès <span className="text-teal-300">&amp;</span> Marais
        </p>
        <p className="text-[9px] md:text-sm text-white/50 mt-2 md:mt-3 max-w-[16rem]">
          Crevettes élevées à la main dans les marais salants.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative z-10 mt-4 md:mt-8 flex items-center gap-2 md:gap-3 px-1 md:px-3"
      >
        {steps.map((step, i) => (
          <div key={step} className="flex-1">
            <div className={`h-px mb-1.5 md:mb-2 ${i < 3 ? "bg-teal-300/70" : "bg-white/15"}`} />
            <p className="text-[7px] md:text-[10px] text-white/50">
              <span className="text-teal-300/80 font-mono mr-1">0{i + 1}</span>
              {step}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="relative z-10 mt-4 md:absolute md:bottom-6 md:right-6 md:mt-0 mx-1 md:mx-0 bg-white/5 border border-white/10 rounded-xl px-3 md:px-4 py-2.5 md:py-3 backdrop-blur-sm w-fit"
      >
        <p className="text-[8px] md:text-[10px] text-white/50 mb-0.5">Prochain retrait</p>
        <p className="text-[11px] md:text-sm font-semibold text-white">Stock disponible</p>
        <div className="mt-2 px-3 py-1 rounded-full bg-teal-400 text-[8px] md:text-[11px] font-semibold text-[#0e1a1a] text-center">
          Réserver
        </div>
      </motion.div>
    </div>
  );
}
