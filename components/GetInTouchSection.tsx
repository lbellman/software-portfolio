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
      className="relative flex min-h-screen w-full flex-col md:flex-row"
    >
      <div
        className={`flex flex-1 w-full flex-col md:flex-row ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-5"}`}
      >
      {/* Left: illustration */}
      <div
        aria-hidden="true"
        className="relative min-h-[260px] w-full flex-1 md:min-h-0"
      >
        <Image
          src="/get-in-touch.webp"
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </div>

      {/* Right: contact info card */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 md:py-20">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm md:p-10">
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
