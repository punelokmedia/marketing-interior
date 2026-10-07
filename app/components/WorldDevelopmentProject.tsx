import Image from "next/image";
import { worldDevelopmentPhotos } from "../lib/worldDevelopmentProject";

function ProjectPhoto({ index, featured = false }: { index: number; featured?: boolean }) {
  const photo = worldDevelopmentPhotos[index];
  return (
    <a
      href={photo.src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View full image: ${photo.alt}`}
      className={`group relative block overflow-hidden rounded-2xl bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 ${featured ? "min-h-96 sm:row-span-2" : "aspect-[4/3]"}`}
    >
      <Image src={photo.src} alt={`World Development Corporation office: ${photo.alt}`} fill sizes={featured ? "(max-width: 639px) 100vw, 50vw" : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"} className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
        <p className="text-base font-semibold sm:text-lg">{photo.alt}</p>
        <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full border border-white/50 bg-white/10">↗</span>
      </div>
    </a>
  );
}

const featuredIndices = [0, 8, 4, 2, 12];
const remainingIndices = worldDevelopmentPhotos.map((_, index) => index).filter((index) => !featuredIndices.includes(index));

export default function WorldDevelopmentProject() {
  return (
    <section id="world-development-project" aria-labelledby="world-development-heading" className="bg-[#f5f3ef] px-5 py-16 text-[#071329] md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-800">Inside our client’s workplace</p>
            <h2 id="world-development-heading" className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">World Development<br className="hidden sm:block" /> Corporation</h2>
          </div>
          <div className="border-l-2 border-amber-600 pl-5">
            <p className="leading-8 text-slate-600">Explore the office through open workspaces, private cabins and shared spaces. Geometric lighting, warm finishes and thoughtful details give every corner its own character.</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-amber-800">Commercial office · {worldDevelopmentPhotos.length} project images</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          {featuredIndices.map((index, position) => <ProjectPhoto key={index} index={index} featured={position === 0} />)}
        </div>

        <details className="group/gallery mt-8">
          <summary className="mx-auto w-fit cursor-pointer rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold transition hover:border-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700">
            <span className="group-open/gallery:hidden">Explore all {worldDevelopmentPhotos.length} project images</span>
            <span className="hidden group-open/gallery:inline">Show fewer images</span>
          </summary>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {remainingIndices.map((index) => <ProjectPhoto key={index} index={index} />)}
          </div>
        </details>
        <p className="mt-6 text-center text-xs text-slate-500">Select any photograph to view it in full.</p>
      </div>
    </section>
  );
}
