import AppShell from "@/components/ui/AppShell";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <AppShell>
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </AppShell>
  );
}
