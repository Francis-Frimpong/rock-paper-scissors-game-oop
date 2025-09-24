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

    this.playerScoreCard = document.querySelector(".player-value");
    this.computerScoreCard = document.querySelector(".computer-value");

    this.results = document.querySelector(".results");
    this.winningTag = document.querySelector(".winnerTag");

    this.playerChoices = document.querySelector(".choices");
    this.resetBtn = document.querySelector(".btn--primary");

    this.choices = ["Rock", "Paper", "Scissors"];
    this.winningScore = 5;
  }

  gamePlay(e) {
    let player = this.player.playerChoice(e);
    // Guard against null or undifined
    if (!player) return;

    let computer = this.computer.computerChoice(this.choices);
    // console.log(`Player:${player}, Computer:${computer}`);

    // rule for game
    const rule = {
      Rock: "Scissors",
      Scissors: "Paper",
      Paper: "Rock",
    };
    // Draw condition and win condition
    if (player === computer) {
      return;
    } else if (rule[player] === computer) {
      this.playerScoreCard.textContent = this.player.score += 1;
    } else {
      this.computerScoreCard.textContent = this.computer.score += 1;
    }

    // Checking for overall winner
    if (this.player.score >= this.winningScore) {
      this.winningTag.textContent = "Player Wins!!!";
      this.results.classList.remove("hide-banner");
    } else if (this.computer.score >= this.winningScore) {
      this.winningTag.textContent = "Computer Wins!!!";
      this.results.classList.remove("hide-banner");
    }
  }

  resetScore() {
    this.playerScoreCard.textContent = this.player.score = 0;
    this.computerScoreCard.textContent = this.computer.score = 0;

    this.results.classList.add("hide-banner");
  }

  addEventListeners() {
    this.resetBtn.addEventListener("click", () => this.resetScore());
    this.playerChoices.addEventListener("click", (e) => this.gamePlay(e));
  }
}

const game = new GameEngine();
game.addEventListeners();
