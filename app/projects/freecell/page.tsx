import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FreecellPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="uppercase-overline mb-4">AI Coding Experiment</p>
          <h1 className="mb-4 text-3xl font-light tracking-editorial md:text-4xl lg:text-5xl">
            Freecell Card Game
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            A classic Freecell solitaire game built with React/TypeScript, and
            Cursor AI.
          </p>
          <Button asChild>
            <Link
              href={"/projects/my-friends-art"}
              className="inline-flex items-center gap-2 group"
            >
              Play the Game
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-border px-6 py-16 md:py-20 lg:px-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-light tracking-editorial md:text-3xl">
            Back Story
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This project started in 2024, before AI coding assistants became
              wide-spread. I started playing Freecell in my spare time, and
              realized that coding a version of the game would be the perfect
              technical and logical challenge for me.
              <br /> <br /> I started designing it step-by-step, I built a
              full-stack web application from scratch
              (PostGreSQL/Django/GraphQL/React). I meticulously designed all the
              database models myself, and got to the point (after 2 days) where
              I was able to call a GraphQL mutation to create a new game.
              <br /> <br /> At this point, I became absorbed with work, and the
              project was put on hold. Fast-forward to 2026, I decided to
              finally finish the game. At this point, Cursor had taken over the
              dev community, and building applications from scratch was simply
              the slow way to work.
              <br /> <br /> I was skeptical of Cursor at the time, so I decided
              to let it build the project for me and see for myself what all the
              hype was about.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border px-6 py-16 md:py-20 lg:px-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-light tracking-editorial md:text-3xl">
            Coding with AI
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Since I had already started building the game before, I knew the
              general logic that was required to create and set up a Freecell
              game. I decided to build it on the frontend only (no database),
              since this had turned into an experiment to see how Cursor could
              handle complex logic. <br /> I started by giving Cursor small,
              well-defined tasks to see how it handled them. I checked the
              generated code thoroughly and weighed it against what I would have
              done. The majority of the time, it passed my expectations.
              <br /> <br />
              In one hour, it had generated all the code necessary to create a
              deck of cards, shuffle them, organize them into 8 piles, and
              display the cards on the tableau. The code was clean,
              strongly-typed, and well-documented. I had to give it a few
              screenshots to adjust the positioning of the cards, but otherwise,
              it performed extremely well.
              <br /> <br />
              When it came to code the interaction, I started to notice a few
              quirks. It was having trouble calculating the logic behind whether
              a card or sequence of cards could be placed on a tableau pile.
              After Cursor tried and failed several times, I stepped in and
              looked closer at what it was doing. The code had gotten very
              messy, and after reading it I saw that it was making some very
              incorrect logical errors. The system that it had built was flawed,
              and instead of stepping back and evaluating the system, it tried
              to fix individual bugs one on top of the other. In each iteration,
              it added more code, causing more confusion and more bugs. I
              finally had to step in and write the logic myself. After I gave it
              a nudge in the right direction, it knew exactly what to do.
            </p>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="border-t border-border px-6 py-16 md:py-20 lg:px-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-light tracking-editorial md:text-3xl">
            Takeaways
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <ol>
              <li className="text-foreground">
                <strong>1. Design the system in your head first.</strong>
                <p>
                  It is so easy to sit back and give AI autonomy. More often
                  than not, it <em>will</em> find a way to make your project
                  work, no matter what kind of coding sacrilege it has to
                  commit. If you are not following along with what it&apos;s
                  doing, you may end up with a working application, but the code
                  will be an absolute abomination. Ultimately, this will cause
                  more trouble in the long run.
                  <br />
                  <span className="text-primary font-semibold">
                    Make sure you know the implementation plan. Use AI to
                    brainstorm if necessary, but when it comes to actual coding,
                    you control the process.
                  </span>
                </p>
              </li>
              <li className="text-foreground mt-6">
                <strong>
                  2. When it comes to important logic, give it small,
                  incremental tasks.
                </strong>
                <p>
                  I have found by trial and error that in order to prevent AI
                  from coding off the rails, it needs step-by-step instructions.
                  There are some tasks that are simply too large for it to
                  handle, and there are some layers of abstraction that seem to
                  be unreachable for it at this point in time.
                  <br />
                  <span className="text-primary font-semibold">
                    Come up with a rough plan in your head, and then give it
                    small, incremental tasks to achieve that goal. I have found
                    that it works exceptionally well when used in this way.
                  </span>
                </p>
              </li>
              <li className="text-foreground mt-6">
                <strong>3. Ask it to audit your code.</strong>
                <p>
                  This approach can be extremely useful when you want to find
                  logical or performance-related bugs hiding in your code. You
                  don&apos;t know what you don&apos;t know, but lucky for us, AI
                  knows everything about everything. Giving it such a simple and
                  well-defined task can open your eyes to coding patterns you
                  never knew existed, old habits that you didn&apos;t realize
                  were problematic, or just simple human-errors that you have
                  overlooked.
                  <br />
                  <span className="text-primary font-semibold">
                    Ask it for suggestions, then do your research on what it
                    gives back. This is a great way to ensure that you continue
                    to grow as a developer.
                  </span>
                </p>
              </li>
              <li className="text-foreground mt-6">
                <strong>4. Use rules.</strong>
                <p>
                  When given a page or a component to build, AI will play fast
                  and loose with custom colours, styles, and interaction
                  patterns. So many times I have had to manually remove a
                  pattern that creates inconsistency in the codebase. This can
                  be solved by creating simple rules: Always stick to the design
                  tokens. Never use custom styles. Use wrapper components
                  instead of base components. Don&apos;t override typography
                  sizes. These kinds of things will save you a lot of time and
                  effort.
                  <br />
                  <span className="text-primary font-semibold">
                    Come up with a set of foundational rules, and stick to them.
                  </span>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
