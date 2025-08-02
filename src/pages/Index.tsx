import React from "react";
import { StarfieldBackground } from "@/components/StarfieldBackground";
import { PlanetSkills } from "@/components/PlanetSkills";
import { CertificatesCarousel } from "@/components/CertificatesCarousel";
import { LiveProjects } from "@/components/LiveProjects";
import { AboutMe } from "@/components/AboutMe";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { SciFiFooter } from "@/components/SciFiFooter";
import { TypingAnimation } from "@/components/TypingAnimation";

const Index = () => {
  const handleDownloadResume = () => {
    // Open the Google Drive resume link in a new tab
    window.open('https://drive.google.com/file/d/1gxNWnB1Wx_-xa0QvNHDIpCRX5137HrdT/view?usp=sharing', '_blank');
  };

  return (
    <div className="relative min-h-screen bg-cosmic text-white overflow-x-clip">
      <StarfieldBackground />
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center py-32 z-10">
        <h1 className="font-orbitron text-4xl md:text-6xl tracking-wide mb-4 text-white text-center drop-shadow-lg animate-glow">
          <span className="text-neonblue drop-shadow-glow">Madhu's </span>
          <span className="bg-gradient-to-r from-neonblue via-neonpink via-30% to-neongreen text-transparent bg-clip-text glow-hero shadow font-extrabold">
            Skillverse
          </span>
        </h1>
        <div className="mb-8 p-4 bg-galaxypurple/20 rounded-xl border border-neonpink/30 backdrop-blur-sm">
          <TypingAnimation text="I'm a Full Stack Developer" speed={150} delay={3000} />
        </div>
        <p className="text-neonblue text-lg mb-5 font-orbitron">Explore my universe. Each planet, a skill. Each moon, a project.</p>
        <div className="w-full flex items-center justify-center gap-4 mt-6 flex-wrap">
          <a href="#contact" className="relative z-10 font-orbitron px-7 py-3 text-neonblue rounded-full border-2 border-neonblue hover:bg-neonblue hover:text-white transition-all shadow-glow">Contact Me</a>
          <button
            onClick={handleDownloadResume}
            className="relative z-10 font-orbitron px-7 py-3 text-neonblue rounded-full border-2 border-neonblue hover:bg-neonblue hover:text-white transition-all shadow-glow group"
          >
            <span className="flex items-center gap-2">
              Resume
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
            </span>
          </button>
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
