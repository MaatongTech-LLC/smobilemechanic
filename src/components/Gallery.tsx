"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const totalImages = 52;

const images = Array.from({ length: totalImages }, (_, i) => ({
  id: i + 1,
  src: `/gallery/work-${String(i + 1).padStart(2, "0")}.jpeg`,
  alt: `Silverius Mobile Mechanic work ${i + 1}`,
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(16);
  const [revealedItems, setRevealedItems] = useState<Set<number>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            if (!isNaN(idx)) {
              setRevealedItems((prev) => new Set(prev).add(idx));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = gridRef.current?.querySelectorAll("[data-idx]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [visibleCount]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < totalImages) {
          setVisibleCount((prev) => Math.min(prev + 12, totalImages));
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [visibleCount]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight")
        setSelectedImage((prev) =>
          prev !== null ? (prev + 1) % totalImages : null
        );
      if (e.key === "ArrowLeft")
        setSelectedImage((prev) =>
          prev !== null ? (prev - 1 + totalImages) % totalImages : null
        );
    },
    [selectedImage]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section className="pt-[68px] bg-black min-h-screen">
      <div className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Our Portfolio
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-tektur)" }}
            >
              Quality work,
              <br />
              <span className="text-primary">proven results.</span>
            </h1>
            <p className="text-gray-400 text-lg mt-6 max-w-lg leading-relaxed">
              Every repair tells a story of precision and dedication. Browse
              through our recent projects and see why Indianapolis trusts
              Silverius Mobile Mechanic.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <div className="text-center">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-tektur)" }}>
                  {totalImages}+
                </span>
                <p className="text-gray-500 text-sm mt-1">Projects</p>
              </div>
              <div className="w-[1px] h-10 bg-neutral-800" />
              <div className="text-center">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-tektur)" }}>
                  100%
                </span>
                <p className="text-gray-500 text-sm mt-1">Satisfaction</p>
              </div>
              <div className="w-[1px] h-10 bg-neutral-800" />
              <div className="text-center">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-tektur)" }}>
                  5★
                </span>
                <p className="text-gray-500 text-sm mt-1">Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-20">
        <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4">
          {images.slice(0, visibleCount).map((image, idx) => (
            <div
              key={image.id}
              data-idx={idx}
              className="break-inside-avoid mb-3 sm:mb-4"
              style={{
                opacity: revealedItems.has(idx) ? 1 : 0,
                transform: revealedItems.has(idx)
                  ? "translateY(0) scale(1)"
                  : "translateY(30px) scale(0.97)",
                transition: `opacity 0.6s ease ${(idx % 4) * 100}ms, transform 0.6s ease ${(idx % 4) * 100}ms`,
              }}
            >
              <button
                onClick={() => setSelectedImage(idx)}
                className="group relative w-full overflow-hidden rounded-sm block cursor-pointer bg-neutral-900"
              >
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/40 transition-all duration-500 rounded-sm" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-[2px] bg-primary" />
                      <span className="text-white text-xs font-medium uppercase tracking-wider">
                        View
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>

        {visibleCount < totalImages && (
          <div ref={sentinelRef} className="flex justify-center py-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-gray-500 text-sm">Loading more...</span>
            </div>
          </div>
        )}

        {visibleCount >= totalImages && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-sm">
              All {totalImages} projects loaded
            </p>
          </div>
        )}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                (selectedImage - 1 + totalImages) % totalImages
              );
            }}
            className="absolute left-4 sm:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-primary/80 backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage + 1) % totalImages);
            }}
            className="absolute right-4 sm:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-primary/80 backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto h-auto object-contain rounded-sm"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-[2px] bg-primary" />
                  <span className="text-white/80 text-sm">
                    Project {selectedImage + 1} of {totalImages}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-white/50 text-xs">
                  <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px]">←</kbd>
                  <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px]">→</kbd>
                  <span className="ml-1">navigate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
