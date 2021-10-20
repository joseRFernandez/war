import Drawer from './components/Drawer'
import StartScreen from './components/StartScreen';

function App(props) {
  console.log(props)
  return (
    <div>
      <Drawer />
      <StartScreen />
    </div>
  );
}

export default App;
