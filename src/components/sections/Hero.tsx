import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Paperclip, Send } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero border-b border-border/70">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow animate-pulse-glow" />
      
      {/* Floating orbs */}
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
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Buying Intelligence for</span>
            <br />
            <span className="text-gradient">Modern Outbound Sales</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Find your next buyer using real-time buying signals and actionable intelligence.
          </motion.p>

          {/* Chatbot Preview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mx-auto mb-12 max-w-3xl text-left"
          >
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="mb-14 text-sm text-muted-foreground">
                  List the top 5 companies by match score...
                </p>
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <Paperclip className="h-4 w-4 text-muted-foreground" />
                  <button
                    aria-label="Send message"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
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
