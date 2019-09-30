/*
(function sayHello(name){
    console.log(`Hello ${name} How r u`);
})('Harry');

// scope of function now becomes within ()  
//sayHello('Rohan')  ERROR

function math(){
    console.log(Math.pow(3,4));
    console.log(Math.pow(4,3));
    console.log(Math.sqrt(4));
    console.log(Math.sin(90));
}

// math(); 

(function (l,p,sq,s){
    l(p(3,4));
    l(p(4,3));
    l(sq(4));
    l(s(60));
})(console.log,Math.pow,Math.sqrt,Math.sin);

*/


function normalFun(){
    console.log(this.x);
}

var x = 30;

//Arrow function -- lamda function support
//either this is not allowed
//or it refers to lexical (WIndow) Scope
//rrow functions return a single statement by default

let arrowFun = ()=>this.x;

let obj1 = {
    x : 10,
    y : arrowFun
}

let obj2 = {
    x : 20,
    y : arrowFun
}

console.log(obj1.y());
console.log(obj2.y());

