alert("Hey All Fine!Continue..");

var p1Button = document.querySelector("#p1B");
var p2Button = document.querySelector("#p2B");
var reset = document.getElementById("RESET");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.getElementById("p1D");
var p2Display = document.getElementById("p2D");
var gameOver = false;
var maxScore = 5;
var max1 = document.getElementById("target");
var user_num = document.querySelector("input");
var windisplay = document.getElementById("windisp");

if(user_num.value === 0){
    gameOver = true;
}

p1Button.addEventListener("click",function(){
  if(!gameOver){
    p1Score++;
    p1Display.textContent = p1Score;
    if(p1Score===maxScore){
        gameOver = true;
        windisplay.textContent = "P1 is winner";
        //p1Display.style.color = "green";
        var c = "blue";
        setInterval(function(){
            if(c==="red"){
                c = "blue";
            }
            else{
                c= "red";
            }
            p1Display.style.color = c;
            windisplay.style.color = c;
        },300);
    }
  }
});

p2Button.addEventListener("click",function(){
  if(!gameOver){
    p2Score++;
    p2Display.textContent = p2Score;
    if(p2Score===maxScore){
        gameOver = true;
        windisplay.textContent = "P2 is winner";
        var c = "blue";
        setInterval(function(){
            if(c==="red"){
                c = "blue";
            }
            else{
                c= "red";
            }
            p2Display.style.color = c;
            windisplay.style.color = c;
        },300);
    }
  }
});



reset.addEventListener("click",function(){
     p1Score=0;
     p2Score=0;
     p1Display.textContent = p1Score;
     p2Display.textContent = p2Score;
     p1Display.style.color = "black";
     p2Display.style.color = "black";
     if(gameOver){
         gameOver = false;
     }
});

user_num.addEventListener("change",function(){
    max1.textContent = user_num.value;
    maxScore = Number(user_num.value);
});

