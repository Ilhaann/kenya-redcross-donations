import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, HandHeart, Building, Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const [selectedOpportunity, setSelectedOpportunity] = useState("");

  const opportunities = [
    {
      id: "volunteer",
      icon: Users,
      title: "Volunteer With Us",
      description: "Join our network of 100,000+ volunteers making a difference across Kenya.",
      benefits: [
        "Make a real impact in your community",
        "Develop new skills and gain experience",
        "Join a global humanitarian movement",
        "Network with like-minded individuals"
      ],
      requirements: "Must be 18+ years, commit minimum 4 hours monthly",
      action: "Become a Volunteer"
    },
    {
      id: "partner",
      icon: Building,
      title: "Corporate Partnership",
      description: "Partner with us to create lasting change and demonstrate corporate social responsibility.",
      benefits: [
        "Enhance your brand reputation",
        "Engage employees in meaningful work",
        "Meet ESG and sustainability goals",
        "Create measurable social impact"
      ],
      requirements: "Annual commitment of KES 500,000+ or equivalent in-kind support",
      action: "Partner With Us"
    },
    {
      id: "fundraise",
      icon: HandHeart,
      title: "Start Fundraising",
      description: "Launch your own fundraising campaign and mobilize your network for good.",
      benefits: [
        "Create personalized impact campaigns",
        "Engage your community and network",
        "Develop leadership and organizing skills",
        "Amplify your impact through others"
      ],
      requirements: "Passionate about making a difference, any age welcome",
      action: "Start Campaign"
    },
    {
      id: "monthly",
      icon: Heart,
      title: "Monthly Giving",
      description: "Provide consistent support through automatic monthly donations.",
      benefits: [
        "Create predictable, sustainable impact",
        "Help us plan long-term programs",
        "Join our dedicated community of givers",
        "Tax-deductible contributions"
      ],
      requirements: "Minimum KES 500/month commitment",
      action: "Give Monthly"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Get Involved
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            There are many ways to join our humanitarian mission. Whether you want to volunteer, 
            partner with us, fundraise, or donate, your contribution saves lives.
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`rounded-2xl border-2 p-8 transition-all duration-300 ${
                  selectedOpportunity === opportunity.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border bg-card hover:border-primary/50'
                }`}
                onClick={() => setSelectedOpportunity(opportunity.id)}
              >
                <opportunity.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-xl font-bold text-foreground">{opportunity.title}</h3>
                <p className="mb-6 text-muted-foreground">{opportunity.description}</p>
                
                <div className="mb-6 space-y-3">
                  <h4 className="font-semibold text-foreground">Benefits:</h4>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 rounded-lg bg-muted p-4">
                  <p className="text-sm font-medium text-foreground">
                    <strong>Requirements:</strong> {opportunity.requirements}
                  </p>
                </div>

                <Button 
                  className="w-full rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    if (opportunity.id === 'monthly' || opportunity.id === 'fundraise') {
                      // Navigate to donations with specific parameters
                      window.location.href = '/donations';
                    } else {
                      // Scroll to contact form
                      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {opportunity.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="mb-8 text-center text-muted-foreground">
            Have questions or want to learn more? Fill out the form below and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+254 700 000 000"
                />
              </div>
              <div>
                <label htmlFor="interest" className="mb-2 block text-sm font-medium text-foreground">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Select an option</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="partnership">Corporate Partnership</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="monthly">Monthly Giving</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us how you'd like to get involved..."
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full rounded-full bg-primary px-8 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Send Message
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground"
        >
          <h2 className="mb-6 text-center text-2xl font-bold">Quick Contact</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <Phone className="mx-auto mb-3 h-8 w-8" />
              <h3 className="mb-2 font-semibold">Call Us</h3>
              <p className="text-sm">+(254) 703-037-000</p>
              <p className="text-sm opacity-80">24/7 Emergency Line</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto mb-3 h-8 w-8" />
              <h3 className="mb-2 font-semibold">Email Us</h3>
              <p className="text-sm">info@redcross.or.ke</p>
              <p className="text-sm opacity-80">General Inquiries</p>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto mb-3 h-8 w-8" />
              <h3 className="mb-2 font-semibold">Visit Us</h3>
              <p className="text-sm">Headquarters, Nairobi</p>
              <p className="text-sm opacity-80">Mon-Fri, 8AM-5PM</p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolved;
