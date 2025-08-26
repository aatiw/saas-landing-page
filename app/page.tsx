import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import Introduction from "@/components/Introduction";
import LogoTicker from "@/components/LogoTicker";
import CallToAction from "@/utils/CallToAction";
import Footer from "@/utils/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integration />
      <Faqs />
      <CallToAction />
      <Footer />
    </div>
  );
}
