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

console.log(getComputerChoice());
