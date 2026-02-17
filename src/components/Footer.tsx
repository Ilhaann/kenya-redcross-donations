import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA band */}
      <div className="bg-primary">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-primary-foreground md:text-2xl">Ready to make a difference?</h3>
            <p className="text-sm text-primary-foreground/80">Your donation saves lives across Kenya.</p>
          </div>
          <Link
            to="/donations"
            className="rounded-full bg-accent px-8 py-3 text-base font-bold text-accent-foreground shadow-lg transition-colors hover:bg-accent/90"
          >
            Donate Now ❤️
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/favicon.png" alt="Kenya Red Cross Logo" className="h-10 w-10 rounded-full object-contain" />
              <div className="leading-tight">
                <span className="text-lg font-bold">Kenya</span>
                <span className="block text-xs text-background/70">Red Cross Society</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Saving lives, changing minds. The leading humanitarian organization in Kenya since 1965.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com/KenyaRedCross" },
                { icon: Twitter, href: "https://twitter.com/KenyaRedCross" },
                { icon: Instagram, href: "https://instagram.com/KenyaRedCross" },
                { icon: Youtube, href: "https://youtube.com/KenyaRedCross" },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background/60 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-background/50">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#" className="transition-colors hover:text-background">Home</a></li>
              <li><a href="#programs" className="transition-colors hover:text-background">Our Programs</a></li>
              <li><a href="#campaigns" className="transition-colors hover:text-background">Campaigns</a></li>
              <li><a href="#news" className="transition-colors hover:text-background">News & Updates</a></li>
              <li><a href="#get-involved" className="transition-colors hover:text-background">Get Involved</a></li>
              <li><Link to="/donations" className="transition-colors hover:text-background">Donate</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-background/50">Programs</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>Disaster Management</li>
              <li>Health Services</li>
              <li>Youth Development</li>
              <li>National Development</li>
              <li>Special Programmes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-background/50">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@redcross.or.ke" className="hover:text-background transition-colors">info@redcross.or.ke</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+254703037000" className="hover:text-background transition-colors">+(254) 703-037-000</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                South C, Red Cross Rd, Nairobi, Kenya
              </li>
            </ul>
            <div className="mt-6 rounded-xl bg-background/5 p-4">
              <p className="text-xs font-semibold text-background/40 uppercase tracking-wider">Emergency Line</p>
              <a href="tel:1199" className="mt-1 block text-2xl font-bold text-primary">1199</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/40">
            © 2026 Kenya Red Cross Society. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-background/40">
            Made with <Heart className="h-3 w-3 fill-primary text-primary" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
