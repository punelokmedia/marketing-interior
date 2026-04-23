"use client";

import { motion } from "framer-motion";
import { type ChangeEvent, type FormEvent, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaRegClock,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { submitLeadToWeb3Forms } from "../lib/web3forms";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const projectTypes = [
  "2BHK / 3BHK Interiors",
  "Modular Kitchen",
  "Bedroom Makeover",
  "Living Room Design",
  "Full Home Renovation",
  "Commercial Space",
];

const processSteps = [
  {
    title: "Share Requirement",
    description: "Tell us your space details, style preference, and budget.",
  },
  {
    title: "Free Expert Call",
    description: "Our designer connects with you and suggests the right plan.",
  },
  {
    title: "Get Proposal",
    description: "Receive layout ideas, quote estimate, and execution timeline.",
  },
];

const quickFAQs = [
  {
    question: "How soon will I get a callback?",
    answer: "Usually within 30 minutes during business hours.",
  },
  {
    question: "Do you provide on-site consultation?",
    answer: "Yes, we offer both virtual and on-site consultation.",
  },
  {
    question: "Can I get budget-friendly options?",
    answer: "Yes, we design packages for every budget range.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange =
    (field: keyof ContactFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    const structuredMessage = [
      "Contact Page Lead",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Message: ${formData.message || "No additional message"}`,
    ].join("\n");

    try {
      await submitLeadToWeb3Forms({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: structuredMessage,
        source: "Contact Page",
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unable to submit right now. Please try again.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white pb-20 pt-2 md:pt-3">
      <section className="relative overflow-hidden rounded-b-[2.2rem] bg-slate-950 px-1 py-20 text-white md:py-24">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.p
            className="text-xs font-semibold tracking-[0.25em] text-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CONTACT INTERIORWALA
          </motion.p>
          <motion.h1
            className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Ready to transform your space?
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-sm text-slate-200 sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Tell us about your project and our design team will guide you with
            ideas, budget clarity, and next steps.
          </motion.p>

          <motion.div
            className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm backdrop-blur-sm">
              3500+ Happy Families
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm backdrop-blur-sm">
              7+ Years Experience
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm backdrop-blur-sm">
              End-to-End Execution
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:gap-7 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 md:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-2xl font-bold text-slate-900">
              Talk to our experts
            </h2>
            <p className="mt-2 text-slate-600">
              Prefer quick help? Reach us instantly using one of these channels.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="tel:+916205878945"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 transition hover:bg-slate-100"
              >
                <span className="rounded-full bg-blue-100 p-2 text-blue-700">
                  <FaPhoneAlt />
                </span>
                +91 62058 78945
              </a>

              <a
                href="mailto:hello@interiorwala.com"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 transition hover:bg-slate-100"
              >
                <span className="rounded-full bg-purple-100 p-2 text-purple-700">
                  <MdOutlineEmail />
                </span>
                hello@interiorwala.com
              </a>

              <a
                href="https://wa.me/916205878945"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 transition hover:bg-slate-100"
              >
                <span className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                  <FaWhatsapp />
                </span>
                Chat on WhatsApp
              </a>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800">
                <span className="rounded-full bg-rose-100 p-2 text-rose-700">
                  <FaMapMarkerAlt />
                </span>
                <span>
                  Office: 12th Floor, Skyline Plaza, Andheri East, Mumbai
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <FaRegClock className="text-sky-600" />
                Working Hours
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Monday to Saturday: 10:00 AM - 8:00 PM
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 md:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08, duration: 0.55 }}
          >
            <h2 className="text-2xl font-bold text-slate-900">
              Request a free consultation
            </h2>
            <p className="mt-2 text-slate-600">
              Fill in your details and we will get back to you shortly.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input
                value={formData.name}
                onChange={handleChange("name")}
                required
                placeholder="Your name"
                className="rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-slate-400"
              />
              <input
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                required
                placeholder="Email address"
                className="rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-slate-400"
              />
              <input
                value={formData.phone}
                onChange={handleChange("phone")}
                required
                placeholder="Phone number"
                className="rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-slate-400 md:col-span-2"
              />
              <textarea
                value={formData.message}
                onChange={handleChange("message")}
                rows={5}
                placeholder="Tell us about your interior requirement"
                className="rounded-xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-slate-400 md:col-span-2"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </motion.button>

            {submitted && (
              <motion.p
                className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thanks! We received your request and will contact you soon.
              </motion.p>
            )}

            {submitError && (
              <motion.p
                className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitError}
              </motion.p>
            )}

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <FaShieldAlt className="text-emerald-600" />
              Your details are safe and kept private.
            </div>
          </motion.form>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <motion.div
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <h3 className="text-2xl font-bold text-slate-900">What happens next?</h3>
          <p className="mt-2 text-slate-600">
            Simple and transparent process to start your interior project.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                  STEP {index + 1}
                </p>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-2xl font-bold text-slate-900">Project types we handle</h3>
            <p className="mt-2 text-slate-600">
              Share your requirement and we will tailor a package for you.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {projectTypes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08, duration: 0.55 }}
          >
            <h3 className="text-2xl font-bold text-slate-900">Quick FAQs</h3>
            <div className="mt-5 space-y-4">
              {quickFAQs.map((item) => (
                <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="flex items-start gap-2 text-sm font-semibold text-slate-900">
                    <FaCheckCircle className="mt-0.5 text-emerald-600" />
                    {item.question}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
