"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  color: string;
  shape: "square" | "flag" | "streak" | "circle";
  opacity: number;
  life: number;
  maxLife: number;
}

const COLORS = [
  "#E30613",
  "#B8050F",
  "#FF1A1A",
  "#ffffff",
  "#111111",
  "#333333",
  "#ff4444",
  "#cc0000",
];

export default function RacingConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const audio = new Audio("/sound-effect.mp3");
    audio.volume = 0.8;
    audio.play().catch(() => {});

    let animationId: number;
    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function createBurst(count: number, originX: number, originY: number) {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = 4 + Math.random() * 10;
        const shapes: Particle["shape"][] = ["square", "flag", "streak", "circle"];
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.3,
          size: 4 + Math.random() * 10,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          opacity: 1,
          life: 0,
          maxLife: 80 + Math.random() * 60,
        });
      }
    }

    function createCheckeredFlags(count: number) {
      if (!canvas) return;
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        particles.push({
          x,
          y: -20 - Math.random() * 200,
          vx: (Math.random() - 0.5) * 2,
          vy: 2 + Math.random() * 3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          size: 12 + Math.random() * 8,
          color: Math.random() > 0.5 ? "#111111" : "#ffffff",
          shape: "flag",
          opacity: 1,
          life: 0,
          maxLife: 120 + Math.random() * 60,
        });
      }
    }

    function createSpeedStreaks(count: number) {
      if (!canvas) return;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: -20,
          y: Math.random() * canvas.height,
          vx: 15 + Math.random() * 20,
          vy: (Math.random() - 0.5) * 2,
          rotation: 0,
          rotationSpeed: 0,
          size: 20 + Math.random() * 40,
          color: COLORS[Math.floor(Math.random() * 3)],
          shape: "streak",
          opacity: 0.8,
          life: 0,
          maxLife: 40 + Math.random() * 20,
        });
      }
    }

    // Initial explosion from multiple points
    setTimeout(() => {
      if (!canvas) return;
      createBurst(60, canvas.width / 2, canvas.height / 3);
      createBurst(30, canvas.width * 0.25, canvas.height * 0.4);
      createBurst(30, canvas.width * 0.75, canvas.height * 0.4);
    }, 100);

    // Checkered flag confetti rain
    setTimeout(() => createCheckeredFlags(40), 300);

    // Speed streaks
    setTimeout(() => createSpeedStreaks(8), 500);
    setTimeout(() => createSpeedStreaks(6), 900);

    // Second wave
    setTimeout(() => {
      if (!canvas) return;
      createBurst(30, canvas.width / 2, canvas.height / 2);
      createCheckeredFlags(20);
    }, 1200);

    function drawParticle(ctx: CanvasRenderingContext2D, p: Particle) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      switch (p.shape) {
        case "square":
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          break;

        case "flag": {
          const s = p.size;
          ctx.fillStyle = "#111111";
          ctx.fillRect(-s / 2, -s / 2, s, s);
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(-s / 2, -s / 2, s / 2, s / 2);
          ctx.fillRect(0, 0, s / 2, s / 2);
          break;
        }

        case "streak":
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(-p.size / 2, 0);
          ctx.lineTo(p.size / 2, 0);
          ctx.stroke();
          break;

        case "circle":
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
      }

      ctx.restore();
    }

    let startTime = Date.now();

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.vx *= 0.99;
        p.rotation += p.rotationSpeed;

        const lifeProgress = p.life / p.maxLife;
        if (lifeProgress > 0.7) {
          p.opacity = 1 - (lifeProgress - 0.7) / 0.3;
        }

        if (p.life >= p.maxLife) return false;

        drawParticle(ctx, p);
        return true;
      });

      const elapsed = Date.now() - startTime;
      if (particles.length > 0 || elapsed < 2000) {
        animationId = requestAnimationFrame(animate);
      }
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      audio.pause();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[200] pointer-events-none"
      aria-hidden="true"
    />
  );
}
