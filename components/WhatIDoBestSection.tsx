import { Quote } from "lucide-react";

const sectionId = "what-i-do-best";

const technicalSkills = [
  "React / TypeScript",
  "Design Systems",
  "Frontend Architecture",
  "Database Design",
  "UI/UX Design",
  "API Design & Integration",
  "Testing & Quality",
  "Accessibility (a11y)",
];

export default function WhatIDoBestSection() {
  return (
    <section
      id={sectionId}
      aria-labelledby="what-i-do-best-heading"
      className="w-full px-6 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="what-i-do-best-heading"
          className="mb-10 text-center tracking-widest text-secondary font-normal md:mb-12"
        >
          What I Do Best
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          {/* Left: one card, half width — Technical Skills */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 md:p-10">
            <h3 className="mb-2">Technical Skills</h3>
            <p className="mb-6 text-muted-foreground">
              I can adapt to any technical stack or domain, but this is what I
              specialize in.
            </p>
            <ul className="space-y-3 text-sm text-foreground" role="list">
              {technicalSkills.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: testimonial — flat, no card */}
          <blockquote className="relative flex flex-col justify-center py-4 pl-14 md:py-8 md:pl-20">
            <Quote
              aria-hidden
              className="absolute left-2 top-2 h-16 w-16 text-primary md:h-24 md:w-24 opacity-30"
            />
            <p className="text-lg font-medium leading-relaxed text-muted-foreground md:text-xl lg:text-3xl">
              When things were complex or messy, Lindsey was the one{" "}
              <span className="text-primary">
                bringing structure and calm to the situation
              </span>
              . She cared about quality, understood the bigger picture, and
              followed through.
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="block font-semibold text-foreground">
                  Brent Story
                </span>
                <span className="text-muted-foreground ">CEO • EmitIQ</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
