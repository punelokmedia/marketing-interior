import Image from "next/image";
import Link from "next/link";
import OpenQuoteButton from "../../../components/OpenQuoteButton";

const images = [
  "ImgHunt_Pinterest_20260905_59ae1e99472036f74ca87ad7e8ac5f60.jpeg",
  "ImgHunt_Pinterest_20260905_7d8d6ab6b88a8fa5cbebe7b4809c3775.jpeg",
  "ImgHunt_Pinterest_20260905_80e1971ba38bbbc4fa1fe20c0ecc87ce.png",
  "ImgHunt_Pinterest_20260905_8660e74ca216c414702f5624ef63874d.png",
  "ImgHunt_Pinterest_20260905_8beb20f3e625c1d7888dba7a0e6cbb8c.png",
  "ImgHunt_Pinterest_20260905_cd600f14b1d43eec0e68192b25af814b.jpeg",
];

export default function BedroomCataloguePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-20 pt-8 sm:pt-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Link href="/services/interior-design" className="text-sm font-semibold text-fuchsia-700 hover:underline">
          ← Back to Interior Design
        </Link>
        <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">Bedroom Design</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Explore our bedroom catalogue. Find inspiration for a space that fits your home and everyday needs.
        </p>
        <p className="mt-3 text-sm text-slate-600">See something you love? Share your ideas for a quote tailored to your space.</p>
        <OpenQuoteButton label="Get My Personalised Quote" className="mt-5 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((filename, index) => (
            <a
              key={filename}
              href={`/bedroom/${filename}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View bedroom design ${index + 1} full size (opens in a new tab)`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-700"
            >
              <div className="relative aspect-[3/4] bg-slate-100">
                <Image
                  src={`/bedroom/${filename}`}
                  alt={`Bedroom design ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <h2 className="font-semibold text-slate-900">Design {String(index + 1).padStart(2, "0")}</h2>
                <span className="text-sm text-fuchsia-700 group-hover:underline">View full image ↗</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-white p-6 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">Found a design you like?</h2>
          <p className="mt-2 text-slate-600">Let’s tailor it to your space.</p>
          <OpenQuoteButton label="Get a Bedroom Quote" className="mt-5 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white hover:bg-fuchsia-800" />
        </div>
      </div>
    </main>
  );
}
