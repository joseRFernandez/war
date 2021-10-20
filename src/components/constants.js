export const START_GAME = "START_GAME"

export const ADD_TO_PILE = 'ADD_TO_PILE';

export const FOUND_WINNER = "FOUND_WINNER";


export const SEARCH_FOR_CARDS_IN_PILE = "SEARCH_FOR_CARDS_IN_PILE";

export const REPLACE_FIRST_CARD_IN_BOTH_DECKS = "REPLACE_FIRST_CARD_IN_BOTH_DECKS";

export const _startGame = () => ({
  type: START_GAME,
})


export const _addToPile = (card1, card2) => ({
  type: ADD_TO_PILE,
  payload: [card1, card2],
});

export const _searchForCardsInPile = (card1, card2) => ({
  type: SEARCH_FOR_CARDS_IN_PILE,
  payload: [card1, card2]
});

export const _foundWinner = (winner) => ({
  type: FOUND_WINNER,
  payload: winner
})

export const _replaceFirstCardInBothDecks = ([card1, card2]) => (
  {type: REPLACE_FIRST_CARD_IN_BOTH_DECKS,
    payload: [card1, card2]
})

