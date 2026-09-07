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
  title: "Benz Architecture | Architecture & Interior Design",
  description: "Transform your space with Benz Architecture. We offer premium interior design solutions tailored to your style, needs and lifestyle.",
  openGraph: {
    siteName: "Benz Architecture",
    title: "Benz Architecture | Architecture & Interior Design",
    description: "Architecture and premium interior design tailored to your style, needs and lifestyle.",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">
         <ClientWrapper>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
