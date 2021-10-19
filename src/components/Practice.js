import React, { createContext, useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';

const store = [''];
const AppContext = createContext(store);

const ChildDispatcher = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'BUTTON_CLICKED':
        //action.state      // like this
        return [...state, 'goodbye'];
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, store);
  const handleClick = () => dispatch({ type: 'BUTTON_CLICKED', state: state });

  return <button onClick={handleClick}>press me</button>;
};

const ChildConsumer = () => {
  const [consumer] = useContext(AppContext);
  return <div>{consumer}</div>;
};

const App = () => {
  return (
    <div>
      <h1>Using Context and useReducer</h1>
      <AppContext.Provider value={['hello']}>
        <ChildConsumer />
        <ChildDispatcher />
      </AppContext.Provider>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
