"use client";

import { motion } from "framer-motion";
import { services } from "@/constants/content";
import { servicePages } from "@/constants/servicePages";
import SectionHeader from "@/components/ui/SectionHeader";

const servicePageBySlug: Record<string, string> = Object.fromEntries(
  servicePages.map((p) => [p.serviceId, p.slug]),
);

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 section-padding" aria-label="Services">
      <div className="max-w-350 mx-auto">
        <SectionHeader
          eyebrow="Services"
          title="Ce que je peux faire pour vous"
          description="Du site vitrine au logiciel métier, une seule personne vous accompagne de l'idée à la mise en ligne."
        />

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-premium rounded-3xl p-7 md:p-9 flex flex-col"
            >
              <span className="font-display text-sm text-accent mb-6" aria-hidden="true">
                0{i + 1}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-text mb-4">{service.title}</h3>
              <p className="text-sm md:text-base leading-relaxed text-text-secondary mb-6">
                {service.description}
              </p>
              <ul className="mt-auto space-y-2.5 pt-6 border-t border-border">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-0.5 shrink-0" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              {servicePageBySlug[service.id] && (
                <a
                  href={`/services/${servicePageBySlug[service.id]}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  En savoir plus
                  <span className="sr-only"> sur {service.title}</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
