import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CreditCard,
  Minus,
  Plus,
} from "lucide-react";
import { LINKS, PRICING, checkoutUrl } from "@/lib/links";

const INCLUDES = [
  `Every commercial project in ${PRICING.state}, the day its first permit is filed`,
  "Every permit under each building, as it's filed",
  "GC, owner, and sub contacts with phone numbers",
  "Plan PDFs and work plans where the county posts them",
  "Founding price locked for as long as you stay",
];

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

/** Pulsing status dot. */
const LivePing = () => (
  <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
  </span>
);

const clampSeats = (n: number) =>
  Math.min(PRICING.maxSeats, Math.max(1, Number.isFinite(n) ? Math.round(n) : 1));

/** Step one: the plan, its price, and what you get. */
const PlanStep = ({ onPurchase }: { onPurchase: () => void }) => (
  <div className="space-y-6">
    <div className="text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-primary">Founding price</p>
      <div className="mt-3 flex items-baseline justify-center gap-1">
        <span className="text-5xl font-bold text-foreground">{money(PRICING.firstSeat)}</span>
        <span className="text-muted-foreground">/mo</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Per seat, billed monthly. Cancel anytime.
      </p>
    </div>

    <ul className="space-y-3">
      {INCLUDES.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <div className="space-y-3">
      <Button variant="hero" size="lg" className="w-full" onClick={onPurchase}>
        <CreditCard className="mr-2 h-4 w-4" />
        Purchase
      </Button>
      <Button variant="heroOutline" size="lg" className="w-full" asChild>
        <a href={checkoutUrl(LINKS.trial, 1)} target="_blank" rel="noopener noreferrer">
          Start {PRICING.trialDays}-day free trial
        </a>
      </Button>
    </div>

    <p className="text-center text-xs text-muted-foreground">
      Card required at checkout. You won&apos;t be charged until the trial ends.
    </p>
  </div>
);

/** Step two: how many seats, with the running total, then on to checkout. */
const SeatStep = ({ onBack }: { onBack: () => void }) => {
  const [seats, setSeats] = useState(1);

  const additional = seats - 1;
  const additionalCost = additional * PRICING.additionalSeat;
  const total = PRICING.firstSeat + additionalCost;
  const showTeamHint = seats >= PRICING.teamHintAt;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">Step 2 of 2</p>
        <h3 className="mt-2 text-2xl font-bold text-foreground">How many seats do you need?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {money(PRICING.firstSeat)}/mo for the first seat, {money(PRICING.additionalSeat)}/mo for
          every seat after that.
        </p>
      </div>

      <div className="flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Remove a seat"
          disabled={seats <= 1}
          onClick={() => setSeats((n) => clampSeats(n - 1))}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Minus className="h-5 w-5" />
        </button>

        <div className="text-center">
          <label htmlFor="seats" className="sr-only">
            Number of seats
          </label>
          <input
            id="seats"
            type="number"
            inputMode="numeric"
            min={1}
            max={PRICING.maxSeats}
            value={seats}
            onChange={(e) => setSeats(clampSeats(e.target.valueAsNumber))}
            className="h-14 w-24 rounded-xl border border-border bg-background text-center text-3xl font-bold tabular-nums text-foreground outline-none [appearance:textfield] focus:border-foreground/30 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <p className="mt-1.5 text-xs uppercase tracking-wide text-muted-foreground">
            {seats === 1 ? "Seat" : "Seats"}
          </p>
        </div>

        <button
          type="button"
          aria-label="Add a seat"
          disabled={seats >= PRICING.maxSeats}
          onClick={() => setSeats((n) => clampSeats(n + 1))}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-muted/40">
        <dl className="space-y-1.5 px-4 py-3 text-sm">
          <div className="flex items-center justify-between text-muted-foreground">
            <dt>First seat</dt>
            <dd className="tabular-nums">{money(PRICING.firstSeat)}</dd>
          </div>
          <div className="flex items-center justify-between text-muted-foreground">
            <dt>
              {additional === 0
                ? "Additional seats"
                : `${additional} more × ${money(PRICING.additionalSeat)}`}
            </dt>
            <dd className="tabular-nums">{additional === 0 ? "—" : money(additionalCost)}</dd>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-1.5 text-base font-semibold text-foreground">
            <dt>Total per month</dt>
            <dd className="tabular-nums">{money(total)}</dd>
          </div>
        </dl>

        <AnimatePresence initial={false}>
          {showTeamHint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-border bg-secondary/60"
            >
              <p className="flex items-center gap-2 px-4 py-2.5 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5 shrink-0" />
                <span>
                  Buying for a bigger team?{" "}
                  <a
                    href={LINKS.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Book a call
                  </a>{" "}
                  and we&apos;ll put together a team plan.
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Button variant="hero" size="lg" className="w-full" asChild>
        <a href={checkoutUrl(LINKS.purchase, seats)} target="_blank" rel="noopener noreferrer">
          Continue to checkout, {money(total)}/mo
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="w-full text-muted-foreground"
        onClick={onBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
    </div>
  );
};

export const Pricing = () => {
  const [choosingSeats, setChoosingSeats] = useState(false);

  return (
    <section id="pricing" className="relative border-y border-border/70 bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Pricing
          </span>
          <h2 className="mb-6 mt-4 text-4xl font-bold md:text-5xl">
            One plan. <span className="text-gradient">Founding price.</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Perpetual is live in {PRICING.state} right now. Founding customers get the full state
            feed, and their price never moves.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl"
        >
          <div className="mb-4 space-y-1 rounded-lg border border-border bg-muted/50 px-6 py-4 text-center text-sm">
            <p className="inline-flex items-center gap-2 font-semibold text-foreground">
              <LivePing />
              Live in {PRICING.state}
            </p>
            <p className="text-muted-foreground">
              Selling somewhere else?{" "}
              <Link
                to="/contact"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                Contact the team directly
              </Link>
            </p>
          </div>

          <Card className="glass-card border-border shadow-card">
            <CardContent className="pb-8 pt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={choosingSeats ? "seats" : "plan"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  {choosingSeats ? (
                    <SeatStep onBack={() => setChoosingSeats(false)} />
                  ) : (
                    <PlanStep onPurchase={() => setChoosingSeats(true)} />
                  )}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
