import Image from "next/image";
import Link from "next/link";
import { BookOpen, Palette, Sparkles } from "lucide-react";
import AboutHero from "@/components/AboutHero";
import AboutImageCarousel from "@/components/AboutImageCarousel";
import FadeUpSection from "@/components/FadeUpSection";

export const metadata = {
  title: "About | Lindsey Bellman",
  description: "Learn more about Lindsey Bellman — story, values, and vision.",
};

const FREE_TIME_SECTIONS = [
  {
    title: "Books",
    icon: <div>📚</div>,
    items: [
      { title: "Ishmael", author: "Daniel Quinn" },
      { title: "Godel, Escher, Bach", author: "Douglas Hofstadter" },
      { title: "Educated", author: "Tara Westover" },
      { title: "A Room of One's Own", author: "Virginia Woolf" },
      { title: "Piranesi", author: "Susanna Clarke" },
      { title: "Coders", author: "Clive Thompson" },
    ],
  },
  {
    title: "Hobbies",
    icon: <div>🎨</div>,
    items: [
      "Music production (songwriting, recording, producing)",
      "Hiking/camping",
      "Painting (acrylic, digital, watercolor)",
      "Jazz piano",
      "Gardening",
    ],
  },
  {
    title: "Interests",
    icon: <div>✨</div>,
    items: [
      "Theoretical physics",
      "Astronomy",
      "Music theory",
      "Philosophy",
      "Greek mythology",
      "Ancient civilizations",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-background pb-16">
      <AboutHero />

      {/* My story — image left, text right */}
      <FadeUpSection
        id="my-story"
        aria-labelledby="my-story-heading"
        className="border-t border-border px-6 py-16 md:py-20 lg:px-12"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 md:items-center">
          <div>
            <h2
              id="my-story-heading"
              className="mb-6 text-2xl font-light tracking-editorial md:text-3xl"
            >
              My Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I was first introduced to coding in University, where I majored
                in Music and Computer Science. The Computer Science part was
                more of a curiosity, but I quickly discovered that coding was a
                perfect fit for me. It combined the creative and logical sides
                of my brain in a way that was both challenging and supremely
                satisfying.
                <br />
                <br />
                The music side of my degree was a perfect compliment. I studied
                digital signal flow, audio engineering, and music production.
                While these are different disciplines, they share common
                principles with coding; the art of critical problem solving,
                following a thread deep into a complex system, finding the
                balance between form and function, and most importantly, the
                ability to zoom out and see the big picture. As a result of all
                these experiences,{" "}
                <span className="font-semibold text-primary">
                  I maintain a deep respect for the art of designing and
                  building a system, and this sentiment pervades everything I
                  do.
                </span>
              </p>
            </div>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-muted">
            <Image
              src="/about/paris-conference.webp"
              alt="Paris conference"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </FadeUpSection>

      {/* My values — image right, text left */}
      <FadeUpSection
        id="my-values"
        aria-labelledby="my-values-heading"
        className="border-t border-border px-6 py-16 md:py-20 lg:px-12"
        delayMs={100}
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 md:items-center">
          <div className="order-2 md:order-1">
            <h2
              id="my-values-heading"
              className="mb-6 text-2xl font-light tracking-editorial md:text-3xl"
            >
              My Values
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                It is deeply important to me to be a part of something that
                brings good into the world. As a software engineer, you can
                choose from every industry under the sun, but at the end of the
                day{" "}
                <span className="font-semibold text-primary">
                  I want to know that I am building something with real-world
                  impact.
                </span>{" "}
                As a result of this, I am drawn to industries like healthcare,
                sustainability, education, and community development.
              </p>
              <p>
                It is also important to me to be a part of a team that shares my
                values. When I think of my ideal team, I see a group of
                deep-thinkers. Calm, respectful, friendly, and imaginative.
                People who I can make real, intellectual connections with, and
                who create space in the room for everyone to share their ideas.
              </p>
            </div>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-muted">
            <Image
              src="/about/horse.webp"
              alt="Paris conference"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </FadeUpSection>

      {/* My vision — image above (full width), then text */}
      <FadeUpSection
        id="my-vision"
        aria-labelledby="my-vision-heading"
        className="border-t border-border px-6 py-16 md:py-20 lg:px-12"
        delayMs={150}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="my-vision-heading"
              className="mb-6 text-2xl font-light tracking-editorial md:text-3xl"
            >
              My Vision
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I see myself wearing many hats in my career. I am a professional
                software engineer, but I am also an artist, a writer, a
                musician, and a visionary, and all of these qualities have
                something valuable to contribute. No matter the domain,
                creativity is the bottom-line, and I learn lessons in each of
                them that apply to all other aspects of my life.
              </p>
              <p>
                I see myself thriving as the leader of a small, creative team
                building something meaningful and impactful. I also see myself
                succeeding as an independent engineer, owning the evolution of a
                large, intelligent system. The actual position does not matter
                to me as much as the opportunity to learn, to contribute, and to
                collaborate with like-minded people.
              </p>
              <p>
                If these values resonate with you, please reach out. I am always
                open to new opportunities.
              </p>
            </div>
          </div>
        </div>
      </FadeUpSection>

      {/* In My Free Time */}
      <FadeUpSection
        id="in-my-free-time"
        aria-labelledby="in-my-free-time-heading"
        className="border-t border-border px-6 py-16 md:py-20 lg:px-12"
        delayMs={100}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="in-my-free-time-heading"
            className="mb-10 text-center text-2xl font-light tracking-editorial md:mb-12 md:text-3xl"
          >
            In My Free Time
          </h2>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {FREE_TIME_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    {Icon}

                    <h3 className="text-lg font-semibold text-secondary">
                      {section.title}
                    </h3>
                  </div>
                  <ul
                    className="space-y-2 text-sm text-muted-foreground leading-relaxed"
                    role="list"
                  >
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden
                        />
                        {typeof item === "string" ? (
                          item
                        ) : (
                          <span>
                            <em>{item.title}</em> - {item.author}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </FadeUpSection>

      {/* Scrolling images + thumbnails */}
      <FadeUpSection as="div" className="border-t border-border" delayMs={200}>
        <AboutImageCarousel />
      </FadeUpSection>

      <div className="h-32" />
      {/* Footer text image */}
      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden px-8 opacity-[0.05]" aria-hidden>
        <Image
          src="/footer-text.svg"
          alt=""
          width={1920}
          height={120}
          className="h-auto w-full object-cover object-center"
          sizes="100vw"
        />
      </div>
    </main>
  );
}
