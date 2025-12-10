"use client";
import React, { useEffect, useRef } from "react";
import CommonButton from "./CommonButton";

type HeroCanvasProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  cta?: React.ReactNode;
  heightClass?: string;
  pattern?: string;
  bgClass?: string;
  textClass?: string;
};

export default function HeroCanvas({
  title = (
    <h1 className="text-4xl md:text-6xl lg:leading-18 font-extrabold">
      Code. Design. Innovate. Build. <br /> Scale. Deliver. Solve.
    </h1>
  ),
  subtitle = (
    <p className="mt-1 text-lg text-white max-w-2xl">
      I’m a full-stack developer who loves bringing ideas to life. I specialize
      in building modern, interactive frontends with React and Next.js, and
      designing powerful backends using Node.js, Express, and databases like
      MongoDB and PostgreSQL. Whether it’s a single-page app or a complex web
      platform, I focus on performance, scalability, and user experience.
    </p>
  ),
  cta = <CommonButton>Explore My Portfolio</CommonButton>,
  heightClass = "min-h-screen",
  pattern = "010101",
  textClass = "text-white",
}: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const wrapperEl = wrapperRef.current;
    if (!canvasEl || !wrapperEl) return;

    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    const canvas = canvasEl;
    const wrapper = wrapperEl;

    const fontSize = 24;
    const rowGap = 8;
    const lineHeight = fontSize + rowGap;
    let canvasWidth = 0;
    let canvasHeight = 0;
    let columns = 0;
    let rows = 0;
    let animationId: number;

    // store phase & speed per cell for staggered animation
    let colorGrid: { phase: number; speed: number }[][] = [];

    function initCanvas() {
      const dpr = window.devicePixelRatio || 1;

      canvasWidth = wrapper.clientWidth;
      canvasHeight = wrapper.clientHeight;

      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      canvas.style.width = canvasWidth + "px";
      canvas.style.height = canvasHeight + "px";

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.floor(canvasWidth / fontSize);
      rows = Math.floor(canvasHeight / lineHeight);

      // increase spread of animation speed for more randomness
      colorGrid = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({
          phase: Math.random() * Math.PI * 2,
          speed: 0.003 + Math.random() * 0.02, // wider range
        }))
      );
    }

    function draw() {
      ctx!.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx!.font = `${fontSize}px monospace`;
      ctx!.textBaseline = "top";

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          const char = pattern[x % pattern.length];

          const cell = colorGrid[y][x];
          cell.phase += cell.speed;

          const fade = (Math.sin(cell.phase) + 1) / 1;

          // 0 and 1 same color (blue)
          ctx!.fillStyle = `rgba(0,145,255,${fade})`;

          ctx!.fillText(char, x * fontSize, y * lineHeight);
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    initCanvas();
    draw();

    window.addEventListener("resize", initCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", initCanvas);
    };
  }, [pattern]);

  return (
    <section
      ref={wrapperRef}
      className={`${heightClass} w-full relative overflow-hidden px-4 lg-0`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent -50%, black 70%)",
        }}
      />

      <div
        className={`relative z-10 w-full h-full flex flex-col items-center justify-center px-6 ${textClass}`}
      >
        <div className="w-full h-screen flex justify-center items-center flex-col gap-4 absolute inset-0 text-center">
          {title}
          {subtitle}
          {cta}
        </div>
      </div>
    </section>
  );
}
