import React from 'react'
import GridSquare from '../GridSquare/GridSquare'

import './GridBoard.css'

// Represents a 10 x 18 grid of GridSquares
export default function GridBoard(props) {
  // generates array of 18 rows of 10 GridSquares each
  // const rows = 18
  // const cols = 10

  // const square = <GridSquare key={`${col}${row}`} color='1' /> # rip.. need the col row indices lol
  // const grid = Array(rows).fill(Array(cols).fill(square))

  const grid = []
  for (let row = 0; row < 18; row ++) {
      grid.push([])
      for (let col = 0; col < 10; col ++) {
          grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
      }
  }

  return (
    <div className="grid-board">
      {grid}
    </div>
  )
}
