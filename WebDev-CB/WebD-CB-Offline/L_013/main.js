const lib1 = require('./lib1.js');
// const liba = require('./lib1.js');
const lib2 = require('./lib2.js');

console.log(lib1);
// console.log(liba == lib1);
console.log(lib2);
console.log(lib1.lib2.lib1 == lib1);
//Module Map

//     Key   --   Value 
// File Name -- module exports ka object

//Checks first
//If already present -->no work
//else call and update map

//to require only one function/value/.....
//Destructuring module.exports

// const {add} = ..... 

//OR
// global space 
//Polluuting the global space
// global.add = add; 
