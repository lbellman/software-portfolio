"use client";

import PlayingCard from "@/components/PlayingCard";
import { Button } from "@/components/ui/button";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CARD_DIMENSIONS_CLASS,
  CARD_ICONS,
  CARD_WIDTH_CLASS,
  Game,
  Pile,
  PileType,
  Rank,
  Suit,
} from "./@types";
import { RefreshCcw } from "lucide-react";

const createGame = () => {
  const numColumns = 8;
  // Create piles
  const piles: Pile[] = [];
  for (let i = 0; i < numColumns; i++) {
    // Tableau pile
    piles.push({
      id: `tableau-${i}`,
      type: PileType.Tableau,
      cards: [],
    });

    if (i < 4) {
      // Foundation pile
      piles.push({
        id: `foundation-${i}`,
        type: PileType.Foundation,
        suit:
          i === 0
            ? Suit.Hearts
            : i === 1
              ? Suit.Diamonds
              : i === 2
                ? Suit.Clubs
                : Suit.Spades,
        cards: [],
      });

      // Freecell pile
      piles.push({
        id: `freecell-${i}`,
        type: PileType.Freecell,
        cards: [],
      });
    }
  }

  // Create deck of cards
  const deck: Card[] = [];
  const [suits, ranks] = [
    [Suit.Hearts, Suit.Diamonds, Suit.Clubs, Suit.Spades],
    [
      Rank.Ace,
      Rank.Two,
      Rank.Three,
      Rank.Four,
      Rank.Five,
      Rank.Six,
      Rank.Seven,
      Rank.Eight,
      Rank.Nine,
      Rank.Ten,
      Rank.Jack,
      Rank.Queen,
      Rank.King,
    ],
  ];
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({
        suit: suit as Suit,
        rank: rank as Rank,
      });
    }
  }

  // Shuffle the deck
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  const tableauPiles = piles.filter((pile) => pile.type === PileType.Tableau);
  let columnIdx = 0;

  // Deal the cards to the piles
  deck.forEach((card, index) => {
    const pile = tableauPiles[columnIdx];

    // Assign card to pile
    pile.cards.push(card);

    // Increment column index, wrap around if necessary
    if (columnIdx === 7) {
      columnIdx = 0;
    } else {
      columnIdx += 1;
    }
  });

  // Create game object
  const game: Game = {
    id: `game-${Date.now()}`,
    piles,
  };

  return game;
};

// Drag data interface
interface DragData {
  cards: Card[]; // Can be single card or multiple cards for sequences
  sourcePileId: string;
  startIndex: number; // Starting index of the sequence
}

// Draggable Card Component (for single cards or sequences)
const DraggableCard = ({
  card,
  pileId,
  cardIndex,
  disabled,
  cards,
  onFindSequence,
  onHover,
  isHovered,
}: {
  card: Card;
  pileId: string;
  cardIndex: number;
  disabled: boolean;
  cards?: Card[];
  onFindSequence?: (cards: Card[], startIndex: number) => Card[];
  onHover?: (pileId: string, cardIndex: number) => void;
  isHovered?: boolean;
}) => {
  // Determine if we should drag a sequence or single card
  // Store values in closure to ensure they're available when drag starts
  const currentCards = cards;
  const currentCardIndex = cardIndex;
  const currentPileId = pileId;
  const currentCard = card;
  const currentOnFindSequence = onFindSequence;

  // Create unique id for this draggable card
  const id = `card-${pileId}-${cardIndex}`;

  // Determine drag data (sequence or single card)
  const getDragData = (): DragData => {
    if (onFindSequence && cards && !disabled && cardIndex < cards.length) {
      // Find the valid sequence ending at the bottom card
      const bottomIndex = cards.length - 1;
      const fullSequence = onFindSequence(cards, bottomIndex);
      const fullSequenceStartIndex = bottomIndex - fullSequence.length + 1;

      // If this card is part of the bottom sequence, drag from this card to the bottom
      if (cardIndex >= fullSequenceStartIndex && fullSequence.length > 0) {
        // Get the subset from this card to the bottom
        const sequenceFromThisCard = cards.slice(cardIndex);

        // Return the sequence starting from this card
        return {
          cards: sequenceFromThisCard,
          sourcePileId: pileId,
          startIndex: cardIndex,
        };
      }
    }
    // Single card (either not part of sequence, or sequence logic didn't apply)
    return {
      cards: [card],
      sourcePileId: pileId,
      startIndex: cardIndex,
    };
  };

  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    data: getDragData(),
    disabled,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        opacity: isDragging ? 0.3 : 1,
        cursor: disabled ? "default" : "grab",
        position: "relative",
        zIndex: isHovered ? 10 : 1,
        isolation: "isolate",
        touchAction: "none",
      }}
      onMouseEnter={() => {
        if (!disabled && onHover) {
          onHover(pileId, cardIndex);
        }
      }}
      onMouseLeave={() => {
        if (onHover) {
          onHover("", -1);
        }
      }}
      className={
        isHovered
          ? "ring-2 ring-primary ring-offset-1 rounded-sm " +
            CARD_DIMENSIONS_CLASS
          : ""
      }
    >
      <PlayingCard suit={card.suit} rank={card.rank} disabled={disabled} />
    </div>
  );
};

