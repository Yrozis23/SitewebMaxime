"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  /** Grid area name or col/row span classes */
  gridClass?: string;
  /** Disable tilt on this card */
  noTilt?: boolean;
  /** Accessible label */
  label?: string;
}

export default function BentoCard({
  children,
  className = "",
  gridClass = "",
  noTilt = false,
  label,
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);

  function handleMouse(e: MouseEvent) {
    if (noTilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX: noTilt ? 0 : rotateX,
        rotateY: noTilt ? 0 : rotateY,
        transformPerspective: 800,
      }}
      className={`relative rounded-2xl border border-white/[0.06] bg-bg-card overflow-hidden transition-colors duration-300 hover:bg-bg-card-hover ${gridClass} ${className}`}
      role={label ? "article" : undefined}
      aria-label={label}
    >
      {/* Glare overlay */}
      {hovered && !noTilt && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
          style={{
            opacity: hovered ? 0.07 : 0,
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, white, transparent 60%)`,
          }}
        />
      )}

      {/* Border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.15)",
        }}
      />

      {children}
    </motion.div>
  );
}
