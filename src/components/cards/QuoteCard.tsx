"use client";

import BentoCard from "../BentoCard";

export default function QuoteCard() {
  return (
    <BentoCard gridClass="col-span-2 md:col-span-1" label="Citation">
      <div className="p-6 h-full flex items-center justify-center min-h-[140px]">
        <blockquote className="text-center">
          <p className="text-base md:text-lg italic text-text-muted leading-relaxed">
            &ldquo;Le meilleur logiciel est celui qu&apos;on oublie qu&apos;on utilise.&rdquo;
          </p>
        </blockquote>
      </div>
    </BentoCard>
  );
}
