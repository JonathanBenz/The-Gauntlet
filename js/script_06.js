//Hide these anchors until their conditions are met
document.getElementById("advance").style.visibility = "hidden";
document.getElementById("restart").style.visibility = "hidden";
document.getElementById("hit1").style.visibility = "hidden";
document.getElementById("hit2").style.visibility = "hidden";
document.getElementById("hit3").style.visibility = "hidden";
document.getElementById("hit4").style.visibility = "hidden";
document.getElementById("hit5").style.visibility = "hidden";
document.getElementById("hit6").style.visibility = "hidden";
document.getElementById("stand1").style.visibility = "hidden";
document.getElementById("stand2").style.visibility = "hidden";
document.getElementById("stand3").style.visibility = "hidden";
document.getElementById("stand4").style.visibility = "hidden";
document.getElementById("stand5").style.visibility = "hidden";
document.getElementById("stand6").style.visibility = "hidden";
//Initialize everything to be false at first
var win = false;
var bust = false;
var blackjack = false;
var pcScore = 0;
var npcScore = 0;
//Gets a random card between 1-10 for the player character and non-player character.
var pcCard1 = Math.floor(Math.random() * 10) + 1;
var pcCard2 = Math.floor(Math.random() * 10) + 1;
var npcCard1 = Math.floor(Math.random() * 10) + 1;
var npcCard2 = Math.floor(Math.random() * 10) + 1;
var npcCard3 = 0;
pcScore = pcCard1 + pcCard2;
npcScore = npcCard1 + npcCard2;

