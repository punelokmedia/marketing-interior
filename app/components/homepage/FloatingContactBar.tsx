"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingContactBar() {
  return (
    <div className="fixed right-3 top-1/2 z-40 -translate-y-1/2">
      <div className="flex flex-col gap-3">
        <motion.a
          href="tel:+916205878945"
          whileHover={{ x: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-2 rounded-2xl bg-fuchsia-700 px-5 py-3 text-white shadow-lg shadow-fuchsia-700/30"
          aria-label="Call now"
          title="Call Now"
        >
          <FaPhoneAlt className="text-sm" />
          <span className="text-base font-semibold">Call</span>
        </motion.a>

        <motion.a
          href="https://wa.me/916205878945"
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-white shadow-lg shadow-emerald-600/30"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
        >
          <FaWhatsapp className="text-base" />
          <span className="text-base font-semibold">WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
}
