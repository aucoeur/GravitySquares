
import { shapes } from './blockLibrary'
import { addBlockToGrid, canMoveTo, makeGrid, checkRows } from './gridUtils'
import { randomShape, nextRotation } from './blockUtils'

import config from './config'

// Initial state for the game
export const defaultState = () => {
  console.log(config.rows, config.cols)
  return {

    // Generate main board/'arena'
    grid: makeGrid(config.rows, config.cols),

    shape: randomShape(), // Active shape on board
    rotation: 0, // default shape orientation
    nextShape: randomShape(),

    // set the 'x' position of the shape to 5 and y to -4, which puts the shape in the center of the grid, above the top
    x: 3,
    y: -4,
    // Set the score & level to 0
    score: 0,
    level: 0,
    // Set the default speed
    speed: 1000,

    // Tell the game that it's currently running
    isRunning: true,
    gameOver: false
  }
}
export {
  shapes,
  addBlockToGrid,
  canMoveTo,
  nextRotation,
  makeGrid,
  checkRows,
  randomShape,
}
