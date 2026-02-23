import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Clock, Target, Package, Users, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  campaigns, 
  getCampaignsByCategory, 
  getFeaturedCampaigns, 
  getUrgentCampaigns,
  formatCurrency,
  getProgressPercentage,
  type Campaign 
} from "@/lib/campaign-data";

const Campaigns = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", label: "All Campaigns" },
    { id: "emergency", label: "Emergency" },
    { id: "health", label: "Health" },
    { id: "education", label: "Education" },
    { id: "shelter", label: "Shelter" }
  ];

  const filteredCampaigns = activeFilter === "all" 
    ? campaigns 
    : getCampaignsByCategory(activeFilter);

  const featuredCampaigns = getFeaturedCampaigns();
  const urgentCampaigns = getUrgentCampaigns();

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
            Active Campaigns
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Support our ongoing humanitarian efforts across Kenya. Every contribution makes a difference 
            in saving lives and restoring hope to vulnerable communities.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className="rounded-full"
              >
                <Filter className="mr-2 h-4 w-4" />
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Campaigns Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredCampaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Campaign Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute left-4 top-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                    campaign.tag === 'URGENT' ? 'bg-red-600 text-white' :
                    campaign.tag === 'CRITICAL' ? 'bg-red-800 text-white' :
                    campaign.tag === 'NEW' ? 'bg-green-600 text-white' :
                    'bg-blue-600 text-white'
                  }`}>
                    {campaign.tag}
                  </span>
                </div>
              </div>

              {/* Campaign Content */}
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-foreground line-clamp-2">
                  {campaign.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                  {campaign.description}
                </p>

                {/* Location */}
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {campaign.location}
                </div>

                {/* Progress */}
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Raised</span>
                    <span className="font-bold text-foreground">
                      {formatCurrency(campaign.raised)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Goal</span>
                    <span className="text-muted-foreground">
                      {formatCurrency(campaign.goal)}
                    </span>
                  </div>
                  <Progress 
                    value={getProgressPercentage(campaign.raised, campaign.goal)} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{campaign.donors.toLocaleString()} donors</span>
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-4 rounded-lg bg-primary/10 p-3">
                  <p className="text-sm font-semibold text-primary">
                    Impact: {campaign.impact}
                  </p>
                </div>

                {/* Action Button */}
                <Button asChild className="w-full rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
                  <Link to={`/donations?campaign=${campaign.id}`}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <Heart className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              No campaigns found
            </h3>
            <p className="text-muted-foreground">
              Try selecting a different filter or check back later for new campaigns.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground"
        >
          <h2 className="mb-4 text-2xl font-bold">Start Your Own Campaign</h2>
          <p className="mb-6 text-lg">
            Want to make a difference? Start a peer-to-peer fundraising campaign for your community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full bg-accent px-8 font-bold text-accent-foreground hover:bg-accent/90">
              Start Fundraising
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-primary-foreground/40 bg-primary-foreground/10 px-8 font-semibold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20">
              Learn More
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Campaigns;
