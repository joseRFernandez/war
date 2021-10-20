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
const convertToNum = (card1) => {
  if (card1 === 'A') {
    card1 = 14;
  } if (card1 === 'J') {
    card1 = 11;
  } if (card1 === 'Q') {
    card1 = 12
  } if (card1 === 'K') {
    card1 = 13;
  }
  return parseInt(card1);
}

class Card {
  constructor(suit, value, image) {
    this.suit = suit;
    this.value = value;
    this.image = `/2color/${value}${suit}.svg`;
  }
}

class Deck {
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

const shuffleAndDealDeck = (deck) => {
  // shuffle the cards
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  deck.hand1 = deck.slice(0, deck.length / 2);
  deck.hand2 = deck.slice(deck.length / 2, deck.length);
  return deck;
};

module.exports ={ VALUES, SUITS,  convertToNum, shuffleAndDealDeck, newDeck, Deck, Card}
