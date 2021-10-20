export function _removeFromPlayer1Deck(card) {
  return {
    type: 'REMOVE_CARD_FROM_PLAYER1',
    card
  }
}



  // const nextRound = () => {
  //   dispatch({ type: 'enter pit', pit: battle });
  //now that we know who is the winner we need to remove both first cards from both decks (lose it) and then push whatever is in the pile to the back of the winners cards

  // const determineWinner = () => {
  //   console.log()
  //   // const [card1, card2] = battle;
  //   // card1.value = card1.value === 'A' ? 14 : card1.value;
  //   // card2.value = card2.value === 'A' ? 14 : card2.value;

  //   // if (card1.value === card2.value) {
  //   //   console.log('we have to code tie path');
  //   // } else {
  //   //   const winner = card1.value > card2.value ? 'player1' : 'player2';
  //   //   // if player 1 is winner
  //   //   if (winner === 'player2') {
  //   //     dispatch({ type: REMOVE_CARD_FROM_PLAYER1, payload: state.card1 });
  //   //     console.log(winner);
  //   //   }
  //   //   if (winner === 'player1') {
  //   //     dispatch({ type: REMOVE_CARD_FROM_PLAYER2, payload: state.card2 });
  //   //     dispatch({
  //   //       type: HANDLE_PLAYER2_BATTLE_VICTORY,
  //   //       payload: state.pit.flat(),
  //   //     });
  //   //   }
  //   //   if (winner === 'player2') {
  //   //     dispatch({ type: REMOVE_CARD_FROM_PLAYER1, payload: state.card1 });
  //   //     dispatch({
  //   //       type: HANDLE_PLAYER1_BATTLE_VICTORY,
  //   //       payload: state.pit.flat(),
  //   //     });
  //   //   }
  //   //   dispatch({ type: REMOVE_CARDS_FROM_PIT }); // check this
  //   //   console.log('pit cleared');
  //   // }
  // };
