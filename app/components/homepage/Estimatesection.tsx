"use client";

import { motion } from "framer-motion";
import { FaCouch, FaUtensils, FaDoorOpen } from "react-icons/fa";

const data = [
  {
    title: "Full Home",
    desc: "Get an approximate costing for your full home interiors.",
    icon: <FaCouch />,
  },
  {
    title: "Kitchen",
    desc: "Get an approximate costing for your kitchen interior.",
    icon: <FaUtensils />,
  },
  {
    title: "Wardrobe",
    desc: "Get an approximate costing for your wardrobe .",
    icon: <FaDoorOpen />,
  },
];

export default function EstimateSection() {
  return (
    <section className="bg-gray-100 py-20 px-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Get an estimate for your Pune home
        </h2>

        <p className="mt-4 text-gray-500">
          Calculate the approximate cost of doing up your interiors
        </p>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 text-left"
            >
              {/* ICON */}
              <div className="text-red-500 text-3xl mb-4">{item.icon}</div>

              {/* TITLE */}
              <h3 className=" text-black text-xl font-semibold">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-gray-500 text-sm">{item.desc}</p>

              {/* BUTTON */}
              <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition">
                CALCULATE →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
