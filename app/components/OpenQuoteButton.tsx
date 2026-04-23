"use client";

import { motion } from "framer-motion";

type OpenQuoteButtonProps = {
  label: string;
  className?: string;
};

export default function OpenQuoteButton({ label, className }: OpenQuoteButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -1, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => window.dispatchEvent(new Event("openModal"))}
      className={className}
    >
      {label}
    </motion.button>
  );
}
