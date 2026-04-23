import { notFound } from "next/navigation";
import { getCityBySlug } from "../locationData";
import OpenQuoteButton from "../../components/OpenQuoteButton";

type LocationCityPageProps = {
  params: Promise<{ city: string }>;
};

const cityHeroImages: Record<string, string> = {
  mumbai: "https://picsum.photos/seed/interior-mumbai/2200/1200",
  delhi: "https://picsum.photos/seed/interior-delhi/2200/1200",
  bangalore: "https://picsum.photos/seed/interior-bangalore/2200/1200",
  hyderabad: "https://picsum.photos/seed/interior-hyderabad/2200/1200",
  pune: "https://picsum.photos/seed/interior-pune/2200/1200",
  kolkata: "https://picsum.photos/seed/interior-kolkata/2200/1200",
  chennai: "https://picsum.photos/seed/interior-chennai/2200/1200",
  lucknow: "https://picsum.photos/seed/interior-lucknow/2200/1200",
  ahmedabad: "https://picsum.photos/seed/interior-ahmedabad/2200/1200",
  nagpur: "https://picsum.photos/seed/interior-nagpur/2200/1200",
  jaipur: "https://picsum.photos/seed/interior-jaipur/2200/1200",
  surat: "https://picsum.photos/seed/interior-surat/2200/1200",
};

const guaranteedFallbackHero =
  "https://picsum.photos/seed/interiorwala-city-hero/2200/1200";

const packageImages = [
  "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=80",
];

export default async function LocationCityPage({ params }: LocationCityPageProps) {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  if (!cityData) notFound();

  const heroImage = cityHeroImages[cityData.slug] || guaranteedFallbackHero;

  const packageCards = [
    {
      title: `${cityData.city} Essential`,
      oldPrice: "7.85 Lac",
      offerPrice: "6.37 Lac",
      description: `Smart woodwork package for 2BHK homes in ${cityData.city}.`,
      image: packageImages[0],
    },
    {
      title: `${cityData.city} Eleganza`,
      oldPrice: "15.84 Lac",
      offerPrice: "11.41 Lac",
      description: `Detailed woodwork and premium finishes for 3BHK interiors.`,
      image: packageImages[1],
    },
    {
      title: `${cityData.city} Luxe Plus`,
      oldPrice: "24.03 Lac",
      offerPrice: "16.89 Lac",
      description: `Complete beautification package with modular upgrades.`,
      image: packageImages[2],
    },
  ];

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white pb-20 pt-3">
      <section className="relative overflow-hidden rounded-b-[2rem] py-20 text-white md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/45" />

        <div className="relative mx-auto max-w-6xl px-6 text-left">
          <p className="text-xs font-semibold tracking-[0.24em] text-cyan-200/95">
            {cityData.city.toUpperCase()} INTERIORS
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            {cityData.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-100 sm:text-base md:text-lg">
            {cityData.heroDescription}
          </p>
          <div className="mt-8">
            <OpenQuoteButton
              label="Get Free Estimate"
              className="inline-flex rounded-full bg-fuchsia-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-800"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 md:text-4xl">
          Interior Designers in {cityData.city}
        </h2>
        <p className="mx-auto mt-4 max-w-5xl text-center text-slate-600">
          Our city team in {cityData.city} delivers thoughtful planning,
          personalized design themes, and quality execution for apartments and
          villas. We focus on practical layouts, elegant finishes, and on-time
          delivery so your dream home is both beautiful and functional.
        </p>
      </section>

      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/50">
            <p className="text-xs tracking-[0.18em] text-slate-500">PROJECTS</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              {cityData.projectsCompleted}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/50">
            <p className="text-xs tracking-[0.18em] text-slate-500">DELIVERY</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{cityData.avgDelivery}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/50">
            <p className="text-xs tracking-[0.18em] text-slate-500">CITY</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{cityData.city}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/50">
            <p className="text-xs tracking-[0.18em] text-slate-500">SUPPORT</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">7 Days</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Buy Direct - 30% Discount on Packages
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {packageCards.map((pkg) => (
            <article
              key={pkg.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/60"
            >
              <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url('${pkg.image}')` }}
              />
              <div className="border-t border-slate-200 p-5">
                <h3 className="text-2xl font-bold text-slate-900">{pkg.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{pkg.description}</p>
                <p className="mt-3 text-sm text-slate-500">
                  Offer{" "}
                  <span className="line-through decoration-red-500">{pkg.oldPrice}</span>{" "}
                  <span className="text-2xl font-bold text-fuchsia-800">
                    {pkg.offerPrice}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Popular interior styles in {cityData.city}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {cityData.styles.map((style) => (
                <span
                  key={style}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-700"
                >
                  {style}
                </span>
              ))}
            </div>

            <h3 className="mt-7 text-lg font-semibold text-slate-900">
              Services available in {cityData.city}
            </h3>
            <ul className="mt-3 space-y-2">
              {cityData.services.map((service) => (
                <li
                  key={service}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Areas we commonly serve
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Local teams and partner vendors available across these nearby zones.
            </p>

            <ul className="mt-5 space-y-2">
              {cityData.neighborhoods.map((area) => (
                <li
                  key={area}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white">
              <h3 className="text-lg font-semibold">
                Need interior design in {cityData.city}?
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Connect with our team for a free consultation and estimate.
              </p>
              <OpenQuoteButton
                label="Contact Our Team"
                className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
