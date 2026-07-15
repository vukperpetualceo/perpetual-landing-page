import { motion } from "framer-motion";
import { 
  FileCheck, 
  ListChecks, 
  Contact, 
  BellRing 
} from "lucide-react";
import featurePipeline from "@/assets/feature-pipeline.png";
import featureSmb from "@/assets/feature-smb.png";
import featureDistributors from "@/assets/feature-distributors.png";
import featureDataloop from "@/assets/feature-dataloop.png";

const features = [
  {
    icon: FileCheck,
    title: "Every new permit, the day it's filed",
    description:
      "Perpetual monitors local permitting systems continuously and pulls every commercial and multifamily submission as it lands, filtered to the equipment you sell.",
    image: featurePipeline,
  },
  {
    icon: ListChecks,
    title: "The equipment each job calls for",
    description:
      "Work items for every trade: AC, ductwork, generators, fire protection. Plus square footage, occupancy, and where the plans sit in review. Qualify a project in thirty seconds.",
    image: featureSmb,
  },
  {
    icon: Contact,
    title: "The contractor's name, license, and phone",
    description:
      "Every contractor on the job, listed by trade, with license number and phone pulled straight from the filing. The owner and permit contact included. Your rep dials the decision maker on day one.",
    image: featureDistributors,
  },
  {
    icon: BellRing,
    title: "An alert when a spec reopens",
    description:
      "A contractor swap or a plan revision means the equipment decision just reopened. Perpetual tracks every open project and flags it the same day it hits the county record.",
    image: featureDataloop,
  },
];

export const Features = () => {
  return (
    <section id="features" className="pt-8 pb-24 bg-background relative border-y border-border/70">
      <div className="absolute inset-0 bg-gradient-glow opacity-15" />
      
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
            Buying Signals at Submission{" "}
            <span className="text-gradient">— not at issuance</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A filed permit means committed capital, stamped drawings, and weeks of plan review before any equipment is ordered. Perpetual reads that window continuously with everything from project scope, work items by trade, plan status, and every contractor on the job, license and phone included.
          </p>
        </motion.div>

        {/* Features List - Alternating Layout */}
        <div className="space-y-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {feature.description}
                  </p>
                  {"signalsIntro" in feature && feature.signalsIntro ? (
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                      {feature.signalsIntro}
                    </p>
                  ) : null}
                  {"signals" in feature && feature.signals ? (
                    <ul className="max-w-xl list-disc space-y-1 pl-5 text-base text-muted-foreground">
                      {feature.signals.map((signal) => (
                        <li key={signal}>{signal}</li>
                      ))}
                    </ul>
                  ) : null}
                  {"signalsAfter" in feature && feature.signalsAfter ? (
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                      {feature.signalsAfter}
                    </p>
                  ) : null}
                  {"descriptionAfter" in feature && feature.descriptionAfter ? (
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                      {feature.descriptionAfter}
                    </p>
                  ) : null}
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-card transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]">
                    <div className="bg-gradient-card">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
