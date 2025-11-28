import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Pause, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Ministry {
  id: string;
  name: string;
  status: "active" | "paused" | "maintenance";
  description: string;
  url?: string;
  metrics: {
    users: string;
    requests: string;
    uptime: string;
  };
}

const ministries: Ministry[] = [
  {
    id: "globe",
    name: "Global 3D Network",
    status: "active",
    description: "50+ research institutes connected",
    url: "https://waaecfjc.manus.space/",
    metrics: { users: "1.2K", requests: "45K/day", uptime: "99.9%" }
  },
  {
    id: "m23m",
    name: "M2-3M Research Engine",
    status: "active",
    description: "4.2TB/hour quantum processor",
    url: "https://qjh9iec5vx5p.manus.space/",
    metrics: { users: "850", requests: "120K/day", uptime: "99.8%" }
  },
  {
    id: "telemedicine",
    name: "Telemedicine Hub",
    status: "active",
    description: "MyWell AI & MyAssist AI",
    url: "https://dyh6i3c9o0ll.manus.space/",
    metrics: { users: "3.5K", requests: "85K/day", uptime: "99.9%" }
  },
  {
    id: "radio",
    name: "Radio & Podcasts",
    status: "active",
    description: "24/7 broadcasting",
    url: "https://yhyatksk.manus.space/",
    metrics: { users: "2.1K", requests: "65K/day", uptime: "99.7%" }
  }
];

export const MinistryControl = () => {
  const [ministryStates, setMinistryStates] = useState(ministries);

  const toggleMinistry = (id: string) => {
    setMinistryStates(prev => prev.map(m => 
      m.id === id 
        ? { ...m, status: m.status === 'active' ? 'paused' : 'active' as any }
        : m
    ));
  };

  const statusColors = {
    active: "bg-green-500",
    paused: "bg-amber-500",
    maintenance: "bg-red-500"
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient-accent">
            Ministry Control Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time management and monitoring of all digital ministries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {ministryStates.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{ministry.name}</h3>
                      <div className={`w-2 h-2 rounded-full ${statusColors[ministry.status]} animate-pulse`} />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {ministry.description}
                    </p>
                  </div>
                  <Badge variant={ministry.status === 'active' ? 'default' : 'outline'}>
                    {ministry.status}
                  </Badge>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-muted/50 rounded-lg">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Users</div>
                    <div className="text-sm font-semibold">{ministry.metrics.users}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Requests</div>
                    <div className="text-sm font-semibold">{ministry.metrics.requests}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Uptime</div>
                    <div className="text-sm font-semibold text-green-500">{ministry.metrics.uptime}</div>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={ministry.status === 'active' ? 'destructive' : 'default'}
                    onClick={() => toggleMinistry(ministry.id)}
                    className="flex-1"
                  >
                    {ministry.status === 'active' ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Resume
                      </>
                    )}
                  </Button>
                  
                  {ministry.url && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(ministry.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                  
                  <Button size="sm" variant="outline">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
