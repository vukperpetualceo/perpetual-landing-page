import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const team = [
  {
    name: "Vukota Miric",
    role: "Co-Founder & CEO",
    initials: "VM",
    linkedin: "https://www.linkedin.com/in/vukota-miric-01457820b/",
    bio: [
      "Vukota grew up around HVAC equipment, in a family that manufactures it, and went on to study mechanical engineering at Clarkson. Between the two he picked up a working sense of how commercial equipment gets specified, sold and installed, and who is making each of those calls along the way.",
      "At Perpetual he runs the commercial side end to end: every customer conversation, the product decisions that come out of them, and the check on whether the data holds up against what the market said.",
    ],
  },
  {
    name: "Andrii Zorin",
    role: "Co-Founder & CTO",
    initials: "AZ",
    linkedin: "https://www.linkedin.com/in/andrii-zorin-1a62a6319/",
    bio: [
      "Andrii's work has been in data engineering on AWS, much of it on real-time trading systems where data that arrives late or wrong has a direct cost. It turns out to be the right instinct for public records, which are messy, inconsistent from one county to the next, and only worth anything if they are read fast.",
      "He built Perpetual's permit pipeline from the first county feed and runs engineering.",
    ],
  },
] as const;

const Team = () => {
  useEffect(() => {
    document.title = "Team | Perpetual";
    return () => {
      document.title = "Perpetual | Virginia Building Permits, the Day They're Filed";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Team</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-14 max-w-2xl"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              The team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Built by people who live in the{" "}
              <span className="text-gradient">buying window</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Product, operations, and engineering — focused on one problem: getting equipment
              providers in front of the right job before the bid war starts.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {team.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary text-2xl font-bold tracking-wide text-foreground">
                  {person.initials}
                </div>
                <h2 className="text-2xl font-bold text-foreground">{person.name}</h2>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-primary">
                  {person.role}
                </p>
                <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                  {person.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
