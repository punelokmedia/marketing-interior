"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import OpenQuoteButton from "../components/OpenQuoteButton";

const serviceCards = [
  {
    title: "Interior Design",
    href: "/services/interior-design",
    image: "https://picsum.photos/seed/services-interior-design/1200/900",
    description:
      "Complete home interior concepts with layout planning, styling, and turnkey execution.",
    points: ["2D/3D concepts", "Space optimization", "Premium finishing"],
  },
  {
    title: "Renovation",
    href: "/services/renovation",
    image: "https://picsum.photos/seed/services-renovation/1200/900",
    description:
      "Upgrade old spaces with smart re-planning, civil work, electrical updates, and modern aesthetics.",
    points: ["Layout upgrades", "Civil + electrical", "End-to-end supervision"],
  },
  {
    title: "Custom Interior",
    href: "/services/Custom-interiorpage",
    image: "https://picsum.photos/seed/services-custom-interior/1200/900",
    description:
      "Tailor-made modular solutions designed around your exact storage, style, and room dimensions.",
    points: ["Made-to-measure units", "Material options", "Factory precision"],
  },
];

const process = [
  "Consultation and requirement mapping",
  "Design proposal with transparent costing",
  "Material selection and final approval",
  "Execution with quality checks and handover",
];

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white pb-20">
      <section className="relative overflow-hidden rounded-b-[2rem] py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/what-we-do-hero/2200/1200')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/35" />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.p
            className="text-xs font-semibold tracking-[0.25em] text-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            WHAT WE DO
          </motion.p>
          <motion.h1
            className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Design, Renovation, and Custom Interior Services
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-sm text-slate-100 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            One trusted team for planning, customization, and execution of your
            complete home interiors.
          </motion.p>
          <OpenQuoteButton
            label="Get Free Quote"
            className="mt-8 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800"
          />
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {serviceCards.map((service, idx) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.07 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
            >
              <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-1">
                  {service.points.map((point) => (
                    <li key={point} className="text-sm text-slate-700">
                      • {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex rounded-xl bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  View Details
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/60 md:p-8">
          <h3 className="text-2xl font-bold text-slate-900">How we work</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {process.map((step) => (
              <div
                key={step}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
