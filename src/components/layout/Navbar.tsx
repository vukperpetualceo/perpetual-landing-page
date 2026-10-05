import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { LINKS } from "@/lib/links";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Comparison", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Team", href: "/team", internal: true },
];

const NavActions = ({ size }: { size: "sm" }) => (
  <>
    <Button variant="ghost" size={size} asChild>
      <a href={LINKS.trial} target="_blank" rel="noopener noreferrer">
        Start free trial
      </a>
    </Button>
    <Button variant="hero" size={size} asChild>
      <a href={LINKS.purchase} target="_blank" rel="noopener noreferrer">
        Purchase
      </a>
    </Button>
  </>
);

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Perpetual" className="h-8 w-auto rounded-sm invert" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.internal ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <NavActions size="sm" />
          </div>

          <button
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.internal ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ),
              )}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <NavActions size="sm" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
