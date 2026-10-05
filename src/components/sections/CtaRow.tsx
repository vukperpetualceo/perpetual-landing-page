import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, CreditCard } from "lucide-react";
import { LINKS, PRICING } from "@/lib/links";

type CtaRowProps = {
  size?: "lg" | "xl";
  /** Adds a quiet "book a call" text link under the buttons. */
  withBooking?: boolean;
  /** An extra button rendered after the two primary ones, e.g. the demo button. */
  extra?: ReactNode;
  className?: string;
};

/**
 * The primary calls to action, always in the same order: Purchase first,
 * free trial second. Reused in the hero, after each section, and in the footer CTA.
 */
export const CtaRow = ({ size = "lg", withBooking = false, extra, className = "" }: CtaRowProps) => (
  <div className={`flex flex-col items-center gap-4 ${className}`}>
    <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
      <Button variant="hero" size={size} className="w-full sm:w-auto" asChild>
        <a href={LINKS.purchase} target="_blank" rel="noopener noreferrer">
          <CreditCard />
          Purchase
          <ArrowRight />
        </a>
      </Button>
      <Button variant="heroOutline" size={size} className="w-full sm:w-auto" asChild>
        <a href={LINKS.trial} target="_blank" rel="noopener noreferrer">
          Start {PRICING.trialDays}-day free trial
        </a>
      </Button>
      {extra}
    </div>

    {withBooking ? (
      <a
        href={LINKS.booking}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
      >
        <CalendarDays className="h-4 w-4" />
        Or book a 20 minute call with us
      </a>
    ) : null}
  </div>
);
