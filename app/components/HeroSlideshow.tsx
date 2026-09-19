"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const defaults = [
  "/herosectionimages/Hero001.png",
  "/herosectionimages/Hero002.png",
  "/herosectionimages/Hero003.png",
  "/herosectionimages/Hero004.png",
];

export default function HeroSlideshow({ images = defaults }: { images?: string[] }) {
  const [active, setActive] = useState(0);
  const current = active % images.length;
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || images.length < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % images.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [images.length, paused, reducedMotion]);

  return (
      <div
        className="group/hero absolute inset-0 overflow-hidden"
        aria-hidden="true"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt=""
            fill
            sizes="100vw"
            preload={index === 0}
            className={`object-cover contrast-105 saturate-105 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/10 md:from-black/60 md:via-black/30 md:to-black/10" />
      </div>
  );
}
