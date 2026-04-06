"use client";

import { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  minOpacity: number;
  maxOpacity: number;
}

// Deterministic star positions (seeded to avoid hydration mismatch)
function generateStars(count: number): Star[] {
  const stars: Star[] = [];
  // Simple LCG pseudo-random for determinism
  let seed = 42;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    return (seed >>> 0) / 4294967296;
  };

  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: rand() * 2 + 0.5,
      duration: rand() * 4 + 2,
      delay: rand() * 4,
      minOpacity: rand() * 0.2 + 0.1,
      maxOpacity: rand() * 0.5 + 0.4,
    });
  }
  return stars;
}

export default function StarField() {
  const stars = useMemo(() => generateStars(120), []);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--duration": `${star.duration}s`,
            "--delay": `${star.delay}s`,
            "--min-opacity": star.minOpacity,
            "--max-opacity": star.maxOpacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
