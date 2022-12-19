//Array to store the bot's choices of rock paper or scissors
var array = ["Rock", "Paper", "Scissors"]
//Hide these anchors until their conditions are met
document.getElementById("tryAgain").style.visibility = "hidden";
document.getElementById("advance").style.visibility = "hidden";
document.getElementById("restart").style.visibility = "hidden";
//Initialize everything to be false at first
var rock = false;
var paper = false;
var scissors = false;
var win = false;
var tie = false;
//If player chooses rock
function setRock() {
  rock = true;
  document.getElementById("input").innerHTML = "You pick Rock."
  generateResult();
}
//If the player chooses paper
function setPaper() {
  paper = true;
  document.getElementById("input").innerHTML = "You pick Paper."
  generateResult();
}
//If the player chooses scissors
function setScissors() {
  scissors = true;
  document.getElementById("input").innerHTML = "You pick Scissors."
  generateResult();
}
//Generates a random result of either rock paper or scissors for the bot
var randomResult = Math.floor(Math.random() * 3);
var result = array[randomResult];

//Determines whether you win or lose or tie
function generateResult() {
  if(result == array[0]) {
    if(rock) tie = true;
    if(paper) win = true;
  } else if(result == array[1]) {
    if(paper) tie = true;
    if(scissors) win = true;
  } else {
    if(scissors) tie = true;
    if(rock) win = true;
  }
  if(tie) {
    document.getElementById("result").innerHTML = "Your oppenent picked " + array[randomResult] + ", it's a tie!";
    document.getElementById("tryAgain").style.visibility = "visible";
  } else if(win) {
    document.getElementById("result").innerHTML = "Your oppenent picked " + array[randomResult] + ", you win!";
    document.getElementById("advance").style.visibility = "visible";
  } else {
    document.getElementById("result").innerHTML = "Your oppenent picked " + array[randomResult] + ", you lose...";
    document.getElementById("restart").style.visibility = "visible";
  }
}
