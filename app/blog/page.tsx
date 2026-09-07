import type { Metadata } from "next";
import BlogListing from "./BlogListing";

export const metadata: Metadata = {
  title: "Design Insights & Inspiration | Benz Architecture",
  description:
    "Explore interior design ideas, luxury trends, project stories, and practical inspiration from Benz Architecture.",
};

export default function BlogPage() {
  return <BlogListing />;
}
