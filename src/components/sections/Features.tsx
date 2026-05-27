import { motion } from "framer-motion";
import { 
  Target, 
  Search, 
  TrendingUp, 
  RefreshCw 
} from "lucide-react";
import featurePipeline from "@/assets/feature-pipeline.png";
import featureSmb from "@/assets/feature-smb.png";
import featureDistributors from "@/assets/feature-distributors.png";
import featureDataloop from "@/assets/feature-dataloop.png";

const features = [
  {
    icon: Target,
    title: "AI-Powered ICP Discovery",
    description: "With industry based prompting configuration, Marcus AI analyzes 500+ potential companies in your market at once to determine which is the best match for your offering.",
    image: featurePipeline,
  },
  {
    icon: Search,
    title: "Deep Scraping & Intelligent Matching",
    description: "Automatically search and aggregate company information from across the web—financials, news, tech stack—then match your unique value proposition to companies most likely to benefit from a partnership.",
    image: featureSmb,
  },
  {
    icon: TrendingUp,
    title: "Partnership Analysis & Personalized Outreach",
    description: "Get data-driven insights on partnership likelihood, potential value, and strategic fit, then generate customized proposals tailored to each prospect's specific needs.",
    image: featureDistributors,
  },
  {
    icon: RefreshCw,
    title: "Continuous Data Loop",
    description: "Draft and send hyper-personalized emails that resonate with decision-makers and drive responses.",
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
            Everything You Need to{" "}
            <span className="text-gradient">Scale Partnerships</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From discovery to outreach, Perpetual handles the entire partnership pipeline with AI precision.
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
