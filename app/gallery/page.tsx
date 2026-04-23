"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import OpenQuoteButton from "../components/OpenQuoteButton";

const galleryCategories = [
  {
    id: "video-gallery",
    title: "Video Gallery",
    subtitle: "Walkthroughs and guided interior stories.",
    image: "https://picsum.photos/seed/gallery-video-cover/900/900",
    description:
      "If you are looking for realistic inspiration around interior process and outcomes, our video gallery will help you explore finished homes in detail.",
  },
  {
    id: "interior-gallery",
    title: "Interior Gallery",
    subtitle: "Handpicked home interior highlights.",
    image: "https://picsum.photos/seed/gallery-interior-cover/900/900",
    description:
      "A wide range of completed projects including apartments, villas and family homes. Browse practical designs with premium aesthetics.",
  },
  {
    id: "project-gallery",
    title: "Project-wise Gallery",
    subtitle: "Room-by-room completed project showcase.",
    image: "https://picsum.photos/seed/gallery-project-cover/900/900",
    description:
      "From consultation to complete execution, explore project-wise visuals with modern, comfortable and budget-smart interior ideas.",
  },
];

const galleryImages = [
  {
    id: "gallery-grid-1",
    type: "Living",
    image: "https://picsum.photos/seed/gallery-grid-1/1200/900",
  },
  {
    id: "gallery-grid-2",
    type: "Kitchen",
    image: "https://picsum.photos/seed/gallery-grid-2/1200/900",
  },
  {
    id: "gallery-grid-3",
    type: "Bedroom",
    image: "https://picsum.photos/seed/gallery-grid-3/1200/900",
  },
  {
    id: "gallery-grid-4",
    type: "Workspace",
    image: "https://picsum.photos/seed/gallery-grid-4/1200/900",
  },
  {
    id: "gallery-grid-5",
    type: "Living",
    image: "https://picsum.photos/seed/gallery-grid-5/1200/900",
  },
  {
    id: "gallery-grid-6",
    type: "Kitchen",
    image: "https://picsum.photos/seed/gallery-grid-6/1200/900",
  },
  {
    id: "gallery-grid-7",
    type: "Bedroom",
    image: "https://picsum.photos/seed/gallery-grid-7/1200/900",
  },
  {
    id: "gallery-grid-8",
    type: "Workspace",
    image: "https://picsum.photos/seed/gallery-grid-8/1200/900",
  },
];

const galleryStats = [
  { label: "Completed Homes", value: "3500+" },
  { label: "Cities Served", value: "12+" },
  { label: "Design Themes", value: "70+" },
  { label: "Client Rating", value: "4.9/5" },
];

const walkthroughs = [
  {
    title: "2BHK Modern Walkthrough",
    image: "https://picsum.photos/seed/walkthrough-1/1200/900",
    duration: "04:32",
  },
  {
    title: "Luxury Kitchen Reveal",
    image: "https://picsum.photos/seed/walkthrough-2/1200/900",
    duration: "03:18",
  },
  {
    title: "Compact Home Space Plan",
    image: "https://picsum.photos/seed/walkthrough-3/1200/900",
    duration: "05:06",
  },
];

const filters = ["All", "Living", "Kitchen", "Bedroom", "Workspace"] as const;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return galleryImages;
    return galleryImages.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white pb-20">
      <section className="relative overflow-hidden rounded-b-[2rem] py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/gallery-hero-main/2200/1200')",
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
            GALLERY
          </motion.p>
          <motion.h1
            className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Actual Project Photographs
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-sm text-slate-100 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore completed interior projects, room-wise concepts, and design
            styles delivered by our expert team.
          </motion.p>
          <OpenQuoteButton
            label="Get Free Estimate"
            className="mt-8 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800"
          />
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryStats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm shadow-slate-200/60"
            >
              <p className="text-3xl font-bold text-slate-900">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Actual Project Photographs
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {galleryCategories.map((item, index) => (
            <motion.article
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="p-6">
                <p className="text-4xl font-bold uppercase leading-none text-slate-900">
                  {item.title.split(" ")[0]}
                </p>
                <p className="mt-1 text-4xl font-extrabold uppercase leading-none text-black">
                  {item.title.split(" ").slice(1).join(" ")}
                </p>
                <p className="mt-4 text-sm text-slate-600">{item.description}</p>
                <Link
                  href={`#${item.id}`}
                  className="mt-5 inline-flex rounded-xl bg-fuchsia-700 px-5 py-2 text-sm font-semibold text-white hover:bg-fuchsia-800"
                >
                  View
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Video Walkthrough Highlights
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Quick previews from real homes to help you visualize layout, lighting,
          and finish quality.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {walkthroughs.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/60"
            >
              <div
                className="relative h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                  {item.duration}
                </div>
                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-xl text-white">
                  ▶
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Interior Project Gallery
        </h2>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-fuchsia-700 text-white"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.28, delay: idx * 0.03 }}
                className="group relative overflow-hidden rounded-xl border border-slate-200"
              >
                <div
                  className="h-52 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/25" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                  {item.type}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center">
          <OpenQuoteButton
            label="Get Free Estimate"
            className="inline-flex rounded-full bg-fuchsia-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800"
          />
        </div>
      </section>
    </main>
  );
}
