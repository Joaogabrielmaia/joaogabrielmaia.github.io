"use client";

import { useEffect, useRef } from "react";

const ACCENT = "242, 154, 15"; // laranja #F29A0F
let INK = "40, 40, 40"; // atualizado a partir de --ink-rgb (muda com o tema)
const LINK_DIST = 140;
const MOUSE_DIST = 190;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/**
 * Constelação viva: nós à deriva ligados por linhas finas. O cursor
 * atrai os nós próximos e acende ligações até ele, e o fundo respira com
 * pulsos suaves, combinando com o hero de papel e laranja.
 */
export function ParticleWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.floor((width * height) / 18000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.01;
      if (Math.round(t * 100) % 30 === 0) {
        INK = getComputedStyle(document.documentElement).getPropertyValue("--ink-rgb").trim() || INK;
      }

      for (const n of nodes) {
        // atração suave ao cursor
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const md = Math.hypot(mdx, mdy);
        if (md < MOUSE_DIST && md > 1) {
          const f = (1 - md / MOUSE_DIST) * 0.02;
          n.vx += (mdx / md) * f;
          n.vy += (mdy / md) * f;
        }
        // amortecimento + velocidade mínima de deriva
        n.vx *= 0.99;
        n.vy *= 0.99;
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
        }
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(${INK}, ${(1 - d / LINK_DIST) * 0.12})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < MOUSE_DIST) {
          ctx.strokeStyle = `rgba(${ACCENT}, ${(1 - md / MOUSE_DIST) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + i);
        ctx.fillStyle = i % 6 === 0 ? `rgba(${ACCENT}, ${0.35 + pulse * 0.4})` : `rgba(${INK}, ${0.12 + pulse * 0.2})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r + (md < MOUSE_DIST ? 1 : 0), 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduceMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 h-full w-full pointer-events-none z-0"
    />
  );
}
