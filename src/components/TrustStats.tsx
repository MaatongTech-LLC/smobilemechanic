"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=1200&q=80",
    title: "Trusted by drivers year after year",
    stats: [
      { value: "10k Miles", label: "Average distance covered" },
      { value: "99% Customer Satisfaction", label: "Based on verified reviews" },
      { value: "5,000+ Cars Repaired", label: "And counting every month" },
    ],
    badge: "ASE-Certified Technicians",
    badgeDescription:
      "Every mechanic on our team is certified and background-checked for your peace of mind.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    title: "Quality parts, quality service",
    stats: [
      { value: "100% OEM Parts", label: "Factory-grade replacements" },
      { value: "24hr Turnaround", label: "Most repairs same-day" },
      { value: "2-Year Warranty", label: "On all labor performed" },
    ],
    badge: "Premium Parts Guarantee",
    badgeDescription:
      "We only use manufacturer-recommended parts to ensure your vehicle performs at its best.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=80",
    title: "Convenience at your doorstep",
    stats: [
      { value: "30-Mile Radius", label: "Indianapolis & surrounding areas" },
      { value: "7 Days a Week", label: "Flexible scheduling available" },
      { value: "Free Diagnostics", label: "With any service booking" },
    ],
    badge: "Mobile-First Service",
    badgeDescription:
      "No need to visit a shop. We bring professional auto care directly to your location.",
  },
];

export default function TrustStats() {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((c) => (c + 1) % slides.length);
  }

  function prev() {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }

  const slide = slides[current];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex items-start justify-between mb-8">
            <div>
              <span className="text-primary font-medium text-[14px]">
                Why choose us
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-medium text-black mt-2 leading-tight" style={{ fontFamily: "var(--font-tektur)" }}>
                The auto repair shop you
                <br />
                can rely on
              </h2>
            </div>
            <p className="hidden md:block text-[16px] text-[#5e5e5e] max-w-[400px] leading-[1.5]">
              We&apos;ll keep your car in more than you&apos;d expect from a
              mobile service — it&apos;s auto safety, convenience, and peace of
              mind.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden">
            <div className="relative h-[300px] sm:h-[380px] overflow-hidden">
              <img
                key={current}
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-80 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <h3
                  key={`title-${current}`}
                  className="text-white text-[20px] sm:text-[24px] font-semibold mb-1 animate-slide-up"
                >
                  {slide.title}
                </h3>

                <div className="flex flex-wrap gap-8 mt-4">
                  {slide.stats.map((stat, i) => (
                    <div
                      key={`${current}-${i}`}
                      className="animate-slide-up"
                      style={{ animationDelay: `${(i + 1) * 100}ms` }}
                    >
                      <div className="text-white text-[20px] sm:text-[28px] font-bold">
                        {stat.value}
                      </div>
                      <div className="text-gray-300 text-[13px]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  key={`badge-${current}`}
                  className="flex items-center gap-4 mt-6 animate-slide-up"
                  style={{ animationDelay: "400ms" }}
                >
                  <div className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium">
                      {slide.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[13px] max-w-[300px]">
                    {slide.badgeDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 py-4 bg-[#1a1a1a]">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-white" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
