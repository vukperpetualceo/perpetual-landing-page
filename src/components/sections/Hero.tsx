import { motion } from "framer-motion";
import { ArrowUpRight, Filter, LayoutGrid, Lock } from "lucide-react";
import { CtaRow } from "./CtaRow";
import { DemoButton } from "./DemoDialog";

type Stage = "Planning" | "Review";

type Opportunity = {
  /** Who filed it, plus the site address. */
  company: string;
  address: string;
  /** Scope of work as it reads on the filing. */
  description: string;
  location: string;
  category: string;
  value: string;
  contractor: string;
  stage: Stage;
  isNew?: boolean;
  age: string;
  contacts: number;
};

/** Headline counts above the list. Swap for live figures when the feed is wired up. */
const STATS = [
  "20k live projects",
  "3 filed this week",
  "268k contacts identified",
  "2,154 reviewer decisions",
];

const OPPORTUNITIES: Opportunity[] = [
  {
    company: "D.R. Horton Inc.",
    address: "7024 Dolmen Dr",
    description:
      "Townhomes, 6 units, Lots 11-16, 2 stories, All units 1649sf, VB Construction, R3 Occupancy",
    location: "Raleigh, NC",
    category: "Multifamily",
    value: "$254K",
    contractor: "D.R. Horton Inc.",
    stage: "Planning",
    isNew: true,
    age: "26d ago",
    contacts: 15,
  },
  {
    company: "FIFTH OAK RALEIGH LLC",
    address: "5251 Pinecross Way",
    description:
      "2-unit townhome buildings. Revised : Per application 2-unit duplex buildings (Type 3A/3B)",
    location: "Raleigh, NC",
    category: "Multifamily",
    value: "$484K",
    contractor: "NOVA POWER & LIGHT LLC",
    stage: "Planning",
    isNew: true,
    age: "26d ago",
    contacts: 12,
  },
  {
    company: "FIFTH OAK RALEIGH LLC",
    address: "5250 Pinecross Way",
    description: "2-unit townhome buildings",
    location: "Raleigh, NC",
    category: "Multifamily",
    value: "$405K",
    contractor: "NOVA POWER & LIGHT LLC",
    stage: "Planning",
    isNew: true,
    age: "26d ago",
    contacts: 12,
  },
  {
    company: "Yellow Dot Heating & Air Conditioning",
    address: "5926 Spring Forest Rd",
    description:
      "Townhomes, 4 units, Lots 34-37, 2 stories, VB Construction, R3 Occupancy, Real Property lines",
    location: "Raleigh, NC",
    category: "Multifamily",
    value: "$344K",
    contractor: "Yellow Dot Heating & Air Conditioning",
    stage: "Review",
    age: "26d ago",
    contacts: 9,
  },
  {
    company: "LEGACY CUSTOM HOMES INC.",
    address: "1322 Mordecai Overlook Cir",
    description: "MORDECAI COTTAGES - THREE-STORY RESIDENTIAL STYLE CONDOMINIUM UNITS.",
    location: "Raleigh, NC",
    category: "Multifamily",
    value: "$366K",
    contractor: "AMERICAN PLUMBING INC.",
    stage: "Review",
    age: "26d ago",
    contacts: 7,
  },
  {
    company: "FEP CONSTRUCTION LLC",
    address: "214 S State St",
    description: "Interior upfit, 2 stories, VB Construction, B Occupancy",
    location: "Raleigh, NC",
    category: "Commercial",
    value: "$212K",
    contractor: "FEP CONSTRUCTION LLC",
    stage: "Review",
    age: "27d ago",
    contacts: 6,
  },
];

const STAGE_STYLES: Record<Stage, string> = {
  Planning: "text-emerald-600",
  Review: "text-amber-600",
};

const OpportunityRow = ({ item }: { item: Opportunity }) => (
  <article className="flex gap-4 border-b border-border px-5 py-4 last:border-b-0">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
      <LayoutGrid className="h-5 w-5 text-emerald-600" />
    </div>

    <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <h3 className="font-sans text-base font-semibold leading-snug text-foreground">
          {item.company} <span className="text-muted-foreground/60">—</span> {item.address}
        </h3>
        <p className="mt-1 text-sm leading-snug text-muted-foreground">{item.description}</p>
        <p className="mt-1 text-sm text-muted-foreground/70">
          {item.location} · {item.category} · {item.value} · {item.contractor}
        </p>
      </div>

      <div className="shrink-0 space-y-1 sm:text-right">
        <p className={`text-sm font-semibold ${STAGE_STYLES[item.stage]}`}>{item.stage}</p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground sm:justify-end">
          {item.isNew && (
            <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
              New
            </span>
          )}
          {item.age}
        </p>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground/70 sm:justify-end">
          {item.contacts} contacts locked
          <Lock className="h-3.5 w-3.5" />
        </p>
      </div>
    </div>
  </article>
);

export const Hero = () => {
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
        <div className="mx-auto max-w-6xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-6 max-w-4xl text-4xl md:text-6xl font-bold tracking-tight"
          >
            <span className="text-foreground">Every new commercial job,</span>
            <br className="hidden md:block" />{" "}
            <span className="text-gradient">the day the permit is filed.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-3xl text-lg md:text-xl leading-relaxed text-muted-foreground"
          >
            Perpetual reads commercial construction filings the day they land and turns each one
            into a project: what&apos;s being built, every permit under it, who&apos;s running the
            job, and the specs. You see the work before the trade packages are bought out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mx-auto mb-12 max-w-5xl text-left"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              {/* Header: what the list is, and what it covers */}
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-border px-5 py-4">
                <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-base font-semibold text-foreground">
                    Live opportunities
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {STATS.join(" · ")}
                  </span>
                </div>

                <button
                  type="button"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </button>
              </div>

              {/* The list itself */}
              <div className="relative max-h-[380px] overflow-hidden sm:max-h-[520px]">
                {OPPORTUNITIES.map((item) => (
                  <OpportunityRow key={`${item.company}-${item.address}`} item={item} />
                ))}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Natural language search */}
              <div className="border-t border-border p-4">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
                  <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-sm text-muted-foreground">
                      Describe the buyer or project you want...
                    </span>
                    <span className="truncate text-sm text-muted-foreground/60">
                      Try &ldquo;Commercial HVAC equipment around Orlando&rdquo;
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label="Search"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white transition-colors hover:bg-emerald-600"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CtaRow size="xl" extra={<DemoButton size="xl" />} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
