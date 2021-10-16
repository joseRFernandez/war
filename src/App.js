import Deck, { shuffleDeck } from './utils';
import Drawer from './components/Drawer'

function App() {
  const deck = new Deck();
  console.log(deck);
  return (
    <div>
      <Drawer />
    </div>
  );
}

export default App;
