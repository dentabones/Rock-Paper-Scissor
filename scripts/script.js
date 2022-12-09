"use strict";
const butt = document.querySelectorAll("button");
const announcement = document.querySelector(".announcement");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

//returns value depending on which button is clicked
function getUserChoice(e) {
  if (this.classList.value === "rock") {
    return "rock";
  } else if (this.classList.value === "paper") {
    return "paper";
  } else if (this.classList.value === "scissor") {
    return "scissor";
  }
}

butt.forEach((button) => button.addEventListener("click", getUserChoice));

//gets computers choice between rock paper and scissor
function getComputerChoice() {
  let indexNum = Math.floor(Math.random() * 3) + 1;

  if (indexNum === 1) {
    return "rock";
  } else if (indexNum === 2) {
    return "paper";
  } else if (indexNum === 3) {
    return "scissor";
  } else return "something went wrong";
}

//Compares user and computer choice, determines who wins
function playRound() {
  let computerChoice = getComputerChoice();
  let userChoice = getUserChoice();
  //return value for 0 and 1 used for tallying score in game function
  if (computerChoice === userChoice) {
    return console.log("Tie! No one wins this round");
  } else if (computerChoice === "rock" && userChoice === "scissor") {
    console.log("You Lose! Rock beats scissor");
    return 0;
  } else if (computerChoice === "paper" && userChoice === "rock") {
    console.log("You Lose! Paper beats rock");
    return 0;
  } else if (computerChoice === "scissor" && userChoice === "paper") {
    console.log("You Lose! Scissor beats paper");
    return 0;
  } else if (computerChoice === "rock" && userChoice === "paper") {
    console.log("You win! Paper beats rock");
    return 1;
  } else if (computerChoice === "paper" && userChoice === "scissor") {
    console.log("You win! Scissor beats paper");
    return 1;
  } else if (computerChoice === "scissor" && userChoice === "rock") {
    console.log("You win! Rock beats scissor");
    return 1;
  }
}

function game() {
  let round = 1;
  let userScored = 0;
  let computerScored = 0;

  for (let i = 0; i < 5; i++) {
    let results = playRound();
    if (results === 0) {
      computerScored++;
      computerScore.textContent = computerScored;
    } else if (results === 1) {
      userScored++;
      playerScore.textContent = userScored;
    }
    round++;
  }

  console.log(`Final results: User - ${userScore} Computer - ${computerScore}`);
}
