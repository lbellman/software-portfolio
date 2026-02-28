"use client";

import { useFadeUp } from "@/hooks/useFadeUp";

type FadeUpSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  delayMs?: number;
  as?: "section" | "div";
};

export default function FadeUpSection({
  children,
  className = "",
  delayMs,
  as: Tag = "section",
  ...props
}: FadeUpSectionProps) {
  const { ref, isVisible } = useFadeUp({ delayMs });

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${
        isVisible ? "animate-fade-up" : "opacity-0 translate-y-5"
      } ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
