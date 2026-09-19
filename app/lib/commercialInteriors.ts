export type CommercialInteriorService = {
  slug: string;
  title: string;
  eyebrow: string;
  folder: string;
  summary: string;
  introduction: string;
  promise: string;
  benefits: { title: string; text: string }[];
  images: string[];
  showcases: { title: string; style: string; idealFor: string }[];
};

export const commercialInteriorServices: CommercialInteriorService[] = [
  {
    slug: "office-interiors",
    title: "Office Interiors",
    eyebrow: "WORKPLACES WITH ENERGY",
    folder: "Commercial",
    summary: "Purposeful offices where teams feel comfortable, focused, and proud to spend their day.",
    introduction: "An office should do more than hold desks. We shape workplaces around movement, collaboration, concentration, comfort, and the personality of your business.",
    promise: "Our team brings planning, material selection, lighting, services coordination, and execution together—giving you one accountable partner and a workplace ready for real working life.",
    benefits: [
      { title: "People-first planning", text: "Comfortable circulation, focused work zones, and welcoming shared spaces help teams perform without feeling confined." },
      { title: "Your brand, made physical", text: "Colors, forms, materials, and details express what your company stands for from the moment clients arrive." },
      { title: "Built for daily demands", text: "Durable finishes, practical storage, thoughtful acoustics, and maintainable details support long-term use." },
      { title: "Clarity from start to handover", text: "Defined stages, coordinated execution, and regular quality checks keep decisions and progress transparent." },
    ],
    images: [
      "From Klickpin.com- 1006132373027424055-pin-id-1006132373027424055.jpg",
      "From Klickpin.com- 1123718544548069775-pin-id-1123718544548069775.jpg",
      "From Klickpin.com- 253679391503802874-pin-id-253679391503802874.jpg",
      "From Klickpin.com- 664984701273947070-pin-id-664984701273947070.jpg",
      "From Klickpin.com- 723390758941639226-pin-id-723390758941639226.jpg",
      "From Klickpin.com- 735564551660300372-pin-id-735564551660300372.jpg",
    ],
    showcases: [
      { title: "Focused Helpdesk & Support Office", style: "Modern branded workspace", idealFor: "Customer support and service teams" },
      { title: "Warm Collaborative Work Lounge", style: "Contemporary natural palette", idealFor: "Creative and hybrid teams" },
      { title: "Efficient Team Workstation Layout", style: "Clean functional planning", idealFor: "Growing operational teams" },
      { title: "Premium Leadership Workspace", style: "Refined executive interior", idealFor: "Directors and client meetings" },
      { title: "Compact Office with Smart Storage", style: "Space-efficient contemporary", idealFor: "Startups and compact offices" },
      { title: "Welcoming Reception & Work Zone", style: "Professional brand-led design", idealFor: "Client-facing businesses" },
    ],
  },
  {
    slug: "custom-office-interiors",
    title: "Custom Office Interiors",
    eyebrow: "MADE FOR YOUR WAY OF WORKING",
    folder: "custom_office",
    summary: "Bespoke workplace solutions designed around your team, culture, operations, and ambitions.",
    introduction: "No two businesses work in exactly the same way. We translate your workflow, team structure, client experience, and growth plans into an office that feels unmistakably yours.",
    promise: "From custom workstations and storage to meeting rooms, leadership cabins, reception experiences, and breakout spaces, every element is coordinated for a consistent and satisfying result.",
    benefits: [
      { title: "Designed around operations", text: "Layouts respond to how information, people, and decisions move through your organization each day." },
      { title: "Furniture made to fit", text: "Custom workstations, partitions, storage, and collaborative settings use the available space intelligently." },
      { title: "A place people enjoy", text: "Natural-feeling materials, comfortable lighting, and restorative breakout areas make long workdays feel more human." },
      { title: "Flexible for what comes next", text: "Adaptable planning supports team changes and growth without losing the clarity of the original design." },
    ],
    images: [
      "From Klickpin.com- 183310647328728810-pin-id-183310647328728810.jpg",
      "From Klickpin.com- 21321798232589924-pin-id-21321798232589924.jpg",
      "From Klickpin.com- 3870349675062201-pin-id-3870349675062201.jpg",
      "From Klickpin.com- 919860292622129526-pin-id-919860292622129526.jpg",
      "From Klickpin.com- 991143830498655811-pin-id-991143830498655811.jpg",
    ],
    showcases: [
      { title: "Custom Executive Cabin", style: "Quiet modern luxury", idealFor: "Leadership and private discussions" },
      { title: "Bespoke Collaborative Studio", style: "Creative flexible workplace", idealFor: "Design and innovation teams" },
      { title: "Tailored Open Office System", style: "Integrated custom furniture", idealFor: "Scaling teams and shared work" },
      { title: "Made-to-Measure Meeting Suite", style: "Polished professional setting", idealFor: "Presentations and client reviews" },
      { title: "Custom Reception Experience", style: "Distinctive brand expression", idealFor: "Memorable first impressions" },
    ],
  },
];

export function getCommercialInteriorService(slug: string) {
  return commercialInteriorServices.find((service) => service.slug === slug);
}

export function commercialInteriorImage(service: CommercialInteriorService, filename: string) {
  return `/${service.folder}/${filename}`;
}
