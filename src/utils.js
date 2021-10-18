// this file will be used to build a fresh deck before every game
const SUITS = ['S', 'H', 'C', 'D'];

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
  constructor(suit, value, image) {
    this.suit = suit;
    this.value = value;
    this.image = `/2color/${value}${suit}.svg`;
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
  // shuffle the cards
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  deck.hand1 = deck.slice(0, deck.length / 2);
  deck.hand2 = deck.slice(deck.length / 2, deck.length);
  // console.log('hand1: ', deck.hand1);
  // console.log('hand2: ', deck.hand2);
  // console.log(deck)
  return deck;
};

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

export const determineValue = (card) => {
  console.log(card.card[0]);
};
