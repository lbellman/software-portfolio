import Image from "next/image";

const whoIAmId = "who-i-am";

const architectBullets = [
  "Think in abstractions, see the big picture",
  "Build smart, elegant, and durable systems",
  "Alway ask why, not just what",
  "Prioritize clarity, consistency, and a foundation for growth",
  "Build for the future and for other developers",
];

const stewardBullets = [
  "Improve the system quietly over time",
  "Write clean, organized, maintainable code",
  "Mentor engineers in systems thinking, not just bandaid fixes",
  "Prioritize accessibility, approachability, and trust",
  "Elevate the team with humility and respect",
];

export default function WhoIAmSection() {
  return (
    <section
      id={whoIAmId}
      aria-labelledby="who-i-am-heading"
      className="w-full px-6 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="who-i-am-heading"
          className="mb-3 tracking-widest text-secondary font-normal"
        >
          Who I Am
        </h2>
        <p className="mx-auto text-lg max-w-2xl text-muted-foreground">
          My core values can be distilled into two archetypes.
        </p>
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-5xl gap-8 sm:gap-10 md:grid-cols-2 md:mt-12">
        <article
          className="rounded-xl border border-border bg-card overflow-hidden shadow-sm"
          aria-labelledby="architect-title"
        >
          <div className="relative mx-auto aspect-4/3 w-2/3 translate-y-[10px] -translate-x-[10px] overflow-hidden">
            <Image
              src="/the-architect.webp"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="p-6 sm:p-8 sm:pt-6">
          <h3
            id="architect-title"
            className="mb-2 font-semibold text-secondary"
          >
            The Architect
          </h3>
          <p className="mb-6 text-muted-foreground">
            Builds systems that scale.
          </p>
          <ul className="space-y-3 text-sm text-foreground">
            {architectBullets.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          </div>
        </article>

        <article
          className="rounded-xl border border-border bg-card overflow-hidden shadow-sm"
          aria-labelledby="steward-title"
        >
          <div className="relative mx-auto -translate-x-[10px] translate-y-[10px] aspect-4/3 w-2/3 overflow-hidden">
            <Image
              src="/the-steward.webp"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="p-6 sm:p-8 sm:pt-6">
            <h3 id="steward-title" className="mb-2 font-semibold text-secondary">
              The Steward
            </h3>
            <p className="mb-6 text-muted-foreground">
              Protects the integrity of the system.
            </p>
            <ul className="space-y-3 text-sm text-foreground" role="list">
              {stewardBullets.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
