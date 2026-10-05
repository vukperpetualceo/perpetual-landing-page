import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Building2, Contact, FileCheck, FileText } from "lucide-react";
import featurePipeline from "@/assets/feature-pipeline.png";
import featureSmb from "@/assets/feature-smb.png";
import featureDistributors from "@/assets/feature-distributors.png";
import featureDataloop from "@/assets/feature-dataloop.png";

type FeatureMedia = {
  /** Still frame. Shown until a video is supplied, then used as the video poster. */
  poster: string;
  /** Muted, looping screen recording. Drop in a /public path or hosted .mp4 / .webm. */
  video?: string;
};

type Feature = {
  icon: typeof Building2;
  title: string;
  description: string;
  media: FeatureMedia;
};

const features: Feature[] = [
  {
    icon: Building2,
    title: "New jobs, before anybody's bidding",
    description:
      "Every new commercial job in your area the day the first permit hits the county. Open it and you get each building on the site, the address, what's going up, and what it's worth.",
    // Video: the project list, then one project expanded into its individual buildings.
    media: { poster: featurePipeline },
  },
  {
    icon: FileCheck,
    title: "Every permit pulled, the day it's filed",
    description:
      "Mechanical, electrical, plumbing, fire, each one the day it's pulled. Open any permit for the full filing, where it sits in review, and what the work actually is.",
    // Video: all permits under one building, then zoom in on a single permit.
    media: { poster: featureSmb },
  },
  {
    icon: Contact,
    title: "Who's running the job",
    description:
      "The GC, the owner, and the subs, with names and phone numbers off the filing. You call the guy who makes the call, not the front desk.",
    // Video: the contacts panel on a permit, GC and owner highlighted.
    media: { poster: featureDistributors },
  },
  {
    icon: FileText,
    title: "The plans and specs",
    description:
      "Where the county posts them, the plan set sits right on the permit. Pull up the schedule and see the equipment before you dial.",
    // Video: opening a plan set from a permit.
    // TODO: confirm with Andrii what is shown and how consistently before this copy ships.
    // "work plan" from the original brief is not confirmed county terminology; using "plan set".
    media: { poster: featureDataloop },
  },
];

/** Scroll distance devoted to each card, as a share of the viewport height.
 *  Raise it to slow the sequence down, lower it to speed it up. */
const SCROLL_VH_PER_CARD = 150;

const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mx-auto max-w-3xl text-center"
  >
    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
      Everything on the job, <span className="text-gradient">the day it&apos;s filed</span>
    </h2>
    <p className="text-xl text-muted-foreground">
      The job, the permits, who&apos;s running it, and the plans. Straight off the county filing,
      not weeks later.
    </p>
  </motion.div>
);

const FeatureMediaFrame = ({
  media,
  alt,
  className = "",
}: {
  media: FeatureMedia;
  alt: string;
  className?: string;
}) => (
  <div
    className={`overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card ${className}`}
  >
    {media.video ? (
      <video
        src={media.video}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
        className="h-full w-full object-cover object-left-top"
      />
    ) : (
      <img src={media.poster} alt={alt} className="h-full w-full object-cover object-left-top" />
    )}
  </div>
);

/** The enlarged card. Shown one at a time inside the pinned frame. */
const FeaturePanel = ({ feature, index }: { feature: Feature; index: number }) => (
  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
    <FeatureMediaFrame
      media={feature.media}
      alt={feature.title}
      className="aspect-video max-h-[34vh] w-full lg:order-2 lg:max-h-none"
    />

    <div className="space-y-4 lg:order-1 lg:space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary">
          <feature.icon className="h-6 w-6 text-primary" />
        </div>
        <span className="text-sm font-semibold tabular-nums tracking-wider text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
        {feature.title}
      </h3>
      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
        {feature.description}
      </p>
    </div>
  </div>
);

/** One segment of the progress bar. Fills as you scroll through its card. */
const RailSegment = ({
  progress,
  index,
  isActive,
  label,
  onSelect,
}: {
  progress: MotionValue<number>;
  index: number;
  isActive: boolean;
  label: string;
  onSelect: (index: number) => void;
}) => {
  const scaleX = useTransform(progress, (p) =>
    Math.min(1, Math.max(0, p * features.length - index)),
  );

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-label={`Go to: ${label}`}
      aria-current={isActive}
      className="group flex-1 py-2"
    >
      <span className="relative block h-1.5 w-full overflow-hidden rounded-full bg-border transition-colors group-hover:bg-foreground/25">
        <motion.span
          style={{ scaleX }}
          className="absolute inset-0 origin-left rounded-full bg-foreground"
        />
      </span>
    </button>
  );
};

/** Progress bar across the whole sequence, so the length of the scroll is visible. */
const ScrollProgress = ({
  progress,
  active,
  onSelect,
}: {
  progress: MotionValue<number>;
  active: number;
  onSelect: (index: number) => void;
}) => (
  <div className="mx-auto flex max-w-xl flex-col items-center gap-2">
    <div className="flex w-full items-center gap-2">
      {features.map((feature, index) => (
        <RailSegment
          key={feature.title}
          progress={progress}
          index={index}
          isActive={index === active}
          label={feature.title}
          onSelect={onSelect}
        />
      ))}
    </div>
    <p className="text-xs font-medium tabular-nums text-muted-foreground">
      {String(active + 1).padStart(2, "0")} of {String(features.length).padStart(2, "0")}
    </p>
  </div>
);

/** Plain stacked layout, used when the viewer prefers reduced motion. */
const StackedFeatures = () => (
  <div className="space-y-20">
    {features.map((feature, index) => (
      <FeaturePanel key={feature.title} feature={feature} index={index} />
    ))}
  </div>
);

export const Features = () => {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.min(features.length - 1, Math.max(0, Math.floor(progress * features.length)));
    setActive((current) => (current === next ? current : next));
  });

  /** Jump to the scroll position that sits in the middle of a given card's range. */
  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const scrollable = track.offsetHeight - window.innerHeight;
    const target = trackTop + (scrollable * (index + 0.5)) / features.length;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  if (reduceMotion) {
    return (
      <section id="features" className="relative border-y border-border/70 bg-background py-24">
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-16">
            <SectionHeader />
          </div>
          <StackedFeatures />
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="relative border-y border-border/70 bg-background">
      <div className="absolute inset-0 bg-gradient-glow opacity-15" />

      <div className="container relative z-10 mx-auto px-6 pt-24">
        <SectionHeader />
      </div>

      {/* Tall track: one viewport of scrolling per card. */}
      <div
        ref={trackRef}
        className="relative z-10"
        style={{ height: `${features.length * SCROLL_VH_PER_CARD}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl space-y-8 lg:space-y-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <FeaturePanel feature={features[active]} index={active} />
                </motion.div>
              </AnimatePresence>

              <ScrollProgress progress={scrollYProgress} active={active} onSelect={goTo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
