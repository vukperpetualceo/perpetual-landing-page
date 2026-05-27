import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Perpetual transformed our outbound sales strategy. We closed 3 major deals in the first month that we would have never discovered on our own.",
    author: "Sarah Chen",
    role: "VP of Sales",
    company: "TechScale Inc.",
  },
  {
    quote: "Marcus AI is like having a dedicated research team working 24/7. The quality of ICP matching is incredible.",
    author: "Michael Roberts",
    role: "CEO",
    company: "GrowthLabs",
  },
  {
    quote: "The personalized outreach feature alone is worth 10x the investment. Our response rates went from 2% to 28%.",
    author: "Elena Martinez",
    role: "Head of BD",
    company: "Innovate.io",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="text-gradient">Sales Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See what industry leaders are saying about Perpetual
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-card border border-border/50 relative"
            >
              <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />
              <p className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
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
