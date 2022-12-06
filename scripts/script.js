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
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let results = playRound();
    if (results === 0) {
      computerScore++;
    } else if (results === 1) {
      userScore++;
    }
  }

  console.log(`Final results: User - ${userScore} Computer - ${computerScore}`);
}

game();
