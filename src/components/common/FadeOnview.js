'use client';

import { useEffect, useRef, useState } from 'react';

export default function FadeOnView({ children, delay = 0 }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ animationDelay: `${delay}s` }}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'fade-in' : 'fade-out'
      }`}
    >
      {children}
    </div>
  );
}
