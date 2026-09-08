import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "2BHK Interior Design | Benz Architecture",
  description: "Explore five photos of a 2BHK interior concept with thoughtful storage, warm lighting and coordinated finishes.",
};

const photos = [
  { number: 1, title: "A living room with a clear focal point", description: "The wall-mounted TV unit combines closed drawers with illuminated display shelves. It gives everyday essentials a place to live while keeping the floor beneath the unit open and easy to reach." },
  { number: 2, title: "Storage that doubles as a display", description: "A tall display cabinet, open cubbies and a closed base unit bring several storage needs together. Warm lighting highlights favourite objects, adding character without filling the room with extra furniture." },
  { number: 3, title: "A kitchen that makes the most of its corners", description: "The U-shaped counter brings preparation and washing areas into a compact layout. Upper cupboards use wall space, while lighting beneath the cabinets helps illuminate the work surface." },
  { number: 4, title: "More organisation, a calmer finish", description: "Tall cabinetry, overhead cupboards and drawers offer different places for kitchen essentials. Sage green fronts, light upper cabinets and a dark countertop create a coordinated look that carries across the kitchen." },
  { number: 6, title: "A wardrobe and dressing area in one", description: "The pink wardrobe brings hanging storage, overhead cupboards, open shelves and a dressing mirror into one arrangement. A compact floating vanity leaves space below and makes a dedicated spot for daily routines." },
];

export default function TwoBhkDesignPage() {
  return (
    <div className="bg-stone-50 pb-20 pt-28 text-gray-800">
      <div className="mx-auto max-w-6xl px-6">
        <Link href="/#budget" className="text-sm font-semibold text-red-600 hover:underline">
          ← Back to budget designs
        </Link>
        <header className="max-w-3xl py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">2BHK design catalog .</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Thoughtful spaces. Everyday value.</h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">Explore a warm, contemporary interior with practical storage, soft lighting and a coordinated palette. These five views show how considered details can make a 2BHK home more comfortable and useful.</p>
          <p className="mt-6 text-xl font-semibold">Starting at 3.57L*</p>
          <p className="mt-2 text-sm text-gray-500">*Final pricing and inclusions depend on your layout, materials and selected scope.</p>
        </header>

        <div className="space-y-10">
          {photos.map((photo, index) => (
            <figure key={photo.number} className="grid overflow-hidden rounded-3xl border border-stone-200 bg-white md:grid-cols-2">
              <Image
                src={`/budget/From Klickpin.com- 624733779604053144-pin-id-624733779604053144-carousel-${photo.number}.jpg`}
                alt={photo.title}
                width={735}
                height={975}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
              <figcaption className="flex flex-col justify-center p-7 md:p-12">
                <span className="text-sm font-semibold tracking-widest text-red-500">0{index + 1} / 05</span>
                <h2 className="mt-4 text-2xl font-bold md:text-3xl">{photo.title}</h2>
                <p className="mt-5 leading-relaxed text-gray-600">{photo.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <section className="mt-14 rounded-3xl bg-gray-900 p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold">How this design adds value to your home</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div><h3 className="text-lg font-semibold">Better use of space</h3><p className="mt-3 leading-relaxed text-gray-300">Wall storage and combined furniture functions help you organise more within the space you already have.</p></div>
            <div><h3 className="text-lg font-semibold">Easier daily routines</h3><p className="mt-3 leading-relaxed text-gray-300">Dedicated places for belongings, a practical kitchen layout and a dressing area help everyday tasks feel more organised.</p></div>
            <div><h3 className="text-lg font-semibold">A more considered appearance</h3><p className="mt-3 leading-relaxed text-gray-300">Coordinated colours and warm accent lighting give the rooms a cohesive, finished feel. The value here is in usability and visual appeal; resale gains are not guaranteed.</p></div>
          </div>
          <Link href="/contact" className="mt-9 inline-block rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600">Discuss this design for your home</Link>
        </section>
      </div>
    </div>
  );
}
