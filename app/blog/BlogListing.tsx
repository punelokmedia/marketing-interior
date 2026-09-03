"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";

type Article = {
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
};

const categories = ["Living Spaces", "Kitchens", "Lighting", "Trends", "Sustainability"];

const articles: Article[] = [
  {
    title: "Modern Minimalist Kitchens: Redefining Luxury in Simplicity",
    date: "August 11, 2024",
    category: "Kitchens",
    image: "/blog-image-second.jpg",
    description:
      "Discover how clean lines, calm palettes, and purposeful details create a kitchen that feels effortlessly luxurious.",
    featured: true,
  },
  {
    title: "The Art of Layering Lighting: Creating Mood and Function",
    date: "October 17, 2024",
    category: "Lighting",
    image: "/blog-header.jpg",
    description:
      "Learn how ambient, task, and accent lighting work together to transform the atmosphere of a room.",
  },
  {
    title: "Eco-Friendly Elegance: Sustainable Materials in Interior Design",
    date: "October 12, 2024",
    category: "Sustainability",
    image: "/blog-image.jpg",
    description:
      "Natural finishes and thoughtful material choices prove sustainable interiors can feel warm and sophisticated.",
  },
  {
    title: "Upcoming Interior Design Trends for 2025",
    date: "November 4, 2024",
    category: "Trends",
    image: "/blog-image.jpg",
    description:
      "From organic shapes to earthy textures, explore the ideas shaping the next generation of beautiful homes.",
  },
  {
    title: "Client Spotlight: The Serene Pune Penthouse Project",
    date: "October 13, 2024",
    category: "Living Spaces",
    image: "/blog-image-third.jpg",
    description:
      "Step inside a warm, refined home where sculpted architecture and practical planning work in harmony.",
  },
];

function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-md bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
      {children}
    </span>
  );
}

function ReadMore() {
  return (
    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-700 transition group-hover:gap-3">
      Read More <FiArrowRight aria-hidden="true" />
    </span>
  );
}

export default function BlogListing() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(article.category);
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  };

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  const featured = filteredArticles.find((article) => article.featured);
  const secondary = filteredArticles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <section className="relative isolate flex min-h-[260px] items-center justify-center overflow-hidden px-5 py-14 text-center text-white sm:min-h-[300px]">
        <Image
          src="/blog-header.jpg"
          alt="Luxury interior with panoramic city views"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-red-300">
            The InteriorWala Journal
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Latest Insights &amp; Inspirations
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-xl">
            Explore the world of luxury design, trends, and innovation.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
        <main>
          {filteredArticles.length > 0 ? (
            <div className="grid items-start gap-8 xl:grid-cols-2">
              {featured && (
                <article className="group xl:row-span-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 42vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="-mt-4 px-3 sm:px-4">
                    <div className="relative">
                      <CategoryBadge>{featured.category}</CategoryBadge>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                      {featured.title}
                    </h2>
                    <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
                      <span className="flex size-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                        IW
                      </span>
                      <span className="font-medium text-slate-700">By InteriorWala</span>
                      <span aria-hidden="true">•</span>
                      <time>{featured.date}</time>
                    </div>
                    <p className="mt-4 leading-7 text-slate-600">{featured.description}</p>
                    <ReadMore />
                  </div>
                </article>
              )}

              <div className="grid gap-8 sm:grid-cols-2">
                {secondary.map((article) => (
                  <article key={article.title} className="group min-w-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 21vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="-mt-4 relative">
                      <CategoryBadge>{article.category}</CategoryBadge>
                    </div>
                    <h2 className="mt-3 text-xl font-bold leading-6">{article.title}</h2>
                    <time className="mt-2 block text-sm text-slate-500">{article.date}</time>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                      {article.description}
                    </p>
                    <ReadMore />
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-20 text-center">
              <h2 className="text-xl font-bold">No articles found</h2>
              <p className="mt-2 text-slate-500">Try another keyword or clear a category filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategories([]);
                }}
                className="mt-5 rounded-full bg-red-500 px-5 py-2 text-sm font-bold text-white"
              >
                Clear filters
              </button>
            </div>
          )}
        </main>

        <aside className="space-y-9 lg:sticky lg:top-28 lg:self-start">
          <div>
            <h2 className="text-xl font-bold">Search Articles</h2>
            <label className="relative mt-4 block">
              <span className="sr-only">Search articles</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles"
                className="w-full rounded-xl border border-slate-300 py-3 pl-4 pr-11 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
              />
              <FiSearch className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-500" />
            </label>
          </div>

          <fieldset>
            <legend className="text-xl font-bold">Filter by Category</legend>
            <div className="mt-4 space-y-3">
              {categories.map((category) => (
                <label key={category} className="flex cursor-pointer items-center gap-3 text-sm font-medium">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="size-5 accent-red-500"
                  />
                  {category}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <h2 className="text-xl font-bold">Recent Posts</h2>
            <div className="mt-4 space-y-3">
              {articles.slice(0, 4).map((article) => (
                <button
                  type="button"
                  key={article.title}
                  onClick={() => setSearch(article.title)}
                  className="block w-full truncate text-left text-sm font-semibold transition hover:text-red-600"
                >
                  {article.title}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold leading-tight">Subscribe to Our Newsletter</h2>
            {subscribed ? (
              <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={subscribe} className="mt-4 space-y-3">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  className="w-full rounded-full border border-slate-300 px-5 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-red-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-red-200 transition hover:bg-red-600"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </aside>
      </section>
    </div>
  );
}
