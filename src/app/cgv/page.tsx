"use client";

import ThemeProvider from "@/components/ui/ThemeProvider";

export default function CGV() {
  return (
    <ThemeProvider>
      <main id="main-content" className="min-h-screen section-padding py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover mb-8 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Retour au site
          </a>

          <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Conditions Générales de Vente</h1>
          <p className="text-sm text-text-muted mb-12">Maxime Dumesny — Développeur Web & SaaS Freelance</p>

          <div className="space-y-10 text-sm leading-relaxed text-text-secondary">
            <section>
              <h2 className="text-lg font-semibold text-text mb-3">1. Présentation</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les prestations proposées
                par Maxime Dumesny, développeur web et SaaS indépendant, enregistré sous le numéro
                SIRET <strong className="text-text">909 828 097 00016</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">2. Prestations proposées</h2>
              <p className="mb-3">Les services proposés comprennent notamment :</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>La conception et le développement de sites web (vitrine, CMS ou sur mesure)</li>
                <li>La conception et le développement d&apos;applications web (SaaS, outils métier)</li>
                <li>La conception et le développement d&apos;applications mobiles</li>
                <li>La maintenance et l&apos;évolution de solutions existantes</li>
                <li>Le conseil technique et l&apos;accompagnement de projets digitaux</li>
              </ul>
              <p className="mt-3">Toute prestation fait l&apos;objet d&apos;un devis personnalisé.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">3. Devis et commandes</h2>
              <p>
                Toute demande de prestation donne lieu à l&apos;établissement d&apos;un devis.
                L&apos;acceptation du devis par le client (signature ou accord par écrit) vaut validation de
                commande et acceptation des présentes CGV.
              </p>
              <p className="mt-2">
                Un acompte (généralement de 30%) peut être demandé pour confirmer la réservation de la prestation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">4. Tarifs et modalités de paiement</h2>
              <p>Les prix sont exprimés en euros TTC.</p>
              <p>Les modalités de paiement sont définies dans le devis.</p>
              <p>Sauf accord particulier, le solde est dû à la livraison des prestations.</p>
              <p className="mt-2">En cas de retard de paiement, des pénalités peuvent être appliquées conformément à la loi.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">5. Livraison</h2>
              <p>Les délais de livraison sont indiqués à titre indicatif.</p>
              <p>
                Maxime Dumesny ne saurait être tenu responsable des retards liés à des circonstances
                extérieures (problèmes techniques, dépendances tierces, force majeure…).
              </p>
              <p className="mt-2">
                Les livrables sont mis à disposition via dépôt Git, déploiement en ligne, ou tout autre moyen convenu.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">6. Propriété intellectuelle</h2>
              <p>
                Tous les contenus créés (code source, designs, textes, visuels) restent la propriété de Maxime
                Dumesny, sauf cession explicitement stipulée dans le devis.
              </p>
              <p className="mt-2">
                Le client obtient une licence d&apos;utilisation pour les usages définis dans le devis.
              </p>
              <p className="mt-2">
                Toute réutilisation, revente ou redistribution du code ou des livrables nécessite un accord écrit préalable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">7. Droit de référence</h2>
              <p>
                Sauf mention contraire, Maxime Dumesny se réserve le droit de mentionner les projets réalisés
                à des fins de communication (portfolio, réseaux sociaux, site web…).
              </p>
              <p className="mt-2">
                Le client peut demander par écrit que son projet ne soit pas référencé publiquement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">8. Annulation et report</h2>
              <p>En cas d&apos;annulation de la part du client :</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Plus de 10 jours avant le début de la prestation : l&apos;acompte est remboursé.</li>
                <li>Moins de 10 jours avant : l&apos;acompte est conservé en compensation.</li>
              </ul>
              <p className="mt-2">Un report est possible selon disponibilité.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">9. Responsabilité</h2>
              <p>
                Maxime Dumesny s&apos;engage à mettre en œuvre tout son savoir-faire pour livrer une
                prestation de qualité conforme au brief convenu.
              </p>
              <p className="mt-2">
                Sa responsabilité ne saurait être engagée en cas de perte, détérioration ou vol de données,
                supports ou matériels externes confiés.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">10. Litiges</h2>
              <p>
                En cas de litige, les parties s&apos;efforceront de résoudre le différend à l&apos;amiable.
                À défaut, le tribunal compétent sera celui du lieu du siège social de Maxime Dumesny.
              </p>
            </section>

            <p className="text-xs text-text-muted pt-6 border-t border-border">
              Document mis à jour le : 15/04/2026
            </p>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
