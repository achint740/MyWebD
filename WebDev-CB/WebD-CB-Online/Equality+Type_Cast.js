//Equality
//Type Casting

console.log(1=="1");     //True 
                         //Checks whether after type conversion are both same
console.log(1==="1");    //False
                         //Checks Directly
console.log((1+"1"==11));//True
console.log(("11"-1)==1);//False 
                         //Subtracting from a string gives NaN - Not A Number
console.log(""==[]);     //True
console.log(""==[]);     //True
console.log(""==[]);     //True
                         // [] can be typecasted to 0 & ""can also be typecasted to zero
console.log({}+[])       // + tries to typecast the variable to it's right to a number
                         // And empty array corresponds to 0 -- An Empty Object
let o = {};
console.log(o.toString());

//{} represents block or object
//Ans=LHS RHS Concept

//Equality Comparison & Sameness
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

