"use client";

import { motion } from "framer-motion";
import { FaCalendarCheck, FaAward, FaTags } from "react-icons/fa";

const stats = [
  { number: "9562+", label: "#DeliveredHomes" },
  { number: "30+", label: "Expert Interior Designers" },
  { number: "5", label: "Experience Centres" },
  { number: "4.6+", label: "CSAT" },
];

export default function WhyChoose() {
  return (
    <>
      {/* 🔹 WHITE STRIP (Highlights) */}
      <section className="bg-white py-15 text-center ">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div whileHover={{ y: -5 }}>
            <FaCalendarCheck className="mx-auto text-3xl text-red-500" />
            <p className="mt-3 text-gray-700 font-medium">
              45 days move-in <br /> guarantee
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }}>
            <FaAward className="mx-auto text-3xl text-red-500" />
            <p className="mt-3 text-gray-700 font-medium">
              Flat 10-year warranty
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }}>
            <FaTags className="mx-auto text-3xl text-red-500" />
            <p className="mt-3 text-gray-700 font-medium">No Hidden Cost</p>
          </motion.div>
        </div>
      </section>
      <section className="bg-[#5f9f88] py-15 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* HEADING */}
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Choose InteriorWala?
          </h2>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-4xl font-semibold">
                  {item.number}
                </h3>
                <p className="mt-3 text-sm md:text-base text-white/80">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
