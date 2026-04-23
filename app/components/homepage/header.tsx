"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import QuoteForm from "../QuoteForm";
import OpenQuoteButton from "../OpenQuoteButton";

type HeaderProps = {
  title: string;
  subtitle: string;
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
      <img
        src={
          image ||
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
        }
        alt="Luxury interior"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-900/25" />
      <div className="absolute -left-36 top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2">
        <div className="max-w-2xl">
          <motion.span
            className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-white/90 backdrop-blur-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            MODERN INTERIOR SOLUTIONS
          </motion.span>
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

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/85"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              7+ Years Experience
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              4.9/5 Client Satisfaction
            </span>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <OpenQuoteButton
              label="Get Free Consultation"
              className="rounded-full bg-white px-8 py-3 text-center text-sm font-semibold text-slate-900 shadow-xl shadow-black/25"
            />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/"
                className="block rounded-full border border-white/70 bg-white/10 px-8 py-3 text-center text-sm font-semibold backdrop-blur-sm"
              >
                Explore Designs
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE FORM */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex justify-end md:mt-0"
          >
            <div className="w-full max-w-md">
              <QuoteForm />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
