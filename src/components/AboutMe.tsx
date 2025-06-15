
import React from "react";

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="w-full flex flex-col items-center pt-36 pb-12 relative">
      <div className="flex flex-col items-center gap-6 bg-galaxypurple/60 rounded-2xl p-10 shadow-lg w-full max-w-2xl border border-neonblue backdrop-blur-md animate-float">
        <img src="https://placehold.co/96x96/f4f4f4/2c2c2c?text=MK" alt="Madhu's avatar" className="rounded-full w-24 h-24 border-4 border-neonblue shadow-neonpurple" />
        <h2 className="font-orbitron text-2xl text-neonblue">About Me</h2>
        <div className="text-lg text-white text-center leading-relaxed">
          <span className="font-bold text-neonblue">I'm Madhu Kanth</span> — a passionate full stack developer on a mission to turn ideas into immersive web experiences.<br />
          <span className="text-neonpink">I'm not just a developer, I'm a universe in motion.</span>
          <br />
          I believe{" "}
          <span className="font-extrabold italic text-white">
            great code tells a story
          </span>
          {", and I'm writing mine in JS, Python, Node.js, and React."}
        </div>
        <div className="bg-neonblue/20 border border-neonblue rounded-xl text-sm px-4 py-2 mt-1 text-white font-orbitron">{'🎓'} B.Tech CSE @ SR Gudlavalleru | CGPA: 9.27</div>
      </div>
    </section>
  );
}
