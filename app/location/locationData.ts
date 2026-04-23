export type LocationCity = {
  slug: string;
  city: string;
  heroTitle: string;
  heroDescription: string;
  projectsCompleted: string;
  avgDelivery: string;
  styles: string[];
  services: string[];
  neighborhoods: string[];
};

export const locationCities: LocationCity[] = [
  {
    slug: "mumbai",
    city: "Mumbai",
    heroTitle: "Luxury and smart interiors in Mumbai",
    heroDescription:
      "From compact city apartments to premium residences, we design efficient and stylish spaces for Mumbai homes.",
    projectsCompleted: "620+",
    avgDelivery: "45-75 days",
    styles: ["Modern Minimal", "Urban Contemporary", "Premium Luxe"],
    services: ["Modular Kitchen", "Living Room Styling", "Full Home Interior"],
    neighborhoods: ["Andheri", "Powai", "Thane", "Navi Mumbai"],
  },
  {
    slug: "delhi",
    city: "Delhi",
    heroTitle: "Elegant interior solutions in Delhi",
    heroDescription:
      "We craft elegant and practical interiors tailored for family homes and premium apartments across Delhi NCR.",
    projectsCompleted: "510+",
    avgDelivery: "50-80 days",
    styles: ["Classic Contemporary", "Luxury Modern", "Warm Minimal"],
    services: ["Wardrobe Design", "False Ceiling", "Complete Turnkey Interior"],
    neighborhoods: ["Dwarka", "Rohini", "South Delhi", "Noida"],
  },
  {
    slug: "bangalore",
    city: "Bangalore",
    heroTitle: "Functional interiors for Bangalore lifestyles",
    heroDescription:
      "We create modern, clutter-free interiors designed around smart storage and hybrid work-from-home needs.",
    projectsCompleted: "470+",
    avgDelivery: "40-70 days",
    styles: ["Scandinavian", "Clean Minimal", "Natural Wood Theme"],
    services: ["Home Office Setup", "Bedroom Makeovers", "Kitchen Remodeling"],
    neighborhoods: ["Whitefield", "Sarjapur", "HSR Layout", "Electronic City"],
  },
  {
    slug: "hyderabad",
    city: "Hyderabad",
    heroTitle: "Premium interiors across Hyderabad",
    heroDescription:
      "From villas to apartments, we deliver high-quality custom interiors with smooth execution.",
    projectsCompleted: "410+",
    avgDelivery: "45-75 days",
    styles: ["Contemporary", "Neo-Classical", "Modern Indian"],
    services: ["TV Unit Design", "Pooja Unit", "Turnkey Home Interiors"],
    neighborhoods: ["Gachibowli", "Madhapur", "Kondapur", "Kukatpally"],
  },
  {
    slug: "pune",
    city: "Pune",
    heroTitle: "Smart interiors for Pune homes",
    heroDescription:
      "Budget-friendly and premium packages for apartments and independent homes in Pune.",
    projectsCompleted: "390+",
    avgDelivery: "40-65 days",
    styles: ["Modern", "Minimal", "Contemporary Fusion"],
    services: ["2BHK Packages", "Modular Furniture", "Renovation Work"],
    neighborhoods: ["Baner", "Wakad", "Kharadi", "Hinjewadi"],
  },
  {
    slug: "kolkata",
    city: "Kolkata",
    heroTitle: "Comfort-first interiors in Kolkata",
    heroDescription:
      "We blend timeless aesthetics and practical planning for homes in Kolkata.",
    projectsCompleted: "280+",
    avgDelivery: "45-70 days",
    styles: ["Classic Modern", "Soft Minimal", "Elegant Indian"],
    services: ["Dining Area Styling", "Bedroom Upgrade", "Modular Kitchens"],
    neighborhoods: ["Salt Lake", "New Town", "Ballygunge", "Tollygunge"],
  },
  {
    slug: "chennai",
    city: "Chennai",
    heroTitle: "Climate-friendly interiors in Chennai",
    heroDescription:
      "Designs made for ventilation, comfort, and long-term durability in Chennai weather conditions.",
    projectsCompleted: "300+",
    avgDelivery: "45-75 days",
    styles: ["South Modern", "Minimal Tropical", "Neutral Luxe"],
    services: ["Space Planning", "Storage Solutions", "Complete Interiors"],
    neighborhoods: ["OMR", "Velachery", "Anna Nagar", "Porur"],
  },
  {
    slug: "lucknow",
    city: "Lucknow",
    heroTitle: "Stylish family interiors in Lucknow",
    heroDescription:
      "From modern flats to large family homes, we design practical and elegant interiors.",
    projectsCompleted: "220+",
    avgDelivery: "45-70 days",
    styles: ["Contemporary Indian", "Classic", "Modern Luxury"],
    services: ["Living Room Design", "Wardrobes", "Turnkey Packages"],
    neighborhoods: ["Gomti Nagar", "Aliganj", "Hazratganj", "Indira Nagar"],
  },
  {
    slug: "ahmedabad",
    city: "Ahmedabad",
    heroTitle: "Modern and warm interiors in Ahmedabad",
    heroDescription:
      "We create durable and elegant interiors for apartments, villas, and bungalows.",
    projectsCompleted: "250+",
    avgDelivery: "40-70 days",
    styles: ["Modern Gujarati", "Wooden Contemporary", "Minimal"],
    services: ["Kitchen + Wardrobe", "Civil Upgrades", "Full Interior Setup"],
    neighborhoods: ["Satellite", "Bopal", "Prahlad Nagar", "SG Highway"],
  },
  {
    slug: "nagpur",
    city: "Nagpur",
    heroTitle: "Affordable premium interiors in Nagpur",
    heroDescription:
      "Customized design packages for compact and spacious homes with reliable timelines.",
    projectsCompleted: "180+",
    avgDelivery: "40-65 days",
    styles: ["Minimal", "Contemporary", "Modern Wood"],
    services: ["Kitchen Design", "TV Panels", "Home Renovation"],
    neighborhoods: ["Dharampeth", "Manish Nagar", "Trimurti Nagar", "Wardha Road"],
  },
  {
    slug: "jaipur",
    city: "Jaipur",
    heroTitle: "Royal-inspired modern interiors in Jaipur",
    heroDescription:
      "A blend of heritage-inspired design and modern functionality for Jaipur residences.",
    projectsCompleted: "205+",
    avgDelivery: "45-75 days",
    styles: ["Modern Rajasthani", "Classic Luxe", "Contemporary"],
    services: ["Bedroom Themes", "Custom Furniture", "End-to-End Interiors"],
    neighborhoods: ["Malviya Nagar", "Vaishali Nagar", "Mansarovar", "Jagatpura"],
  },
  {
    slug: "surat",
    city: "Surat",
    heroTitle: "Contemporary interiors in Surat",
    heroDescription:
      "High-finish, space-smart interiors for modern apartments and family homes in Surat.",
    projectsCompleted: "210+",
    avgDelivery: "40-70 days",
    styles: ["Contemporary", "Soft Luxury", "Minimal Modern"],
    services: ["Modular Kitchen", "Storage Upgrades", "Turnkey Interior Service"],
    neighborhoods: ["Vesu", "Adajan", "Pal", "Piplod"],
  },
];

export function getCityBySlug(slug: string) {
  return locationCities.find((city) => city.slug === slug);
}
