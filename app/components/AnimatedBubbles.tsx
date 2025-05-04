// app/components/AnimatedBubbles.tsx
'use client';

import { useEffect, useState } from 'react';

type Bubble = {
  width: number;
  height: number;
  top: number;
  left?: number;
  right?: number;
  duration: number;
  delay: number;
};

const AnimatedBubbles = ({
  count = 20,
  direction = 'left-right',
}: {
  count?: number;
  direction?: 'left-right' | 'right-left' | 'both';
}) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const generated = Array.from({ length: count }, (_, i) => {
      const side = direction === 'both' ? (i % 2 === 0 ? 'left' : 'right') : direction;
      return {
        width: Math.random() * 30 + 20,
        height: Math.random() * 30 + 20,
        top: Math.random() * 100,
        ...(side === 'left' ? { left: -50 } : { right: -50 }),
        duration: Math.random() * 40 + 20,
        delay: Math.random() * 20,
      };
    });
    setBubbles(generated);
  }, [count, direction]);

  if (!hydrated) return null;

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="absolute bg-blue-300 opacity-10 rounded-full animate-bubble-side"
          style={{
            width: `${bubble.width}px`,
            height: `${bubble.height}px`,
            top: `${bubble.top}%`,
            ...(bubble.left !== undefined ? { left: `${bubble.left}px` } : {}),
            ...(bubble.right !== undefined ? { right: `${bubble.right}px` } : {}),
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBubbles;
