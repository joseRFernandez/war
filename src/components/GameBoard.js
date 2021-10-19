import { Fragment, useEffect, useState } from 'react';
import { useReducer } from 'react';
import Box from '@mui/material/Box';
import Deck, { shuffleAndDealDeck } from '../utils';
import { Button } from '@mui/material';
import { getCard1 } from '../actions';

import Card from './Card';

const deck = new Deck();
const shuffledCards = shuffleAndDealDeck(deck.cards);
// console.log('shuffledCards: ', shuffledCards.slice(0, shuffledCards.length -1))



const handReducer = (state, action) => {
  switch(action.type) {
    case'begin game':
    return {...state, gameOn: true}
    case 'enter pit':
      return {...state, pit: action.pit}
      default:
        return {state}
  }
};


const initialHandState = {
  gameOn: false,
  player1Cards: shuffledCards.hand1,
  player2Cards: shuffledCards.hand2,
  card1: shuffledCards.hand1.slice()[0],
  card2: shuffledCards.hand2.slice()[0],
  pit: []
};


export default function GameBoard(props) {
  const [state, dispatch] = useReducer(handReducer, initialHandState);
  const [battle, setBattle] = useState([state.card1, state.card2])

  const checkWinner = () => {

    dispatch({type: 'enter pit', pit: battle})

    console.log(state)
  }

  return (
    <Fragment>
      <Card data={state.player1Cards} status= {state.gameOn}/>
      <Card data={state.player2Cards} status={state.gameOn}/>
      <Button variant='outlined' onClick={() => dispatch({type: 'begin game'})}>Start Game</Button>
      <Button variant="contained" onClick={() => checkWinner()}>Next Round</Button>
      <Button variant='outlined' onClick={() => console.log(state)}>Check State</Button>
    </Fragment>
  );
}
