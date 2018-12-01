var result = ["You Win!", "You Lose!", "It's a Draw!"];
var choices = ["Rock", "Paper", "Scissors"]

document.getElementById("option1").addEventListener("click", playrock)
document.getElementById("option2").addEventListener("click", playpaper)
document.getElementById("option3").addEventListener("click", playscissors)

function playrock() {
  cs = choices[Math.floor(Math.random()*choices.length)];
  document.getElementById("ps").innerHTML = "You Chose Rock";
  document.getElementById("cs").innerHTML = "The Computer Chose " + cs;
  ps = "Rock"
  if (ps == cs) {
    document.getElementById("result").innerHTML = result[2];
  }
  else if (cs == "Scissors") { 
    document.getElementById("result").innerHTML = result[0]
  }
  else { 
    document.getElementById("result").innerHTML = result[1]
  }
}

function playpaper() {
  cs = choices[Math.floor(Math.random()*choices.length)];
  document.getElementById("ps").innerHTML = "You Chose Paper";
  document.getElementById("cs").innerHTML = "The Computer Chose " + cs;
  ps = "Paper"
  if (ps == cs) {
    document.getElementById("result").innerHTML = result[2];
  }
  else if (cs == "Rock") { 
    document.getElementById("result").innerHTML = result[0]
  }
  else { 
    document.getElementById("result").innerHTML = result[1]
  }
}


function playscissors() {
  cs = choices[Math.floor(Math.random()*choices.length)];
  document.getElementById("ps").innerHTML = "You Chose Scissors";
  document.getElementById("cs").innerHTML = "The Computer Chose " + cs;
  ps = "Scissors"
  if (ps == cs) {
    document.getElementById("result").innerHTML = result[2];
  }
  else if (cs == "Paper") { 
    document.getElementById("result").innerHTML = result[0]
  }
  else { 
    document.getElementById("result").innerHTML = result[1]
  }
}