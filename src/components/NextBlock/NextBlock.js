import GridSquare from '../GridSquare/GridSquare'

import './NextBlock.css'

// Draws the preview box showing the next block to drop
export default function NextBlock(props) {
  const box = Array(4).fill(Array(4).fill(0))

  // Map the block to the grid
  const grid = box.map((rows, row) => {
    return rows.map((square, col) => {
      return <GridSquare key={`${row}${col}`} color={square} />
      })
    })
  return (
    <div className="next-block">
      {grid}
    </div>
  )
}
