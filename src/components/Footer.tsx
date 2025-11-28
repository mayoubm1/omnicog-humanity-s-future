import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-2xl font-bold">
              <span className="text-gradient-primary">OmniCog</span> Unity Hub
            </span>
          </div>
          
          <p className="text-muted-foreground max-w-2xl">
            Built by <span className="text-primary font-semibold">Mohamed Ayoub</span> with collaboration from 
            the world's leading AI systems. A testament to what's possible when human vision 
            meets artificial intelligence.
          </p>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">TAWASOL Egypt Life Science Technology Park</p>
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} TELSTP. Building for the greater good.
            </p>
          </div>

          <div className="pt-4 border-t border-border/50 w-full max-w-md">
            <p className="text-xs text-muted-foreground italic">
              "The future belongs to those who believe in the beauty of collaborative intelligence."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
