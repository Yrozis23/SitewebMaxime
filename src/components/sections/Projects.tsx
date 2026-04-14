"use client";

import { motion } from "framer-motion";
import { projects } from "@/constants/content";
import VetCareMockup from "@/components/cards/VetCareMockup";
import MosaicoloingMockup from "@/components/cards/MosaicoloingMockup";
import PortfolioMockup from "@/components/cards/PortfolioMockup";
import SafeZoneMockup from "@/components/cards/SafeZoneMockup";
import TechPopover from "@/components/ui/TechPopover";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const vetcare = projects.find((p) => p.id === "vetcare")!;
const safezone = projects.find((p) => p.id === "safezone")!;
const sideProjects = projects.filter((p) => p.id !== "vetcare" && p.id !== "safezone");

const projectMockups: Record<string, React.ReactNode> = {
  mosaicoloing: <MosaicoloingMockup />,
  portfolio: <PortfolioMockup />,
  safezone: <SafeZoneMockup />,
};

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const mockup = projectMockups[project.id];

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" as const } },
      }}
      className="group relative rounded-2xl border transition-all duration-300 hover:shadow-lg bg-bg-card border-border"
    >
      {/* Header: mockup or gradient */}
      {mockup ? (
        <div className="p-3">{mockup}</div>
      ) : (
        <div className={`h-48 md:h-56 bg-linear-to-br ${project.gradient} relative overflow-hidden rounded-t-2xl`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm w-fit mb-3">
              {project.status}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{project.name}</h3>
            <p className="text-sm text-white/80 mt-1">{project.subtitle}</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 md:p-8">
        {mockup && (
          <>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20 w-fit mb-3">
              {project.status}
            </span>
            <h3 className="text-xl font-bold text-text mb-1">{project.name}</h3>
            <p className="text-xs text-text-muted mb-3">{project.subtitle}</p>
          </>
        )}
        <p className="text-sm leading-relaxed mb-5 text-text-secondary">
          {project.description}
        </p>

        <div className="flex items-center gap-3 mb-6">
          <TechPopover tech={project.tech} />
          <span className="text-[11px] text-text-muted">{project.tech.length} technologies</span>
        </div>

        {project.url !== "#" && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-accent"
          >
            Voir le projet<span className="sr-only"> (nouvelle fenêtre)</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        )}
      </div>
    </motion.article>
  );
}

function VetCareCard() {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
      }}
      className="group relative rounded-2xl border transition-all duration-300 hover:shadow-lg bg-bg-card border-border"
    >
      <div className="grid md:grid-cols-2">
        {/* Left: Mockup */}
        <div className="p-2 md:p-4">
          <VetCareMockup />
        </div>

        {/* Right: Content */}
        <div className="px-5 py-4 md:p-8 flex flex-col justify-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-3 md:mb-4">
            {vetcare.status}
          </span>
          <h3 className="text-xl md:text-3xl font-bold text-text mb-1 md:mb-2">{vetcare.name}</h3>
          <p className="text-xs md:text-sm text-text-muted mb-3 md:mb-4">{vetcare.subtitle}</p>
          <p className="text-xs md:text-sm leading-relaxed mb-4 md:mb-6 text-text-secondary">
            {vetcare.description}
          </p>

          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <TechPopover tech={vetcare.tech} />
            <span className="text-[11px] text-text-muted">{vetcare.tech.length} technologies</span>
          </div>

          <p className="text-xs md:text-sm leading-relaxed mb-4 md:mb-6 text-text-secondary italic">
            Si vous êtes vétérinaire, n&apos;hésitez pas à tester le projet et
            à me faire vos retours. L&apos;objectif est de construire un outil
            pour vous aider au quotidien. Merci !
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={vetcare.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-medium transition-colors text-emerald-400 hover:text-emerald-300"
            >
              Voir le projet<span className="sr-only"> (nouvelle fenêtre)</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-400 transition-colors"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 section-padding" aria-label="Projets">
      <div className="max-w-350 mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p className="text-sm font-medium tracking-wide mb-3 text-accent">
            Projets
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-text">
            Ce que je construis
          </h2>
          <p className="text-lg max-w-2xl mb-16 text-text-secondary">
            Du SaaS aux sites vitrines, chaque projet est conçu avec soin pour résoudre de vrais problèmes.
          </p>
        </motion.div>

        {/* VetCare — full width with mockup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text">
            Mon projet ambitieux
          </h3>
        </motion.div>
        <VetCareCard />

        {/* Side Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-16 mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text">
            Side projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {sideProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Safe Zone — en développement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-16 mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text">
            En cours de développement
          </h3>
        </motion.div>

        <div className="w-full md:w-1/2 mx-auto">
          <ProjectCard project={safezone} index={0} />
        </div>
      </div>
    </section>
  );
}
