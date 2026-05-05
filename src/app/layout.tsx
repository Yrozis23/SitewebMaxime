import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxime Dumesny | Développeur Web & SaaS",
  description:
    "Maxime Dumesny crée des logiciels SaaS modernes et des sites web sur mesure. Découvrez Vetoxia et mes projets.",
  authors: [{ name: "Maxime Dumesny" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Maxime Dumesny | Développeur Web & SaaS",
    description: "Des logiciels modernes et des sites web sur mesure.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Prevent FOUC: apply theme before paint */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var s = JSON.parse(localStorage.getItem('md-settings') || '{}');
              var t = s.theme || 'dark';
              if (t === 'system') t = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
              if (t === 'dark') document.documentElement.classList.add('dark');
              if (s.rgaa) document.documentElement.classList.add('rgaa-mode');
              if (s.accentColor) {
                document.documentElement.style.setProperty('--color-accent', s.accentColor);
                document.documentElement.style.setProperty('--color-accent-hover', s.accentHover || s.accentColor);
              }
            } catch(e) {}
          })()
        `}} />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Aller au contenu principal</a>
        {children}
      </body>
    </html>
  );
}
