import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Github } from "lucide-react";

const demoProjects = {
  HTML: [
    {
      name: "Portfolio Starter",
      description: "A basic personal site template using HTML+CSS.",
      tech: ["HTML", "CSS"],
      emoji: "🌐",
      color: "neonpink",
      live: "#",
      github: "#",
      screenshot: "https://placehold.co/160x100/300/fff?text=HTML+Demo"
    }
  ],
  React: [
    {
      name: "Space Dashboard",
      description: "Animated cosmic UI with React & Framer Motion.",
      tech: ["React", "JS", "Framer Motion"],
      emoji: "⚛️",
      color: "neonblue",
      live: "#",
      github: "#",
      screenshot: "https://placehold.co/160x100/222/fff?text=React+Demo"
    }
  ],
  Python: [
    {
      name: "DataVerse",
      description: "Data analysis tool using Python & Plotly.",
      tech: ["Python"],
      emoji: "🐍",
      color: "neonpurple",
      live: "#",
      github: "#",
      screenshot: "https://placehold.co/160x100/550/fff?text=Py+Demo"
    }
  ],
  // More skills/projects as needed...
};

export const ProjectsModal: React.FC<{ skill: string; onClose: () => void }> = ({
  skill,
  onClose,
}) => {
  const projects = demoProjects[skill as keyof typeof demoProjects] ?? [];
  return (
    <Dialog open onOpenChange={() => onClose()}>
      <DialogContent className="max-w-xl bg-zinc-900 border-neonblue">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-xl">{skill} Projects</span>
            <span className="text-2xl">{projects[0]?.emoji ?? ""}</span>
          </DialogTitle>
          <DialogDescription className="text-white/80">
            Explore “moons” (mini-projects) of this planet!
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
          {projects.length === 0 && <span className="italic text-sm text-white/50">No projects yet (coming soon!)</span>}
          {projects.map((proj) => (
            <div
              key={proj.name}
              className={`rounded-xl border-2 bg-gradient-to-br from-${proj.color} to-zinc-800 p-3 shadow-lg hover:scale-105 transition transform`}
            >
              <img
                src={proj.screenshot}
                alt={proj.name + " screenshot"}
                className="rounded-lg object-cover w-full h-24 mb-2 border"
              />
              <div className="flex justify-between items-center mb-1 font-bold">
                <span>{proj.name}</span>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-neonblue">
                  <Github size={20} />
                </a>
              </div>
              <div className="text-xs text-zinc-100 mb-1">{proj.description}</div>
              <div className="flex flex-wrap gap-1 mt-1">
                {proj.tech.map((t) => (
                  <span key={t} className={`bg-black/40 px-2 py-1 rounded font-mono text-xs border border-${proj.color}`}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`block mt-2 underline text-xs text-${proj.color} hover:text-white`}
              >
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
