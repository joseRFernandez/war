import { useReducer } from "react";

const initialState = {
  gameOver: false,
  hand1: [],
  hand2: [],
  card1: null,
  card2: null,
  pile: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'get card1':
      return { ...state, hand1: action.card1};
      case 'get card2':
        return { ...state, hand2: action.card2}
    default:
      return state;
  }
}

function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Game: {state.card1}
      <button onClick={() => dispatch({ type: 'get card1' })}>Get Card 1</button>
      <button onClick={() => dispatch({ type: 'get card2' })}>Get Card 2</button>
    </>
  );
}
