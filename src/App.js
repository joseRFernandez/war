import Deck, { shuffleDeck } from "./utils";

function App() {
const deck = new Deck();
// console.log(deck.cards[0])
console.log(deck)
  return (
    <div className="App">
      <h1>HomePage</h1>
    </div>
  );
}

export default App;
