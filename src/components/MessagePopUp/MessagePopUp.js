
import { useSelector } from 'react-redux'
import './MessagePopUp.css'

export default function MessagePopUp(props) {
  const isRunning = useSelector(state => state.game.isRunning)
  const gameOver = useSelector(state => state.game.gameOver)

  let message = ''
  let isHidden = 'hidden'

  if (gameOver) {
    message = 'Game Over'
    isHidden = ''
  } else if (!isRunning) {
    message = 'Paused'
    isHidden = ''
  }
  return(
    <div className={`message-popup ${isHidden}`}>
      {message}
    </div>
  )
}
