"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    const dpr = window.devicePixelRatio || 1;

    const particleCount = 60;
    const particles = Array.from({ length: particleCount }, () => createParticle());

    function createParticle() {
      return {
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0008,
        vy: (Math.random() - 0.5) * 0.0008,
        size: Math.random() * 2 + 0.5,
      };
    }

    function resize() {
      const { clientWidth, clientHeight } = canvas;
      width = clientWidth * dpr;
      height = clientHeight * dpr;
      canvas.width = width;
      canvas.height = height;
      ctx.scale(dpr, dpr);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.fillStyle = "rgba(59,199,212,0.35)";
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > 1) particle.vx *= -1;
        if (particle.y < 0 || particle.y > 1) particle.vy *= -1;
        const px = particle.x * canvas.clientWidth;
        const py = particle.y * canvas.clientHeight;
        ctx.beginPath();
        ctx.arc(px, py, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      // connective lines
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = (p1.x - p2.x) * canvas.clientWidth;
          const dy = (p1.y - p2.y) * canvas.clientHeight;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.globalAlpha = 1 - dist / 160;
            ctx.beginPath();
            ctx.moveTo(p1.x * canvas.clientWidth, p1.y * canvas.clientHeight);
            ctx.lineTo(p2.x * canvas.clientWidth, p2.y * canvas.clientHeight);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animationFrame = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden />;
}
