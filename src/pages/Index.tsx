import { Hero } from "@/components/Hero";
import { ProjectPortfolio } from "@/components/ProjectPortfolio";
import { MinistryRegistry } from "@/components/MinistryRegistry";
import { SystemHealth } from "@/components/SystemHealth";
import { MinistryControl } from "@/components/MinistryControl";
import { Globe3D } from "@/components/Globe3D";
import { AITeamRegistry } from "@/components/AITeamRegistry";
import { HubsNetwork } from "@/components/HubsNetwork";
import { Mission } from "@/components/Mission";
import { VisionBook } from "@/components/VisionBook";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectPortfolio />
      <SystemHealth />
      <MinistryControl />
      <Globe3D />
      <div id="ai-league">
        <AITeamRegistry />
      </div>
      <HubsNetwork />
      <VisionBook />
      <MinistryRegistry />
      <Mission />
      <Footer />
    </div>
  );
};

export default Index;
