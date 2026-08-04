import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleWaveCanvas } from "@/components/ui/ParticleWaveCanvas";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-[#B8FF2C] selection:text-[#0F0F10] relative">
      {/* Background Animated Particle Wave Grid */}
      <ParticleWaveCanvas />

      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
