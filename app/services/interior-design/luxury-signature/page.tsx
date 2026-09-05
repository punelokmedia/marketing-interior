import Image from "next/image";
import Link from "next/link";
import OpenQuoteButton from "../../../components/OpenQuoteButton";
import photo1 from "../../../../public/Luxury Signature/ChatGPT Image Sep 5, 2026, 05_17_38 PM (1).png";
import photo2 from "../../../../public/Luxury Signature/ChatGPT Image Sep 5, 2026, 05_17_39 PM (2).png";
import photo3 from "../../../../public/Luxury Signature/ChatGPT Image Sep 5, 2026, 05_17_39 PM (3).png";
import photo4 from "../../../../public/Luxury Signature/ChatGPT Image Sep 5, 2026, 05_17_40 PM (4).png";

const photos = [photo1, photo2, photo3, photo4];

export default function LuxurySignaturePage() {
  return (
    <main className="bg-stone-50 pb-20 pt-8 sm:pt-12">
      <header className="mx-auto max-w-5xl px-6 pb-10">
        <Link href="/services/interior-design" className="text-sm font-semibold text-fuchsia-700 hover:underline">
          ← Back to Interior Design
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">The Luxury Signature collection</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-6xl">A home with your signature in every detail.</h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-600">Explore Benzarc interior inspiration shaped around individual taste, considered materials and refined detailing. Imagine the possibilities for your home, then request a personalised design and quote.</p>
        <OpenQuoteButton label="Get My Personalised Quote" className="mt-5 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800" />
      </header>

      <section aria-label="Luxury Signature photo catalogue" className="mx-auto max-w-5xl">
        {photos.map((photo, index) => (
          <Image
            key={photo.src}
            src={photo}
            alt={`Luxury Signature interior inspiration ${index + 1}`}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="block h-auto w-full"
          />
        ))}
      </section>

      <section className="mx-auto max-w-5xl bg-stone-900 px-6 py-14 text-white sm:px-12 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">The value is in the detail</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">Beautiful to look at. Thoughtful to live in.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">The value of a Benzarc interior comes from choices that work together: layouts shaped around your routines, a cohesive material palette, and attention to the junctions, proportions and finishes you see every day. Build your brief around the details that matter most to you.</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div><h3 className="text-lg font-semibold">Designed around you</h3><p className="mt-2 text-stone-300">Consider furniture proportions, movement and storage together to create a home that feels personal and practical.</p></div>
          <div><h3 className="text-lg font-semibold">Materials with intention</h3><p className="mt-2 text-stone-300">Choose textures and finishes for their look, upkeep and suitability, so your investment supports the way you live.</p></div>
          <div><h3 className="text-lg font-semibold">Detail that connects every room</h3><p className="mt-2 text-stone-300">Coordinate cabinetry, lighting and finishes to give each room character within one considered design.</p></div>
        </div>
        <p className="mt-8 max-w-2xl text-stone-300">Ready to make it yours? Share your floor plan and priorities. Request a quote with a clear scope and material selections, so you can understand what your budget will deliver.</p>
        <OpenQuoteButton label="Get My Luxury Signature Quote" className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-100" />
      </section>
    </main>
  );
}
