import Image from "next/image";
import styles from "./ClientLogos.module.css";

const clients = [
  { logo: "/client-logo/logo.webp", name: "Nitor" },
  { logo: "/client-logo/images.png", name: "Industrial client" },
  { logo: "/client-logo/cybage_logo.png",name: "Industrial client" },
  { logo: "/client-logo/download (1).png", name: "Harbinger Group" },
  {
    logo: "/client-logo/c7ae4c_9f5bb49335bc46ea8a62f09fa1929f9a~mv2.png",
    name: "World Development Corporation",
  },
];

export default function ClientLogos() {
  return (
    <section aria-label="Clients we work with" className="overflow-hidden border-t border-slate-200 bg-[#faf8f6] py-14 sm:py-20">
      <div className="mx-auto mb-9 max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b97817]">
          Our industrial & commercial clients
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#071329] sm:text-4xl">
          Clients we work with
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Proud to have worked with these companies to bring their spaces to life.
        </p>
      </div>

      <div className={styles.marquee}>
            <div className={styles.row}>
              <div className={styles.track}>
                {[0, 1].map((copy) => (
                  <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className={styles.group}>
                    {clients.map((client) => (
                      <li key={client.logo} className="flex h-28 w-48 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:h-32 sm:w-60">
                        <div className="relative h-full w-full">
                          <Image
                            src={client.logo}
                            alt={`${client.name} logo`}
                            fill
                            sizes="(max-width: 639px) 152px, 200px"
                            className="object-contain"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
      </div>
    </section>
  );
}
