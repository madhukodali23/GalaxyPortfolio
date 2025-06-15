
import React from "react";
import { Rocket, GraduationCap, Brain } from "lucide-react";

const milestones = [
  {
    year: "2022",
    icon: <GraduationCap size={32} className="text-neonblue drop-shadow-glow" />,
    title: "New Beginnings: Joined College",
    desc: "Started my B.Tech journey in CSE at SR Gudlavalleru Engineering College.",
    color: "from-neonblue to-neonpink",
  },
  {
    year: "2023",
    icon: <Rocket size={32} className="text-neonpurple drop-shadow-glow" />,
    title: "First Launch: HTML, CSS, Bootstrap & JS",
    desc: "Dove into web development with HTML & CSS. Began exploring Bootstrap for faster layouts and started learning JavaScript fundamentals.",
    color: "from-neonpurple to-neongreen",
  },
  {
    year: "2024",
    icon: (
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neonpink/10">
        💾
      </span>
    ),
    title: "Backend Foray: SQL, Modern JS, Express & Node.js",
    desc: "Expanded into backend with SQL databases, learned modern JavaScript (ES6+), and built APIs using Express and Node.js.",
    color: "from-neonpink to-neongreen",
  },
  {
    year: "2025",
    icon: <Brain size={32} className="text-neongreen drop-shadow-glow" />,
    title: "Mastery Level: React & Data Structures",
    desc: "Mastered React for building dynamic UIs and focused on Data Structures for deeper programming expertise.",
    color: "from-neongreen to-neonblue",
  },
];

export const Timeline: React.FC = () => {
  return (
    <section className="w-full mt-12 mb-16 flex flex-col items-center px-1">
      <h2 className="font-orbitron text-xl text-neonblue mb-8">Timeline</h2>
      <div className="flex flex-wrap justify-center items-center w-full max-w-3xl gap-1 md:gap-3">
        {milestones.map((step, i) => (
          <div className="flex flex-col items-center" key={step.year}>
            <div className="h-24 flex flex-col items-center justify-end">
              <div className="rounded-full bg-galaxypurple border-2 border-neonblue w-12 h-12 flex items-center justify-center text-2xl animate-float">
                {step.icon}
              </div>
              <div className="mt-3 font-bold font-orbitron text-white text-xs text-center w-16">
                {step.year}
              </div>
            </div>
            {i !== milestones.length - 1 && (
              <div className="hidden md:block w-[80px] h-[2px] bg-gradient-to-r from-neonblue to-neonpink opacity-60 mt-6" />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center mt-6 max-w-4xl w-full">
        {milestones.map((step, i) => (
          <div
            className={`bg-galaxypurple border-2 border-neonblue rounded-xl px-4 py-4 font-orbitron text-sm min-w-[230px] max-w-xs shadow-glow transition animate-glow hover:border-neonpink w-full md:w-auto`}
            key={step.title}
            style={{
              background:
                "linear-gradient(135deg, rgba(25,24,46,0.90) 70%, rgba(0,255,240,0.05) 100%)",
              boxShadow:
                "0 0 10px 2px var(--tw-shadow-color, #00fff0), 0 0 0 3px rgba(0,255,240,0.12)",
            }}
          >
            <div className={`font-bold mb-1 text-base text-transparent bg-clip-text bg-gradient-to-r ${step.color} drop-shadow-glow`}>
              {step.title}
            </div>
            <div className="text-xs font-bold text-neonblue mb-2 tracking-wide">{step.year}</div>
            <div className="text-white/90">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

