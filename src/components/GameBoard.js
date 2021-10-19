import { Fragment, useEffect, useState } from 'react';
import { useReducer } from 'react';
import Box from '@mui/material/Box';
import Deck, { shuffleAndDealDeck } from '../utils';
import { Button } from '@mui/material';
import { getCard1 } from '../actions';

import Card from './Card';

export default function GameBoard(props) {

  const deckOfCards = new Deck().cards;
  shuffleAndDealDeck(deckOfCards);
  const { hand1, hand2 } = deckOfCards;

  // const [card1, setCard1] = useState(hand1[0]);
  // const [card2, setCard2] = useState(hand2[0]);

  const initialState = {
    gameStarted: false,
    gameOver: false,
    player1Hand: [],
    player2Hand: [],
    card1: null,
    card2: null,
    pile: [],
    currentWinner: null
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'start game':
        return { ...state, gameStarted: true };
      case 'deal cards':
        return {
          ...state,
          player1Hand: hand1.slice(),
          player2Hand: hand2.slice(),
          card1: hand1[0],
          card2: hand2[0],
          gameStarted: true,
        };
        case 'battle winner':
          return { ...state, currentWinner: action.winner}
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkWinner = () => {

    if (state.card1 === 'A') {
      state.card1.value = 14;
    }
    if (state.card2 === 'A') {
      state.card2.value = 14;
    }


    if (state.card1.value === state.card2.value) {
      console.log('TIE')
    } else {
      const winner =
        state.card1.value > state.card2.value ? 'player1' : 'player2';
      console.log('Winner:', winner);
      dispatch({type: 'battle winner', winner})

    }
  };

  const addToPile = () => {

  }




  const takeWinnings = () => {};
  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '80%',
          height: 600,
          marginLeft: '10%',
          backgroundColor: 'green',
        }}
      >
        <Card cards={hand1} status={state.gameStarted}/>
        <Card cards={hand2} status={state.gameStarted}/>
      </Box>

      <Button variant="outlined" onClick={() => console.log(state)}>
        Check State
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: 'deal cards' })}
      >
        Deal Cards
      </Button>
      <Button variant="outlined" onClick={() => checkWinner()}>
        Strike
      </Button>
    </Fragment>
  );
}
