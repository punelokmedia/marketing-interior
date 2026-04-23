"use client";

import InteriorCard from "./Interiorcard";

const interiors = [
  {
    title: "Modular Kitchen",
    image: "https://picsum.photos/seed/whatwedo-kitchen/1200/900",
  },
  {
    title: "Wardrobe",
    image: "https://picsum.photos/seed/whatwedo-wardrobe/1200/900",
  },
  {
    title: "Living Room",
    image: "https://picsum.photos/seed/whatwedo-living/1200/900",
  },
  {
    title: "Bedroom",
    image: "https://picsum.photos/seed/whatwedo-bedroom/1200/900",
  },
];

export default function CustomInterior() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Custom Interiors for Every Space
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Explore tailored interior solutions designed for your lifestyle.
        </p>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {interiors.map((item, index) => (
            <InteriorCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
