import { Fragment, useEffect, useState } from 'react';
import { useReducer } from 'react';
import Box from '@mui/material/Box';
import Deck, { shuffleAndDealDeck } from '../utils';
import { Button } from '@mui/material';
import { getCard1 } from '../actions';

import Card from './Card';

export default function GameBoard(props) {
  const [card1, setCard1] = useState(props.data.hand1[0]);
  const [card2, setCard2] = useState(props.data.hand2[0]);

  const [deck1, setDeck1] = useState(props.data.hand1);
  const [deck2, setDeck2] = useState(props.data.hand2);

  useEffect(() => {
    setCard1(deck1[0]);
  }, [deck1]);

  useEffect(() => {
    setCard2(deck2[0]);
  }, [deck2]);

  function compareCards(data) {
    //build initial pile and add both cards
    let pile =  [];
    pile.push(card1, card2);

    if (card1.value === 'A') {
      card1.value = '14';
    }
    if (card2.value === 'A') {
      card2.value = '14';
    }

    if (card1.value === card2.value) {
      const builtPile =iDeclareWar(pile);//returns here
      const payload = builtPile;
      console.log('payload after ideclarewar: ', payload)
    }

    //player 1 wins 1 card battle
    if (card1.value > card2.value) {
      //create new temp decks
      const tempDeck1 = deck1.slice(1);
      tempDeck1.push(...pile);
      setDeck1(tempDeck1);
      const tempDeck2 = deck2.slice(1);
      //handle win
      setDeck1(tempDeck1);
      setDeck2(tempDeck2);
    }
    //player2 wins 1 card battle
    if (card2.value > card1.value) {
      //create new temp decks
      const tempDeck1 = deck1.slice(1);
      const tempDeck2 = deck2.slice(1);
      tempDeck2.push(...pile);
      setDeck2(tempDeck2.flat());
      //handle win
      setDeck1(tempDeck1);
      setDeck2(tempDeck2);
    }
  }

  const iDeclareWar = (pile) => {
    alert('TIE')

    const cards1= [...deck1].slice(0,4)
    const cards2= [...deck2].slice(0, 4);

    const newCard1 = cards1[cards1.length - 1]
    const newCard2 = cards2[cards2.length - 1]

    pile = [...cards1 , ...cards2].flat();

   console.log(({data: {card1: newCard1, card2: newCard2, pile}}));
  };

  if (card1 && card2) {
    return (
      <Fragment>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 500,
          }}
        >
          <Card data={card1} />
          <Card data={card2} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" onClick={compareCards}>
            check cards and pass to winner
          </Button>
          <Button variant="outlined" onClick={() => console.log(deck1)}>
            Deck 1 State
          </Button>
          <Button variant="contained" onClick={() => console.log(deck2)}>
            Check deck 2
          </Button>
        </Box>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h1>...loading</h1>
      </Fragment>
    );
  }
}
