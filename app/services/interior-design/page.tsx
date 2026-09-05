"use client";

import HeroSlideshow from "../../components/HeroSlideshow";
import { motion } from "framer-motion";
import Link from "next/link";
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
    image: "/Essential%20Home/ChatGPT%20Image%20Sep%205%2C%202026%2C%2004_48_41%20PM%20(1).png",
    href: "/services/interior-design/essential-home",
    oldPrice: "8.2 Lac",
    offerPrice: "6.6 Lac",
    details: "Perfect for 2BHK modular essentials with modern finishes.",
  },
  {
    name: "Premium Living",
    image: "/Premium%20Living/ChatGPT%20Image%20Sep%205%2C%202026%2C%2004_53_59%20PM%20(1).png",
    href: "/services/interior-design/premium-living",
    oldPrice: "14.9 Lac",
    offerPrice: "11.2 Lac",
    details: "Designed for spacious 3BHK homes with premium material palette.",
  },
  {
    name: "Luxury Signature",
    image: "/Luxury%20Signature/ChatGPT%20Image%20Sep%205%2C%202026%2C%2005_17_38%20PM%20(1).png",
    href: "/services/interior-design/luxury-signature",
    oldPrice: "21.6 Lac",
    offerPrice: "16.9 Lac",
    details: "High-end bespoke interiors with advanced design detailing.",
  },
];

const spaces = [
  {
    title: "Kitchen Interiors",
    image: "/kitchen-interior/ImgHunt_Pinimg_20260905_029588847bdb92a1c3dc3c658aa5570e.jpeg",
    href: "/services/interior-design/kitchen-interior",
  },
  {
    title: "Living Room Styling",
    image: "/livingroom-style/ImgHunt_Pinterest_20260905_38be8c612aff0e28bfa041158bf5e62a.jpeg",
    href: "/services/interior-design/livingroom-style",
  },
  {
    title: "Bedroom Design",
    image: "/bedroom/ImgHunt_Pinterest_20260905_59ae1e99472036f74ca87ad7e8ac5f60.jpeg",
    href: "/services/interior-design/bedroom",
  },
  {
    title: "Wardrobe & Storage",
    image: "/Wardrobe-Storage/ImgHunt_Pinterest_20260905_1e04d1f640088a993a941582280e914b.jpeg",
    href: "/services/interior-design/wardrobe-storage",
  },
];

export default function InteriorDesignPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white pb-20">
      <section className="relative overflow-hidden rounded-b-[2rem] py-24 text-white">
        <HeroSlideshow images={["/service_page_hero.jpg","/about-hero.jpg","/background.jpg"]} />

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
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${pkg.image}')` }}
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{pkg.details}</p>
                {pkg.href && (
                  <Link href={pkg.href} className="mt-3 inline-block font-semibold text-fuchsia-700 after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-fuchsia-700">
                    Explore {pkg.name} →
                  </Link>
                )}
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
              {item.href && (
                <Link
                  href={item.href}
                  aria-label={`View ${item.title} catalogue`}
                  className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                />
              )}
              <p className="pointer-events-none absolute bottom-4 left-4 text-lg font-semibold text-white">
                {item.title}
                {item.href && (
                  <span className="mt-1 block text-sm font-normal">View catalogue →</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
