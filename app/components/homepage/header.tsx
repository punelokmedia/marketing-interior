"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import OpenQuoteButton from "../OpenQuoteButton";

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export default function Header({
  title,
  subtitle,
}: HeaderProps) {
  const heroRef = useRef<HTMLElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const music = musicRef.current;
    if (!hero || !music) return;
    music.volume = 1;
    const bounds = hero.getBoundingClientRect();
    let heroVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;
    let disposed = false;
    let starting = false;

    const tryAutoplay = () => {
      if (disposed || starting || !heroVisible || document.hidden || !music.paused) return;
      starting = true;
      void music.play().catch(() => {
        // Browsers may require a visitor interaction before playing sound.
      }).finally(() => { starting = false; });
    };

    const observer = new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      if (!entry.isIntersecting) {
        music.pause();
      } else tryAutoplay();
    });
    const pauseWhenHidden = () => {
      if (document.hidden) music.pause();
      else tryAutoplay();
    };
    observer.observe(hero);
    music.addEventListener("canplay", tryAutoplay);
    document.addEventListener("visibilitychange", pauseWhenHidden);
    tryAutoplay();
    return () => {
      disposed = true;
      observer.disconnect();
      music.removeEventListener("canplay", tryAutoplay);
      document.removeEventListener("visibilitychange", pauseWhenHidden);
      music.pause();
    };
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden bg-slate-950 text-white">
      <audio
        ref={musicRef}
        src="/hero_section_background_music.m4a"
        autoPlay
        loop
        preload="auto"
      />
      <div className="pointer-events-none relative aspect-video w-full overflow-hidden bg-black" aria-hidden="true">
        <video
          // Video extensions can add classes before React hydrates this element.
          suppressHydrationWarning
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
          preload="auto"
        >
          <source src="/videos/hero-web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-8 md:pb-12">
        <div className="max-w-2xl">
         
          <motion.h1
            className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

            
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base text-slate-200 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </div>

          <motion.div
            className="relative mt-2 hidden w-full max-w-2xl flex-col gap-4 md:mt-0 md:flex md:flex-row"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <OpenQuoteButton
              label="Get Free Consultation"
              className="flex min-h-14 flex-1 items-center justify-center rounded-full bg-white px-6 py-4 text-center text-base font-semibold text-slate-900 shadow-xl shadow-black/25"
            />

            <motion.div className="flex flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/gallery"
                className="flex min-h-14 w-full items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-4 text-center text-base font-semibold backdrop-blur-sm"
              >
                Explore Designs
              </Link>
            </motion.div>
          </motion.div>
      </div>
      </section>

      <div className="flex flex-col gap-3 bg-slate-950 px-6 pb-8 md:hidden">
        <OpenQuoteButton
          label="Get Free Consultation"
          className="flex min-h-14 w-full items-center justify-center rounded-full bg-white px-6 py-4 text-center text-base font-semibold text-slate-900 shadow-xl shadow-black/25"
        />
        <Link
          href="/gallery"
          className="flex min-h-14 w-full items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-4 text-center text-base font-semibold text-white backdrop-blur-sm"
        >
          Explore Designs
        </Link>
      </div>
    </>
  );
}
