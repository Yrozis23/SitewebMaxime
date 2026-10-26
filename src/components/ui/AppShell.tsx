"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import ThemeProvider from "@/components/ui/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import SettingsPanel from "@/components/ui/SettingsPanel";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <Navbar onOpenSettings={() => setSettingsOpen(true)} />
        <SettingsPanel isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
        {children}
      </ThemeProvider>
    </MotionConfig>
  );
}
