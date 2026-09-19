"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import HeroSlideshow from "../components/HeroSlideshow";
import OpenQuoteButton from "../components/OpenQuoteButton";

const serviceCards = [
  {
    title: "Interior Design",
    href: "/services/interior-design",
    image: "/Interior_desgin.jpg",
    description: "Complete home interior concepts with layout planning, styling, and turnkey execution.",
    points: ["2D/3D concepts", "Space optimization", "Premium finishing"],
  },
  {
    title: "Custom Interior",
    href: "/services/Custom-interiorpage",
    image: "/Custom_interior.jpg",
    description: "Tailor-made modular solutions designed around your exact storage, style, and room dimensions.",
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
        <HeroSlideshow />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.p className="text-xs font-semibold tracking-[0.25em] text-cyan-200" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            WHAT WE DO
          </motion.p>
          <motion.h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Interior Design, Tailored Around Your Life
          </motion.h1>
          <motion.p className="mt-4 max-w-2xl text-sm text-slate-100 md:text-lg" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            One trusted team for thoughtful planning, precise customization, and seamless execution of your complete home interiors.
          </motion.p>
          <OpenQuoteButton label="Get Free Quote" className="mt-8 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800" />
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-fuchsia-700">OUR EXPERTISE</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Choose the right interior solution</h2>
          <p className="mt-3 leading-7 text-slate-600">
            From complete home planning to made-to-measure furniture, every detail is designed for your space, style, and everyday needs.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {serviceCards.map((service, idx) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 transition-shadow hover:shadow-2xl hover:shadow-slate-300/70"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <Image src={service.image} alt={`${service.title} by Benz Architecture`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                  BESPOKE DESIGN
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                      <FaCheck className="mt-1 shrink-0 text-emerald-600" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-700">
                  Explore {service.title}
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/60 md:p-8">
          <p className="text-xs font-bold tracking-[0.2em] text-fuchsia-700">OUR PROCESS</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">How we bring your vision to life</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {process.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-950 font-bold text-white">{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
