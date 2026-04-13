"use client";

import BentoCard from "../BentoCard";

export default function AboutCard() {
  return (
    <BentoCard gridClass="col-span-2 md:col-span-1" label="A propos de Maxime Dumesny">
      <div className="p-6 h-full flex flex-col justify-between min-h-[200px]">
        <div>
          <p className="text-[11px] font-mono uppercase tracking-widest text-medical mb-4">A propos</p>
          <p className="text-sm text-text-muted leading-relaxed">
            Je concois des logiciels modernes et intuitifs pour les professionnels
            de sante. Le milieu medical merite des outils a la hauteur de ses
            enjeux : fiables, rapides, et agreables a utiliser au quotidien.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-4">
          {/* Stylized avatar */}
          <div className="w-12 h-12 rounded-xl bg-linear-to-br from-accent to-medical flex items-center justify-center text-white font-bold text-lg shrink-0">
            MD
          </div>
          <div>
            <p className="text-sm font-semibold">Maxime Dumesny</p>
            <p className="text-xs text-text-muted">Rennes, Bretagne</p>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
