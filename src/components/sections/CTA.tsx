import { motion } from "framer-motion";
import { CtaRow } from "./CtaRow";

export const CTA = () => (
  <section className="relative overflow-hidden border-y border-border/70 bg-card py-24">
    <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
    <div className="absolute inset-0 bg-gradient-glow opacity-10" />

    <motion.div
      className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/6 blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">
          The next job in your trade was filed in Virginia this week.{" "}
          <span className="text-gradient">See it before your competitor does.</span>
        </h2>

        <CtaRow size="xl" withBooking />
      </motion.div>
    </div>
  </section>
);
