import { motion } from "framer-motion";
import { Heart, ArrowRight, Users, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-drought-response.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kenya Red Cross volunteers distributing water to drought-affected communities"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex min-h-[92vh] items-center px-4">
        <div className="max-w-2xl py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              <Heart className="h-4 w-4 fill-current" />
              Happening Now — Drought Emergency Response 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-5xl leading-tight text-primary-foreground md:text-7xl"
          >
            Together, We{" "}
            <span className="italic text-accent">Save Lives</span>{" "}
            Across Kenya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/85 md:text-xl"
          >
            Over 2 million Kenyans face acute food insecurity. 784,000 children are malnourished. Your support powers our volunteers on the ground — delivering water, food, and hope.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 text-base font-bold text-accent-foreground shadow-lg hover:bg-accent/90"
            >
              <Link to="/donations">
                Donate Now <Heart className="ml-2 h-4 w-4 fill-current" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/40 bg-primary-foreground/10 px-8 text-base font-semibold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 hover:text-primary-foreground"
            >
              <a href="#drought">
                See Our Response <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Quick impact stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-14 flex gap-8 border-t border-primary-foreground/20 pt-6"
          >
            {[
              { value: "2M+", label: "People affected" },
              { value: "10", label: "Counties in crisis" },
              { value: "108K+", label: "People reached" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary-foreground md:text-3xl">{stat.value}</p>
                <p className="text-xs text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 60 1440 40V80H0V40Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
