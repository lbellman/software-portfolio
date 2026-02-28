import {
  BASE_CARD_CLASS,
  CARD_ICONS,
  Rank,
  Suit
} from "@/app/projects/freecell/play/@types";

const rankToText = (rank: Rank) => {
  switch (rank) {
    case Rank.Ace:
      return "A";
    case Rank.King:
      return "K";

    case Rank.Queen:
      return "Q";
    case Rank.Jack:
      return "J";
    case Rank.Ten:
      return "10";
    case Rank.Nine:
      return "9";
    case Rank.Eight:
      return "8";
    case Rank.Seven:
      return "7";
    case Rank.Six:
      return "6";
    case Rank.Five:
      return "5";
    case Rank.Four:
      return "4";
    case Rank.Three:
      return "3";
    case Rank.Two:
      return "2";
    default:
      return "";
  }
};

const isNumberCard = (rank?: Rank) => {
  if (!rank) return false;
  return [
    Rank.Two,
    Rank.Three,
    Rank.Four,
    Rank.Five,
    Rank.Six,
    Rank.Seven,
    Rank.Eight,
    Rank.Nine,
    Rank.Ten,
  ].includes(rank);
};

const isFaceCard = (rank?: Rank) => {
  if (!rank) return false;
  return [Rank.Ace, Rank.King, Rank.Queen, Rank.Jack].includes(rank);
};

export default function PlayingCard({
  suit,
  rank,
  disabled = false,
}: {
  suit?: Suit;
  rank?: Rank;
  disabled?: boolean;
}) {
  const isNumber = isNumberCard(rank);
  const isFace = isFaceCard(rank);
  const color =
    suit === Suit.Hearts || suit === Suit.Diamonds
      ? disabled
        ? "text-red-300"
        : "text-red-500"
      : disabled
      ? "text-gray-500"
      : "text-black";

  if (isNumber && suit) {
    return (
      <div className={BASE_CARD_CLASS(disabled)}>
        {/* Top-left rank and suit */}
        <div
          className={`absolute top-0.5 left-1 sm:top-1.5 sm:left-2 flex flex-col items-start ${color}`}
        >
          <span className="text-[9px] sm:text-xs md:text-sm lg:text-base font-bold leading-tight">
            {rank && rankToText(rank)}
          </span>
          <div className="mt-0.5">{CARD_ICONS[suit as Suit]}</div>
        </div>
        {/* Top right suit */}
        <div
          className={`absolute top-0.5 right-1 sm:top-1.5 sm:right-2 flex flex-col items-end ${color}`}
        >
          <div className="mt-0.5">{CARD_ICONS[suit]}</div>
        </div>
        {/* Bottom-right rank and suit (inverted) */}
        <div
          className={`absolute bottom-0.5 right-1 sm:bottom-1.5 sm:right-2 flex flex-col items-end rotate-180 ${color}`}
        >
          <span className="text-[9px] sm:text-xs md:text-sm lg:text-base font-bold leading-tight">
            {rank && rankToText(rank)}
          </span>
          <div className="mt-0.5">{CARD_ICONS[suit]}</div>
        </div>
      </div>
    );
  }

  if (isFace && suit) {
    return (
      <div
        className={BASE_CARD_CLASS(disabled)}
        // style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Top-left rank and suit */}
        <div
          className={`absolute top-0.5 left-1 sm:top-1.5 sm:left-2 flex flex-col items-start ${color}`}
        >
          <span className="text-[9px] sm:text-xs md:text-sm lg:text-base font-bold leading-tight">
            {rank && rankToText(rank)}
          </span>
          <div className="mt-0.5">{CARD_ICONS[suit]}</div>
        </div>
        {/* Bottom-right rank and suit (inverted) */}
        <div
          className={`absolute bottom-0.5 right-1 sm:bottom-1.5 sm:right-2 flex flex-col items-end rotate-180 ${color}`}
        >
          <span className="text-[9px] sm:text-xs md:text-sm lg:text-base font-bold leading-tight">
            {rank && rankToText(rank)}
          </span>
          <div className="mt-0.5">{CARD_ICONS[suit]}</div>
        </div>
        {/* Blank bordered square in the middle for face card image */}
        <div className="absolute inset-0 flex items-center justify-center px-2 py-4 sm:px-3 sm:py-4 md:px-4 md:py-8">
          <div
            className={`rounded-sm w-full h-full max-w-[75%] max-h-[80%] sm:max-w-[70%] sm:max-h-[60%] md:max-w-[60%] md:max-h-[70%] ${
              disabled ? "bg-gray-300" : "bg-primary"
            }`}
          ></div>
        </div>
      </div>
    );
  }

  // Fallback for cards without rank or suit
  return (
    <div className={BASE_CARD_CLASS(disabled)}>
      {suit && CARD_ICONS[suit]} {rank && rankToText(rank)}
    </div>
  );
}
