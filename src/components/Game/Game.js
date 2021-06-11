import './Game.css'

import GridBoard from '../GridBoard/GridBoard'
import NextBlock from '../NextBlock/NextBlock'
import ScoreBoard from '../ScoreBoard/ScoreBoard'
import Controls from '../Controls/Controls'
import MessagePopUp from '../MessagePopUp/MessagePopUp'

export default function Game() {
  return(
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">GravitySquares Redux</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
      <MessagePopUp />
    </div>
  )
}
