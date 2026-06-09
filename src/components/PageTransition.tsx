"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

function CarSVG() {
  return (
    <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_12px_rgba(227,6,19,0.6)]">
      {/* Main body */}
      <path
        d="M18 50 L18 44 C18 42 20 40 22 40 L170 40 C174 40 178 42 180 44 L182 48 L182 52 C182 54 180 55 178 55 L22 55 C20 55 18 53 18 51 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Cabin - boxy Jeep shape */}
      <path
        d="M42 40 L42 18 C42 16 44 14 46 14 L148 14 C150 14 152 16 152 18 L152 40 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Roof rack */}
      <rect x="48" y="11" width="98" height="3" rx="1.5" fill="currentColor" opacity="0.7" />
      <rect x="60" y="9" width="3" height="4" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="90" y="9" width="3" height="4" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="120" y="9" width="3" height="4" rx="1" fill="currentColor" opacity="0.6" />
      {/* Windshield */}
      <path
        d="M134 17 L150 17 L150 38 L130 38 Z"
        fill="white"
        opacity="0.25"
      />
      {/* Rear window */}
      <path
        d="M44 17 L60 17 L64 38 L44 38 Z"
        fill="white"
        opacity="0.2"
      />
      {/* Side windows */}
      <rect x="68" y="17" width="25" height="20" rx="1" fill="white" opacity="0.2" />
      <rect x="97" y="17" width="25" height="20" rx="1" fill="white" opacity="0.2" />
      {/* Window pillars */}
      <rect x="64" y="14" width="4" height="26" fill="currentColor" opacity="0.9" />
      <rect x="93" y="14" width="4" height="26" fill="currentColor" opacity="0.9" />
      <rect x="122" y="14" width="4" height="26" fill="currentColor" opacity="0.9" />
      {/* Front grille - 7 slot Jeep signature */}
      <rect x="172" y="42" width="12" height="12" rx="2" fill="currentColor" opacity="0.9" />
      <rect x="174" y="43" width="1.5" height="10" rx="0.5" fill="#333" />
      <rect x="176.5" y="43" width="1.5" height="10" rx="0.5" fill="#333" />
      <rect x="179" y="43" width="1.5" height="10" rx="0.5" fill="#333" />
      <rect x="181.5" y="43" width="1.5" height="10" rx="0.5" fill="#333" />
      {/* Headlights - round Jeep style */}
      <circle cx="172" cy="44" r="4" fill="#111" />
      <circle cx="172" cy="44" r="3" fill="white" opacity="0.9" />
      <circle cx="172" cy="44" r="1.5" fill="#ffffaa" opacity="0.8" />
      {/* Tail light */}
      <rect x="18" y="43" width="4" height="6" rx="1" fill="#ff2222" opacity="0.9" />
      {/* Front bumper */}
      <path
        d="M168 55 L185 55 C187 55 188 56 188 57 L188 59 C188 60 187 61 185 61 L172 61 Z"
        fill="currentColor"
        opacity="0.7"
      />
      {/* Rear bumper */}
      <path
        d="M15 55 L30 55 L26 61 L13 61 C11 61 10 60 10 59 L10 57 C10 56 11 55 13 55 Z"
        fill="currentColor"
        opacity="0.7"
      />
      {/* Side step */}
      <rect x="40" y="55" width="115" height="3" rx="1" fill="currentColor" opacity="0.5" />
      {/* Fender flares */}
      <path d="M28 52 C28 42 36 36 48 36 C60 36 68 42 68 52" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.9" />
      <path d="M128 52 C128 42 136 36 148 36 C160 36 168 42 168 52" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.9" />
      {/* Front wheel - big off-road tire */}
      <circle cx="148" cy="58" r="14" fill="#1a1a1a" />
      <circle cx="148" cy="58" r="12" fill="#2a2a2a" />
      <circle cx="148" cy="58" r="8" fill="#3a3a3a" />
      <circle cx="148" cy="58" r="4" fill="#555" />
      {/* Front wheel tread */}
      <path d="M148 44 L148 48 M148 68 L148 72 M134 58 L138 58 M158 58 L162 58 M139 49 L142 52 M154 64 L157 67 M139 67 L142 64 M154 52 L157 49" stroke="#222" strokeWidth="2" strokeLinecap="round" />
      {/* Front wheel bolts */}
      <circle cx="145" cy="55" r="1.2" fill="#777" />
      <circle cx="151" cy="55" r="1.2" fill="#777" />
      <circle cx="145" cy="61" r="1.2" fill="#777" />
      <circle cx="151" cy="61" r="1.2" fill="#777" />
      {/* Rear wheel */}
      <circle cx="48" cy="58" r="14" fill="#1a1a1a" />
      <circle cx="48" cy="58" r="12" fill="#2a2a2a" />
      <circle cx="48" cy="58" r="8" fill="#3a3a3a" />
      <circle cx="48" cy="58" r="4" fill="#555" />
      {/* Rear wheel tread */}
      <path d="M48 44 L48 48 M48 68 L48 72 M34 58 L38 58 M58 58 L62 58 M39 49 L42 52 M54 64 L57 67 M39 67 L42 64 M54 52 L57 49" stroke="#222" strokeWidth="2" strokeLinecap="round" />
      {/* Rear wheel bolts */}
      <circle cx="45" cy="55" r="1.2" fill="#777" />
      <circle cx="51" cy="55" r="1.2" fill="#777" />
      <circle cx="45" cy="61" r="1.2" fill="#777" />
      <circle cx="51" cy="61" r="1.2" fill="#777" />
      {/* Side mirror */}
      <rect x="152" y="28" width="5" height="4" rx="1" fill="currentColor" opacity="0.8" />
      {/* Spare tire on back (visible outline) */}
      <circle cx="18" cy="38" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.5" />
      <circle cx="18" cy="38" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* Exhaust */}
      <ellipse cx="10" cy="60" rx="3" ry="1.5" fill="#E30613" opacity="0.4" />
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
          <div className="page-transition-text">
            <span className="page-transition-text-inner">
              Silverius Mobile Mechanic
            </span>
          </div>
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
