"use client";

import { useEffect, useRef, useState } from "react";

export default function DashedCircle() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
    >
      <img
        src="/cercle.svg"
        alt=""
        className={`w-[594px] h-[594px] transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          animation: isVisible ? "spin 60s linear infinite" : "none",
        }}
      />
    </div>
  );
}
