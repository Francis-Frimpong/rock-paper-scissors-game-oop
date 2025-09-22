class PlayerChar {
  constructor() {
    this.score = 0;
  }
}

class Player extends PlayerChar {
  constructor() {
    super();
  }

  playerChoice(e) {
    return e.target.getAttribute("aria-label");
  }
}

class Computer extends PlayerChar {
  constructor() {
    super();
  }

  computerChoice(choice) {
    const randomIdx = Math.floor(Math.random() * choice.length);
    return choice[randomIdx];
  }
}

//
class GameEngine {
  constructor() {
    this.player = new Player();
    this.computer = new Computer();

    this.player.score;
    this.computer.score;

    this.choices = ["Rock", "Paper", "Scissors"];
  }

  gamePlay(e) {
    let player = this.player.playerChoice(e);
    // Guard against null or undifined
    if (!player) return;

    let computer = this.computer.computerChoice(this.choices);
    console.log(`Player:${player}, Computer:${computer}`);
  }

  addEventListeners() {
    const playerChoices = document.querySelector(".choices");
    playerChoices.addEventListener("click", (e) => this.gamePlay(e));
  }
}

const game = new GameEngine();
game.addEventListeners();
