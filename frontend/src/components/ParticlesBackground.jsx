import { useMemo } from "react";

export default function ParticlesBackground({ count = 28 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 18 + Math.random() * 22,
        delay: -Math.random() * 30,
        opacity: 0.3 + Math.random() * 0.4,
      })),
    [count],
  );

  return (
    <>
      <div className="bg-orbs" aria-hidden />
      <div className="particles" aria-hidden>
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
    </>
  );
}
