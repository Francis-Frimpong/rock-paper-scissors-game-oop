class Players {
  constructor() {
    this.score = 0;
  }
}

class Player extends Players {
  constructor() {
    super();
  }

  playerChoice() {
    const playerChoices = document.querySelector(".choices");
    playerChoices.addEventListener("click", (e) => {
      console.log(e.target.getAttribute("aria-label"));
    });
    return playerChoices;
  }
}

class Computer extends Players {
  constructor() {
    super();
  }

  computerChoice(choice) {
    const randomIdx = Math.floor(Math.random() * choice.length);
    return choice[randomIdx];
  }
}

class GamePlay {
  constructor() {
    this.player = new Player();
    this.computer = new Computer();

    this.player.score;
    this.computer.score;
  }
}

const player = new Player();
player.playerChoice();

const computer = new Computer();
computer.computerChoice(["Rock", "Paper", "Scissors"]);
