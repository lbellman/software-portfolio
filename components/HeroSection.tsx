import { Button } from "@/components/ui/button";

function HeroSection() {
  const headingId = "hero-heading";
  const descriptionId = "hero-description";

  return (
    <section
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className="flex min-h-screen w-full items-center px-6 py-24 sm:py-28"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch gap-12 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        {/* Left column: text content */}
        <div className="space-y-8 max-w-xl">
          <p className="uppercase-overline">
            Systems Architect & Technical Steward
          </p>

          <div className="space-y-4">
            <h1 id={headingId}>
              Build thoughtfully.
              <br className="hidden sm:block" /> Grow steadily.
            </h1>

            <p id={descriptionId} className="max-w-prose text-muted-foreground">
              I design clean, scalable software systems in environments that
              value integrity, clarity, and long-term impact. <br /> <br /> 
              Bring order, kindness, and long-term thinking to your team.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto text-sm font-semibold tracking-wide rounded-full px-7 py-3"
            >
              View my work
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </Button>
          </div>
        </div>

        {/* Right column: reserved image area */}
        <div
          aria-hidden="true"
          className="relative flex min-h-[220px] w-full items-center justify-center rounded-3xl border border-dashed border-primary/20 bg-primary/5 shadow-sm sm:min-h-[260px] md:min-h-[320px] lg:min-h-[360px]"
        >
          <div className="pointer-events-none absolute inset-6 rounded-2xl border border-primary/10" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Future artwork here
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
