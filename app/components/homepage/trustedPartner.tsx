"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Partner = {
  name: string;
  category: string;
  logo: string;
};

const partners: Partner[] = [
  { name: "Jaquar", category: "Bathware", logo: "/logos/Jaquar-logo.png" },
  { name: "Saint-Gobain", category: "Glass", logo: "/logos/saint-gobain.png" },
  { name: "Century Ply", category: "Plywood", logo: "/logos/Century-Plyboards-Logo.png" },
  { name: "Hettich", category: "Hardware", logo: "/logos/hettich-logo.png" },
  { name: "Greenlam", category: "Laminates", logo: "/logos/Greenlam-Laminates-logo.png" },
  { name: "Hafele", category: "Fittings", logo: "/logos/hafele-logo.png" },
  { name: "Ebco", category: "Accessories", logo: "/logos/ebco-private-.png" },
  { name: "Kohler", category: "Sanitary", logo: "/logos/kohler-.png" },
  { name: "Merino", category: "Surfaces", logo: "/logos/meriro.png" },
];

export default function TrustedPartners() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#3b2f35] sm:text-4xl"
        >
          Our trusted partners
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-3 max-w-2xl text-base text-gray-600 sm:text-lg"
        >
          Winning collaborations that produce winning designs.
        </motion.p>

        {/* Logos Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className={`group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-fuchsia-200 hover:shadow-xl ${
                index === partners.length - 1 && partners.length % 4 === 1
                  ? "lg:col-span-2 lg:col-start-2"
                  : ""
              }`}
            >
              <div className="flex min-h-[120px] flex-col items-center justify-center gap-3">
                <div className="relative h-16 w-full">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 180px"
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                <p className="text-xs text-slate-500">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
