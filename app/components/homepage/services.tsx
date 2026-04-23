"use client";

import { motion } from "framer-motion";
import { FaTools, FaWallet, FaShieldAlt } from "react-icons/fa";

export default function WhatWeOffer() {
  return (
    <section className="bg-gray-100 py-20 px-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What we offer
          </h2>

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
          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaTools className="text-red-500 text-xl" />
              <h3 className="text-lg font-semibold text-black">Our services</h3>
            </div>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Modular kitchens</li>
              <li>• Modular wardrobes</li>
              <li>• Lighting</li>
              <li>• Flooring</li>
              <li>• Electrical work</li>
              <li>• Civil work</li>
              <li>• False ceiling</li>
              <li>• Wall design & painting</li>
            </ul>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaWallet className="text-red-500 text-xl" />
              <h3 className="text-lg font-semibold text-black">
                Price benefits
              </h3>
            </div>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li>
                • Flexible payment options - EMI solutions and payment schemes
                from leading financial partners.
              </li>
              <li>
                • No hidden costs - Transparent costing without last-minute
                additions.
              </li>
            </ul>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaShieldAlt className="text-red-500 text-xl" />
              <h3 className="text-lg font-semibold text-black">Warranty</h3>
            </div>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li>
                • Flat 10-year warranty - Stay worry-free with our warranty
                policy on modular products.
              </li>
              <li>
                • Up to 1-year on-site service warranty on painting, electrical,
                plumbing and more.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
