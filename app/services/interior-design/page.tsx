"use client";

import { motion } from "framer-motion";
import OpenQuoteButton from "../../components/OpenQuoteButton";

const highlights = [
  "2D/3D visual planning",
  "Smart storage-first concepts",
  "Vastu and lifestyle based layouts",
  "End-to-end project supervision",
];

const designPackages = [
  {
    name: "Essential Home",
    image: "https://picsum.photos/seed/interior-package-essential/1200/900",
    oldPrice: "8.2 Lac",
    offerPrice: "6.6 Lac",
    details: "Perfect for 2BHK modular essentials with modern finishes.",
  },
  {
    name: "Premium Living",
    image: "https://picsum.photos/seed/interior-package-premium/1200/900",
    oldPrice: "14.9 Lac",
    offerPrice: "11.2 Lac",
    details: "Designed for spacious 3BHK homes with premium material palette.",
  },
  {
    name: "Luxury Signature",
    image: "https://picsum.photos/seed/interior-package-luxury/1200/900",
    oldPrice: "21.6 Lac",
    offerPrice: "16.9 Lac",
    details: "High-end bespoke interiors with advanced design detailing.",
  },
];

const spaces = [
  {
    title: "Kitchen Interiors",
    image: "https://picsum.photos/seed/interior-space-kitchen/1200/900",
  },
  {
    title: "Living Room Styling",
    image: "https://picsum.photos/seed/interior-space-living/1200/900",
  },
  {
    title: "Bedroom Design",
    image: "https://picsum.photos/seed/interior-space-bedroom/1200/900",
  },
  {
    title: "Wardrobe & Storage",
    image: "https://picsum.photos/seed/interior-space-wardrobe/1200/900",
  },
];

export default function InteriorDesignPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white pb-20">
      <section className="relative overflow-hidden rounded-b-[2rem] py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/interior-hero-main/2200/1200')",
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
            INTERIOR DESIGN
          </motion.p>
          <motion.h1
            className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Interior Design Services for Modern Indian Homes
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-sm text-slate-100 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We create functional, elegant and personalized interiors with clear
            pricing, high quality materials, and on-time execution.
          </motion.p>
          <OpenQuoteButton
            label="Book Free Design Call"
            className="mt-8 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800"
          />
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item, idx) => (
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
          Signature Interior Packages
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {designPackages.map((pkg) => (
            <article
              key={pkg.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${pkg.image}')` }}
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{pkg.details}</p>
                <p className="mt-3 text-sm text-slate-500">
                  Offer <span className="line-through">{pkg.oldPrice}</span>{" "}
                  <span className="text-2xl font-bold text-fuchsia-700">
                    {pkg.offerPrice}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Spaces We Transform
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {spaces.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200"
            >
              <div
                className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-black/30" />
              <p className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
