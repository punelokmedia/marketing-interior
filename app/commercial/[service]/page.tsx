import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCheck, FaPhoneAlt } from "react-icons/fa";
import OpenQuoteButton from "../../components/OpenQuoteButton";
import { commercialInteriorImage, commercialInteriorServices, getCommercialInteriorService } from "../../lib/commercialInteriors";

type Props = { params: Promise<{ service: string }> };

export function generateStaticParams() {
  return commercialInteriorServices.map(({ slug }) => ({ service: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getCommercialInteriorService((await params).service);
  if (!service) return {};
  return { title: `${service.title} in Pune`, description: service.summary, alternates: { canonical: `/commercial/${service.slug}` } };
}

export default async function CommercialServicePage({ params }: Props) {
  const service = getCommercialInteriorService((await params).service);
  if (!service) notFound();
  const hero = commercialInteriorImage(service, service.images[0]);

  return (
    <main className="min-h-screen bg-white pb-20 text-slate-950">
      <section className="bg-[#f5f3ef] pt-20 sm:pt-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
          <div className="py-4 lg:py-10">
            <Link href="/commercial" className="text-sm font-semibold text-amber-800 transition hover:text-slate-950">← Back to Commercial</Link>
            <p className="mt-10 text-xs font-bold tracking-[0.24em] text-amber-700">{service.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{service.introduction}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <OpenQuoteButton label="Plan My Office" className="rounded-full bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-500" />
              <a href="tel:+919067777035" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 font-bold transition hover:border-slate-950"><FaPhoneAlt aria-hidden="true" /> 90677 77035</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-slate-300 pt-6 text-center">
              <div><strong className="block text-lg">100%</strong><span className="text-xs text-slate-600">Customisable</span></div>
              <div><strong className="block text-lg">End-to-end</strong><span className="text-xs text-slate-600">Execution</span></div>
              <div><strong className="block text-lg">Quality</strong><span className="text-xs text-slate-600">Checked</span></div>
            </div>
          </div>
          <a href={hero} target="_blank" rel="noopener noreferrer" className="group relative mx-auto aspect-[3/4] w-full max-w-xl overflow-hidden rounded-[2rem] bg-white shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700">
            <Image src={hero} alt={`${service.title} by Benz Architecture`} fill preload sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain transition duration-700 group-hover:scale-[1.02]" />
            <span className="absolute bottom-5 right-5 rounded-full bg-slate-950/80 px-4 py-2 text-xs font-bold text-white backdrop-blur">View full image ↗</span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-amber-700">MORE THAN A WORKPLACE</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Create an office where people do not just work—they belong.</h2>
            <p className="mt-5 leading-8 text-slate-600">{service.promise}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <span className="flex size-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><FaCheck aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-amber-700">CURATED OFFICE IDEAS</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Find the right direction for your workplace</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">Explore layouts and styles, then book a consultation so we can adapt your preferred direction to your team, site, and brand.</p>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {service.images.map((filename, index) => {
            const src = commercialInteriorImage(service, filename);
            const item = service.showcases[index];
            return (
              <article key={filename} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} image`} className="group relative block aspect-[3/4] overflow-hidden bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600">
                  <Image src={src} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </a>
                <div className="p-6">
                  <h3 className="text-xl font-bold leading-snug">{item.title}</h3>
                  <dl className="mt-4 space-y-2 text-sm text-slate-600">
                    <div><dt className="inline font-bold text-slate-900">Style: </dt><dd className="inline">{item.style}</dd></div>
                    <div><dt className="inline font-bold text-slate-900">Ideal for: </dt><dd className="inline">{item.idealFor}</dd></div>
                  </dl>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <OpenQuoteButton label="Book Consultation" className="rounded-full border border-red-500 px-3 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-50" />
                    <OpenQuoteButton label="Get Quote" className="rounded-full bg-red-500 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-red-600" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-5 md:px-8">
        <div className="rounded-3xl bg-slate-950 px-6 py-12 text-center text-white shadow-2xl sm:px-10 sm:py-16">
          <p className="text-xs font-bold tracking-[0.22em] text-amber-300">START THE CONVERSATION</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">Let’s create a workplace your team and clients will remember.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">Tell us about your area, team size, business needs, and timeline. We’ll help you plan the next step.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <OpenQuoteButton label="Get a Commercial Quote" className="rounded-full bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-500" />
            <a href="tel:+919067777035" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-slate-950"><FaPhoneAlt aria-hidden="true" /> Call 90677 77035</a>
          </div>
        </div>
      </section>
    </main>
  );
}
