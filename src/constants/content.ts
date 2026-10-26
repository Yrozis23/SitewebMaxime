export const siteConfig = {
  name: "Maxime Dumesny",
  url: "https://maximedumesny.fr",
  title: "Développeur Web & SaaS",
  tagline: "Des logiciels modernes pour tous",
  description:
    "Sites vitrines, logiciels SaaS et refontes sur mesure : je transforme votre besoin en un outil rapide, élégant et simple à utiliser.",
  location: "Bretagne",
  email: "maximedumesny@gmail.com",
  phone: "06 33 91 81 76",
  phoneHref: "tel:+33633918176",
  linkedin: "https://www.linkedin.com/in/maximedumesny",
};

export const services = [
  {
    id: "vitrine",
    title: "Site vitrine sur mesure",
    description:
      "Un site qui vous ressemble, rapide, bien référencé et pensé pour convertir vos visiteurs en clients. Sans template, sans compromis.",
    points: ["Design unique et responsive", "SEO et performance soignés", "Bilingue et accessible si besoin"],
  },
  {
    id: "saas",
    title: "Logiciel & SaaS",
    description:
      "Outils métier, back-offices, plateformes : je conçois et développe le logiciel qui automatise ce qui vous fait perdre du temps.",
    points: ["Authentification et rôles", "Facturation, agenda, tableaux de bord", "Hébergement et maintenance"],
  },
  {
    id: "refonte",
    title: "Refonte & modernisation",
    description:
      "Votre site vieillit ou devient difficile à gérer ? Je le reconstruis avec une base moderne, en gardant votre contenu et votre référencement.",
    points: ["Audit de l'existant", "Migration sans perte de contenu", "Back-office simple à prendre en main"],
  },
];

export const workflow = [
  { step: "01", title: "Échange", description: "On discute de votre besoin, de vos objectifs et de votre budget. Devis détaillé à l'issue de l'échange." },
  { step: "02", title: "Conception", description: "Maquettes et architecture validées avec vous avant d'écrire la moindre ligne de code." },
  { step: "03", title: "Développement", description: "Livraisons régulières sur un environnement de test : vous voyez le projet avancer." },
  { step: "04", title: "Mise en ligne", description: "Déploiement, formation à la prise en main et suivi après livraison." },
];

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
    id: "vetoxia",
    name: "Vetoxia",
    subtitle: "SaaS pour cliniques vétérinaires",
    description:
      "Gestion complète d'une clinique vétérinaire : dossiers patients, consultations, prescriptions, agenda, facturation, pharmacovigilance, gestion des hospitalisations, etc.",
    tech: ["Next.js", "TypeScript", "React", "Prisma", "PostgreSQL", "Tailwind CSS", "Framer Motion", "NextAuth", "Resend", "Vercel", "Docker", "Git"],
    status: "En staging" as const,
    url: "https://staging.vetoxia.fr",
    gradient: "from-cyan-400 to-blue-600",
    accent: "#22d3ee",
  },
  {
    id: "mesetmarais",
    name: "Mès & Marais",
    subtitle: "Site de précommande pour une éleveuse de crevettes",
    description:
      "Site éditorial bilingue (FR/EN) pour une éleveuse de crevettes des marais salants de Piriac-sur-Mer : présentation de l'élevage, carte interactive du marais et réservation en ligne pour retrait à l'atelier.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "En staging" as const,
    url: "https://mesetmarais.maximedumesny.fr",
    gradient: "from-teal-400 to-cyan-700",
    accent: "#14b8a6",
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
