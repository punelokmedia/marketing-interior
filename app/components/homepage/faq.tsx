"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How much does home interior cost?",
    answer:
      "The cost depends on your requirements, size of home, and materials used. You can use our calculator to get an estimate.",
  },
  {
    question: "How long does it take to complete interiors?",
    answer:
      "Typically, it takes around 45 days after design finalization depending on project scope.",
  },
  {
    question: "Do you provide warranty?",
    answer:
      "Yes, we provide up to 10-year warranty on modular products and 1-year on services.",
  },
  {
    question: "Can I customize my design?",
    answer:
      "Absolutely! All designs are fully customizable based on your preferences and needs.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800"
              >
                {faq.question}
                <span className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-4 text-gray-600 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}