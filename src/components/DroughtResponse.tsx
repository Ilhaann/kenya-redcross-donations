import { motion } from "framer-motion";
import { Droplets, Apple, Users, Wrench, MapPin, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import droughtImage from "@/assets/hero-drought-response.jpg";

const responseActions = [
  { icon: Apple, value: "108,790", label: "People reached with food assistance" },
  { icon: Droplets, value: "63,024", label: "People reached with clean water" },
  { icon: Users, value: "15,645", label: "Children under 5 receiving nutrition services" },
  { icon: Wrench, value: "64", label: "Water sources rehabilitated" },
];

const affectedCounties = [
  { name: "Turkana", phase: "Critical" },
  { name: "Mandera", phase: "Critical" },
  { name: "Samburu", phase: "Critical" },
  { name: "Garissa", phase: "Critical" },
  { name: "Isiolo", phase: "Critical" },
  { name: "Marsabit", phase: "Critical" },
  { name: "Wajir", phase: "Serious" },
  { name: "Tana River", phase: "Serious" },
  { name: "West Pokot", phase: "Critical" },
  { name: "Baringo", phase: "Critical" },
];

const DroughtResponse = () => {
  return (
    <section id="drought" className="relative overflow-hidden py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-semibold text-destructive">
            <AlertCircle className="h-4 w-4" />
            Active Emergency
          </span>
          <h2 className="mt-4 text-3xl text-foreground md:text-5xl">
            Drought Emergency <span className="italic text-primary">Response 2026</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Over 2 million people are affected by drought across Kenya. Nutrition and access to water are deteriorating rapidly across arid counties.
          </p>
        </motion.div>

        {/* Hero image + stats overlay */}
        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={droughtImage}
                alt="Kenya Red Cross volunteers distributing water to drought-affected communities"
                className="h-[400px] w-full object-cover md:h-[500px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {responseActions.map((action, i) => (
                    <motion.div
                      key={action.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <action.icon className="mx-auto mb-1 h-5 w-5 text-accent" />
                      <p className="text-xl font-bold text-primary-foreground md:text-2xl">{action.value}</p>
                      <p className="text-xs text-primary-foreground/70">{action.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Crisis data sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            {/* Key stats */}
            <div className="rounded-2xl border border-border bg-card p-6" style={{ boxShadow: "var(--card-shadow)" }}>
              <h3 className="mb-4 font-sans text-lg font-bold text-foreground">Crisis at a Glance</h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted-foreground">Children malnourished</span>
                    <span className="font-bold text-destructive">784,000</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted-foreground">Households needing water</span>
                    <span className="font-bold text-destructive">300,000</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg. distance to water</span>
                    <span className="font-bold text-accent">6.9 km</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </div>
            </div>

            {/* Affected counties */}
            <div className="rounded-2xl border border-border bg-card p-6" style={{ boxShadow: "var(--card-shadow)" }}>
              <h3 className="mb-4 font-sans text-lg font-bold text-foreground">Affected Counties</h3>
              <div className="flex flex-wrap gap-2">
                {affectedCounties.map((county) => (
                  <span
                    key={county.name}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      county.phase === "Critical"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-accent/20 text-accent-foreground"
                    }`}
                  >
                    <MapPin className="h-3 w-3" />
                    {county.name}
                  </span>
                ))}
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-primary text-base font-bold text-primary-foreground shadow-lg hover:bg-primary/90"
            >
              <Link to="/donations">
                Donate to Drought Response ❤️
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DroughtResponse;
