"use client";

import { useState } from "react";
import ThemeProvider from "@/components/ui/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import SettingsPanel from "@/components/ui/SettingsPanel";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [settingsOpen, setSettingsOpen] = useState(true);

  return (
    <ThemeProvider>
      <Navbar onOpenSettings={() => setSettingsOpen(true)} />
      <SettingsPanel isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />

      <main id="main-content" role="main">
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}
