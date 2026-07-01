"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface Service {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  price_from: string | null;
  duration_minutes: number | null;
}

interface ServiceGridProps {
  initialServices: Service[];
  initialMeta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export default function ServiceGrid({ initialServices, initialMeta }: ServiceGridProps) {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [page, setPage] = useState(initialMeta.current_page);
  const [hasMore, setHasMore] = useState(initialMeta.current_page < initialMeta.last_page);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    const nextPage = page + 1;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services?page=${nextPage}&per_page=${initialMeta.per_page}`
    );

    if (res.ok) {
      const json = await res.json();
      setServices((prev) => [...prev, ...json.data]);
      setPage(json.meta.current_page);
      setHasMore(json.meta.current_page < json.meta.last_page);
    }

    setLoading(false);
  }, [loading, hasMore, page, initialMeta.per_page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [loadMore]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ScrollReveal key={service.id} delay={index < initialMeta.per_page ? index * 75 : 0}>
            <Link
              href={`/book?service=${service.slug}`}
              className="group block border border-gray-100 hover:border-primary/40 transition-all duration-300 overflow-hidden h-full"
            >
              <div className="h-[200px] overflow-hidden bg-gray-100">
                <img
                  src={service.image_url || "/gallery/work-05.jpeg"}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-[17px] font-semibold text-black group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-tektur)" }}
                >
                  {service.name}
                </h3>
                <p className="text-[14px] text-[#5e5e5e] mt-2 leading-[1.6]">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-[13px] font-medium text-primary group-hover:translate-x-1 transition-transform">
                  Book now &rarr;
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {hasMore && (
        <div ref={loaderRef} className="flex justify-center py-10">
          <div className="flex items-center gap-2 text-[14px] text-[#5e5e5e]">
            <svg className="animate-spin h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading more services...
          </div>
        </div>
      )}
    </>
  );
}
