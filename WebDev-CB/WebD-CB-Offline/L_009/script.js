// function f(){
//     return 1;
// }

// f.k=1;
// console.log(f.k);
// console.log(f());

//COnstructor


// function Person2(){
//     return 1; 
// }

// let p = Person2();
// let p1 = new Person2();

// console.log(p);  
// console.log(p1);

// function Person1(){
//     return {a:1}; 
// }

// let p2 = Person1();
// let p3 = new Person1();

// console.log(p2);  
// console.log(p3);

//Constructors are never meant to return anything

function Person(name,age){
    // this.age = age; 
    //Make age private
    this.isAdult = function(){
        return age>=18;
    }
    this.name = name;
    this.getfirstname = function(){
        return this.name.split(' ')[0];
    }
    this.update = function(xyz){
        let a = this.name.split(' ');
        a[0] = xyz;
        this.name = a.join(' ');
    }
}
//window points to itself -- Circular binding

Person.staticfun = Person.prototype.staticfun  = function(){
    console.log('This is static')
}

let p = new Person('Harry Potter',18);
let p1 = new Person('XYZ',17);
console.log(p);
// console.log(p1); 
console.log("Welcome Mr. " + p.getfirstname());
// console.log(p.age); //now age is private 
// console.log(this == window); 
p.update('Achi');
console.log(p.name);

