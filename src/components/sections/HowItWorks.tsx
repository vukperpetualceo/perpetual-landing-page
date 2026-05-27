import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Personalize Perpetual to your Business",
    description:
      "Define your ICP, signal specifications, and product so Perpetual becomes tailored to your organization and sales teams' goals.",
  },
  {
    number: "02",
    title: "Surface High-Intent Companies",
    description:
      "Using your selected buying signals and ICP criteria, Perpetual surfaces companies most likely to be entering a buying window for your product or service.",
  },
  {
    number: "03",
    title: "Prioritize High-Value Accounts",
    description:
      "Perpetual allows teams to prioritize the accounts most aligned with their offer, then continuously monitors those companies for new buying signals, organizational shifts, and opportunity movement.",
  },
  {
    number: "04",
    title: "Engage & Convert",
    description:
      "Prioritize outreach toward your most strategically relevant accounts while Perpetual continuously surfaces new opportunities across your market.",
  },
];

const CIRCLE_RADIUS = 28;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

const StepCircle = ({ index, totalSteps }: { index: number; totalSteps: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [CIRCLE_CIRCUMFERENCE, 0]
  );

  const isComplete = useTransform(scrollYProgress, (value) => value >= 0.95);

  return (
    <div ref={ref} className="relative flex-shrink-0 w-16 h-16">
      {/* SVG Circle Progress */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
        {/* Background circle */}
        <circle
          cx="32"
          cy="32"
          r={CIRCLE_RADIUS}
          fill="none"
          stroke="hsl(var(--primary) / 0.2)"
          strokeWidth="4"
        />
        {/* Progress circle */}
        <motion.circle
          cx="32"
          cy="32"
          r={CIRCLE_RADIUS}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={CIRCLE_CIRCUMFERENCE}
          style={{ strokeDashoffset }}
        />
      </svg>

      {/* Filled background when complete */}
      <motion.div
        className="absolute inset-1 rounded-full bg-primary"
        style={{
          scale: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
          opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
        }}
      />
      
      {/* Animated Check icon that appears when complete */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          scale: useTransform(scrollYProgress, [0.9, 1], [0.5, 1]),
          opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
        }}
      >
        <Check className="w-6 h-6 text-primary-foreground" strokeWidth={3} />
      </motion.div>
      
      {/* Step number that fades out */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary"
        style={{
          opacity: useTransform(scrollYProgress, [0.85, 0.95], [1, 0]),
        }}
      >
        {index + 1}
      </motion.span>

      {/* Connector line */}
      {index < totalSteps - 1 && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 w-px h-12 bg-border" />
      )}
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card relative overflow-hidden border-y border-border/70">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient">Perpetual</span> Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Four simple steps to transform your outbound sales process
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-8 mb-16">
                {/* Circle */}
                <StepCircle index={index} totalSteps={steps.length} />
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
