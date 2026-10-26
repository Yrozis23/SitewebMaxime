"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const viewport = { once: true, margin: "-50px" };

export default function MesEtMaraisMockup() {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0e1a1a] p-3 md:p-4 select-none" aria-hidden="true">
      <div className="flex items-center gap-2 mb-2 md:mb-3">
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

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl"
      >
        <Image
          src="/mesetmarais.webp"
          alt=""
          width={1600}
          height={818}
          sizes="(min-width: 768px) 560px, 100vw"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
