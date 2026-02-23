import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Heart, 
  Users, 
  Target, 
  Calendar, 
  MapPin, 
  Share2, 
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  getCampaignById, 
  formatCurrency, 
  getProgressPercentage,
  type Campaign,
  type CampaignUpdate 
} from "@/lib/campaign-data";

const CampaignDetail = () => {
  const { id } = useParams<{ id: string }>();
  const campaign = getCampaignById(id || "");
  const [selectedTab, setSelectedTab] = useState<"story" | "updates" | "impact">("story");

  if (!campaign) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-foreground">Campaign Not Found</h1>
            <p className="mb-8 text-muted-foreground">
              The campaign you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild className="rounded-full">
              <Link to="/campaigns">Back to Campaigns</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "URGENT": return "bg-red-600 text-white";
      case "CRITICAL": return "bg-red-800 text-white";
      case "ONGOING": return "bg-blue-600 text-white";
      case "NEW": return "bg-green-600 text-white";
      case "COMPLETED": return "bg-gray-600 text-white";
      default: return "bg-gray-600 text-white";
    }
  };

  const shareCampaign = () => {
    if (navigator.share) {
      navigator.share({
        title: campaign.title,
        text: campaign.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/campaigns" className="hover:text-primary">Campaigns</Link>
          <span>/</span>
          <span className="text-foreground">{campaign.title}</span>
        </nav>

        {/* Campaign Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Campaign Image and Basic Info */}
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="h-64 w-full object-cover lg:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute left-4 top-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${getTagColor(campaign.tag)}`}>
                    {campaign.tag}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
                  {campaign.title}
                </h1>
                
                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Target className="h-4 w-4" />
                      <span>Goal</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">
                      {formatCurrency(campaign.goal)}
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      <span>Raised</span>
                    </div>
                    <p className="text-lg font-bold text-primary">
                      {formatCurrency(campaign.raised)}
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>Donors</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">
                      {campaign.donors.toLocaleString()}
                    </p>
                  </div>
                </div>

                <Progress 
                  value={getProgressPercentage(campaign.raised, campaign.goal)} 
                  className="mb-4 h-3"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{getProgressPercentage(campaign.raised, campaign.goal).toFixed(1)}% funded</span>
                  <span>{campaign.daysLeft} days remaining</span>
                </div>

                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">{campaign.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">
                      Ends {new Date(campaign.endDate || "").toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-8">
                <div className="flex gap-2 border-b border-border">
                  {[
                    { id: "story", label: "Story" },
                    { id: "updates", label: "Updates" },
                    { id: "impact", label: "Impact" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id as any)}
                      className={`pb-3 px-1 text-sm font-medium transition-colors ${
                        selectedTab === tab.id
                          ? "text-primary border-b-2 border-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="rounded-xl border border-border bg-card p-6">
                {selectedTab === "story" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="mb-4 text-xl font-bold text-foreground">The Story</h3>
                    <div className="prose max-w-none text-muted-foreground">
                      <p className="mb-4 leading-relaxed">
                        {campaign.fullStory || campaign.description}
                      </p>
                    </div>
                  </motion.div>
                )}

                {selectedTab === "updates" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="mb-4 text-xl font-bold text-foreground">Campaign Updates</h3>
                    {campaign.updates && campaign.updates.length > 0 ? (
                      <div className="space-y-4">
                        {campaign.updates.map((update, index) => (
                          <div key={update.id} className="border-b border-border pb-4 last:border-b-0">
                            <div className="mb-2 flex items-center justify-between">
                              <h4 className="font-semibold text-foreground">{update.title}</h4>
                              <span className="text-sm text-muted-foreground">
                                {new Date(update.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-muted-foreground">{update.content}</p>
                            {update.images && update.images.length > 0 && (
                              <div className="mt-3 grid gap-2 md:grid-cols-2">
                                {update.images.map((image, imgIndex) => (
                                  <img
                                    key={imgIndex}
                                    src={image}
                                    alt=""
                                    className="rounded-lg w-full object-cover"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No updates available yet.</p>
                    )}
                  </motion.div>
                )}

                {selectedTab === "impact" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="mb-4 text-xl font-bold text-foreground">Impact & Results</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-lg bg-primary/10 p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Shield className="h-6 w-6 text-primary" />
                          <h4 className="font-semibold text-foreground">Lives Impacted</h4>
                        </div>
                        <p className="text-2xl font-bold text-primary">
                          {campaign.impact}
                        </p>
                      </div>
                      <div className="rounded-lg bg-green-100 p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Heart className="h-6 w-6 text-green-600" />
                          <h4 className="font-semibold text-foreground">Communities Reached</h4>
                        </div>
                        <p className="text-2xl font-bold text-green-600">
                          {campaign.donors.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Donate Card */}
              <div className="rounded-2xl border-2 border-primary bg-primary p-6 text-primary-foreground">
                <h3 className="mb-4 text-xl font-bold">Make a Difference</h3>
                <p className="mb-6 text-sm opacity-90">
                  Your donation saves lives and provides hope to communities in need.
                </p>
                
                <div className="space-y-3">
                  <Button asChild className="w-full rounded-full bg-accent px-6 font-bold text-accent-foreground hover:bg-accent/90">
                    <Link to={`/donations?campaign=${campaign.id}`}>
                      Donate Now
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full border-primary-foreground/40 bg-primary-foreground/10 px-6 font-semibold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20"
                    onClick={shareCampaign}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Campaign
                  </Button>
                </div>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Ends in {campaign.daysLeft} days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{campaign.donors.toLocaleString()} donors</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-bold text-foreground">Campaign Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="font-bold text-primary">
                      {getProgressPercentage(campaign.raised, campaign.goal).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Category</span>
                    <span className="font-medium capitalize">{campaign.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <span className={`font-medium capitalize ${campaign.daysLeft > 0 ? 'text-green-600' : 'text-gray-600'}`}>
                      {campaign.daysLeft > 0 ? 'Active' : 'Ended'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Campaigns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-foreground">Related Campaigns</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Show 3 related campaigns (same category or urgent) */}
            {campaigns
              .filter(campaign => campaign.id !== campaign.id && (campaign.category === campaign.category || campaign.tag === "URGENT" || campaign.tag === "CRITICAL"))
              .slice(0, 3)
              .map((relatedCampaign, index) => (
                <motion.div
                  key={relatedCampaign.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <Link to={`/campaigns/${relatedCampaign.id}`} className="block">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={relatedCampaign.image}
                        alt={relatedCampaign.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute left-2 top-2">
                        <span className={`rounded px-2 py-0.5 text-xs font-bold ${getTagColor(relatedCampaign.tag)}`}>
                          {relatedCampaign.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-2 text-sm font-bold text-foreground line-clamp-2">
                        {relatedCampaign.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {relatedCampaign.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CampaignDetail;
