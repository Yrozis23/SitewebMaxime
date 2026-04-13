export const siteConfig = {
  name: "Maxime Dumesny",
  title: "Developpeur SaaS Medical",
  tagline: "Je cree des logiciels pour le monde medical",
  location: "Rennes, Bretagne (35)",
  email: "maximedumesny@gmail.com",
  phone: "06 33 91 81 76",
  phoneHref: "tel:+33633918176",
  linkedin: "https://www.linkedin.com/in/maxime-dumesny",
  github: "https://github.com/maximedumesny",
};

export const stack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Prisma", "PostgreSQL", "REST API"],
  devops: ["Vercel", "GitHub Actions", "Docker"],
  tools: ["VS Code", "Figma", "Git", "Claude Code"],
};

export interface Project {
  name: string;
  description: string;
  tech: string[];
  status: "En production" | "En developpement" | "Live" | "Archive";
  color: string;
  link?: string;
}

export const mainProjects: Project[] = [
  {
    name: "VetCare",
    description: "SaaS complet pour cliniques veterinaires : dossiers patients, consultations, prescriptions, agenda, facturation.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    status: "En production",
    color: "#22d3ee",
  },
];

export const sideProjects: Project[] = [
  {
    name: "maximedumesny.fr",
    description: "Ce site ! Bento grid interactive avec micro-animations.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    status: "Live",
    color: "#6366f1",
  },
];
