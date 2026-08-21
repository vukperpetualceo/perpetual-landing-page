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

/** Swap when your Cal.com embed is ready. */
export const CAL_COM_URL = "https://cal.com/your-team/20min";

const WHAT_YOU_SELL_OPTIONS = [
  "Manufacturer",
  "Distributor",
  "Rep agency",
  "Other",
] as const;

type BillingPeriod = "monthly" | "annual";
type StateCode = "FL" | "TX" | "VA" | "NC";

type StatePlan = {
  code: StateCode;
  name: string;
  monthly: number;
  annual: number;
  checkoutMonthly: string;
  checkoutAnnual: string;
  coverage: string;
};

/** Edit monthly/annual amounts and Stripe links per state here. */
export const STATE_PLANS: StatePlan[] = [
  {
    code: "FL",
    name: "Florida",
    monthly: 399,
    annual: 299,
    checkoutMonthly: "https://buy.stripe.com/your-fl-monthly",
    checkoutAnnual: "https://buy.stripe.com/your-fl-annual",
    coverage: "Full Florida permit feed, updated daily",
  },
  {
    code: "TX",
    name: "Texas",
    monthly: 399,
    annual: 299,
    checkoutMonthly: "https://buy.stripe.com/your-tx-monthly",
    checkoutAnnual: "https://buy.stripe.com/your-tx-annual",
    coverage: "Full Texas permit feed, updated daily",
  },
  {
    code: "VA",
    name: "Virginia",
    monthly: 399,
    annual: 299,
    checkoutMonthly: "https://buy.stripe.com/your-va-monthly",
    checkoutAnnual: "https://buy.stripe.com/your-va-annual",
    coverage: "Full Virginia permit feed, updated daily",
  },
  {
    code: "NC",
    name: "North Carolina",
    monthly: 399,
    annual: 299,
    checkoutMonthly: "https://buy.stripe.com/your-nc-monthly",
    checkoutAnnual: "https://buy.stripe.com/your-nc-annual",
    coverage: "Full North Carolina permit feed, updated daily",
  },
];

const SHARED_INCLUDES = [
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
  stateName,
  onChange,
  onWhatYouSellChange,
  onSubmit,
  onBack,
}: {
  formData: DemoFormData;
  isSubmitting: boolean;
  stateName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWhatYouSellChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}) => (
  <>
    <div className="text-center mb-6">
      <h3 className="text-xl font-semibold text-foreground">Book a 20 minute demo</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        You&apos;ll see this week&apos;s {stateName} projects live on the call.
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
  const [selectedState, setSelectedState] = useState<StateCode>("FL");
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    email: "",
    company: "",
    whatYouSell: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const plan = STATE_PLANS.find((s) => s.code === selectedState) ?? STATE_PLANS[0];
  const amount = billingPeriod === "monthly" ? plan.monthly : plan.annual;
  const checkoutUrl =
    billingPeriod === "monthly" ? plan.checkoutMonthly : plan.checkoutAnnual;
  const billingNote =
    billingPeriod === "monthly"
      ? "Billed monthly. Cancel anytime."
      : "Billed annually. Cancel anytime.";
  const includes = [plan.coverage, ...SHARED_INCLUDES];

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
      description: `We'll reach out shortly to walk through the ${plan.name} feed.`,
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
            Live in 4 states
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            FL, TX, VA, NC.
            <br />
            <span className="text-gradient">Founding pricing.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Perpetual is live across Florida, Texas, Virginia, and North Carolina. Choose your state
            on the plan — founding customers get the full feed for that market, and their price never
            moves.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          {!showDemoForm && (
            <div className="flex justify-center mb-6">
              <div
                role="tablist"
                aria-label="Billing period"
                className="inline-flex items-center rounded-lg border border-border bg-muted/60 p-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={billingPeriod === "annual"}
                  onClick={() => setBillingPeriod("annual")}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    billingPeriod === "annual"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Annual
                  <span className="ml-1.5 text-xs font-medium text-primary">Save 25%</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={billingPeriod === "monthly"}
                  onClick={() => setBillingPeriod("monthly")}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    billingPeriod === "monthly"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>
          )}

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
                      stateName={plan.name}
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
                    key={billingPeriod}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <p className="text-sm font-medium uppercase tracking-wider text-primary">
                        Founding plan
                      </p>
                      <div className="mt-3 flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-bold text-foreground">${amount}</span>
                        <span className="text-muted-foreground">/mo</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{billingNote}</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-foreground">
                        State
                      </Label>
                      <Select
                        value={selectedState}
                        onValueChange={(value) => setSelectedState(value as StateCode)}
                      >
                        <SelectTrigger id="state" className="bg-background/50 border-border/50">
                          <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                        <SelectContent>
                          {STATE_PLANS.map((state) => (
                            <SelectItem key={state.code} value={state.code}>
                              {state.name} ({state.code})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <ul className="space-y-3">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Start 14 day free trial
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
                      You&apos;ll see this week&apos;s {plan.name} projects live on the call.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>

          {!showDemoForm && (
            <p className="mt-6 text-center text-sm text-muted-foreground">
              14-day free trial on every plan. Card required at checkout — you won&apos;t be charged
              until the trial ends.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
