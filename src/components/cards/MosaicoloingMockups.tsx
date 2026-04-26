"use client";

import { motion } from "framer-motion";

const WP_IMAGE =
  "https://mosaicoloing.wordpress.com/wp-content/uploads/2024/12/bg-home-2-2-632867361-e1734969866794.jpg";
const NEW_IMAGE = "/mosaicoloing-new.jpg";

const viewport = { once: true, margin: "-50px" };

export function OldSiteMockup() {
  return (
    <div className="relative w-full min-h-56 md:min-h-64 rounded-lg overflow-hidden select-none" aria-hidden="true">
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-white/8 rounded px-2 py-0.5 text-[8px] text-white/45 text-center font-mono truncate">
            mosaicoloing.com
          </div>
        </div>
      </div>

      <motion.img
        src={WP_IMAGE}
        alt=""
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Contenu centré — style WordPress */}
      <div className="relative z-10 h-full min-h-56 md:min-h-64 flex flex-col justify-center items-center text-center pt-8 gap-2.5 px-6">
        <p className="text-white/85 text-xs font-serif italic leading-snug drop-shadow-md">
          Sublimez votre projet
          <br />
          avec la mosaïque.
        </p>
        <div className="px-3 py-1 text-[8px] font-bold bg-red-600 text-white tracking-wide">
          Découvrir
        </div>
      </div>
    </div>
  );
}

export function NewSiteMockup() {
  return (
    <div className="relative w-full min-h-56 md:min-h-64 rounded-lg overflow-hidden select-none" aria-hidden="true">
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-3 py-1.5 bg-[#111]">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-white/6 border border-white/8 rounded px-2 py-0.5 text-[8px] text-[#c9a961]/70 text-center font-mono truncate">
            mosaicoloing.maximedumesny.fr
          </div>
        </div>
      </div>

      <motion.img
        src={NEW_IMAGE}
        alt=""
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient éditorial — image visible en haut, fondu vers noir en bas */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/25 to-[#0a0a0a]/95" />

      {/* Contenu bas-gauche — style éditorial */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="relative z-10 min-h-56 md:min-h-64 flex flex-col justify-end items-start pl-5 pr-4 pb-5 pt-10 gap-0.5"
      >
        <p className="text-[7px] uppercase tracking-[0.35em] text-[#c9a961]/80 mb-1">
          Atelier de mosaïque d&apos;art
        </p>
        <p className="font-serif leading-tight text-white/95">
          <span className="text-sm font-light">Sublimez votre projet</span>
          <br />
          <em className="text-sm text-[#c9a961]">avec la mosaïque.</em>
        </p>
        <div className="flex gap-1.5 mt-2.5">
          <span className="px-2.5 py-1 text-[7px] uppercase tracking-[0.15em] bg-[#c9a961] text-[#0a0a0a] font-semibold">
            Découvrir les œuvres
          </span>
          <span className="px-2.5 py-1 text-[7px] uppercase tracking-[0.15em] border border-white/25 text-white/65">
            Cours &amp; stages
          </span>
        </div>
      </motion.div>
    </div>
  );
}
