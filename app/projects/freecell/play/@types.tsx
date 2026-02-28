import { Club, Spade, Heart, Diamond } from "lucide-react";

export enum Suit {
  Hearts = "Hearts",
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Spades = "Spades",
}

export enum Rank {
  Ace = "Ace",
  Two = "Two",
  Three = "Three",
  Four = "Four",
  Five = "Five",
  Six = "Six",
  Seven = "Seven",
  Eight = "Eight",
  Nine = "Nine",
  Ten = "Ten",
  Jack = "Jack",
  Queen = "Queen",
  King = "King",
}

export enum PileType {
  Tableau = "Tableau",
  Foundation = "Foundation",
  Freecell = "Freecell",
}

export interface Card {
  suit: Suit;
  rank: Rank;
}

export const CARD_HEIGHT_CLASS =
  "h-[70px] sm:h-[85px] md:h-[150px] lg:h-[170px]";
export const CARD_WIDTH_CLASS =
  "w-[45px] sm:w-[60px] md:w-[110px] lg:w-[130px]";
export const CARD_DIMENSIONS_CLASS = CARD_WIDTH_CLASS + " " + CARD_HEIGHT_CLASS;

export const BASE_CARD_CLASS = (disabled: boolean) => {
  return (
    " " +
    CARD_DIMENSIONS_CLASS +
    " border shadow rounded-sm relative transition-all" +
    (disabled
      ? " bg-gray-100 border-gray-300"
      : " bg-white border-gray-200 hover:shadow-lg ")
  );
};

export interface Pile {
  id: string;
  type: PileType;
  suit?: Suit; // Only used for foundation piles
  cards: Card[];
}

export interface Game {
  id: string;
  piles: Pile[];
}

export const CARD_ICONS: { [key in Suit]: React.ReactNode } = {
  [Suit.Hearts]: <Heart className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />,
  [Suit.Spades]: <Spade className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />,
  [Suit.Clubs]: <Club className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />,
  [Suit.Diamonds]: <Diamond className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" />,
};
