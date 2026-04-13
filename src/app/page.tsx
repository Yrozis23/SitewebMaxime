"use client";

import { motion } from "framer-motion";
import HeroCard from "@/components/cards/HeroCard";
import VetCareCard from "@/components/cards/VetCareCard";
import StackCard from "@/components/cards/StackCard";
import AboutCard from "@/components/cards/AboutCard";
import ContactCard from "@/components/cards/ContactCard";
import StatusCard from "@/components/cards/StatusCard";
import TimeCard from "@/components/cards/TimeCard";
import SideProjectsCard from "@/components/cards/SideProjectsCard";
import QuoteCard from "@/components/cards/QuoteCard";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <main
      id="main-content"
      role="main"
      className="min-h-screen px-4 md:px-8 lg:px-12 py-8 md:py-12 max-w-[1400px] mx-auto"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-auto"
      >
        <motion.div variants={cardAnim} className="col-span-2 row-span-2">
          <HeroCard />
        </motion.div>

        <motion.div variants={cardAnim} className="col-span-2 row-span-2">
          <VetCareCard />
        </motion.div>

        <motion.div variants={cardAnim} className="col-span-2 md:col-span-1">
          <StatusCard />
        </motion.div>

        <motion.div variants={cardAnim} className="col-span-2 md:col-span-1">
          <TimeCard />
        </motion.div>

        <motion.div variants={cardAnim} className="col-span-2 md:col-span-1">
          <AboutCard />
        </motion.div>

        <motion.div variants={cardAnim} className="col-span-2 md:col-span-1">
          <StackCard />
        </motion.div>

        <motion.div variants={cardAnim} className="col-span-2">
          <ContactCard />
        </motion.div>

        <motion.div variants={cardAnim} className="col-span-2 md:col-span-1">
          <SideProjectsCard />
        </motion.div>

        <motion.div variants={cardAnim} className="col-span-2 md:col-span-1">
          <QuoteCard />
        </motion.div>
      </motion.div>

      <footer className="mt-12 pb-8 text-center">
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Maxime Dumesny. Construit avec Next.js, Tailwind &amp; Framer Motion.
        </p>
      </footer>
    </main>
  );
}
