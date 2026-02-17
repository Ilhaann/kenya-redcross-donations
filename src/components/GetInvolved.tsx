import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import getInvolvedImage from "@/assets/get-involved.jpg";

const GetInvolved = () => {
  return (
    <section id="get-involved" className="py-24" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Join Us Today</span>
            <h2 className="mt-3 text-3xl text-foreground md:text-5xl">
              Become a{" "}
              <span className="italic text-primary">Member</span> or{" "}
              <span className="italic text-accent">Volunteer</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Help us support families and communities affected by disasters and crises. Your time, skills, and resources make a life-saving difference.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6" style={{ boxShadow: "var(--card-shadow)" }}>
                <h3 className="font-sans text-lg font-bold text-foreground">Volunteer</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Offer your time, skills or resources to support our humanitarian work in your community.
                </p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 font-semibold text-primary">
                  <a href="https://redcross.or.ke/volunteer/" target="_blank" rel="noopener noreferrer">
                    Join as Volunteer <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6" style={{ boxShadow: "var(--card-shadow)" }}>
                <h3 className="font-sans text-lg font-bold text-foreground">Member</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Become a recognized member with distinct functions and privileges within KRCS.
                </p>
                <Button asChild variant="link" className="mt-3 h-auto p-0 font-semibold text-primary">
                  <a href="https://redcross.or.ke/membership/" target="_blank" rel="noopener noreferrer">
                    Join as Member <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={getInvolvedImage}
              alt="Young Kenya Red Cross volunteers smiling"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
