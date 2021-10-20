import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GameBoard from './components/GameBoard';
import StatsPage from './components/StatsPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/game-session" component={GameBoard} />
      <Route exact path="/my-stats" component={StatsPage} />
    </Switch>
  );
}
