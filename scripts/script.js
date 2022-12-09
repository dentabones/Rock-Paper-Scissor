"use strict";
const butt = document.querySelectorAll("button");
const announcement = document.querySelector(".announcement");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const currentRound = document.querySelector(".round");

let round = 1;
let userScored = 0;
let computerScored = 0;

//returns value depending on which button is clicked
function getUserChoice(e) {
  let userChoice;
  let computerChoice = getComputerChoice();

  if (this.className === "rock") {
    userChoice = "rock";
  } else if (this.className === "paper") {
    userChoice = "paper";
  } else if (this.className === "scissor") {
    userChoice = "scissor";
  }

  let outcome = playRound(userChoice, computerChoice);

  if (outcome === 0) {
    computerScored++;
    computerScore.textContent = computerScored;
  } else if (outcome === 1) {
    userScored++;
    playerScore.textContent = userScored;
  } else announcement.textContent = "Tie! No one wins this round";

  round++;
  currentRound.textContent = round;

  if (userScored === 5 || computerScored === 5) {
    announcement.textContent = `Final results: User - ${userScored} Computer - ${computerScored}`;
    reset();
  }
}

//gets computers choice between rock paper and scissor
function getComputerChoice() {
  let indexNum = Math.floor(Math.random() * 3) + 1;

  if (indexNum === 1) {
    return "rock";
  } else if (indexNum === 2) {
    return "paper";
  } else if (indexNum === 3) {
    return "scissor";
  }
}

//Compares user and computer choice, determines who wins
function playRound(player, computer) {
  let computerChoice = computer;
  let userChoice = player;
  //return value for 0 and 1 used for tallying score in game function
  if (computerChoice === userChoice) {
    return;
  } else if (computerChoice === "rock" && userChoice === "scissor") {
    announcement.textContent = "You Lose! Rock beats scissor";
    return 0;
  } else if (computerChoice === "paper" && userChoice === "rock") {
    announcement.textContent = "You Lose! Paper beats rock";
    return 0;
  } else if (computerChoice === "scissor" && userChoice === "paper") {
    announcement.textContent = "You Lose! Scissor beats paper";
    return 0;
  } else if (computerChoice === "rock" && userChoice === "paper") {
    announcement.textContent = "You win! Paper beats rock";
    return 1;
  } else if (computerChoice === "paper" && userChoice === "scissor") {
    announcement.textContent = "You win! Scissor beats paper";
    return 1;
  } else if (computerChoice === "scissor" && userChoice === "rock") {
    announcement.textContent = "You win! Rock beats scissor";
    return 1;
  }
}

function reset() {
  round = 1;
  userScored = 0;
  computerScored = 0;

  playerScore.textContent = userScored;
  computerScore.textContent = computerScored;
  currentRound.textContent = round;
}

butt.forEach((button) => button.addEventListener("click", getUserChoice));
