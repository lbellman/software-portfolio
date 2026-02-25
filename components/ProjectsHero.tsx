export default function ProjectsHero() {
  return (
    <section
      aria-labelledby="projects-hero-heading"
      className="flex w-full items-center justify-center px-6 min-h-screen "
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1
          id="projects-hero-heading"
          className="mb-4 tracking-widest text-secondary font-normal"
        >
          Projects
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          Selected work and case studies—systems built with clarity and
          long-term impact in mind.
        </p>
      </div>
    </section>
  );
}
