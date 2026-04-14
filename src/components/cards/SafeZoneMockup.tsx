"use client";

import { motion } from "framer-motion";

const viewport = { once: true, margin: "-50px" };

export default function SafeZoneMockup() {
  return (
    <div className="relative w-full min-h-72 md:min-h-96 rounded-xl overflow-hidden bg-linear-to-br from-[#1a1410] to-[#0f0d0a] p-6 md:p-8 select-none" aria-hidden="true">

      {/* Scattered phone screens — floating layout */}
      <div className="relative w-full h-64 md:h-80">

        {/* Phone 1 — Dark hero (back left) */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -6 }}
          viewport={viewport}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="absolute top-4 left-0 md:left-4 w-28 md:w-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#3d3020]/30 z-10"
        >
          <img src="/safezone-dark.png" alt="" className="w-full h-auto" />
        </motion.div>

        {/* Phone 2 — Home (center, front, largest) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#e8d8cc]/20 z-30"
        >
          <img src="/safezone-home.png" alt="" className="w-full h-auto" />
        </motion.div>

        {/* Phone 3 — Light hero (back right) */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 6 }}
          viewport={viewport}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="absolute top-4 right-0 md:right-4 w-28 md:w-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#e8d8cc]/15 z-10"
        >
          <img src="/safezone-light.png" alt="" className="w-full h-auto" />
        </motion.div>

        {/* Phone 4 — Music (bottom left, overlapping) */}
        <motion.div
          initial={{ opacity: 0, y: 25, rotate: 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 3 }}
          viewport={viewport}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-0 left-6 md:left-16 w-24 md:w-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#3d3020]/20 z-20"
        >
          <img src="/safezone-music.png" alt="" className="w-full h-auto" />
        </motion.div>

        {/* Phone 5 — Menu (bottom right, overlapping) */}
        <motion.div
          initial={{ opacity: 0, y: 25, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          viewport={viewport}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="absolute bottom-0 right-6 md:right-16 w-24 md:w-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#e8d8cc]/10 z-20"
        >
          <img src="/safezone-menu.png" alt="" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
}
