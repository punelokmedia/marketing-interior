import type { MetadataRoute } from "next";
import { commercialInteriorServices } from "./lib/commercialInteriors";
import { customInteriorCategories } from "./lib/customInteriors";
import { estimates } from "./lib/estimates";
import { locationCities } from "./location/locationData";

const baseUrl = "https://benzarc.com";

// Add new static page routes here. Dynamic routes use the same data as their pages.
const staticRoutes = [
  "/",
  "/about",
  "/blog",
  "/commercial",
  "/contact",
  "/designs/2bhk",
  "/designs/3bhk",
  "/gallery",
  "/location",
  "/services",
  "/services/Custom-interiorpage",
  "/services/interior-design",
  "/services/interior-design/bedroom",
  "/services/interior-design/essential-home",
  "/services/interior-design/kitchen-interior",
  "/services/interior-design/living-room",
  "/services/interior-design/livingroom-style",
  "/services/interior-design/luxury-signature",
  "/services/interior-design/premium-living",
  "/services/interior-design/wardrobe-storage",
  "/services/renovation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...commercialInteriorServices.map(({ slug }) => `/commercial/${slug}`),
    ...customInteriorCategories.map(
      ({ slug }) => `/services/Custom-interiorpage/${slug}`,
    ),
    ...locationCities.map(({ slug }) => `/location/${slug}`),
    ...Object.keys(estimates).map((service) => `/estimate/${service}`),
  ];

  return [...new Set(routes)].map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
