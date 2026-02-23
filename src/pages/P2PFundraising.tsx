import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Target, Calendar, Share2, TrendingUp, Award, Star, MessageCircle, ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  p2pFundraisers, 
  getP2PFundraiserById, 
  getFeaturedP2PFundraisers,
  formatCurrency,
  getProgressPercentage,
  getDaysRemaining,
  type P2PFundraiser 
} from "@/lib/p2p-fundraising-data";

const P2PFundraising = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", label: "All Campaigns" },
    { id: "general", label: "General" },
    { id: "athletes", label: "Athletes" },
    { id: "education", label: "Education" },
    { id: "community", label: "Community" }
  ];

  const sortOptions = [
    { id: "popular", label: "Most Popular" },
    { id: "recent", label: "Recently Started" },
    { id: "ending-soon", label: "Ending Soon" },
    { id: "most-raised", label: "Most Raised" }
  ];

  const filteredFundraisers = p2pfundraisers.filter(fundraiser => {
    const matchesSearch = fundraiser.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fundraiser.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || fundraiser.goal.targetAudience.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const sortedFundraisers = [...filteredFundraisers].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.stats.totalDonors - a.stats.totalDonors;
      case "recent":
        return new Date(b.stats.daysActive).getTime() - new Date(a.stats.daysActive).getTime();
      case "ending-soon":
        return getDaysRemaining(a.goal.deadline) - getDaysRemaining(b.goal.deadline);
      case "most-raised":
        return b.stats.totalRaised - a.stats.totalRaised;
      default:
        return 0;
    }
  });

  const featuredFundraisers = getFeaturedP2PFundraisers();

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
            Peer-to-Peer Fundraising
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Start your own fundraising campaign and mobilize your community to support Kenya Red Cross humanitarian efforts.
            Together, we can make an even bigger impact.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground hover:bg-primary/90">
              <Link to="/p2p/start">
                Start Fundraising
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-primary px-8 text-lg font-semibold hover:bg-primary/10 hover:text-primary">
              Browse Campaigns
            </Button>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {/* Featured Campaigns */}
        {featuredFundraisers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold text-foreground">Featured Campaigns</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredFundraisers.slice(0, 2).map((fundraiser, index) => (
                <motion.div
                  key={fundraiser.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-2 border-primary/20 bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/40">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={fundraiser.image}
                        alt={fundraiser.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                          Featured
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-foreground">{fundraiser.title}</h3>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {fundraiser.stats.totalDonors} donors
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="mb-4 text-muted-foreground">{fundraiser.description}</p>
                      
                      <div className="mb-4">
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-bold text-primary">
                            {getProgressPercentage(fundraiser.stats.totalRaised, fundraiser.goal.amount).toFixed(1)}%
                          </span>
                        </div>
                        <Progress 
                          value={getProgressPercentage(fundraiser.stats.totalRaised, fundraiser.goal.amount)} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{formatCurrency(fundraiser.stats.totalRaised)}</span>
                          <span>{formatCurrency(fundraiser.goal.amount)}</span>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Campaign Stats</h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex justify-between">
                              <span>Days Active</span>
                              <span className="font-medium">{fundraiser.stats.daysActive}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Social Shares</span>
                              <span className="font-medium">{fundraiser.stats.socialShares}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Team Members</span>
                              <span className="font-medium">{fundraiser.stats.teamMembers}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Organizer</h4>
                          <div className="flex items-center gap-3">
                            <img
                              src={fundraiser.organizer.avatar}
                              alt={fundraiser.organizer.name}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                            <div>
                              <div className="font-medium text-foreground">{fundraiser.organizer.name}</div>
                              <div className="text-sm text-muted-foreground">{fundraiser.organizer.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <Link 
                          to={`/p2p/${fundraiser.id}`}
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                        >
                          View Campaign
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Button 
                          size="sm"
                          className="rounded-full bg-primary px-4"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Campaigns Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {sortedFundraisers.map((fundraiser, index) => (
            <motion.div
              key={fundraiser.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden border-2 border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/40">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={fundraiser.image}
                    alt={fundraiser.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                      {fundraiser.goal.targetAudience}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white">
                      {getDaysRemaining(fundraiser.goal.deadline)} days left
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground">{fundraiser.title}</h3>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {fundraiser.stats.totalDonors} donors
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground">{fundraiser.description}</p>
                  
                  <div className="mb-4">
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-bold text-primary">
                        {getProgressPercentage(fundraiser.stats.totalRaised, fundraiser.goal.amount).toFixed(1)}%
                      </span>
                    </div>
                    <Progress 
                      value={getProgressPercentage(fundraiser.stats.totalRaised, fundraiser.goal.amount)} 
                      className="h-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{formatCurrency(fundraiser.stats.totalRaised)}</span>
                      <span>{formatCurrency(fundraiser.goal.amount)}</span>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Campaign Stats</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Days Active</span>
                          <span className="font-medium">{fundraiser.stats.daysActive}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Social Shares</span>
                          <span className="font-medium">{fundraiser.stats.socialShares}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Team Members</span>
                          <span className="font-medium">{fundraiser.stats.teamMembers}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Organizer</h4>
                      <div className="flex items-center gap-3">
                        <img
                          src={fundraiser.organizer.avatar}
                          alt={fundraiser.organizer.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-foreground">{fundraiser.organizer.name}</div>
                          <div className="text-sm text-muted-foreground">{fundraiser.organizer.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <Link 
                      to={`/p2p/${fundraiser.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                    >
                      View Campaign
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Button 
                      size="sm"
                      className="rounded-full bg-primary px-4"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
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
          transition={{ delay: 1.0 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground">
            <h2 className="mb-4 text-2xl font-bold">Start Your Fundraising Campaign</h2>
            <p className="mb-6 text-lg">
              Join thousands of Kenyans making a difference through peer-to-peer fundraising. 
              Whether it's for a birthday, marathon, or community project, your campaign can save lives.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Button size="lg" className="rounded-full bg-accent px-8 text-lg font-bold text-accent-foreground hover:bg-accent/90">
                <Link to="/p2p/start">
                  Start Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-accent-foreground/40 bg-accent/10 px-8 text-lg font-semibold text-accent-foreground backdrop-blur-sm hover:bg-accent/20 hover:text-accent-foreground">
                <Link to="/p2p/guide">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Impact Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground">
            <h2 className="mb-6 text-2xl font-bold text-center">P2P Fundraising Impact</h2>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center">
                <TrendingUp className="mx-auto mb-2 h-8 w-8" />
                <div className="text-3xl font-bold">{formatNumber(50000)}</div>
                <p className="text-sm">Active Fundraisers</p>
              </div>
              <div className="text-center">
                <Heart className="mx-auto mb-2 h-8 w-8" />
                <div className="text-3xl font-bold">{formatNumber(25000)}</div>
                <p className="text-sm">Total Donors</p>
              </div>
              <div className="text-center">
                <Target className="mx-auto mb-2 h-8 w-8" />
                <div className="text-3xl font-bold">{formatNumber(1500000)}</div>
                <p className="text-sm">Total Raised</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 h-8 w-8" />
                <div className="text-3xl font-bold">{formatNumber(1000)}</div>
                <p className="text-sm">Team Members</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default P2PFundraising;
