"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaBolt,
  FaCogs,
  FaGem,
  FaHandshake,
  FaHome,
  FaIndustry,
  FaLayerGroup,
  FaLightbulb,
  FaPaintRoller,
  FaShieldAlt,
  FaTools,
  FaWarehouse,
} from "react-icons/fa";

type Partner = {
  name: string;
  category: string;
  icon: IconType;
};

const partners: Partner[] = [
  { name: "Jaquar", category: "Bathware", icon: FaGem },
  { name: "Saint-Gobain", category: "Glass", icon: FaShieldAlt },
  { name: "Century Ply", category: "Plywood", icon: FaLayerGroup },
  { name: "Bosch", category: "Appliances", icon: FaTools },
  { name: "Siemens", category: "Electronics", icon: FaBolt },
  { name: "Hettich", category: "Hardware", icon: FaCogs },
  { name: "Greenlam", category: "Laminates", icon: FaPaintRoller },
  { name: "Samsung", category: "Smart Home", icon: FaLightbulb },
  { name: "Hafele", category: "Fittings", icon: FaIndustry },
  { name: "Ebco", category: "Accessories", icon: FaWarehouse },
  { name: "Kohler", category: "Sanitary", icon: FaHome },
  { name: "Merino", category: "Surfaces", icon: FaHandshake },
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
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {partners.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-fuchsia-200 hover:shadow-xl"
            >
              <div className="flex min-h-[120px] flex-col items-center justify-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-hover:bg-fuchsia-100 group-hover:text-fuchsia-700">
                  <item.icon className="text-xl" />
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
