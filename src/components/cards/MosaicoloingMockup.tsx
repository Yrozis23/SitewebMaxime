"use client";

import { motion } from "framer-motion";

const viewport = { once: true, margin: "-50px" };
const heroImage = "https://mosaicoloing.wordpress.com/wp-content/uploads/2024/12/bg-home-2-2-632867361-e1734969866794.jpg";

export default function MosaicoloingMockup() {
  return (
    <div className="relative w-full h-full min-h-48 md:min-h-56 rounded-xl overflow-hidden select-none" aria-hidden="true">
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-3 py-2 bg-black/40 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white/10 rounded-md px-3 py-0.5 text-[9px] text-white/60 text-center font-mono truncate">
            mosaicoloing.com
          </div>
        </div>
      </div>

      {/* Hero image */}
      <motion.img
        src={heroImage}
        alt=""
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-20"
      >
        <p className="text-white/90 text-sm md:text-base font-serif italic leading-snug">
          Sublimez votre projet
          <br />
          avec la mosaïque.
        </p>
        <div className="mt-3 px-3 py-1 rounded text-[10px] font-semibold bg-red-600 text-white">
          Découvrir
        </div>
      </motion.div>
    </div>
  );
}
