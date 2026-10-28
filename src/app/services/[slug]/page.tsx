import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { siteConfig, projects } from "@/constants/content";
import { getServicePage, servicePages } from "@/constants/servicePages";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getServicePage((await params).slug);
  if (!page) return {};
  const path = `/services/${page.slug}`;
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function ServicePageView({ params }: PageProps) {
  const page = getServicePage((await params).slug);
  if (!page) notFound();

  const url = `${siteConfig.url}/services/${page.slug}`;
  const related = projects.filter((p) => page.relatedProjects.includes(p.id));
  const others = servicePages.filter((p) => p.slug !== page.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.name,
        description: page.seoDescription,
        url,
        serviceType: page.name,
        areaServed: [{ "@type": "AdministrativeArea", name: siteConfig.location }, { "@type": "Country", name: "France" }],
        provider: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
          { "@type": "ListItem", position: 3, name: page.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <ThemeProvider>
      <main id="main-content" className="min-h-screen section-padding py-24 md:py-32">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-text-muted">
            <a href="/" className="text-accent hover:text-accent-hover transition-colors">Accueil</a>
            <span aria-hidden="true"> / </span>
            <a href="/#services" className="text-accent hover:text-accent-hover transition-colors">Services</a>
            <span aria-hidden="true"> / </span>
            <span>{page.name}</span>
          </nav>

          <h1 className="text-4xl md:text-6xl leading-[1.05] text-text text-balance mb-6">{page.h1}</h1>
          <p className="text-lg leading-relaxed text-text-secondary mb-12">{page.intro}</p>

          <section className="mb-14" aria-labelledby="for-whom">
            <h2 id="for-whom" className="text-2xl md:text-3xl text-text mb-5">Pour qui ?</h2>
            <ul className="space-y-3 text-text-secondary">
              {page.forWhom.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-accent mt-1" aria-hidden="true">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14" aria-labelledby="deliverables">
            <h2 id="deliverables" className="text-2xl md:text-3xl text-text mb-6">Ce que vous obtenez</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {page.deliverables.map((d) => (
                <article key={d.title} className="card-premium rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-text mb-2">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{d.description}</p>
                </article>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section className="mb-14" aria-labelledby="related">
              <h2 id="related" className="text-2xl md:text-3xl text-text mb-5">Réalisations associées</h2>
              <ul className="space-y-4">
                {related.map((p) => (
                  <li key={p.id}>
                    <p className="font-semibold text-text">{p.name}</p>
                    <p className="text-sm leading-relaxed text-text-secondary">{p.description}</p>
                  </li>
                ))}
              </ul>
              <a href="/#projects" className="inline-block mt-5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors">
                Voir tous les projets
              </a>
            </section>
          )}

          <section className="mb-14" aria-labelledby="faq">
            <h2 id="faq" className="text-2xl md:text-3xl text-text mb-6">Questions fréquentes</h2>
            <div className="space-y-6">
              {page.faq.map((f) => (
                <div key={f.question}>
                  <h3 className="text-lg font-semibold text-text mb-2">{f.question}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="card-premium rounded-3xl p-8 md:p-10 text-center mb-14" aria-labelledby="cta">
            <h2 id="cta" className="text-2xl md:text-3xl text-text mb-3">Parlons de votre projet</h2>
            <p className="text-text-secondary mb-6">Un échange pour comprendre votre besoin, puis un devis détaillé.</p>
            <a
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full text-sm font-semibold text-white bg-accent transition-all hover:brightness-110"
            >
              Demander un devis
            </a>
          </section>

          <nav aria-label="Autres services" className="text-sm text-text-muted">
            <p className="mb-2">Autres services :</p>
            <ul className="space-y-1">
              {others.map((o) => (
                <li key={o.slug}>
                  <a href={`/services/${o.slug}`} className="text-accent hover:text-accent-hover transition-colors">{o.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </ThemeProvider>
  );
}
