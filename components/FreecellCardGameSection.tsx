import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FreecellCardGameSection() {
  return (
    <section className="relative w-full py-38">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 text-center">
        <p className="uppercase-overline mb-6">AI Coding Experiment</p>
        <h2 className="mb-6 text-4xl font-light tracking-wider md:text-5xl">
          Freecell Card Game
        </h2>
        <div className="mb-6 flex items-center justify-center gap-6">
          <Image
            src="/cursor-logo.svg"
            alt="Cursor"
            width={64}
            height={64}
            className="h-8 w-8 object-contain md:h-14 md:w-18"
          />
          <Image
            src="/react-logo.png"
            alt="React"
            width={64}
            height={64}
            className="h-8 w-8 object-contain md:h-14 md:w-18"
          />
          <Image
            src="/tailwind-logo.svg"
            alt="Tailwind CSS"
            width={64}
            height={64}
            className="h-8 w-8 object-contain md:h-14 md:w-24"
          />
        </div>
        <p className="mb-8 text-muted-foreground">
          A classic FreeCell solitaire game built with React/TypeScript and
          Cursor AI. The goal was to stress-test AI-assisted development on
          non-trivial logic and constraints, and to document where AI
          accelerated progress versus where human involvement was still
          essential.
        </p>
        <Button asChild className="mb-10">
          <Link
            href="/projects/freecell"
            className="inline-flex items-center gap-2 group"
          >
            View Project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>

        {/* Space for image — replace with <Image> when you have the asset */}
        <div
          aria-hidden="true"
          className="w-full aspect-video rounded-xl border border-dashed border-border bg-muted/30"
        />
      </div>
    </section>
  );
}
