var result = ["You Win!", "You Lose!", "It's a Draw!"];
var choices = ["Rock", "Paper", "Scissors"]
var win = 0
var lose = 0
var draw = 0

function play(userinput) {
  cs = choices[Math.floor(Math.random()*choices.length)];
  document.getElementById("ps").innerHTML = "You Chose " + userinput;
  document.getElementById("cs").innerHTML = "The Computer Chose " + cs;
  ps = userinput;
  if (ps == cs) {
    document.getElementById("result").innerHTML = result[2];
  }
  else if (ps == "Rock" && cs == "Scissors") { 
    document.getElementById("result").innerHTML = result[0];
  }

  else if (ps == "Scissors" && cs == "Paper") { 
    document.getElementById("result").innerHTML = result[0];
  }
  else if (ps == "Paper" && cs == "Rock") { 
    document.getElementById("result").innerHTML = result[0];
  }
  else { 
    document.getElementById("result").innerHTML = result[1];
  }
}

function win(result){
  rs = result
  if (result = "Draw"){
    
  }

}