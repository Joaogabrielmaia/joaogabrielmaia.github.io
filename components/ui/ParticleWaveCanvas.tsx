"use client";

import { useEffect, useRef } from "react";

export function ParticleWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle wave parameters
    const rows = 35;
    const cols = 50;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      step += 0.02;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Calculate wave height using sine & cosine combination
          const x = (width / cols) * i;
          const yBase = (height / rows) * j;
          const dist = Math.sin(i * 0.15 + step) + Math.cos(j * 0.15 + step);
          const y = yBase + dist * 12;

          const size = Math.max(0.8, (dist + 2) * 0.8);
          const alpha = Math.max(0.03, Math.min(0.18, (dist + 2) * 0.06));

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);

          // Subtle lime / dark accent dots
          if ((i + j) % 7 === 0) {
            ctx.fillStyle = `rgba(184, 255, 44, ${alpha * 2})`;
          } else {
            ctx.fillStyle = `rgba(15, 15, 16, ${alpha})`;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
