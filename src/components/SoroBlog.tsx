"use client";

import { useEffect, useRef } from "react";

const SORO_EMBED_SRC =
  "https://app.trysoro.com/api/embed/da8fd905-405b-4204-8182-3202def62413";

export default function SoroBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  // The embed script renders into #soro-blog when it executes. next/script only
  // runs a given script once per session, which would leave the container empty
  // when a visitor comes back to /blog through a client-side navigation, so the
  // tag is injected on every mount and torn down on unmount instead.
  useEffect(() => {
    const container = containerRef.current;
    const script = document.createElement("script");
    script.src = SORO_EMBED_SRC;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="soro-blog" ref={containerRef} />;
}
