import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Mail, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Perpetual";
    return () => {
      document.title = "Perpetual | Buying Intelligence for Equipment Providers";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <article className="container mx-auto px-6 max-w-3xl">
          <p className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Contact</h1>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Questions about Perpetual, Miami Beta, or your account? Reach us directly.
          </p>

          <div className="rounded-lg border border-border bg-card p-6 md:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 rounded-md border border-border bg-background p-2">
                <Mail className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:vukota@perpetual-us.com"
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  vukota@perpetual-us.com
                </a>
              </div>
            </div>

            <div className="border-t border-border" />

            <div className="flex items-start gap-4">
              <div className="mt-0.5 rounded-md border border-border bg-background p-2">
                <Phone className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                <a
                  href="tel:3152120597"
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  315-212-0597
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
