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
//Objects in JS are created using HashMap

//Arrays

//Can be heterogeneous

let arr = ['hello',1,2,true,3.11,5,'Achi'];
console.log(arr);

//to refer ith index arr[i]
//Created using LL

console.log(typeof(arr));

//Push -- add at last
//pop -- remove at last
//shift -- remove at front
//unshift -- add at front

arr.push("Add");
arr.push(false);
arr.pop();
console.log(arr);
arr.unshift("add front");
console.log(arr);

//For loop
for(let i=0;i<10;i++){
    console.log(i);
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//Bucket Creation doesn't return anything
//In C++ it returns true/false
//Assignment returns value

// console is REPL Read Evalute Print Loop

let abc = 10;
let bcd = 10.11;
let cde = 'H';
let def = 'Hello';
let efg = true;
let fgh;
let obj11 = {
    a : 10,
    b : 20.50
}
let arr1 = ['H',1,2,'Hello'];

console.log(typeof(abc));  //Number
console.log(typeof(bcd)); //Float
console.log(typeof(cde));  //String
console.log(typeof(def)); //String
console.log(typeof(efg));  //Boolean
console.log(typeof(fgh));  //Undefined
console.log(typeof(arr1)); //Object
console.log(typeof(obj11));  //Object

//Type Casting

let a12 = '10' + 1;
console.log(a12); //1 gets appended

let b12 = '10' - 1; //Subtraction priority for 2 numbers
console.log(b12); //9

let c12 = '10' + 1 - 1; //Left to Right
console.log(c12);  //100

// 1 ==1  -->true 
// 1 == '1' -->true
// 1 === '1' -->false 
// 0 == [] -->true 
// 0 == '\n' -->true 
// 0 == '\t' -->true 
// '\t' == '\n' -->false here 2 strings are compared
                //So not type casted
// [] == '\t' -->false 
// array type conversion gives empty string 

// let myarr = [10,20,30];
// myarr = [10,20,30] -->false memory ref not same 

// let myarr = [10,20];
// let b = arr;
// myarr == b  -->true 

// same for objects 

//Call By .......  ??

let x11 = 11;
let x12 = 12;
function swap(a,b){
    temp=a;
    a=b;
    b=temp;
}
console.log(x11,x12);
swap(x11,x12);
console.log(x11,x12);

function swap1(arr34){
    temp = arr34[0];
    arr34[0]=arr34[1];
    arr34[1]=temp;
}
let arr01 = [10,2];
console.log(arr01);
swap1(arr01);
console.log(arr01);

console.log({}+[]); // 0
console.log([]+{}); // [object object]  added an object 

// var ans = {} + [];
// console.log(ans);

// NaN note a number 

// can convert array to string [].toString 

console.log([[],[]].toString());    //empty string , empty string
console.log(+[[],[]]);


let m1 = parseInt("11 11.11");
console.log(m1);

console.log(0/0); //undefined
console.log(Infinity-Infinity); //undefined


//Default Arguements
function add(a=0,b=0,c=0){
    return a+b+c;
}

console.log(add(10));
console.log(add(10,20));
console.log(add(10,20,30));