"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const budgetPhoto = (number: number) =>
  `/budget/From Klickpin.com- 624733779604053144-pin-id-624733779604053144-carousel-${number}.jpg`;

const designs = [
  {
  
    images: [budgetPhoto(1)],
    type: "2BHK",
    href: "/designs/2bhk",
  },
  {
    
    images: ["/3bhk/ChatGPT Image Sep 8, 2026, 01_55_30 PM (2).png"],
    type: "3BHK",
    href: "/designs/3bhk",
  },
  {
    images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"],
    type: "4BHK",
  },
];

export default function BudgetSection() {
  return (
    <section id="budget" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Homes for every budget
            </h2>
            <p className="mt-3 text-gray-500">
              Our interior designers work with you keeping in mind your
              requirements and budget
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              window.dispatchEvent(new Event("openModal"));
            }}
            className="mt-6 md:mt-0 bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
          >
            GET FREE QUOTE
          </button>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
            >
              {/* IMAGE */}
              <div
                className="flex snap-x snap-mandatory overflow-x-auto"
                role="region"
                aria-label={`${item.type} photo catalog`}
              >
                {item.images.map((image, photoIndex) => (
                  <motion.img
                    key={image}
                    src={image}
                    alt={`Interior design catalog photo ${photoIndex + 1} for ${item.type}`}
                    className="h-[500px] w-full shrink-0 snap-center object-cover"
                  />
                ))}
              </div>
              {item.images.length > 1 && (
                <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/80 px-3 py-1 text-xs text-white">
                  Scroll for {item.images.length} photos →
                </span>
              )}

              {/* type of flats */}
              <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 text-sm px-4 py-1 rounded-full">
                {item.type}
              </div>

              {/* OVERLAY (optional subtle) */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
              {item.href && (
                <Link
                  href={item.href}
                  aria-label={`Explore the ${item.type} design catalog`}
                  className="absolute inset-0 rounded-2xl focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-red-500"
                >
                 
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
