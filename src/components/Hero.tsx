import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cosmic.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-cosmic">
        <div className="absolute inset-0 bg-gradient-glow opacity-50 animate-pulse-slow" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(187,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(187,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">A Vision for Humanity's Future</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-gradient-primary">OmniCog</span>
          <br />
          <span className="text-foreground">Unity Hub</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
          Where <span className="text-gradient-accent font-semibold">Human Intelligence</span> meets{" "}
          <span className="text-gradient-primary font-semibold">Artificial Genius</span>
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          A collaborative platform uniting 10+ AI minds with human vision to build{" "}
          <span className="text-primary font-semibold">TELSTP</span> — 
          TAWASOL Egypt Life Science Technology Park for humanity's advancement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary transition-all hover:scale-105">
            Explore the Vision
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg transition-all hover:scale-105">
            Meet the AI League
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">AI Collaborators</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-accent mb-2">60+</div>
            <div className="text-sm text-muted-foreground">Interconnected Tables</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">10</div>
            <div className="text-sm text-muted-foreground">Innovation Hubs</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
