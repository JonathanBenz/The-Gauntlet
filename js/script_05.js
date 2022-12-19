//Array of possible science category trivia prompts
var scienceQuestions = new Array();
scienceQuestions[0] = "Which planet in our Solar System has its moons named after characters from Shakespeare's 'The Tempest' and 'A Midsummer Night's Dream'?";
scienceQuestions[1] = "Which of the following is NOT an electron subshell level?";
scienceQuestions[2] = "How many bits are in a byte?";
//Array of possible history category trivia prompts
var historyQuestions = new Array();
historyQuestions[0] = "Who is the 8th president of the United States?";
historyQuestions[1] = "What is the Greek translation of the Old Testament called?";
historyQuestions[2] = "The year 1066 marks a very important year in English history. What occurred in this year?";
//Array of possible pop culture category trivia prompts
var popCultureQuestions = new Array();
popCultureQuestions[0] = "Which of the following horror films features Johnny Depp?";
popCultureQuestions[1] = "Which indie video game, developed by InnerSloth and released in 2018, blew up in popularity in 2020 and has profoundly impacted our society?";
popCultureQuestions[2] = "Which of the following is NOT a Metallica album?";

function generateScience() {
  setTimeout("document.getElementById('pickCat').remove()", 1);
  setTimeout("document.getElementById('categories').remove()", 1);
  var randomResult = Math.floor(Math.random() * scienceQuestions.length);
  var question = scienceQuestions[randomResult];
  document.getElementById("display").innerHTML = question;
  if(document.getElementById("display").innerHTML == scienceQuestions[0]) {
    document.getElementById("a1").value = "Jupiter";
    document.getElementById("a2").value = "Neptune";
    document.getElementById("a3").value = "Uranus";
    document.getElementById("a1").onclick = generateWrongResult;
    document.getElementById("a2").onclick = generateWrongResult;
    document.getElementById("a3").onclick = generateCorrectResult;
  }
  if(document.getElementById("display").innerHTML == scienceQuestions[1]) {
    document.getElementById("a1").value = "d";
    document.getElementById("a2").value = "k";
    document.getElementById("a3").value = "s";
    document.getElementById("a1").onclick = generateWrongResult;
    document.getElementById("a2").onclick = generateCorrectResult;
    document.getElementById("a3").onclick = generateWrongResult;
  }
  if(document.getElementById("display").innerHTML == scienceQuestions[2]) {
    document.getElementById("a1").value = "8";
    document.getElementById("a2").value = "16";
    document.getElementById("a3").value = "4";
    document.getElementById("a1").onclick = generateCorrectResult;
    document.getElementById("a2").onclick = generateWrongResult;
    document.getElementById("a3").onclick = generateWrongResult;
  }
}
function generateHistory() {
  setTimeout("document.getElementById('pickCat').remove()", 1);
  setTimeout("document.getElementById('categories').remove()", 1);
  var randomResult = Math.floor(Math.random() * historyQuestions.length);
  var question = historyQuestions[randomResult];
  document.getElementById("display").innerHTML = question;
  if(document.getElementById("display").innerHTML == historyQuestions[0]) {
    document.getElementById("a1").value = "Andrew Jackson";
    document.getElementById("a2").value = "Martin Van Buren";
    document.getElementById("a3").value = "James K. Polk";
    document.getElementById("a1").onclick = generateWrongResult;
    document.getElementById("a2").onclick = generateCorrectResult;
    document.getElementById("a3").onclick = generateWrongResult;
  }
  if(document.getElementById("display").innerHTML == historyQuestions[1]) {
    document.getElementById("a1").value = "Percy Jackson and the Olympians";
    document.getElementById("a2").value = "Eclogues";
    document.getElementById("a3").value = "Septuagint";
    document.getElementById("a1").onclick = generateWrongResult;
    document.getElementById("a2").onclick = generateWrongResult;
    document.getElementById("a3").onclick = generateCorrectResult;
  }
  if(document.getElementById("display").innerHTML == historyQuestions[2]) {
    document.getElementById("a1").value = "Battle of Hastings";
    document.getElementById("a2").value = "Signing of the Magna Carta";
    document.getElementById("a3").value = "Battle of Edington";
    document.getElementById("a1").onclick = generateCorrectResult;
    document.getElementById("a2").onclick = generateWrongResult;
    document.getElementById("a3").onclick = generateWrongResult;
  }
}
function generatePopCulture() {
  setTimeout("document.getElementById('pickCat').remove()", 1);
  setTimeout("document.getElementById('categories').remove()", 1);
  var randomResult = Math.floor(Math.random() * popCultureQuestions.length);
  var question = popCultureQuestions[randomResult];
  document.getElementById("display").innerHTML = question;
  if(document.getElementById("display").innerHTML == popCultureQuestions[0]) {
    document.getElementById("a1").value = "A Nightmare on Elm Street (1984)";
    document.getElementById("a2").value = "Hellraiser (1987)";
    document.getElementById("a3").value = "The Silence of the Lambs (1991)";
    document.getElementById("a1").onclick = generateCorrectResult;
    document.getElementById("a2").onclick = generateWrongResult;
    document.getElementById("a3").onclick = generateWrongResult;
  }
  if(document.getElementById("display").innerHTML == popCultureQuestions[1]) {
    document.getElementById("a1").value = "Fall Guys";
    document.getElementById("a2").value = "Fortnite";
    document.getElementById("a3").value = "Among Us";
    document.getElementById("a1").onclick = generateWrongResult;
    document.getElementById("a2").onclick = generateWrongResult;
    document.getElementById("a3").onclick = generateCorrectResult;
  }
  if(document.getElementById("display").innerHTML == popCultureQuestions[2]) {
    document.getElementById("a1").value = "Kill 'Em All";
    document.getElementById("a2").value = "Rust In Peace";
    document.getElementById("a3").value = "St. Anger";
    document.getElementById("a1").onclick = generateWrongResult;
    document.getElementById("a2").onclick = generateCorrectResult;
    document.getElementById("a3").onclick = generateWrongResult;
  }
}

