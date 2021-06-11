// Actions
export const PAUSE      = "PAUSE"       // Pause the game
export const RESUME     = "RESUME"      // Resume a paused game
export const MOVE_LEFT  = "MOVE_LEFT"   // Move piece left
export const MOVE_RIGHT = "MOVE_RIGHT"  // Move piece right
export const ROTATE     = "ROTATE"      // Rotate piece
export const MOVE_DOWN  = "MOVE_DOWN"   // Move piece down
export const GAME_OVER  = "GAME_OVER"   // The game is over
export const RESTART    = "RESTART"     // Restart Game
export const NEW_GAME = "NEW_GAME"

// Action Creators
export const pause = () => {
  return { type: PAUSE }
}

export const resume = () => {
  return { type: RESUME }
}

export const moveLeft = () => {
  return { type: MOVE_LEFT }
}

export const moveRight = () => {
  return { type: MOVE_RIGHT }
}

export const rotate = () => {
  return { type: ROTATE }
}

export const moveDown = () => {
  return { type: MOVE_DOWN }
}

export const gameOver = () => {
  return { type: GAME_OVER }
}

export const restart = () => {
  return { type: RESTART }
}

export const newGame = () => {
  return { type: NEW_GAME }
}
