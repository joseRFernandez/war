import { useState } from 'react';
import { Button } from '@mui/material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GameBoard from './GameBoard';

import { useHistory } from 'react-router';
import Deck, {shuffleAndDealDeck} from '../utils';
const StartScreen = (props) => {
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const history = useHistory();

  const deckOfCards = new Deck().cards;
  shuffleAndDealDeck(deckOfCards);
  const { hand1, hand2 } = deckOfCards;

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
      </div>
    </Fragment>
  ) : (
    <GameBoard data={{hand1, hand2}}/>
  );
};

export default StartScreen;

//
