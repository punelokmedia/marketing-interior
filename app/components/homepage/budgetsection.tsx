"use client";

import { motion } from "framer-motion";

const designs = [
  {
    price: "Starting at 3.57L*",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    type: "2BHK",
  },
  {
    price: "Starting at 4.23L*",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    type: "3BHK",
  },
  {
    price: "Starting at 4.81L*",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    type: "4BHK",
  },
];

export default function BudgetSection() {
  return (
    <section className="bg-gray-50 py-20">
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
              <motion.img
                src={item.image}
                alt="design"
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              {/* PRICE TAG */}
              <div className="absolute top-4 left-4 bg-black/80 text-white text-sm px-4 py-1 rounded-full">
                {item.price}
              </div>
              {/* type of flats */}
              <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 text-sm px-4 py-1 rounded-full">
                {item.type}
              </div>

              {/* OVERLAY (optional subtle) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
