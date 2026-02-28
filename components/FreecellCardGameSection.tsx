import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PlayingCard from "@/components/PlayingCard";
import { Rank, Suit } from "@/app/projects/freecell/play/@types";

export default function FreecellCardGameSection() {
  return (
    <section className="w-full py-38">
      <div className="flex w-full items-center gap-4 md:gap-6">
        {/* 1. Left card stack */}
        <div
          aria-hidden="true"
          className="hidden flex-1 items-center justify-center md:flex"
        >
          <div className="relative scale-75 opacity-70 sm:scale-90">
            <div className="relative">
              <PlayingCard suit={Suit.Hearts} rank={Rank.Queen}  />
            </div>
            <div className="relative -mt-10 md:-mt-24">
              <PlayingCard suit={Suit.Spades} rank={Rank.Eight}  />
            </div>
            <div className="relative -mt-10 md:-mt-24">
              <PlayingCard suit={Suit.Diamonds} rank={Rank.Four}  />
            </div>
          </div>
        </div>

        {/* 2. Title / description / button column */}
        <div className="flex w-full max-w-3xl flex-2 flex-col items-center text-center">
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
              className="group inline-flex items-center gap-2"
            >
              View Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* 3. Right card stack */}
        <div
          aria-hidden="true"
          className="hidden flex-[1] items-center justify-center md:flex"
        >
          <div className="relative scale-75 opacity-70 sm:scale-90">
            <div className="relative">
              <PlayingCard suit={Suit.Clubs} rank={Rank.King}  />
            </div>
            <div className="relative -mt-10 md:-mt-24">
              <PlayingCard suit={Suit.Hearts} rank={Rank.Nine}  />
            </div>
            <div className="relative -mt-10 md:-mt-24">
              <PlayingCard suit={Suit.Spades} rank={Rank.Three}  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
