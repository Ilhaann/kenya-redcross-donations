import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Who We Are", href: "#about" },
  { label: "What We Do", href: "#programs" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "News", href: "#news" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="hidden items-center gap-6 md:flex">
            <a href="mailto:info@redcross.or.ke" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="h-3.5 w-3.5" />
              info@redcross.or.ke
            </a>
            <a href="tel:+254703037000" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="h-3.5 w-3.5" />
              +(254) 703-037-000
            </a>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <a
              href="/donations"
              className="rounded-full bg-primary-foreground/20 px-4 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/30"
            >
              Donate Now ❤️
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`sticky top-0 z-50 border-b border-border/50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-card/98 shadow-md" : "bg-card/95"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src="/favicon.png" alt="Kenya Red Cross Logo" className="h-10 w-10 rounded-full object-contain" />
            <div className="leading-tight">
              <span className="text-lg font-bold text-foreground">Kenya</span>
              <span className="block text-xs font-medium text-primary">Red Cross Society</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild className="rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90">
              <a href="/donations">
                Donate
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-foreground lg:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border lg:hidden"
            >
              <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="mt-2 rounded-full bg-primary font-semibold text-primary-foreground">
                  <a href="/donations">
                    Donate Now
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
