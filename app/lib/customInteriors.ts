export type CustomInteriorCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  folder: string;
  description: string;
  introduction: string;
  satisfaction: string;
  features: string[];
  images: string[];
  showcase: { title: string; text: string }[];
};

export const customInteriorCategories: CustomInteriorCategory[] = [
  {
    slug: "modular-kitchens",
    title: "Custom Modular Kitchens",
    shortTitle: "Modular Kitchens",
    folder: "KITCHEN",
    description: "Efficient layouts, premium finishes, and storage planned around the way you cook.",
    introduction: "We create kitchens that feel effortless every day, balancing workflow, storage, lighting, durability, and a finish that belongs in your home.",
    satisfaction: "From the first layout discussion to final installation, our team keeps materials, timelines, and functional details clear so you feel confident at every stage.",
    features: ["Workflow-led layouts", "Easy-access storage", "Durable premium finishes", "Appliance-ready planning"],
    images: [
      "From Klickpin.com- 1093882197021467169-pin-id-1093882197021467169.jpg",
      "From Klickpin.com- 12807180189393975-pin-id-12807180189393975.jpg",
      "From Klickpin.com- 174303448076811030-pin-id-174303448076811030.jpg",
      "From Klickpin.com- 30117891253790649-pin-id-30117891253790649.jpg",
      "From Klickpin.com- 454582156166968847-pin-id-454582156166968847.jpg",
    ],
    showcase: [
      { title: "A kitchen that works with you", text: "Thoughtful work zones keep preparation, cooking, and cleaning comfortable while maintaining a polished, uncluttered appearance." },
      { title: "Storage without wasted corners", text: "Purpose-planned drawers, tall units, and corner solutions give everyday essentials a convenient, organized home." },
      { title: "Finishes made for real life", text: "We balance rich textures and elegant colors with surfaces selected for durability, easy care, and long-term satisfaction." },
      { title: "Lighting that adds warmth", text: "Layered task and ambient lighting improves visibility while giving your kitchen a welcoming character after sunset." },
      { title: "Tailored to your home", text: "Every module is adapted to your available space, appliance choices, family routine, and preferred level of maintenance." },
    ],
  },
  {
    slug: "custom-wardrobes",
    title: "Custom Wardrobes",
    shortTitle: "Custom Wardrobes",
    folder: "Custom_Wardrobes",
    description: "Made-to-measure wardrobes that organize more while complementing your bedroom.",
    introduction: "Every wardrobe is planned around your clothing, accessories, room dimensions, and daily routine—so every shelf, drawer, and hanging section earns its place.",
    satisfaction: "We help you compare internal layouts, shutters, hardware, and finishes before production, reducing surprises and ensuring the result feels truly personal.",
    features: ["Personalized internals", "Sliding or hinged shutters", "Loft and corner solutions", "Soft-close hardware"],
    images: [
      "From Klickpin.com- 1128362881680643558-pin-id-1128362881680643558.jpg",
      "From Klickpin.com- 1136736762237317602-pin-id-1136736762237317602.jpg",
      "From Klickpin.com- 16044142419683734-pin-id-16044142419683734.jpg",
      "From Klickpin.com- 939985753493866313-pin-id-939985753493866313.jpg",
    ],
    showcase: [
      { title: "Storage shaped around your routine", text: "Separate zones for daily wear, occasion wear, accessories, and luggage make mornings simpler and bedrooms calmer." },
      { title: "A seamless part of the bedroom", text: "Proportions, shutters, and finishes are coordinated with the room so the wardrobe enhances the design instead of overpowering it." },
      { title: "Details you will appreciate daily", text: "Soft-close hardware, comfortable handles, useful mirrors, and considered internal lighting bring ease to every interaction." },
      { title: "Maximum value from every inch", text: "Full-height planning and intelligent internal divisions turn awkward spaces into dependable, accessible storage." },
    ],
  },
  {
    slug: "tv-living-units",
    title: "TV & Living Units",
    shortTitle: "TV & Living Units",
    folder: "TV&Living",
    description: "Refined media walls and living storage that make the room feel complete.",
    introduction: "We combine display, concealed storage, cable management, lighting, and visual balance to create living units that look composed from every angle.",
    satisfaction: "Your designer coordinates proportions, finishes, and practical details with your room and television size, creating a focal point without sacrificing everyday convenience.",
    features: ["Concealed wiring", "Display and closed storage", "Integrated lighting", "Room-matched finishes"],
    images: [
      "From Klickpin.com- 1026046727631240400-pin-id-1026046727631240400.jpg",
      "From Klickpin.com- 1122733382125294897-pin-id-1122733382125294897.jpg",
      "From Klickpin.com- 18507048539159720-pin-id-18507048539159720.jpg",
      "From Klickpin.com- 580823683241551892-pin-id-580823683241551892.jpg",
      "From Klickpin.com- 857583954082571468-pin-id-857583954082571468.jpg",
      "From Klickpin.com- 959829739350503545-pin-id-959829739350503545.jpg",
    ],
    showcase: [
      { title: "A focal point with purpose", text: "The television wall becomes an elegant anchor for the room while keeping devices, remotes, and daily clutter under control." },
      { title: "Clean entertainment setup", text: "Concealed cable routes and device-ready compartments preserve the clean look without making maintenance difficult." },
      { title: "Display what matters to you", text: "Open niches and warm lighting create beautiful places for books, art, photographs, and collected objects." },
      { title: "Balanced for your room", text: "We size every panel, shelf, and cabinet to suit viewing distance, furniture placement, and the scale of your living area." },
      { title: "Comfortable everyday living", text: "A smart combination of open and closed storage keeps frequently used belongings close while protecting visual calm." },
      { title: "Materials that tie everything together", text: "Coordinated wood tones, colors, and textures help the media unit connect naturally with the rest of your interior." },
    ],
  },
  {
    slug: "bedroom-solutions",
    title: "Bedroom Solutions",
    shortTitle: "Bedroom Solutions",
    folder: "bedroom _solution",
    description: "Comfort-led bedroom designs with thoughtful storage and a calm, cohesive character.",
    introduction: "From beds and side tables to study corners and storage, we design the bedroom as one connected experience centered on comfort, movement, and rest.",
    satisfaction: "We refine the layout, materials, lighting, and storage together, giving you a bedroom that feels peaceful while supporting everything you need each day.",
    features: ["Space-efficient planning", "Coordinated furniture", "Warm layered lighting", "Comfort-first detailing"],
    images: [
      "From Klickpin.com- 12455336471828212-pin-id-12455336471828212.jpg",
      "From Klickpin.com- 41025046603104714-pin-id-41025046603104714.jpg",
      "From Klickpin.com- 48554502230712203-pin-id-48554502230712203.jpg",
    ],
    showcase: [
      { title: "A calmer place to begin and end the day", text: "Soft materials, balanced colors, and an uncluttered layout create a bedroom that feels restful from the moment you enter." },
      { title: "Furniture designed as one composition", text: "Beds, side tables, storage, and study elements share a consistent language for a room that feels complete and intentional." },
      { title: "Comfort supported by smart planning", text: "Clear movement paths, reachable storage, and layered lighting make the bedroom as practical as it is inviting." },
    ],
  },
];

export function getCustomInteriorCategory(slug: string) {
  return customInteriorCategories.find((category) => category.slug === slug);
}

export function customInteriorImage(category: CustomInteriorCategory, filename: string) {
  return `/${category.folder}/${filename}`;
}
