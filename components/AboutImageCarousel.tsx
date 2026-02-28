"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const CAROUSEL_IMAGES = [
  { src: "/about/beach.webp", alt: "Beach" },
  { src: "/about/horse-ride.webp", alt: "Horse" },
  { src: "/about/conference.webp", alt: "Conference" },
  { src: "/about/van.webp", alt: "Van" },
  { src: "/about/winston-car.webp", alt: "Winston" },
  { src: "/about/trail.webp", alt: "Trail" },
] as const;

// Duplicate for infinite loop (first slide repeated at end)
const EXTENDED_IMAGES = [...CAROUSEL_IMAGES, CAROUSEL_IMAGES[0]];
const LEN = CAROUSEL_IMAGES.length;

export default function AboutImageCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);

  const logicalIndex = slideIndex % LEN;

  const goTo = useCallback((index: number) => {
    setSlideIndex(Math.max(0, Math.min(index, LEN - 1)));
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (slideIndex === LEN) {
      setDisableTransition(true);
      setSlideIndex(0);
    }
  }, [slideIndex]);

  useEffect(() => {
    if (!disableTransition) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setDisableTransition(false));
    });
    return () => cancelAnimationFrame(id);
  }, [disableTransition]);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i === LEN - 1 ? LEN : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Photo gallery"
      className="border-t border-border px-6 py-16 md:py-20 lg:px-12"
    >
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div
          className="flex aspect-video w-full min-h-[200px] md:min-h-[280px]"
          style={{
            transition: disableTransition ? "none" : "transform 500ms ease-out",
            transform: `translateX(-${slideIndex * 100}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {EXTENDED_IMAGES.map(({ src, alt }, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-full min-h-full w-full min-w-full shrink-0 bg-muted"
              aria-hidden
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 justify-center gap-2 rounded-full bg-background/80 px-3 py-2 backdrop-blur-sm">
          {CAROUSEL_IMAGES.map(({ src }, index) => (
            <button
              key={src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to image ${index + 1} of ${LEN}`}
              aria-current={index === logicalIndex ? "true" : undefined}
              className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:h-14 md:w-14 ${
                index === logicalIndex
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
