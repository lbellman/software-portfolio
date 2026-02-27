import { Quote } from "lucide-react";

export type FlatTestimonialSize = "default" | "small";

export type FlatTestimonialProps = {
  quote: string;
  name: string;
  title: string;
  highlight?: string;
  size?: FlatTestimonialSize;
};

const sizeStyles = {
  default: {
    blockquote: "py-4 pl-14 md:py-8 md:pl-20",
    icon: "left-4 top-4 h-16 w-16 text-primary opacity-30 md:h-20 md:w-20",
    quote:
      "text-lg font-medium leading-relaxed text-muted-foreground md:text-xl lg:text-3xl",
    footer: "mt-6",
    title: "text-muted-foreground",
  },
  small: {
    blockquote: "py-2 pl-10 md:py-4 md:pl-12",
    icon: "left-4 top-0 h-10 w-10 text-primary opacity-30 md:h-12 md:w-12",
    quote:
      "text-sm font-medium leading-relaxed text-muted-foreground md:text-base lg:text-lg",
    footer: "mt-4",
    title: "text-sm text-muted-foreground",
  },
};

export default function FlatTestimonial({
  quote,
  name,
  title,
  highlight,
  size = "default",
}: FlatTestimonialProps) {
  const s = sizeStyles[size];
  return (
    <blockquote className="flex flex-col justify-center">
      <div className={`relative ${s.blockquote}`}>
        <Quote aria-hidden className={`absolute ${s.icon}`} />
        <p className={s.quote}>
          {highlight ? (
            <>
              {quote.split(highlight)[0]}
              <span className="text-primary">{highlight}</span>
              {quote.split(highlight)[1]}
            </>
          ) : (
            quote
          )}
        </p>
        <footer className={s.footer}>
          <cite className="not-italic">
            <span className="block font-semibold text-foreground">{name}</span>
            <span className={s.title}>{title}</span>
          </cite>
        </footer>
      </div>
    </blockquote>
  );
}
