import React from "react";
import { StarfieldBackground } from "@/components/StarfieldBackground";
import { PlanetSkills } from "@/components/PlanetSkills";
import { CertificatesCarousel } from "@/components/CertificatesCarousel";
import { LiveProjects } from "@/components/LiveProjects";
import { AboutMe } from "@/components/AboutMe";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { SciFiFooter } from "@/components/SciFiFooter";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-cosmic text-white overflow-x-clip">
      <StarfieldBackground />
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center py-32 z-10">
        <h1 className="font-orbitron text-4xl md:text-6xl tracking-wide mb-4 text-white text-center drop-shadow-lg animate-glow">
          <span className="text-neonblue drop-shadow-glow">Madhu’s </span>
          <span className="bg-gradient-to-r from-neonblue via-neonpink via-30% to-neongreen text-transparent bg-clip-text glow-hero shadow font-extrabold">
            Skillverse
          </span>
        </h1>
        <p className="text-neonblue/90 text-lg mb-5 font-orbitron">Explore my universe. Each planet, a skill. Each moon, a project.</p>
        <div className="w-full flex items-center justify-center mt-6">
          <a href="#contact" className="relative z-10 font-orbitron px-7 py-3 text-neonblue rounded-full border-2 border-neonblue hover:bg-neonblue hover:text-white transition-all shadow-glow animate-float">Contact Me</a>
        </div>
      </section>
      {/* PLANETS/SKILLS SECTION */}
      <PlanetSkills />
      {/* CERTIFICATES CAROUSEL ADDED BACK */}
      <CertificatesCarousel />
      {/* LIVE PROJECTS - NEW SECTION */}
      <LiveProjects />
      {/* ABOUT ME */}
      <AboutMe />
      {/* TIMELINE */}
      <Timeline />
      {/* CONTACT */}
      <Contact />
      {/* FOOTER */}
      <SciFiFooter />
    </div>
  );
};

export default Index;
