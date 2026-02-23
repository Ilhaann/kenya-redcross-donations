import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Heart, Users, Building, Sparkles, ArrowRight, Calendar, TrendingUp, Award, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  programs, 
  getProgramById, 
  getProgramsByCategory, 
  formatNumber,
  type Program 
} from "@/lib/program-data";

const EnhancedPrograms = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "disaster", label: "Disaster Management" },
    { id: "health", label: "Health Services" },
    { id: "youth", label: "Youth Development" },
    { id: "development", label: "National Development" },
    { id: "special", label: "Special Programs" }
  ];

  const filteredPrograms = selectedCategory === "all" 
    ? programs 
    : getProgramsByCategory(selectedCategory);

  const featuredPrograms = programs.filter(program => program.impact.peopleReached > 100000);

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
            Transforming communities across Kenya through dedicated humanitarian programs and services.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Programs */}
        {featuredPrograms.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold text-foreground text-center">Featured Programs</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-2 border-primary/20 bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/40">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/programs-hero.jpg"
                        alt={program.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                          Featured
                        </span>
                      </div>
                    </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <program.icon className="h-8 w-8 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">{program.title}</h3>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="mb-4 text-muted-foreground">{program.description}</p>
                      
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Impact</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>People Reached</span>
                              <span className="font-bold text-primary">{formatNumber(program.impact.peopleReached)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Communities Served</span>
                              <span className="font-bold text-primary">{program.impact.communitiesServed}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Volunteers Engaged</span>
                              <span className="font-bold text-primary">{formatNumber(program.impact.volunteersEngaged)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Key Achievements</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {program.impact.keyAchievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-4">
                          <Link 
                            to={`/programs/${program.id}`}
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Programs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden border-2 border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/40">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/programs-hero.jpg"
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                      {program.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <program.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">{program.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground">{program.description}</p>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Impact</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>People Reached</span>
                          <span className="font-bold text-primary">{formatNumber(program.impact.peopleReached)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Communities Served</span>
                          <span className="font-bold text-primary">{formatNumber(program.impact.communitiesServed)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Volunteers Engaged</span>
                          <span className="font-bold text-primary">{formatNumber(program.impact.volunteersEngaged)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Achievements</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {program.impact.keyAchievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-4 flex justify-between items-center">
                  <Link 
                    to={`/programs/${program.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                  >
                    {program.getInvolved?.volunteer && "Volunteer"}
                    {program.getInvolved?.donate && "Donate"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground">
            <h2 className="mb-6 text-2xl font-bold text-center">Our Collective Impact</h2>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center">
                <TrendingUp className="mx-auto mb-2 h-8 w-8" />
                <div className="text-3xl font-bold">{formatNumber(2000000)}</div>
                <p className="text-sm">People Reached Annually</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 h-8 w-8" />
                <div className="text-3xl font-bold">{formatNumber(100000)}</div>
                <p className="text-sm">Active Volunteers</p>
              </div>
              <div className="text-center">
                <Building className="mx-auto mb-2 h-8 w-8" />
                <div className="text-3xl font-bold">{47}</div>
                <p className="text-sm">County Branches</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-2 h-8 w-8" />
                <div className="text-3xl font-bold">8900</div>
                <p className="text-sm">Lives Saved</p>
              </div>
              <div className="text-center">
                <Heart className="mx-auto mb-2 h-8 w-8" />
                <div className="text-3xl font-bold">1000</div>
                <p className="text-sm">Communities Resilient</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground">Get Involved</h2>
          <p className="mb-6 text-muted-foreground">
            Join our mission to transform communities across Kenya. Whether you want to volunteer, donate, or partner with us, your contribution makes a real difference.
          </p>
          <Button size="lg" className="rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground hover:bg-primary/90">
            <Link to="/get-involved">
              Explore Opportunities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default EnhancedPrograms;
