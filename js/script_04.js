//Hide these anchors until their conditions are met
document.getElementById("advance").style.visibility = "hidden";
document.getElementById("restart").style.visibility = "hidden";
//Initialize everything to be false at first
var win = false;
var timeRunOut = false;
//Initialize the button's x and y positions, and opacity
var x = window.innerWidth / 2.0 - 100;
var y = 200;
var a = 0;
//These values will be used for a ticker function
var deltaTime = 0;
var time = generateRandom(3);
var flipDir = 1;
//This function will change the direction of the moving button after every fewish seconds
function ticker() {
  deltaTime++;
  if(deltaTime > time) {
    deltaTime = 0;
    flipDir = -flipDir;
  }
}
setInterval(ticker, 1200);
//Function that generates a random number
function generateRandom(num) {
  return Math.random() * num;
}
//Function to move the button around the screen
function moveIt() {
  dx = generateRandom(7);
  dy = generateRandom(7);
  if(flipDir > 0) {
    x += dx;
    y += dy;
    document.getElementById("move").style.left = x + "px";
    document.getElementById("move").style.top = y + "px";
  } else if(flipDir < 0) {
    x -= dx;
    y += dy;
    document.getElementById("move").style.left = x + "px";
    document.getElementById("move").style.top = y + "px";
  }
  w = window.innerWidth;
  h = 600;
  if(x > w) x = 0;
  if(x < 0) x = w;
  if(y > h) y = 0;
  console.log(flipDir);
}
setInterval(moveIt, 1);

//Determines whether you win or lose
function generateResult() {
  if(!timeRunOut) {
    win = true;
    setTimeout("document.getElementById('move').remove()", 1);
    document.getElementById("result").innerHTML = "Clickity Click Click, Good Job!";
    document.getElementById("advance").style.visibility = "visible";
  }
}

//How many seconds we want to countdown from
var timeLeft = 20;
//Takes in two parameters: a function and an integer. The integer represents milliseconds.
setInterval(timer, 1000);
//Function that deals with the timer
function timer() {
  if(!win) {
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

//Turns opacity on and off when called
function toggleOpacity() {
  document.getElementById("button").style.opacity = a;
  if(a == 0) a = 100;
  else a = 0;
}
setInterval(toggleOpacity, 500);
