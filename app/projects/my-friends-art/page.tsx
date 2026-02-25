import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProgressAndPlanningSection from "@/components/ProgressAndPlanningSection";

/** Paste your Figma prototype or design link here (e.g. from Share → Copy link) */
const FIGMA_PROTOTYPE_URL =
  "https://www.figma.com/proto/wRrelj2lS04Bm5VrOwfsm7/My-Friend-s-Art?node-id=1-3&t=u70NkSjjtAkur4yS-1";

const primaryPinkBg = "#ffe6ea";
const primaryPinkText = "#EDABB6";
const primaryPinkForeground = "#811842";

export default function MyFriendsArtPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: primaryPinkBg }}
    >
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 overflow-hidden">
          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <div className="flex flex-col items-center justify-center gap-8">
              <Image
                src="/my-friends-art/logo-small.webp"
                alt="My Friend's Art"
                width={160}
                height={160}
                className="h-20 md:h-30 object-contain animate-fade-up opacity-0"
                style={{ animationDelay: "200ms" }}
                priority
              />
              <Image
                src="/my-friends-art/title.svg"
                alt="My Friend's Art wordmark"
                width={320}
                height={96}
                className="h-16 sm:h-20 md:h-24 w-auto mx-auto object-contain opacity-0  rounded-sm py-2 px-4 animate-fade-up"
                style={{
                  animationDelay: "200ms",
                  backgroundColor: primaryPinkText,
                }}
                priority
              />

              <p
                className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
                style={{ animationDelay: "400ms" }}
              >
                My Friend&apos;s Art is a{" "}
                <span
                  className="font-medium "
                  style={{ color: primaryPinkForeground }}
                >
                  full-stack e-commerce platform
                </span>{" "}
                for showcasing and selling art prints from independent artists.
                This application is built on a React, Typescript, Tailwind
                Frontend, and a Supabase backend with a Stripe integration to
                handle payments.
              </p>
              <Button asChild className="mt-2">
                <Link
                  href={"https://myfriendsart.ca"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 opacity-0 animate-fade-up text-white font-semibold"
                  style={{
                    animationDelay: "500ms",
                    backgroundColor: primaryPinkText,
                  }}
                >
                  myfriendsart.ca
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <div
                className="flex flex-wrap items-center justify-center gap-6 mt-4 opacity-0 animate-fade-up"
                style={{ animationDelay: "600ms" }}
              >
                <Link
                  href="https://github.com/lbellman/my-friends-art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                  style={{ color: primaryPinkForeground }}
                >
                  <Image
                    src="/github-logo.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                  GitHub
                </Link>
                <Link
                  href="https://www.figma.com/design/wRrelj2lS04Bm5VrOwfsm7/My-Friend-s-Art?node-id=23-691&t=MZ64ZTwSrVYanSp8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                  style={{ color: primaryPinkForeground }}
                >
                  <Image
                    src="/figma-logo.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                  Figma
                </Link>
                <Link
                  href="https://my-friends-art-git-7-storybook-e11211-lindsey-bellmans-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                  style={{ color: primaryPinkForeground }}
                >
                  <Image
                    src="/storybook-logo.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                  Storybook
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* My Friend's Art collage */}
        <section className="w-full flex justify-center px-6 lg:px-12">
          <div className="w-full max-w-[70%] overflow-hidden">
            <Image
              src="/my-friends-art/collage.webp"
              alt="My Friend's Art — marketplace collage"
              width={1600}
              height={900}
              className="w-full h-auto object-cover object-center"
              sizes="(min-width: 1280px) 70vw, (min-width: 768px) 80vw, 100vw"
            />
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 lg:py-28 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light tracking-editorial text-foreground mb-6">
                Affordable and Meaningful Art
              </h2>

              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a hobby artist. I paint and sketch in all mediums, and I
                  often gift my work to friends and family. I am also blessed
                  with many talented friends who&apos;s art I have hanging all
                  over my house. My Friend&apos;s Art began as a personal
                  marketplace to showcase my own work and maybe sell a print or
                  two, but after a few weeks I realized it could be so much more
                  than that.
                </p>
                <p>
                  I have so many incredible friends who create art only for
                  themselves and select friends and family. Beautiful,
                  compelling pieces that resulted from paint nights, afternoons
                  at the park, and just general creativity. These talented
                  individuals might never consider themselves artists, and yet{" "}
                  <span
                    className="font-medium "
                    style={{ color: primaryPinkForeground }}
                  >
                    I would pay to have their art in my home.
                  </span>
                </p>
                <p>
                  The goal is simple: Create a community where anyone can
                  showcase and sell their work, make it easy for people to
                  purchase meaningful art that was made by a human, and keep the
                  process{" "}
                  <span
                    className="font-medium"
                    style={{ color: primaryPinkForeground }}
                  >
                    affordable, friendly, and transparent.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Progress & Planning — GitHub issues & milestones. Set GITHUB_REPO or GITHUB_REPO_MFA in .env.local (e.g. owner/repo). */}
        <ProgressAndPlanningSection
          repo={process.env.GITHUB_REPO_MFA ?? process.env.GITHUB_REPO}
          accentColor={primaryPinkForeground}
        />

        {/* Figma prototype embed */}
        <section className="py-20 lg:py-28 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
            <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-light tracking-editorial text-foreground mb-8">
              <Image
                src="/figma-logo.svg"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              Figma Prototype
            </h2>
            <div className="relative w-full overflow-hidden rounded-lg border border-border bg-muted/30">
              <div className="aspect-video w-full">
                <iframe
                  title="My Friend's Art — Figma prototype"
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(FIGMA_PROTOTYPE_URL)}`}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sombrio image + Problem, Constraints & Design Goals — 2 cols on large, stacked on small */}
        <section className="py-20 lg:py-28 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-8 order-1">
              <h2 className="text-3xl md:text-4xl font-light tracking-editorial text-foreground">
                Constraints & Design Goals
              </h2>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-3">
                    Problem
                  </h3>
                  <p>
                    Independent and hobby artists often lack a dedicated,
                    low-friction way to showcase and sell their work. Building a
                    custom storefront from scratch is out of reach for many, and
                    marketing yourself as an artist is a full-time job.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light text-foreground mb-3">
                    Constraints
                  </h3>
                  <p>
                    The solution had to be maintainable by a solo developer,
                    cost-effective to run, and flexible enough to support
                    multiple artists and product types without becoming overly
                    complex. Performance and accessibility were non-negotiable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light text-foreground mb-3">
                    Design Goals
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground">
                    <li className="text-base">
                      Focus on the artwork first—clean layouts, intuitive
                      design, minimal clutter.
                    </li>
                    <li className="text-base">
                      Make checkout and order fulfillment straightforward and
                      transparent.
                    </li>
                    <li className="text-base">
                      Create a simple path to sales, but don&apos;t make that
                      the only focus.
                    </li>
                    <li className="text-base">
                      Feel friendly and casual, like a local art gallery. Never
                      pressuring people to spend money.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden rounded-lg order-2">
              <Image
                src="/my-friends-art/moss-rocks.webp"
                alt="Sombrio"
                width={1600}
                height={900}
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Engineering — full-width card */}
        <section className="py-20 lg:py-28 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-xl  bg-white/80 backdrop-blur-sm p-8 shadow-sm md:p-10">
              <h2 className="text-3xl md:text-4xl font-light tracking-editorial text-foreground mb-4">
                Engineering
              </h2>
              <div className="flex flex-wrap items-center gap-8 mb-8">
                <Image
                  src="/react-logo.png"
                  alt="React"
                  width={64}
                  height={64}
                  className="h-8 w-8 object-contain md:h-14 md:w-18"
                />
                <Image
                  src="/supabase-logo.svg"
                  alt="Supabase"
                  width={64}
                  height={64}
                  className="h-10 w-20 object-contain md:h-14 md:w-24"
                />
                <Image
                  src="/tailwind-logo.svg"
                  alt="Tailwind CSS"
                  width={64}
                  height={64}
                  className="h-10 w-24 object-contain md:h-14 md:w-26"
                />
                <Image
                  src="/stripe-logo.svg"
                  alt="Stripe"
                  width={64}
                  height={64}
                  className="h-10 w-20 object-contain md:h-14 md:w-14"
                />
              </div>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  The marketplace is built with{" "}
                  <span
                    className="font-medium "
                    style={{ color: primaryPinkForeground }}
                  >
                    React
                  </span>{" "}
                  and{" "}
                  <span
                    className="font-medium "
                    style={{ color: primaryPinkForeground }}
                  >
                    TypeScript
                  </span>{" "}
                  for the frontend, with{" "}
                  <span
                    className="font-medium "
                    style={{ color: primaryPinkForeground }}
                  >
                    Stripe
                  </span>{" "}
                  for payments and{" "}
                  <span
                    className="font-medium "
                    style={{ color: primaryPinkForeground }}
                  >
                    Supabase
                  </span>{" "}
                  for auth, and database.
                </p>
                <p>
                  <span className="font-medium text-primary-foreground">
                    Design system strategy:
                  </span>{" "}
                  Defining a small, consistent set of tokens keeps the UI
                  cohesive without getting too complex or heavy. Components are
                  built to work across all pages, keeping a simple, clean, and
                  intuitive identity across the site. Overrides are kept to a
                  minimum, and only applied where the page needs its own
                  identity.
                </p>
                <p>
                  All images are stored in WebP format to keep pages fast and
                  images sharp across devices. The product and checkout flows
                  are structured so we can add more artists and product types
                  over time without large rewrites. The database is structured
                  for scalability, and eventual admin and analytics pages as the
                  site grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Birdy image + Future Vision — 2 cols on large (birdy left), stacked on small */}
        <section className="py-20 lg:py-28 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="w-full overflow-hidden rounded-lg order-1">
              <Image
                src="/my-friends-art/mountain.webp"
                alt="Birdy"
                width={1600}
                height={900}
                className="w-full h-auto object-cover object-center"
              />
            </div>
            <div className="space-y-8 order-2">
              <h2 className="text-3xl md:text-4xl font-light tracking-editorial text-foreground">
                Future Vision
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  The goal is to grow My Friend&apos;s Art into a true
                  community. Rather than focusing on how to make the most money,
                  the goal is to give everyone a place to appreciate and support
                  their friends, especially the ones who are still strangers.
                </p>
                <p>
                  The planned direction is an artist-first experience. Artists
                  should be able to easily manage their profiles, inventory, and
                  personality on the site. Buyers can leave reviews or simply
                  comment on the piece without having to buy it.
                </p>
                <p>
                  I would also love to explore in-person events, collaborations,
                  and popups. Offering physical spaces for artists on the
                  platform to meet each other through night markets, paint
                  nights, and any other creative gatherings.
                </p>
                <p>
                  Long term, the platform should feel like the default place for
                  people in the community to find and support local art, while
                  staying simple enough to maintain and evolve without a large
                  team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
