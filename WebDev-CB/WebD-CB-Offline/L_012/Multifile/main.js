let x1;
if(typeof window == "undefined"){
     x1 = require('./lib.js');
    
}
else{
    // console.log("added value = " + add(5,4));
    x1 = window;
}

console.log(x1.add(10,9));