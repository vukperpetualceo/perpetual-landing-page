import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Building2, Check, CreditCard, Mail, User } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

/** Swap when your Stripe Payment Link or Checkout URL is ready. */
export const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/your-checkout-link";

/** Swap when your Cal.com embed is ready. */
export const CAL_COM_URL = "https://cal.com/your-team/20min";

const WHAT_YOU_SELL_OPTIONS = [
  "Manufacturer",
  "Distributor",
  "Rep agency",
  "Other",
] as const;

const SUBSCRIPTION_INCLUDES = [
  "Full Miami-Dade permit feed, updated daily",
  "Equipment specs mapped to each job",
  "Contractor name, license, and phone",
  "Alerts when a spec reopens",
  "Founding rate locked for life",
];

type DemoFormData = {
  name: string;
  email: string;
  company: string;
  whatYouSell: string;
};

const DemoForm = ({
  formData,
  isSubmitting,
  onChange,
  onWhatYouSellChange,
  onSubmit,
  onBack,
}: {
  formData: DemoFormData;
  isSubmitting: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWhatYouSellChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}) => (
  <>
    <div className="text-center mb-6">
      <h3 className="text-xl font-semibold text-foreground">Book a 20 minute demo</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        You&apos;ll see this week&apos;s Miami projects live on the call.
      </p>
    </div>

    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">
          Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            id="name"
            name="name"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={onChange}
            required
            className="pl-10 bg-background/50 border-border/50 focus:border-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          Work email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={onChange}
            required
            className="pl-10 bg-background/50 border-border/50 focus:border-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-foreground">
          Company
        </Label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            id="company"
            name="company"
            placeholder="Acme Equipment Co."
            value={formData.company}
            onChange={onChange}
            required
            className="pl-10 bg-background/50 border-border/50 focus:border-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatYouSell" className="text-foreground">
          What do you sell
        </Label>
        <Select value={formData.whatYouSell} onValueChange={onWhatYouSellChange} required>
          <SelectTrigger id="whatYouSell" className="bg-background/50 border-border/50">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            {WHAT_YOU_SELL_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full mt-2"
        disabled={isSubmitting || !formData.whatYouSell}
      >
        {isSubmitting ? "Submitting..." : "Book my demo"}
      </Button>
    </form>

    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="w-full mt-4 text-muted-foreground"
      onClick={onBack}
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to subscribe
    </Button>
  </>
);

export const Pricing = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    email: "",
    company: "",
    whatYouSell: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Demo request received",
      description: "We'll reach out shortly to schedule your Miami beta walkthrough.",
    });

    setFormData({ name: "", email: "", company: "", whatYouSell: "" });
    setIsSubmitting(false);
    setShowDemoForm(false);
  };

  return (
    <section id="pricing" className="py-24 relative bg-background border-y border-border/70">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Miami Beta
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Live in Miami.{" "}
            <span className="text-gradient">Founding pricing.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We launched in Miami Dade County first because it publishes the richest plan level data
            in Florida. Founding customers get the full feed while we expand across the state, and
            their price never moves.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <Card className="glass-card border-border shadow-card">
            <CardContent className="pt-8 pb-8">
              <AnimatePresence mode="wait">
                {showDemoForm ? (
                  <motion.div
                    key="demo-form"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <DemoForm
                      formData={formData}
                      isSubmitting={isSubmitting}
                      onChange={handleChange}
                      onWhatYouSellChange={(value) =>
                        setFormData((prev) => ({ ...prev, whatYouSell: value }))
                      }
                      onSubmit={handleSubmit}
                      onBack={() => setShowDemoForm(false)}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="subscribe"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <p className="text-sm font-medium uppercase tracking-wider text-primary">
                        Miami Beta Founding
                      </p>
                      <div className="mt-3 flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-bold text-foreground">$399</span>
                        <span className="text-muted-foreground">/ month</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Billed monthly. Cancel anytime.
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {SUBSCRIPTION_INCLUDES.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <a
                        href={STRIPE_CHECKOUT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Start subscription
                      </a>
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">or</span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="heroOutline"
                      size="lg"
                      className="w-full"
                      onClick={() => setShowDemoForm(true)}
                    >
                      Book a 20 minute demo
                    </Button>
                    <p className="text-center text-sm text-muted-foreground -mt-2">
                      You&apos;ll see this week&apos;s Miami projects live on the call.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
