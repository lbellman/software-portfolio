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
              <PlayingCard suit={Suit.Hearts} rank={Rank.Queen} />
            </div>
            <div className="relative -mt-10 md:-mt-24">
              <PlayingCard suit={Suit.Spades} rank={Rank.Eight} />
            </div>
            <div className="relative -mt-10 md:-mt-24">
              <PlayingCard suit={Suit.Diamonds} rank={Rank.Four} />
            </div>
          </div>
        </div>

        {/* 2. Title / description / button column */}
        <div className="flex w-full max-w-3xl flex-2 flex-col items-center text-center">
          <p className="uppercase-overline mb-6">AI Coding Experiment</p>
          <h2 className="mb-6 text-4xl font-light tracking-wider md:text-5xl">
            Freecell Card Game
          </h2>
          <div className="mb-6 flex items-center justify-center gap-8">
            <Image
              src="/cursor-logo.svg"
              alt="Cursor"
              width={64}
              height={64}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
            />
            <Image
              src="/react-logo.png"
              alt="React"
              width={64}
              height={64}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
            />
            <Image
              src="/tailwind-logo.svg"
              alt="Tailwind CSS"
              width={64}
              height={64}
              className="h-14 w-24 object-contain sm:h-16 sm:w-28 md:h-20 md:w-32"
            />
          </div>
          <p className="mb-8 px-6 ">
            A classic FreeCell solitaire game built with React/TypeScript and
            Cursor AI. The goal was to experiment with AI-assisted development,
            learn how best to use it, and document where it speed up or slows
            down the development process.
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
              <PlayingCard suit={Suit.Clubs} rank={Rank.King} />
            </div>
            <div className="relative -mt-10 md:-mt-24">
              <PlayingCard suit={Suit.Hearts} rank={Rank.Nine} />
            </div>
            <div className="relative -mt-10 md:-mt-24">
              <PlayingCard suit={Suit.Spades} rank={Rank.Three} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
