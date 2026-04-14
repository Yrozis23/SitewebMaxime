"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/constants/content";
import { createLogger } from "@/lib/logger";

const log = createLogger("Contact");

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const links = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Téléphone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { label: "LinkedIn", value: "linkedin.com/in/maximedumesny", href: siteConfig.linkedin },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSending(true);

    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      message: fd.get("message") as string,
    };

    log.info("Contact form submitted", { name: data.name, email: data.email });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        log.warn("Contact API error", json);
        setError(json.error || "Une erreur est survenue.");
        setSending(false);
        return;
      }

      log.info("Contact email sent", { id: json.id });
      setSent(true);
    } catch (err) {
      log.error("Contact fetch error", err);
      setError("Impossible d'envoyer le message. Réessayez plus tard.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 section-padding" aria-label="Contact">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p className="text-sm font-medium tracking-wide mb-3 text-accent">
            Contact
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-text"
          >
            Travaillons ensemble
          </h2>
          <p className="text-lg max-w-2xl mb-16 text-text-secondary">
            Un projet en tête ? Une question ? N&apos;hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="space-y-4"
          >
            {links.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between p-5 rounded-2xl border transition-all duration-200 group bg-bg-card border-border hover:border-accent"
                  aria-label={`${link.label}: ${link.value}${isExternal ? " (nouvelle fenêtre)" : ""}`}
                >
                  <div>
                    <p className="text-xs mb-0.5 text-text-muted">{link.label}</p>
                    <p className="text-sm font-medium text-text">{link.value}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 text-text-muted" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: "easeOut" as const } },
            }}
          >
            {sent ? (
              <div
                className="h-full flex items-center justify-center p-8 rounded-2xl border text-center bg-bg-card border-border"
                role="status"
              >
                <div>
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-accent">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold mb-1 text-text">Message envoyé !</p>
                  <p className="text-sm text-text-muted mb-4">Je vous répondrai rapidement.</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-sm font-medium text-accent hover:text-accent-hover transition-colors cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="c-name" className="block text-sm font-medium mb-1.5 text-text">Nom</label>
                  <input
                    type="text" id="c-name" name="name" required autoComplete="name"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none bg-bg-alt border-border text-text focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm font-medium mb-1.5 text-text">Email</label>
                  <input
                    type="email" id="c-email" name="email" required autoComplete="email"
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none bg-bg-alt border-border text-text focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="c-msg" className="block text-sm font-medium mb-1.5 text-text">Message</label>
                  <textarea
                    id="c-msg" name="message" required rows={5}
                    placeholder="Votre message..."
                    className="w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none resize-none bg-bg-alt border-border text-text focus:border-accent"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500 text-center" role="alert">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed bg-accent"
                >
                  {sending ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
