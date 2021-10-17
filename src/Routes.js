import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GameBoard from './components/GameBoard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/game-session" component={GameBoard}></Route>
    </Switch>
  );
}
