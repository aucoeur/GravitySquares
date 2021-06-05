import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import './App.css';

import GridBoard from './components/GridBoard/GridBoard'
import NextBlock from './components/NextBlock/NextBlock'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import Controls from './components/Controls/Controls'
import MessagePopUp from './components/MessagePopUp/MessagePopUp'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tetris Redux</h1>
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopUp />
      </div>
    </Provider>
  );
}

export default App;
