import Image from "next/image";
import Link from "next/link";
import OpenQuoteButton from "../../../components/OpenQuoteButton";
import photo1 from "../../../../public/Essential Home/ChatGPT Image Sep 5, 2026, 04_48_41 PM (1).png";
import photo2 from "../../../../public/Essential Home/ChatGPT Image Sep 5, 2026, 04_48_41 PM (2).png";
import photo3 from "../../../../public/Essential Home/ChatGPT Image Sep 5, 2026, 04_48_42 PM (3).png";
import photo4 from "../../../../public/Essential Home/ChatGPT Image Sep 5, 2026, 04_48_42 PM (4).png";
import photo5 from "../../../../public/Essential Home/ChatGPT Image Sep 5, 2026, 04_48_43 PM (5).png";
import photo6 from "../../../../public/Essential Home/ChatGPT Image Sep 5, 2026, 04_48_43 PM (6).png";
import photo7 from "../../../../public/Essential Home/ChatGPT Image Sep 5, 2026, 04_48_43 PM (7).png";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

export default function EssentialHomePage() {
  return (
    <main className="bg-stone-50 pb-20 pt-8 sm:pt-12">
      <header className="mx-auto max-w-5xl px-6 pb-10">
        <Link href="/services/interior-design" className="text-sm font-semibold text-fuchsia-700 hover:underline">
          ← Back to Interior Design
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">The Essential Home collection</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-6xl">Small details. A whole new feeling of home.</h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-600">Explore a considered approach to 2BHK living, with modular essentials, modern finishes and room for everyday life.</p>
        <OpenQuoteButton label="Get My Personalised Quote" className="mt-5 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800" />
      </header>

      <section aria-label="Essential Home photo catalogue" className="mx-auto max-w-5xl">
        {photos.map((photo, index) => (
          <Image
            key={photo.src}
            src={photo}
            alt={`Essential Home interior inspiration ${index + 1}`}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="block h-auto w-full"
          />
        ))}
      </section>

      <section className="mx-auto max-w-5xl bg-stone-900 px-6 py-14 text-white sm:px-12 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">More thought in every square foot</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">Make room for living. Make every choice count.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">A beautiful home starts with essentials that work together. Thoughtful planning, useful storage and coordinated finishes bring lasting everyday value to your space.</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div><h3 className="text-lg font-semibold">Space with purpose</h3><p className="mt-2 text-stone-300">Plan around your routines so every corner feels useful and comfortable.</p></div>
          <div><h3 className="text-lg font-semibold">Essentials that work harder</h3><p className="mt-2 text-stone-300">Bring practical modular solutions and storage into the heart of your home.</p></div>
          <div><h3 className="text-lg font-semibold">A look that belongs together</h3><p className="mt-2 text-stone-300">Create a cohesive feel with finishes selected to complement your space.</p></div>
        </div>
        <OpenQuoteButton label="Plan My Essential Home" className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-100" />
      </section>
    </main>
  );
}
