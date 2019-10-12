const lib1 = require('./lib1.js');
console.log('Running lib2');

b=11;

function add(a,b){
    return a+b;
}

module.exports.b = b;
module.exports.lib1 = lib1;
module.exports.add = add;

//Circular ref.

