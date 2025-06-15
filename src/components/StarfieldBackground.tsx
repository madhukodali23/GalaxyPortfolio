
import React, { useRef, useEffect } from "react";

const STARCOUNT = 160;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef(
    Array.from({ length: STARCOUNT }, () => ({
      x: randomBetween(0, window.innerWidth),
      y: randomBetween(0, window.innerHeight),
      z: randomBetween(0.1, 1),
      r: randomBetween(0.2, 1.2),
      speed: randomBetween(0.14, 0.7),
      color: ["#fff", "#6c00ff", "#00fff0", "#ff00e0", "#00ff85"][Math.floor(Math.random()*5)],
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let animationFrameId: number;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let s of stars.current) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 6 * s.r;
        ctx.globalAlpha = 0.7 * s.z + 0.3;
        ctx.fill();

        // move stars downward for slight parallax
        s.y += s.speed * s.z;
        if (s.y > canvas.height) {
          s.x = randomBetween(0, canvas.width);
          s.y = 0;
          s.r = randomBetween(0.2, 1.2);
          s.z = randomBetween(0.1, 1);
        }
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden
    />
  );
};
