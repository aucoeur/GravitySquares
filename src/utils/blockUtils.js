import {shapes } from './blockLibrary'

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export const randomShape = () => {
  return random(1, shapes.length - 1)
}

export const nextRotation = (shape, rotation) => {
  return (rotation + 1) % shapes[shape].length
}
