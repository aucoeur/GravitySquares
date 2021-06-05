import { useDispatch, useSelector } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../../actions'
import './Controls.css'

export default function Control() {
  const dispatch = useDispatch()
  const isRunning = useSelector(state => state.isRunning)
  const gameOver = useSelector(state => state.gameOver)

  return (
    <div className="controls">
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={ (e) => {
          if (!isRunning || gameOver) { return }
          dispatch(moveLeft())
        }}>Left</button>
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) { return }
          dispatch(moveRight())
        }}>Right</button>
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) { return }
          dispatch(rotate())
        }}>Rotate</button>
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) { return }
          dispatch(moveDown())
        }}>Down</button>
    </div>
  )
}
