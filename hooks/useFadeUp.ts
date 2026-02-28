"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_OPTIONS = {
  threshold: 0.1,
  rootMargin: "0px 0px -40px 0px",
  delayMs: 0,
} as const;

export type UseFadeUpOptions = Partial<{
  threshold: number;
  rootMargin: string;
  delayMs: number;
}>;

/**
 * Observes a section element and returns isVisible when it enters the viewport.
 * Use with a ref on the section and apply animate-fade-up when isVisible is true.
 */
export function useFadeUp(options: UseFadeUpOptions = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold, rootMargin, delayMs } = { ...DEFAULT_OPTIONS, ...options };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            timeoutId = setTimeout(() => setIsVisible(true), delayMs);
          } else {
            setIsVisible(true);
          }
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [threshold, rootMargin, delayMs]);

  return { ref: sectionRef, isVisible };
}
