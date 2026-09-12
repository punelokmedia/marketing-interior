import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import ClientWrapper from "./components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://benzarc.com"),

  applicationName: "Benz Architecture",

  title: {
    default: "Benz Architecture | Architecture & Interior Design in Pune",
    template: "%s | Benz Architecture",
  },

  description:
    "Benz Architecture provides premium architecture, interior design, commercial design, and space planning solutions in Pune, Maharashtra.",

  keywords: [
    "Benz Architecture",
    "Interior Design in Pune",
    "Architecture Company in Pune",
    "Commercial Interior Design",
    "Home Interior Design Pune",
    "Architectural Design Pune",
    "Commercial Design Pune",
  ],

  alternates: {
    canonical: "https://benzarc.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    siteName: "Benz Architecture",
    title: "Benz Architecture | Architecture & Interior Design in Pune",
    description:
      "Premium architecture, interior design, and commercial design solutions in Pune, Maharashtra.",
    url: "https://benzarc.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Benz Architecture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Benz Architecture | Architecture & Interior Design in Pune",
    description:
      "Premium architecture, interior design, and commercial design solutions in Pune, Maharashtra.",
    images: ["/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://benzarc.com/#organization",
      name: "Benz Architecture",
      url: "https://benzarc.com",
      logo: "https://benzarc.com/logo.png",
      description:
        "Benz Architecture provides architecture, interior design, and commercial design solutions in Pune, Maharashtra.",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://benzarc.com/#localbusiness",
      name: "Benz Architecture",
      url: "https://benzarc.com",
      image: "https://benzarc.com/og-image.jpg",
      description:
        "Architecture, interior design, and commercial design company based in Pune, Maharashtra.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Clover Hills Plaza, NIBM Road, Kondhwa",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411048",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Pune",
      },
      serviceType: [
        "Architecture",
        "Interior Design",
        "Commercial Design",
        "Space Planning",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <ClientWrapper>
          <Navbar />

          <main className="flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
            {children}
          </main>

          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}