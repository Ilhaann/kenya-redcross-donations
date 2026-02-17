import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import emergencyImg from "@/assets/news-emergency.jpg";
import volunteersImg from "@/assets/news-volunteers.jpg";
import droughtImg from "@/assets/drought-response-1.jpg";

const articles = [
  {
    image: emergencyImg,
    category: "Emergency",
    date: "Feb 14, 2026",
    title: "KRCS Scales Up Drought Response Across 10 Counties",
    excerpt: "Kenya Red Cross has reached over 108,790 people with food assistance and 63,024 with clean water as the drought crisis deepens.",
    featured: true,
  },
  {
    image: volunteersImg,
    category: "Volunteers",
    date: "Feb 10, 2026",
    title: "Youth Volunteers Lead Community Resilience Programs",
    excerpt: "Over 5,000 young volunteers deployed across ASAL counties to support drought-affected communities.",
    featured: false,
  },
  {
    image: droughtImg,
    category: "Health",
    date: "Feb 7, 2026",
    title: "Nutrition Screening Reaches 15,645 Children Under 5",
    excerpt: "Mobile health teams intensify nutrition screening and treatment for severely malnourished children in Turkana and Marsabit.",
    featured: false,
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Stay Informed</span>
            <h2 className="mt-3 text-3xl text-foreground md:text-5xl">
              Latest <span className="italic text-primary">News</span> & Updates
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <a href="https://redcross.or.ke/news/" target="_blank" rel="noopener noreferrer">
              All Stories <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured article */}
          <motion.a
            href="https://redcross.or.ke/news/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="h-full min-h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                {articles[0].category}
              </span>
              <h3 className="text-2xl font-bold text-primary-foreground md:text-3xl">{articles[0].title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">{articles[0].excerpt}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-primary-foreground/60">
                <Calendar className="h-3.5 w-3.5" />
                {articles[0].date}
              </div>
            </div>
          </motion.a>

          {/* Other articles */}
          <div className="flex flex-col gap-6">
            {articles.slice(1).map((article, i) => (
              <motion.a
                key={article.title}
                href="https://redcross.or.ke/news/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex gap-5 overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all hover:shadow-md"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="h-32 w-40 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-sans text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
