"use client";

import { motion } from "framer-motion";

const appointments = [
  { time: "09:00", name: "Luna", act: "Castration", color: "bg-emerald-400/20 text-emerald-300" },
  { time: "09:30", name: "Max", act: "Vaccin annuel", color: "bg-amber-400/15 text-amber-300" },
  { time: "10:00", name: "Bella", act: "Détartrage", color: "bg-emerald-400/10 text-emerald-200" },
  { time: "10:30", name: "Rex", act: "Bilan sanguin", color: "bg-rose-400/10 text-rose-200" },
];

const mobileAppointments = appointments.slice(0, 3);

const navItems = [
  { label: "Agenda", active: true },
  { label: "Clients", active: false },
  { label: "Patients", active: false },
  { label: "Facturation", active: false },
  { label: "Stock", active: false },
];

const viewport = { once: true, margin: "-50px" };

export default function VetCareMockup() {
  return (
    <div className="relative w-full h-full min-h-52 md:min-h-125 rounded-xl overflow-hidden bg-[#0f1117] p-3 md:p-5 select-none" aria-hidden="true">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 mb-2 md:mb-4">
        <div className="flex gap-1">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-2 md:mx-4">
          <div className="bg-[#1a1d27] rounded-md md:rounded-lg px-2 md:px-4 py-1 text-[8px] md:text-[11px] text-gray-400 text-center font-mono truncate">
            vetcare.maximedumesny.fr/agenda
          </div>
        </div>
      </div>

      <div className="flex gap-2 md:gap-4 h-[calc(100%-32px)] md:h-[calc(100%-40px)]">
        {/* Sidebar — desktop only */}
        <div className="hidden md:flex flex-col w-32 shrink-0">
          <div className="mb-5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <span className="text-emerald-400 text-xs font-bold">VC</span>
            </div>
          </div>
          <nav className="space-y-1.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs ${
                  item.active
                    ? "bg-emerald-500/10 text-emerald-400 font-semibold"
                    : "text-gray-500"
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${item.active ? "bg-emerald-400" : "bg-transparent"}`} />
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 space-y-2 md:space-y-3 overflow-hidden">
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-3 gap-1.5 md:gap-2"
          >
            {[
              { value: "18", label: "RDV" },
              { value: "142", label: "Patients" },
              { value: "3 240", label: "€ / mois" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#1a1d27] rounded-md md:rounded-lg p-1.5 md:p-3 text-center">
                <p className="text-xs md:text-lg font-bold text-emerald-400">{stat.value}</p>
                <p className="text-[7px] md:text-[10px] text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Agenda */}
          <div className="bg-[#1a1d27] rounded-lg md:rounded-xl p-2 md:p-4 flex-1">
            <div className="flex items-center justify-between mb-1.5 md:mb-3">
              <p className="text-[9px] md:text-xs font-semibold text-gray-300">Mardi 3 avril 2025</p>
              <div className="flex gap-1">
                <div className="w-4 md:w-7 h-2 md:h-3.5 rounded-full bg-emerald-500/40" />
                <div className="w-4 md:w-7 h-2 md:h-3.5 rounded-full bg-gray-600/40" />
              </div>
            </div>

            {/* Mobile: fewer items */}
            <div className="space-y-1 md:hidden">
              {mobileAppointments.map((apt, i) => (
                <motion.div
                  key={apt.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.35 }}
                  className="flex items-center gap-1.5"
                >
                  <span className="text-[8px] text-gray-500 w-6 shrink-0 font-mono">{apt.time}</span>
                  <div className={`flex-1 px-2 py-1 rounded-md text-[9px] font-medium ${apt.color}`}>
                    {apt.name} — {apt.act}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: all items */}
            <div className="hidden md:block space-y-2">
              {appointments.map((apt, i) => (
                <motion.div
                  key={apt.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.35 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[11px] text-gray-500 w-9 shrink-0 font-mono">{apt.time}</span>
                  <div className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium ${apt.color}`}>
                    {apt.name} — {apt.act}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating toast — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="hidden md:flex absolute top-18 left-5 bg-[#1a1d27] border border-gray-700/50 rounded-xl px-3.5 py-2.5 items-center gap-2.5 shadow-xl"
      >
        <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-gray-200">Facture envoyée</p>
          <p className="text-[9px] text-gray-500">il y a 2 min</p>
        </div>
      </motion.div>

      {/* Floating revenue card — desktop only */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="hidden md:block absolute bottom-6 right-6 bg-[#1a1d27] border border-gray-700/50 rounded-xl px-4 py-3 shadow-xl"
      >
        <p className="text-[10px] text-gray-400 mb-1">Chiffre d&apos;affaires — avril</p>
        <p className="text-lg font-bold text-gray-100">3 240 €</p>
        <div className="flex gap-0.5 mt-1.5">
          {[3, 4, 6, 8, 7, 9].map((h, i) => (
            <div
              key={i}
              className="w-2.5 rounded-sm"
              style={{
                height: `${h * 3}px`,
                background: i >= 3 ? "#34d399" : "#34d39960",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
