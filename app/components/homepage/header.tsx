"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import OpenQuoteButton from "../OpenQuoteButton";

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export default function Header({
  title,
  subtitle,
}: HeaderProps) {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          // Video extensions can add classes before React hydrates this element.
          suppressHydrationWarning
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />
      </div>
      <div className="absolute -left-36 top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:items-end">
        <div className="max-w-2xl md:col-start-1 md:row-start-1">
         
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
            className="relative mt-2 hidden w-full flex-col gap-4 md:col-start-1 md:row-start-2 md:top-6 md:mt-0 md:flex md:flex-row"
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
