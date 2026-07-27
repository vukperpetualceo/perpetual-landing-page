import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features", internal: false },
    { label: "Pricing", href: "/#pricing", internal: false },
  ],
  Company: [
    { label: "About", href: "/#", internal: false },
    { label: "Contact", href: "/contact", internal: true },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy", internal: true },
    { label: "Terms", href: "/terms", internal: true },
  ],
};

export const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img src={logo} alt="Perpetual" className="h-8 w-auto rounded-sm invert" />
            </div>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Permit intelligence for the teams that sell equipment into commercial construction.
              We read building permits the day they&apos;re filed, so equipment providers call first.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.internal ? (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2026 Perpetual. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
