import { motion } from "framer-motion";
import { Heart, ArrowRight, Clock, Target, Package, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import waterImg from "@/assets/campaign-water.jpg";
import nutritionImg from "@/assets/campaign-nutrition.jpg";
import foodImg from "@/assets/campaign-food.jpg";

const campaigns = [
  {
    image: waterImg,
    tag: "URGENT",
    title: "Clean Water for Drought-Hit Communities",
    description: "Provide clean drinking water to 300,000 households in arid counties through water trucking and source rehabilitation.",
    raised: 12500000,
    goal: 45000000,
    donors: 2340,
    daysLeft: 28,
  },
  {
    image: nutritionImg,
    tag: "ONGOING",
    title: "Child Nutrition & Maternal Health",
    description: "Support nutrition services for 784,000 children and 134,000 pregnant & breastfeeding women facing malnutrition.",
    raised: 8200000,
    goal: 30000000,
    donors: 1856,
    daysLeft: 45,
  },
  {
    image: foodImg,
    tag: "CRITICAL",
    title: "Emergency Food Assistance",
    description: "Deliver food packages to families facing acute food insecurity across 10 drought-affected counties.",
    raised: 22000000,
    goal: 50000000,
    donors: 4120,
    daysLeft: 14,
  },
];

const formatKES = (n: number) => {
  if (n >= 1000000) return `KES ${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `KES ${(n / 1000).toFixed(0)}K`;
  return `KES ${n}`;
};

const DonationCampaigns = () => {
  return (
    <section id="campaigns" className="py-24" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Support Our Work</span>
          <h2 className="mt-3 text-3xl text-foreground md:text-5xl">
            Active <span className="italic text-primary">Campaigns</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Choose a cause that matters to you. Every contribution directly impacts lives on the ground.
          </p>
        </motion.div>

        {/* Donation Type Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Button
            asChild
            className="flex h-auto flex-col items-center gap-3 rounded-2xl p-6 bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all"
            variant="ghost"
          >
            <a href="/donations">
              <Package className="h-8 w-8 text-primary" />
              <div className="text-center">
                <h3 className="font-semibold text-primary">Donation Packages</h3>
                <p className="text-sm text-muted-foreground mt-1">Recurring donations for sustained impact</p>
              </div>
            </a>
          </Button>

          <Button
            asChild
            className="flex h-auto flex-col items-center gap-3 rounded-2xl p-6 bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all"
            variant="ghost"
          >
            <a href="/donations">
              <Users className="h-8 w-8 text-primary" />
              <div className="text-center">
                <h3 className="font-semibold text-primary">Community Campaigns</h3>
                <p className="text-sm text-muted-foreground mt-1">Support causes led by communities</p>
              </div>
            </a>
          </Button>

          <Button
            asChild
            className="flex h-auto flex-col items-center gap-3 rounded-2xl p-6 bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all"
            variant="ghost"
          >
            <a href="/donations">
              <MapPin className="h-8 w-8 text-primary" />
              <div className="text-center">
                <h3 className="font-semibold text-primary">Drop-off Donations</h3>
                <p className="text-sm text-muted-foreground mt-1">Schedule item drop-off at our branches</p>
              </div>
            </a>
          </Button>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign, i) => (
            <motion.div
              key={campaign.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-xl"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground ${
                    campaign.tag === "URGENT" ? "bg-destructive" : campaign.tag === "CRITICAL" ? "bg-primary" : "bg-accent"
                  }`}
                >
                  {campaign.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-sans text-lg font-bold text-foreground">{campaign.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{campaign.description}</p>

                {/* Progress */}
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-bold text-primary">{formatKES(campaign.raised)}</span>
                    <span className="text-muted-foreground">of {formatKES(campaign.goal)}</span>
                  </div>
                  <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2.5" />
                </div>

                {/* Meta */}
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5 text-primary" />
                    {campaign.donors.toLocaleString()} donors
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {campaign.daysLeft} days left
                  </span>
                </div>

                <Button
                  asChild
                  className="mt-5 w-full rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <a href="/donations" target="_blank" rel="noopener noreferrer">
                    Donate Now <Heart className="ml-2 h-4 w-4 fill-current" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="/donations">
              View All Campaigns <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationCampaigns;
