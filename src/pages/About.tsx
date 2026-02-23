import { motion } from "framer-motion";
import { Shield, Heart, Users, Globe, Award, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const milestones = [
    { year: "1965", event: "Kenya Red Cross Society established" },
    { year: "1971", event: "Recognized by International Red Cross" },
    { year: "1990", event: "Expanded to all 47 counties" },
    { year: "2005", event: "Launched Youth Volunteer Program" },
    { year: "2020", event: "Digital Transformation Initiative" },
    { year: "2026", event: "Leading Drought Emergency Response" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Humanity",
      description: "We protect life and health and ensure respect for all human beings."
    },
    {
      icon: Shield,
      title: "Impartiality",
      description: "We provide relief without discrimination based on nationality, race, or beliefs."
    },
    {
      icon: Users,
      title: "Neutrality",
      description: "We do not take sides in hostilities or engage in controversies."
    },
    {
      icon: Globe,
      title: "Independence",
      description: "We maintain autonomy to act according to our principles."
    },
    {
      icon: Award,
      title: "Voluntary Service",
      description: "We are a voluntary relief movement not prompted by desire for gain."
    },
    {
      icon: Clock,
      title: "Unity",
      description: "One Red Cross society per country, open to all, carrying out work."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Who We Are
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            The Kenya Red Cross Society is a humanitarian organization established in 1965, 
            dedicated to protecting life and health, ensuring respect for all human beings, 
            and alleviating human suffering across Kenya.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 grid gap-8 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold text-primary">Our Mission</h2>
            <p className="text-muted-foreground">
              To be the leading humanitarian organization in Kenya, working with communities 
              to alleviate human suffering, protect life and health, and ensure respect 
              for all human beings through voluntary service.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold text-primary">Our Vision</h2>
            <p className="text-muted-foreground">
              A Kenya where communities are resilient, prepared for disasters, and have 
              access to essential services, with dignity and respect for human life.
            </p>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Our Fundamental Principles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <value.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Our Journey
          </h2>
          <div className="mx-auto max-w-3xl">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="flex items-center gap-6 pb-8"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="rounded-2xl bg-primary p-8 text-primary-foreground"
        >
          <h2 className="mb-6 text-center text-2xl font-bold">Our Impact</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold md:text-4xl">2M+</div>
              <p className="text-sm">Lives Impacted Annually</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold md:text-4xl">47</div>
              <p className="text-sm">County Branches</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold md:text-4xl">100K+</div>
              <p className="text-sm">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold md:text-4xl">60+</div>
              <p className="text-sm">Years of Service</p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
