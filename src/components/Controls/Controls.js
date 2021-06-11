import {
  useEffect
} from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate,
  pause,
  resume,
  restart
} from '../../actions'

import './Controls.css'

export default function Control() {
  const dispatch = useDispatch()
  const isRunning = useSelector(state => state.game.isRunning)
  const gameOver = useSelector(state => state.game.gameOver)

  const disabled = (!isRunning || gameOver)

  useEffect(() => {

    function handleKeyPress(e) {
      switch (e.key) {
        case "ArrowLeft": // LEFT
          if (isRunning) { dispatch(moveLeft()) }
          break
        case "ArrowUp": // (SPACEBAR) ROTATE/UP
          if (isRunning) { dispatch(rotate()) }
          break
        case "ArrowRight": // RIGHT
          if (isRunning) { dispatch(moveRight()) }
          break
        case "ArrowDown": // DOWN
          if (isRunning) { dispatch(moveDown()) }
          break
        case "p": // PAUSE
          if (!gameOver) {
            isRunning ? dispatch(pause()) : dispatch(resume())
          }
          break
        case "n": // 'N'ew Game / RESTART
          if (gameOver) {
            dispatch(restart())
          }
          break
        default:
          return
        }
      }

      document.addEventListener('keydown', handleKeyPress)

      // cleaning up our side effects to prevent multiple eventlisteners to be registered every render
      return () => document.removeEventListener('keydown', handleKeyPress)
  })


  return ( <div className = "controls">
    <button
      disabled= {disabled}
      className="control-button"
      onClick = {() => disabled ? null : dispatch(moveLeft()) }>◀︎
    </button>
    <button
      disabled={disabled}
      className="control-button"
      onClick = {() => disabled ? null : dispatch(moveRight())}>▶︎
    </button>
    <button
      disabled = {disabled}
      className = "control-button"
      onClick = {() => disabled ? null : dispatch(rotate())
    }>▲
    </button>
    <button
      disabled = {disabled}
      className = "control-button"
      onClick = {
        () => disabled ? null : dispatch(moveDown())
      }>▼
    </button>
  </div>
)}
