"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = [
  "To", "deliver", "top-quality", "and", "maintenance", "services",
  "with", "honesty,", "precision,", "and", "care.", "Ensuring",
  "every", "driver", "leaves", "our", "shop", "with", "a", "safer,",
  "smoother,", "and", "more", "reliable", "vehicle.",
];

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.2;
      const current = rect.top;

      if (current >= start) {
        setProgress(0);
      } else if (current <= end) {
        setProgress(1);
      } else {
        setProgress((start - current) / (start - end));
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const revealedCount = Math.floor(progress * WORDS.length);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-[929px] mx-auto px-4 text-center">
        <p
          className="text-[22px] sm:text-[36px] md:text-[50px] font-medium leading-[1.4]"
          style={{ fontFamily: "var(--font-tektur)" }}
        >
          {WORDS.map((word, i) => (
            <span
              key={i}
              className="transition-colors duration-300"
              style={{
                color: i < revealedCount ? "#000000" : "#e0e0e0",
              }}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
