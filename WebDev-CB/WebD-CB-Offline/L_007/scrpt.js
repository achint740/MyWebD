//var x = prompt("Enter ur name");
//alert("Hello " + x);

console.log("Hello");

const a = 10;
console.log(a);
// a = a + 1;  Can't change constant values

var b = 100;
console.log(b);
b++;
console.log(b);

//Diff b/w var and let
//Scope of var  :  functional
//Scope of let  :  Block
/*
let x=10;
if(true){
    console.log(x);
    x=20;
}
console.log(x);

//Output :
//10
//20

if(true){
    let y=10;
    console.log(y);
    y=20;
}
console.log(y);

//Output :
//10
//undefined

let k=10;
function worker(){
    console.log(k);
    k=20;
}
worker();
console.log(k);

//Output : 
//10
//20

function worker(){
    let k=10;
    console.log(k);
    k=20;
}
worker();
console.log(k);

//Output :
//10
//undefined

var i=10;
function worker1(){
      if(true){
          console.log(i);
          i=20;
      }
}
worker1();
console.log(i);

//Output : 
//10
//20

//------------------------------------------//

function worker1(){
    var j=10;
      if(true){
          console.log(j);
          j=20;
      }
}
worker1();
console.log(j);

//Output :
//10
//undefined

//------------------------------------------//

function worker2(){
    let k=10;
    if(true){
        console.log(k);
        let k=15;
        k=20;
    }
}
worker2();
console.log(k); 

//No Output

//------------------------------------------//

function worker3(){
    var m=10;
    if(true){
        console.log(m);
        var m=15;
        m=20;
    }
}
worker3();
console.log(m); 

//Output :
//10
//undefined

//------------------------------------------//

function worker4(){
    // var m=10;
    if(true){
        console.log(m);
        var m=15;
        m=20;
    }
}
worker4();
// console.log(m); 

//Output : 
//Undefined

//------------------------------------------//

//Make a string
*/

'use strict'

let str1 = "Hello \"World\"";
console.log(str1);
console.log(typeof(str1)); //String
console.log(typeof(2));  //Number
console.log(typeof('H'));  //String

//Object

let obj = {
    a:10,
    b:'Hello',
    c:10.11
}
console.log(obj);

// obj.d = true;
// console.log(obj);
//Can add .....

let obj1 = {
    'a':10,
    'b':'Hello',
    'c':10.11
}
console.log(obj1);

//obj = obj1 
//key is always a string

// To find a use . operator with the object 
//can't access those whose key is empty
//For that obj[' ']
