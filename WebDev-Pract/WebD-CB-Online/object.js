//Creating Objects in JS
//Objects can be created without the class in JS
let obj = {
    a : 10,
    b : true,
    c : "Hello"
}

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

//Nested Objects

let nestedobj = {
    p : 10,
    q : 5,
    r : {
      r1 : 7,
      r2 : 11
    }
}

console.log(nestedobj.p);
console.log(nestedobj.r.r1);

//Adding new thing to an object

obj.d = "Welcome To Development";
console.log(obj);

//Increment a
obj.a = obj.a + 1;
console.log(obj);

//Deletion
delete obj.b;
console.log(obj);