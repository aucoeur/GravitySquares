import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../../actions'
import './Controls.css'

export default function Control(props) {
  const dispatch = useDispatch()
  const isRunning = useSelector(state => state.isRunning)

  return (
    <div className="controls">
      <button className="control-button" onClick={
         isRunning ? dispatch(moveLeft()) : null
        }>Left</button>
      <button className="control-button" onClick={
         isRunning ? dispatch(moveRight()) : null
        }>Right</button>
      <button className="control-button" onClick={
          isRunning ? dispatch(rotate()) : null
        }>Rotate</button>
      <button className="control-button" onClick={
         isRunning ? dispatch(moveDown()): null
        }>Down</button>
    </div>
  )
}
