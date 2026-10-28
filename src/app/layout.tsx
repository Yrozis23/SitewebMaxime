import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/constants/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const SITE_URL = siteConfig.url;
const TITLE = "Maxime Dumesny | Développeur Web & SaaS freelance en Bretagne";
const DESCRIPTION =
  "Développeur freelance en Bretagne : sites vitrines sur mesure, logiciels SaaS et refontes de sites. Design soigné, performance et accompagnement de A à Z.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Maxime Dumesny" },
  description: DESCRIPTION,
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: siteConfig.name,
      jobTitle: siteConfig.title,
      url: SITE_URL,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      sameAs: [siteConfig.linkedin],
      address: { "@type": "PostalAddress", addressRegion: siteConfig.location, addressCountry: "FR" },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: `${siteConfig.name} — Développeur Web & SaaS`,
      url: SITE_URL,
      description: DESCRIPTION,
      areaServed: "FR",
      provider: { "@id": `${SITE_URL}/#person` },
      knowsAbout: ["Développement web", "SaaS", "Next.js", "React", "Refonte de site"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Aller au contenu principal</a>
        {children}
      </body>
    </html>
  );
}
