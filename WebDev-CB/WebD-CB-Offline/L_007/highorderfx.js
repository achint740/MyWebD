function add(){
    return 10;
}

console.log(typeof(add)); //function

function outerFun(anotherFun){
    console.log("This is outer Fun " + anotherFun)
}

function innerFun(){
    console.log("Inner func.");
}

// outerFun(); //This is outer Fun undefined 
outerFun(innerFun); 
//innerFun is passed as an arguement
//When passed as an arguement the statements
//of innerfun are passed as it is

outerFun(innerFun());    

/**************************************************************/
function f1(fx){
    console.log("this is f1 " + f3());
}

function f3(){
    console.log("this is f3");
}

f1(f3);



function Ac(){
    console.log("outer f");
    function AG(){
       console.log("new f");
    }
    return AG;
}

let x = Ac();
x();