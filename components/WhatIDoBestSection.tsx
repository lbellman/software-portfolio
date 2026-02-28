"use client";

import FlatTestimonial from "@/components/FlatTestimonial";
import { useFadeUp } from "@/hooks/useFadeUp";
import {
  Code2,
  Database,
  GraduationCap,
  Layers,
  Palette,
  PenTool,
  type LucideIcon,
} from "lucide-react";

const sectionId = "what-i-do-best";

const technicalSkills: { label: string; icon: LucideIcon }[] = [
  { label: "React / TypeScript", icon: Code2 },
  { label: "Design Systems", icon: Palette },
  { label: "Frontend Architecture", icon: Layers },
  { label: "UI/UX Design", icon: PenTool },
  { label: "Database Design", icon: Database },
  { label: "Technical Mentorship", icon: GraduationCap },
];

export default function WhatIDoBestSection() {
  const { ref: sectionRef, isVisible } = useFadeUp();
  return (
    <section
      ref={sectionRef}
      id={sectionId}
      aria-labelledby="what-i-do-best-heading"
      className="w-full px-6 py-16 sm:py-20 md:py-24"
    >
      <div
        className={`mx-auto max-w-6xl ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-5"}`}
      >
        <h2
          id="what-i-do-best-heading"
          className="mb-4 text-center tracking-widest text-secondary font-normal"
        >
          What I Do Best
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-sm text-muted-foreground md:mb-12">
          I can adapt to any technical stack or domain, but this is what I
          specialize in.
        </p>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left: technical skills as small cards in two columns */}
          <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map(({ label, icon: Icon }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="text-base font-medium text-foreground">
                    {label}
                  </span>
                </div>
              ))}
          </div>

          {/* Right: testimonial — flat, no card */}
          <FlatTestimonial
            quote="When things were complex or messy, Lindsey was the one bringing structure and calm to the situation. She cared about quality, understood the bigger picture, and followed through."
            name="Brent Story"
            size='small'
            title="CEO • EmitIQ"
            highlight="bringing structure and calm to the situation"
          />
        </div>
      </div>
    </section>
  );
}
