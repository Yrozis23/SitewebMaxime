import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions Générales de Vente des prestations de développement web et SaaS de Maxime Dumesny.",
  alternates: { canonical: "/cgv" },
};

export default function CgvLayout({ children }: { children: React.ReactNode }) {
  return children;
}
