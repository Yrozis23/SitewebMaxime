export interface ServicePage {
  slug: string;
  serviceId: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  forWhom: string[];
  deliverables: { title: string; description: string }[];
  relatedProjects: string[];
  faq: { question: string; answer: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "creation-site-vitrine",
    serviceId: "vitrine",
    name: "Création de site vitrine sur mesure",
    seoTitle: "Création de site vitrine sur mesure en Bretagne",
    seoDescription:
      "Développeur freelance en Bretagne : site vitrine sur mesure, rapide, bien référencé et accessible. Sans template, avec un back-office simple.",
    h1: "Création de site vitrine sur mesure",
    intro:
      "Un site vitrine doit présenter votre activité, rassurer vos visiteurs et les amener à vous contacter ou à commander. Je conçois chaque site à la main, sans template, avec Next.js : il charge vite, se référence bien et reste simple à faire évoluer.",
    forWhom: [
      "Artisans, éleveurs et producteurs qui veulent vendre ou réserver en ligne",
      "Indépendants et TPE qui n'ont pas encore de site ou dont le site est dépassé",
      "Professions libérales et cliniques qui veulent une vitrine soignée",
    ],
    deliverables: [
      {
        title: "Design unique et responsive",
        description: "Une identité visuelle fidèle à votre activité, pensée d'abord pour le mobile puis pour l'ordinateur.",
      },
      {
        title: "SEO technique dès la conception",
        description: "Balises, données structurées, sitemap, vitesse de chargement : le référencement est intégré, pas ajouté après coup.",
      },
      {
        title: "Réservation, commande ou contact",
        description: "Formulaire, prise de rendez-vous ou réservation en ligne selon votre activité, avec e-mails de confirmation.",
      },
      {
        title: "Back-office à votre mesure",
        description: "Modifiez vos textes, images, dates ou articles vous-même, sans passer par moi pour chaque changement.",
      },
      {
        title: "Accessibilité et multilingue",
        description: "Respect des bonnes pratiques d'accessibilité et version en plusieurs langues si votre clientèle le demande.",
      },
    ],
    relatedProjects: ["mesetmarais", "mosaicoloing"],
    faq: [
      {
        question: "Pourquoi un site sur mesure plutôt qu'un template ?",
        answer:
          "Un template impose sa structure et alourdit souvent le site avec des fonctions inutiles. Un site sur mesure est plus rapide, plus facile à référencer et se démarque vraiment de vos concurrents.",
      },
      {
        question: "Pourrai-je modifier mon site moi-même ?",
        answer:
          "Oui. Je prévois un espace d'administration adapté à votre activité (articles, images, dates, réservations) et je vous forme à sa prise en main à la livraison.",
      },
      {
        question: "Combien de temps faut-il pour réaliser un site vitrine ?",
        answer:
          "Cela dépend du nombre de pages et des fonctions demandées. Après un premier échange, je vous remets un devis détaillé avec un calendrier précis.",
      },
      {
        question: "Mon site sera-t-il bien référencé sur Google ?",
        answer:
          "Les fondations techniques du référencement sont intégrées : structure, vitesse, balisage, sitemap. Le positionnement dépend ensuite de votre contenu et de votre secteur, et je peux vous accompagner sur ce point.",
      },
    ],
  },
  {
    slug: "developpement-saas",
    serviceId: "saas",
    name: "Développement de logiciel et SaaS sur mesure",
    seoTitle: "Développement de logiciel SaaS et outils métier sur mesure",
    seoDescription:
      "Développeur SaaS freelance : logiciels métier, back-offices et plateformes web sur mesure (Next.js, PostgreSQL), avec hébergement et maintenance.",
    h1: "Développement de logiciel et SaaS sur mesure",
    intro:
      "Quand les tableurs, les agendas papier et les outils génériques ne suffisent plus, un logiciel taillé pour votre métier fait gagner un temps précieux. Je conçois et développe des plateformes web complètes : comptes utilisateurs, données sécurisées, facturation, agenda et tableaux de bord.",
    forWhom: [
      "Cliniques, cabinets et structures de santé qui veulent centraliser leur gestion",
      "Entreprises qui perdent du temps sur des tâches répétitives",
      "Porteurs de projet qui veulent lancer un produit SaaS",
    ],
    deliverables: [
      {
        title: "Authentification et rôles",
        description: "Connexion sécurisée, droits d'accès par profil et traçabilité des actions.",
      },
      {
        title: "Fonctions métier",
        description: "Dossiers, agenda, facturation, prescriptions, stocks : le logiciel reflète vos processus réels.",
      },
      {
        title: "Tableaux de bord",
        description: "Les indicateurs utiles d'un coup d'œil, pour piloter votre activité.",
      },
      {
        title: "Sécurité et sauvegardes",
        description: "Base PostgreSQL, en-têtes de sécurité, limitation des abus et données sauvegardées.",
      },
      {
        title: "Hébergement et maintenance",
        description: "Mise en production, suivi après livraison et évolutions au fil de vos besoins.",
      },
    ],
    relatedProjects: ["vetoxia"],
    faq: [
      {
        question: "Quelle est la différence entre un logiciel sur mesure et un logiciel du commerce ?",
        answer:
          "Un logiciel du commerce impose sa façon de travailler. Un logiciel sur mesure s'adapte à vos processus et n'embarque que ce dont vous avez besoin.",
      },
      {
        question: "Quelles technologies utilisez-vous ?",
        answer:
          "Principalement Next.js, React, TypeScript, Prisma et PostgreSQL, hébergés sur Vercel ou en conteneurs Docker selon le besoin.",
      },
      {
        question: "Comment se passe le développement ?",
        answer:
          "Par étapes : échange sur le besoin, maquettes validées, développement avec livraisons régulières sur un environnement de test, puis mise en ligne et formation.",
      },
      {
        question: "Qui est propriétaire du logiciel ?",
        answer:
          "Les conditions sont précisées au devis. Nous définissons ensemble la propriété du code, l'hébergement et la maintenance avant de démarrer.",
      },
    ],
  },
  {
    slug: "refonte-site-web",
    serviceId: "refonte",
    name: "Refonte et modernisation de site web",
    seoTitle: "Refonte de site web : moderniser sans perdre son référencement",
    seoDescription:
      "Refonte de site WordPress ou vieillissant : migration vers Next.js, contenu et référencement conservés, back-office simple à prendre en main.",
    h1: "Refonte et modernisation de site web",
    intro:
      "Un site lent, difficile à modifier ou qui ne s'affiche pas bien sur mobile fait fuir vos visiteurs. Je le reconstruis sur une base moderne en conservant vos contenus et vos URLs importantes, pour ne pas perdre le référencement que vous avez gagné.",
    forWhom: [
      "Sites WordPress devenus lents, lourds ou compliqués à maintenir",
      "Sites anciens non adaptés au mobile",
      "Entreprises qui souhaitent un nouveau design et plus d'autonomie",
    ],
    deliverables: [
      {
        title: "Audit de l'existant",
        description: "Analyse du site actuel : contenus, URLs, performances, points bloquants et opportunités.",
      },
      {
        title: "Migration sans perte de contenu",
        description: "Vos textes, images et pages utiles sont repris et les redirections 301 évitent les liens cassés.",
      },
      {
        title: "Nouveau design et performances",
        description: "Un site plus rapide, plus lisible et mieux noté sur les critères de performance de Google.",
      },
      {
        title: "Back-office simple",
        description: "Galerie, blog, formations ou actualités gérés depuis une interface claire.",
      },
    ],
    relatedProjects: ["mosaicoloing"],
    faq: [
      {
        question: "Vais-je perdre mon référencement avec une refonte ?",
        answer:
          "Non, si elle est bien préparée : je conserve les URLs importantes, je mets en place des redirections 301 et je reprends les balises et contenus qui fonctionnent.",
      },
      {
        question: "Mon site WordPress peut-il être migré ?",
        answer:
          "Oui. Je récupère les contenus et je les réintègre dans une base moderne, avec un back-office plus simple et plus rapide.",
      },
      {
        question: "Mon site reste-t-il en ligne pendant la refonte ?",
        answer:
          "Oui. Le nouveau site est préparé sur un environnement de test et la bascule se fait seulement quand vous l'avez validé.",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug);
}
