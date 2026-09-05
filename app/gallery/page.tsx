"use client";

import HeroSlideshow from "../components/HeroSlideshow";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import OpenQuoteButton from "../components/OpenQuoteButton";

const galleryCategories = [
  {
    id: "video-gallery",
    title: "Video Gallery",
    subtitle: "Walkthroughs and guided interior stories.",
    image:
      "/From%20Klickpin.com-%20877216833690196814-pin-id-877216833690196814.jpg",
    description:
      "If you are looking for realistic inspiration around interior process and outcomes, our video gallery will help you explore finished homes in detail.",
  },
  {
    id: "interior-gallery",
    title: "Interior Gallery",
    subtitle: "Handpicked home interior highlights.",
    image: "interio gallery.jpg",
    description:
      "A wide range of completed projects including apartments, villas and family homes. Browse practical designs with premium aesthetics.",
  },
  {
    id: "project-gallery",
    title: "Project-wise Gallery",
    subtitle: "Room-by-room completed project showcase.",
    image: "project_wise.jpg",
    description:
      "From consultation to complete execution, explore project-wise visuals with modern, comfortable and budget-smart interior ideas.",
  },
];

const galleryImages = [
  {
    id: "gallery-grid-1",
    type: "Living",
    image: "project-image-one.jpg",
  },
  {
    id: "gallery-grid-2",
    type: "Kitchen",
    image: "project-image-second.jpg",
  },
  {
    id: "gallery-grid-3",
    type: "Bedroom",
    image: "project-image-3th.jpg",
  },
  {
    id: "gallery-grid-4",
    type: "Workspace",
    image: "project-image-4th.jpg",
  },
  {
    id: "gallery-grid-5",
    type: "Living",
    image: "project-image-5th.jpg",
  },
  {
    id: "gallery-grid-6",
    type: "Kitchen",
    image: "project-image-6th.jpg",
  },
  {
    id: "gallery-grid-7",
    type: "Bedroom",
    image: "project-image-fourth.jpg",
  },
  {
    id: "gallery-grid-8",
    type: "Workspace",
    image: "project-image-7th.jpg",
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
    video:
      "/videos/From%20Klickpin.com-%20314618723993406202-pin-id-314618723993406202.mp4",
  },
  {
    title: "Luxury Kitchen Reveal",
    video:
      "/videos/From%20Klickpin.com-%201120903794787406614-pin-id-1120903794787406614.mp4",
  },
  {
    title: "Compact Home Space Plan",
    video:
      "/videos/From%20Klickpin.com-%20174514554307978177-pin-id-174514554307978177.mp4",
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
        <HeroSlideshow images={["/background.jpg","/project-image-one.jpg","/project-image-second.jpg"]} />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.p
            className="text-xs font-semibold tracking-[0.25em] text-cyan-200"
            initial={{ opacity: 0, y: 24 }}
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
              <video
                className="h-56 w-full bg-black object-cover"
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={item.title}
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
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
