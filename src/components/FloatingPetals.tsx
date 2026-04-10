import { useEffect, useState } from "react";

const PETAL_COUNT = 15;

const Petal = ({ delay, duration, left, size }: { delay: number; duration: number; left: number; size: number }) => (
  <div
    className="animate-petal fixed pointer-events-none z-50"
    style={{
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      top: '-5vh',
    }}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ opacity: 0.6 }}
    >
      <ellipse cx="12" cy="10" rx="6" ry="10" fill="hsl(340 80% 88%)" transform="rotate(15 12 10)" />
      <ellipse cx="12" cy="10" rx="4" ry="8" fill="hsl(320 50% 82%)" transform="rotate(-10 12 10)" />
    </svg>
  </div>
);

const FloatingPetals = () => {
  const [petals] = useState(() =>
    Array.from({ length: PETAL_COUNT }, (_, i) => ({
      id: i,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 15,
      left: Math.random() * 100,
      size: 16 + Math.random() * 16,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((p) => (
        <Petal key={p.id} {...p} />
      ))}
    </div>
  );
};

export default FloatingPetals;
