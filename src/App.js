import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

// import Landing from './components/Landing/Landing'
// import Game from './components/Game/Game'
import GridBoard from './components/GridBoard/GridBoard'
import NextBlock from './components/NextBlock/NextBlock'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import Controls from './components/Controls/Controls'
import MessagePopUp from './components/MessagePopUp/MessagePopUp'

import './App.css';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import {
//   faCaretSquareDown,
//   faCaretSquareUp,
//   faCaretSquareLeft,
//   faCaretSquareRight,
//   faArrowAltCircleUp,
//   faArrowAltCircleDown,
//   faArrowAltCircleLeft,
//   faArrowAltCircleRight,
//   faRedoAlt
//   } from '@fortawesome/free-solid-svg-icons'


// library.add(
//   faCaretSquareDown,
//   faCaretSquareUp,
//   faCaretSquareLeft,
//   faCaretSquareRight,
//   faArrowAltCircleUp,
//   faArrowAltCircleDown,
//   faArrowAltCircleLeft,
//   faArrowAltCircleRight,
//   faRedoAlt)

const store = createStore(reducers)

function App() {
  // const newInstance = useSelector(state => state.game.isNew)
  return (
    <Provider store={store}>
      {/* { newInstance ? <Landing /> : <Game /> */}
      {/* <Game /> */}
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
