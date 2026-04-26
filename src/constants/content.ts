export const siteConfig = {
  name: "Maxime Dumesny",
  title: "Développeur Web & SaaS",
  tagline: "Des logiciels modernes pour tous",
  description:
    "Je conçois des solutions SaaS modernes et performantes, adaptées à chaque besoin.",
  location: "Bretagne",
  email: "maximedumesny@gmail.com",
  phone: "06 33 91 81 76",
  phoneHref: "tel:+33633918176",
  linkedin: "https://www.linkedin.com/in/maximedumesny",
};

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  status: "En staging" | "En production" | "En développement" | "Live";
  url: string;
  gradient: string;
  accent: string;
  redesignUrl?: string;
}

export const projects: Project[] = [
  {
    id: "vetcare",
    name: "VetCare",
    subtitle: "SaaS pour cliniques veterinaires",
    description:
      "Gestion complète d'une clinique vétérinaire : dossiers patients, consultations, prescriptions, agenda, facturation, pharmacovigilance, gestion des hospitalisations, etc.",
    tech: ["Next.js", "TypeScript", "React", "Prisma", "PostgreSQL", "Tailwind CSS", "Framer Motion", "NextAuth", "Resend", "Vercel", "Docker", "Git"],
    status: "En staging" as const,
    url: "https://vetcare.maximedumesny.fr",
    gradient: "from-cyan-400 to-blue-600",
    accent: "#22d3ee",
  },
  {
    id: "mosaicoloing",
    name: "Mosaicoloing",
    subtitle: "Site vitrine pour artisan mosaiste",
    description:
      "Site vitrine WordPress livré pour un mosaïste. En cours de modernisation vers Next.js avec galerie dynamique, formations, blog et backoffice maison.",
    tech: ["WordPress", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Framer Motion"],
    status: "En production" as const,
    url: "https://mosaicoloing.com",
    redesignUrl: "https://mosaicoloing.maximedumesny.fr",
    gradient: "from-amber-400 to-orange-600",
    accent: "#f59e0b",
  },
  {
    id: "safezone",
    name: "Safe Zone",
    subtitle: "Application mobile de bien-être",
    description:
      "Application mobile d'aide aux personnes souffrant d'anxiété sociale : conversations privées, musiques relaxantes, documentation et outils de soutien au quotidien.",
    tech: ["Flutter", "Dart", "Firebase"],
    status: "En développement" as const,
    url: "#",
    gradient: "from-emerald-400 to-green-600",
    accent: "#10b981",
  },
  {
    id: "portfolio",
    name: "maximedumesny.fr",
    subtitle: "Ce site, mon portfolio",
    description:
      "Site vitrine vous permettant de retrouver mes projets. Et oui, vous êtes dessus en ce moment !",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live" as const,
    url: "#",
    gradient: "from-indigo-400 to-violet-600",
    accent: "#6366f1",
  },
];

export const stack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Flutter"] },
  { category: "Backend", items: ["Node.js", "Prisma", "PostgreSQL", "REST API", "Firebase"] },
  { category: "DevOps", items: ["Vercel", "GitHub Actions", "Docker"] },
  { category: "Outils", items: ["VS Code", "Figma", "Git", "Claude Code"] },
];

export const colorThemes = [
  { name: "Indigo", value: "#6366f1", hover: "#818cf8" },
  { name: "Cyan", value: "#06b6d4", hover: "#22d3ee" },
  { name: "Emerald", value: "#10b981", hover: "#34d399" },
  { name: "Rose", value: "#f43f5e", hover: "#fb7185" },
  { name: "Amber", value: "#f59e0b", hover: "#fbbf24" },
  { name: "Violet", value: "#8b5cf6", hover: "#a78bfa" },
];
