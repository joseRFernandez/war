import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GameBoard from './GameBoard';

import { useHistory } from 'react-router';
import Deck, {shuffleAndDealDeck} from '../utils';
const StartScreen = (props) => {
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const history = useHistory();

  const [deckInfo, setDeckInfo] = useState(null);

  const clickHandler = () => {
    const deck = new Deck();
    const shuffledCards = shuffleAndDealDeck(deck.cards);
    setDeckInfo(shuffledCards);
    setGameIsRunning(true);


    history.push('/game-session');
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
    <GameBoard data={deckInfo} />
  );
};

export default StartScreen;

//
