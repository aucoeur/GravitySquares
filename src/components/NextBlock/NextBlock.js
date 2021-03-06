import { useSelector } from 'react-redux'
import { shapes } from '../../utils'
import GridSquare from '../GridSquare/GridSquare'

import './NextBlock.css'

// Draws the preview box showing the next block to drop
export default function NextBlock(props) {
  const nextShape = useSelector((state) => state.game.nextShape)
  // const box = Array(4).fill(Array(4).fill(0))
  const box = shapes[nextShape][0]

  // Map the block to the grid
  const grid = box.map((rows, row) => {
    return rows.map((square, col) => {
      return <GridSquare key={`${row}${col}`} color={square === 0 ? 0 : nextShape} />
      })
    })
  return (
    <div>

      <div className="nextHead">
        <h4>Next Block:</h4>
      </div>

      <div className="next-block">
        {grid}
      </div>

    </div>
  )
}
