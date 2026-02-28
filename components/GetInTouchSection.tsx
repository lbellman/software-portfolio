"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import Image from "next/image";
import Link from "next/link";

const sectionId = "get-in-touch";

const contact = {
  email: "bellmanlindsey@gmail.com",
  linkedin: "https://www.linkedin.com/in/lindsey-bellman-7a03341b7/",
  github: "https://github.com/lbellman",
};

export default function GetInTouchSection() {
  const { ref: sectionRef, isVisible } = useFadeUp();
  return (
    <section
      ref={sectionRef}
      id={sectionId}
      aria-labelledby="get-in-touch-heading"
      className="relative flex min-h-screen w-full items-center justify-center"
    >
      <div
        className={`flex w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 py-16 md:flex-row md:gap-6 md:py-20 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-5"}`}
      >
        {/* Square headshot with rounded edges */}
        <div aria-hidden="true" className="shrink-0">
          <div className="relative aspect-square w-64 overflow-hidden rounded-xl border-4 border-border bg-card shadow-md md:w-80">
            <Image
              src="/about/headshot.webp"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 320px, 256px"
              priority
            />
          </div>
        </div>

        {/* Contact info card */}
        <div className="w-full shrink-0 md:max-w-md">
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm md:p-10">
            <h2
              id="get-in-touch-heading"
              className="mb-2 tracking-widest text-secondary font-normal"
            >
              Get In Touch
            </h2>
            <p className="mb-8 text-sm text-muted-foreground">
              I’d love to connect and talk about how we can build something
              meaningful together.
            </p>

            <ul className="flex flex-col gap-5 text-foreground" role="list">
            <li>
              <Link
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-base transition-colors hover:text-primary md:text-lg"
              >
                <Image
                  src="/gmail-logo.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-4 w-4 shrink-0 object-contain md:h-5 md:w-5"
                />
                <p className="hover:text-primary text-sm transition-colors">
                  {contact.email}
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-base transition-colors hover:text-primary md:text-lg"
              >
                <Image
                  src="/linkedin-logo.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-4 w-4 shrink-0 object-contain md:h-5 md:w-5"
                />
                <p className="hover:text-primary transition-colors text-sm">
                  LinkedIn
                </p>
              </Link>
            </li>
            <li>
              <Link
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-base transition-colors hover:text-primary md:text-lg"
              >
                <Image
                  src="/github-logo.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-4 w-4 shrink-0 object-contain md:h-5 md:w-5"
                />
                <p className="hover:text-primary text-sm transition-colors">
                  GitHub
                </p>
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </div>

      {/* Full-width footer text image at bottom of section */}
      <div className="absolute bottom-0 left-1/2 w-screen opacity-[0.05] px-8 -translate-x-1/2 overflow-hidden">
        <Image
          src="/footer-text.svg"
          alt=""
          width={1920}
          height={120}
          className="w-full h-auto object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
      </div>
    </section>
  );
}
