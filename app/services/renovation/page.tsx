"use client";

import { motion } from "framer-motion";
import OpenQuoteButton from "../../components/OpenQuoteButton";

const renovationServices = [
  "Civil modifications and layout corrections",
  "Electrical and false ceiling rework",
  "Kitchen and bathroom remodeling",
  "Complete painting and finish upgrades",
];

const process = [
  {
    title: "Site Inspection",
    description: "We inspect your current home and identify renovation scope.",
  },
  {
    title: "Design & Estimate",
    description: "Receive space plan, material options, and transparent costing.",
  },
  {
    title: "Execution",
    description: "Dedicated team executes the work in planned phases.",
  },
  {
    title: "Handover",
    description: "Final quality check and clean handover with support.",
  },
];

const beforeAfterCards = [
  {
    title: "Kitchen Makeover",
    image: "https://picsum.photos/seed/renovation-kitchen/1200/900",
    text: "From outdated utility kitchen to elegant modular setup.",
  },
  {
    title: "Living Room Revamp",
    image: "https://picsum.photos/seed/renovation-living/1200/900",
    text: "New TV wall, premium lighting, and smart storage integration.",
  },
  {
    title: "Bedroom Upgrade",
    image: "https://picsum.photos/seed/renovation-bedroom/1200/900",
    text: "Contemporary wardrobes, richer textures, and warmer ambience.",
  },
];

export default function RenovationPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white pb-20">
      <section className="relative overflow-hidden rounded-b-[2rem] py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/renovation-hero-main/2200/1200')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.p
            className="text-xs font-semibold tracking-[0.25em] text-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            HOME RENOVATION
          </motion.p>
          <motion.h1
            className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Renovation Solutions That Make Old Homes Feel New
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-sm text-slate-100 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Upgrade your space with practical redesign, modern finishes, and
            reliable site execution handled by one expert team.
          </motion.p>
          <OpenQuoteButton
            label="Get Renovation Quote"
            className="mt-8 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800"
          />
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {renovationServices.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Renovation Journey
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {process.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/60"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                STEP {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Before & After Inspired Upgrades
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {beforeAfterCards.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
