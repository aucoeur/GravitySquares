import { useDispatch, useSelector } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../../actions'
import './Controls.css'

export default function Control() {
  const dispatch = useDispatch()
  const isRunning = useSelector(state => state.game.isRunning)
  const gameOver = useSelector(state => state.game.gameOver)

  const disabled = (!isRunning || gameOver)
  return (
    <div className="controls">
      <button
        disabled={disabled}
        className="control-button"
        onClick={ () => disabled ? null : dispatch(moveLeft()) }>Left</button>
      <button
        disabled={disabled}
        className="control-button"
        onClick={ () => disabled ? null : dispatch(moveRight()) }>Right</button>
      <button
        disabled={disabled}
        className="control-button"
        onClick={ () => disabled ? null : dispatch(rotate()) }>Rotate</button>
      <button
        disabled={disabled}
        className="control-button"
        onClick={ () => disabled ? null : dispatch(moveDown())
        }>Down</button>
    </div>
  )
}
