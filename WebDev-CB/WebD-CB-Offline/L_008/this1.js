function origin(){
    console.log(this);
    function notorigin(){
        console.log(this);
    }
    notorigin();
}

origin();

let obj = {
    k:1,
    getp:function(){
        return this;
    },
    p:"hello"
}

console.log(obj.getp());


function f34(x,y){
    console.log(this);
    console.log(x+y);
}

f34.call(obj,10,20);
var s = f34.bind(obj);
console.log(s);

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person("Harry",19);