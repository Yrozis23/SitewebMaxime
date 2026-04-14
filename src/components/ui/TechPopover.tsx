"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechPopoverProps {
  tech: string[];
}

export default function TechPopover({ tech }: TechPopoverProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="w-6 h-6 rounded-full bg-bg-alt border border-border text-text-muted text-[11px] font-semibold flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
        aria-label="Voir les technologies utilisées"
        {...{ "aria-expanded": open ? "true" : "false" }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        i
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            role="tooltip"
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-max max-w-60 p-3 rounded-xl bg-bg-card border border-border shadow-lg"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-2">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[11px] rounded-md font-medium border text-text-secondary border-border bg-bg-alt"
                >
                  {t}
                </span>
              ))}
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-bg-card border-r border-b border-border -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
