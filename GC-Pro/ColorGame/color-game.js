/*var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];*/
var n=6;
var colors = generateRandomColors(n); //Array of colors which we impart to our squares

var h1 = document.getElementsByTagName("h1");

var squares = document.querySelectorAll(".square"); //To select the squares

var msgdis = document.querySelector("#msg"); //To display Correct or Try Again

var pickedcolor = mychoice(); //pickedcolor denotes the right answer

var colordisplay = document.getElementById("colordis");

//To Acess the play button
var play1 = document.getElementById("play");

//To acess the easy button
var easy = document.getElementById("Ezy");

//To acess the hard button
var hard = document.getElementById("Hard");

colordisplay.textContent = pickedcolor;
var i;

//Through this loop....
//We will iterate over all the squares
//1.Give them a color
//2.If they are clicked,then we will perform some task
//According to the condition ki their color matches or not

for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
        
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
     
        if(clickedColor === pickedcolor) {
            msgdis.textContent = "Correct!";
            play1.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
            else {
                this.style.backgroundColor = "#232323";
                msgdis.textContent = "Try Again";
            }
        });
    }

//Ye function saare squares ke color badlega
//It is called if clickedcolor === pickedColor(Right ANswer)

 function changeColor(color) {
     for(var i=0;i<squares.length;i++)
         {
             squares[i].style.backgroundColor = color;
         }
 }


//Use of Function is Good And Would Prove Advantageous for debugging afterwards

//Ye wo function hai jo correct color ko randomise kar rha hai
//Math.floor decimals hataeyega
//Math.random is the function to generate random numbers
//Jis no. se Math.random ko multiply karo vo phir 0 to that no. ke beech mein random numbers deta hai


function mychoice() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//This Function ends here 


//\/\/\/\/\/\/\/\/\Starting The Random Colors Task Here..../\/\/\/\/\/\/\/\/\
//Ye wo function hai jo hume "n"(3/6) random colors dega for every new game

function generateRandomColors(n) {
    var arr = []; //Empty Array Declaration
    //Ye loop n times chalega aur n times ek random color array mein push karega
    for(var i=0;i<n;i++) {
        arr.push(randomColor());
        //get Random COlor
        //arr.push is used to push something to the array
        //Similar to pushing an element to a vector in C++
    }
    return arr;
}

//Ye helper function hai for the above function.
// Ye generatE vale function ko har baar ek random rgb value de rha hai.

function randomColor() {
    //Pick a red form 0 to 255
   var r =  Math.floor(Math.random() * 256);
    //Pick a green form 0 to 255
    var g =  Math.floor(Math.random() * 256);
    //Pick a blue form 0 to 255
    var b =  Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Giving Random Colors Task Done

//Building the Play Again Button

play1.addEventListener("click",function() {
//      alert("Clicked");
    play1.textContent = "New Colours";
    //Do all the work which reload does
    //Generate Random Colors Again
    colors = generateRandomColors(n);
    //Pick a color from the array to be selcted as pickedColor
    pickedcolor = mychoice();
    //Change Display color to match the picked color
    colordisplay.textContent = pickedcolor;
    //Apply the colors to square
    for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    }
 h1.style.background = "#232323";
});

easy.addEventListener("click", function() {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    n=3;
    colors = generateRandomColors(n);
    pickedcolor = mychoice();
    colordisplay.textContent = pickedcolor;
    for(var i=0;i<squares.length;i++)
        {
            if(colors[i])
                 {
                     squares[i].style.backgroundColor = colors[i];
                 }
            else
                {
                    squares[i].style.display = "none";
                }
        }
});

hard.addEventListener("click", function() {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    n=6;
     colors = generateRandomColors(n);
    pickedcolor = mychoice();
    colordisplay.textContent = pickedcolor;
    for(var i=0;i<squares.length;i++)
        {
            if(colors[i])
                 {
                     squares[i].style.backgroundColor = colors[i];
                    squares[i].style.display = "block";
           }
        }
    n = 6; 
});

