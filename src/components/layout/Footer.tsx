import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { LINKS } from "@/lib/links";

type FooterLink = { label: string; href: string; internal?: boolean; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Purchase", href: LINKS.purchase, external: true },
    { label: "Start free trial", href: LINKS.trial, external: true },
  ],
  Company: [
    { label: "Team", href: "/team", internal: true },
    { label: "Contact", href: "/contact", internal: true },
    { label: "Book a meeting", href: LINKS.booking, external: true },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy", internal: true },
    { label: "Terms", href: "/terms", internal: true },
  ],
};

const linkClass = "text-muted-foreground hover:text-foreground transition-colors text-sm";

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
              Every commercial building permit filed in Virginia, the day it&apos;s filed, so the
              people who sell into those jobs can call first.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.internal ? (
                      <Link to={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    ) : link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a href={link.href} className={linkClass}>
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
          <p className="text-sm text-muted-foreground">© 2026 Perpetual. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
