"use client";

import { motion } from "framer-motion";
import OpenQuoteButton from "../../components/OpenQuoteButton";

const customCategories = [
  {
    title: "Modular Kitchens",
    image: "https://picsum.photos/seed/custom-kitchens/1200/900",
    description: "Smart layouts, premium shutters and practical workflow design.",
  },
  {
    title: "Custom Wardrobes",
    image: "https://picsum.photos/seed/custom-wardrobes/1200/900",
    description: "Space-optimized wardrobes tailored to your storage needs.",
  },
  {
    title: "TV & Living Units",
    image: "https://picsum.photos/seed/custom-living/1200/900",
    description: "Statement walls and media units aligned with your style.",
  },
  {
    title: "Bedroom Solutions",
    image: "https://picsum.photos/seed/custom-bedroom/1200/900",
    description: "Balanced comfort and functionality with premium finishes.",
  },
];

const materialOptions = [
  "Marine Ply & HDHMR boards",
  "Acrylic, PU and membrane finishes",
  "Premium laminates and veneer options",
  "Soft-close channels and hardware",
];

const customFlow = [
  {
    title: "Requirement Discovery",
    text: "We understand your room dimensions, storage needs, and design taste.",
  },
  {
    title: "Tailored Design Options",
    text: "Multiple design directions with material and finish recommendations.",
  },
  {
    title: "Factory Precision",
    text: "Modular units are crafted with precision and quality checks.",
  },
  {
    title: "On-site Installation",
    text: "Fast, clean and supervised installation with post-handover support.",
  },
];

export default function CustomInteriorPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white pb-20">
      <section className="relative overflow-hidden rounded-b-[2rem] py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/custom-interior-hero-main/2200/1200')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/35" />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.p
            className="text-xs font-semibold tracking-[0.25em] text-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            CUSTOM INTERIORS
          </motion.p>
          <motion.h1
            className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Bespoke Interiors Crafted For Your Lifestyle
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-sm text-slate-100 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Every room, every unit, every finish is custom planned to match your
            home dimensions and personal preferences.
          </motion.p>
          <OpenQuoteButton
            label="Start Custom Design"
            className="mt-8 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800"
          />
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Custom Interior Categories
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {customCategories.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Material & Finish Choices
            </h2>
            <p className="mt-2 text-slate-600">
              Select from premium combinations that fit your budget and usage.
            </p>
            <ul className="mt-5 space-y-2">
              {materialOptions.map((option) => (
                <li
                  key={option}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-lg shadow-slate-300/40 md:p-8">
            <h2 className="text-2xl font-bold">Need made-to-measure interiors?</h2>
            <p className="mt-2 text-sm text-slate-300">
              Share your room details and our designers will prepare a tailored
              concept with budget estimate.
            </p>
            <OpenQuoteButton
              label="Get Custom Quote"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Our Customization Process
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {customFlow.map((step, index) => (
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
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