function beginGame() {
  document.getElementById("firstCards").innerHTML = "You get dealt a " + pcCard1 + " and a " + pcCard2 + ", totaling to " + pcScore + ".";
  document.getElementById("hit1").style.visibility = "visible";
  document.getElementById("stand1").style.visibility = "visible";
}
//Functions for when you hit instead of stand
function hit1() {
  setTimeout("document.getElementById('hit1').remove()", 1);
  setTimeout("document.getElementById('stand1').remove()", 1);
  var pcCard3 = Math.floor(Math.random() * 10) + 1;
  pcScore += pcCard3;
  if(pcScore == 21) {
    document.getElementById("choice1").innerHTML = "You get dealt a " + pcCard3 + ", now totaling to " + pcScore + ".";
    blackjack = true;
    generateResult();
  } else if(pcScore > 21) {
    document.getElementById("choice1").innerHTML = "You get dealt a " + pcCard3 + ", now totaling to " + pcScore + ".";
    bust = true;
    generateResult();
  } else {
    document.getElementById("choice1").innerHTML = "You get dealt a " + pcCard3 + ", now totaling to " + pcScore + ".";
    document.getElementById("hit2").style.visibility = "visible";
    document.getElementById("stand2").style.visibility = "visible";
  }
}
function hit2() {
  setTimeout("document.getElementById('hit2').remove()", 1);
  setTimeout("document.getElementById('stand2').remove()", 1);
  var pcCard4 = Math.floor(Math.random() * 10) + 1;
  pcScore += pcCard4;
  if(pcScore == 21) {
    document.getElementById("choice2").innerHTML = "You get dealt a " + pcCard4 + ", now totaling to " + pcScore + ".";
    blackjack = true;
    generateResult();
  } else if(pcScore > 21) {
    document.getElementById("choice2").innerHTML = "You get dealt a " + pcCard4 + ", now totaling to " + pcScore + ".";
    bust = true;
    generateResult();
  } else {
    document.getElementById("choice2").innerHTML = "You get dealt a " + pcCard4 + ", now totaling to " + pcScore + ".";
    document.getElementById("hit3").style.visibility = "visible";
    document.getElementById("stand3").style.visibility = "visible";
  }
}
function hit3() {
  setTimeout("document.getElementById('hit3').remove()", 1);
  setTimeout("document.getElementById('stand3').remove()", 1);
  var pcCard5 = Math.floor(Math.random() * 10) + 1;
  pcScore += pcCard5;
  if(pcScore == 21) {
    document.getElementById("choice3").innerHTML = "You get dealt a " + pcCard5 + ", now totaling to " + pcScore + ".";
    blackjack = true;
    generateResult();
  } else if(pcScore > 21) {
    document.getElementById("choice3").innerHTML = "You get dealt a " + pcCard5 + ", now totaling to " + pcScore + ".";
    bust = true;
    generateResult();
  } else {
    document.getElementById("choice3").innerHTML = "You get dealt a " + pcCard5 + ", now totaling to " + pcScore + ".";
    document.getElementById("hit4").style.visibility = "visible";
    document.getElementById("stand4").style.visibility = "visible";
  }
}
function hit4() {
  setTimeout("document.getElementById('hit4').remove()", 1);
  setTimeout("document.getElementById('stand4').remove()", 1);
  var pcCard6 = Math.floor(Math.random() * 10) + 1;
  pcScore += pcCard6;
  if(pcScore == 21) {
    document.getElementById("choice4").innerHTML = "You get dealt a " + pcCard6 + ", now totaling to " + pcScore + ".";
    blackjack = true;
    generateResult();
  } else if(pcScore > 21) {
    document.getElementById("choice4").innerHTML = "You get dealt a " + pcCard6 + ", now totaling to " + pcScore + ".";
    bust = true;
    generateResult();
  } else {
    document.getElementById("choice4").innerHTML = "You get dealt a " + pcCard6 + ", now totaling to " + pcScore + ".";
  }
}
function hit5() {
  setTimeout("document.getElementById('hit5').remove()", 1);
  setTimeout("document.getElementById('stand5').remove()", 1);
  var pcCard7 = Math.floor(Math.random() * 10) + 1;
  pcScore += pcCard7;
  if(pcScore == 21) {
    document.getElementById("choice5").innerHTML = "You get dealt a " + pcCard7 + ", now totaling to " + pcScore + ".";
    blackjack = true;
    generateResult();
  } else if(pcScore > 21) {
    document.getElementById("choice5").innerHTML = "You get dealt a " + pcCard7 + ", now totaling to " + pcScore + ".";
    bust = true;
    generateResult();
  } else {
    document.getElementById("choice5").innerHTML = "You get dealt a " + pcCard7 + ", now totaling to " + pcScore + ".";
  }
}
function hit6() {
  setTimeout("document.getElementById('hit6').remove()", 1);
  setTimeout("document.getElementById('stand6').remove()", 1);
  var pcCard8 = Math.floor(Math.random() * 10) + 1;
  pcScore += pcCard8;
  if(pcScore == 21) {
    document.getElementById("choice6").innerHTML = "You get dealt a " + pcCard8 + ", now totaling to " + pcScore + ".";
    blackjack = true;
    generateResult();
  } else if(pcScore > 21) {
    document.getElementById("choice6").innerHTML = "You get dealt a " + pcCard8 + ", now totaling to " + pcScore + ".";
    bust = true;
    generateResult();
  } else {
    document.getElementById("choice6").innerHTML = "You get dealt a " + pcCard8 + ", now totaling to " + pcScore + ".";
  }
}
function stand1() {
  setTimeout("document.getElementById('hit1').remove()", 1);
  setTimeout("document.getElementById('stand1').remove()", 1);
  //If npc is gonna lose, npc will hit.
  if(npcScore < pcScore) {
    npcCard3 = Math.floor(Math.random() * 10) + 1;
    npcScore += npcCard3;
  }
  if (npcScore == 21) {
    document.getElementById("choice1").innerHTML = "The dealer hits.\nThe dealer gets blackjack. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > 21) {
    win = true;
    document.getElementById("choice1").innerHTML = "The dealer hits.\nThe dealer busts. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > pcScore) {
    if(npcCard3 > 0) document.getElementById("choice1").innerHTML = "The dealer hits then stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ". Totaling to " + npcScore + ".";
    else document.getElementById("choice1").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    generateResult();
  } else {
    document.getElementById("choice1").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    win = true;
    generateResult();
  }
}
function stand2() {
  setTimeout("document.getElementById('hit2').remove()", 1);
  setTimeout("document.getElementById('stand2').remove()", 1);
  //If npc is gonna lose, npc will hit.
  if(npcScore < pcScore) {
    npcCard3 = Math.floor(Math.random() * 10) + 1;
    npcScore += npcCard3;
  }
  if (npcScore == 21) {
    document.getElementById("choice2").innerHTML = "The dealer hits.\nThe dealer gets blackjack. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > 21) {
    win = true;
    document.getElementById("choice2").innerHTML = "The dealer hits.\nThe dealer busts. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > pcScore) {
    if(npcCard3 > 0) document.getElementById("choice2").innerHTML = "The dealer hits then stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ". Totaling to " + npcScore + ".";
    else document.getElementById("choice2").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    generateResult();
  } else {
    document.getElementById("choice2").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    win = true;
    generateResult();
  }
}
function stand3() {
  setTimeout("document.getElementById('hit3').remove()", 1);
  setTimeout("document.getElementById('stand3').remove()", 1);
  //If npc is gonna lose, npc will hit.
  if(npcScore < pcScore) {
    npcCard3 = Math.floor(Math.random() * 10) + 1;
    npcScore += npcCard3;
  }
  if (npcScore == 21) {
    document.getElementById("choice3").innerHTML = "The dealer hits.\nThe dealer gets blackjack. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > 21) {
    win = true;
    document.getElementById("choice3").innerHTML = "The dealer hits.\nThe dealer busts. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > pcScore) {
    if(npcCard3 > 0) document.getElementById("choice3").innerHTML = "The dealer hits then stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ". Totaling to " + npcScore + ".";
    else document.getElementById("choice3").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    generateResult();
  } else {
    document.getElementById("choice3").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    win = true;
    generateResult();
  }
}
function stand4() {
  setTimeout("document.getElementById('hit4').remove()", 1);
  setTimeout("document.getElementById('stand4').remove()", 1);
  //If npc is gonna lose, npc will hit.
  if(npcScore < pcScore) {
    npcCard3 = Math.floor(Math.random() * 10) + 1;
    npcScore += npcCard3;
  }
  if (npcScore == 21) {
    document.getElementById("choice4").innerHTML = "The dealer hits.\nThe dealer gets blackjack. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > 21) {
    win = true;
    document.getElementById("choice4").innerHTML = "The dealer hits.\nThe dealer busts. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > pcScore) {
    if(npcCard3 > 0) document.getElementById("choice4").innerHTML = "The dealer hits then stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ". Totaling to " + npcScore + ".";
    else document.getElementById("choice4").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    generateResult();
  } else {
    document.getElementById("choice4").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    win = true;
    generateResult();
  }
}
function stand5() {
  setTimeout("document.getElementById('hit5').remove()", 1);
  setTimeout("document.getElementById('stand5').remove()", 1);
  //If npc is gonna lose, npc will hit.
  if(npcScore < pcScore) {
    npcCard3 = Math.floor(Math.random() * 10) + 1;
    npcScore += npcCard3;
  }
  if (npcScore == 21) {
    document.getElementById("choice5").innerHTML = "The dealer hits.\nThe dealer gets blackjack. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > 21) {
    win = true;
    document.getElementById("choice5").innerHTML = "The dealer hits.\nThe dealer busts. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > pcScore) {
    if(npcCard3 > 0) document.getElementById("choice5").innerHTML = "The dealer hits then stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ". Totaling to " + npcScore + ".";
    else document.getElementById("choice5").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    generateResult();
  } else {
    document.getElementById("choice5").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    win = true;
    generateResult();
  }
}
function stand6() {
  setTimeout("document.getElementById('hit6').remove()", 1);
  setTimeout("document.getElementById('stand6').remove()", 1);
  //If npc is gonna lose, npc will hit.
  if(npcScore < pcScore) {
    npcCard3 = Math.floor(Math.random() * 10) + 1;
    npcScore += npcCard3;
  }
  if (npcScore == 21) {
    document.getElementById("choice6").innerHTML = "The dealer hits.\nThe dealer gets blackjack. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > 21) {
    win = true;
    document.getElementById("choice6").innerHTML = "The dealer hits.\nThe dealer busts. Their cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ".";
    generateResult();
  } else if(npcScore > pcScore) {
    if(npcCard3 > 0) document.getElementById("choice6").innerHTML = "The dealer hits then stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ","  + npcCard3 + ". Totaling to " + npcScore + ".";
    else document.getElementById("choice6").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    generateResult();
  } else {
    document.getElementById("choice6").innerHTML = "The dealer stands.\nTheir cards were: " + npcCard1 + "," + npcCard2 + ". Totaling to " + npcScore + ".";
    win = true;
    generateResult();
  }
}

