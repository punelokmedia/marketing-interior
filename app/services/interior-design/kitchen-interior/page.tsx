import Image from "next/image";
import Link from "next/link";
import OpenQuoteButton from "../../../components/OpenQuoteButton";

const images = [
  "ImgHunt_Pinimg_20260905_029588847bdb92a1c3dc3c658aa5570e.jpeg",
  "ImgHunt_Pinimg_20260905_5083c21d1a24a04875e3453647574610.jpeg",
  "ImgHunt_Pinterest_20260905_3f28eb57f5045e5ccbeb3116b313efdd.jpeg",
  "ImgHunt_Pinterest_20260905_4204829760542d89dd94fac069471e85.jpeg",
  "ImgHunt_Pinterest_20260905_6e0151f64260dfc0dfbd9d65227a8b1e.jpeg",
  "ImgHunt_Pinterest_20260905_a0df66c467b3784d415f7bda26b1aa8d.jpeg",
  "ImgHunt_Pinterest_20260905_a0df66c467b3784d415f7bda26b1aa8d.png",
  "From Klickpin.com- 475692779413451785-pin-id-475692779413451785.jpg",
  "ImgHunt_Pinterest_20260905_ed07d8f069029ccea3c452290e68f906.jpeg",
];

export default function KitchenCataloguePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-20 pt-8 sm:pt-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Link href="/services/interior-design" className="text-sm font-semibold text-fuchsia-700 hover:underline">
          ← Back to Interior Design
        </Link>
        <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">Kitchen Interiors</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Explore our kitchen catalogue. Find inspiration for a space that fits your home and everyday needs.
        </p>
        <p className="mt-3 text-sm text-slate-600">See something you love? Share your ideas for a quote tailored to your space.</p>
        <OpenQuoteButton label="Get My Personalised Quote" className="mt-5 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((filename, index) => (
            <a
              key={filename}
              href={`/kitchen-interior/${filename}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View kitchen design ${index + 1} full size (opens in a new tab)`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-700"
            >
              <div className="relative aspect-[3/4] bg-slate-100">
                <Image
                  src={`/kitchen-interior/${filename}`}
                  alt={`Kitchen design ${index + 1}`}
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
          <OpenQuoteButton label="Get a Kitchen Quote" className="mt-5 inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white hover:bg-fuchsia-800" />
        </div>
      </div>
    </main>
  );
}
