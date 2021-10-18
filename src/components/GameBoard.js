import { Fragment, useState, useSelector } from 'react';
import { Reducer } from './Reducer';
import Box from '@mui/material/Box';
import Deck, { shuffleDeck } from '../utils';
import { Button } from '@mui/material';

import Card from './Card';

export default function GameBoard(props) {
  const deckOfCards = new Deck().cards;
  shuffleDeck(deckOfCards);
  const { hand1, hand2} = deckOfCards;

  const [card1, setCard1] = useState(hand1[0])
  const [card2, setCard2] = useState(hand2[0])
  const [pile, setPile] = useState([]);

  const checkWinner = () => {
    //this function still needs two other functions to run properly
    // - i need to create a pop function to distribute a card from each players hand onto the table

    // i need a function that runs if both cards are the same

    if (card1.value === 'A') {
      card1.value = 14;
    }
    if (card2.value === 'A') {
      card2.value = 14;
    }

    // if (card1.value === card2.value) {
      // will call the iDeclareWar func
    // }

    const winner = card1.value > card2.value ? 'player1' : 'player2';
    console.log(winner)
  }

  const playCard = () => {

  }

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
        <Card cards= {hand1} />
        <Card cards= {hand2} />
      </Box>
      <Button variant="contained" onClick= {() => checkWinner()}>Check Winner</Button>
    </Fragment>
  );
}
