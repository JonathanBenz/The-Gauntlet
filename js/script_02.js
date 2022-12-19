//Hide these anchors until their conditions are met
document.getElementById("advance").style.visibility = "hidden";
document.getElementById("restart").style.visibility = "hidden";
//Initialize everything to be false at first
var win = false;
//Generates a random number. If > .17, then player wins. 1 / 6 = .17
var randomNum = Math.random();
//Determines whether you win or lose
function generateResult() {
  if(randomNum > 0.17) win = true;
  if(win) {
    document.getElementById("result").innerHTML = "You pull the trigger. *click*. You survived.";
    document.getElementById("advance").style.visibility = "visible";
  } else {
    document.getElementById("result").innerHTML = "You pull the trigger. *BAM!!* Your brains start to spill out your head.";
    document.getElementById("restart").style.visibility = "visible";
  }
}
