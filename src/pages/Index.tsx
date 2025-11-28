import { Hero } from "@/components/Hero";
import { AILeague } from "@/components/AILeague";
import { HubsNetwork } from "@/components/HubsNetwork";
import { Mission } from "@/components/Mission";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AILeague />
      <HubsNetwork />
      <Mission />
      <Footer />
    </div>
  );
};

export default Index;
