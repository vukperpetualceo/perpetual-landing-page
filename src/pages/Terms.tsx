import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service | Perpetual";
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
            <span>Terms of Service</span>
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Terms of Service</h1>
          <p className="text-muted-foreground mb-10">Last updated: July 25, 2026</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website
              perpetual-us.com and the building-permit intelligence platform (the &quot;Service&quot;)
              provided by Perpetual US, Inc. (&quot;Perpetual,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
              accessing or using the Service, you agree to be bound by these Terms. If you do not
              agree, do not use the Service.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. The Service</h2>
              <p>
                Perpetual provides a subscription-based platform that compiles information derived from
                public building-permit records and makes it available to companies that sell equipment
                into commercial construction. The scope, coverage, and features of the Service may
                change over time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Eligibility and Accounts</h2>
              <p>
                You must be at least 18 years old and able to form a binding contract to use the
                Service. You are responsible for the accuracy of the information you provide, for
                maintaining the confidentiality of your account credentials, and for all activity that
                occurs under your account. Notify us promptly of any unauthorized use.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                3. Subscriptions, Trials, and Payment
              </h2>
              <p>
                <span className="font-medium text-foreground">Subscriptions.</span> The Service is
                offered on a monthly subscription basis. Fees are billed in advance and are stated at
                the time of purchase.
              </p>
              <p>
                <span className="font-medium text-foreground">Free trial.</span> We may offer a free
                trial. If you do not cancel before the trial ends, your subscription will begin and the
                applicable fee will be charged to your payment method. You may cancel at any time.
              </p>
              <p>
                <span className="font-medium text-foreground">Billing.</span> Payments are processed by
                our third-party provider, Stripe. By subscribing, you authorize us to charge your
                payment method on a recurring monthly basis until you cancel.
              </p>
              <p>
                <span className="font-medium text-foreground">Cancellation.</span> You may cancel your
                subscription at any time, effective at the end of the current billing period. Fees
                already paid are non-refundable except where required by law.
              </p>
              <p>
                <span className="font-medium text-foreground">Price changes.</span> We may change our
                fees. For existing subscribers, we will provide notice before a price change takes
                effect, and any change will apply to subsequent billing periods.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
                <li>
                  Resell, redistribute, sublicense, or make the Service or its data available to third
                  parties who are not authorized users under your account, except as expressly
                  permitted
                </li>
                <li>
                  Scrape, copy, or extract data from the Service by automated means except through
                  features we provide
                </li>
                <li>
                  Attempt to gain unauthorized access to the Service, other accounts, or our systems
                </li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Use the Service to harass, defraud, or harm others</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Data and Accuracy</h2>
              <p>
                The Service compiles information from publicly available government building-permit
                records. While we work to keep this information accurate and current, we do not
                guarantee that it is complete, error-free, or up to date. The Service is a tool to
                support your own business decisions; you are responsible for how you use the
                information, including any outreach you conduct, and for complying with all applicable
                laws governing your communications and business practices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Intellectual Property</h2>
              <p>
                The Service, including its software, design, and compiled data presentation, is owned by
                Perpetual and protected by intellectual property laws. We grant you a limited,
                non-exclusive, non-transferable, revocable license to access and use the Service for
                your internal business purposes during your subscription. You retain ownership of any
                content you submit to the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Third-Party Services</h2>
              <p>
                The Service may rely on or link to third-party services (such as Stripe for payments).
                We are not responsible for the content, policies, or practices of third-party services,
                and your use of them is governed by their own terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Disclaimers</h2>
              <p className="uppercase text-sm tracking-wide">
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any
                kind, whether express or implied, including but not limited to warranties of
                merchantability, fitness for a particular purpose, accuracy, and non-infringement. We do
                not warrant that the Service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Limitation of Liability</h2>
              <p className="uppercase text-sm tracking-wide">
                To the maximum extent permitted by law, Perpetual and its officers, directors, and
                employees will not be liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenue, arising out of or related to your
                use of the Service. Our total liability for any claim arising out of these Terms or the
                Service will not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Perpetual from any claims, damages, or expenses
                arising out of your use of the Service, your violation of these Terms, or your violation
                of any law or the rights of a third party.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Termination</h2>
              <p>
                We may suspend or terminate your access to the Service at any time if you violate these
                Terms or for any other reason at our discretion. Upon termination, your right to use the
                Service ceases immediately. Sections that by their nature should survive termination will
                survive.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We will post the updated version on this
                page and revise the &quot;Last updated&quot; date. Your continued use of the Service after
                changes take effect constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">13. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware, without regard to its
                conflict-of-laws principles. Any disputes will be subject to the exclusive jurisdiction
                of the courts located in Delaware, unless otherwise required by applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">14. Contact Us</h2>
              <p>If you have questions about these Terms, contact us at:</p>
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

export default Terms;
