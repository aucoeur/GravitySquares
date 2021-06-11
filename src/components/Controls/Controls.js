import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate, pause, resume, restart } from '../../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCaretSquareDown,
  faCaretSquareUp,
  faCaretSquareLeft,
  faCaretSquareRight,
  // faArrowAltCircleUp,
  // faArrowAltCircleDown,
  // faArrowAltCircleLeft,
  // faArrowAltCircleRight,
  // faRedoAlt
  } from '@fortawesome/free-solid-svg-icons'
import './Controls.css'

export default function Control() {
  const dispatch = useDispatch()
  const isRunning = useSelector(state => state.game.isRunning)
  const gameOver = useSelector(state => state.game.gameOver)

  const disabled = (!isRunning || gameOver)

   useEffect(() => {
    document.addEventListener('keydown', (e) => {
      console.log(e)
      switch(e.key) {
        case "ArrowLeft": // LEFT
          dispatch(moveLeft())
          break
        case " ": // (SPACEBAR) ROTATE/UP
          dispatch(rotate())
          break
        case "ArrowRight": // RIGHT
          dispatch(moveRight())
          break
        case "ArrowDown": // DOWN
          dispatch(moveDown())
          break
        case "p": // PAUSE
          if(!gameOver) {
            isRunning ? dispatch(pause()) : dispatch(resume())
          }
          break
        case "n": // 'N'ew Game / RESTART
          if(gameOver) {
            dispatch(restart())
          }
          break
        default:
          //
      }
    })
  })

  return (
    <div className="controls">
      <button
        disabled={disabled}
        className="control-button"
        onClick={ () => disabled ? null : dispatch(moveLeft()) }>
          <FontAwesomeIcon icon={faCaretSquareLeft}/>
        </button>
      <button
        disabled={disabled}
        className="control-button"
        onClick={ () => disabled ? null : dispatch(moveRight()) }>
          <FontAwesomeIcon icon={faCaretSquareRight}/>
        </button>
      <button
        disabled={disabled}
        className="control-button"
        onClick={ () => disabled ? null : dispatch(rotate()) }>
          <FontAwesomeIcon icon={faCaretSquareUp}/>
        </button>
      <button
        disabled={disabled}
        className="control-button"
        onClick={ () => disabled ? null : dispatch(moveDown())
        }><FontAwesomeIcon icon={faCaretSquareDown}/></button>
    </div>
  )
}
