import type { Metadata } from "next";
import BlogListing from "./BlogListing";

export const metadata: Metadata = {
  title: "Design Insights & Inspiration | InteriorWala",
  description:
    "Explore interior design ideas, luxury trends, project stories, and practical inspiration from InteriorWala.",
};

export default function BlogPage() {
  return <BlogListing />;
}
