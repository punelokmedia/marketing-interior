"use client";

import { motion } from "framer-motion";
import {
  FaUser,
  FaCouch,
  FaPaperPlane,
  FaTools,
  FaTruck,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUser />,
    text: "Meet a designer",
  },
  {
    icon: <FaCouch />,
    text: "(5% payment) Book Livspace",
  },
  {
    icon: <FaPaperPlane />,
    text: "(60% payment) Execution begins",
  },
  {
    icon: <FaTools />,
    text: "(100% payment) Final installations",
  },
  {
    icon: <FaTruck />,
    text: "Move in and enjoy!",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How it works
        </h2>

        {/* STEPS */}
        <div className="relative mt-16">
          {/* LINE */}
          <div className="hidden md:block absolute top-10 left-0 w-full border-t border-dashed border-gray-300"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center"
              >
                {/* ICON CIRCLE */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full border bg-white shadow-sm text-red-500 text-2xl z-10">
                  {step.icon}
                </div>

                {/* TEXT */}
                <p className="mt-4 text-sm text-gray-700 max-w-[140px]">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button className="mt-12 bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition">
          BOOK A CONSULTATION
        </button>
      </div>
    </section>
  );
}
