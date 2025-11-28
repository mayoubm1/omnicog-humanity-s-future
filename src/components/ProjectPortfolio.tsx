import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Video, Map, Presentation } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  type: "live" | "doc" | "video" | "presentation";
  category: string;
}

const portfolioData: PortfolioItem[] = [
  // Core Platforms
  {
    title: "Global 3D Network Hub",
    description: "Live 3D visualization of global research institutes across 50+ countries",
    url: "https://tawasol-globe-app.vercel.app/",
    type: "live",
    category: "Live Platforms"
  },
  {
    title: "Education Portal",
    description: "Comprehensive learning management and course delivery system",
    url: "https://webapp-amber-eta.vercel.app/login",
    type: "live",
    category: "Live Platforms"
  },
  {
    title: "Health Tech Ecosystem",
    description: "Digital healthcare and telemedicine platform with AI assistance",
    url: "https://health-tech-ecosystem-frontend-3z3u-cw69gw4fd-tawasolnow.vercel.app/",
    type: "live",
    category: "Live Platforms"
  },
  {
    title: "Digital TELSTP Registry",
    description: "Unified platform registry and management system",
    url: "https://digital-telstp-unified-registry-fem.vercel.app/",
    type: "live",
    category: "Live Platforms"
  },
  {
    title: "TELSTP Showcase",
    description: "Public-facing showcase website for the technology park",
    url: "https://telstp-showcase-website-hnjgci9w8-tawasolnow.vercel.app/",
    type: "live",
    category: "Live Platforms"
  },
  {
    title: "Egypt Omics Hub",
    description: "Genomics and precision medicine research platform",
    url: "https://egypt-omics-uber.vercel.app/",
    type: "live",
    category: "Live Platforms"
  },
  {
    title: "Future Sciences Hub",
    description: "The original foundational platform - 8 months of evolution",
    url: "https://egypt-future-sciences-hub.vercel.app/",
    type: "live",
    category: "Live Platforms"
  },
  // Documentation
  {
    title: "Strategic Roadmap",
    description: "8 Billion EGP Mega National Project - Complete strategic vision",
    url: "#",
    type: "doc",
    category: "Strategic Documents"
  },
  {
    title: "TELsTP Vision Book",
    description: "Foundational document outlining core vision, mission, and philosophy",
    url: "#",
    type: "presentation",
    category: "Strategic Documents"
  },
  {
    title: "M2-3M Research Engine",
    description: "Advanced AI research assistant with quantum biology analysis",
    url: "#",
    type: "doc",
    category: "Research Systems"
  }
];

const typeIcons = {
  live: ExternalLink,
  doc: FileText,
  video: Video,
  presentation: Presentation
};

const typeColors = {
  live: "bg-green-500/20 text-green-400 border-green-500/30",
  doc: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  video: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  presentation: "bg-amber-500/20 text-amber-400 border-amber-500/30"
};

export const ProjectPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(portfolioData.map(item => item.category)))];
  
  const filteredItems = selectedCategory === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === selectedCategory);

  return (
    <section id="project-portfolio" className="py-20 px-6 relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="/videos/ai-collaboration.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Project Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore the complete TELsTP ecosystem - Live platforms, strategic documents, 
            and research systems working together for humanity's advancement
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const Icon = typeIcons[item.type];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg border ${typeColors[item.type]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {item.url !== "#" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Platform
                    </Button>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Chairman's Message CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 p-8 text-center backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-gradient-accent">
              Chairman's Message
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover the vision behind TELSTP and Mohamed Ayoub's commitment to advancing 
              life sciences through human-AI collaboration for a better future.
            </p>
            <Button size="lg" className="glow-primary">
              <FileText className="w-5 h-5 mr-2" />
              Read Full Vision
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
