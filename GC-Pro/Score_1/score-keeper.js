var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1display = document.querySelector("#p1dis");
var p2display = document.querySelector("#p2dis");
var p2score = 0;
var p1score = 0;
var gameOver = false;
var winscore = 5;
var reset = document.getElementById("reset");
var num = document.querySelector("input");
var max1 = document.querySelector("#maxscore");
p1button.addEventListener("click", function () {
  if(!gameOver){
    p1score++;
      if(p1score === winscore){
           p1display.classList.add("winner");
           gameOver = true;
      }
    p1display.textContent = p1score;
  }
});

p2button.addEventListener("click", function () {
  if(!gameOver){
    p2score++;
      if(p2score === winscore){
         p2display.classList.add("winner"); 
          gameOver = true;
      }
    p2display.textContent = p2score;
  }
});

reset.addEventListener("click", function () {
    gameOver=false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = "0";
    p2display.textContent = "0";
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
});

num.addEventListener("change", function () {
    max1.textContent = num.value;
    winscore = Number(num.value);
});