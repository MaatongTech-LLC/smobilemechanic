"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

function CarSVG() {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M20 28C20 28 22 24 25 22C28 20 35 18 40 17C45 16 55 15.5 60 15.5C65 15.5 72 16 78 17.5C84 19 90 22 93 24C96 26 98 28 98 28"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M10 28C10 28 10 26 12 25C14 24 18 24 20 24L25 22C30 19 38 17 45 16.5C52 16 60 16 68 16.5C76 17 84 19 90 22L95 24C97 24 101 24 104 25C107 26 108 28 108 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 28L6 28C4 28 3 29 3 30L3 32C3 33 4 34 5 34L12 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M108 28L110 28C112 28 114 29 114 30L114 32C114 33 113 34 112 34L105 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 30L42 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M76 30L105 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="28" cy="33" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="28" cy="33" r="3" fill="currentColor" />
      <circle cx="90" cy="33" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="90" cy="33" r="3" fill="currentColor" />
      <path
        d="M42 18L44 12C45 10 47 9 50 9L70 9C73 9 75 10 76 12L78 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line x1="60" y1="9" x2="60" y2="18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M46 13L54 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M66 13L74 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {children}

      {isTransitioning && (
        <div className="page-transition-overlay">
          <div className="page-transition-bg" />
          <div className="page-transition-content">
            <div className="page-transition-smoke-trail">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="smoke-puff"
                  style={{ animationDelay: `${0.4 + i * 0.08}s` }}
                />
              ))}
            </div>
            <div className="page-transition-car">
              <CarSVG />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
