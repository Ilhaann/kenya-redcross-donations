import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  
  const newsItems = [
    {
      id: 1,
      title: "Kenya Red Cross Launches Emergency Water Response in Turkana",
      excerpt: "KRCS deploys water trucking services to reach 50,000 people affected by severe drought in Turkana County.",
      content: "The Kenya Red Cross Society has launched an emergency water response operation in Turkana County, targeting over 50,000 people severely affected by the ongoing drought. The operation includes water trucking, rehabilitation of existing water sources, and distribution of water purification tablets...",
      author: "Sarah Kimani",
      date: "2026-02-15",
      category: "Emergency Response",
      image: "/news-emergency.jpg",
      readTime: "3 min",
      featured: true
    },
    {
      id: 2,
      title: "Volunteers Save Lives During Flood Emergency",
      excerpt: "Over 500 KRCS volunteers respond to flooding in Western Kenya, rescuing families and providing emergency supplies.",
      content: "When heavy rains caused severe flooding in Western Kenya, Kenya Red Cross volunteers were among the first responders. Working around the clock, they rescued families trapped by rising waters and provided essential emergency supplies...",
      author: "James Mwangi",
      date: "2026-02-10",
      category: "Volunteer Stories",
      image: "/news-volunteers.jpg",
      readTime: "5 min",
      featured: true
    },
    {
      id: 3,
      title: "Maternal Health Program Reaches Remote Communities",
      excerpt: "Mobile clinics bring essential healthcare to pregnant women and newborns in isolated areas of Samburu County.",
      content: "In a groundbreaking initiative, the Kenya Red Cross has deployed mobile health clinics to serve remote communities in Samburu County. These clinics provide essential maternal and child health services to women who would otherwise have no access to healthcare...",
      author: "Dr. Grace Njoroge",
      date: "2026-02-08",
      category: "Health",
      image: "/news-health.jpg",
      readTime: "4 min",
      featured: false
    },
    {
      id: 4,
      title: "Youth Climate Action Summit Inspires Change",
      excerpt: "Young Kenyans gather to develop innovative solutions to climate challenges affecting their communities.",
      content: "Over 200 young Kenyans participated in the Kenya Red Cross Youth Climate Action Summit, developing innovative solutions to climate challenges. The summit brought together youth from all 47 counties to share ideas and create action plans...",
      author: "Kevin Ochieng",
      date: "2026-02-05",
      category: "Youth",
      image: "/news-youth.jpg",
      readTime: "6 min",
      featured: false
    },
    {
      id: 5,
      title: "Emergency Appeal: Drought Crisis Deepens",
      excerpt: "KRCS issues emergency appeal as drought conditions worsen across 10 counties, affecting over 2 million people.",
      content: "The Kenya Red Cross Society has issued an emergency appeal as drought conditions continue to worsen across 10 counties. More than 2 million people are now facing acute food insecurity, with children and pregnant women most vulnerable...",
      author: "Emergency Response Team",
      date: "2026-02-01",
      category: "Emergency Response",
      image: "/news-drought.jpg",
      readTime: "3 min",
      featured: true
    },
    {
      id: 6,
      title: "Blood Donation Drive Saves Lives",
      excerpt: "Monthly blood donation campaigns help meet critical blood supply needs in hospitals across Kenya.",
      content: "The Kenya Red Cross's monthly blood donation drives continue to play a crucial role in meeting the blood supply needs of hospitals across the country. Last month alone, over 2,000 units of blood were collected...",
      author: "Nancy Wanjiru",
      date: "2026-01-28",
      category: "Health",
      image: "/news-blood.jpg",
      readTime: "4 min",
      featured: false
    }
  ];

  const categories = [
    { id: "all", label: "All News" },
    { id: "Emergency Response", label: "Emergency Response" },
    { id: "Health", label: "Health" },
    { id: "Volunteer Stories", label: "Volunteer Stories" },
    { id: "Youth", label: "Youth" }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeFilter === "all" || item.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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
            News & Updates
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Stay informed about our latest activities, emergency responses, and impact stories 
            from communities across Kenya.
          </p>
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
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category.id)}
                  className="rounded-full"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Stories */}
        {featuredNews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold text-foreground">Featured Stories</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredNews.map((story, index) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(story.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {story.readTime}
                      </span>
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-foreground line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        {story.author}
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="mb-6 text-2xl font-bold text-foreground">Latest Updates</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regularNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="group flex gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(article.date)}
                    </span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-foreground line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mb-3 text-xs text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="h-auto p-0 text-primary hover:text-primary/80">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <Search className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              No news articles found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse different categories.
            </p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground"
        >
          <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
          <p className="mb-6 text-lg">
            Subscribe to our newsletter for the latest news and emergency alerts.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-sm"
            />
            <Button size="lg" className="rounded-full bg-accent px-8 font-bold text-accent-foreground hover:bg-accent/90">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
