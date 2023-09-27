let winMsg = "Congratulations, you've won 30% discount on your item"
let tieMsg = 'Oops you were very close'
let loseMsg = 'Oops you missed it'
let statusDisplay = document.querySelector('#status-head')
let buttons = document.querySelectorAll('button')

let possibleMoves = ['Mario', 'Subway', 'PS']

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
  statusDisplay.textContent =
    'Select your favorite game and stand the chance of winning 30% discount on your item'
  buttons.forEach((button, index) => {
    button.textContent = possibleMoves[index]
    button.style.display = 'inline-block'
    buttons[index].addEventListener('click', endGame)
  })
}

let endGame = (event) => {
  let playerMove = possibleMoves.indexOf(event.target.textContent)
  let computerMove = randomMove()

  statusDisplay.textContent = calcResult(playerMove, computerMove)

  buttons.forEach((button, index) => {
    if (index == 1) {
      button.textContent = 'Proceed to Checkout'
      button.removeEventListener('click', endGame)
      button.addEventListener('click', startGame)
    } else {
      button.style.display = 'none'
    }
  })
}

startGame()
