import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de Maxime Dumesny, développeur web et SaaS freelance en Bretagne.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
