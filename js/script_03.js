//Array of possible sentences for the player to be prompted to type.
//All these sentences are lyrics from various Tool songs.
var sentences = new Array();
sentences[0] = "Let the waters kiss and transmutate these leaden grudges into gold.";
sentences[1] = "Born to bear and read to all the details of our ending, but I forgot my pen.";
sentences[2] = "Cold silence has a tendency to atrophy any sense of compassion.";
sentences[3] = "Reaching out to embrace the random, reaching out to embrace whatever may come.";
sentences[4] = "As full and bright as I am, this light is not my own and a million light reflections pass over me.";
sentences[5] = "There's something kinda sad about the way that things have come to be. Desensitized to everything, what became of subtlety?";
//Displays a random sentence from our array of possible prompts
var randomResult = Math.floor(Math.random() * sentences.length);
var sentence = sentences[randomResult];
document.getElementById("display").innerHTML = '"' + sentence + '"';
//Hide these anchors until their conditions are met
document.getElementById("advance").style.visibility = "hidden";
document.getElementById("restart").style.visibility = "hidden";
//Initialize everything to be false at first
var win = false;
var timeRunOut = false;
var typo = false;
//Determines whether you win or lose
function generateResult() {
  var input = document.getElementById("txt").value;
  if(input == sentence) {
    win = true;
  }
  if(win) {
    document.getElementById("result").innerHTML = "Good typing skills! You may advance.";
    document.getElementById("advance").style.visibility = "visible";
  } else if(timeRunOut == true) outOfTime();
  else {
    typo = true;
    document.getElementById("result").innerHTML = "You made a typo. That will not be tolerated.";
    document.getElementById("restart").style.visibility = "visible";
  }
}

//How many seconds we want to countdown from
var timeLeft = 20;
//Takes in two parameters: a function and an integer. The integer represents milliseconds.
setInterval(timer, 1000);
//Function that deals with the timer
function timer() {
  if(!typo && !win) {
    timeLeft--;
    document.getElementById("timer").innerHTML = "TIME LEFT: " + timeLeft + " SECONDS";
  }
  outOfTime();
}
//What happens when the players runs out of time
function outOfTime() {
  if(timeLeft <= 0 && !win) {
    timeRunOut = true;
    document.getElementById("timer").innerHTML = "TIME LEFT: 0 SECONDS"
    document.getElementById("result").innerHTML = "You're too slow!";
    document.getElementById("restart").style.visibility = "visible";
  }
}
