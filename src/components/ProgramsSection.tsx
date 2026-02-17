import { motion } from "framer-motion";
import { Shield, Heart, Users, Building, Sparkles } from "lucide-react";
import programsImage from "@/assets/programs-health.jpg";

const programs = [
  {
    icon: Shield,
    title: "Disaster Management",
    description: "Immediate relief to save lives, protect livelihoods, and strengthen recovery from disasters and crises.",
  },
  {
    icon: Heart,
    title: "Health Services",
    description: "Affordable, accessible and equitable community-based health care across the nation.",
  },
  {
    icon: Users,
    title: "Youth Development",
    description: "Promoting youth-led volunteerism and sustainable action through You-Red spaces for all young people.",
  },
  {
    icon: Building,
    title: "National Development",
    description: "Building organizational capacity across branches and volunteer networks nationwide.",
  },
  {
    icon: Sparkles,
    title: "Special Programmes",
    description: "Targeted programmes catering to the special needs of vulnerable communities across the country.",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={programsImage}
                alt="Kenya Red Cross health programme in action"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 shadow-xl md:block">
              <p className="text-3xl font-bold text-primary-foreground">60+</p>
              <p className="text-sm text-primary-foreground/80">Years of Service</p>
            </div>
          </motion.div>

          {/* Programs list */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Programs</span>
              <h2 className="mt-3 text-3xl text-foreground md:text-5xl">
                What We <span className="italic text-primary">Do</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                From emergency response to community health, we work tirelessly to alleviate human suffering across Kenya.
              </p>
            </motion.div>

            <div className="mt-10 space-y-4">
              {programs.map((program, i) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-foreground">{program.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{program.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
