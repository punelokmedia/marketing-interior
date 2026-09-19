import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCheck, FaPhoneAlt } from "react-icons/fa";
import OpenQuoteButton from "../../../components/OpenQuoteButton";
import { customInteriorCategories, customInteriorImage, getCustomInteriorCategory } from "../../../lib/customInteriors";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return customInteriorCategories.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCustomInteriorCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} in Pune`,
    description: category.description,
    alternates: { canonical: `/services/Custom-interiorpage/${category.slug}` },
  };
}

export default async function CustomInteriorCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCustomInteriorCategory(slug);
  if (!category) notFound();

  const heroImage = customInteriorImage(category, category.images[0]);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="relative isolate min-h-[32rem] overflow-hidden bg-slate-950 text-white">
        <Image src={heroImage} alt={`${category.title} design`} fill preload sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/20" />
        <div className="relative mx-auto flex min-h-[32rem] max-w-6xl flex-col justify-center px-6 py-20">
          <Link href="/services/Custom-interiorpage" className="w-fit text-sm font-semibold text-fuchsia-200 transition hover:text-white">
            ← Back to Custom Interiors
          </Link>
          <p className="mt-10 text-xs font-bold tracking-[0.24em] text-fuchsia-200">DESIGNED AROUND YOU</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{category.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{category.introduction}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <OpenQuoteButton label="Get a Personalised Quote" className="rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-600" />
            <a href="tel:+919067777035" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-950">
              <FaPhoneAlt aria-hidden="true" /> Call 90677 77035
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-fuchsia-700">WHAT YOU CAN EXPECT</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Thoughtful design. Dependable execution.</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">{category.satisfaction}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {category.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><FaCheck className="text-xs" aria-hidden="true" /></span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-fuchsia-700">DESIGN INSPIRATION</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Explore {category.shortTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">Choose a direction you like and our designers will adapt it to your dimensions, preferences, and budget.</p>
        </div>
        <div className="space-y-8">
          {category.images.map((filename, index) => {
            const src = customInteriorImage(category, filename);
            const copy = category.showcase[index];
            return (
              <article key={filename} className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md lg:grid-cols-2">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${copy.title} image in full size`}
                  className={`group relative min-h-72 overflow-hidden bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-700 sm:min-h-96 ${index % 2 ? "lg:order-2" : ""}`}
                >
                  <Image src={src} alt={copy.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-4 right-4 rounded-full bg-slate-950/75 px-4 py-2 text-xs font-semibold text-white backdrop-blur">Open full image ↗</span>
                </a>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="text-xs font-bold tracking-[0.22em] text-fuchsia-700">MADE FOR YOUR LIFESTYLE</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">{copy.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{copy.text}</p>
                  <OpenQuoteButton label={`Plan My ${category.shortTitle}`} className="mt-6 w-fit rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-fuchsia-700" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-center text-white shadow-2xl sm:px-10 sm:py-14">
          <p className="text-xs font-bold tracking-[0.22em] text-fuchsia-300">LET’S DESIGN YOUR SPACE</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">Ready for a solution made specifically for your home?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">Talk to our team about your room, preferred style, storage needs, and expected timeline.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <OpenQuoteButton label="Connect with a Designer" className="rounded-full bg-fuchsia-700 px-6 py-3 font-semibold text-white transition hover:bg-fuchsia-600" />
            <a href="tel:+919067777035" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"><FaPhoneAlt aria-hidden="true" /> 90677 77035</a>
          </div>
        </div>
      </section>
    </main>
  );
}
