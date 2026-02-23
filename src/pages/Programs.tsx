import { motion } from "framer-motion";
import { Shield, Heart, Users, Building, Sparkles, Droplets, Baby, Ambulance, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Programs = () => {
  const programs = [
    {
      icon: Shield,
      title: "Disaster Management",
      description: "Rapid response to save lives, protect livelihoods, and strengthen recovery from disasters and crises across Kenya.",
      features: [
        "Emergency relief distribution",
        "Search and rescue operations", 
        "Temporary shelter management",
        "Family tracing services"
      ],
      impact: "500,000+ people assisted annually",
      color: "text-red-600"
    },
    {
      icon: Heart,
      title: "Health Services",
      description: "Providing affordable, accessible and equitable community-based health care services nationwide.",
      features: [
        "Primary health care clinics",
        "Maternal and child health",
        "Disease prevention programs",
        "Health education campaigns"
      ],
      impact: "1M+ health interventions yearly",
      color: "text-pink-600"
    },
    {
      icon: Users,
      title: "Youth Development",
      description: "Empowering young people through volunteerism, leadership training, and sustainable action programs.",
      features: [
        "Youth Red Cross clubs",
        "Leadership development",
        "Community service projects",
        "Skills training programs"
      ],
      impact: "50,000+ youth engaged annually",
      color: "text-blue-600"
    },
    {
      icon: Building,
      title: "National Development",
      description: "Building organizational capacity across branches and volunteer networks for sustainable impact.",
      features: [
        "Branch capacity building",
        "Volunteer management",
        "Resource mobilization",
        "Partnership development"
      ],
      impact: "47 county branches strengthened",
      color: "text-green-600"
    },
    {
      icon: Sparkles,
      title: "Special Programmes",
      description: "Targeted initiatives addressing the unique needs of vulnerable communities across Kenya.",
      features: [
        "Gender-based violence prevention",
        "Social inclusion programs",
        "Livelihood support",
        "Protection services"
      ],
      impact: "200,000+ vulnerable people supported",
      color: "text-purple-600"
    }
  ];

  const ongoingProjects = [
    {
      title: "Drought Emergency Response 2026",
      description: "Comprehensive response to severe drought affecting 10 counties",
      status: "Active",
      progress: 65
    },
    {
      title: "Maternal Health Initiative",
      description: "Reducing maternal mortality in rural communities",
      status: "Active", 
      progress: 78
    },
    {
      title: "Youth Climate Action",
      description: "Engaging youth in climate resilience and environmental conservation",
      status: "Planning",
      progress: 25
    }
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
            What We Do
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Our programs address Kenya's most pressing humanitarian challenges through 
            coordinated action, community engagement, and sustainable solutions.
          </p>
        </motion.div>

        {/* Main Programs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-lg"
              >
                <program.icon className={`mb-4 h-12 w-12 ${program.color}`} />
                <h3 className="mb-3 text-xl font-bold text-foreground">{program.title}</h3>
                <p className="mb-4 text-muted-foreground">{program.description}</p>
                
                <ul className="mb-6 space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="rounded-lg bg-primary/10 p-3">
                  <p className="text-sm font-semibold text-primary">{program.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ongoing Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Active Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    project.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-semibold">{project.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div 
                      className="h-2 rounded-full bg-primary transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground"
        >
          <h2 className="mb-4 text-2xl font-bold">Support Our Programs</h2>
          <p className="mb-6 text-lg">
            Your donation helps us continue our vital work across all 47 counties in Kenya.
          </p>
          <Button asChild size="lg" className="rounded-full bg-accent px-8 font-bold text-accent-foreground hover:bg-accent/90">
            <Link to="/donations">
              Donate Now
            </Link>
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
