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
export default function Home() {
  return (
    <main>
      <FloatingContactBar />
      <Header
        title="Beautiful Homes Made Simple"
        subtitle="Get your dream interiors designed with ease, with elegant spaces that feel timeless."
        showForm={true}
      />
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
