import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EstimateForm from "../../components/EstimateForm";
import { estimates, getEstimateConfig } from "../../lib/estimates";

type Props = { params: Promise<{ service: string }> };

export function generateStaticParams() {
  return Object.keys(estimates).map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const config = getEstimateConfig(service);
  if (!config) notFound();
  return {
    title: `${config.title} Interior Cost Calculator`,
    description: config.description,
    alternates: { canonical: `/estimate/${service}` },
  };
}

export default async function EstimatePage({ params }: Props) {
  const { service } = await params;
  const config = getEstimateConfig(service);
  if (!config) notFound();
  return (
    <div className="bg-stone-50 pb-16 text-slate-900">
      <section className="bg-slate-950 px-6 pb-24 pt-36 text-white md:pt-44">
        <div className="mx-auto max-w-4xl">
          <Link href="/#home-estimates" className="text-sm text-white/80 underline underline-offset-4">← Back to estimates</Link>
          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-red-400">{config.title} Interior Cost Calculator</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{config.heading}</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-200">{config.description}</p>
        </div>
      </section>
      <div className="relative mx-auto -mt-10 max-w-4xl px-4 sm:px-6">
        <EstimateForm key={service} service={service} config={config} />
      </div>
    </div>
  );
}
