import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "3BHK Interior Design | Benz Architecture",
  description: "Explore a 3BHK design catalog with nine views of the living room, kitchen, bedrooms, bathrooms, balcony and entrance.",
};

const photos = [
  { file: "30 PM (2)", title: "A welcoming living and dining space", description: "A wood-slat TV wall, floating console and warm lighting give the living area a clear focal point. The nearby dining space shares the same colours and finishes, helping the two areas feel connected." },
  { file: "29 PM (1)", title: "A kitchen planned around everyday tasks", description: "The U-shaped counter provides distinct areas for preparation, cooking and washing. Tall cupboards and overhead storage make use of wall space, while under-cabinet lighting brightens the worktops." },
  { file: "30 PM (3)", title: "A restful main bedroom", description: "An upholstered headboard, soft neutral palette and warm bedside pendants create a comfortable setting. A tall wardrobe keeps storage together, and the bench offers a place to sit when getting ready." },
  { file: "30 PM (4)", title: "A bedroom with room to work", description: "A compact desk and illuminated shelves sit beside the wardrobe, creating a dedicated place for reading or working. The sage feature wall and coordinated bedding bring a gentle colour accent to the room." },
  { file: "31 PM (5)", title: "A shared bedroom with individual space", description: "Twin beds give each child a separate sleeping area, with a central desk for study. Overhead shelves and a tall wardrobe organise books and belongings, while terracotta accents add warmth." },
  { file: "31 PM (6)", title: "A bathroom with thoughtful storage", description: "A floating vanity provides closed storage beneath the basin, and recessed shower shelves keep toiletries close at hand. A glass shower enclosure defines the wet area while maintaining an open view across the room." },
  { file: "32 PM (7)", title: "A coordinated bathroom finish", description: "This second bathroom view pairs a backlit mirror with warm wood tones and light wall tiles. Wall-mounted fixtures leave more of the floor accessible, and a recessed shelf makes room for everyday essentials." },
  { file: "32 PM (8)", title: "A balcony made for a quiet break", description: "Two chairs and a small table turn the balcony into a place for conversation or morning coffee. Wall-mounted planters add greenery while preserving floor space around the seating." },
  { file: "33 PM (9)", title: "An entrance that keeps things organised", description: "A cushioned bench, closed cabinets and a tall mirror combine practical functions at the front door. Display shelves and warm lighting make the entrance feel welcoming while giving daily belongings a dedicated place." },
];

export default function ThreeBhkDesignPage() {
  return (
    <div className="bg-stone-50 pb-20 pt-28 text-gray-800">
      <div className="mx-auto max-w-6xl px-6">
        <Link href="/#budget" className="text-sm font-semibold text-red-600 hover:underline">
          &larr; Back to budget designs
        </Link>
        <header className="max-w-3xl py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">3BHK design catalog</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Space for family. Details for everyday living.</h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">Explore nine views of a contemporary 3BHK interior concept. Warm wood tones, considered storage and comfortable spaces bring a consistent style to shared rooms and private retreats.</p>
          <p className="mt-6 text-xl font-semibold">Starting at 4.23L*</p>
          <p className="mt-2 text-sm text-gray-500">*Final pricing and inclusions depend on your layout, materials and selected scope.</p>
        </header>

        <div className="space-y-10">
          {photos.map((photo, index) => (
            <figure key={photo.file} className="overflow-hidden rounded-3xl border border-stone-200 bg-white">
              <Image
                src={`/3bhk/ChatGPT Image Sep 8, 2026, 01_55_${photo.file}.png`}
                alt={photo.title}
                width={1536}
                height={1024}
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="h-auto w-full"
              />
              <figcaption className="p-7 md:p-10">
                <span className="text-sm font-semibold tracking-widest text-red-500">{String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
                <h2 className="mt-4 text-2xl font-bold md:text-3xl">{photo.title}</h2>
                <p className="mt-5 max-w-3xl leading-relaxed text-gray-600">{photo.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <section className="mt-14 rounded-3xl bg-gray-900 p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold">How this design adds value to your home</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div><h3 className="text-lg font-semibold">Space that serves more purposes</h3><p className="mt-3 leading-relaxed text-gray-300">A bedroom desk, an entrance bench with storage and balcony seating make more of the available space useful throughout the day.</p></div>
            <div><h3 className="text-lg font-semibold">Organisation for family life</h3><p className="mt-3 leading-relaxed text-gray-300">Dedicated cupboards, shelves and work areas give belongings a home and help shared spaces stay ready for everyday routines.</p></div>
            <div><h3 className="text-lg font-semibold">A consistent, welcoming style</h3><p className="mt-3 leading-relaxed text-gray-300">Repeated wood tones, soft neutrals and warm lighting connect the rooms, while individual colour accents give each bedroom its own character.</p></div>
          </div>
          <Link href="/contact" className="mt-9 inline-block rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600">Discuss this design for your home</Link>
        </section>
      </div>
    </div>
  );
}
