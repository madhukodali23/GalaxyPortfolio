
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsModal } from "./ProjectsModal";
import { cn } from "@/lib/utils";

const planetSkills = [
  {
    name: "HTML",
    color: "neonpink",
    orbitSize: 125,
    icon: "🌐",
  },
  {
    name: "CSS",
    color: "neonblue",
    orbitSize: 140,
    icon: "🎨",
  },
  {
    name: "JavaScript",
    color: "neonyellow",
    orbitSize: 170,
    icon: "🟨",
  },
  {
    name: "Python",
    color: "neonpurple",
    orbitSize: 220,
    icon: "🐍",
  },
  {
    name: "MongoDB",
    color: "neongreen",
    orbitSize: 185,
    icon: "🍃",
  },
  {
    name: "SQL",
    color: "neonblue",
    orbitSize: 150,
    icon: "💾",
  },
  {
    name: "SQLite",
    color: "neonpurple",
    orbitSize: 120,
    icon: "🗄️",
  },
  {
    name: "Express",
    color: "neonblue",
    orbitSize: 160,
    icon: "🚂",
  },
  {
    name: "Node.js",
    color: "neongreen",
    orbitSize: 195,
    icon: "🟩",
  },
  {
    name: "React",
    color: "neonblue",
    orbitSize: 210,
    icon: "⚛️",
  },
  {
    name: "Git",
    color: "neonpink",
    orbitSize: 135,
    icon: "🌱",
  },
  {
    name: "GitHub",
    color: "neonpurple",
    orbitSize: 110,
    icon: "🐙",
  },
];

const planetBase =
  "rounded-full shadow-lg border-4 flex items-center justify-center font-orbitron font-bold cursor-pointer select-none transition-all duration-300 hover:scale-110";

export const PlanetSkills: React.FC = () => {
  const [modalSkill, setModalSkill] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const speed = 0.25;
    let animationFrame: number;
    const update = () => {
      setElapsed((prev) => prev + speed / 60);
      animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Set new size for the circular cosmic core
  const coreSize = 220; // px, reduced from before
  const labelOffset = 20;

  return (
    <div className="relative flex items-center justify-center mt-16 mb-28 min-h-[440px]">
      {/* Central Cosmic Core */}
      <div className="relative z-30 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.09, 1],
            boxShadow: [
              "0 0 38px #6c00ff",
              "0 0 80px #00fff0,0 0 38px #ff00e0",
              "0 0 38px #6c00ff",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className={cn(
            "bg-galaxypurple border-4 border-neonblue text-neonblue font-orbitron text-3xl sm:text-4xl md:text-5xl select-none",
            "rounded-full flex items-center justify-center shadow-[0px_0px_48px_12px_#00fff0]",
          )}
          style={{
            width: coreSize,
            height: coreSize,
          }}
        >
          <span className="drop-shadow-glow">Skillverse</span>
        </motion.div>
        <span
          className="uppercase tracking-widest mt-5 text-sm text-neonblue/80 font-orbitron text-center"
          style={{ marginTop: labelOffset }}
        >
          The Cosmic Core
        </span>
      </div>
      {/* Planets with orbits */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none select-none z-10"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {planetSkills.map((planet, i) => {
          // Adjusted to fit new core size
          const orbitSpeed = 0.6 + (planet.orbitSize % 5) * 0.04;
          const angleOffset = (2 * Math.PI * i) / planetSkills.length;
          const angle = elapsed * orbitSpeed + angleOffset;
          const orbitRadius = planet.orbitSize * 0.75 + coreSize / 2; // shrink & move out

          const x = Math.cos(angle) * orbitRadius;
          const y = Math.sin(angle) * orbitRadius;
          return (
            <motion.div
              key={planet.name}
              animate={{ x, y }}
              transition={{ type: "linear", duration: 0.2 }}
              className="absolute"
              style={{ left: "50%", top: "50%" }}
            >
              {/* Orbit Outline */}
              <div
                className="absolute -z-10 rounded-full border-dashed border-2 border-neonblue pointer-events-none"
                style={{
                  width: orbitRadius * 2 + 40,
                  height: orbitRadius * 2 + 40,
                  left: `-${orbitRadius + 20}px`,
                  top: `-${orbitRadius + 20}px`,
                }}
              />
              {/* Planet */}
              <motion.div
                whileHover={{
                  scale: 1.2,
                  boxShadow: `0 0 44px 8px var(--${planet.color},#00fff0)`,
                }}
                whileTap={{ scale: 0.98, rotate: 12 }}
                onClick={() => setModalSkill(planet.name)}
                className={cn(
                  planetBase,
                  `bg-${planet.color} text-white border-${planet.color}`
                )}
                style={{ width: 54, height: 54, pointerEvents: "auto" }}
              >
                <span className="text-2xl">{planet.icon}</span>
              </motion.div>
              {/* Label */}
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap font-orbitron text-xs text-white glow-block">
                {planet.name}
              </span>
            </motion.div>
          );
        })}
      </div>
      {/* Projects Modal */}
      <AnimatePresence>
        {modalSkill && (
          <ProjectsModal skill={modalSkill} onClose={() => setModalSkill(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};
