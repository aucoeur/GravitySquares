import { useDispatch } from 'react-redux'
import { newGame } from '../../actions'

import './Landing.css';

export default function Landing() {
  const dispatch = useDispatch()

  return (
    <>
    <h1>GravitySquares</h1>

    <button onClick={() => {dispatch(newGame())}}>New Game</button>
    </>
  )
}
