import React from 'react'
import './GridSquare.css'

// Represents a grid square with a color
export default function GridSquare(props) {
  const { color } = props
  const classes = `grid-square color-${color}`
  return (
    <div className={classes}>

    </div>
  )
}
