const result = ["You Win!", "You Lose!", "It's a Draw!"];
const choices = ["Rock", "Paper", "Scissors"]
var win = 0
var lose = 0
var draw = 0

function play(userinput) {
  var cs = choices[Math.floor(Math.random()*choices.length)];
  document.getElementById("ps").innerHTML = "You Chose " + userinput;
  document.getElementById("cs").innerHTML = "The Computer Chose " + cs;
  var ps = userinput;
  if (ps == cs) {
    document.getElementById("result").innerHTML = result[2];
    wld("Draw");
  }
  else if (ps == "Rock" && cs == "Scissors") { 
    document.getElementById("result").innerHTML = result[0];
    wld("Win");
  }

  else if (ps == "Scissors" && cs == "Paper") { 
    document.getElementById("result").innerHTML = result[0];
    wld("Win");
  }
  else if (ps == "Paper" && cs == "Rock") { 
    document.getElementById("result").innerHTML = result[0];
    wld("Win");
  }
  else { 
    document.getElementById("result").innerHTML = result[1];
    wld("Lose");
  }
}

function wld(result){
  rs = result
  if (result === "Draw"){
    draw += 1
    disply();
  }
  else if (result === "Win"){
    win += 1
    disply();
  }
  else {
    lose += 1
    disply();
  }
}

function disply(){
    document.getElementById("wins").innerHTML = "You have won " + win + " times.";
    document.getElementById("draws").innerHTML = "You have gotten a draw " + draw + " times.";
    document.getElementById("losses").innerHTML = "You have lost " + lose + " times.";
}