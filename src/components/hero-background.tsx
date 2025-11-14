"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasEl: HTMLCanvasElement = canvas;
    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;
    const context: CanvasRenderingContext2D = ctx;

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
      const { clientWidth, clientHeight } = canvasEl;
      width = clientWidth * dpr;
      height = clientHeight * dpr;
      canvasEl.width = width;
      canvasEl.height = height;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
    }

    function draw() {
      context.clearRect(0, 0, canvasEl.clientWidth, canvasEl.clientHeight);
      context.fillStyle = "rgba(59,199,212,0.35)";
      context.strokeStyle = "rgba(255,255,255,0.15)";
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > 1) particle.vx *= -1;
        if (particle.y < 0 || particle.y > 1) particle.vy *= -1;
        const px = particle.x * canvasEl.clientWidth;
        const py = particle.y * canvasEl.clientHeight;
        context.beginPath();
        context.arc(px, py, particle.size, 0, Math.PI * 2);
        context.fill();
      });
      // connective lines
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = (p1.x - p2.x) * canvasEl.clientWidth;
          const dy = (p1.y - p2.y) * canvasEl.clientHeight;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            context.globalAlpha = 1 - dist / 160;
            context.beginPath();
            context.moveTo(p1.x * canvasEl.clientWidth, p1.y * canvasEl.clientHeight);
            context.lineTo(p2.x * canvasEl.clientWidth, p2.y * canvasEl.clientHeight);
            context.stroke();
            context.globalAlpha = 1;
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
