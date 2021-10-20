const { shuffleAndDealDeck, newDeck, convertToNum, Deck, Card, VALUES, SUITS} = require('./copyOfUtils')

test('should build a new deck of 52 cards', () => {
  expect(newDeck().length).toBe(52);
  console.log(newDeck().length)
})

test('should shuffle the original deck', () => {
  const unShuffled = newDeck();
  expect(shuffleAndDealDeck(unShuffled)).toBe(unShuffled)
  // console.log('shuffled: ', shuffleAndDealDeck(unShuffled))
  // console.log("unShuffled: ", unShuffled)
})

test('should convert cards to a number value', () => {
  const card1 = new Deck().cards[0].value;
  const singleCard = convertToNum(card1);
  expect(typeof singleCard).toBe('number');
})
