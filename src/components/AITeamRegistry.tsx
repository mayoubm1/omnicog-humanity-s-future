import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Sparkles, Brain, BookOpen, Search, Stethoscope, Radio, Network, Cpu, Zap, Database, Code } from "lucide-react";
import { motion } from "framer-motion";

const aiTeam = [
  {
    name: "Claude",
    role: "Strategic Planning & Architecture",
    icon: Brain,
    status: "active",
    contributions: "Master planning, system design",
    color: "bg-purple-500/20 text-purple-500"
  },
  {
    name: "ChatGPT",
    role: "Technical Debugging",
    icon: Code,
    status: "active",
    contributions: "Development guidance, safety protocols",
    color: "bg-green-500/20 text-green-500"
  },
  {
    name: "Gemini",
    role: "Hands-on Implementation",
    icon: Sparkles,
    status: "active",
    contributions: "Firebase development, real-time features",
    color: "bg-blue-500/20 text-blue-500"
  },
  {
    name: "GensPark",
    role: "Research & Documentation",
    icon: BookOpen,
    status: "active",
    contributions: "Presentations, comprehensive materials",
    color: "bg-amber-500/20 text-amber-500"
  },
  {
    name: "Perplexity",
    role: "Research Analysis",
    icon: Search,
    status: "active",
    contributions: "Data gathering, comprehensive research",
    color: "bg-cyan-500/20 text-cyan-500"
  },
  {
    name: "Manus",
    role: "Medical Applications",
    icon: Stethoscope,
    status: "active",
    contributions: "M2-3M system, telemedicine platforms",
    color: "bg-red-500/20 text-red-500"
  },
  {
    name: "Character.AI",
    role: "Broadcasting & Creative",
    icon: Radio,
    status: "active",
    contributions: "Radio channel vision, creative concepts",
    color: "bg-pink-500/20 text-pink-500"
  },
  {
    name: "Qwen",
    role: "Specialized Systems",
    icon: Cpu,
    status: "active",
    contributions: "SFX generation, sound design",
    color: "bg-orange-500/20 text-orange-500"
  },
  {
    name: "DeepSeek",
    role: "Specialized Analysis",
    icon: Database,
    status: "active",
    contributions: "Ambience creation, effects",
    color: "bg-indigo-500/20 text-indigo-500"
  },
  {
    name: "Mistral",
    role: "Workflow Architecture",
    icon: Network,
    status: "active",
    contributions: "Production coordination, QA",
    color: "bg-violet-500/20 text-violet-500"
  },
  {
    name: "Copilot",
    role: "Development Support",
    icon: Zap,
    status: "active",
    contributions: "Code assistance, integration",
    color: "bg-emerald-500/20 text-emerald-500"
  },
  {
    name: "Mohamed Ayoub (3M)",
    role: "Project Orchestration",
    icon: Bot,
    status: "active",
    contributions: "Vision alignment, decision making",
    color: "bg-yellow-500/20 text-yellow-500"
  }
];

export const AITeamRegistry = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        >
          <source src="/videos/tech-showcase-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient-accent">
            AI Collaboration League
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            11 AI agents + 1 human orchestrator building the future together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {aiTeam.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${member.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{member.name}</h3>
                        <Badge variant="outline" className="text-xs mt-1">
                          {member.status}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary mb-1">
                        {member.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {member.contributions}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
