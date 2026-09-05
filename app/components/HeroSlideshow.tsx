"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const defaults = ["/service_page_hero.jpg", "/about-hero.jpg", "/background.jpg"];

export default function HeroSlideshow({ images = defaults }: { images?: string[] }) {
  const [active, setActive] = useState(0);

  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion || images.length < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % images.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [images.length, reducedMotion]);

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {images.map((src, index) => (
          <Image key={src} src={src} alt="" fill sizes="100vw" preload={index === 0}
            className={`object-cover transition-opacity duration-1000 motion-reduce:transition-none ${active % images.length === index ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-2 rounded-full bg-black/60 px-3 py-2 text-white" role="group" aria-label="Hero slideshow controls">
          <button type="button" onClick={() => { setActive((active + images.length - 1) % images.length); }} aria-label="Previous hero image" className="h-8 w-8 rounded-full hover:bg-white/20 focus-visible:outline-2">←</button>
          <span className="text-xs tabular-nums">{active % images.length + 1} / {images.length}</span>
          <button type="button" onClick={() => { setActive((active + 1) % images.length); }} aria-label="Next hero image" className="h-8 w-8 rounded-full hover:bg-white/20 focus-visible:outline-2">→</button>
        </div>
      )}
    </>
  );
}
