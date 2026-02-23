import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building, Clock, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      name: "Headquarters",
      address: "Kenya Red Cross Society, Westlands, Nairobi",
      phone: "+254 703 037 000",
      email: "info@redcross.or.ke",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      coordinates: "-1.2655° S, 36.8030° E"
    },
    {
      name: "Emergency Operations Center",
      address: "24/7 Emergency Response Center, Nairobi",
      phone: "+254 719 771 000",
      email: "emergency@redcross.or.ke", 
      hours: "24/7 Emergency Hotline",
      coordinates: "-1.2921° S, 36.8219° E"
    },
    {
      name: "Regional Office - Mombasa",
      address: "Coast Region Office, Mombasa",
      phone: "+254 722 123 456",
      email: "coast@redcross.or.ke",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      coordinates: "-4.0435° S, 39.6682° E"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "emergency", label: "Emergency Report" },
    { value: "volunteer", label: "Volunteer Information" },
    { value: "partnership", label: "Partnership Proposal" },
    { value: "donation", label: "Donation Question" },
    { value: "media", label: "Media Inquiry" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    // Handle form submission
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general"
    });
    setIsSubmitted(false);
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
            Contact Us
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Get in touch with the Kenya Red Cross Society. Whether you need emergency assistance, 
            want to volunteer, or have questions about our programs, we're here to help.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {!isSubmitted ? (
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Send us a Message</h2>
                
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
                        placeholder="Your full name"
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
                        placeholder="your.email@example.com"
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
                      <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium text-foreground">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide detailed information about your inquiry..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full rounded-full bg-primary px-8 font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Message Sent!</h2>
                <p className="mb-6 text-muted-foreground">
                  Thank you for contacting the Kenya Red Cross Society. We'll get back to you within 24-48 hours.
                </p>
                <Button 
                  onClick={resetForm}
                  variant="outline" 
                  className="rounded-full"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </motion.div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <h2 className="mb-4 text-xl font-bold">Emergency Hotline</h2>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                <div>
                  <p className="text-2xl font-bold">+254 719 771 000</p>
                  <p className="text-sm opacity-90">Available 24/7 for emergencies</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 text-xl font-bold text-foreground">Our Offices</h2>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={office.name} className="border-b border-border pb-4 last:border-b-0">
                    <h3 className="mb-2 font-semibold text-foreground">{office.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 text-xl font-bold text-foreground">Other Ways to Reach Us</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Postal Address</p>
                    <p className="text-sm text-muted-foreground">
                      P.O. Box 40734-00100, Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Social Media</p>
                    <p className="text-sm text-muted-foreground">
                      @KenyaRedCross on all major platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="rounded-2xl overflow-hidden border border-border">
            <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Find your nearest Kenya Red Cross office or service point
                </p>
                <Button variant="outline" className="mt-4">
                  View Full Map
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
