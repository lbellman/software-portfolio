"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FlatTestimonial from "@/components/FlatTestimonial";

const sectionId = "experience";

const carouselItems = [
  {
    testimonial: {
      quote:
        "Lindsey sees the intricacies of product, and designs thoughtful working solutions to accommodate for the best user experience. I've used the interfaces Lindsey built firsthand, and they were functional, intuitive, and presentation-ready from the very first iteration.",
      name: "Daria Bogatyreva",
      title: "Impact Analyst • EmitIQ",
      highlight:
        "functional, intuitive, and presentation-ready from the very first iteration",
    },
    experience: {
      role: "Senior Frontend Engineer",
      company: "EmitIQ",
      period: "2024 – 2025",
      highlights: [
        "Led architectural decisions for a large-scale Next.js 15 application, ensuring scalability, maintainability, and performance across rapid feature growth",
        "Translated high-level business requirements into clear technical plans, communicating through issue tickets, milestones, and delivery timelines",
        "Designed and implemented a scalable React design system used across 100+ components, improving UI consistency and reducing rework",
        "Collaborated closely with backend engineers to design API structure and ensure reliable integration between frontend and backend",
        "Mentored developers through code reviews and architectural discussions, elevating team-wide engineering standards",
      ],
    },
  },
  {
    testimonial: {
      quote:
        "Lindsey is smart, creative, insightful, and hard working. She joined us on a temporary contract that I would have gladly extended had she not had other plans. Even though she had never worked in a C++ MFC environment, she caught on very quickly and was surprisingly productive in a very short time. The senior developers were very impressed.",
      name: "Laurie Weston",
      title: "CEO • Sound QI",
      highlight:
        "she caught on very quickly and was surprisingly productive in a very short time",
    },
    experience: {
      role: "C++ Developer",
      company: "Sound QI",
      period: "Contract",
      highlights: [
        "Ramped up quickly in a C++ MFC codebase with no prior experience",
        "Delivered regular UI enhancements and backend logic improvements across the application",
        "Worked directly with a senior developer to translate designs and verbal requirements into reliable, production-ready C++ code",
        "Worked within a large, legacy C++ codebase, navigating complex data structures and domain-specific logic while maintaining production stability",
      ],
    },
  },
  {
    testimonial: {
      quote:
        "Lindsey's ability to communicate her understanding of requirements with clarity was a blessing to our entire team; she has a knack for achieving and confirming alignment by eliminating ambiguity and misunderstandings.",
      name: "Ken Henderson",
      title: "Senior Software Engineer • Natureblocks",
      highlight: "blessing to our entire team",
    },
    experience: {
      role: "Lead Frontend Developer",
      company: "Natureblocks",
      period: "2023 - 2024",
      highlights: [
        "Guided technical design decisions while contributing hands-on across frontend and backend feature development",
        "Translated high-level business requirements into scoped technical plans, breaking work into structured milestones and clearly documented issue tickets",
        "Mentored 2 developers through code reviews, architectural discussions, and structured feedback, improving overall code quality and consistency",
        "Developed and maintained an internal MUI-based design system that standardized UI patterns and reduced frontend rework",
      ],
    },
  },
  {
    testimonial: {
      quote:
        "Lindsey didn't just grow into the job; she blew past every milestone we set for her. She started as a junior frontend dev and worked her way up to becoming a powerhouse senior full-stack engineer. In a startup, you need people who can handle chaos and learn on the fly, and Lindsey is exactly that.",
      name: "Ryan Lider",
      title: "CTO • Natureblocks",
      highlight: "she blew past every milestone we set for her",
    },
    experience: {
      role: "Junior Frontend Developer",
      company: "Natureblocks",
      period: "2022 - 2023",
      highlights: [
        "Rapidly advanced from Junior to Lead by demonstrating strong architectural thinking and leadership skills.",
        "Worked under direct mentorship from the CTO, gaining early exposure to product  strategy, technical best-practices, and real-world engineering scenarios",
        "Took ownership of building and maintaining a Storybook library of 30+ components, laying the foundation for React component documentation",
        "Took ownership of architecture and design decisions as scope and responsibility expanded",
      ],
    },
  },
];

export default function ExperienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = carouselItems.length;

  const scrollToIndex = useCallback(
    (index: number) => {
      const i = Math.max(0, Math.min(index, totalSlides - 1));
      setCurrentIndex(i);
      const el = scrollRef.current;
      if (!el) return;
      const slideWidth = el.offsetWidth;
      el.scrollTo({ left: i * slideWidth, behavior: "smooth" });
    },
    [totalSlides],
  );

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.offsetWidth;
    const index = Math.round(el.scrollLeft / slideWidth);
    const clamped = Math.max(0, Math.min(index, totalSlides - 1));
    setCurrentIndex(clamped);
  }, [totalSlides]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      id={sectionId}
      aria-labelledby="experience-heading"
      className="w-full overflow-hidden py-16 sm:py-20 md:py-24 max-w-7xl mx-auto"
    >
      <h2
        id="experience-heading"
        className="mb-10 px-6 text-center tracking-widest text-secondary font-normal md:mb-12"
      >
        Experience
      </h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth pb-4 md:pb-6 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Experience and testimonials carousel"
        >
          {carouselItems.map((item, index) => (
            <article
              key={index}
              className="grid w-full shrink-0 snap-start snap-always grid-cols-1 gap-8 px-6 md:grid-cols-2 md:gap-10 md:px-10"
              style={{ scrollSnapAlign: "start" }}
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${totalSlides}`}
            >
              {/* Testimonial - left */}
              <FlatTestimonial
                quote={item.testimonial.quote}
                name={item.testimonial.name}
                title={item.testimonial.title}
                highlight={item.testimonial.highlight}
                size="small"
              />

              {/* Experience card - right */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-foreground">
                    {item.experience.role}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {item.experience.period}
                  </span>
                </div>
                <p className="mb-4 text-secondary">{item.experience.company}</p>
                <ul className="space-y-2 text-sm text-foreground" role="list">
                  {item.experience.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Next / Prev */}
        <div className="flex justify-center gap-4 px-6 pt-2">
          <button
            type="button"
            onClick={() => scrollToIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(currentIndex + 1)}
            disabled={currentIndex === totalSlides - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Progress dots */}
        <div
          className="flex justify-center gap-2 px-6 pt-6"
          role="tablist"
          aria-label="Slide navigation"
        >
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
