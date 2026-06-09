"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-all duration-[2s] ${loaded ? "opacity-60 scale-100" : "opacity-0 scale-105"}`}
        >
          <source
            src="/hero_video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          className={`font-[var(--font-tektur)] text-[44px] sm:text-[60px] lg:text-[72px] font-bold text-white leading-[1.05] max-w-[800px] tracking-tight transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontFamily: "var(--font-tektur)" }}
        >
          Smarter auto repairs for every driver
        </h1>
        <p
          className={`text-[17px] sm:text-[19px] font-normal text-gray-200 mt-5 max-w-[548px] leading-[1.5] transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          From oil changes to full diagnosticstrusted, fast, and affordable
          auto service for all makes and models.
        </p>
        <a
          href="/book"
          className={`mt-8 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-none text-[16px] font-medium transition-all duration-1000 delay-500 inline-flex items-center justify-center hover:scale-105 active:scale-95 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Service now
        </a>

        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
