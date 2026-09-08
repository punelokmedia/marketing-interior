import BudgetSection from "./components/homepage/budgetsection";
import Header from "./components/homepage/header";
import WhyChoose from "./components/homepage/whychooseus";
import Services from "./components/homepage/services";
import TrustedPartners from "./components/homepage/trustedPartner";
import EstimateSection from "./components/homepage/Estimatesection";
import HowItWorks from "./components/homepage/Howitworks";
import ConnectWithUs from "./components/homepage/ConnectWithUs";
import FAQ from "./components/homepage/faq";
import FloatingContactBar from "./components/homepage/FloatingContactBar";
export const metadata = { alternates: { canonical: "https://benzarc.com" } };
export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Benz Architecture",
          alternateName: "BenzArc",
          url: "https://benzarc.com/",
        }) }}
      />
      <FloatingContactBar />
      <Header />
      <WhyChoose />
      <BudgetSection />
      <Services />
      <TrustedPartners />
      <EstimateSection />
      <HowItWorks />
      <ConnectWithUs />
      <FAQ />
    </main>
  );
}
