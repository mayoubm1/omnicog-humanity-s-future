import { Card } from "@/components/ui/card";
import { Globe, Users, Lightbulb, Heart } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Global Impact",
    description: "Building technology that serves all of humanity, transcending borders and barriers.",
  },
  {
    icon: Users,
    title: "Collaborative Intelligence",
    description: "Harnessing the collective power of human creativity and AI precision.",
  },
  {
    icon: Lightbulb,
    title: "Innovation for Good",
    description: "Every advancement designed to improve lives and solve real-world challenges.",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description: "Technology that amplifies human potential while preserving our essential humanity.",
  },
];

export const Mission = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/videos/network-flow.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            A Project for <span className="text-gradient-accent">Humanity</span>
          </h2>
          <p className="text-xl text-primary font-semibold mb-4">TAWASOL Egypt Life Science Technology Park</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            TELSTP represents more than a technological achievement—it's a commitment to humanity's thriving future.
            A platform where life sciences meet cutting-edge AI to solve our most pressing health and 
            environmental challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={value.title}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 p-12 text-center backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6">
            <span className="text-gradient-primary">Together</span>, We Build Tomorrow
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            This is not just about technology or science. It's about proving that when human vision 
            combines with artificial intelligence, guided by compassion and purpose, we can create 
            solutions that truly serve the greater good.
          </p>
          <div className="inline-block">
            <p className="text-2xl font-bold text-gradient-accent">🌍 THRIVE</p>
            <p className="text-sm text-muted-foreground mt-2">The Human Race Initiative for Visionary Excellence</p>
          </div>
        </Card>
      </div>
    </section>
  );
};
