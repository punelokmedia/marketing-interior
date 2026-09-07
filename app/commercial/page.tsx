import HeroSlideshow from "../components/HeroSlideshow";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  HiArrowLongRight,
  HiOutlineBuildingOffice2,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCube,
  HiOutlineKey,
  HiOutlineMap,
  HiOutlinePencilSquare,
  HiOutlineShoppingBag,
  HiOutlineSparkles,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { PiForkKnife, PiHardHat } from "react-icons/pi";
import OpenQuoteButton from "../components/OpenQuoteButton";

export const metadata: Metadata = {
  title: "Commercial Interiors | Benz Architecture",
  description:
    "Thoughtfully designed offices, retail spaces, restaurants, cafés, clinics and wellness interiors.",
};

const spaces = [
  {
    title: "Office & Workspaces",
    href: "/services/interior-design",
    image: "/Commercial-office-image-first.jpg",
    alt: "Contemporary open-plan commercial office",
    icon: HiOutlineBuildingOffice2,
  },
  {
    title: "Retail & Showrooms",
    href: "/commercial#spaces",
    image: "/Commercial-retail-image.jpg",
    alt: "Premium fashion retail showroom",
    icon: HiOutlineShoppingBag,
  },
  {
    title: "Restaurants & Cafés",
    href: "/commercial#spaces",
    image: "/Commercial-kitchen-image.jpg",
    alt: "Warm contemporary restaurant interior",
    icon: PiForkKnife,
  },
  {
    title: "Clinics & Wellness",
    href: "/commercial#spaces",
    image: "/Commercial-office-image-morden.jpg",
    alt: "Calm wellness reception interior",
    icon: HiOutlineSparkles,
  },
];

const benefits = [
  {
    title: "Space planning",
    copy: "Smart layouts that maximize functionality and flow.",
    icon: HiOutlineMap,
  },
  {
    title: "Brand-led design",
    copy: "Interiors that reflect your brand and leave a lasting impression.",
    icon: HiOutlinePencilSquare,
  },
  {
    title: "2D / 3D visualization",
    copy: "See your space come to life before we build it.",
    icon: HiOutlineCube,
  },
  {
    title: "End-to-end execution",
    copy: "Seamless project management from concept to completion.",
    icon: PiHardHat,
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    copy: "We understand your goals, requirements and vision.",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    number: "02",
    title: "Design",
    copy: "We create concept, layouts and detailed designs.",
    icon: HiOutlinePencilSquare,
  },
  {
    number: "03",
    title: "Execution",
    copy: "We build with precision, quality and on-time delivery.",
    icon: HiOutlineWrenchScrewdriver,
  },
  {
    number: "04",
    title: "Handover",
    copy: "We deliver a ready-to-use space you’ll love.",
    icon: HiOutlineKey,
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-[#071329] md:text-4xl">
        {children}
      </h2>
      <span className="mx-auto mt-4 block h-0.5 w-12 bg-[#d5972d]" />
    </div>
  );
}

export default function CommercialPage() {
  return (
    <div className="overflow-hidden bg-white text-[#071329]">
      <section className="relative min-h-[610px] bg-[#071329] md:min-h-[680px]">
        <HeroSlideshow images={["/Commercial-hero.png","/Commercial-office-image.jpg","/Commercial-retail-image.jpg"]} />

        <div className="relative mx-auto flex min-h-[610px] max-w-7xl items-center px-6 py-20 md:min-h-[680px] md:px-10 lg:px-12">
          <div className="max-w-xl text-white">
            <p className="mb-5 text-sm font-bold uppercase tracking-wide text-[#f3b535]">
              Commercial interiors
            </p>
            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              Spaces that
              <br />
              mean business<span className="text-[#ff2738]">.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/90 md:text-xl">
              Thoughtfully designed workplaces,
              <br className="hidden sm:block" /> retail spaces and hospitality interiors.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <OpenQuoteButton
                label="GET FREE CONSULTATION"
                className="rounded-full bg-[#ff2638] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#e91d30]"
              />
              <Link
                href="#spaces"
                className="rounded-full border border-white px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#071329]"
              >
                EXPLORE SPACES
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="spaces" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionTitle>Commercial spaces we transform</SectionTitle>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {spaces.map((space) => {
            const Icon = space.icon;
            return (
              <Link
                key={space.title}
                href={space.href}
                aria-label={`View ${space.title} interior services`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/4.2] overflow-hidden">
                  <Image
                    src={space.image}
                    alt={space.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-h-20 items-center gap-3 px-4 py-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#d5972d] text-[#d5972d]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-sm font-bold leading-tight">{space.title}</h3>
                  <HiArrowLongRight className="ml-auto size-5 shrink-0 text-[#b97817] transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
        <div className="rounded-xl bg-[#faf8f6] px-6 py-12 md:px-10">
          <SectionTitle>Designed around your business</SectionTitle>
          <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`px-5 text-center ${index ? "lg:border-l lg:border-slate-300" : ""}`}
                >
                  <Icon className="mx-auto size-12 stroke-[1.3] text-[#d19025]" />
                  <h3 className="mt-5 font-bold">{benefit.title}</h3>
                  <p className="mx-auto mt-3 max-w-[230px] text-sm leading-6 text-slate-700">
                    {benefit.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-24">
        <SectionTitle>From concept to completion</SectionTitle>
        <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <div className="absolute left-[10%] right-[10%] top-[70px] hidden border-t border-dashed border-[#d5972d] lg:block" />
          {process.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center">
                <p className="text-2xl font-light text-[#d19025]">{step.number}</p>
                <span className="relative z-10 mx-auto mt-3 grid size-20 place-items-center rounded-full border border-[#d5972d] bg-white">
                  <Icon className="size-9 stroke-[1.4] text-[#071329]" />
                </span>
                <h3 className="mt-5 font-bold">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-[240px] text-sm leading-6 text-slate-700">
                  {step.copy}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-24">
        <div className="relative overflow-hidden rounded-lg bg-[#061329] px-8 py-12 text-white shadow-xl md:px-16">
          <div className="absolute -right-16 -top-20 size-72 rotate-12 border border-white/5" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="border-l-2 border-[#e5a72f] pl-5 text-3xl font-bold leading-tight md:text-4xl">
              Let’s build your
              <br /> next business space<span className="text-[#ff2638]">.</span>
            </h2>
            <OpenQuoteButton
              label="REQUEST A QUOTE  →"
              className="rounded-lg bg-[#ff2638] px-10 py-5 text-sm font-bold text-white transition hover:bg-[#e91d30]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
