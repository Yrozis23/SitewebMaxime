"use client";

import ThemeProvider from "@/components/ui/ThemeProvider";

export default function MentionsLegales() {
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

          <h1 className="text-3xl md:text-4xl font-bold text-text mb-12">Mentions légales</h1>

          <div className="space-y-10 text-sm leading-relaxed text-text-secondary">
            <section>
              <h2 className="text-lg font-semibold text-text mb-3">Éditeur du site</h2>
              <p>Maxime Dumesny</p>
              <p>Développeur Web & SaaS — Entrepreneur individuel</p>
              <p>SIRET : 909 828 097 00016</p>
              <p>Bretagne, France</p>
              <p>Email : maximedumesny@gmail.com</p>
              <p>Téléphone : 06 33 91 81 76</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">Hébergement</h2>
              <p>Ce site est hébergé par :</p>
              <p className="mt-1">
                <strong className="text-text">Vercel Inc.</strong><br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723, États-Unis<br />
                Site web : vercel.com
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes, images, code source, design, logos)
                est la propriété exclusive de Maxime Dumesny, sauf mention contraire.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification ou distribution, même partielle,
                sans autorisation écrite préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">Données personnelles</h2>
              <p>
                Ce site ne collecte aucune donnée personnelle de manière automatique (pas de cookies
                de tracking, pas d&apos;outil d&apos;analyse).
              </p>
              <p className="mt-2">
                Les informations transmises via le formulaire de contact (nom, email, message) sont
                uniquement utilisées pour répondre à votre demande. Elles ne sont ni stockées en base
                de données, ni transmises à des tiers.
              </p>
              <p className="mt-2">
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
                suppression de vos données. Pour exercer ces droits, contactez : maximedumesny@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">Responsabilité</h2>
              <p>
                Maxime Dumesny s&apos;efforce de fournir des informations exactes et à jour sur ce site.
                Toutefois, il ne saurait être tenu responsable des erreurs, omissions ou résultats
                qui pourraient être obtenus par un mauvais usage de ces informations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text mb-3">Crédits</h2>
              <p>Site conçu et développé par Maxime Dumesny.</p>
              <p>Technologies : Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js.</p>
            </section>

            <p className="text-xs text-text-muted pt-6 border-t border-border">
              Dernière mise à jour : 15/04/2026
            </p>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
