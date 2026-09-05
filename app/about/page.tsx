import HeroSlideshow from "../components/HeroSlideshow";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiAward,
  FiBox,
  FiCalendar,
  FiCheckCircle,
  FiClipboard,
  FiEdit3,
  FiHome,
  FiMessageCircle,
  FiSmile,
  FiUsers,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import OpenQuoteButton from "../components/OpenQuoteButton";

export const metadata: Metadata = {
  title: "About Us | InteriorWala",
  description:
    "Meet InteriorWala and discover how we create thoughtful, functional interiors made for everyday living.",
};

const highlights = [
  { icon: FiCalendar, value: "7+", label: "Years Experience" },
  { icon: FiUsers, value: "1200+", label: "Happy Clients" },
  { icon: FiHome, value: "1500+", label: "Projects Completed" },
  { icon: FiAward, value: "4.9/5", label: "Client Satisfaction" },
];

const process = [
  {
    icon: FiMessageCircle,
    title: "Understand",
    description: "We listen to your needs, style, and budget.",
  },
  {
    icon: FiEdit3,
    title: "Plan",
    description: "We create smart plans tailored to your space.",
  },
  {
    icon: FiBox,
    title: "Design",
    description: "We craft stunning designs that match your vision.",
  },
  {
    icon: FiClipboard,
    title: "Execute",
    description: "Quality materials and skilled craftsmanship.",
  },
  {
    icon: FiCheckCircle,
    title: "Deliver",
    description: "On-time delivery with attention to every detail.",
  },
  {
    icon: FiSmile,
    title: "Support",
    description: "We stay with you even after completion.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate min-h-[720px] bg-[#17110e] text-white">
        <HeroSlideshow images={["/about-hero.jpg","/herosection-image.jpg","/service_page_hero.jpg"]} />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-40 pt-16 md:px-8 lg:grid-cols-[0.9fr_1.25fr] lg:items-center lg:gap-16 lg:pb-44 lg:pt-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-red-400">
              About InteriorWala
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              We Design Spaces
              <br />
              You&apos;ll <span className="text-red-500">Love to Live In</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              At InteriorWala, we believe every space has the potential to inspire. We blend
              creativity, functionality, and quality to design interiors that reflect your style
              and enhance everyday living.
            </p>

            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-y-7 sm:grid-cols-4">
              {highlights.map(({ icon: Icon, value, label }, index) => (
                <div
                  key={label}
                  className={`pr-4 ${index > 0 ? "sm:border-l sm:border-white/30 sm:pl-7" : ""}`}
                >
                  <Icon className="mb-3 size-7 text-red-500" aria-hidden="true" />
                  <p className="text-2xl font-bold sm:text-3xl">{value}</p>
                  <p className="mt-1 text-xs text-white/70 sm:text-sm">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <OpenQuoteButton
                label="Get Free Consultation"
                className="inline-flex items-center rounded-full bg-red-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-600"
              />
              <Link
                href="/gallery"
                className="inline-flex items-center gap-3 rounded-full border border-white/60 px-7 py-4 text-sm font-bold transition hover:border-white hover:bg-white hover:text-slate-950"
              >
                Explore Our Work <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-3xl lg:mx-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl shadow-black/50">
              <Image
                src="/about-hero.jpg"
                alt="Modern kitchen with warm lighting and a breakfast counter"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>

            <blockquote className="absolute -bottom-8 right-3 w-[220px] rounded-3xl bg-white p-6 text-slate-800 shadow-2xl sm:-right-3 sm:w-[250px] sm:p-7">
              <FaQuoteLeft className="mb-4 text-3xl text-red-500" aria-hidden="true" />
              <p className="text-sm leading-6 sm:text-base">
                Design is not just what it looks like, it&apos;s how it works.
              </p>
              <div className="my-4 h-px w-8 bg-red-500" />
              <cite className="text-sm not-italic text-slate-500">– Steve Jobs</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-24 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-8 shadow-xl shadow-slate-900/5 sm:px-9 lg:px-10">
          <div className="grid gap-4 border-b border-slate-100 pb-8 md:grid-cols-[0.75fr_1.25fr] md:items-end md:gap-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-500">Our Approach</p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                Designing with Purpose,
                <br />
                Delivering with Passion
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-slate-500">
              Our process is built around understanding your needs, visualizing your dream space,
              and delivering results that exceed expectations.
            </p>
          </div>

          <div className="grid gap-x-5 gap-y-8 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {process.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="relative flex gap-4 xl:block">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <div className="xl:mt-4">
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
                </div>
                {index < process.length - 1 && (
                  <FiArrowRight
                    className="absolute -right-4 top-5 hidden text-slate-400 xl:block"
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