// Drop Zone Component
const DropZone = ({
  pile,
  children,
  isOver,
  canDrop,
}: {
  pile: Pile;
  children: React.ReactNode;
  isOver?: boolean;
  canDrop?: boolean;
}) => {
  const { setNodeRef } = useDroppable({
    id: pile.id,
  });

  return (
    <div ref={setNodeRef} className="inline-block">
      <div
        className={
          isOver && canDrop
            ? "ring-2 ring-blue-500 ring-offset-2 rounded-sm " +
              CARD_WIDTH_CLASS
            : ""
        }
      >
        {children}
      </div>
    </div>
  );
};

const FreecellPlay = () => {
  const [game, setGame] = useState(() => createGame());
  const [moveCount, setMoveCount] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<{
    pileId: string;
    cardIndex: number;
  } | null>(null);
  const [activeData, setActiveData] = useState<DragData | null>(null);
  const [overId, setOverId] = useState<string | null>(null);

  // Set up sensors for pointer and touch
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    }),
  );

  const handleRefreshGame = () => {
    setGame(createGame());
    setMoveCount(0);
  };

  // Helper function to check if a suit is red
  const isRedSuit = (suit: Suit) => {
    return suit === Suit.Hearts || suit === Suit.Diamonds;
  };

  // Helper function to check if a suit is black
  const isBlackSuit = (suit: Suit) => {
    return suit === Suit.Clubs || suit === Suit.Spades;
  };

  // Helper function to get numeric value of rank
  const getRankValue = (rank: Rank): number => {
    return Object.values(Rank).indexOf(rank);
  };

  // Check if a sequence of cards forms a valid tableau sequence
  // (descending order with alternating suits)
  const isValidTableauSequence = (cards: Card[]): boolean => {
    if (cards.length === 0) return false;
    if (cards.length === 1) return true; // Single card is always valid

    for (let i = 0; i < cards.length - 1; i++) {
      const currentCard = cards[i];
      const nextCard = cards[i + 1];

      // Check if colors alternate
      const currentIsRed = isRedSuit(currentCard.suit);
      const nextIsRed = isRedSuit(nextCard.suit);
      if (currentIsRed === nextIsRed) return false;

      // Check if rank is descending (current should be one higher than next)
      const currentRankValue = getRankValue(currentCard.rank);
      const nextRankValue = getRankValue(nextCard.rank);
      if (currentRankValue !== nextRankValue + 1) return false;
    }

    return true;
  };

  // Find the longest valid sequence ending at a given index (working backwards from bottom)
  // This finds sequences that can be dragged from the bottom of a column
  const findValidSequence = (cards: Card[], endIndex: number): Card[] => {
    if (endIndex < 0 || endIndex >= cards.length) return [];

    const sequence: Card[] = [cards[endIndex]];

    // Build sequence going backwards (up the column) from endIndex
    for (let i = endIndex; i > 0; i--) {
      const currentCard = cards[i];
      const previousCard = cards[i - 1];

      // Check if previous card can be part of valid sequence
      const currentIsRed = isRedSuit(currentCard.suit);
      const previousIsRed = isRedSuit(previousCard.suit);

      // Colors must alternate
      if (currentIsRed === previousIsRed) break;

      // Rank must be one higher (since we're going backwards, previous should be one rank higher)
      const currentRankValue = getRankValue(currentCard.rank);
      const previousRankValue = getRankValue(previousCard.rank);
      if (previousRankValue !== currentRankValue + 1) break;

      sequence.unshift(previousCard); // Add to beginning since we're going backwards
    }

    return sequence;
  };

  // Validate if a card can be moved to a foundation pile
  const canMoveToFoundation = (card: Card, pile: Pile): boolean => {
    if (pile.type !== PileType.Foundation) return false;
    if (pile.suit !== card.suit) return false;

    const topCard = pile.cards[pile.cards.length - 1];
    if (!topCard) {
      // Empty foundation - only accept Ace
      return card.rank === Rank.Ace;
    }

    // Check if the card is one rank higher than the top card
    const topRankValue = getRankValue(topCard.rank);
    const cardRankValue = getRankValue(card.rank);
    return cardRankValue === topRankValue + 1;
  };

  // Validate if a card can be moved to a freecell
  const canMoveToFreecell = (pile: Pile): boolean => {
    if (pile.type !== PileType.Freecell) return false;
    return pile.cards.length === 0; // Freecell must be empty
  };

  // Validate if cards can be moved to a tableau pile
  const canMoveToTableau = (cards: Card[], pile: Pile): boolean => {
    if (pile.type !== PileType.Tableau) return false;
    if (cards.length === 0) return false;

    // First card in the sequence is what we're trying to place
    const firstCard = cards[0];

    const topCard = pile.cards[pile.cards.length - 1];
    if (!topCard) {
      // Empty tableau - only accept cards/sequences starting with a King
      return firstCard.rank === Rank.King;
    }

    // Check if colors alternate and rank is one lower
    const topIsRed = isRedSuit(topCard.suit);
    const cardIsRed = isRedSuit(firstCard.suit);

    if (topIsRed === cardIsRed) return false; // Colors must alternate

    const topRankValue = getRankValue(topCard.rank);
    const cardRankValue = getRankValue(firstCard.rank);
    return cardRankValue === topRankValue - 1; // Must be one rank lower
  };

  // Auto-move Aces to empty foundation piles
  const autoMoveAces = (piles: Pile[]): Pile[] => {
    let updatedPiles = [...piles];
    let movedAny = true;

    // Keep trying to move Aces until no more can be moved
    while (movedAny) {
      movedAny = false;

      // Find all available Aces (top cards in tableau and freecells)
      const availableAces: {
        card: Card;
        sourcePileId: string;
        cardIndex: number;
      }[] = [];

      updatedPiles.forEach((pile) => {
        if (pile.type === PileType.Tableau && pile.cards.length > 0) {
          const topCard = pile.cards[pile.cards.length - 1];
          if (topCard && topCard.rank === Rank.Ace) {
            availableAces.push({
              card: topCard,
              sourcePileId: pile.id,
              cardIndex: pile.cards.length - 1,
            });
          }
        } else if (pile.type === PileType.Freecell && pile.cards.length > 0) {
          const card = pile.cards[0];
          if (card && card.rank === Rank.Ace) {
            availableAces.push({
              card: card,
              sourcePileId: pile.id,
              cardIndex: 0,
            });
          }
        }
      });

      // Try to move each Ace to its matching empty foundation pile
      for (const ace of availableAces) {
        const matchingFoundation = updatedPiles.find(
          (pile) =>
            pile.type === PileType.Foundation &&
            pile.suit === ace.card.suit &&
            pile.cards.length === 0,
        );

        if (matchingFoundation) {
          // Move the Ace to the foundation
          updatedPiles = updatedPiles.map((pile) => {
            if (pile.id === ace.sourcePileId) {
              // Remove Ace from source pile
              return {
                ...pile,
                cards: pile.cards.filter((_, idx) => idx !== ace.cardIndex),
              };
            }
            if (pile.id === matchingFoundation.id) {
              // Add Ace to foundation pile
              return {
                ...pile,
                cards: [...pile.cards, ace.card],
              };
            }
            return pile;
          });
          movedAny = true;
          break; // Move one at a time, then re-scan
        }
      }
    }

    return updatedPiles;
  };

  // Handle card move
  const handleMove = (data: DragData, targetPileId: string) => {
    const { sourcePileId, cards, startIndex } = data;
    setGame((prevGame) => {
      const sourcePile = prevGame.piles.find((p) => p.id === sourcePileId);
      const targetPile = prevGame.piles.find((p) => p.id === targetPileId);

      if (!sourcePile || !targetPile || cards.length === 0) return prevGame;

      // For foundation and freecell, only single cards are allowed
      if (
        targetPile.type === PileType.Foundation ||
        targetPile.type === PileType.Freecell
      ) {
        if (cards.length > 1) return prevGame;
        const card = cards[0];

        let isValidMove = false;
        if (targetPile.type === PileType.Foundation) {
          isValidMove = canMoveToFoundation(card, targetPile);
        } else if (targetPile.type === PileType.Freecell) {
          isValidMove = canMoveToFreecell(targetPile);
        }

        if (!isValidMove) return prevGame;

        // Increment move counter
        setMoveCount((prev) => prev + 1);

        // Perform the move (single card)
        let newPiles = prevGame.piles.map((pile) => {
          if (pile.id === sourcePileId) {
            // Remove card from source pile
            return {
              ...pile,
              cards: pile.cards.filter((_, idx) => idx !== startIndex),
            };
          }
          if (pile.id === targetPileId) {
            // Add card to target pile
            return {
              ...pile,
              cards: [...pile.cards, card],
            };
          }
          return pile;
        });

        // Auto-move any available Aces after the move
        newPiles = autoMoveAces(newPiles);

        return {
          ...prevGame,
          piles: newPiles,
        };
      } else if (targetPile.type === PileType.Tableau) {
        // Validate tableau move
        if (!canMoveToTableau(cards, targetPile)) return prevGame;

        // Increment move counter
        setMoveCount((prev) => prev + 1);

        // Perform the move (can be multiple cards)
        let newPiles = prevGame.piles.map((pile) => {
          if (pile.id === sourcePileId) {
            // Remove all cards in the sequence from source pile
            return {
              ...pile,
              cards: pile.cards.filter(
                (_, idx) =>
                  idx < startIndex || idx >= startIndex + cards.length,
              ),
            };
          }
          if (pile.id === targetPileId) {
            // Add all cards to target pile
            return {
              ...pile,
              cards: [...pile.cards, ...cards],
            };
          }
          return pile;
        });

        // Auto-move any available Aces after the move
        newPiles = autoMoveAces(newPiles);

        return {
          ...prevGame,
          piles: newPiles,
        };
      }

      return prevGame;
    });
  };

  // Check if item can be dropped on pile
  const canDropOnPile = (data: DragData, pile: Pile): boolean => {
    if (data.sourcePileId === pile.id) return false;

    const cards = data.cards;
    if (cards.length === 0) return false;

    // Foundation and freecell only accept single cards
    if (pile.type === PileType.Foundation) {
      if (cards.length > 1) return false;
      return canMoveToFoundation(cards[0], pile);
    } else if (pile.type === PileType.Freecell) {
      if (cards.length > 1) return false;
      return canMoveToFreecell(pile);
    } else if (pile.type === PileType.Tableau) {
      return canMoveToTableau(cards, pile);
    }
    return false;
  };

  const handleCardHover = (pileId: string, cardIndex: number) => {
    if (pileId && cardIndex >= 0) {
      setHoveredCard({ pileId, cardIndex });
    } else {
      setHoveredCard(null);
    }
  };

  // Drag event handlers
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveData(active.data.current as DragData);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { over } = event;
    setOverId(over ? (over.id as string) : null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;

    if (!over || !activeData) {
      setActiveData(null);
      setOverId(null);
      return;
    }

    const targetPileId = over.id as string;

    // Find the target pile
    const targetPile = game.piles.find((p) => p.id === targetPileId);
    if (!targetPile) {
      setActiveData(null);
      setOverId(null);
      return;
    }

    // Check if the move is valid
    if (canDropOnPile(activeData, targetPile)) {
      handleMove(activeData, targetPileId);
    }

    setActiveData(null);
    setOverId(null);
  };

  const handleDragCancel = () => {
    setActiveData(null);
    setOverId(null);
  };

  const foundationPiles = game.piles.filter(
    (pile) => pile.type === PileType.Foundation,
  );
  const freecells = game.piles.filter(
    (pile) => pile.type === PileType.Freecell,
  );
  const tableauPiles = game.piles.filter(
    (pile) => pile.type === PileType.Tableau,
  );

  // Get the active cards for preview
  const getActiveCards = () => {
    if (!activeData) return [];
    return activeData.cards || [];
  };

  const activeCards = getActiveCards();

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <main className="flex-1">
        {/* Game Area */}
        <div>
          {/* Header Section */}
          <section className=" pt-28 pb-2 lg:px-12">
            <div className="container mx-auto ">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <Link
                    href="/projects/freecell"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← Back to Freecell
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm text-muted-foreground">
                    Moves: {moveCount}
                  </div>
                  <Button
                    variant="outline"
                    
                    onClick={handleRefreshGame}
                  >
                    <RefreshCcw className="size-4" />
                    Refresh Game
                  </Button>
                </div>
              </div>
            </div>
          </section>
          {/* Game Area */}
          <section className="pb-8 flex flex-col flex-nowrap px-1 sm:px-2 md:px-6 lg:px-12">
            <div className="flex flex-col p-lg w-full flex-nowrap min-w-full">
              <div className="flex justify-center">
                <div className="grid grid-cols-8 gap-0.5 sm:gap-1 md:gap-4 lg:gap-6">
                  {/* Foundation Piles */}

                  {foundationPiles?.map((pile: Pile, idx: number) => {
                    const cards = pile.cards || [];
                    const visibleCard =
                      cards?.length == 0
                        ? null
                        : (cards?.[cards.length - 1] as Card);
                    const isOver = overId === pile.id;
                    const canDropHere = activeData
                      ? canDropOnPile(activeData, pile)
                      : false;
                    return (
                      <DropZone
                        key={idx}
                        pile={pile}
                        isOver={isOver}
                        canDrop={canDropHere}
                      >
                        {visibleCard ? (
                          <DraggableCard
                            card={visibleCard}
                            pileId={pile.id}
                            cardIndex={cards.length - 1}
                            disabled={true}
                          />
                        ) : (
                          <div
                            className={
                              "rounded-sm bg-muted flex justify-center items-center border-2 border-dashed border-muted-foreground/20 " +
                              CARD_DIMENSIONS_CLASS
                            }
                          >
                            {CARD_ICONS[pile.suit as Suit]}
                          </div>
                        )}
                      </DropZone>
                    );
                  })}

                  {/* Free Cells */}

                  {freecells?.map((cell: Pile, idx: number) => {
                    const card = cell.cards?.[0] as Card;
                    const isOver = overId === cell.id;
                    const canDropHere = activeData
                      ? canDropOnPile(activeData, cell)
                      : false;
                    return (
                      <DropZone
                        key={idx}
                        pile={cell}
                        isOver={isOver}
                        canDrop={canDropHere}
                      >
                        {card ? (
                          <DraggableCard
                            card={card}
                            pileId={cell.id}
                            cardIndex={0}
                            disabled={false}
                          />
                        ) : (
                          <div
                            className={
                              "border-2 border-dashed border-muted-foreground/20 rounded-sm bg-white " +
                              CARD_DIMENSIONS_CLASS
                            }
                          />
                        )}
                      </DropZone>
                    );
                  })}
                </div>
              </div>

              {/* Columns */}
              <div className="mt-8 w-full justify-center flex ">
                <div className="gap-0.5 sm:gap-1 md:gap-4 lg:gap-6 grid grid-cols-8">
                  {tableauPiles?.map((column: Pile, idx: number) => {
                    const cards = (column.cards || []).filter(
                      (card): card is Card => card !== null,
                    );
                    const isOver = overId === column.id;
                    const canDropHere = activeData
                      ? canDropOnPile(activeData, column)
                      : false;

                    return (
                      <DropZone
                        key={idx}
                        pile={column}
                        isOver={isOver}
                        canDrop={canDropHere}
                      >
                        <div className="flex flex-col relative h-fit">
                          {cards.length === 0 ? (
                            // Empty tableau - show drop zone placeholder
                            <div
                              className={
                                "border-2 border-dashed border-muted-foreground/20 rounded-sm bg-muted/30 " +
                                CARD_DIMENSIONS_CLASS
                              }
                            />
                          ) : (
                            (() => {
                              // Find the valid sequence ending at the bottom of the column
                              const bottomIndex = cards.length - 1;
                              const bottomSequence =
                                cards.length > 0
                                  ? findValidSequence(cards, bottomIndex)
                                  : [];
                              const sequenceStartIndex =
                                bottomSequence.length > 0
                                  ? bottomIndex - bottomSequence.length + 1
                                  : bottomIndex;

                              return cards?.map(
                                (card: Card, cardIdx: number) => {
                                  // Only cards that are part of the bottom sequence can be dragged
                                  const isInBottomSequence =
                                    cardIdx >= sequenceStartIndex;

                                  // Determine if this card is part of the hovered sequence
                                  let isHovered = false;
                                  if (
                                    hoveredCard &&
                                    hoveredCard.pileId === column.id &&
                                    hoveredCard.cardIndex >= 0 &&
                                    isInBottomSequence
                                  ) {
                                    // Find the sequence that would be dragged from the hovered card
                                    // The sequence goes from the hovered card to the bottom
                                    const bottomIndex = cards.length - 1;
                                    const fullSequence = findValidSequence(
                                      cards,
                                      bottomIndex,
                                    );
                                    const fullSequenceStart =
                                      bottomIndex - fullSequence.length + 1;

                                    // If the hovered card is in the bottom sequence, highlight from hovered card to bottom
                                    if (
                                      hoveredCard.cardIndex >=
                                        fullSequenceStart &&
                                      cardIdx >= hoveredCard.cardIndex &&
                                      cardIdx <= bottomIndex
                                    ) {
                                      isHovered = true;
                                    }
                                  }

                                  return (
                                    <div
                                      key={cardIdx}
                                      className={
                                        cardIdx > 0
                                          ? "-mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28"
                                          : ""
                                      }
                                      style={{
                                        position: "relative",
                                        zIndex: isHovered
                                          ? 10 + cardIdx
                                          : cardIdx + 1,
                                      }}
                                    >
                                      <DraggableCard
                                        card={card}
                                        pileId={column.id}
                                        cardIndex={cardIdx}
                                        disabled={!isInBottomSequence}
                                        cards={cards}
                                        onFindSequence={findValidSequence}
                                        onHover={handleCardHover}
                                        isHovered={isHovered}
                                      />
                                    </div>
                                  );
                                },
                              );
                            })()
                          )}
                        </div>
                      </DropZone>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <DragOverlay>
        {activeCards.length > 0 ? (
          <div className="relative">
            {activeCards.map((card, index) => (
              <div
                key={index}
                className={
                  index > 0 ? "-mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28" : ""
                }
                style={{
                  opacity: 0.95,
                  boxShadow:
                    index === 0 ? "0 10px 30px rgba(0,0,0,0.4)" : undefined,
                }}
              >
                <PlayingCard
                  suit={card.suit}
                  rank={card.rank}
                  disabled={false}
                />
              </div>
            ))}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default FreecellPlay;
