// Initial state for the game
const config = {

    // 'Arena'/Board Size
    rows: 18,
    cols: 10,

    // Set the default speed
    speed: 1000,
    // If zenMode enabled, speed stays the same throughout levels
    zenMode: true,
    // Allow fast drop
    fastDropMode: false,
    // Enable block final placement outline
    guideOutline: false,

    // Default key controls
    rotate: 'ARROW_UP' || 'W',
    down: 'ARROW_DOWN' || 'S',
    left: 'ARROW_LEFT' || 'A',
    right: 'ARROW_RIGHT' || 'D',
    hardDrop: ' ' || 'SPACE',
    pause: 'P',
    newGame: 'N'
  }


export default config
