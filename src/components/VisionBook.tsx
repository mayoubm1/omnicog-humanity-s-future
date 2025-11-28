import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const VisionBook = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="/videos/telstp-overview.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            The Vision Book
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the complete 47-page strategic vision for TELSTP and the future of
            humanitarian life science technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 backdrop-blur-sm bg-card/50 border-primary/20 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">TELsTP Vision Book</h3>
                    <p className="text-muted-foreground">47-page comprehensive guide</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  A detailed exploration of the Tawasol Egypt Life Science Technology Park,
                  covering strategic planning, AI collaboration frameworks, research hubs,
                  and the path to global THRIVE impact.
                </p>
              </div>
              <div className="flex gap-4">
                <Button
                  asChild
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <a href="/documents/vision-book.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View PDF
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-primary/20"
                >
                  <a href="/documents/vision-book.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 backdrop-blur-sm bg-card/50 border-primary/20 h-full">
              <h3 className="text-xl font-bold mb-4">Key Sections</h3>
              <ul className="space-y-3">
                {[
                  "Executive Summary & Mission",
                  "AI Collaboration Framework",
                  "Research & Innovation Hubs",
                  "Educational Platform Integration",
                  "Health Technology Ecosystem",
                  "Global Partnership Strategy",
                  "Financial Models & ROI Analysis",
                  "Implementation Roadmap",
                ].map((section, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{section}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
