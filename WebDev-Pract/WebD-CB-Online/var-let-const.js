console.log("Intro to Var Let & Const");

// Use this for a single line comment

/* Use this for
   A Multi_Line
   Comment  */

var a=10;//SemiColon May be Written
var b=20 //SemiColon May be omiited

console.log("a="+a);
console.log("b="+b);

let c=30;
console.log("Value of C = "+c);

const d=15;
console.log("Constant d is "+d);

//d++;  Not possible to change const value

let num = 1;
console.log(num + " " + typeof num);
num="HelloAchint";
console.log(num + " " + typeof num);

//Const Object
const obj = {
    a : 2,
    b : "Hello!",
    c : "World"
}

//Insertions & Deletions possible 
//But assigning a new value is not possible //Will throw an error

console.log(obj);
delete obj.b;
obj.d = "Welcome"
console.log(obj);