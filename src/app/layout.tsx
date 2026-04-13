import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxime Dumesny | Developpeur SaaS Medical",
  description:
    "Maxime Dumesny cree des logiciels SaaS pour le monde medical. Decouvrez VetCare et mes projets.",
  authors: [{ name: "Maxime Dumesny" }],
  robots: "index, follow",
  openGraph: {
    title: "Maxime Dumesny | Developpeur SaaS Medical",
    description: "Je cree des logiciels SaaS modernes pour le monde medical.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050507",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Aller au contenu principal</a>
        {children}
      </body>
    </html>
  );
}
