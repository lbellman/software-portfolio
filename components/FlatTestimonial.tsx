import { Quote } from "lucide-react";

export type FlatTestimonialSize = "default" | "small";

export type FlatTestimonialProps = {
  quote: string;
  name: string;
  title: string;
  highlight?: string;
  size?: FlatTestimonialSize;
  /** Use when the testimonial sits on a primary background so text uses primary-foreground */
  onPrimaryBackground?: boolean;
};

const sizeStyles = {
  default: {
    blockquote: "py-4 pl-14 md:py-8 md:pl-20",
    icon: "left-4 top-4 h-16 w-16 text-primary opacity-30 md:h-20 md:w-20",
    iconOnPrimary:
      "left-4 top-4 h-16 w-16 text-primary-foreground/30 md:h-20 md:w-20",
    quote:
      "text-lg font-medium leading-relaxed text-muted-foreground md:text-xl lg:text-3xl",
    quoteOnPrimary:
      "text-lg font-medium leading-relaxed text-primary-foreground md:text-xl lg:text-3xl",
    footer: "mt-6",
    title: "text-muted-foreground",
    titleOnPrimary: "text-primary-foreground/80",
  },
  small: {
    blockquote: "py-2 pl-10 md:py-4 md:pl-12",
    icon: "left-4 top-0 h-10 w-10 text-primary opacity-30 md:h-12 md:w-12",
    iconOnPrimary:
      "left-4 top-0 h-10 w-10 text-primary-foreground/30 md:h-12 md:w-12",
    quote:
      "text-sm font-medium leading-relaxed text-muted-foreground md:text-base lg:text-lg",
    quoteOnPrimary:
      "text-sm font-medium leading-relaxed text-primary-foreground md:text-base lg:text-lg",
    footer: "mt-4",
    title: "text-sm text-muted-foreground",
    titleOnPrimary: "text-sm text-primary-foreground/80",
  },
};

export default function FlatTestimonial({
  quote,
  name,
  title,
  highlight,
  size = "default",
  onPrimaryBackground = false,
}: FlatTestimonialProps) {
  const s = sizeStyles[size];
  const iconClass = onPrimaryBackground ? s.iconOnPrimary : s.icon;
  const quoteClass = onPrimaryBackground ? s.quoteOnPrimary : s.quote;
  const titleClass = onPrimaryBackground ? s.titleOnPrimary : s.title;
  const highlightClass = onPrimaryBackground
    ? "font-semibold text-primary-foreground"
    : "text-primary";
  const nameClass = onPrimaryBackground
    ? "block font-semibold text-primary-foreground"
    : "block font-semibold text-foreground";
  return (
    <blockquote className="flex flex-col justify-center">
      <div className={`relative ${s.blockquote}`}>
        <Quote aria-hidden className={`absolute ${iconClass}`} />
        <p className={quoteClass}>
          {highlight ? (
            <>
              {quote.split(highlight)[0]}
              <span className={highlightClass}>{highlight}</span>
              {quote.split(highlight)[1]}
            </>
          ) : (
            quote
          )}
        </p>
        <footer className={s.footer}>
          <cite className="not-italic">
            <span className={nameClass}>{name}</span>
            <span className={titleClass}>{title}</span>
          </cite>
        </footer>
      </div>
    </blockquote>
  );
}
