
import { shapes, nextRotation, canMoveTo } from './shapes'

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomShape = () => {
  return random(1, shapes.length - 1)
}

// returns the default grid
export const gridDefault = () => {
  const rows = 18
  const cols = 10

  return Array(rows).fill(Array(cols).fill(0))
}

// Adds current shape to grid
export const addBlockToGrid = (shape, grid, x, y, rotation) => {
    // Get the block array
    const block = shapes[shape][rotation];
    // Copy the grid
    const newGrid = [...grid];
    // Map the Block onto the grid
    for (let row = 0; row < block.length; row++) {
        for (let col = 0; col < block[row].length; col++) {
            if (block[row][col]) {
                newGrid[row + y][col + x] = shape;
            }
        }
    }
    return newGrid;
}

// Checks for completed rows and scores points
export const checkRows = (grid) => {
  // Points increase for each row completed
  // i.e. 40 points for completing one row, 100 points for two rows
  const points = [0, 40, 100, 300, 1200]
  let completedRows = 0
  for (let row = 0; row < grid.length; row++) {
    // No empty cells means it can't find a 0, so the row must be complete!
    if (grid[row].indexOf(0) === -1) {
      completedRows += 1
      // Remove the row and add a new empty one at the top
      grid.splice(row, 1)
      grid.unshift(Array(10).fill(0))
    }
  }
  return points[completedRows]
}

// Return the default state for the game
export const defaultState = () => {
  return {
    // Create an empty grid
    grid: gridDefault(),
    // Get a new random shape
    shape: randomShape(),
    // set rotation of the shape to 0
    rotation: 0,
    // set the 'x' position of the shape to 5 and y to -4, which puts the shape in the center of the grid, above the top
    x: 5,
    y: -4,
    // set the index of the next shape to a new random shape
    nextShape: randomShape(),
    // Tell the game that it's currently running
    isRunning: true,
    // Set the score to 0
    score: 0,
    // Set the default speed
    speed: 1000,
    // Game isn't over yet
    gameOver: false
  }
}


export {
  shapes,
  canMoveTo,
  nextRotation,
}
