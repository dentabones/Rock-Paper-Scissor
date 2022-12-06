"use strict";

//function get prompts user to choose between rock paper or scissor
function getUserChoice() {
  let userChoice = prompt("Choose rock, paper, or scissor");
  return userChoice.toLowerCase();
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
  } else return "something went wrong";
}

//Compares user and computer choice, determines who wins
function playRound() {
  let computerChoice = getComputerChoice();
  let userChoice = getUserChoice();
  console.log(
    `This is computers choice ${computerChoice}`,
    ` and this is user's choice ${userChoice}`
  );

  if (computerChoice === userChoice) {
    return "Tie! No one wins this round";
  } else if (computerChoice === "rock" && userChoice === "scissor") {
    return "You Lose! Rock beats scissor";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    return "You Lose! Paper beats rock";
  } else if (computerChoice === "scissor" && userChoice === "paper") {
    return "You Lose! Scissor beats paper";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    return "You win! Paper beats rock";
  } else if (computerChoice === "paper" && userChoice === "scissor") {
    return "You win! Scissor beats paper";
  } else if (computerChoice === "scissor" && userChoice === "rock") {
    return "You win! Rock beats scissor";
  }
}

for (let i = 0; i < 5; i++) {
  console.log(i);
  console.log(playRound());
}
