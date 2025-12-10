/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { skills } from "@/data/about";

export default function SkillsSection() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [cardPositions, setCardPositions] = useState<
    { x: number; y: number }[]
  >([]);

  // Initialize center position on mount
  useEffect(() => {
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: rect.width / 2, y: rect.height / 2 });
  }, []);

  // Calculate each card's center position
  useEffect(() => {
    const rect = gridRef.current;
    if (!rect) return;

    const cards = Array.from(
      rect.querySelectorAll(".skill-card")
    ) as HTMLElement[];
    const positions = cards.map((card) => {
      const cardRect = card.getBoundingClientRect();
      return {
        x:
          cardRect.left +
          cardRect.width / 2 -
          rect.getBoundingClientRect().left,
        y:
          cardRect.top + cardRect.height / 2 - rect.getBoundingClientRect().top,
      };
    });
    setCardPositions(positions);
  }, [gridRef.current]);

  const moveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active) return;
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const enterHandler = () => {
    setActive(true);
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;

    setMouse({
      x: rect.width / 2,
      y: rect.height / 2,
    });
  };

  const leaveHandler = () => {
    setActive(false);
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Smooth return to center
    setMouse({
      x: rect.width / 2,
      y: rect.height / 2,
    });
  };

  const maxDistance = 400;

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center">
      {/* CARD GRID */}
      <div
        ref={gridRef}
        onMouseMove={moveHandler}
        onMouseEnter={enterHandler}
        onMouseLeave={leaveHandler}
        className="relative z-10 w-full max-w-6xl"
      >
        {/* DEEP BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black z-10 rounded-2xl" />

        {/* LUMINOUS SPOTLIGHT */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-all duration-500"
          style={{
            background: `
              radial-gradient(
                180px at ${mouse.x}px ${mouse.y}px,
                rgba(37, 99, 235, 0.55),
                rgba(0,0,0,0.96)
              )
            `,
            opacity: 1,
          }}
        />

        {/* SKILLS GRID */}
        <div className="relative z-30 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 px-4 lg:gap-10 lg:px-10 py-10 rounded-2xl">
          {skills.map((tech, index) => {
            const pos = cardPositions[index];
            let opacity = 0.2;
            if (pos) {
              const dx = mouse.x - pos.x;
              const dy = mouse.y - pos.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              opacity = Math.max(0.2, 1 - distance / maxDistance);
            }

            return (
              <div
                key={index}
                className="skill-card group relative w-24 h-24 rounded-xl bg-black flex items-center justify-center overflow-hidden transition-all duration-300 hover:border hover:border-blue-600 hover:bg-blue-200/10"
                style={{ opacity }}
              >
                {/* Card Glow */}
                <div className="absolute inset-0 bg-blue-600/0 " />

                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
