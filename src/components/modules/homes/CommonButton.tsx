"use client";

import { ButtonHTMLAttributes } from "react";

interface FancyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CommonButton({ children, ...props }: FancyButtonProps) {
  return (
    <button
      {...props}
      className="
        relative px-6 py-2 
        rounded-xl 
        border border-white/30 
        text-white 
        bg-white/10 
        backdrop-blur-md 
        shadow-lg 
        overflow-hidden  
        group cursor-pointer
        transition-all duration-300
        hover:bg-white/20
        hover:border-blue-400/80
        hover:shadow-blue-500/30
      "
    >
      {/* ✅ Light glass reflection effect */}
      <span
        className="
          pointer-events-none
          absolute inset-0 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity duration-300
          bg-linear-to-tr
          from-white/10 
          via-white/30 
          to-white/10
        "
      />

      {/* ✅ Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
