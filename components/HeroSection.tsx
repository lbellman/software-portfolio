import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
          <p
            className="uppercase-overline animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Systems Architect & Technical Steward
          </p>

          <div className="space-y-4">
            <h1
              id={headingId}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              Build thoughtfully.
              <br className="hidden sm:block" /> Grow steadily.
            </h1>

            <p
              id={descriptionId}
              className="max-w-prose text-muted-foreground animate-fade-up opacity-0"
              style={{ animationDelay: "0.6s" }}
            >
              I design clean, scalable software systems in environments that
              value integrity, clarity, and long-term impact. <br /> <br />I
              bring order, intention, and long-term thinking to any problem.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              className="group opacity-0 animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Link href="/projects">
                View my work
                <span
                  aria-hidden="true"
                  className="text-lg group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Right column: hero illustration */}
        <div className="relative w-full max-w-2xl lg:max-w-none">
          <Image
            src="/hero-image.webp"
            alt="Abstract illustration of a calm, nature-inspired home and mind."
            width={960}
            height={600}
            priority
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 70vw, 90vw"
            className="h-auto w-full animate-fade-up opacity-0"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
