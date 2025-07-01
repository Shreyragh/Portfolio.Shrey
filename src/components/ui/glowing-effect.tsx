"use client";

import { useEffect, useRef, useState } from "react";

interface GlowingEffectProps {
  blur?: number;
  borderWidth?: number;
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
}

export function GlowingEffect({
  blur = 0, 
  borderWidth = 1,
  spread = 600,
  glow = true,
  disabled = false,
  proximity = 300,
  inactiveZone = 0.01
}: GlowingEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || disabled) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
      setIsHovered(true);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const container = containerRef.current?.parentElement;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [disabled]);

  if (disabled) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg"
    >
      {isHovered && (
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(${spread}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1), rgba(156, 39, 176, 0.1), transparent 70%)`,
            border: `${borderWidth}px solid`,
            borderImage: `radial-gradient(${spread}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76, 175, 80, 0.6), rgba(33, 150, 243, 0.6), rgba(156, 39, 176, 0.6), transparent 70%) 1`,
            filter: 'blur(0.5px)',
          }}
        />
      )}
    </div>
  );
}
