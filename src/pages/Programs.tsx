import { motion } from "framer-motion";
import { Shield, Heart, Droplets, Baby, Ambulance, School, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Programs = () => {
  const programs = [
    {
      id: "disaster-management",
      title: "Disaster Management",
      description: "Rapid response to save lives, protect livelihoods, and strengthen recovery from disasters and crises.",
      icon: Shield,
      color: "text-red-600"
    },
    {
      id: "health-services",
      title: "Health Services",
      description: "Providing essential healthcare services, medical camps, and health education to communities across Kenya.",
      icon: Heart,
      color: "text-pink-600"
    },
    {
      id: "water-sanitation",
      title: "Water & Sanitation",
      description: "Ensuring access to clean water and proper sanitation facilities to prevent waterborne diseases.",
      icon: Droplets,
      color: "text-blue-600"
    },
    {
      id: "education",
      title: "Education Programs",
      description: "Supporting educational initiatives, providing learning materials, and promoting literacy in underserved areas.",
      icon: School,
      color: "text-green-600"
    },
    {
      id: "maternal-health",
      title: "Maternal Health",
      description: "Improving maternal and child health through specialized care, education, and support programs.",
      icon: Baby,
      color: "text-purple-600"
    },
    {
      id: "emergency-response",
      title: "Emergency Response",
      description: "24/7 emergency medical response teams ready to provide immediate assistance during crises.",
      icon: Ambulance,
      color: "text-orange-600"
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
          className="mb-12 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Our Programs
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Discover how Kenya Red Cross is making a difference through our comprehensive programs 
            designed to save lives, support communities, and build resilience across Kenya.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden border-2 border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/40">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <program.icon className={`h-8 w-8 ${program.color}`} />
                    <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-6 text-muted-foreground">{program.description}</p>
                  
                  <div className="space-y-4">
                    <Link 
                      to={`/programs/${program.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    
                    <div className="pt-4 border-t">
                      <Button 
                        className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Support This Program
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground">
            <h2 className="mb-4 text-2xl font-bold">Get Involved</h2>
            <p className="mb-6 text-lg">
              Join us in our mission to save lives and support communities across Kenya. 
              Your contribution can make a real difference.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Button size="lg" className="rounded-full bg-accent px-8 text-lg font-bold text-accent-foreground hover:bg-accent/90">
                <Link to="/donations">
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-accent-foreground/40 bg-accent/10 px-8 text-lg font-semibold text-accent-foreground backdrop-blur-sm hover:bg-accent/20 hover:text-accent-foreground">
                <Link to="/get-involved">
                  Volunteer
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
