"use client";

import { useState, useEffect } from "react";
import BentoCard from "../BentoCard";

export default function TimeCard() {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        })
      );
      const h = now.getHours();
      if (h < 7) setGreeting("Nuit blanche ?");
      else if (h < 12) setGreeting("Bon matin !");
      else if (h < 18) setGreeting("Bon apres-midi !");
      else setGreeting("Bonsoir !");
    }
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <BentoCard gridClass="col-span-1" label="Heure locale a Rennes">
      <div className="p-6 h-full flex flex-col items-center justify-center text-center min-h-[180px]">
        <p className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-2">Rennes, FR</p>
        <p className="text-3xl font-bold font-mono text-text tabular-nums">{time || "--:--"}</p>
        <p className="text-sm text-text-muted mt-2">{greeting}</p>
      </div>
    </BentoCard>
  );
}
