function f12(){
    console.log(x);
    var x = 10;
    console.log(x);
    x=x-10;
    console.log(x);
}

//Var gets hosted at the top

function fun1(){
    console.log("fun1");
}

function fun2(){
    console.log("fun2");
}

//Functions also gets hoisted at the top 
//not like in C++

var x = function(){
    console.log("new dec");
}

//Assignment 
//Not hoisted at top

var y = function fwer(){
    console.log("another dec");
}

// fwer is over shadowed by y 

