import Image from "next/image";
import Link from "next/link";
import OpenQuoteButton from "../../../components/OpenQuoteButton";

const images = [
  "ImgHunt_Pinterest_20260905_155944775a45a6e356559ba27c55fe60.jpeg",
  "ImgHunt_Pinterest_20260905_366bd6b240ebb1f6da4b0ba7a70c5170.jpeg",
  "design-three .jpg",
  "ImgHunt_Pinterest_20260905_38be8c612aff0e28bfa041158bf5e62a.jpeg",
  "ImgHunt_Pinterest_20260905_850183ae5598810b4420fbff5569d6cd.jpeg",
  "ImgHunt_Pinterest_20260905_a94bed4aea7a2f61f07b617cf6158535.png",
  "ImgHunt_Pinterest_20260905_af01bddb705257d6babb1df1605c1035.jpeg",
  "ImgHunt_Pinterest_20260905_e356e2b2d422d1f251728abefdd82b9f.jpeg",
  "ImgHunt_Pinterest_20260905_fc648b032da446a6f11096b7b25219b0.jpeg",
];

export default function LivingRoomCataloguePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-20 pt-8 sm:pt-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Link href="/services/interior-design" className="text-sm font-semibold text-fuchsia-700 hover:underline">
          ← Back to Interior Design
        </Link>
        <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">Living Room Styling</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Explore our design catalogue for living room inspiration. Find inspiration for a space that fits your home and everyday needs.
        </p>
        <p className="mt-3 text-sm text-slate-600">See something you love? Share your ideas for a quote tailored to your space.</p>
        <OpenQuoteButton label="Get My Personalised Quote" className="mt-5 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((filename, index) => (
            <a
              key={filename}
              href={`/livingroom-style/${filename}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View living room design ${index + 1} full size (opens in a new tab)`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-700"
            >
              <div className="relative aspect-[3/4] bg-slate-100">
                <Image
                  src={`/livingroom-style/${filename}`}
                  alt={`Living room design ${index + 1}`}
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
          <OpenQuoteButton label="Get a Living Room Quote" className="mt-5 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white hover:bg-fuchsia-800" />
        </div>
      </div>
    </main>
  );
}
