"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";

export default function StatusCard() {
  return (
    <BentoCard gridClass="col-span-1" label="Statut actuel">
      <div className="p-6 h-full flex flex-col items-center justify-center text-center min-h-[180px]">
        {/* Pulsing status orb */}
        <motion.div
          className="relative w-16 h-16 mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute inset-0 rounded-full bg-side/20 animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute inset-2 rounded-full bg-side/10" />
          <div className="absolute inset-4 rounded-full bg-side/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-side" />
          </div>
        </motion.div>

        <p className="text-sm font-semibold text-side">Disponible</p>
        <p className="text-xs text-text-muted mt-1">Pour de nouveaux projets</p>
      </div>
    </BentoCard>
  );
}
