import Image from "next/image";
import Link from "next/link";
import OpenQuoteButton from "../../../components/OpenQuoteButton";
import photo1 from "../../../../public/Premium Living/ChatGPT Image Sep 5, 2026, 04_53_59 PM (1).png";
import photo2 from "../../../../public/Premium Living/ChatGPT Image Sep 5, 2026, 04_53_59 PM (2).png";
import photo3 from "../../../../public/Premium Living/ChatGPT Image Sep 5, 2026, 04_53_59 PM (3).png";
import photo4 from "../../../../public/Premium Living/ChatGPT Image Sep 5, 2026, 04_53_59 PM (4).png";
import photo5 from "../../../../public/Premium Living/ChatGPT Image Sep 5, 2026, 04_54_00 PM (5).png";

const photos = [photo1, photo2, photo3, photo4, photo5];

export default function PremiumLivingPage() {
  return (
    <main className="bg-stone-50 pb-20 pt-8 sm:pt-12">
      <header className="mx-auto max-w-5xl px-6 pb-10">
        <Link href="/services/interior-design" className="text-sm font-semibold text-fuchsia-700 hover:underline">
          ← Back to Interior Design
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">The Premium Living collection</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-6xl">More room. More character. More you.</h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-600">Discover spacious 3BHK interiors with a considered material palette, practical storage and details that make coming home feel special. Share your vision and ask for a quote tailored to your home.</p>
        <OpenQuoteButton label="Get My Personalised Quote" className="mt-5 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800" />
      </header>

      <section aria-label="Premium Living photo catalogue" className="mx-auto max-w-5xl">
        {photos.map((photo, index) => (
          <Image
            key={photo.src}
            src={photo}
            alt={`Premium Living interior inspiration ${index + 1}`}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="block h-auto w-full"
          />
        ))}
      </section>

      <section className="mx-auto max-w-5xl bg-stone-900 px-6 py-14 text-white sm:px-12 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">More thought in every square foot</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">Invest in the way you live, every day.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">Premium living is in the details you experience daily: a welcoming room, storage that simplifies routines, and finishes that feel right together. Let us help you choose where your budget makes the most difference.</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div><h3 className="text-lg font-semibold">Space with purpose</h3><p className="mt-2 text-stone-300">Plan around your routines so every corner feels useful and comfortable.</p></div>
          <div><h3 className="text-lg font-semibold">Details worth coming home to</h3><p className="mt-2 text-stone-300">Bring a richer material palette and practical storage into a home designed around you.</p></div>
          <div><h3 className="text-lg font-semibold">A look that belongs together</h3><p className="mt-2 text-stone-300">Create a cohesive feel with finishes selected to complement your space.</p></div>
        </div>
        <OpenQuoteButton label="Get My Premium Living Quote" className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-100" />
      </section>
    </main>
  );
}
