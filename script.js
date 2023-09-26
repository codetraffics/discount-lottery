let winMsg = 'Congratulations'
let tieMsg = 'Oops you were very close'
let loseMsg = 'Oops you missed it'
let statusDisplay = document.querySelector('#status-head')
let playersMoves = document.querySelectorAll('.player-moves-display h2')
let buttons = document.querySelectorAll('button')

let possibleMoves = ['Rock', 'Paper', 'Scissors']

// functions
let calcResult = (move1, move2) => {
  let result = move1 - move2
  if (result == 1 || result + 3 == 1) {
    return winMsg
  } else if (result == 2 || result + 3 == 2) {
    return loseMsg
  } else {
    return tieMsg
  }
}

let randomMove = () => {
  return Math.floor(Math.random() * 3)
}

let startGame = () => {
  statusDisplay.textContent = 'Choose!'
  buttons.forEach((button, index) => {
    button.textContent = possibleMoves[index]
    button.style.display = 'inline-block'
    buttons[index].addEventListener('click', endGame)
  })

  playersMoves.forEach((move, index) => (move.style.display = 'none'))
}

let endGame = (event) => {
  let playerMove = possibleMoves.indexOf(event.target.textContent)
  let computerMove = randomMove()

  statusDisplay.textContent = calcResult(playerMove, computerMove)

  playersMoves.forEach((move, index) => (move.style.display = 'inline-block'))
  playersMoves[0].textContent = `You played ${possibleMoves[playerMove]}`
  playersMoves[1].textContent = `Computer played ${possibleMoves[computerMove]}`

  buttons.forEach((button, index) => {
    if (index == 1) {
      button.textContent = 'Play again'
      button.removeEventListener('click', endGame)
      button.addEventListener('click', startGame)
    } else {
      button.style.display = 'none'
    }
  })
}

startGame()
