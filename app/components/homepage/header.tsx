"use client";

import HeroSlideshow from "../HeroSlideshow";
import { motion } from "framer-motion";
import Link from "next/link";
import QuoteForm from "../QuoteForm";
import OpenQuoteButton from "../OpenQuoteButton";

type HeaderProps = {
  title?: string;
  subtitle?: string;
  showForm?: boolean;
  image?: string;
};

export default function Header({
  title,
  subtitle,
  showForm = true,
  image,
}: HeaderProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white">
      <HeroSlideshow images={[image || "/herosection-image.jpg", "/about-hero.jpg", "/service_page_hero.jpg"]} />
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

        {/* Show the form before the buttons on mobile. */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center md:col-start-2 md:row-start-1 md:row-span-2 md:justify-end"
          >
            <div className="w-full max-w-md">
              <QuoteForm />
            </div>
          </motion.div>
        )}

          <motion.div
            className="relative mt-2 flex w-full flex-col gap-4 md:col-start-1 md:row-start-2 md:top-6 md:mt-0 md:flex-row"
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
                href="/"
                className="flex min-h-14 w-full items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-4 text-center text-base font-semibold backdrop-blur-sm"
              >
                Explore Designs
              </Link>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
}
