export type EstimateField = { name: string; label: string; options: string[] };
export type EstimateConfig = {
  title: string;
  heading: string;
  description: string;
  fields: EstimateField[];
  services: string[];
};

export const estimates: Record<string, EstimateConfig> = {
  "full-home": {
    title: "Full Home",
    heading: "Get an Approximate Cost for Your Full Home Interiors",
    description: "Share a few details about your home and receive an estimated interior design cost from Benz Architecture.",
    fields: [
      { name: "propertyType", label: "Property Type", options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa / Independent Home"] },
      { name: "homeArea", label: "Home Area", options: ["Below 500 sq. ft.", "500–800 sq. ft.", "800–1200 sq. ft.", "1200–1800 sq. ft.", "Above 1800 sq. ft."] },
      { name: "homeStatus", label: "Home Status", options: ["Under Construction", "Ready to Move", "Possession Completed"] },
      { name: "budget", label: "Preferred Budget", options: ["₹5–8 Lakh", "₹8–12 Lakh", "₹12–18 Lakh", "₹18–25 Lakh", "₹25 Lakh+"] },
    ],
    services: ["Modular Kitchen", "Living Room", "Bedrooms", "Bathrooms", "False Ceiling", "Electrical & Lighting", "Painting", "Complete Home Interiors"],
  },
  kitchen: {
    title: "Kitchen",
    heading: "Get an Approximate Cost for Your Kitchen Interior",
    description: "Tell us about your kitchen and receive an estimated interior design cost from Benz Architecture.",
    fields: [
      { name: "kitchenLayout", label: "Kitchen Layout", options: ["Straight", "L-Shaped", "U-Shaped", "Parallel", "Island", "Need guidance"] },
      { name: "kitchenArea", label: "Kitchen Area", options: ["Below 50 sq. ft.", "50–100 sq. ft.", "100–150 sq. ft.", "Above 150 sq. ft.", "Not sure yet"] },
      { name: "kitchenStatus", label: "Kitchen Status", options: ["New Kitchen", "Renovating an Existing Kitchen"] },
      { name: "budget", label: "Preferred Budget", options: ["Below ₹2 Lakh", "₹2–4 Lakh", "₹4–6 Lakh", "₹6 Lakh+", "Need guidance"] },
    ],
    services: ["Modular Cabinets", "Countertop", "Backsplash / Tiles", "Sink & Plumbing", "Electrical & Lighting", "Appliance Planning", "Complete Kitchen Interiors"],
  },
  wardrobe: {
    title: "Wardrobe",
    heading: "Get an Approximate Cost for Your Wardrobe",
    description: "Share your wardrobe requirements and receive an estimated cost from Benz Architecture.",
    fields: [
      { name: "wardrobeType", label: "Wardrobe Type", options: ["Hinged Door", "Sliding Door", "Walk-in", "Need guidance"] },
      { name: "wardrobeCount", label: "Number of Wardrobes", options: ["1", "2", "3", "4 or more"] },
      { name: "wardrobeWidth", label: "Approximate Width per Wardrobe", options: ["Below 4 ft.", "4–6 ft.", "6–8 ft.", "Above 8 ft.", "Not sure yet"] },
      { name: "wardrobeHeight", label: "Approximate Height", options: ["Below 7 ft.", "7–8 ft.", "Floor to Ceiling", "Not sure yet"] },
      { name: "budget", label: "Preferred Budget", options: ["Below ₹1 Lakh", "₹1–2 Lakh", "₹2–4 Lakh", "₹4 Lakh+", "Need guidance"] },
    ],
    services: ["Shelves & Hanging Space", "Drawers", "Loft Storage", "Mirror", "Internal Lighting", "Complete Wardrobe"],
  },
};

export function getEstimateConfig(service: string) {
  return Object.prototype.hasOwnProperty.call(estimates, service) ? estimates[service] : undefined;
}

export type EstimatePayload = {
  service: string;
  city: string;
  details: Record<string, string>;
  services: string[];
  startDate: string;
  requirements: string;
};

export function formatEstimateMessage(input: unknown, source: string): string | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const value = input as Partial<EstimatePayload>;
  const config = typeof value.service === "string" ? getEstimateConfig(value.service) : undefined;
  if (!config || source !== `${config.title} Estimate` ||
    typeof value.city !== "string" || !value.city.trim() || value.city.length > 150 ||
    !value.details || typeof value.details !== "object" || Array.isArray(value.details) ||
    !Array.isArray(value.services) || !value.services.length || value.services.length > config.services.length ||
    !value.services.every((service) => typeof service === "string" && config.services.includes(service)) ||
    typeof value.startDate !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value.startDate) ||
    !Number.isFinite(Date.parse(value.startDate)) || new Date(value.startDate).toISOString().slice(0, 10) !== value.startDate ||
    typeof value.requirements !== "string" || value.requirements.length > 3000) return null;
  const details = value.details;
  if (!config.fields.every((field) => typeof details[field.name] === "string" && field.options.includes(details[field.name]))) return null;
  return [
    `${config.title} Interior Estimate Request`,
    `City / Location: ${value.city.trim()}`,
    ...config.fields.map((field) => `${field.label}: ${details[field.name]}`),
    `Required Services: ${[...new Set(value.services)].join(", ")}`,
    `Expected Start Date: ${value.startDate}`,
    `Additional Requirements: ${value.requirements.trim() || "None specified"}`,
  ].join("\n");
}
