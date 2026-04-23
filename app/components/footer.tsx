"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">InteriorWala</h2>
          <p className="mt-3 max-w-md text-sm text-slate-300">
            Premium interiors with transparent pricing, dedicated experts, and
            on-time execution for your dream home.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+916205878945"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
            >
              <FaPhoneAlt />
              Call 6205878945
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/916205878945"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white"
            >
              <FaWhatsapp />
              WhatsApp
            </motion.a>
          </div>

          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-fuchsia-300" />
              Serving Mumbai, Pune, Delhi, Bangalore & more cities
            </p>
            <p className="flex items-center gap-2">
              <FaRegClock className="text-fuchsia-300" />
              Mon-Sat, 10:00 AM to 8:00 PM
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              { label: "Home", href: "/" },
              { label: "What We Do", href: "/services" },
              { label: "Locations", href: "/location" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <motion.li key={item.label} whileHover={{ x: 5 }}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-white">Services</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              "Modular Kitchen",
              "Bedroom Interior",
              "Living Room Design",
              "Full Home Interior",
            ].map((item) => (
              <motion.li key={item} whileHover={{ x: 5 }}>
                <Link href="/services" className="hover:text-white">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        © 2026 InteriorWala. All rights reserved.
      </div>
    </footer>
  );
}
