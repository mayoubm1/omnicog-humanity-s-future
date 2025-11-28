import { Hero } from "@/components/Hero";
import { MinistryRegistry } from "@/components/MinistryRegistry";
import { Globe3D } from "@/components/Globe3D";
import { AITeamRegistry } from "@/components/AITeamRegistry";
import { HubsNetwork } from "@/components/HubsNetwork";
import { Mission } from "@/components/Mission";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MinistryRegistry />
      <Globe3D />
      <AITeamRegistry />
      <HubsNetwork />
      <Mission />
      <Footer />
    </div>
  );
};

export default Index;
