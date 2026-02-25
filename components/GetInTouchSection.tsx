import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

const sectionId = "contact";

const contact = {
  email: "bellmanlindsey@gmail.com",
  linkedin: "https://linkedin.com/in/lindseybellman",
  github: "https://github.com/lbellman",
};

export default function GetInTouchSection() {
  return (
    <section
      id={sectionId}
      aria-labelledby="get-in-touch-heading"
      className="flex min-h-screen w-full flex-col md:flex-row"
    >
      {/* Left: space for image */}
      <div
        aria-hidden="true"
        className="min-h-[240px] w-full flex-1 bg-muted/30 md:min-h-0"
      />

      {/* Right: contact info */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 md:py-20">
        <div className="w-full max-w-md">
          <h2
            id="get-in-touch-heading"
            className="mb-10 tracking-widest text-secondary font-normal md:mb-12"
          >
            Get In Touch
          </h2>

          <ul
            className="flex flex-col gap-6 text-foreground"
            role="list"
          >
            <li>
              <Link
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-lg transition-colors hover:text-primary md:text-xl"
              >
                <Mail className="h-6 w-6 shrink-0 md:h-7 md:w-7" />
                <span>{contact.email}</span>
              </Link>
            </li>
            <li>
              <Link
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg transition-colors hover:text-primary md:text-xl"
              >
                <Linkedin className="h-6 w-6 shrink-0 md:h-7 md:w-7" />
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg transition-colors hover:text-primary md:text-xl"
              >
                <Github className="h-6 w-6 shrink-0 md:h-7 md:w-7" />
                <span>GitHub</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