//Determines whether you win or lose or tie
function generateResult() {
  setTimeout("document.getElementById('hit2').remove()", 1);
  setTimeout("document.getElementById('stand2').remove()", 1);
  setTimeout("document.getElementById('hit3').remove()", 1);
  setTimeout("document.getElementById('stand3').remove()", 1);
  setTimeout("document.getElementById('hit4').remove()", 1);
  setTimeout("document.getElementById('stand4').remove()", 1);
  setTimeout("document.getElementById('hit5').remove()", 1);
  setTimeout("document.getElementById('stand5').remove()", 1);
  setTimeout("document.getElementById('hit6').remove()", 1);
  setTimeout("document.getElementById('stand6').remove()", 1);
  if(win) {
    document.getElementById("result").innerHTML = "You win. Congratulations.";
    document.getElementById("advance").style.visibility = "visible";
  } else if(blackjack) {
    document.getElementById("result").innerHTML = "Blackjack! Hell yeah!";
    document.getElementById("advance").style.visibility = "visible";
  } else if(bust) {
    document.getElementById("result").innerHTML = "Bust! You lose!";
    document.getElementById("restart").style.visibility = "visible";
  } else {
    document.getElementById("result").innerHTML = "The dealer wins. You lose.";
    document.getElementById("restart").style.visibility = "visible";
  }
}
