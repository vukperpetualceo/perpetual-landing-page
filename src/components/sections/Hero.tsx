import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";

type PermitType = "POOL" | "FIRE" | "HVAC" | "ELEC" | "MECH";
type FeedCategory = "commercial" | "residential";

type PermitItem = {
  address: string;
  type: PermitType;
  isNew?: boolean;
  status: string;
  time: string;
  description: string;
  location: string;
  district: string;
  value: string;
  contractor: string;
};

const TYPE_STYLES: Record<
  PermitType,
  { dotBg: string; dot: string; badge: string; label: string }
> = {
  POOL: {
    dotBg: "bg-sky-100",
    dot: "bg-sky-500",
    badge: "bg-sky-500 text-white",
    label: "Pool",
  },
  FIRE: {
    dotBg: "bg-rose-100",
    dot: "bg-rose-500",
    badge: "bg-rose-100 text-rose-600",
    label: "Fire",
  },
  HVAC: {
    dotBg: "bg-violet-100",
    dot: "bg-violet-500",
    badge: "bg-violet-100 text-violet-700",
    label: "HVAC",
  },
  ELEC: {
    dotBg: "bg-amber-100",
    dot: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
    label: "Elec",
  },
  MECH: {
    dotBg: "bg-teal-100",
    dot: "bg-teal-500",
    badge: "bg-teal-100 text-teal-700",
    label: "Mech",
  },
};

const COMMERCIAL_PERMITS: PermitItem[] = [
  {
    address: "4915 New Broad St",
    type: "FIRE",
    isNew: true,
    status: "In Review",
    time: "just now",
    description: "Fire alarm system for the Tactical Brewery tenant build-out.",
    location: "Orlando, FL",
    district: "D3",
    value: "$28K",
    contractor: "DynaFire LLC",
  },
  {
    address: "6700 Lake Nona Blvd",
    type: "FIRE",
    status: "In Review",
    time: "just now",
    description:
      "Fire alarm system for the UCF Lake Nona Hospital emergency department expansion.",
    location: "Orlando, FL",
    district: "D2",
    value: "$142K",
    contractor: "Siemens Fire",
  },
  {
    address: "200 S Biscayne Blvd",
    type: "HVAC",
    status: "In Review",
    time: "12s ago",
    description: "Rooftop HVAC package units for a 12-story Class A office retrofit.",
    location: "Miami, FL",
    district: "D1",
    value: "$310K",
    contractor: "Comfort Systems USA",
  },
  {
    address: "901 W 5th St",
    type: "ELEC",
    status: "In Review",
    time: "28s ago",
    description: "Electrical service upgrade for a mixed-use retail and office shell.",
    location: "Austin, TX",
    district: "D4",
    value: "$185K",
    contractor: "Walker Engineering",
  },
];

const RESIDENTIAL_PERMITS: PermitItem[] = [
  {
    address: "11091 Cromwell Rd",
    type: "POOL",
    isNew: true,
    status: "In Review",
    time: "just now",
    description: "New pool for a Lake Nona custom home (Lot 37).",
    location: "Orlando, FL",
    district: "D1",
    value: "$65K",
    contractor: "Tropical Pools",
  },
  {
    address: "1231 Poinsettia Ave",
    type: "POOL",
    status: "In Review",
    time: "just now",
    description: "New residential swimming pool and spa.",
    location: "Orlando, FL",
    district: "D3",
    value: "$81K",
    contractor: "Cody Pools Inc",
  },
  {
    address: "8842 Coral Way",
    type: "HVAC",
    status: "In Review",
    time: "9s ago",
    description: "Whole-home mini-split install for a Coral Gables renovation.",
    location: "Miami, FL",
    district: "D2",
    value: "$22K",
    contractor: "Florida Cooling Pros",
  },
  {
    address: "412 Oak Hill Dr",
    type: "MECH",
    status: "In Review",
    time: "21s ago",
    description: "Mechanical permit for a new single-family home HVAC rough-in.",
    location: "Austin, TX",
    district: "D1",
    value: "$14K",
    contractor: "Hill Country Mech",
  },
];

const FEEDS: Record<
  FeedCategory,
  { permits: PermitItem[]; inReview: number; placeholder: string }
