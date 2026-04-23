"use client";

import { motion } from "framer-motion";

export default function InteriorCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        onError={(event) => {
          event.currentTarget.src =
            "https://picsum.photos/seed/interior-card-fallback/1200/900";
        }}
        className="w-full h-[280px] object-cover transition duration-500 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300" />

      {/* TEXT */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
}