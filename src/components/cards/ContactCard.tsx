"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";
import { siteConfig } from "@/constants/content";

const links = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: "@" },
  { label: "LinkedIn", value: "LinkedIn", href: siteConfig.linkedin, icon: "in" },
  { label: "GitHub", value: "GitHub", href: siteConfig.github, icon: "gh" },
  { label: "Tel", value: siteConfig.phone, href: siteConfig.phoneHref, icon: "tel" },
];

export default function ContactCard() {
  return (
    <BentoCard gridClass="col-span-2 md:col-span-2" label="Contact">
      <div className="p-6 md:p-8 h-full min-h-[180px]">
        <p className="text-[11px] font-mono uppercase tracking-widest text-contact mb-5">Contact</p>

        <div className="grid grid-cols-2 gap-3">
          {links.map((link, i) => {
            const isExternal = link.href.startsWith("http");
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-contact/25 hover:bg-white/[0.05] transition-all group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                aria-label={`${link.label}: ${link.value}`}
              >
                <div className="w-8 h-8 rounded-lg bg-contact/10 text-contact text-xs font-bold flex items-center justify-center group-hover:bg-contact/20 transition-colors shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-text-muted">{link.label}</p>
                  <p className="text-sm font-medium truncate">{link.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </BentoCard>
  );
}
