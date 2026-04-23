"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { locationCities } from "./locationData";

export default function LocationPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white pb-20 pt-3">
      <section className="relative overflow-hidden rounded-b-[2rem] bg-slate-950 py-20 text-white md:py-24">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.p
            className="text-xs font-semibold tracking-[0.24em] text-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            INTERIORWALA LOCATIONS
          </motion.p>
          <motion.h1
            className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Interior Design Services Across Top Cities
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-sm text-slate-200 sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Choose your city to explore local interior packages, style options,
            and service availability.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locationCities.map((location, index) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <Link
                href={`/location/${location.slug}`}
                className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/50 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {location.city}
                </h2>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {location.heroDescription}
                </p>
                <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-fuchsia-700">
                  VIEW INTERIORS
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
