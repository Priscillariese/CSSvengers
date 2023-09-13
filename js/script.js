
const startButton = document.getElementById
("start-button")

let game

  function startGame() {
    console.log('start game')
      game = new Game()
      game.start()  }

      startButton.addEventListener('click', function () {
        startGame()
      })
    
      restartButton.addEventListener('click', () => {
        location.reload()
      })