> = {
  commercial: {
    permits: COMMERCIAL_PERMITS,
    inReview: 278,
    placeholder: "Find HVAC contractors doing mini-split installs...",
  },
  residential: {
    permits: RESIDENTIAL_PERMITS,
    inReview: 137,
    placeholder: "Find pool builders installing spas this week...",
  },
};

const BroadcastIcon = () => (
  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground">
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-background"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M8.5 8.5a5 5 0 0 1 0 7" />
      <path d="M15.5 8.5a5 5 0 0 0 0 7" />
      <path d="M5.5 5.5a9 9 0 0 1 0 13" />
      <path d="M18.5 5.5a9 9 0 0 0 0 13" />
    </svg>
  </div>
);

const TypeDot = ({ type }: { type: PermitType }) => {
  const styles = TYPE_STYLES[type];
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${styles.dotBg}`}
    >
      <div className={`h-2.5 w-2.5 rounded-full ${styles.dot}`} />
    </div>
  );
};

const TypeBadge = ({ type }: { type: PermitType }) => {
  const styles = TYPE_STYLES[type];
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${styles.badge}`}
    >
      {styles.label}
    </span>
  );
};

export const Hero = () => {
  const [feedCategory, setFeedCategory] = useState<FeedCategory>("commercial");
  const feed = FEEDS[feedCategory];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero border-b border-border/70">
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow animate-pulse-glow" />

      <motion.div
        className="absolute top-20 left-[15%] w-64 h-64 rounded-full bg-primary/4 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[15%] w-96 h-96 rounded-full bg-primary/8 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Buying Intelligence for</span>
            <br />
            <span className="text-gradient">Equipment Providers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Find your next buyer, before the purchase order exists
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mx-auto mb-12 max-w-3xl text-left"
          >
            <div className="mb-4 flex justify-center">
              <div
                role="tablist"
                aria-label="Permit category"
                className="inline-flex items-center rounded-lg border border-border bg-muted/60 p-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={feedCategory === "commercial"}
                  onClick={() => setFeedCategory("commercial")}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    feedCategory === "commercial"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Commercial
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={feedCategory === "residential"}
                  onClick={() => setFeedCategory("residential")}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    feedCategory === "residential"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Residential
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <BroadcastIcon />
                  <span className="text-base font-semibold text-foreground">
                    Live permit feed
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Austin · Miami · Orlando</span>
                  <span className="font-semibold text-foreground">{feed.inReview}</span>
                  <span>in review</span>
                </div>
              </div>

              <div className="relative max-h-[340px] overflow-hidden px-4 py-4 sm:max-h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={feedCategory}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {feed.permits.map((permit) => (
                      <div
                        key={`${feedCategory}-${permit.address}`}
                        className="rounded-xl border border-border bg-background px-3.5 py-3.5"
                      >
                        <div className="flex gap-3">
                          <TypeDot type={permit.type} />

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex min-w-0 flex-wrap items-center gap-1.5">
                                <h3 className="truncate text-sm font-semibold text-foreground">
                                  {permit.address}
                                </h3>
                                <TypeBadge type={permit.type} />
                                {permit.isNew && (
                                  <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                                    New
                                  </span>
                                )}
                              </div>
                              <div className="shrink-0 text-right">
                                <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-600">
                                  {permit.status}
                                </span>
                                <p className="mt-1 text-[11px] text-muted-foreground">
                                  {permit.time}
                                </p>
                              </div>
                            </div>

                            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                              {permit.description}
                            </p>

                            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {permit.location}
                              </span>
                              <span>·</span>
                              <span>{permit.district}</span>
                              <span className="font-semibold text-foreground">
                                {permit.value}
                              </span>
                              <span>{permit.contractor}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="border-t border-border px-4 pb-4 pt-1">
                <div className="rounded-xl border border-border bg-muted/40 px-4 py-3">
                  <p className="mb-3 text-sm text-muted-foreground">{feed.placeholder}</p>
                  <div className="flex items-center justify-between border-t border-border/70 pt-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="h-4 w-4" />
                      <span>Or describe the buyer you want</span>
                    </div>
                    <button
                      type="button"
                      aria-label="Send message"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
