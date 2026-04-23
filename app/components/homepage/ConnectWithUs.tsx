"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaRegClock } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function ConnectWithUs() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-slate-600">
                CONTACT US
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Let&apos;s design your dream home together
              </h2>
              <p className="mt-4 text-base text-slate-600 md:text-lg">
                Share your idea and get expert guidance for interior planning,
                budget, and execution timeline.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <FaRegClock className="text-blue-600" />
                    Fast Response
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Our team usually replies within 30 minutes.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <MdOutlineSupportAgent className="text-blue-600" />
                    Expert Support
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Talk directly with our design consultants.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-lg">
              <p className="text-sm text-slate-300">Quick Connect</p>
              <h3 className="mt-2 text-2xl font-semibold">
                We&apos;re just one tap away
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Call us for immediate assistance or message on WhatsApp for
                easy updates.
              </p>

              <div className="mt-7 flex flex-col gap-4">
                <motion.a
                  href="tel:+916205878945"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg"
                >
                  <FaPhoneAlt />
                  Call Now
                </motion.a>

                <motion.a
                  href="https://wa.me/916205878945"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 rounded-full border border-white/30 bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg"
                >
                  <FaWhatsapp className="size-5" />
                  WhatsApp Us
                </motion.a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
            3500+ happy families trusted InteriorWala to transform their homes.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
