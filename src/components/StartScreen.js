import { useState } from 'react';
import { Button } from '@mui/material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GameBoard from './GameBoard';

import { useHistory } from 'react-router';

const StartScreen = (props) => {
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const history = useHistory();

  const clickHandler = () => {
    setGameIsRunning(true);
    history.push('/game-session');
  }

  const stateChecker = () => {
    console.log(gameIsRunning);
  }

  return !gameIsRunning ? (
    <Fragment>
      <img src="/static-images/war-background.png" alt="war screen" />
      <div>
          <Button variant="contained" onClick={clickHandler}>
            Start Game
          </Button>
          <Button onClick={stateChecker}>Check State</Button>
      </div>
    </Fragment>
  ) : (
    // null
    <GameBoard />
  );
};

export default StartScreen;

//
