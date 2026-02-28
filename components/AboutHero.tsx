"use client";

import Image from "next/image";
import { useFadeUp } from "@/hooks/useFadeUp";

export default function AboutHero() {
  const { ref: sectionRef, isVisible } = useFadeUp();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative w-full overflow-hidden px-6 py-16 pt-24 md:py-24 lg:px-12"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/about/san-josef.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/70" aria-hidden />
      {/* Content */}
      <div
        className={`relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center transition-all duration-700 ${
          isVisible ? "animate-fade-up" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="relative mb-6 h-52 w-52 overflow-hidden rounded-full border-4 border-border bg-card shadow-md md:h-62 md:w-62 ">
          <Image
            src="/about/headshot.webp"
            alt="Lindsey Bellman"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 208px, 160px"
            priority
          />
        </div>
        <h1
          id="about-heading"
          className="mb-2 text-3xl font-light tracking-editorial md:text-4xl"
        >
          Lindsey Bellman
        </h1>
        <p className="text-lg ">
          Full Stack Software Engineer (Frontend-Leaning)
        </p>
      </div>
    </section>
  );
}
