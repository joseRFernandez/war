// this file will be used to build a fresh deck before every game
const SUITS = ['♠', '♥', '♣', '♦'];

const VALUES = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

export default class Deck {
  constructor(cards = newDeck()) {
    this.cards = cards;
  }
}

const newDeck = () => {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
};

// create a recursive card shuffler
export const shuffleDeck = (deck) => {
  const hand1 = []
  const hand2 = [];

  const innerShuffle = (deck) => {
    //base case -- if we have 1 card left - return card
    if (deck.length === 1) {
      return deck.slice();
    }
    // all other paths will trigger a recursive call
    else {
      let randIdx = Math.floor(Math.random() * deck.length);
      const randCard = deck.slice()[randIdx];
      console.log(randCard);
    }

    if (deck.length === 1) {
      return innerShuffle(deck.slice());
    }

  }
}


export const routes = [
  {
    path: '/user-stats//player1',
    // component: StatsPage,
  },
  {
    path: '/select-deck',
    // component: DeckSelect,
  },
  {
    path: '/user-stats/opponent',
    // component: StatsPage
  },
  {
    path: '/game-over',
    // component: GameOver
  },
];

