"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";
import { siteConfig } from "@/constants/content";

export default function HeroCard() {
  return (
    <BentoCard
      gridClass="col-span-2 row-span-2 md:col-span-2 md:row-span-2"
      label={`${siteConfig.name} - ${siteConfig.title}`}
      noTilt
    >
      <div className="relative h-full flex flex-col justify-end p-8 md:p-10 min-h-[280px]">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              background: "conic-gradient(from 0deg, transparent, rgba(99,102,241,0.08), transparent, rgba(34,211,238,0.06), transparent)",
            }}
          />
        </div>

        {/* Grid dots pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-mono text-accent mb-3 tracking-wider uppercase">Portfolio 2025</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4">
              {siteConfig.name}
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-md leading-relaxed">
              {siteConfig.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-3 mt-6"
          >
            <div className="w-2 h-2 rounded-full bg-side animate-pulse" />
            <span className="text-sm text-text-muted">{siteConfig.location}</span>
          </motion.div>
        </div>
      </div>
    </BentoCard>
  );
}
