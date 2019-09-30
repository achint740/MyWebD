let a = {
    k:1,
    l:"Hello",
    m:true
};

let b = Object.create(a);
console.log(b.m);
console.log(b.__proto__);
let c = Object.create(b);
console.log(c.k);
console.log(c.__proto__.__proto__);
b.k++
console.log(b.k);
console.log(c.__proto__);
console.log(c.k);

function f(){
    console.log("hello");
}

console.log(f.__proto__.__proto__);


