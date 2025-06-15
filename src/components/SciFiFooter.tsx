
import React from "react";

export const SciFiFooter: React.FC = () => {
  return (
    <footer className="pt-7 pb-9 w-full flex flex-col items-center bg-gradient-to-br from-black via-galaxypurple to-cosmic text-white relative z-20 select-none">
      <div className="flex items-center gap-3">
        <span className="font-orbitron text-xs text-neonblue animate-glow">© {new Date().getFullYear()} Madhu Kanth</span>
        <span className="font-orbitron text-xs text-neonpink">|</span>
        <span className="text-xs font-orbitron text-neonpink animate-glow">Skillverse · Cosmic vibes crafted in code</span>
      </div>
      <div className="mt-3 text-[10px] text-neonblue/60 font-orbitron">Built with React · Tailwind</div>
    </footer>
  );
};
