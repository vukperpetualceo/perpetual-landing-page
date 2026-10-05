import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, CheckCircle2, MonitorPlay, Users } from "lucide-react";
import { LINKS } from "@/lib/links";

/**
 * Copy here is a first pass and should be reviewed before launch.
 */
const REASONS = [
  {
    icon: MonitorPlay,
    title: "See how it works",
    description: "We walk through the product on this week's Virginia permits and answer your questions.",
  },
  {
    icon: CheckCircle2,
    title: "Check it fits your business",
    description: "Tell us what you sell and where. We will tell you straight whether Perpetual pays for itself.",
  },
  {
    icon: Users,
    title: "Set up a bigger team",
    description: "Need five, ten, or more seats, or another state? We put together a plan and a price for your team.",
  },
];

export const BookMeeting = () => (
  <section id="book" className="relative border-y border-border/70 bg-card py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <span className="text-sm font-medium uppercase tracking-wider text-primary">Talk to us</span>
        <h2 className="mb-6 mt-4 text-4xl font-bold md:text-5xl">
          Not sure yet? <span className="text-gradient">Book 20 minutes with us.</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          A short call with the founders. Pick a time and we will show you Perpetual live on real
          Virginia filings.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {REASONS.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-border bg-background p-7 shadow-sm"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
              <reason.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mt-12 flex flex-col items-center gap-4 text-center"
      >
        <Button variant="hero" size="xl" asChild>
          <a href={LINKS.booking} target="_blank" rel="noopener noreferrer">
            <CalendarDays />
            Book a meeting
          </a>
        </Button>
        <p className="text-sm text-muted-foreground">
          Or email{" "}
          <a
            href={`mailto:${LINKS.contactEmail}`}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {LINKS.contactEmail}
          </a>
        </p>
        <p className="text-sm text-muted-foreground">
          Ready to go?{" "}
          <a
            href={LINKS.purchase}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Purchase
          </a>{" "}
          or{" "}
          <a
            href={LINKS.trial}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            start a free trial
          </a>
          .
        </p>
      </motion.div>
    </div>
  </section>
);
