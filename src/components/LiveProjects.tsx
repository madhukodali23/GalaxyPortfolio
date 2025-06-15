
import React from "react";
import { Link as LinkIcon } from "lucide-react";

const projects = [
  {
    title: "Portfolio Universe",
    description: "A React projects portfolio web app.",
    live: "https://kmadhuportfolio.ccbp.tech"
  },
  {
    title: "Food Munch",
    description: "A live food ordering web app built with HTML, CSS, and JS.",
    live: "https://foodiepoint.ccbp.tech"
  },
  {
    title: "Today Checklist",
    description: "A todo app built with HTML, CSS, JS, and local storage functionality.",
    live: "https://todaychecklist.ccbp.tech"
  },
  {
    title: "Nature Gallery",
    description: "A nature photo gallery web app built with React.",
    live: "https://madhukgallery.ccbp.tech"
  },
  {
    title: "App Store",
    description: "Web apps store using React, implemented search functionality.",
    live: "https://madhukappstore.ccbp.tech"
  }
];

export const LiveProjects: React.FC = () => (
  <section className="relative w-full max-w-4xl mx-auto z-10 px-4 sm:px-0 mt-14 mb-4">
    <h2 className="text-3xl md:text-4xl font-orbitron text-center font-bold mb-8 text-neonblue animate-glow uppercase tracking-wider">
      Live Projects
    </h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.title}
          className="rounded-xl bg-gradient-to-br from-neonblue/40 via-zinc-900 to-cosmic shadow-xl border-2 border-neonblue/60 backdrop-blur-md p-5 flex flex-col space-y-2 hover:scale-105 transition-transform"
        >
          <h3 className="text-lg font-orbitron font-medium text-neonblue mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-white/90 flex-1">{project.description}</p>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-neonpink/90 hover:text-neonblue font-semibold underline group mt-2"
          >
            <LinkIcon size={18} className="group-hover:scale-110 transition-transform" />
            Live
          </a>
        </div>
      ))}
    </div>
  </section>
);
