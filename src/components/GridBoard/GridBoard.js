import React from 'react'
import { useSelector } from 'react-redux'
import { shapes } from '../../utils/shapes'
import GridSquare from '../GridSquare/GridSquare'

import './GridBoard.css'

// Represents a 10 x 18 grid of GridSquares
export default function GridBoard(props) {
  const game = useSelector((state) => state.game)
  const { grid, shape, rotation, x, y, isRunning, speed } = game
  const block = shapes[shape][rotation]
  const blockColor = shape

  const gridSquares = grid.map((rows, row) => {
    return rows.map((square, col) => {
      // Find the block x and y on the shape grid
      // Subtracting x and y from col and row, we get the position of the upper left corner of the block array as if it was superimposed over the main grid
      const blockX = col - x
      const blockY = row - y
      let color = square

      // Map current falling block to grid
      // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
      if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
        color = block[blockY][blockX] === 0 ? color : blockColor
      }

      // Generate a unique key for every block
      const k = row * grid[0].length + col;
      // Return a grid square
      return <GridSquare
              key={k}
              color={color} />
    })
  })

  return (
    <div className="grid-board">
      {gridSquares}
    </div>
  )
}