//Hide these anchors until their conditions are met
document.getElementById("advance").style.visibility = "hidden";
document.getElementById("restart").style.visibility = "hidden";
//Initialize everything to be false at first
var timeRunOut = false;
var answerPicked = false;
//Determines whether you win or lose
function generateCorrectResult() {
  if(!timeRunOut) {
    answerPicked = true;
    setTimeout("document.getElementById('question').remove()", 1);
    document.getElementById("result").innerHTML = "Correct! You really know your stuff!";
    document.getElementById("advance").style.visibility = "visible";
  }
}
function generateWrongResult() {
  if(!timeRunOut) {
    answerPicked = true;
    setTimeout("document.getElementById('question').remove()", 1);
    document.getElementById("result").innerHTML = "Wrong. It's laughable how wrong you are...";
    document.getElementById("restart").style.visibility = "visible";
  }
}

//How many seconds we want to countdown from
var timeLeft = 30;
//Takes in two parameters: a function and an integer. The integer represents milliseconds.
setInterval(timer, 1000);
//Function that deals with the timer
function timer() {
  if(!answerPicked) {
    timeLeft--;
    document.getElementById("timer").innerHTML = "TIME LEFT: " + timeLeft + " SECONDS";
  }
  outOfTime();
}
//What happens when the players runs out of time
function outOfTime() {
  if(timeLeft <= 0 && !answerPicked) {
    timeRunOut = true;
    setTimeout("document.getElementById('question').remove()", 1);
    document.getElementById("timer").innerHTML = "TIME LEFT: 0 SECONDS"
    document.getElementById("result").innerHTML = "You ran out of time!!";
    document.getElementById("restart").style.visibility = "visible";
  }
}
