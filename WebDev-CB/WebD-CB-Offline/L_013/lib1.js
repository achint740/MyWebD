const lib2 = require('./lib2.js');
console.log('Running lib1');

a=10;


module.exports.a = a;
module.exports.lib2 = lib2;

// #circular dependency 