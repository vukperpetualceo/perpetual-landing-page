import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Perpetual";
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
            <span>Privacy Policy</span>
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: July 25, 2026</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <p>
              Perpetual US, Inc. (&quot;Perpetual,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
              perpetual-us.com and provides a building-permit intelligence platform for companies that
              sell equipment into commercial construction (the &quot;Service&quot;). This Privacy Policy
              explains how we collect, use, and protect information when you use our Service.
            </p>
            <p>
              By using the Service, you agree to the collection and use of information in accordance
              with this policy.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
              <p>
                <span className="font-medium text-foreground">Information you provide to us.</span>{" "}
                When you sign up for an account, request a demo, start a trial, or contact us, we may
                collect your name, email address, phone number, company name, job title, and billing
                information.
              </p>
              <p>
                <span className="font-medium text-foreground">Information collected automatically.</span>{" "}
                When you use the Service, we may automatically collect certain information, including
                your IP address, browser type, device information, pages viewed, and how you interact
                with the Service. We use cookies and similar technologies to enable and improve the
                Service.
              </p>
              <p>
                <span className="font-medium text-foreground">Payment information.</span> Payments are
                processed by our third-party payment provider, Stripe. We do not store your full payment
                card details on our servers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Building Permit Data</h2>
              <p>
                The core of our Service is information derived from public building-permit records
                published by government authorities, including Miami-Dade County. This data concerns
                commercial construction projects and the licensed contractors associated with them. It
                is compiled from publicly available government sources and made available to our
                customers through the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, operate, and maintain the Service</li>
                <li>Create and manage your account</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your requests, questions, and support inquiries</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>
                  Send marketing communications, where permitted (you may opt out at any time)
                </li>
                <li>Monitor and analyze usage to improve the Service</li>
                <li>Detect, prevent, and address technical issues, fraud, or misuse</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. How We Share Your Information</h2>
              <p>
                We do not sell your personal information. We may share information in the following
                limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Service providers.</span> With
                  third-party vendors who perform services on our behalf, such as payment processing
                  (Stripe), hosting, and analytics, subject to appropriate confidentiality obligations.
                </li>
                <li>
                  <span className="font-medium text-foreground">Legal requirements.</span> If required
                  to do so by law or in response to valid requests by public authorities.
                </li>
                <li>
                  <span className="font-medium text-foreground">Business transfers.</span> In connection
                  with a merger, acquisition, or sale of assets, in which case information may be
                  transferred as part of that transaction.
                </li>
                <li>
                  <span className="font-medium text-foreground">With your consent.</span> In any other
                  case, with your permission.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Data Retention</h2>
              <p>
                We retain your information for as long as your account is active or as needed to provide
                the Service, comply with our legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Data Security</h2>
              <p>
                We take reasonable measures to protect your information from unauthorized access, loss,
                misuse, or alteration. However, no method of transmission or storage is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have rights regarding your personal information,
                including the right to access, correct, or delete it, and to opt out of marketing
                communications. To exercise these rights, contact us at the email below.
              </p>
              <p>
                You can cancel your subscription and request deletion of your account information at any
                time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to operate and improve the Service. You
                can control cookies through your browser settings, though disabling them may affect
                functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Children&apos;s Privacy</h2>
              <p>
                The Service is intended for business use and is not directed to individuals under 18. We
                do not knowingly collect information from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated version on
                this page and revise the &quot;Last updated&quot; date above. Your continued use of the
                Service after changes take effect constitutes acceptance of the revised policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, contact us at:</p>
              <div className="rounded-lg border border-border bg-card p-5 text-sm space-y-1">
                <p className="font-medium text-foreground">Perpetual US, Inc.</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:vukota@perpetual-us.com"
                    className="text-primary hover:underline"
                  >
                    vukota@perpetual-us.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:3152120597" className="text-primary hover:underline">
                    315-212-0597
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
