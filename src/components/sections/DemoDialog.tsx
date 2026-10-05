import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LINKS } from "@/lib/links";
import poster from "@/assets/feature-pipeline.png";

/**
 * Chapters mirror the planned reshoot: who it's for, one permit walked
 * end to end, and where to buy / try / book. Swap the labels to match the cut.
 */
const CHAPTERS = [
  { step: "01", label: "Who this is for", detail: "Suppliers, distributors, and reps selling into new jobs." },
  { step: "02", label: "One permit, start to finish", detail: "From the project list down to the people on the filing." },
  { step: "03", label: "Buy, try, or book a call", detail: "Purchase, a 14-day trial, or 20 minutes with the team." },
];

const isVideoFile = (url: string) => /\.(mp4|webm|mov)(\?.*)?$/i.test(url);

const Player = () => {
  const hasVideo = LINKS.demoVideo.length > 0;

  if (hasVideo && isVideoFile(LINKS.demoVideo)) {
    return <video src={LINKS.demoVideo} controls autoPlay playsInline className="h-full w-full" />;
  }
  if (hasVideo) {
    return (
      <iframe
        src={LINKS.demoVideo}
        title="Perpetual demo"
        className="h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <div className="relative h-full w-full">
      <img src={poster} alt="" className="h-full w-full object-cover object-top opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-foreground text-background shadow-glow">
          <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
        </span>
        <span className="rounded-full border border-border bg-card/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Demo video coming soon
        </span>
      </div>
    </div>
  );
};

/**
 * "Watch the demo" button that opens the two minute demo in a dialog.
 * The player only mounts while the dialog is open, so closing it stops playback.
 */
export const DemoButton = ({ size = "lg", className = "" }: { size?: "lg" | "xl"; className?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="heroOutline" size={size} className={`w-full sm:w-auto ${className}`}>
          <Play fill="currentColor" />
          Watch the demo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl gap-0 overflow-hidden p-0">
        <DialogHeader className="px-6 pb-4 pt-6 text-left">
          <DialogTitle className="text-2xl font-bold">Two minute demo</DialogTitle>
          <DialogDescription>
            One real permit, who this is built for, and how you would use it to make the first
            call.
          </DialogDescription>
        </DialogHeader>

        <div className="aspect-video border-y border-border bg-background">
          <Player />
        </div>

        <ol className="grid gap-3 px-6 py-5 sm:grid-cols-3">
          {CHAPTERS.map((chapter) => (
            <li key={chapter.step} className="rounded-xl border border-border bg-muted/40 px-4 py-3">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-semibold tabular-nums text-primary">{chapter.step}</span>
                <span className="text-sm font-semibold text-foreground">{chapter.label}</span>
              </div>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">{chapter.detail}</p>
            </li>
          ))}
        </ol>
      </DialogContent>
    </Dialog>
  );
};
