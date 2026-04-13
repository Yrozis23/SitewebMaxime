"use client";

import BentoCard from "../BentoCard";
import { sideProjects } from "@/constants/content";

export default function SideProjectsCard() {
  return (
    <BentoCard gridClass="col-span-2 md:col-span-1" label="Side projects">
      <div className="p-6 h-full flex flex-col min-h-[200px]">
        <p className="text-[11px] font-mono uppercase tracking-widest text-side mb-4">Side Projects</p>

        <div className="space-y-3 flex-1">
          {sideProjects.map((p) => (
            <div
              key={p.name}
              className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold">{p.name}</p>
                <span className="text-[10px] text-side bg-side/10 px-2 py-0.5 rounded-full">{p.status}</span>
              </div>
              <p className="text-xs text-text-muted">{p.description}</p>
            </div>
          ))}

          <div className="p-3 rounded-xl border border-dashed border-white/10 text-center">
            <p className="text-xs text-text-muted/50">D&apos;autres arrivent...</p>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
